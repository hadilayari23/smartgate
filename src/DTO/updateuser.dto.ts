import { PartialType } from '@nestjs/mapped-types';
import { UserDTO } from './creatuser.dto';

export class UpdateUserDto extends PartialType(UserDTO) {}