import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
@Prop({required:true})
name:String
@Prop({required:true})
lastname:String
@Prop({unique:true,required:true})
email:String
@Prop({required:true})
pass:String
//no9tet istefhem ma3neha variable ynajem ykoun undefiened
@Prop({required:false})
avatar?:String
}
export const UserSchema=SchemaFactory.createForClass(User)