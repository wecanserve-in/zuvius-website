import React, { useEffect, useState, useRef } from "react";

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "fr", name: "French", native: "Français" },
  { code: "es", name: "Spanish", native: "Español" },
  { code: "ar", name: "Arabic", native: "العربية" },
];

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Counter / Number protection
    const isCounterOrNumber = (text) => {
      if (!text) return false;
      const clean = text.trim();
      const hasDigit = /\d/.test(clean);
      const isShort = clean.length <= 10;
      const isMathOrMetric = /^[\d\s,.+%]+$/.test(clean);
      return hasDigit && isShort && isMathOrMetric;
    };

    const protectElement = (el) => {
      if (el && el.nodeType === 1 && !el.classList.contains("notranslate")) {
        el.classList.add("notranslate");
        el.setAttribute("translate", "no");
      }
    };

    const scanAllNumbers = () => {
      const elements = document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, span, div, p, strong, b"
      );
      elements.forEach((el) => {
        if (el.children.length === 0 && isCounterOrNumber(el.innerText)) {
          protectElement(el);
          protectElement(el.parentElement);
        }
      });
    };
    scanAllNumbers();

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        const target =
          m.target.nodeType === 3 ? m.target.parentElement : m.target;
        if (target && isCounterOrNumber(target.innerText)) {
          protectElement(target);
          if (target.parentElement) {
            protectElement(target.parentElement);
          }
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    // 2. DOM Node crash shield
    if (typeof Node === "function" && Node.prototype) {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function (child) {
        if (child.parentNode !== this) return child;
        return originalRemoveChild.apply(this, arguments);
      };

      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function (newNode, referenceNode) {
        if (referenceNode && referenceNode.parentNode !== this) return newNode;
        return originalInsertBefore.apply(this, arguments);
      };
    }

    // 3. Read active language from cookie
    const match = document.cookie.match(/(^|;\s*)googtrans=([^;]+)/);
    if (match) {
      const lang = match[2].split("/").pop();
      if (["fr", "es", "ar", "en"].includes(lang)) {
        setCurrentLang(lang);
      }
    }

    // 4. Inject Google Translate
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr,es,ar",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }

    // 5. Hide banner and Google popups
    const style = document.createElement("style");
    style.id = "zuvius-theme-clean-styles";
    style.innerHTML = `
      body {
        top: 0px !important;
        position: static !important;
      }
      iframe.goog-te-banner-frame,
      .goog-te-banner-frame,
      .skiptranslate,
      #goog-gt-tt,
      .goog-te-balloon-frame {
        display: none !important;
        visibility: hidden !important;
        height: 0px !important;
      }
      font[style], .goog-text-highlight {
        background: transparent !important;
        box-shadow: none !important;
      }
      .notranslate, [translate="no"] {
        translate: no !important;
      }
      @keyframes zuviusMenuSlide {
        from {
          opacity: 0;
          transform: translateY(12px) scale(0.96);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `;
    document.head.appendChild(style);

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      observer.disconnect();
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    document.documentElement.dir = "ltr";
    document.documentElement.lang = langCode;

    if (langCode === "en") {
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${window.location.hostname}; path=/;`;
    } else {
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.hostname}; path=/;`;
    }

    const selectElem = document.querySelector(".goog-te-combo");
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event("change"));
    }

    window.location.reload();
  };

  const activeLang =
    languages.find((item) => item.code === currentLang) || languages[0];

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />

      <aside
        ref={containerRef}
        style={styles.container}
        aria-label="Language Selector"
        className="notranslate"
        translate="no"
      >
        {isOpen && (
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.brandAccentBar} />
              <span style={styles.cardTitle}>SELECT LANGUAGE</span>
            </div>

            <div style={styles.menuList}>
              {languages.map((lang) => {
                const isSelected = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => changeLanguage(lang.code)}
                    style={{
                      ...styles.menuItem,
                      backgroundColor: isSelected ? "#e9fbfa" : "transparent",
                      borderLeft: isSelected
                        ? "3px solid #008a9a"
                        : "3px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = "#f8fbfb";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    <div style={styles.itemLeft}>
                      <span
                        style={{
                          ...styles.langBadge,
                          backgroundColor: isSelected ? "#008a9a" : "#eef8fb",
                          color: isSelected ? "#ffffff" : "#008a9a",
                        }}
                      >
                        {lang.code.toUpperCase()}
                      </span>
                      <div style={styles.nameBlock}>
                        <span
                          style={{
                            ...styles.nativeName,
                            color: isSelected ? "#008a9a" : "#061943",
                          }}
                        >
                          {lang.native}
                        </span>
                        <span style={styles.englishName}>{lang.name}</span>
                      </div>
                    </div>

                    {isSelected && (
                      <span style={styles.checkIcon} aria-hidden="true">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          style={{
            ...styles.triggerBtn,
            boxShadow: isOpen
              ? "0 10px 30px rgba(0, 138, 154, 0.42)"
              : "0 6px 20px rgba(0, 138, 154, 0.28)",
          }}
          aria-expanded={isOpen}
          title="Change Website Language"
        >
          <span style={styles.globeIcon}>🌐</span>
          <span style={styles.switcherLabel}>Language</span>
          <span style={styles.activePillBadge}>
            {activeLang.code.toUpperCase()} ({activeLang.native})
          </span>
          <span
            style={{
              ...styles.arrow,
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▾
          </span>
        </button>
      </aside>
    </>
  );
}

const styles = {
  container: {
    position: "fixed",
    bottom: "28px",
    right: "28px",
    zIndex: 9999999,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "12px",
    fontFamily: "inherit",
  },
  triggerBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "linear-gradient(135deg, #008a9a 0%, #0ea8ba 100%)",
    color: "#ffffff",
    border: "1px solid rgba(255, 255, 255, 0.35)",
    borderRadius: "50px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    outline: "none",
  },
  globeIcon: {
    fontSize: "1rem",
    lineHeight: 1,
    opacity: 0.95,
  },
  switcherLabel: {
    fontSize: "0.85rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  activePillBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.22)",
    color: "#ffffff",
    fontSize: "0.72rem",
    fontWeight: "800",
    padding: "3px 8px",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    letterSpacing: "0.04em",
  },
  arrow: {
    fontSize: "0.75rem",
    lineHeight: 1,
    transition: "transform 0.25s ease",
    opacity: 0.9,
  },
  card: {
    width: "235px",
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    border: "1px solid #dfeaf8",
    boxShadow: "0 16px 42px rgba(16, 53, 110, 0.12)",
    overflow: "hidden",
    animation: "zuviusMenuSlide 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "13px 18px 11px 18px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #f0f0f0",
  },
  brandAccentBar: {
    width: "4px",
    height: "13px",
    backgroundColor: "#008a9a",
    borderRadius: "20px",
  },
  cardTitle: {
    fontSize: "0.7rem",
    fontWeight: "900",
    letterSpacing: "0.12em",
    color: "#008a9a",
  },
  menuList: {
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },
  menuItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 12px",
    borderTop: "none",
    borderRight: "none",
    borderBottom: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    outline: "none",
  },
  itemLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  langBadge: {
    fontSize: "0.72rem",
    fontWeight: "800",
    padding: "4px 7px",
    borderRadius: "6px",
    letterSpacing: "0.05em",
    transition: "all 0.2s ease",
  },
  nameBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  },
  nativeName: {
    fontSize: "0.88rem",
    fontWeight: "700",
    lineHeight: 1.25,
  },
  englishName: {
    fontSize: "0.72rem",
    color: "#687386",
    marginTop: "2px",
    fontWeight: "500",
  },
  checkIcon: {
    fontSize: "0.9rem",
    fontWeight: "900",
    color: "#008a9a",
  },
};