import { Module } from '@nestjs/common';
import { PricesService } from './prices.service';
import { PricesController } from './prices.controller';
import { PriceSchema } from './entities/price.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:"Price", schema: PriceSchema}])],
  controllers: [PricesController],
  providers: [PricesService]
})
export class PricesModule {}
