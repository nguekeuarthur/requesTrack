/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateRequestDto{

    @IsNotEmpty()
    @IsString()
    type_of_query:string;

    @IsNotEmpty()
    @IsString()
    status:string;

    @IsNotEmpty()
    @IsString()
    department:string;

    @IsNotEmpty()
    @IsString()
    faculty:string;

    
    @IsNotEmpty()
    @IsString()
    level:string;
}