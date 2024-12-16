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
    private readonly responseService: ResponseServices,
    //  private readonly userRepository: Repository<User>
  ) { }
  /**
   * @param req
   * @param res
   */
  // getUsers = async (req: Request, res: Response) => {
  //   try {
  //     let id = req.params.id || req.query.id || undefined;
  //     let whereCondition: any = {
  //       id: { [Op.ne]: 1 },
  //     };
  //     if (id) {
  //       whereCondition.id = id;
  //     }
  //     let bodyObj: any = {
  //       attributes: [
  //         'name',
  //         'user_name',
  //         'email',
  //         'password',
  //         'role_id',
  //         'mobile_no',
  //         'address',
  //         'remember_token',
  //       ],
  //       where: whereCondition,
  //       logging: true,
  //     };
  //     let userList = await User.findAll(bodyObj);
  //     return this.responseService.sent(res, 200, userList);
  //   } catch (error) {
  //     return this.responseService.sent(res, 500, [], error.message);
  //   }
  // };

  // getUsers(): Promise<User[]> {
  //   return this.User.find();
  // }
  /**
   * @param req
   * @param res
   */
  // createUser = async (req: Request, res: Response) => {
  //   try {
  //     let isDuplicate: any = await User.findAll({
  //       where: {
  //         [Op.or]: [
  //           { email: req.body?.email },
  //           { mobile_no: req.body?.mobile_no },
  //         ],
  //       },
  //     });
  //     if (isDuplicate) {
  //       return this.responseService.sent(
  //         res,
  //         409,
  //         'Duplicate Email Or Mobile Number.',
  //       );
  //     }
  //     let userTableData: object = {
  //       name: req.body?.name,
  //       user_name: req.body?.user_name,
  //       role_id: 2,
  //       email: req.body?.email,
  //       mobile_no: req.body?.mobile_no,
  //       password: req.body.password,
  //       created_by: 1,
  //       address: req.body.address || null,
  //     };

  //     await User.create(userTableData);
  //     return this.responseService.sent(res, 200, 'User Created Successfully');
  //   } catch (error) {
  //     return this.responseService.sent(res, 500, [], error.message);
  //   }
  // };

  /**
   *Password change for logged in user
   * @param request
   * @param response
   * @param authToken
   */
  // async setNewPassword(req: Request, res: Response, authToken: any) {
  //   try {
  //     let responseMessage = '';
  //     let responseCode = 200;
  //     let responseData = [];

  //     let userId = authToken?.userId;
  //     let isValidUser = await User.findOne({ where: { id: userId } });
  //     if (isValidUser) {
  //       const isMatch = await bcrypt.compare(
  //         isValidUser?.password,
  //         req.body?.current_password,
  //       );
  //       if (isMatch) {
  //         if (req.body.existing_password === req.body.new_password) {
  //           responseCode = 403;
  //           responseMessage =
  //             'Existing password and New password cannot be same';
  //         } else {
  //           if (req.body.new_password === req.body.confirm_password) {
  //             const salt = await bcrypt.genSalt(10);
  //             const hashPassword = await bcrypt.hash(
  //               req.body.new_password,
  //               salt,
  //             );

  //             await User.update(
  //               { password: hashPassword },
  //               { where: { id: userId } },
  //             );
  //             responseMessage = 'Password changed successfully';
  //           } else {
  //             responseCode = 403;
  //             responseMessage =
  //               'New password and Confirm Password must be same';
  //           }
  //         }
  //       } else {
  //         responseMessage = 'Password is wrong';
  //       }
  //     } else {
  //       responseMessage = 'User does not exist';
  //     }
  //     return this.responseService.sent(
  //       res,
  //       responseCode,
  //       responseData,
  //       responseMessage,
  //     );
  //   } catch (error) {
  //     return this.responseService.sent(res, 500, [], error.message);
  //   }
  // }

  /**
   * user Details
   * 
   */
  // async userDetails (req: Request, res: Response,  authToken:any) {
  //   try{
  //     //let authToken = req.user;
  //     // let userId = authToken?.id;
  //     let key:number = parseInt(req.body.key);
  //     if(!key){
  //       return this.responseService.sent(res, 400, [], "User ID is Required");
  //     }
  //     let getUseretails = await User.findOne({where:{id : key}});

  //     return this.responseService.sent(res, 200, getUseretails);
  //   }catch(error){
  //     return this.responseService.sent(res, 500, [], error.message);
  //   }
  // }



  /**
   * False remove
   * deleted_at = current datetime
   */
  // async removeuser(req: Request, res: Response) {
  //   try {
  //     let authToken: any = req.user;
  //     let userId = authToken?.id;
  //     let key: number = parseInt(req.body.key) || undefined;
  //     let datetime: any = req.body.date;
  //     if (!key) {
  //       return this.responseService.sent(res, 400, [], 'User-Id is required');
  //     }
  //     let updateData: any = {
  //       updated_by: userId,
  //       deleted_at: datetime,
  //     };
  //     await User.update(updateData, { where: { id: key } });
  //     return this.responseService.sent(res, 200, [], 'User removed successfully');
  //   } catch (error) {
  //     return this.responseService.sent(res, 500, [], error.message);
  //   }
  // }



}
