import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
let env = dotenv.config().parsed;
import * as bcrypt from 'bcrypt';
import { ResponseServices } from 'src/commonService/response.services';
import { User } from 'src/models/User.entity';
import { Response, Request} from 'express';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
    constructor(
        private mailerService: MailerService,
        private responseService: ResponseServices,
        private jwtService: JwtService
    ) {}

    // async validateUser(email: string, password: string): Promise<any> {
    //     let user = await User.findOne({
    //         where:{
    //             email:email
    //         },
    //         raw: true,
    //         //logging:true
    //     });
    //     let isMatch = false;
    //     if (user) isMatch = await bcrypt.compare(password, user?.password);
    //     if(user && isMatch) {
    //         return user;
    //     } else {
    //         return 401;
    //     }
    // }

    // async accessToken(user:any){
    //     return {
    //         access_token: this.jwtService.sign(user),
    //     };
    // }

    //Refresh Token
    // async refreshToken(user:any){
    //     let refresh_token = await this.jwtService.signAsync(user, {
    //         secret: env['JWT_RT_SECRET'],
    //     });
    //     return refresh_token;
    // }

    //Verify Refresh Token
    // async verifyRefreshToken(token:any){
    //     let verified = await this.jwtService.verifyAsync(token, {
    //         secret: env['JWT_RT_SECRET'],
    //         ignoreExpiration:false,
    //     });
    //     return verified;
    // }

    //Verify Access Token
    // async verifyAccessToken(req: Request, res: Response, token: string){
    //     try{
    //         let verified = await this.jwtService.verifyAsync(token, {
    //             secret: env['JWT_SECRET'],
    //             ignoreExpiration: false
    //         });
    //         this.responseService.sent(res, 200, verified);
    //     }catch(error){
    //         throw UnauthorizedException;
    //     }
    // }

    // generateOTP = (limit)=>{
    //     var digits = '0123456789';
    //     let OTP = '';
    //     for (let i = 0; i < limit; i++ ) {
    //         OTP += digits[Math.floor(Math.random() * 10)];
    //     }
    //     return OTP;
    // }

    //mail send for forgot password
    // sendForgotPasswordMail = async (req: Request, res: Response) => {
    //     try{
    //         if(!req.body.email || req.body.email==='')
    //             return this.responseService.sent(res, 400, [], 'Email-Id is required')
    //         let isExists: any = await User.findOne({
    //             attributes: ['id', 'name', 'email', 'user_name', 'primary_mobile'],
    //             where:{
    //                 email:req.body.email
    //             }
    //         });
    //         if(!isExists) {
    //             return this.responseService.sent(res, 400, [], 'User not found. You can create new account');
    //         } else {
    //             isExists = isExists.toJSON();
    //             let otp:any = await this.generateOTP(4);
    //             //send mail notification. write code for mailservice
    //             await this.mailerService.sendMail({
    //                 to: isExists?.email,
    //                 from: 'noreply@nestjs.com',
    //                 subject: `Reset Password | Grue and Bleen`,
    //                 html: `Dear ${isExists?.name},<br/><br/>Your OTP for reset password is ${otp}. <br/><br/>Regards,<br/>Grue and Bleen`,
                   
    //             }).then(async()=>{
    //                 await User.update({otp}, {where:{id:isExists?.id}});
    //                 return this.responseService.sent(res, 200, isExists, 'success');
    //             }).catch((error)=>{
    //                 return this.responseService.sent(res, 500, [], 'Something went wrong');
    //             });
    //             //send sms notification. write code for smsNotification
                
    //         }
    //     }catch(error){
    //         this.responseService.sent(res, 500, [], error.message);
    //     }
    // }

    /*
    * @param req
    * @param res
    * @returns
    * 
    * */
    // verifyOtp = async (req: Request, res: Response) => {
    //     try {
    //         const { email, otp } = req.body;
    //         if(!email || !otp) {
    //             return this.responseService.sent(res, 400, 'Email and OTP Required');
    //         }
    //         let data = await User.findOne({
    //             attributes:['id'],
    //             where: {email, otp},
    //         })
    //         if(!data) {
    //             return this.responseService.sent(res, 400, [], 'OTP/email is not valid');
    //         }

    //         //Remove OTP//
    //         await User.update({otp: 0},{where:{email, otp}});
    //         //OTP valid for 1 minute
    //         let token = await this.jwtService.signAsync(
    //             {id: data?.id, userId: data?.id, email},
    //             {   secret : env['JWT_SECRET'],
    //                 expiresIn : 100000,
    //             },
    //         );

    //         return this.responseService.sent(res, 200, { token }, 'OTP verified successfully');
    //     } catch(error) {
    //         return this.responseService.sent(res, 500, [], error.message);
    //     }
    // } 
}
