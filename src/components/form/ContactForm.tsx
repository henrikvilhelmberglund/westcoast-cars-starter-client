import { type FormEvent, useRef } from "react";

type Customer = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const customer: Customer = {
      firstName: firstName.current!.value,
      lastName: lastName.current!.value,
      email: email.current!.value,
      message: message.current!.value,
    };
    // standard men fult sätt
    // const enteredFirstName = firstName.current!.value

    e.currentTarget.reset();

    // Informationen skickas till vår databas
    // eller mottagaren via ett mail-api
    console.log(customer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="firstName">Förnamn</label>
        <input ref={firstName} type="text" name="firstName" id="firstName" />
      </div>
      <div className="form-control">
        <label htmlFor="lastName">Efternamn</label>
        <input ref={lastName} type="text" name="lastName" id="lastName" />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Post</label>
        <input ref={email} type="email" name="email" id="email" />
      </div>
      <div className="form-control">
        <label htmlFor="message">Meddelande</label>
        <textarea
          ref={message}
          name="message"
          id="message"
          cols={30}
          rows={10}></textarea>
      </div>
      <div className="submit-controls">
        <button className="btn" type="submit">
          Skicka
        </button>
      </div>
    </form>
  );
}
