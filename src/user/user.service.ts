import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeleteResult, In, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserFindOptions } from "./models/find-options";

@Injectable()
export class UserService {
  @InjectRepository(User) private readonly userRepository: Repository<User>;

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(findOptions: UserFindOptions): Promise<User | null> {
    return this.userRepository.findOneBy(findOptions);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    updateUserDto.id = id;
    await this.userRepository.save(updateUserDto);
    return this.userRepository.findOneBy({ id });
  }

  remove(id: number | number[]): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }

  findByIds(ids: number[]): Promise<User[]> {
    return this.userRepository.findBy({ id: In(ids) });
  }
}
