import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Must be a string' })
  readonly title: string;
  readonly content: string;
  readonly userId: number;
}
