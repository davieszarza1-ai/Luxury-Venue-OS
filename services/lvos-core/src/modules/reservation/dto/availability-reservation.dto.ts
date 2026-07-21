import {
 IsDateString,
 IsUUID
} from 'class-validator';



export class AvailabilityReservationDto {


 @IsUUID()
 tableId:string;



 @IsDateString()
 date:string;



}











