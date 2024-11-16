import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto {
    @IsString()
    @Length(4, 8, {groups: ["createw"]})
    name:string;
    @IsString()
    description:string;
    @IsInt()
    @IsPositive()
    price:number;
}