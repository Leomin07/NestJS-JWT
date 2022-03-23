import { Body, Controller, Logger, Post, Res } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  private logger = new Logger();

  @Post('/signup')
  signUp(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.authService.signUp(createUserDto);
  }

  @Post('/login')
  signIn(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
  ): Promise<{ accessToken: string }> {
    res.ok;
    return this.authService.signIn(createUserDto);
  }
}
