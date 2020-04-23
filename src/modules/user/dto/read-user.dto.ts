import { IsString, IsNumber, IsEmail } from "class-validator";
import { Type, Expose } from "class-transformer";
import { ReadUserDetailDto } from "./read-user-detials.dto";
import { type } from "os";
import { ReadRoleDto } from "src/modules/role/dto";


export class ReadUserDto {

    @Expose()
    @IsNumber()
    readonly id: number;

    @Expose()
    @IsEmail()
    readonly email: string;

    @Expose()
    @IsString()
    readonly username: string;

    @Expose()
    @Type(type => ReadUserDetailDto)
    readonly details: ReadUserDetailDto;


    @Expose()
    @Type(type => ReadRoleDto)
    readonly roles: ReadRoleDto;
}