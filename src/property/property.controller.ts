import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe, Headers, Delete } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { idParamsDto } from './dto/idParams.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-headers';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';


@Controller('property')
export class PropertyController {
    constructor(private propertyService: PropertyService) {
        this.propertyService = propertyService

    }

    @Get()

    findAll() {
        return this.propertyService.findAll()
        //return "All properties"
    }

    @Get(":id")
    findOne(
        @Param("id", ParseIntPipe) userId,
        @Query("sort") sort
    ) {
        return this.propertyService.findOne(userId)
    }

    @Post()
    // @HttpCode(201)
    @UsePipes(new ZodValidationPipe(createPropertySchema))
    create(
        @Body() dto: CreatePropertyZodDto,
    ) {
        console.log(dto);
        
        if (!dto.name) {
            return "name is undefrined";
          }
        return this.propertyService.create(dto)
    }

    @Patch(":id")
    update(
        @Param("id", ParseIdPipe) id,
        @Body() body: UpdatePropertyDto,
        @RequestHeader(new ValidationPipe({whitelist: true, validateCustomDecorators: true})) header: HeadersDto,
    ) {
        return this.propertyService.update(id, body)
    }

    @Delete(":id")
    delete(
        @Param("id", ParseIdPipe) id: number
    ) {
        return this.propertyService.delete(id)
    }

}