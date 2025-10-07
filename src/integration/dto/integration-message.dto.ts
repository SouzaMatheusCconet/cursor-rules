import { IsString } from 'class-validator';

export class IntegrationMessageDto {
    @IsString()
    source: string;

    @IsString()
    payload: string;
}
