// src/posts/dto/create-post.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  contents: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}
