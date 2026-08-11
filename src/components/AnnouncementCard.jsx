import { useNavigate } from "react-router-dom";

function AnnouncementCard({
  icon,
  category,
  title,
  description,
  date
}) {

  const navigate = useNavigate();


  const handleViewNotice = () => {

    navigate("/notice", {

      state: {
        notice: {
          icon,
          category,
          title,
          description,
          date
        }
      }

    });

  };


  return (

    <div className="announcement-card">

      <div className="announcement-icon">
        {icon}
      </div>


      <div className="announcement-content">

        <span className="announcement-category">
          {category}
        </span>


        <h3>
          {title}
        </h3>


        <p>
          {description}
        </p>


        <div className="announcement-bottom">

          <span>
            📅 {date}
          </span>


          <button
            onClick={handleViewNotice}
          >
            View Notice →
          </button>

        </div>

      </div>

    </div>

  );
}

export default AnnouncementCard;