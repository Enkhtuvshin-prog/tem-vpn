import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Feature {
    @Prop()
    title:string;
    @Prop()
    text:string;
    @Prop([])
    lists:[string];
    @Prop()
    button:string;
    @Prop()
    img:string;
}

export const FeatureSchema = SchemaFactory.createForClass(Feature)