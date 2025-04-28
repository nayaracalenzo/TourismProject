import Header from './components/Header';
import Tour from './components/Tour';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import imgfuturo from './assets/imgpraiafuturo.jpg'
import Carousel from './components/Carousel';



export default function Home() {
      const imageUrls = [
        '/carousel.png',
        '/carousel.png',
        '/carousel.png',
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
      </main>
      <Footer />
    </>
  );
}
