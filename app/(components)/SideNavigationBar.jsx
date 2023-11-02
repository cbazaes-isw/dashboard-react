import SideNavigationBarItem from "./SideNavigationBarItem";

const SideNavigationBar = () => {
  const navigationElements = [
    {
      icon: "dashboard",
      title: "Dashboard",
      navigateTo: "/DashboardPage",
      data: null,
      active: false,
    },
    {
      icon: "person_outline",
      title: "Users",
      navigateTo: "/UsersPage",
      data: null,
      active: false,
    },
    {
      icon: "receipt_long",
      title: "History",
      navigateTo: "/HistoryPage",
      data: null,
      active: false,
    },
    {
      icon: "insights",
      title: "Analytics",
      navigateTo: "/AnalyticsPage",
      data: null,
      active: true,
    },
    {
      icon: "mail_outline",
      title: "Tickets",
      navigateTo: "/TicketsPage",
      data: { "message-count": 13 },
      active: false,
    },
    {
      icon: "inventory",
      title: "Sales List",
      navigateTo: "/SalesListPage",
      data: null,
      active: false,
    },
    {
      icon: "report_gmailerrorred",
      title: "Reports",
      navigateTo: "/ReportsPage",
      data: null,
      active: false,
    },
    {
      icon: "settings",
      title: "Settings",
      navigateTo: "/SettingsPage",
      data: null,
      active: false,
    },
    {
      icon: "add",
      title: "New Login",
      navigateTo: "/NewLoginPage",
      data: null,
      active: false,
    },
    {
      icon: "logout",
      title: "Logout",
      navigateTo: "#",
      data: null,
      active: false,
    },
  ];

  return (
    <div className="sidebar">
      {navigationElements.map((n, i) => (
        <SideNavigationBarItem key={i} navigationItem={n} />
      ))}
    </div>
  );
};

export default SideNavigationBar;
