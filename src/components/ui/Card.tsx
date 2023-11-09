import { ReactNode } from "react";

import "./card.css"
type CardProps = {
  image: { src: string; alt: string };
  children: ReactNode;
};



const Card = ({image, children}: CardProps) => {
  return (
    <div className="card">
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image} />
      {/* vilken JSX som helst här */}
      {children}
    </div>
  );
};

export default Card;
