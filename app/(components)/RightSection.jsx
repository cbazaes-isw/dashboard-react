import Script from "next/script";
import RemindersSection from "./RemindersSection";
import Image from "next/image";

const RightSection = () => {
  return (
    <div className="right-section">
      <div className="nav">
        <button id="menu-btn">
          <span className="material-icons-sharp">menu</span>
        </button>
        <div className="dark-mode">
          <span className="material-icons-sharp active">light_mode</span>
          <span className="material-icons-sharp">dark_mode</span>
        </div>

        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>Reza</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <Image
              src={"/profile-1.jpg"}
              alt="profile"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>

      <div className="user-profile">
        <div className="logo">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={50}
            height={50}
            priority={true}
          />
          <h2>Appian Graphics</h2>
          <p>Fullstack Web Developer</p>
        </div>
      </div>

      <RemindersSection />

      <Script src="/mode.js" />
    </div>
  );
};

export default RightSection;
