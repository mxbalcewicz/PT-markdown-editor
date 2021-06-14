import {
  Controller,
  Post,
  Get,
  Param,
  Put,
  Body,
  NotFoundException,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { PaperService } from './paper.service';
import { UpdatePaperDto } from './dto/update-paper.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User as UserModel } from '../user/user.schema';
import { User } from '../user/user.decorator';

@Controller('documents')
export class PaperController {
  constructor(private paperService: PaperService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@User() user: UserModel) {
    return this.paperService.create(user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':hash')
  delete(@User() user: UserModel, @Param('hash') hash: string) {
    return this.paperService.delete(user, hash);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@User() user: UserModel) {
    return this.paperService.findAll(user);
  }

  @Get(':hash')
  findOne(@Param('hash') hash: string) {
    return this.paperService.findOne(hash);
  }

  @Get('read/:readHash')
  findOneByReadHash(@Param('readHash') readHash: string) {
    return this.paperService.findOneByReadHash(readHash);
  }

  @Put(':hash')
  update(@Param('hash') hash: string, @Body() updatePaperDto: UpdatePaperDto) {
    return this.paperService.update(hash, updatePaperDto);
  }
}
