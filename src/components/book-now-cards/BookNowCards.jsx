import iconArrow from '../../assets/Arrow.png';
import './BookNowCards.css';

const BookNowCards = () => {
  return (
    <section className="book-now-cards">
      <div className="container">
        <div className="book-now-cards-container">
          <div className="book-card book-now-card-1">
            <div>&nbsp;</div>
            <div className="book-card-content">
              <h2>
                Hire <span>MiniBus</span> & <span>Coach/Bus</span>
              </h2>
              <button>
                <span>Book Now</span> <img src={iconArrow} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="book-card book-now-card-2">
            <div>&nbsp;</div>
            <div className="book-card-two-content">
              <h2>Book & Pay Later</h2>
              <p>Book your ride now and pay only on arrival</p>
              <button>
                <span>Book Now</span> <img src={iconArrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNowCards;
