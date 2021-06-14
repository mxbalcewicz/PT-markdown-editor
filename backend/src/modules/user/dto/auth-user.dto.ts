import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsArray()
  photos?: [];
}
