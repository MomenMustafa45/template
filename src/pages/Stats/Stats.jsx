import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/stats.css";
import StatsCard from "../../UI/stats-card/StatsCard";
import {
  faEnvelope,
  faFolder,
  faMugHot,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const Stats = () => {
  return (
    <div className="stats-parent">
      <StatsCard
        iconName={<FontAwesomeIcon icon={faMugHot} size="xl" />}
        number={1236}
        text="Coffee Drinks"
      />
      <StatsCard
        iconName={<FontAwesomeIcon icon={faFolder} size="xl" />}
        number={256}
        text="Completed Projects"
      />
      <StatsCard
        iconName={<FontAwesomeIcon icon={faEnvelope} size="xl" />}
        number={1743}
        text="Mail Sent"
      />
      <StatsCard
        iconName={<FontAwesomeIcon icon={faTrophy} size="xl" />}
        number={17}
        text="Awards Received"
      />
    </div>
  );
};

export default Stats;
