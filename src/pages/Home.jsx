import { Link } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";
import AnnouncementCard from "../components/AnnouncementCard";
import FeatureCard from "../components/FeatureCard";

function Home() {

  // =========================
  // ANNOUNCEMENT DATA
  // =========================

  const announcements = [
    {
      icon: "📚",
      category: "Academics",
      title: "Internal Examination Schedule",
      description:
        "The internal examination timetable has been released.",
      date: "May 20, 2026",
    },

    {
      icon: "📝",
      category: "Exams",
      title: "Semester Examination Notice",
      description:
        "Students can check the semester examination details.",
      date: "May 21, 2026",
    },

    {
      icon: "🎉",
      category: "Events",
      title: "College Cultural Fest",
      description:
        "Students can now register for the annual cultural event.",
      date: "May 28, 2026",
    },

    {
      icon: "💼",
      category: "Placements",
      title: "Campus Placement Drive",
      description:
        "Registration is now open for the upcoming placement drive.",
      date: "May 24, 2026",
    },

    {
      icon: "🚨",
      category: "Urgent",
      title: "Assignment Submission Deadline",
      description:
        "Students must submit their assignments before the deadline.",
      date: "May 22, 2026",
    },

    {
      icon: "📢",
      category: "Academics",
      title: "Workshop Registration Open",
      description:
        "Students can register for the upcoming technical workshop.",
      date: "May 30, 2026",
    },
  ];


  // =========================
  // SEARCH & CATEGORY STATE
  // =========================

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");


  // =========================
  // FILTER ANNOUNCEMENTS
  // =========================

  const filteredAnnouncements = announcements.filter(
    (announcement) => {

      const matchesSearch =
        announcement.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        announcement.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());


      const matchesCategory =
        selectedCategory === "All" ||
        announcement.category === selectedCategory;


      return matchesSearch && matchesCategory;
    }
  );


  return (

    <div className="home">

      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />


      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <div className="hero-badge">
            🔔 Smart Campus Platform
          </div>


          <h1>
            Smart Campus
            <br />
            <span>Announcements</span>
          </h1>


          <p>
            Stay updated with important college notices,
            events, exams, placements and alerts — anytime,
            anywhere.
          </p>


          <div className="hero-buttons">

            <a
              href="#announcements"
              className="primary-btn"
            >
              📢 Explore Announcements
            </a>


            <Link
              to="/login"
              className="secondary-btn"
            >
              🔐 Login
            </Link>

          </div>

        </div>


        {/* HERO DASHBOARD */}

        <div className="hero-dashboard">

          <div className="dashboard-header">

            <div>

              <h3>
                🔔 NotifyHub
              </h3>

              <p>
                Latest Notifications
              </p>

            </div>


            <div className="online">
              ● Live
            </div>

          </div>


          <div className="notice">

            <div className="notice-icon academic">
              📚
            </div>

            <div>

              <h4>
                Internal Exams Schedule
              </h4>

              <p>
                Examination timetable released
              </p>

              <small>
                Today
              </small>

            </div>

          </div>


          <div className="notice">

            <div className="notice-icon placement">
              💼
            </div>

            <div>

              <h4>
                Placement Drive
              </h4>

              <p>
                Registration is now open
              </p>

              <small>
                Tomorrow
              </small>

            </div>

          </div>


          <div className="notice urgent">

            <div className="notice-icon">
              🚨
            </div>

            <div>

              <h4>
                Important Notice
              </h4>

              <p>
                Deadline approaching
              </p>

              <small>
                Urgent
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          ANNOUNCEMENTS SECTION
      ========================= */}

      <section
        className="announcements-section"
        id="announcements"
      >

        <div className="section-heading">

          <span>
            📢 NOTIFICATIONS
          </span>


          <h2>
            Latest <strong>Announcements</strong>
          </h2>


          <p>
            Stay informed about the latest updates
            from your campus.
          </p>

        </div>


        {/* SEARCH + FILTER */}

        <div className="announcement-controls">


          {/* SEARCH */}

          <div className="search-box">

            🔎

            <input
              type="text"
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>


          {/* CATEGORY BUTTONS */}

          <div className="category-buttons">

            {[
              "All",
              "Academics",
              "Exams",
              "Events",
              "Placements",
            ].map((category) => (

              <button
                key={category}

                className={
                  selectedCategory === category
                    ? "active-category"
                    : ""
                }

                onClick={() =>
                  setSelectedCategory(category)
                }
              >
                {category}
              </button>

            ))}

          </div>

        </div>


        {/* ANNOUNCEMENT CARDS */}

        <div className="announcement-grid">

          {filteredAnnouncements.length > 0 ? (

            filteredAnnouncements.map(
              (announcement, index) => (

                <AnnouncementCard
                  key={index}

                  icon={announcement.icon}

                  category={announcement.category}

                  title={announcement.title}

                  description={
                    announcement.description
                  }

                  date={announcement.date}
                />

              )
            )

          ) : (

            <div className="no-results">

              🔎

              <h3>
                No announcements found
              </h3>

              <p>
                Try another search or category.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =========================
          FEATURES SECTION
      ========================= */}

      <section
        className="features-section"
        id="features"
      >

        <div className="section-heading">

          <span>
            ⚡ WHY NOTIFYHUB?
          </span>


          <h2>
            Everything You Need,
            <strong> In One Place</strong>
          </h2>


          <p>
            NotifyHub makes campus communication
            faster, easier and more accessible.
          </p>

        </div>


        <div className="features-grid">


          <FeatureCard
            icon="⚡"
            title="Real-Time Updates"
            description="Get important announcements as soon as they are posted."
          />


          <FeatureCard
            icon="🔎"
            title="Search & Filter"
            description="Quickly find notices using keywords and categories."
          />


          <FeatureCard
            icon="🚨"
            title="Urgent Alerts"
            description="Important announcements are highlighted so you don't miss them."
          />


          <FeatureCard
            icon="📱"
            title="Access Anywhere"
            description="Access campus announcements from mobile, laptop or tablet."
          />

        </div>

      </section>


      {/* =========================
          URGENT ALERT
      ========================= */}

      <section className="urgent-section">

        <div className="urgent-content">

          <div className="urgent-symbol">
            🚨
          </div>


          <div>

            <span>
              IMPORTANT ALERT
            </span>


            <h2>
              Don't Miss Your Next Announcement
            </h2>


            <p>
              Stay connected with important campus
              updates, deadlines and events through NotifyHub.
            </p>

          </div>

        </div>


        <a
          href="#announcements"
          className="urgent-btn"
        >
          View All Notices →
        </a>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer
        className="footer"
        id="about"
      >

        <div className="footer-logo">
          🔔 Notify<span>Hub</span>
        </div>


        <p>
          Smart Campus Announcement Platform
        </p>


        <p className="copyright">
          © 2026 NotifyHub. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;