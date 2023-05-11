import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { PetEntity } from './pets/entities/pet.entity';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    PetsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      entities: [PetEntity, UserEntity],
    }),
    UsersModule,
    AuthModule,
  ],

  controllers: [AuthController],
  providers: [AppService, AuthService, JwtService],
})
export class AppModule {}
