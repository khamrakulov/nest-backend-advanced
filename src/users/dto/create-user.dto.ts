import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';
export class CreateUserDto {
  @ApiProperty({
    example: 'user@gmail.com',
    description: 'user email',
  })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({
    example: 'password123#',
    description: 'user password',
  })
  @IsString({ message: 'Must be string' })
  @Length(4, 16, { message: 'Not less than 4 and not more than 16' })
  readonly password: string;
}
