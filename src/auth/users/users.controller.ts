import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @Get()
  async findAll() {
    return this.usersServices.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.usersServices.findOne(id);
  }

  @Get(':id/ingredients')
  async findIngredients(@Param('id') id: number) {
    return this.usersServices.findIngredients(id);
  }
}
