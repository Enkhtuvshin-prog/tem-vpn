import { Injectable } from '@nestjs/common';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Price } from './entities/price.entity';

@Injectable()
export class PricesService {
  constructor(@InjectModel("Price") private readonly priceModel:Model<Price>){}
  create(createPriceDto: CreatePriceDto) {
    return this.priceModel.create(createPriceDto);
  }

  findAll() {
    return this.priceModel.find() ;
  }

  findOne(id: string) {
    return this.priceModel.findById(id);
  }

  update(id: string, updatePriceDto: UpdatePriceDto) {
    return this.priceModel.findByIdAndUpdate(id, updatePriceDto, {new:true});
  }

  remove(id: string) {
    return this.priceModel.findByIdAndDelete(id);
  }
}
