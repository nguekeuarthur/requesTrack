import {IsArray, IsNotEmpty, IsString} from "class-validator";

export class UpdateClassroomDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    speciality_id: string

    @IsArray()
    courses: string[];
}