import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hero } from './entities/hero.entity';

@Injectable()
export class HeroService {
  constructor(@InjectModel("Hero") private readonly heroModel:Model<Hero>){}

  create(createHeroDto: CreateHeroDto) {
    return this.heroModel.create(createHeroDto);
  }

  findAll() {
    return this.heroModel.find();
  }

  findOne(id: string) {
    return this.heroModel.findById(id);
  }

  update(id: string, updateHeroDto: UpdateHeroDto) {
    return this.heroModel.findByIdAndUpdate(id, updateHeroDto, {new:true});
  }

  remove(id: string) {
    return this.heroModel.findByIdAndDelete(id);
  }
}
