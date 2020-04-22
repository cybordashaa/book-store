import { Controller, Get, Param, ParseIntPipe, Post, Body, Patch, Delete } from "@nestjs/common";
import { RoleService } from "./role.service";
import { Role } from "./role.entity";

@Controller('role')
export class RoleController {

    constructor(private readonly _roleService: RoleService) { }

    @Get(':id')
    async getRole(@Param('id', ParseIntPipe) id: number): Promise<Role> {
        const role = await this._roleService.get(id);
        return role;
    }

    @Get()
    async getRoles(): Promise<Role[]> {
        const roles = await this._roleService.getAll();
        return roles;
    }

    @Post()
    async createRole(@Body() role: Role): Promise<Role> {
        const createRole = await this._roleService.create(role);

        return createRole;
    }

    @Patch(':id')
    async updateRole(@Param('id', ParseIntPipe) id: number, @Body() role: Role) {
        await this._roleService.update(id, role);
        return true;
    }

    @Delete(':id')
    async deleteRole(@Param('id', ParseIntPipe) id: number) {
        await this._roleService.delete(id);
        return true;
    }
} 