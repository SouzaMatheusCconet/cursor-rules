import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
    transform(value: any) {
        // transformar/validar
        return value;
    }
}
