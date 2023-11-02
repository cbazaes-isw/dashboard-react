import Image from "next/image";

const NewUserCard = ({ newUser }) => {
  return (
    <div className="user">
      <Image src={newUser.profileUrl} alt="profile" width={50} height={50} />
      <h2>{newUser.name}</h2>
      <p>{newUser.lastSeen}</p>
    </div>
  );
};

export default NewUserCard;
