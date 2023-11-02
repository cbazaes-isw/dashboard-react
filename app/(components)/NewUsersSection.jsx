import NewUserCard from "./NewUserCard";

const NewUsersSection = () => {
  const newUsers = [
    {
      profileUrl: "/profile-2.jpg",
      name: "Ketut",
      lastSeen: "54 Min Ago",
    },
    {
      profileUrl: "/profile-3.jpg",
      name: "Kiyan",
      lastSeen: "3 Hours Ago",
    },
    {
      profileUrl: "/profile-4.jpg",
      name: "Tainá",
      lastSeen: "6 Hours Ago",
    },
    {
      profileUrl: "/plus.svg",
      name: "More",
      lastSeen: "New User",
    },
  ];

  return (
    <div className="new-users">
      <h2>New Users</h2>
      <div className="user-list">
        {newUsers.map((u) => (
          <NewUserCard key={u.name} newUser={u} />
        ))}
      </div>
    </div>
  );
};

export default NewUsersSection;
