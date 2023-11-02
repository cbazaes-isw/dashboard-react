const ReminderItem = ({ notification }) => {
  return (
    <div className={`notification ${!notification.active ? "deactive" : ""}`}>
      <div className="icon">
        <span className="material-icons-sharp">{notification.icon}</span>
      </div>
      <div className="content">
        <div className="info">
          <h3>{notification.title}</h3>
          <small className="text-muted">{notification.schedule}</small>
        </div>
        <span className="material-icons-sharp">more_vert</span>
      </div>
    </div>
  );
};

export default ReminderItem;
