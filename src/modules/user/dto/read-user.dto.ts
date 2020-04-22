import { IsString, IsNumber, IsEmail } from "class-validator";
import { Type } from "class-transformer";
import { ReadUserDetailDto } from "./read-user-detials.dto";


export class ReadUserDto {

    @IsNumber()
    readonly id: number;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly username: string;

    @Type(type => ReadUserDetailDto)
    readonly details: ReadUserDetailDto;
}