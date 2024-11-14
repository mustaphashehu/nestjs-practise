import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe, Headers } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { idParamsDto } from './dto/idParams.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-headers';
import { PropertyService } from './property.service';


@Controller('property')
export class PropertyController {
    // propertyService: PropertyService;
    constructor(private propertyService: PropertyService) {
        // this.propertyService = new PropertyService()
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
        this.propertyService.findOne()
    }

    @Post()
    // @HttpCode(201)
    @UsePipes(new ZodValidationPipe(createPropertySchema))
    create(
        @Body() body: CreatePropertyZodDto,
    ) {
        this.propertyService.create()
    }

    @Patch(":id")
    update(
        @Param("id", ParseIdPipe) id,
        @Body() body: CreatePropertyDto,
        @RequestHeader(new ValidationPipe({whitelist: true, validateCustomDecorators: true})) header: HeadersDto,
    ) {
        this.propertyService.update()
    }

}