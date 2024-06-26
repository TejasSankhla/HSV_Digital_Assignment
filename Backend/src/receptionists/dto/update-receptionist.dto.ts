// src/receptionists/dto/update-receptionist.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateReceptionistDto } from './create-receptionist.dto';

export class UpdateReceptionistDto extends PartialType(CreateReceptionistDto) {}
