import { Link, useLocation } from "react-router-dom";

function NoticeDetails() {

  const location = useLocation();

  const notice = location.state?.notice;


  // If no notice was selected
  if (!notice) {

    return (

      <div className="notice-details-page">

        <div className="notice-details-card">

          <div className="notice-large-icon">
            🔎
          </div>

          <h1>
            Notice Not Found
          </h1>

          <p>
            Please go back to the announcements
            and select a notice.
          </p>

          <Link
            to="/"
            className="back-home-btn"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    );
  }


  return (

    <div className="notice-details-page">

      <div className="notice-details-card">


        {/* TOP */}

        <div className="notice-details-top">

          <div className="notice-large-icon">
            {notice.icon}
          </div>


          <span className="notice-details-category">
            {notice.category}
          </span>

        </div>


        {/* TITLE */}

        <h1>
          {notice.title}
        </h1>


        {/* DATE */}

        <div className="notice-date">
          📅 Published on {notice.date}
        </div>


        {/* DESCRIPTION */}

        <div className="notice-description">

          <h3>
            📢 Notice Details
          </h3>

          <p>
            {notice.description}
          </p>

          <p>
            Students are requested to check the
            official college communication for
            complete information and instructions
            regarding this announcement.
          </p>

        </div>


        {/* BACK */}

        <Link
          to="/"
          className="back-home-btn"
        >
          ← Back to Announcements
        </Link>

      </div>

    </div>

  );
}

export default NoticeDetails;