import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import "./careers.css";
import PageBanner from "../components/PageBanner";

// ============================================================================
// LIVE GOOGLE SHEET CSV ENDPOINT
// ============================================================================
const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRS6nVwXnLKzDXW5x71bal78MerNewkBKobuhLIc_aIkFBY7IZ4hVPTMb_ip9t_69mbGndTfMpFI7n2/pub?output=csv";

// Robust RFC-4180 client-side CSV parser handling newlines and double-quotes
const parseCSV = (text) => {
  const lines = [];
  let row = [""];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];

    if (c === '"') {
      if (inQuotes && next === '"') {
        row[row.length - 1] += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === "," && !inQuotes) {
      row.push("");
    } else if ((c === "\r" || c === "\n") && !inQuotes) {
      if (c === "\r" && next === "\n") {
        i++;
      }
      lines.push(row);
      row = [""];
    } else {
      row[row.length - 1] += c;
    }
  }

  if (row.length > 1 || row[0] !== "") {
    lines.push(row);
  }

  return lines;
};

const celebrationGalleries = [
  {
    id: "christmas",
    title: "Christmas Celebration",
    subtitle: "Joy, togetherness and festive cheer",
    cover: "/contact/celb-3.png",
    photos: [
      "/contact/celb-2.JPG",
      "/contact/celb-11.JPG",
      "/contact/celb-3.png",
      "/contact/celb-4.JPG",
      "/contact/celb-5.JPG",
      "/contact/celb-6.JPG",
      "/contact/celb-7.JPG",
      "/contact/celb-8.JPG",
      "/contact/celb-9.JPG",
      "/contact/celb-10.JPG",
      "/contact/celb-12.JPG",
      "/contact/celb-13.JPG",
      "/contact/celb-14.JPG",
      "/contact/celb-15.JPG",
      "/contact/celb-16.JPG",
      "/contact/celb-17.JPG",
      "/contact/celb-18.JPG",
      "/contact/celb-19.JPG",
      "/contact/celb-20.JPG",
      "/contact/celb-21.JPG",
      "/contact/celb-22.JPG",
    ],
  },
  {
    id: "diwali",
    title: "Diwali Celebration",
    subtitle: "Lights, happiness and shared moments",
    cover: "/contact/diwali-6.JPG",
    photos: [
      "/contact/diwali-1.Jpeg",
      "/contact/diwali-2.JPG",
      "/contact/diwali-3.JPG",
      "/contact/diwali-4.JPG",
      "/contact/diwali-5.JPG",
      "/contact/diwali-6.JPG",
      "/contact/diwali-7.JPG",
      "/contact/diwali-8.Jpeg",
      "/contact/diwali-9.JPG",
      "/contact/diwali-11.Jpeg",
      "/contact/diwali-12.Jpeg",
      "/contact/diwali-14.Jpeg",
      "/contact/diwali-15.JPG",
      "/contact/diwali-16.Jpeg",
      "/contact/diwali-17.JPG",
      "/contact/diwali-18.JPG",
      "/contact/diwali-19.JPG",
      "/contact/diwali-20.JPG",
      "/contact/diwali-21.JPG",
      "/contact/diwali-22.JPG",
      "/contact/diwali-23.JPG",
      "/contact/diwali-24.JPG",
      "/contact/diwali-25.JPG",
      "/contact/diwali-26.JPG",
    ],
  },
  {
    id: "annual-meet",
    title: "Annual Meet",
    subtitle: "Celebrating teamwork and achievements",
    cover: "/contact/annual-meet/annual-meet-1.jpg",
    photos: [
      "/contact/annual-meet/annual-meet-1.jpg",
      "/contact/annual-meet/annual-meet-2.jpg",
      "/contact/annual-meet/annual-meet-3.jpg",
      "/contact/annual-meet/annual-meet-4.jpg",
      "/contact/annual-meet/annual-meet-5.jpg",
      "/contact/annual-meet/annual-meet-6.jpg",
      "/contact/annual-meet/annual-meet-7.jpg",
      "/contact/annual-meet/annual-meet-8.jpg",
      "/contact/annual-meet/annual-meet-9.jpg",
      "/contact/annual-meet/annual-meet-10.jpg",
      "/contact/annual-meet/annual-meet-11.jpg",
      "/contact/annual-meet/annual-meet-12.jpg",
      "/contact/annual-meet/annual-meet-13.jpg",
      "/contact/annual-meet/annual-meet-14.jpg",
    ],
  },
];

