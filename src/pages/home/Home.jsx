import BookNowCards from '../../components/book-now-cards/BookNowCards';
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
    </body>
  );
};

export default Home;
