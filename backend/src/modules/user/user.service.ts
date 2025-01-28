import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/models/User.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userEntity: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto, req: Request) {
    let respData = {
      status: 200,
      data: [],
      msg: 'User created successfully',
    };
    let { phone, password } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const isExits = await this.userEntity.findOne({
      where: { phone: phone },
      select: ['id'],
    });
    if (isExits) {
      respData.status = 409;
      respData.msg = 'User already exits with given phone.';
      return respData;
    }
    let emp_id = "EMP0001";
    const user = this.userEntity.create({
      ...createUserDto,
      password: hashedPassword,
      emp_id
    });
    await this.userEntity.save(user);
    return respData;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
