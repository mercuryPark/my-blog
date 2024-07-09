import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { FirebaseService } from './firebase/firebase.service';
import { CreatePostDto } from './dto/post';

@Controller()
export class AppController {
  constructor(private readonly firebaseService: FirebaseService) {}

  // * 추가

  @Post('add')
  async addDocument(@Body() data: CreatePostDto) {
    try {
      const docId = await this.firebaseService.addDocument('post', data);
      return {
        id: docId,
        ...data,
        created_at: Date.now(),
      };
    } catch (error) {
      throw new Error('Failed to add document');
    }
  }

  // * 조회
  @Get('get/:id?')
  async getDocument(@Param('id') id?: string | undefined) {
    const data = await this.firebaseService.getDocument('post', id);
    return { id, data };
  }

  // * 수정/업데이트
  @Put('update/:id')
  async updateDocument(@Param('id') id: string, @Body() data: CreatePostDto) {
    const updatedDoc = await this.firebaseService.updateDocument(
      'post',
      id,
      data,
    );
    return { updatedDoc };
  }

  // * 삭제
  @Delete('delete/:id?')
  async deleteDocument(@Param('id') id?: string) {
    const data = await this.firebaseService.deleteDocument('post', id);
    if (id) {
      return { data };
    } else {
      return { success: 'All posts were successfully deleted' };
    }
  }
}
