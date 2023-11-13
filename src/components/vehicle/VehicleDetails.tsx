import { FC } from 'react';
import { IVehicleDetail } from './IVehicleDetail';

import './vehicleDetails.css';

type VehicleDetailProps = {
  vehicle: IVehicleDetail;
};

// const VehicleDetails = ({vehicle}: VehicleDetailProps) => {};
const VehicleDetails: FC<VehicleDetailProps> = ({ vehicle }) => {
  const url = '../src/assets/images/';

  return (
    <article className='container'>
      <div className='vehicle-info'>
        <img src={`${url}${vehicle.imageUrl}`} alt={`${vehicle.manufacturer} ${vehicle.model}`} />
        <div className='title'>
          {vehicle.manufacturer} {vehicle.model}
        </div>
        <div>
          <span>Årsmodell {vehicle.modelYear}</span>
          <span>Antal km {vehicle.mileage}</span>
          <span>Pris {vehicle.value}</span>
        </div>
        <div className='description'>
          <p>Beskrivning</p>
          <p>{vehicle.description}</p>
        </div>
      </div>
    </article>
  );
};

export default VehicleDetails;