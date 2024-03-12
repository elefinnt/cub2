interface Stats {
  title?: string;
  text?: string;
}

interface StatsProps {
  statsData: Stats[];
  className?: string;
}

const StatsList: React.FC<StatsProps> = ({ statsData, className }) => {
  return (
    <div>
      <div className="stats-list">
        {statsData.map((stat, i) => (
          <div className="stats-list-col text-white" key={i}>
            <div className="stats-list-title">{stat.title}</div>

            <div className="stats-list-text">{stat.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsList;
