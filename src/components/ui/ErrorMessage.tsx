import "./errormessage.css";

type ErrorMessageProps = {
  text: string;
  // visa allvarlighetsgrad
  // image: string;
};

export default function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <aside className="error-message">
      <h2>Ett fel har inträffat</h2>
      <p>{text}</p>
    </aside>
  );
}
