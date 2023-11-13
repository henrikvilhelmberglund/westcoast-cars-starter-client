import { ReactNode } from "react";

type TestimonialProps = {
  image: { src: string; alt: string };
  children: ReactNode;
};

export default function Testimonial({ image, children }: TestimonialProps) {
  return (
    <section>
      <img {...image} />
      {children}
    </section>
  );
}
