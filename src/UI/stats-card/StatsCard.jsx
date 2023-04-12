import "./stats-card.css";

const StatsCard = ({ iconName, number, text }) => {
  // const [counter, setCounter] = useState(0)
  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         setCounter((prev) => prev += 1)
  //         console.log(counter)

  //     }, 0.1)
  //     if (counter >= number) {
  //         clearInterval(interval)
  //     }

  //     return () => {
  //         clearInterval(interval)
  //     }
  // }, [counter])

  return (
    <div className="stats-card">
      <p>{iconName}</p>
      <p className="num-p">{number}</p>
      <p>{text}</p>
    </div>
  );
};

export default StatsCard;
