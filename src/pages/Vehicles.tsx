import { ReactNode, useEffect, useState } from "react";
import Header from "../components/ui/Header";
import { IVehicle } from "../components/vehicle/IVehicle";
import { get } from "../utilities/httpClient";
import Progress from "../components/ui/Progress";
import ErrorMessage from "../components/ui/ErrorMessage";

type VehicleResponseType = {
  status: string;
  statusCode: number;
  items: number;
  data: IVehicle[];
};

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    // Anropa vår backend async
    const getAllVehicles = async () => {
      try {
        setIsLoading(true);
        const result = await get<VehicleResponseType>(
          "http://localhost:3000/api/"
        );
        console.log(result);
        setVehicles(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsLoading(false);
    };
    getAllVehicles();
  }, []);
  let content: ReactNode;

  if (vehicles) {
    content = vehicles.map((vehicle) => (
      <div key={vehicle.id}>{vehicle.manufacturer}</div>
    ));
  }

  if (isLoading) {
    content = <Progress text="Loading cars..."></Progress>;
  }

  if (error) {
    content = <ErrorMessage text={error}/>
  }

  return (
    <article className="container">
      <Header>
        <h2>Aktuella bilar</h2>
        <p>Senaste inkomna bilar</p>
      </Header>
      {content}
    </article>
  );
};

export default VehiclesPage;
