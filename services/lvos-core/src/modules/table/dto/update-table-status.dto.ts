import {
 IsEnum
} from 'class-validator';


export enum TableStatus {

 AVAILABLE = 'AVAILABLE',

 RESERVED = 'RESERVED',

 OCCUPIED = 'OCCUPIED',

 CLEANING = 'CLEANING',

 BLOCKED = 'BLOCKED',

}



export class UpdateTableStatusDto {


 @IsEnum(TableStatus)
 status: TableStatus;


}












