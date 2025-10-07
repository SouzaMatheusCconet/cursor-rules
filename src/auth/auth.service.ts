import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    login(dto: LoginDto) {
        // Retorna um token simulado
        return { accessToken: 'token-simulado', user: { email: dto.email } };
    }
}
