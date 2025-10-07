import { Controller, Get, Header } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { getMetrics } from '../shared/metrics/metrics.service';

@Controller()
export class MonitoringController {
    constructor(private health: HealthCheckService) { }

    @Get('health')
    @HealthCheck()
    readiness() {
        return this.health.check([]);
    }

    @Get('metrics')
    @Header('Content-Type', 'text/plain; version=0.0.4; charset=utf-8')
    async metrics() {
        return await getMetrics();
    }
}
