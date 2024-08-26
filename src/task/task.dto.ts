import { IsString } from 'class-validator';

export class TaskDto {
  @IsString() //validation
  name: string;
}
