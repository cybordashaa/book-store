import { IsNumber, IsEmail } from "class-validator";


export class UpdateUserDto {

    @IsNumber()
    readonly id: number;

    @IsEmail()
    readonly username: string;
}