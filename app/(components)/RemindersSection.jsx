import ReminderItem from "./ReminderItem";

const RemindersSection = () => {
  const notifications = [
    {
      icon: "volume_up",
      title: "Workshop v1.0",
      schedule: "08:00 AM - 12:00 PM",
      active: true,
    },
    {
      icon: "edit",
      title: "Workshop v2.0",
      schedule: "14:00 PM - 16:00 PM",
      active: false,
    },
  ];

  return (
    <div className="reminders">
      <div className="header">
        <h2>Reminders</h2>
        <span className="material-icons-sharp">notifications_none</span>
      </div>

      {notifications.map((n, i) => (
        <ReminderItem key={i} notification={n} />
      ))}

      <div className="notification add-reminder">
        <div>
          <span className="material-icons-sharp">add</span>
          <h3>Add Reminder</h3>
        </div>
      </div>
    </div>
  );
};

export default RemindersSection;
