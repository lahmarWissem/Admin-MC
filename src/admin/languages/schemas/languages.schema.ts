import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Languages {

    @Prop({ type: [String], required: true })
    language: string[];

    @Prop({ type: [String], required: true })
    level: string[];

    @Prop({ type: [String] })
    certificate: string[];
}

export const LanguagesDataschema = SchemaFactory.createForClass(Languages);