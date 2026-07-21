import {
 IsString,
 IsNumber,
 IsDateString,
 IsOptional,
} from 'class-validator';



export class CreateReservationDto {


 @IsString()
  customerName:string;
@IsString()
 phone:string;



 @IsDateString()
 date:string;



 @IsNumber()
 guests:number;



 @IsString()
 tableId:string;



}















