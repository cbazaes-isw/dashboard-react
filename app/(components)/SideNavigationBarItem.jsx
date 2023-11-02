"use client";

import Link from "next/link";

const AdditionalInfo = ({ data }) => {
  if (!data) return null;

  const result = [];
  for (const [k, v] of Object.entries(data)) {
    result.push(
      <span key={k} className={k}>
        {v}
      </span>
    );
  }

  return result;
};

const HandleClick = (e) => {
  e.target.className = "active";
};

const SideNavigationBarItem = ({ navigationItem }) => {
  return (
    <Link
      href={navigationItem.navigateTo}
      className={navigationItem.active ? "active" : ""}
      onClick={HandleClick}
    >
      <span className="material-icons-sharp"> {navigationItem.icon} </span>
      <h3>{navigationItem.title}</h3>
      <AdditionalInfo data={navigationItem.data} />
    </Link>
  );
};

export default SideNavigationBarItem;
