import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { IntegrationModule } from './integration/integration.module';
import { MonitoringModule } from './monitoring/monitoring.module';
import configuration from './shared/config/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
        TerminusModule,
        UserModule,
        AuthModule,
        IntegrationModule,
        MonitoringModule,
    ],
})
export class AppModule { }
