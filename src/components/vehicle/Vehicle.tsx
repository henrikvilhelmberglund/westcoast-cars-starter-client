import { FC } from "react";
import Card from "../ui/Card";
import { Link } from "react-router-dom";

// Alternativ 1 (hantera en bil åt gången)

// export default function Vehicle(props: {
//   imageUrl: string;
//   vehicleId: number;
//   manufacturer: string;
//   model: string;
// }) {
//   const url = "../src/assets/images/";
//   return (
//     <section>
//       <div>
//         <img src={`${url}${props.imageUrl}`} alt={props.vehicleId} />
//         <p>
//           {props.manufacturer} - {props.model}
//         </p>
//       </div>
//     </section>
//   );
// }

// Alternativ 2
// export default function Vehicle({
//   imageUrl,
//   vehicleId,
//   manufacturer,
//   model,
// }: {
//   imageUrl: string;
//   vehicleId: number;
//   manufacturer: string;
//   model: string;
// }) {
//   const url = "../src/assets/images/";
//   return (
//     <section>
//       <div>
//         <img src={`${url}${imageUrl}`} alt={vehicleId} />
//         <p>
//           {manufacturer} - {model}
//         </p>
//       </div>
//     </section>
//   );
// }

// Alternativ 3
// type VehicleProps = {
//   imageUrl: string;
//   vehicleId: number;
//   manufacturer: string;
//   model: string;
// };

// export default function Vehicle({
//   imageUrl,
//   vehicleId,
//   manufacturer,
//   model,
// }: VehicleProps) {
//   const url = "../src/assets/images/";
//   return (
//     <section>
//       <div>
//         <img src={`${url}${imageUrl}`} alt={vehicleId.toString()} />
//         <p>
//           {manufacturer} - {model}
//         </p>
//       </div>
//     </section>
//   );
// }

// Alternativ 4
// type VehicleProps = {
//   image: string;
//   vehicleId: number;
//   manufacturer: string;
//   model: string;
// };

// const Vehicle: FC<VehicleProps> = ({
//   image,
//   vehicleId,
//   manufacturer,
//   model,
// }) => {
//   const url = "../src/assets/images/";
//   return (
//     <Card image={{ src: url + image, alt: vehicleId.toString() }}>
//       <p>{manufacturer} - {model}</p>
//       <button className="btn">Visa mer</button>
//     </Card>
//     // <section>
//     //   <div>
//     //     <img src={`${url}${imageUrl}`} alt={vehicleId.toString()} />
//     //     <p>
//     //       {manufacturer} - {model}
//     //     </p>
//     //   </div>
//     // </section>
//   );
// }

type VehicleProps = {
  image: string;
  vehicleId: number;
  manufacturer: string;
  model: string;
};
const Vehicle: FC<VehicleProps> = ({
  image,
  vehicleId,
  manufacturer,
  model,
}) => {
  const url = "../src/assets/images/";
  return (
    <Card image={{ src: url + image, alt: vehicleId.toString() }}>
      <p>
        {manufacturer} - {model}
      </p>
      <Link to={`/vehicles/${vehicleId}`} className="btn">
        Visa mer
      </Link>
    </Card>
  );
};

export default Vehicle;
