import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { PetEntity } from './entities/pet.entity';
import { UserId } from 'src/auth/decorators/user-id.decorator';

@Controller('pets')
@ApiTags('pets')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class PetsController {
  constructor(private readonly petService: PetsService) {}

  @Get('all')
  getAllPets(@UserId() userId: number) {
    return this.petService.getAll(userId);
  }

  @Get(':id')
  getPetById(@Param('id') id: number) {
    return this.petService.find({ id });
  }

  @Post()
  save(@Body() body: PetEntity, @UserId() userId: number) {
    return this.petService.save(body, userId);
  }

  // @Post()
  // create(@Body() createPetDto: CreatePetDto) {
  //   return this.petsService.create(createPetDto);
  // }

  // @Get()
  // findAll() {
  //   return this.petsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.petsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
  //   return this.petsService.update(+id, updatePetDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.petsService.remove(+id);
  // }
}
