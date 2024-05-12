import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { DeleteResult } from 'typeorm';
import { ValidateSchemaPipe } from '../pipes/validate-schema.pipe';
import { createUserSchema, CreateUserDto } from '../dto/create-user.dto';
import { updateUserSchema, UpdateUserDto } from '../dto/update-user.dto';
import { CheckExistingUserPipe } from '../pipes/check-existing-user.pipe';
import {
  bulkDeleteIdsSchema,
  BulkDeleteIdsDto,
} from '../dto/bulk-delete-ids.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidateSchemaPipe(createUserSchema), CheckExistingUserPipe)
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto as any);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne({ id: +id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidateSchemaPipe(updateUserSchema))
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.userService.remove(+id);
  }

  @Post('/bulk-remove')
  bulkDelete(
    @Body(new ValidateSchemaPipe(bulkDeleteIdsSchema))
    { ids }: BulkDeleteIdsDto,
  ): Promise<DeleteResult> {
    return this.userService.remove(ids);
  }
}
