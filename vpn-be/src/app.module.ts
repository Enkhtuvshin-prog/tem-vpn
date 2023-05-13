import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FeaturesModule } from './features/features.module';
import { TestimoniesModule } from './testimonies/testimonies.module';
import { PricesModule } from './prices/prices.module';

@Module({
  imports: [ ConfigModule.forRoot({envFilePath:'.env', isGlobal:true}), MongooseModule.forRoot(process.env.MONGO_URI), HeroModule, FeaturesModule, TestimoniesModule,  PricesModule],

  // imports: [ConfigModule.forRoot({envFilePath:'.env', isGlobal:true}), MongooseModule.forRoot(process.env.MONGO_URI), HeroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
