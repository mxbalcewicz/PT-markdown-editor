import {
  Controller,
  Post,
  Get,
  Param,
  Put,
  Body,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { PaperService } from './paper.service';
import { UpdatePaperDto } from './dto/update-paper.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('api/documents')
export class PaperController {
  constructor(private paperService: PaperService) {}

  @Post()
  create() {
    return this.paperService.create();
  }

  @Get()
  findAll() {
    return this.paperService.findAll();
  }

  @Get(':hash')
  async findOne(@Param('hash') hash: string) {
    const paper = await this.paperService.findOne(hash);
    if (!paper) {
      throw new NotFoundException();
    }
    return paper;
  }

  @Put(':hash')
  update(@Param('hash') hash: string, @Body() updatePaperDto: UpdatePaperDto) {
    return this.paperService.update(hash, updatePaperDto);
  }
}
