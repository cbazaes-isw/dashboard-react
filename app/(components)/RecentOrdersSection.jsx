import RecentOrderItem from "./RecentOrderItem";

const RecentOrdersSection = () => {
  const orders = [
    {
      productName: "Javascript Tutorial 1",
      productNumber: "784512",
      paymentStatus: "Due",
      status: "pending",
    },
    {
      productName: "CSS Full Course 2",
      productNumber: "124578",
      paymentStatus: "Refunded",
      status: "declined",
    },
    {
      productName: "Flex-box tutorial 3",
      productNumber: "896523",
      paymentStatus: "Paid",
      status: "active",
    },
  ];

  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Numbers</th>
            <th>Payment</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <RecentOrderItem key={o.productNumber} recentOrderItem={o} />
          ))}
        </tbody>
      </table>
      <a href="#">Show All</a>
    </div>
  );
};

export default RecentOrdersSection;
