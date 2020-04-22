import { Controller, Get, Param, Post, Body, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly _userService: UserService) { }

    @Get(':id')
    async getUser(@Param() id: number) {
        const user = await this._userService.get(id);
        return user;
    }

    @Get()
    async getUsers() {
        const users = await this._userService.getAll();
        return users;
    }

    @Post('create')
    async createUser(@Body() user: User): Promise<User> {
        const createUser = await this._userService.create(user);
        return createUser;
    }

    @Patch(':id')
    async updateUser(@Param() id: number, @Body() user: User): Promise<any> {
        const updateUser = await this._userService.update(id, user);
        return updateUser;
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
        await this._userService.delete(id);
        return true;
    }

}
