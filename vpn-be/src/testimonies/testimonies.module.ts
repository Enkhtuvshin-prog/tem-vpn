import { Module } from '@nestjs/common';
import { TestimoniesService } from './testimonies.service';
import { TestimoniesController } from './testimonies.controller';
import { TestimonySchema } from './entities/testimony.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:"Testimony", schema: TestimonySchema}])],
  controllers: [TestimoniesController],
  providers: [TestimoniesService]
})
export class TestimoniesModule {}
