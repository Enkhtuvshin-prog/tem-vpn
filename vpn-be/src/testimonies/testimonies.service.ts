import { Injectable } from '@nestjs/common';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Testimony } from './entities/testimony.entity';

@Injectable()
export class TestimoniesService {
  constructor(@InjectModel("Testimony") private readonly testimonyModel:Model<Testimony>){}
  create(createTestimonyDto: CreateTestimonyDto) {
    return this.testimonyModel.create(createTestimonyDto);
  }

  findAll() {
    return this.testimonyModel.find();
  }

  findOne(id: string) {
    return this.testimonyModel.findById(id);
  }

  update(id: string, updateTestimonyDto: UpdateTestimonyDto) {
    return this.testimonyModel.findByIdAndUpdate(id, updateTestimonyDto, {new:true});
  }

  remove(id: string) {
    return this.testimonyModel.findByIdAndDelete(id);
  }
}
