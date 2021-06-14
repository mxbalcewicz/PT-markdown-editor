import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsArray()
  photos?: [];

  @IsString()
  refreshToken?: string;
}
