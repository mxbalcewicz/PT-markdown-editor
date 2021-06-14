import { IsNotEmpty, IsString } from 'class-validator';

export class AuthLocalUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
