import Header from './components/Header';
import Packs from './components/Packs';
import Tour from './components/Tour';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import imgfuturo from './assets/imgpraiafuturo.jpg'
import Carousel from './components/Carousel';


export default function Home() {
      const imageUrls = [
        '/colagemcombo.png',
        '/colagemcombo.png',
        '/colagemcombo.png',
      ];
  return (
    <>
      <Header
        bgImage={imgfuturo}
        title="SEU PRÓXIMO DESTINO DOS SONHOS COMEÇA AQUI!"
      />
      <main className="flex-1">
        <Carousel images={imageUrls} />
        <AboutUs />
        <Packs />
        <Tour />
      </main>
      <Footer />
    </>
  );
}
