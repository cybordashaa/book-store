import { Expose, Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
import { ReadUserDto } from "src/modules/user/dto";

export class ReadBookDto {

    @Expose()
    @IsNumber()
    readonly id: number;

    @Expose()
    @IsString()
    readonly name: string;


    @Expose()
    @IsString()
    readonly description: string;

    @Expose()
    @Type(type => ReadUserDto)
    readonly authors: ReadUserDto[];

}