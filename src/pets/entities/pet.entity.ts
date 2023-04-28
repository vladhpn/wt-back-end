import { UserEntity } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pets')
export class PetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alias: string;

  @Column()
  age: number;

  @Column()
  color: string;

  @Column()
  kind: string;

  @Column()
  breed: string;

  @Column()
  gender: string;

  @Column()
  birthady: string;

  @Column()
  weight: number;

  @Column()
  height: number;

  @ManyToOne(() => UserEntity, (user) => user.pets)
  user: UserEntity;
}
