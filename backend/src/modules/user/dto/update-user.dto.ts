import { PartialType } from '@nestjs/swagger';
import { AuthUserDto } from './auth-user.dto';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
