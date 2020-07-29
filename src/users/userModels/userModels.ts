import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    BeforeInsert,
    OneToMany,
    ManyToMany,
    JoinTable,
} from 'typeorm';

import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;
}

export class CreateUserDto {
    @ApiProperty() 
    readonly id: number;

    @ApiProperty()
    readonly firstName: string;

    @ApiProperty()
    readonly lastName: string;

    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly password: string;
}

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }

  toObject(showToken: boolean = true): User {
    const { id, firstName, lastName, email } = this;
    const userObject: User = {
      id,
      firstName,
      lastName,
      email,
    };
    return userObject;
  }
}


export class User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}

