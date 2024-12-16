import { Controller, UseGuards, ValidationPipe, Get, Post, Req, Res, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDto } from './auth.dto';
import { Response, Request } from 'express';
import { ResponseServices } from 'src/commonService/response.services';
import { User } from 'src/models/User.entity'; 
import { LocalAuthGuard } from './Local/localAuthguards';




@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private responseService: ResponseServices,
    ){}

    // @UseGuards(LocalAuthGuard)
    // @Post('api/auth/login')
    // async login (
    //     @Body(ValidationPipe) loginDto: LogInDto,
    //     @Req() req: Request,
    //     @Res() res: Response,
    // ) {
    //     try{
    //         let userData:any = req.user;
    //         if(userData === 401){
    //             return this.responseService.sent(res, 401, [], "Username or Password is incorrect");
    //         }
    //         let userSendData:any = {
    //             userId: userData?.id,
    //             name: userData?.name,
    //             user_name: userData?.user_name,
    //             email: userData?.email,
    //             password: userData?.password,
    //             role_id: userData?.role_id,
    //             mobile_no: userData?.mobile_no,
    //             address: userData?.address

    //         }
    //         let response = await this.authService.accessToken(userSendData);
    //         let refreshToken = await this.authService.refreshToken(userSendData);
    //         res.cookie('RtToken', refreshToken, {
    //             httpOnly:true,
    //             sameSite:false,
    //             secure:true
    //         });
    //        return this.responseService.sent(res, 200, {
    //         accessToken: response?.access_token,
    //         user: userSendData
    //        });
    //     }catch(error){
    //         return this.responseService.sent(res, 401, [], error.message)
    //     }
    // }

    /**
     * Refresh Token
     * @param req
     * @param res
     */
//     @Get('api/auth/refresh-token')
//     async refreshToken(
//         @Req() req: Request,
//         @Res() res: Response
//     ) {
//         try{
//             let rtToken = req.cookies['RtToken'];
//             let isValid = await this.authService.verifyRefreshToken(rtToken);
//             if(isValid){
//                 let accessToken = await this.authService.accessToken({
//                     email: isValid.email,
//                     password: isValid.password
//                 });
//                 this.responseService.sent(res, 200, accessToken);
//             } else {
//                 this.responseService.sent(res, 401, []);
//             }
//         } catch(error){
//             return this.responseService.sent(res, 500, [], error.message)
// ;        }
//     }

    /**
     *  Verify Access Token
     * @param req
     * @param res
     * 
     */
    // @Get('api/auth/verify-access-token')
    // async verifyAccessToken(
    //     @Req() req: Request,
    //     @Res() res: Response,
    // ) {
    //     try{
    //         if(req.header['authorization'] === undefined){
    //             this.responseService.sent(res, 400, [], 'A token is required for authentication');
    //         }
    //         const token:any = req.header['authorization'].split(' ')[1] || '';
    //         if(token === null){
    //             this.responseService.sent(res, 400, [], 'Invalid Token');
    //         }
    //         await this.authService.verifyAccessToken(req, res, token);
    //     }catch(error){
    //         return this.responseService.sent(res, 403, []);
    //     }
    // }

    /**
     * 
     * Forgot Password 
     */
    // @Post('api/auth/forgot-password-mail')
    // async sendForgotPasswordMail(@Req() req: Request, @Res() res: Response)  {
    //     this.authService.sendForgotPasswordMail(req, res);
    // }

    /**
     * @param req email
     * @param req Otp verified with token
     */
    // @Post ('api/auth/verify-otp')
    // async verifyOtp(@Req() req: Request, @Res() res: Response) {
    //     this.authService.verifyOtp(req, res);
    // }



}
