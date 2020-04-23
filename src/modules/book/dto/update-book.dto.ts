import { IsString } from "class-validator";

export class UpdateBookDto {

    @IsString()
    readonly name: string;

    @IsString()
    readonly descrription: string;
}