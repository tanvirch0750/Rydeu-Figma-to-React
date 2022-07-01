import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import iconCalendar from '../../assets/Calander.png';
import iconEmail from '../../assets/icon_email.png';
import './HeroSection.css';

const HeroSection = () => {
  // phone number input
  const [value, setValue] = useState();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Private Transfer & Taxi services in Geneva</h1>
            <p>
              Book airport transfers, city transfers and hourly disposal
              services with driver
            </p>
          </div>
          <div className="hero-form">
            <div className="form-header-tab">
              <div className="tab-box">
                <span>One Way</span>
              </div>
              <div className="tab-box">
                <span>Round Trip</span>
              </div>
              <div className="tab-box">
                <span>Hourly</span>
              </div>
            </div>
            <form className="form-container">
              <div className="form-control">
                <label>From</label>
                <input type="text" placeholder="(airport, hotel, address)" />
              </div>
              <div className="form-control">
                <label>To</label>
                <input type="text" placeholder="(airport, hotel, address)" />
              </div>
              <div className="form-input-group">
                <div className="form-control">
                  <label>
                    <img src={iconCalendar} alt="calender-icon" />
                  </label>
                  <input type="text" placeholder="Pickup Date" />
                </div>
                <div className="form-control">
                  <label>
                    <img src={iconCalendar} alt="calendar-icon" />
                  </label>
                  <input type="text" placeholder="Pickup time" />
                </div>
              </div>
              <div className="form-control">
                <label>
                  <img src={iconEmail} alt="eamil-icon" />
                </label>
                <input type="text" placeholder="Email" />
              </div>

              <div className="form-control">
                <PhoneInput
                  placeholder="Phone Number"
                  defaultCountry="GB"
                  value={value}
                  onChange={setValue}
                />
              </div>
              <div className="form-checkbox">
                <input type="checkbox" />
                <label>Additional Requirements</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
