import florenceImg from '../../assets/florence-city.png';
import naplesImg from '../../assets/naples-city.png';
import './City.css';

const cities = [
  { id: 1, cityName: 'Naples', img: naplesImg },
  { id: 2, cityName: 'Florence', img: florenceImg },
  { id: 3, cityName: 'Naples', img: naplesImg },
  { id: 4, cityName: 'Florence', img: florenceImg },
  { id: 5, cityName: 'Naples', img: naplesImg },
  { id: 6, cityName: 'Florence', img: florenceImg },
  { id: 7, cityName: 'Naples', img: naplesImg },
  { id: 8, cityName: 'Florence', img: florenceImg },
];

const City = () => {
  return (
    <section className="cities">
      <div className="container">
        <h2>Other Cities</h2>
        <div className="cities-container">
          {cities.map((city) => {
            return (
              <div
                key={city.id}
                className="city"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${city.img})`,
                }}
              >
                <p>{city.cityName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default City;
