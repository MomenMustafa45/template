import "./services-card.css";

const ServicesCard = ({ icon }) => {
  return (
    <div className="srv-card-parent">
      <div className="icon-container">{icon}</div>
      <div className="text-container">
        <h3>Vorem amet intuitive</h3>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
          aliquet quam.
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
