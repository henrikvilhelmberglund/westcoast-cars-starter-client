import { IVehicle } from "../components/vehicle/IVehicle";
import { IResponseBaseType } from "./IResponseBaseType";

export interface IVehiclesResponseType extends IResponseBaseType {
  items: number, data: IVehicle[]
}

// lägg till för Vehicle också