import { Module } from '@nestjs/common';
import { FeaturesService } from './features.service';
import { FeaturesController } from './features.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FeatureSchema } from './entities/feature.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"Feature", schema: FeatureSchema}])],
  controllers: [FeaturesController],
  providers: [FeaturesService]
})
export class FeaturesModule {}
