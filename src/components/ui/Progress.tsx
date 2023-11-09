import "./progress.css";

type ProgressProps = {
  text: string;
};

export default function Progress({ text }: ProgressProps) {
  return <p className="progress">{text}</p>;
}
