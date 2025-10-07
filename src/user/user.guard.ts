import { CanActivate, ExecutionContext } from '@nestjs/common';

export class UserGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        // Exemplo: sempre permite — implementar lógica real conforme necessário
        return true;
    }
}
