import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { SignupDto, SiginDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly _authService: AuthService) { }

    @Post('signUp')
    @UsePipes(ValidationPipe)
    async signup(@Body() signupDto: SignupDto): Promise<void> {

        return this._authService.signUp(signupDto);
    }

    @Post('signIn')
    @UsePipes(ValidationPipe)
    async signin(@Body() signinDto: SiginDto) {
        return this._authService.signin(signinDto);

    }

}
