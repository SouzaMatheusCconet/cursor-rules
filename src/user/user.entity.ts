import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;
}

@Schema()
export class UserDocument {
    @Prop()
    name: string;

    @Prop({ unique: true })
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
