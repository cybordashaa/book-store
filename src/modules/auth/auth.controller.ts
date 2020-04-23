import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { SignupDto, SiginDto, LoggedInDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly _authService: AuthService) { }

    @Post('signUp')
    @UsePipes(ValidationPipe)
    signup(@Body() signupDto: SignupDto): Promise<void> {

        return this._authService.signUp(signupDto);
    }

    @Post('signIn')
    @UsePipes(ValidationPipe)
    signin(@Body() signinDto: SiginDto): Promise<LoggedInDto> {
        return this._authService.signin(signinDto);

    }

}
