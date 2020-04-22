import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';
import { SharedModule } from 'src/shared/shared.module';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
    imports: [TypeOrmModule.forFeature([RoleRepository]), SharedModule],
    controllers: [RoleController],
    providers: [
        RoleService
    ]
})
export class RoleModule { }
