import { IsString, MaxLength, IsNumber } from "class-validator";
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UpdateRoleDto {


    @IsString()
    @MaxLength(50, { message: 'this name is not valid' })
    readonly name: string;

    @IsString()
    @MaxLength(100, { message: 'This description is not valid' })
    readonly description: string;
}