import type { ReactNode } from 'react';
import Button from '../Button/Button';
import './FeatureSection.css';

interface FeatureSectionProps {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  ctaLabel: string;
  linkLabel?: string;
  visual: ReactNode;
  reverse?: boolean;
  visualBackground?: string;
}

const FeatureSection = ({
  eyebrow,
  title,
  paragraphs,
  ctaLabel,
  linkLabel,
  visual,
  reverse = false,
  visualBackground = 'var(--color-bg-teal-light)',
}: FeatureSectionProps) => {
  return (
    <section className={`feature ${reverse ? 'feature--reverse' : ''}`}>
      <div className="feature__copy">
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className="feature__actions">
          <Button variant="solid">{ctaLabel}</Button>
          {linkLabel && <Button variant="link">{linkLabel}</Button>}
        </div>
      </div>

      <div className="feature__visual" style={{ background: visualBackground }}>
        {visual}
      </div>
    </section>
  );
};

export default FeatureSection;