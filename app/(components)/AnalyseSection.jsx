import AnalyseCard from "./AnalyseCard";

const AnalyseSection = () => {
  const analyseCards = [
    {
      type: "sales",
      title: "Total Sales",
      value: "$64,024",
      percentage: "+81%",
    },
    {
      type: "visits",
      title: "Site Visit",
      value: "24,981",
      percentage: "-48%",
    },
    {
      type: "searches",
      title: "Searches",
      value: "14,147",
      percentage: "+21%",
    },
  ];

  return (
    <div className="analyse">
      {analyseCards.map((c) => (
        <AnalyseCard key={c.type} analyseCard={c} />
      ))}
    </div>
  );
};

export default AnalyseSection;
