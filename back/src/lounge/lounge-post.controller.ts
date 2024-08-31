import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { LoungePostService } from './lounge-post.service';
import { CreateLoungePostDto } from './dto/create-lounge-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('lounge-post')
export class LoungePostController {
  constructor(private readonly loungePostService: LoungePostService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createLoungePostDto: CreateLoungePostDto, @Req() req) {
    return this.loungePostService.createPost(createLoungePostDto, req.user);
  }

  @Get()
  findAll() {
    return this.loungePostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loungePostService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateLoungePostDto: Partial<CreateLoungePostDto>,
  ) {
    return this.loungePostService.updatePost(+id, updateLoungePostDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.loungePostService.removePost(+id);
  }
}
