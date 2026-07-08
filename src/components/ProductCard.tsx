import { useState } from 'react';

interface ProductCardProps {
  title: string;
  imgSrc: string;
  badgeSrc: string;
  onAdd: () => void;
}

export default function ProductCard({ title, imgSrc, badgeSrc, onAdd }: ProductCardProps) {
  const [btnText, setBtnText] = useState('Add to Cart');
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onAdd();
    setBtnText('Added!');
    setAdded(true);
    setTimeout(() => {
      setBtnText('Add to Cart');
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="product-card">
      <div className="product-badge">
        <img src={badgeSrc} alt="Badge" className="badge-img" />
      </div>
      <div className="product-img-wrapper">
        <img src={imgSrc} alt={title} />
      </div>
      <h4>{title}</h4>
      <button 
        className="btn btn-add" 
        onClick={handleClick}
        style={{
          backgroundColor: added ? '#5ca385' : undefined,
          color: added ? '#fff' : undefined,
        }}
      >
        {btnText}
      </button>
    </div>
  );
}
