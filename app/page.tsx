import Header from './components/Header';
import Tour from './components/Tour';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import imgfuturo from '../public/imgpraiafuturo.jpg'
import Carousel from './components/Carousel';



export default function Home() {
      const imageUrls = [
        '/carousel.png',
        '/carrossel3.png',
        '/carrossel4.png',
        '/carrossel2.png',
      ];
  return (
    <>
      <Header
        bgImage={imgfuturo}
      />
      <main className="flex-1">
        <Carousel images={imageUrls} />
        <AboutUs />
        <Tour />
        <Contact/>
      </main>
      <Footer />
    </>
  );
}
