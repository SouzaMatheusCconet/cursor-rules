import { Controller, Post, Body } from '@nestjs/common';
import { IntegrationService } from './integration.service';
import { IntegrationMessageDto } from './dto/integration-message.dto';

@Controller('integration')
export class IntegrationController {
    constructor(private readonly integrationService: IntegrationService) { }

    @Post('message')
    async message(@Body() dto: IntegrationMessageDto) {
        return this.integrationService.handleMessage(dto);
    }
}
