import { IsString, IsNotEmpty } from "class-validator";

export class SiginDto {

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}