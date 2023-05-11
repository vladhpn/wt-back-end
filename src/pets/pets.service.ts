import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetEntity } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(PetEntity)
    private readonly petRepository: Repository<PetEntity>,
  ) {}

  save(pet: PetEntity, userId: number) {
    return this.petRepository.save({
      alias: pet.alias,
      age: pet.age,
      color: pet.color,
      kind: pet.kind,
      breed: pet.breed,
      gender: pet.gender,
      birthady: pet.birthady,
      weight: pet.weight,
      height: pet.height,
      userId: { id: userId },
    });
  }

  getAll(userId: number) {
    return this.petRepository.find({ where: { userId: Equal(userId) } });
  }

  find(cat: Partial<PetEntity>) {
    return this.petRepository.find({
      where: {
        ...cat,
      },
    });
  }

  // create(createPetDto: CreatePetDto) {
  //   return 'This action adds a new pet';
  // }

  // findAll() {
  //   return `This action returns all pets`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} pet`;
  // }

  // update(id: number, updatePetDto: UpdatePetDto) {
  //   return `This action updates a #${id} pet`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} pet`;
  // }
}

// @Injectable()
// export class CatService {
//   constructor(
//     @InjectRepository(CatEntity)
//     private readonly catRepository: Repository<CatEntity>,
//   ) {}

//   save(cat: CatEntity) {
//     return this.catRepository.save([cat]);
//   }

//   getAll() {
//     return this.catRepository.find();
//   }

//   find(cat: Partial<CatEntity>) {
//     return this.catRepository.find({
//       where: {
//         ...cat,
//       },
//     });
//   }
// }
