import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from 'src/entities/property.entity';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Injectable()
export class PropertyService {
    constructor (
        @InjectRepository(Property) private propertyRepo: Repository<Property>
    ) {}

    async findOne(id){
        const property =  await this.propertyRepo.findOne({
            where: {id}
        })

        if (!property) throw new NotFoundException("no no");

        return property
    }

    async findAll(){
        return await this.propertyRepo.find()
    }

    async create(dto: CreatePropertyZodDto){
        return await this.propertyRepo.save(dto)
        // const property = this.propertyRepo.create(dto);
        // return await this.propertyRepo.save(property);
    }

    async update(id: number, dto: UpdatePropertyDto){
        return this.propertyRepo.update({id}, dto)
    }

    async delete(id: number){
        return this.propertyRepo.delete({id})
    }
}



// nest g s property --no-spec
