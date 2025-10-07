import { Injectable, Logger } from '@nestjs/common';
import { IntegrationMessageDto } from './dto/integration-message.dto';
import { createCircuitBreaker } from '../shared/circuit-breaker/circuit-breaker.service';

@Injectable()
export class IntegrationService {
    private readonly logger = new Logger(IntegrationService.name);
    private breaker: any;

    constructor() {
        // Circuit breaker protege o processamento de mensagens externas
        this.breaker = createCircuitBreaker(async (dto: IntegrationMessageDto) => {
            // Simular processamento que pode falhar — aqui ficará a lógica real
            this.logger.log(`Processing integration message from ${dto.source}`);
            return { status: 'ok', received: dto };
        }, { timeout: 5000, errorThresholdPercentage: 50, resetTimeout: 30000 });
    }

    async handleMessage(dto: IntegrationMessageDto) {
        try {
            return await this.breaker.fire(dto);
        } catch (err) {
            this.logger.error('Integration handler failed', err as any);
            throw err;
        }
    }
}
