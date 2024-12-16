import {
  Controller,
  Req,
  Res,
  Get,
  Post,
  Body,
  UseGuards,
  Param,
  Delete,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt/jwtAuthguards';
import { Request, Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto, UpdatePasswordDto } from './user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import multerOptions from 'src/config/multer.config';
import { User } from 'src/models/User.entity';
@Controller('')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /*
   * all User List
   * @param req
   * @param res
   */
  // @Get('get-user-list/:id?')
  // async getUserList(@Req() req: Request, @Res() res: Response) {
  //   this.usersService.getUsers(req, res);
  // }
  // @Get('get-user-list/:id?')
  // async findAllUsers(@Req() req: Request, @Res() res: Response): Promise<User[]> {
  //   return this.usersService.getUsers();
  // }

  

  /**
   * @param createUserDTO
   * @param req
   * @param res
   * @param transaction
   *
   */
  // @Post('create-user')
  // async createUser(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Body() createUserDto: CreateUserDto,
  // ) {
  //   this.usersService.createUser(req, res);
  // }

  /**
   * Update password for logged in user
   * @param updatePasswordDto
   * @return response
   */
  // @Post('update-password')
  // async updateAuthenticatedPassword(
  //   @Body() updatePasswordDTO: UpdatePasswordDto,
  //   // eslint-disable-next-line prettier/prettier
  //   @Req() req: Request,
  //   @Res() res: Response,
  // ) {
  //   let authToken = req.user;
  //   this.usersService.setNewPassword(req, res, authToken);
  // }

  /**
   * User Details
   * @Param req
   * @Param res
   */
  // @Get('get-user-details')
  // async getUserdetails(@Req() req: Request, @Res() res: Response) {
  //   let authToken = req.user;
  //   this.usersService.userDetails(req, res, authToken);
  // }

  /**
   * Soft Delete User
   * @Param req
   * @return response
   */
  // @Post('remove-user')
  // async removeUser(@Req() req: Request, @Res() res: Response) {
  //   this.usersService.removeuser(req, res);
  // }

  /**
   * File/Image upload
   */

  // @Post('upload-image')
  // @UseInterceptors(
  //   // FileInterceptor('image', multerOptions),
  //   FileInterceptor('image', {
  //     storage: diskStorage({
  //       destination: './public/upload',
  //       filename: (req, file, callback) => {
  //         const name = file.originalname.split('.')[0];
  //         callback(null, `${name}`);
  //       },
  //     }),
  //     fileFilter: (req, file, callback) => {
  //       if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
  //         callback(null, true);
  //       } else {
  //         callback(new Error('Unsupported file type'), false);
  //       }
  //     },
  //   }),
  // )
  //upload single file
  // async uploadFile(@UploadedFiles() file) {
  //   const response = {
  //     originalname: file.originalname,
  //     filename: file.filename,
  //   };
  //   return response;
  // }

  //upload multiple file
  // async uploadMultipleFiles(@UploadedFiles() files) {
  //   const response = [];
  //   files.forEach(file => {
  //     const fileReponse = {
  //       originalname: file.originalname,
  //       filename: file.filename,
  //     };
  //     response.push(fileReponse);
  //   });
  //   return response;
  // }
  
}
