import { PetEntity } from 'src/pets/entities/pet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  fullName: string;

  @OneToMany(() => PetEntity, (pet) => pet.userId)
  pets: PetEntity[];
}
