import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

describe('AuthGuard', () => {
  it('should be defined', () => {
    return expect(
      new AuthGuard(new JwtService(), new ConfigService()),
    ).toBeDefined();
  });
});
