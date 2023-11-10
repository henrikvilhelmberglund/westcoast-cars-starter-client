import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IVehicleDetail } from "../vehicle/IVehicleDetail";
import { get } from "../../utilities/httpClient";

type VehicleResponseType = {
  status: string;
  statusCode: number;
  data: IVehicleDetail;
};

export default function VehicleDetail() {
  const [vehicle, setVehicle] = useState<IVehicleDetail>();
  const params = useParams();
  useEffect(() => {
    const getVehicle = async () => {
      try {
        const result = await get<VehicleResponseType>(`http://localhost:3000/api/${params.id}`)
        setVehicle(result.data);
      } catch (error) {
        console.log(error);
        
      }

      getVehicle();
    }
  }, [])
  
  return (
     <>
    
    </>
  );
}