import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { SharedModule } from 'src/shared/shared.module';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository]), SharedModule, AuthModule],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule { }
