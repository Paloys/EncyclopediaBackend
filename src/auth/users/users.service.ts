import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['ingredients'] });
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({
      where: { id },
      relations: ['ingredients'],
    });
  }

  async findOneUsername(username: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { username: username },
      relations: ['ingredients'],
    });
  }

  findIngredients(id: number) {
    return this.usersRepository.findOne({
      where: { id },
      relations: ['ingredients'],
    });
  }

  async create(username: string, hashedPassword: string) {
    const { password, ...result } = await this.usersRepository.save({
      username,
      password: hashedPassword,
    });
    return result;
  }
}
