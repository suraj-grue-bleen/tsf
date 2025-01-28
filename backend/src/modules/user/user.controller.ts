import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseServices } from 'src/common/response.services';

@Controller('')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly responseService: ResponseServices,
  ) {}

  @Post('create')
  async create(
    @Body() createUserDto: CreateUserDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const data = await this.userService.create(createUserDto, req);
      return this.responseService.sent(res, data?.status, data?.data, data?.msg);
    } catch (error) {
      this.responseService.sent(res, 500, [], error.message);
    }
  }

  @Get('list')
  async findAll(@Req() req: Request, @Res() res: Response) {
    try {
      const data = await this.userService.findAll();
      return this.responseService.sent(res, 200, data);
    } catch (error) {
      this.responseService.sent(res, 500, [], error.message);
    }
  }

  @Get('details/:id')
  async findOne(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const data = await this.userService.findOne(+id);
      return this.responseService.sent(res, 200, data);
    } catch (error) {
      this.responseService.sent(res, 500, [], error.message);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const data = await this.userService.update(+id, updateUserDto);
      return this.responseService.sent(res, 200, data);
    } catch (error) {
      this.responseService.sent(res, 500, [], error.message);
    }
  }
}
