const RecentOrderItem = ({ recentOrderItem }) => {
  const mapStatusClass = {
    declined: "danger",
    pending: "warning",
    active: "primary",
  };

  return (
    <tr>
      <td>{recentOrderItem.productName}</td>
      <td>{recentOrderItem.productNumber}</td>
      <td>{recentOrderItem.paymentStatus}</td>
      <td className={mapStatusClass[recentOrderItem.status]}>
        {recentOrderItem.status}
      </td>
      <td className="primary">Details</td>
    </tr>
  );
};

export default RecentOrderItem;
