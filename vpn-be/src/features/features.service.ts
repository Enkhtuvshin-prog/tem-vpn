import { Injectable } from '@nestjs/common';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feature } from './entities/feature.entity';

@Injectable()
export class FeaturesService {
  constructor(@InjectModel("Feature") private readonly featureModel:Model<Feature>){}
  create(createFeatureDto: CreateFeatureDto) {
    return this.featureModel.create(createFeatureDto);
  }

  findAll() {
    return this.featureModel.find();
  }

  findOne(id: string) {
    return this.featureModel.findById(id);
  }

  update(id: string, updateFeatureDto: UpdateFeatureDto) {
    return this.featureModel.findByIdAndUpdate(id, updateFeatureDto, {new:true});
  }

  remove(id: string) {
    return this.featureModel.findByIdAndDelete(id);
  }
}
