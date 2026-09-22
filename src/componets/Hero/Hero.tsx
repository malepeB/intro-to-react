import heroImg from '../../assets/hero.png';
import Button from '../Button/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1>
            The office chair <br /> made for real life
          </h1>
          <p>
            Considered proportions and breathable materials meet a silhouette built to hold
            its shape through years of everyday use.
          </p>
          <Button variant="solid">Explore the range</Button>
        </div>

        <div className="hero__visual">
         <img src={heroImg} alt="Person standing beside furniture" />
        </div>
      </div>
    </section>
  );
};

export default Hero;