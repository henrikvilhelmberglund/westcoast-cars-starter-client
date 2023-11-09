import './contact.css';

const ContactPage = () => {
  return (
    <main>
      <article>
        <section id='contact-form'>
          <h1 className='page-title'>Kontakta Oss</h1>
          <p>Fyll i formuläret nedan för att kontakta oss</p>
          <form>
            <div className='form-control'>
              <label htmlFor='firstName'>Förnamn</label>
              <input type='text' name='firstName' id='firstName' />
            </div>
            <div className='form-control'>
              <label htmlFor='lastName'>Efternamn</label>
              <input type='text' name='lastName' id='lastName' />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>E-Post</label>
              <input type='email' name='email' id='email' />
            </div>
            <div className='form-control'>
              <label htmlFor='message'>Meddelande</label>
              <textarea name='message' id='message' cols={30} rows={10}></textarea>
            </div>
            <div className='submit-controls'>
              <button className='btn' type='submit'>
                Skicka
              </button>
            </div>
          </form>
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
