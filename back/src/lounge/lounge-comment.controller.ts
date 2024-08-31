import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { LoungeCommentService } from './lounge-comment.service';
import { CreateLoungeCommentDto } from './dto/create-lounge-comment.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('lounge-comment')
export class LoungeCommentController {
  constructor(private readonly loungeCommentService: LoungeCommentService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createLoungeCommentDto: CreateLoungeCommentDto, @Req() req) {
    const { postId } = createLoungeCommentDto;
    const post = this.loungeCommentService.findOne(postId);
    return this.loungeCommentService.createComment(
      createLoungeCommentDto,
      req.user,
      post,
    );
  }

  @Get()
  findAll() {
    return this.loungeCommentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loungeCommentService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.loungeCommentService.removeComment(+id);
  }
}
