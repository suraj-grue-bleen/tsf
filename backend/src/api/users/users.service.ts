import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response, Request } from 'express';
import { ResponseServices } from 'src/commonService/response.services';
import { ModelObj } from 'src/models';
import { User } from 'src/models/User.entity';
// const { User } = ModelObj;
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    //private readonly responseService: ResponseServices,
    private readonly userRepository: Repository<User>
  ) { }
  /**
   * @param req
   * @param res
   *//**
   * Fetch all users.
   * @returns {Promise<User[]>}
   */
  async getUsers(): Promise<User[]> {
    return await this.userRepository.find({
      relations: ['department', 'role'], // Include related entities if needed
    });
  }
  
  
  



}
