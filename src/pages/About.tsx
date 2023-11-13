import "./about.css";

import displayImg from "../assets/images/display-3.jpg";
import femaleOneImg from "../assets/images/woman.jpg";
import femaleTwoImg from "../assets/images/woman-2.jpg";
import maleImg from "../assets/images/man.jpg";
import Testimonial from "../components/ui/Testimonial";

const AboutPage = () => {
  return (
    <main>
      <article id="about-area">
        <div>
          <section>
            <h3 className="page-title">Vilka är vi?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis aspernatur aut impedit laudantium error, quod dolor
              porro dolore nostrum ipsam neque adipisci officiis asperiores
              maxime quia, qui illum illo, cumque cupiditate voluptate totam
              alias ab dolorem. Cupiditate vitae reprehenderit, nam ratione,
              blanditiis deleniti id laudantium voluptatum, corrupti nihil optio
              natus.
            </p>
          </section>
          <section>
            <img src={displayImg} alt="Car display" />
          </section>
        </div>
      </article>
      <article id="testimonials-area">
        <h3 className="page-title">Vad tycker våra kunder?</h3>
        <div>
          <Testimonial image={{ src: femaleOneImg, alt: "Kund 1" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus error voluptatibus aliquam fuga vero asperiores
              consequuntur dolores ratione optio ipsum.
            </p>
          </Testimonial>
          <Testimonial image={{ src: maleImg, alt: "Kund 2" }}>
            <h4>Hej!</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus error voluptatibus aliquam fuga vero asperiores
              consequuntur dolores ratione optio ipsum. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Placeat, doloribus?
            </p>
          </Testimonial>
          <Testimonial image={{ src: femaleTwoImg, alt: "Kund 3" }}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Testimonial>
        </div>
      </article>
    </main>
  );
};

export default AboutPage;
