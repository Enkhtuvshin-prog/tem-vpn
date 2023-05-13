import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Price {
    @Prop()
    title:string;
    @Prop()
    lists:[string]
    @Prop()
    month:string;
    @Prop()
    img:string;
}
export const PriceSchema = SchemaFactory.createForClass(Price)