import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles/roles.guard';
import { Roles } from './roles/roles.decorator';
import { Role } from './roles/role.enum';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private rolesGuard: RolesGuard,
  ) {}

  @HttpCode(200)
  @Post('login')
  async signIn(@Body() loginDto: Record<string, any>) {
    return this.authService.signIn(loginDto.username, loginDto.password);
  }

  @HttpCode(201)
  @Post('register')
  async createAccount(@Body() registerDto: AuthDto) {
    return this.authService.createAccount(
      registerDto.username,
      registerDto.password,
    );
  }

  @UseGuards(AuthGuard)
  @Roles(Role.ADMIN)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
