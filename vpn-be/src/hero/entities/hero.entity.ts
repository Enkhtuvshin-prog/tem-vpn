import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Hero {
    @Prop()
    title:string;
    @Prop()
    text:string;
    @Prop()
    button:string;
    @Prop()
    img:string;
}

export const HeroSchema = SchemaFactory.createForClass(Hero)