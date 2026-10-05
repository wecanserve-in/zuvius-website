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

  // Dragging state
  const [position, setPosition] = useState({ x: null, y: null });
  const isDraggingRef = useRef(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const elementStartPos = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);

  // Default initial position: Top-Right right below the fixed navbar
  useEffect(() => {
    const initialX = window.innerWidth - 68; // 24px from right edge (44px width)
    const initialY = 92; // Just below the 76px-82px navbar
    setPosition({ x: initialX, y: initialY });
  }, []);

  useEffect(() => {
    // 1. Dynamic counter and number shield (no ESLint escape warnings)
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

    // 2. DOM Virtual DOM safety patch
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

    // 3. Read active language from Google cookie
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

    // 5. Cleanup banner & styles
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
      @keyframes zuviusMenuDrop {
        from {
          opacity: 0;
          transform: scale(0.92);
        }
        to {
          opacity: 1;
          transform: scale(1);
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

  // ================= DRAG HANDLERS (MOUSE & TOUCH) =================
  const handlePointerDown = (e) => {
    if (e.button && e.button !== 0) return;

    isDraggingRef.current = true;
    hasMovedRef.current = false;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    dragStartPos.current = { x: clientX, y: clientY };
    elementStartPos.current = { x: position.x, y: position.y };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchmove", handlePointerMove, { passive: false });
    window.addEventListener("touchend", handlePointerUp);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const deltaX = clientX - dragStartPos.current.x;
    const deltaY = clientY - dragStartPos.current.y;

    if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
      hasMovedRef.current = true;
      if (e.cancelable) e.preventDefault();
    }

    let newX = elementStartPos.current.x + deltaX;
    let newY = elementStartPos.current.y + deltaY;

    // Viewport boundaries
    const maxX = window.innerWidth - 56;
    const maxY = window.innerHeight - 56;
    newX = Math.max(12, Math.min(newX, maxX));
    newY = Math.max(80, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    window.removeEventListener("mousemove", handlePointerMove);
    window.removeEventListener("mouseup", handlePointerUp);
    window.removeEventListener("touchmove", handlePointerMove);
    window.removeEventListener("touchend", handlePointerUp);
  };

  const handleCircleClick = () => {
    if (hasMovedRef.current) return;
    setIsOpen((prev) => !prev);
  };

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

  if (position.x === null) return null;

  // Dropdown direction adapts depending on vertical position
  const opensUpward = position.y > window.innerHeight / 2;

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />

      <aside
        ref={containerRef}
        style={{
          ...styles.dragContainer,
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        aria-label="Language Selector"
        className="notranslate"
        translate="no"
      >
        {/* Clean circle button without globe icon */}
        <button
          type="button"
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
          onClick={handleCircleClick}
          style={{
            ...styles.circleBtn,
            boxShadow: isOpen
              ? "0 10px 24px rgba(0, 138, 154, 0.45)"
              : "0 6px 18px rgba(16, 53, 110, 0.22)",
          }}
          aria-expanded={isOpen}
          title="Drag to reposition, Click to change language"
        >
          <span style={styles.activeCode}>{activeLang.code.toUpperCase()}</span>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            style={{
              ...styles.card,
              ...(opensUpward ? styles.cardUpward : styles.cardDownward),
            }}
          >
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
      </aside>
    </>
  );
}

const styles = {
  dragContainer: {
    position: "fixed",
    zIndex: 999999,
    userSelect: "none",
    touchAction: "none",
  },
  circleBtn: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #008a9a 0%, #0ea8ba 100%)",
    color: "#ffffff",
    border: "2px solid rgba(255, 255, 255, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "grab",
    outline: "none",
    transition: "transform 0.15s ease",
  },
  activeCode: {
    fontSize: "0.82rem",
    fontWeight: "900",
    letterSpacing: "0.06em",
    lineHeight: 1,
  },
  card: {
    position: "absolute",
    right: 0,
    width: "215px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    border: "1px solid #dfeaf8",
    boxShadow: "0 18px 40px rgba(16, 53, 110, 0.15)",
    overflow: "hidden",
    animation: "zuviusMenuDrop 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
  },
  cardDownward: {
    top: "calc(100% + 10px)",
  },
  cardUpward: {
    bottom: "calc(100% + 10px)",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 14px 8px 14px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #f0f0f0",
  },
  brandAccentBar: {
    width: "4px",
    height: "12px",
    backgroundColor: "#008a9a",
    borderRadius: "20px",
  },
  cardTitle: {
    fontSize: "0.65rem",
    fontWeight: "900",
    letterSpacing: "0.08em",
    color: "#008a9a",
  },
  menuList: {
    padding: "6px",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  menuItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 10px",
    borderTop: "none",
    borderRight: "none",
    borderBottom: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    outline: "none",
  },
  itemLeft: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
  },
  langBadge: {
    fontSize: "0.68rem",
    fontWeight: "800",
    padding: "3px 6px",
    borderRadius: "5px",
    letterSpacing: "0.04em",
  },
  nameBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  },
  nativeName: {
    fontSize: "0.82rem",
    fontWeight: "700",
    lineHeight: 1.2,
  },
  englishName: {
    fontSize: "0.68rem",
    color: "#687386",
    marginTop: "1px",
    fontWeight: "500",
  },
  checkIcon: {
    fontSize: "0.85rem",
    fontWeight: "900",
    color: "#008a9a",
  },
};