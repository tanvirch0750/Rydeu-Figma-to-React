import bookImg from '../../assets/book-pay-later.png';
import flexibleImg from '../../assets/flexible-trip.png';
import freeImg from '../../assets/free-cancelation.png';
import supportImg from '../../assets/support.png';
import './features.css';

const features = [
  { id: 1, title: 'Book & pay later', img: bookImg },
  { id: 2, title: 'Flexible trip amendments', img: flexibleImg },
  { id: 3, title: 'Free cancellation', img: freeImg },
  { id: 4, title: '24/7 in-person support', img: supportImg },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container features-container">
        {features.map((feature) => {
          return (
            <div key={feature.id} className="feature">
              <img src={feature.img} alt={feature.title} />
              <p>{feature.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
