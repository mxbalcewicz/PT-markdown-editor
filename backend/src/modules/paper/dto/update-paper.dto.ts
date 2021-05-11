import { IsArray } from 'class-validator';

export class UpdatePaperDto {
  @IsArray()
  content: [];
}
