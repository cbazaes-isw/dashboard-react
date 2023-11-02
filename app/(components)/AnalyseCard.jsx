const AnalyseCard = ({ analyseCard }) => {
  return (
    <div className={analyseCard.type}>
      <div className="status">
        <div className="info">
          <h3>{analyseCard.title}</h3>
          <h1>{analyseCard.value}</h1>
        </div>
        <div className="progresss">
          <svg>
            <circle cx="38" cy="38" r="36"></circle>
          </svg>
          <div className="percentage">
            <p>{analyseCard.percentage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyseCard;
