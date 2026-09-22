import Button from '../Button/Button';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="container banner__content">
        <h2>Furniture made to outlast the trends around it</h2>
        <Button variant="outline">
          <span>↓</span> New arrivals
        </Button>
      </div>
    </section>
  );
};

export default Banner;