import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'admin', description: 'value of role' })
  readonly value: string;

  @ApiProperty({ example: 'administrator', description: 'description of role' })
  readonly description: string;
}
