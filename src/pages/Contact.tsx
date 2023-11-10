import ContactForm from '../components/form/ContactForm';
import './contact.css';

const ContactPage = () => {
  return (
    <main>
      <article>
        <section id='contact-form'>
          <h1 className='page-title'>Kontakta Oss</h1>
          <p>Fyll i formuläret nedan för att kontakta oss</p>
          <ContactForm/>
        </section>
        <section id='contact-info'>
          <div className='container'>
            <div className='box'>
              <i className='fa-sharp fa-solid fa-building fa-2x'></i>
              <h3>Här hittar ni oss</h3>
              <p>Industrigatan 5, 44440 Stenungsund</p>
            </div>
            <div className='box'>
              <i className='fa-sharp fa-solid fa-circle-phone-hangup fa-2x'></i>
              <h3>Telefon</h3>
              <p>0303-111111</p>
            </div>
            <div className='box'>
              <i className='fa-sharp fa-solid fa-envelope fa-2x'></i>
              <p>customer@westcoastcars.com</p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default ContactPage;
