import Header from './componets/Header/Header';
import Hero from './componets/Hero/Hero';
import FeatureSection from './componets/FeatureSection/FeatureSection';
import Banner from './componets/Banner/Banner';
import Footer from './componets/Footer/Footer';
import chairImg from './assets/chair.png';
import vaseImg from './assets/vase.png';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />

        <FeatureSection
          title="Get the details right, style follows."
          paragraphs={[
            'A frame that keeps its shape, a seat that keeps its promise. Every chair in the collection is built around a handful of proportions that just work.',
            'Fabric, foam density, and frame angle are tuned together, not chosen separately — so the comfort you feel on day one is still there on day one thousand.',
          ]}
          ctaLabel="Shop chairs"
          linkLabel="View collection"
          visual={<img src={chairImg} alt="Armchair" />}
          visualBackground="var(--color-bg-cream)"
        />

        <FeatureSection
          eyebrow="Limited edition"
          title="Objects worth living with"
          paragraphs={[
            'Small pieces carry a lot of a room — a vase, a lamp, a stool placed just right. This edit rotates seasonally and rarely repeats.',
            'Everything ships assembled and ready to place, no unpacking rituals required.',
          ]}
          ctaLabel="Shop the edit"
          linkLabel="Read the story"
          visual={<img src={vaseImg} alt="Vase and lamp still life" />}
          visualBackground="var(--color-bg-teal-light)"
          reverse
        />

        <Banner />
      </main>
      <Footer />
    </div>
  );
}

export default App;