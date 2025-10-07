import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    private users: any[] = [];

    findAll() {
        return this.users;
    }

    create(dto: CreateUserDto) {
        const user = { id: this.users.length + 1, ...dto };
        this.users.push(user);
        return user;
    }
}
