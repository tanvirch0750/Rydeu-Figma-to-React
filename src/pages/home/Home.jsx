import BookNowCards from '../../components/book-now-cards/BookNowCards';
import City from '../../components/cities/City';
import Features from '../../components/features/Features';
import Header from '../../components/header/Header';
import HeroSection from '../../components/hero-section/HeroSection';

const Home = () => {
  return (
    <body>
      <Header />
      <HeroSection />
      <BookNowCards />
      <Features />
      <City />
    </body>
  );
};

export default Home;
