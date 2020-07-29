import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity, CreateUserDto } from '../users/userModels/userModels'
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
      ) {}
    
      public async findAll(): Promise<UserEntity[]> {
        return this.usersRepository.find();
      }
    
      public async findByID(id: number): Promise<UserEntity> {
        return this.usersRepository.findOne(id);
      }

      public async findByEmail(userEmail: string): Promise<UserEntity | null> {
        return await this.usersRepository.findOne({ email: userEmail });
      }

      public async create(user: CreateUserDto): Promise<UserEntity> {
        return await this.usersRepository.save(user);
      }

      public async update(
        id: number,
        newValue: CreateUserDto,
      ): Promise<UserEntity | null> {
        const user = await this.usersRepository.findOneOrFail(id);
        if (!user.id) {
          // tslint:disable-next-line:no-console
          console.error("user doesn't exist");
        }
        await this.usersRepository.update(id, newValue);
        return await this.usersRepository.findOne(id);
      }
    
      public async delete(id: string): Promise<void> {
        await this.usersRepository.delete(id);
      }

      public async register(userDto: CreateUserDto): Promise<UserEntity> {
        const { email } = userDto;
        let user = await this.usersRepository.findOne({ where: { email } });
        if (user) {
          throw new RpcException('User already exists, please login');
        }
        user = await this.usersRepository.create(userDto);
        return await this.usersRepository.save(user);
      }
}
