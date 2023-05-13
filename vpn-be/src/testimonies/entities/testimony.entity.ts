import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Testimony {
    @Prop()
    name:string;
    @Prop()
    text:string;
    @Prop()
    city:string;
    @Prop()
    country:string;
    @Prop()
    rating:string;
    @Prop()
    img:string;
}
export const TestimonySchema = SchemaFactory.createForClass(Testimony)