import BookNowCards from '../../components/book-now-cards/BookNowCards';
import City from '../../components/cities/City';
import CityDetailsSection from '../../components/city-details-section/CityDetailsSection';
import Features from '../../components/features/Features';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import HeroSection from '../../components/hero-section/HeroSection';

const Home = () => {
  return (
    <body>
      <Header />
      <HeroSection />
      <BookNowCards />
      <Features />
      <CityDetailsSection />
      <City />
      <Footer />
    </body>
  );
};

export default Home;
