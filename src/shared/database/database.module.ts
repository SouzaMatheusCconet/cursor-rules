import { Module, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity } from '../../user/user.entity';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                // Configura TypeORM para Postgres ou MySQL via env
                const type = config.get('DB_TYPE') || 'postgres';
                if (type === 'mysql') {
                    return {
                        type: 'mysql',
                        host: config.get('MYSQL_HOST'),
                        port: parseInt(config.get('MYSQL_PORT') || '3306', 10),
                        username: config.get('MYSQL_USER'),
                        password: config.get('MYSQL_PASSWORD'),
                        database: config.get('MYSQL_DATABASE'),
                        entities: [UserEntity],
                        synchronize: true,
                    };
                }
                // default postgres
                return {
                    type: 'postgres',
                    host: config.get('PG_HOST'),
                    port: parseInt(config.get('PG_PORT') || '5432', 10),
                    username: config.get('PG_USER'),
                    password: config.get('PG_PASSWORD'),
                    database: config.get('PG_DATABASE'),
                    entities: [UserEntity],
                    synchronize: true,
                };
            },
        }),
        MongooseModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                uri: config.get('MONGO_URI'),
            }),
        }),
    ],
    exports: [TypeOrmModule, MongooseModule],
})
export class DatabaseModule { }
