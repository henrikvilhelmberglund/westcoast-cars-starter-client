// Alternativ 1 (hantera en bil åt gången)

export default function Vehicle(props: {
  imageUrl: string;
  vehicleId: number;
  manufacturer: string;
  model: string;
}) {
  const url = "../src/assets/images/"
  return (
    <section>
      <div>
        <img src={`${url}${props.imageUrl}`} alt={props.vehicleId} />
        <p>
          {props.manufacturer} - {props.model}
        </p>
      </div>
    </section>
  );
}
