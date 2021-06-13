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
import { User as UserModel } from '../user/user.schema';
import { User } from '../user/user.decorator';


@UseGuards(JwtAuthGuard)
@Controller('documents')
export class PaperController {
  constructor(private paperService: PaperService) {}

  @Post()
  create(@User() user: UserModel) {
    return this.paperService.create(user);
  }

  @Get()
  async findAll(@User() user: UserModel) {

    return this.paperService.findAll(user);
  }

  @Get(':hash')
  async findOne(@Param('hash') hash: string) {
    const paper = await this.paperService.findOne(hash);
    if (!paper) {
      throw new NotFoundException();
    }
    return paper;
  }

  @Get('read/:readHash')
  async findOneByReadHash(@Param('readHash') readHash: string) {
    const paper = await this.paperService.findOneByReadHash(readHash);
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
