import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./events.css";
import PageBanner from "../components/PageBanner";
import { eventsData } from "./eventsdata";

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredEvents = useMemo(() => {
    if (activeFilter === "all") {
      return eventsData;
    }

    return eventsData.filter(
      (eventItem) => eventItem.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <div className="cr-wrapper-main events-main-page">
      <PageBanner
        image="/events/eventsbanner.png"
        title={
          <>
            Events & <br />
            Conferences
          </>
        }
        description=""
        alt="Events and Conferences"
      />

      <section className="events-main-intro">
        <div className="events-main-intro-content">
          <h2>Moments That Define Our Journey</h2>
        </div>
      </section>

      <section className="events-card-listing-section">
        <div className="ev-filter-navigation-sticky">
          <div className="ev-filter-tabs-container">
            <button
              type="button"
              className={`ev-tab-item-btn ${
                activeFilter === "all" ? "ev-active-tab" : ""
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>

            <button
              type="button"
              className={`ev-tab-item-btn ${
                activeFilter === "events" ? "ev-active-tab" : ""
              }`}
              onClick={() => setActiveFilter("events")}
            >
              Events
            </button>

            <button
              type="button"
              className={`ev-tab-item-btn ${
                activeFilter === "participation" ? "ev-active-tab" : ""
              }`}
              onClick={() => setActiveFilter("participation")}
            >
              Participation
            </button>

            <button
              type="button"
              className={`ev-tab-item-btn ${
                activeFilter === "conferences" ? "ev-active-tab" : ""
              }`}
              onClick={() => setActiveFilter("conferences")}
            >
              Conferences
            </button>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="events-empty-state">
            <h3>No events available</h3>

            <p>
              There are currently no events available in this category.
            </p>
          </div>
        ) : (
          <div className="events-initiative-grid">
            {filteredEvents.map((item) => (
              <Link
                to={`/events/${item.slug}`}
                className="events-initiative-card"
                key={item.id}
              >
                <div className="events-initiative-card-image-wrapper">
                  <img
                    src={item.cardImage || item.images[0]}
                    alt={item.title}
                    className="events-initiative-card-image"
                  />
                </div>

                <div className="events-initiative-card-content">
                  <span className="events-card-category">
                    {item.categoryLabel}
                  </span>

                  <h3>{item.title}</h3>

                  <span className="events-initiative-card-button">
                    Explore Event
                    <strong>→</strong>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Events;