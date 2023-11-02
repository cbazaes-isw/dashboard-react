import Image from "next/image";

const Toggle = () => {
  return (
    <div className="toggle">
      <div className="logo">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={50}
          height={50}
          priority={true}
        />
        <h2>
          Appian <span className="danger">Graphics</span>
        </h2>
      </div>
      <div className="close" id="close-btn">
        <span className="material-icons-sharp"> close </span>
      </div>
    </div>
  );
};

export default Toggle;
