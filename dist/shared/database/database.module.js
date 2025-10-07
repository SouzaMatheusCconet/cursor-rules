"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("../../user/user.entity");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    const type = config.get('DB_TYPE') || 'postgres';
                    if (type === 'mysql') {
                        return {
                            type: 'mysql',
                            host: config.get('MYSQL_HOST'),
                            port: parseInt(config.get('MYSQL_PORT') || '3306', 10),
                            username: config.get('MYSQL_USER'),
                            password: config.get('MYSQL_PASSWORD'),
                            database: config.get('MYSQL_DATABASE'),
                            entities: [user_entity_1.UserEntity],
                            synchronize: true,
                        };
                    }
                    return {
                        type: 'postgres',
                        host: config.get('PG_HOST'),
                        port: parseInt(config.get('PG_PORT') || '5432', 10),
                        username: config.get('PG_USER'),
                        password: config.get('PG_PASSWORD'),
                        database: config.get('PG_DATABASE'),
                        entities: [user_entity_1.UserEntity],
                        synchronize: true,
                    };
                },
            }),
            mongoose_1.MongooseModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    uri: config.get('MONGO_URI'),
                }),
            }),
        ],
        exports: [typeorm_1.TypeOrmModule, mongoose_1.MongooseModule],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map