import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signin(email: string, passwd: string) {
    const user = await this.usersService.findOneByEmail(email);

    if (user.password !== passwd) {
      throw new UnauthorizedException('Email/Password invalid(s)!');
    }

    // const { password, ...result } = user;
    const payload = { sub: user.id, username: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
