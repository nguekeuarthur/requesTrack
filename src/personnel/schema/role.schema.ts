import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type RoleDocument = Function & Document

@Schema({timestamps: true})
export class Role {

    @Prop({required: true})
    name: string

}

export const RoleSchema = SchemaFactory.createForClass(Function);