const Careers = () => {
  const [openPositions, setOpenPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [expandedJobId, setExpandedJobId] = useState(null);

  const thumbnailRefs = useRef([]);

  // Fetch jobs dynamically with cache-busting
  useEffect(() => {
    if (!GOOGLE_SHEET_CSV_URL) {
      setIsLoading(false);
      return;
    }

    const cacheBuster = `&t=${Date.now()}`;
    const targetUrl = GOOGLE_SHEET_CSV_URL.includes("?")
      ? `${GOOGLE_SHEET_CSV_URL}${cacheBuster}`
      : `${GOOGLE_SHEET_CSV_URL}?${cacheBuster.substring(1)}`;

    fetch(targetUrl, { cache: "no-store" })
      .then((res) => res.text())
      .then((csvText) => {
        const rows = parseCSV(csvText);

        if (!rows || rows.length <= 1) {
          setIsLoading(false);
          return;
        }

        // Header check: Determine if Column 0 is a Timestamp
        const headerRow = rows[0] || [];
        const firstColHeader = (headerRow[0] || "").toLowerCase().trim();
        const hasTimestampHeader =
          firstColHeader.includes("timestamp") ||
          firstColHeader.includes("date") ||
          firstColHeader.includes("time");

        const offset = hasTimestampHeader ? 1 : 0;

        const parsedJobs = rows
          .slice(1)
          .map((cols, index) => {
            const clean = (val) => (val || "").trim();

            const department = clean(cols[offset]) || "Pharmaceuticals";
            const title = clean(cols[offset + 1]);
            const location = clean(cols[offset + 2]) || "Mumbai / Pan India";
            const type = clean(cols[offset + 3]) || "Full-Time";
            const experience = clean(cols[offset + 4]) || "Experienced";
            const overview = clean(cols[offset + 5]) || "";
            const rawResp = clean(cols[offset + 6]) || "";
            const rawSkills = clean(cols[offset + 7]) || ""; // Col I: Required Skills
            const rawStatus = clean(cols[offset + 8]).toLowerCase(); // Col J: Status

            // Default blank status directly to active
            const status = rawStatus || "active";

            // Responsibilities split by newline or semicolon
            const responsibilities = rawResp
              ? rawResp
                  .split(/[\r\n;]+/)
                  .map((r) => r.replace(/^[-*•]\s*/, "").trim())
                  .filter(Boolean)
              : [];

            // Skills split by comma, newline or semicolon
            const skills = rawSkills
              ? rawSkills
                  .split(/[,\r\n;]+/)
                  .map((s) => s.replace(/^[-*•]\s*/, "").trim())
                  .filter(Boolean)
              : [];

            return {
              id: `job-${index}`,
              department,
              title,
              location,
              type,
              experience,
              overview,
              responsibilities,
              skills,
              status,
            };
          })
          .filter((job) => {
            const hasTitle = Boolean(job.title);
            const isInactive =
              job.status === "inactive" ||
              job.status === "closed" ||
              job.status === "hide" ||
              job.status === "no";

            return hasTitle && !isInactive;
          });

        setOpenPositions(parsedJobs);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load positions from Google Sheet:", err);
        setIsLoading(false);
      });
  }, []);

  const toggleJobDetails = (id) => {
    setExpandedJobId((prev) => (prev === id ? null : id));
  };

  const handleApplyClick = (event, jobTitle) => {
    event.preventDefault();

    const recipient = "hr@zuviuslifesciences.in";
    const subject = `application for ${jobTitle}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
    const gmailFallbackUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipient
    )}&su=${encodeURIComponent(subject)}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(recipient).catch(() => {});
    }

    const start = Date.now();
    window.location.href = mailtoUrl;

    setTimeout(() => {
      if (Date.now() - start < 1500) {
        window.open(gmailFallbackUrl, "_blank", "noopener,noreferrer");
      }
    }, 500);
  };

  const openGallery = (gallery) => {
    setSelectedGallery(gallery);
    setSelectedImageIndex(null);
    setIsZoomed(false);
  };

  const closeGallery = useCallback(() => {
    setSelectedGallery(null);
    setSelectedImageIndex(null);
    setIsZoomed(false);
  }, []);

  const openImage = (index) => {
    setSelectedImageIndex(index);
    setIsZoomed(false);
  };

  const closeImage = useCallback(() => {
    setSelectedImageIndex(null);
    setIsZoomed(false);
  }, []);

  const showPreviousImage = useCallback(() => {
    if (!selectedGallery) return;

    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === 0
        ? selectedGallery.photos.length - 1
        : currentIndex - 1;
    });

    setIsZoomed(false);
  }, [selectedGallery]);

  const showNextImage = useCallback(() => {
    if (!selectedGallery) return;

    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === selectedGallery.photos.length - 1
        ? 0
        : currentIndex + 1;
    });

    setIsZoomed(false);
  }, [selectedGallery]);

  useEffect(() => {
    if (!selectedGallery) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (selectedImageIndex !== null) {
          closeImage();
        } else {
          closeGallery();
        }
      }

      if (selectedImageIndex !== null && event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (selectedImageIndex !== null && event.key === "ArrowRight") {
        showNextImage();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    selectedGallery,
    selectedImageIndex,
    closeGallery,
    closeImage,
    showPreviousImage,
    showNextImage,
  ]);

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const activeThumbnail = thumbnailRefs.current[selectedImageIndex];

    if (activeThumbnail) {
      activeThumbnail.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedImageIndex]);

  return (
    <div className="cr-wrapper-main">
      <PageBanner
        image="/contact/careerbanner.png"
        title={
          <>
            Zuvius <br />
            LifeSciences
          </>
        }
        description=""
        alt="Zuvius LifeSciences Careers"
      />

      <section className="cr-why-join-block">
        <div className="cr-center-heading-zone">
          <p className="cr-badge-text cr-center-txt">WHY JOIN US</p>
          <h2 className="cr-section-main-title">Grow With Purpose</h2>
          <p className="cr-section-subtitle-prose">
            At Zuvius Lifesciences, we believe careers grow best in an
            environment built on learning, integrity, collaboration and
            meaningful work.
          </p>
        </div>

        <div className="cr-cards-triple-grid">
          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">⚖️</span>
            </div>
            <div className="cr-card-content-side">
              <h3>Work-Life Balance</h3>
              <p>
                We want our brave Samaritans to live their best life while
                making this world a better place. That’s why we are busy
                cultivating a company culture of flexibility, transparency,
                learning and belonging.
              </p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">🌱</span>
            </div>
            <div className="cr-card-content-side">
              <h3>Leadership</h3>
              <p>
                At Zuvius, we nourish the novice into learners and mould the
                learners to become leaders. With our advanced trainings,
                on-field practice and leadership lessons, we bring out the best
                in you.
              </p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">📚</span>
            </div>
            <div className="cr-card-content-side">
              <h3>Learnings</h3>
              <p>
                We like to have a bunch of curious people in our team. People
                who love to know things, keep digging deep and never stop
                learning. For them, we provide ongoing learning opportunities.
              </p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">💙</span>
            </div>
            <div className="cr-card-content-side">
              <h3>ZuviCare</h3>
              <p>
                Zuvius is all about living life to the fullest in health and
                happiness. Beyond healthy snacks and nutricare, we organize
                regular workshops on mindfulness and employee wellbeing.
              </p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">🏆</span>
            </div>
            <div className="cr-card-content-side">
              <h3>Reward and Recognition</h3>
              <p>
                We value the hard work and tireless efforts our employees put
                in. We have fair pay policies, rewards and recognitions to
                honour their valuable achievements.
              </p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">🤝</span>
            </div>
            <div className="cr-card-content-side">
              <h3>Equality</h3>
              <p>
                We value the worth of your work. At Zuvius, gender, colour and
                category do not matter. We foster an inclusive environment for
                anyone who possesses the right talent and skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cr-culture-split-block-compact">
        <div className="cr-desktop-inner">
          <div className="cr-culture-left-panel">
            <p className="cr-badge-text">OUR CULTURE</p>
            <h2 className="cr-section-main-title">
              Professional. Supportive. <br />
              Growth-Focused.
            </h2>
            <p className="cr-culture-body-prose">
              We work in an environment where every minute is driven by this
              intense passion of saving lives. Our energies are directed
              towards a unified vision of uplifting the quality of life with or
              without cancer. We strive everyday to make a better treatment
              possible, a faster diagnosis accessible. With our heads buried in
              a purpose much bigger than everything else, there is no place for
              anything but positivity and optimism!
            </p>
          </div>

          <div className="cr-culture-right-panel">
            <div className="cr-culture-frame-wrapper-slim">
              <img
                src="/contact/careerimage2.jpeg"
                alt="Zuvius corporate culture"
                className="cr-culture-photo-compact"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cr-life-gallery-block">
        <div className="cr-center-heading-zone">
          <p className="cr-badge-text cr-center-txt">LIFE AT ZUVIUS</p>
          <h2 className="cr-section-main-title">Moments From Our Workplace</h2>
          <p className="cr-section-subtitle-prose">
            Explore celebrations, events and memorable experiences shared by
            our team.
          </p>
          <div className="cr-center-accent-line" />
        </div>

        <div className="cr-celebration-card-grid">
          {celebrationGalleries.map((gallery) => (
            <button
              type="button"
              className="cr-celebration-card"
              key={gallery.id}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                openGallery(gallery);
              }}
            >
              <div className="cr-celebration-image-wrapper">
                <img
                  src={gallery.cover}
                  alt={gallery.title}
                  className="cr-celebration-cover-image"
                />
                <div className="cr-celebration-overlay">
                  <span className="cr-gallery-view-icon">↗</span>
                  <span>View Gallery</span>
                </div>
              </div>

              <div className="cr-celebration-card-content">
                <div>
                  <h3>{gallery.title}</h3>
                  <p>{gallery.subtitle}</p>
                </div>
                <span className="cr-celebration-arrow">→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS FEED */}
      <section className="cr-jobs-section" id="open-positions">
        <div className="cr-center-heading-zone">
          <p className="cr-badge-text cr-center-txt">CURRENT OPENINGS</p>
          <h2 className="cr-section-main-title">Join Our Team</h2>
          <p className="cr-section-subtitle-prose">
            Discover active job roles across oncology sales, formulation
            research, quality assurance, regulatory affairs, and corporate
            operations.
          </p>
          <div className="cr-center-accent-line" />
        </div>

        <div className="cr-jobs-list">
          {isLoading ? (
            <div style={{ textAlign: "center", padding: "40px 0", color: "#687980" }}>
              Loading active positions...
            </div>
          ) : openPositions.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 0", color: "#687980" }}>
              No open vacancies currently listed. Please submit your CV via the form below.
            </div>
          ) : (
            openPositions.map((job) => {
              const hasExpandedContent =
                (job.responsibilities && job.responsibilities.length > 0) ||
                (job.skills && job.skills.length > 0);
              const isExpanded = expandedJobId === job.id;

              return (
                <article
                  className={`cr-job-card ${isExpanded ? "cr-job-card-open" : ""}`}
                  key={job.id}
                >
                  <div className="cr-job-card-header">
                    <div className="cr-job-title-group">
                      <span className="cr-job-dept-badge">{job.department}</span>
                      <h3 className="cr-job-title">{job.title}</h3>
                      <div className="cr-job-meta-chips">
                        <span className="cr-job-chip">📍 {job.location}</span>
                        <span className="cr-job-chip">💼 {job.type}</span>
                        <span className="cr-job-chip">⏳ {job.experience}</span>
                      </div>
                    </div>

                    <div className="cr-job-card-actions">
                      {hasExpandedContent && (
                        <button
                          type="button"
                          className="cr-job-toggle-btn"
                          onClick={() => toggleJobDetails(job.id)}
                        >
                          {isExpanded ? "Hide Details ↑" : "View Job Details ↓"}
                        </button>
                      )}

                      <a
                        href={`mailto:hr@zuviuslifesciences.in?subject=${encodeURIComponent(
                          `application for ${job.title}`
                        )}`}
                        className="cr-job-apply-btn"
                        onClick={(e) => handleApplyClick(e, job.title)}
                        title={`Apply for ${job.title}`}
                      >
                        Apply Now <span>↗</span>
                      </a>
                    </div>
                  </div>

                  {job.overview && <p className="cr-job-overview">{job.overview}</p>}

                  {/* Expandable Section with Responsibilities + Required Skills */}
                  {isExpanded && hasExpandedContent && (
                    <div className="cr-job-expanded-content">
                      {job.responsibilities && job.responsibilities.length > 0 && (
                        <>
                          <div className="cr-job-subheading">Key Responsibilities:</div>
                          <ul className="cr-job-responsibilities-list">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx}>{resp}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {job.skills && job.skills.length > 0 && (
                        <div className="cr-job-skills-section">
                          <div className="cr-job-subheading">Required Skills:</div>
                          <div className="cr-job-skills-pills">
                            {job.skills.map((skill, idx) => (
                              <span className="cr-job-skill-pill" key={idx}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="cr-job-apply-inline">
                        <a
                          href={`mailto:hr@zuviuslifesciences.in?subject=${encodeURIComponent(
                            `application for ${job.title}`
                          )}`}
                          className="cr-action-btn-blue"
                          onClick={(e) => handleApplyClick(e, job.title)}
                        >
                          APPLY FOR THIS ROLE →
                        </a>
                        <span className="cr-job-email-hint">
                          Sends email to <strong>hr@zuviuslifesciences.in</strong>
                        </span>
                      </div>
                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>

        <div className="cr-general-apply-box">
          <div className="cr-general-apply-text">
            <h3>Don't see your specific role?</h3>
            <p>
              We are constantly seeking passionate talent across all
              pharmaceutical domains. Send your CV directly to our HR team and
              we will get in touch when an opening aligns with your expertise.
            </p>
          </div>

          <div className="cr-general-apply-action">
            <a
              href="mailto:hr@zuviuslifesciences.in?subject=application%20for%20General%20Openings"
              className="cr-action-btn-blue"
              onClick={(e) => handleApplyClick(e, "General Openings")}
            >
              Email Your Resume <span>→</span>
            </a>
            <div className="cr-email-callout">
              Direct Email:{" "}
              <a
                href="mailto:hr@zuviuslifesciences.in?subject=application%20for%20General%20Openings"
                onClick={(e) => handleApplyClick(e, "General Openings")}
              >
                hr@zuviuslifesciences.in
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ALL PHOTOS GALLERY POPUP */}
      {selectedGallery &&
        createPortal(
          <div
            className="cr-event-gallery-backdrop"
            role="presentation"
            onClick={closeGallery}
          >
            <div
              className="cr-event-gallery-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedGallery.title} gallery`}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="cr-event-gallery-header">
                <div>
                  <p>LIFE AT ZUVIUS</p>
                  <h2>{selectedGallery.title}</h2>
                  <span>
                    {selectedGallery.photos.length}{" "}
                    {selectedGallery.photos.length === 1 ? "Photo" : "Photos"}
                  </span>
                </div>
                <button
                  type="button"
                  className="cr-event-gallery-close"
                  onClick={closeGallery}
                  aria-label="Close gallery"
                >
                  ×
                </button>
              </div>

              <div className="cr-event-photo-scroll-area">
                <div className="cr-event-photo-grid">
                  {selectedGallery.photos.map((photo, index) => (
                    <button
                      type="button"
                      className="cr-event-photo-card"
                      key={`${selectedGallery.id}-${index}`}
                      onClick={() => openImage(index)}
                      aria-label={`Open photo ${index + 1}`}
                    >
                      <img
                        src={photo}
                        alt={`${selectedGallery.title} ${index + 1}`}
                      />
                      <div className="cr-event-photo-overlay">
                        <span className="cr-event-zoom-symbol">⌕</span>
                        <span>View Photo</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* SINGLE PHOTO LIGHTBOX */}
      {selectedGallery &&
        selectedImageIndex !== null &&
        createPortal(
          <div
            className="cr-photo-lightbox-backdrop"
            role="presentation"
            onClick={closeImage}
          >
            <div
              className="cr-photo-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedGallery.title} photo ${
                selectedImageIndex + 1
              }`}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="cr-photo-lightbox-topbar">
                <div className="cr-photo-title-counter">
                  <span className="cr-photo-lightbox-title">
                    {selectedGallery.title}
                  </span>
                  <span className="cr-photo-counter">
                    {selectedImageIndex + 1} / {selectedGallery.photos.length}
                  </span>
                </div>

                <div className="cr-photo-lightbox-actions">
                  <button
                    type="button"
                    onClick={() => setIsZoomed((current) => !current)}
                  >
                    {isZoomed ? "Zoom Out −" : "Zoom In +"}
                  </button>
                  <button
                    type="button"
                    className="cr-photo-close-button"
                    onClick={closeImage}
                    aria-label="Close image"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div
                className={`cr-photo-image-stage ${
                  isZoomed ? "cr-photo-image-stage-zoomed" : ""
                }`}
              >
                <button
                  type="button"
                  className="cr-photo-arrow cr-photo-arrow-left"
                  onClick={showPreviousImage}
                  aria-label="Previous photo"
                >
                  ‹
                </button>

                <div className="cr-photo-image-scroll">
                  <img
                    src={selectedGallery.photos[selectedImageIndex]}
                    alt={`${selectedGallery.title} ${selectedImageIndex + 1}`}
                    onClick={() => setIsZoomed((current) => !current)}
                  />
                </div>

                <button
                  type="button"
                  className="cr-photo-arrow cr-photo-arrow-right"
                  onClick={showNextImage}
                  aria-label="Next photo"
                >
                  ›
                </button>
              </div>

              <div className="cr-photo-thumbnail-strip">
                {selectedGallery.photos.map((photo, index) => (
                  <button
                    type="button"
                    key={`${selectedGallery.id}-thumbnail-${index}`}
                    ref={(element) => {
                      thumbnailRefs.current[index] = element;
                    }}
                    className={`cr-photo-thumbnail ${
                      selectedImageIndex === index
                        ? "cr-photo-thumbnail-active"
                        : ""
                    }`}
                    onClick={() => openImage(index)}
                    aria-label={`Open photo ${index + 1}`}
                  >
                    <img
                      src={photo}
                      alt={`${selectedGallery.title} thumbnail ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Careers;