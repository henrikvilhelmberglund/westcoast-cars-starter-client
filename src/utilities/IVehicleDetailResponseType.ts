import { IVehicleDetail } from '../components/vehicle/IVehicleDetail';
import { IResponseBaseType } from './IResponseBaseType';

export interface IVehicleDetailResponseType extends IResponseBaseType {
  data: IVehicleDetail;
}