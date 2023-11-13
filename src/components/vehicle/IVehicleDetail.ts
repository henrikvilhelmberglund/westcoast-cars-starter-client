import { IVehicle } from "./IVehicle";

export interface IVehicleDetail extends IVehicle {
  registrationNumber: string;
  modelYear: string;
  mileage: number;
  description: string;
  value: number;
  vehicleId: number;
}
