import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetEntity } from './entities/pet.entity';

@Module({
  controllers: [PetsController],
  providers: [PetsService],
  imports: [TypeOrmModule.forFeature([PetEntity])],
})
export class PetsModule {}
