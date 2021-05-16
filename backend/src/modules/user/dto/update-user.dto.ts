import { PartialType } from '@nestjs/swagger';
import { AuthUserDto } from './auth-user.dto';

export class UpdateUserDto extends PartialType(AuthUserDto) {}
