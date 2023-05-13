import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroController } from './hero.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroSchema } from './entities/hero.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"Hero", schema: HeroSchema}])],
  controllers: [HeroController],
  providers: [HeroService]
})
export class HeroModule {}
