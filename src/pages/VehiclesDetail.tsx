import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IVehicleDetail } from '../components/vehicle/IVehicleDetail';
import { get } from '../utilities/httpClient';
// import { VehicleResponseType } from '../utilities/VehicleResponseType';
import { IVehicleDetailResponseType } from '../utilities/IVehicleDetailResponseType';
import Progress from '../components/ui/Progress';
import Header from '../components/ui/Header';
import VehicleDetails from '../components/vehicle/VehicleDetails';
import Alert from '../components/ui/Alert';

// type VehicleResponseType = {
//   status: string;
//   statusCode: number;
//   data: IVehicleDetail;
// };

const VehicleDetailPage = () => {
  const [vehicle, setVehicle] = useState<IVehicleDetail>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const params = useParams();

  useEffect(() => {
    const getVehicle = async () => {
      try {
        setIsLoading(true);
        // const result = await get<VehicleResponseType>(`http://localhost:3000/api/${params.id}`);
        // setVehicle(result.data as IVehicleDetail);
        const result = await get<IVehicleDetailResponseType>(
          `http://localhost:3000/api/${params.id}`
        );
        setVehicle(result.data);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
      setIsLoading(false);
    };

    getVehicle();
  }, [params.id]);

  let content: ReactNode;

  if (vehicle) {
    content = <VehicleDetails vehicle={vehicle} />;
  }

  if (isLoading) {
    content = <Progress text='Hämtar bil, vänta lite' />;
  }

  if (error) {
    content = <Alert mode='error'>{error}</Alert>;
  }

  return (
    <article className='container'>
      <Header>
        <h2>Information om</h2>
        <p>
          {vehicle?.manufacturer} {vehicle?.model}
        </p>
      </Header>
      {content}
    </article>
  );
};

export default VehicleDetailPage;