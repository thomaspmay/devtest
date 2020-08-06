import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../users/userModels/userModels'
import { RpcException } from '@nestjs/microservices';
import { UserEntity } from './userModels/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
      ) {}
      
      // create

      public async registerUser(userDto: CreateUserDto): Promise<UserEntity> {
        const { email } = userDto;
        let user = await this.usersRepository.findOne({ where: { email } });
        if (user) {
          throw new RpcException('User already exists, please login');
        }
        user = await this.usersRepository.create(userDto);
        return await this.usersRepository.save(user);
      }

      public async createUser(user: CreateUserDto): Promise<UserEntity> {
        return await this.usersRepository.save(user);
      }

      // read

      // public async getUsers(): Promise<UserEntity[]> {
      //   return this.usersRepository.find();
      // }
    
      public async findUserByID(id: number): Promise<UserEntity> {
        return this.usersRepository.findOne(id);
      }

      public async findUserByEmail(userEmail: string): Promise<UserEntity | null> {
        return await this.usersRepository.findOne({ email: userEmail });
      }

      // update
      public async updateUser(
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
      
      // delete
      public async deleteUser(id: string): Promise<void> {
        await this.usersRepository.delete(id);
      }
}
