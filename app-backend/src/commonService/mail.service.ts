import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
let ENV = config().parsed;
import axios from 'axios';

@Injectable()
export class NotificationService {
    
    // sendMail = async (
    //     to: String,
    //     subject: String,
    //     body: any,
    //     cc : String,
    //     bcc: String
    // ) => {
    //     let bodyObj = {
    //         to_email: to,
    //         subject: subject,
    //         html_body: body,
    //         with_template: false,
    //         type: 'grue and bleen'
    //     };
    //     return axios
    //             .post(`${ENV['MAIL_NOTIFICATION_URL']}`, bodyObj, {
    //                 headers: {
    //                     Accept: 'application.json',
    //                     'content-Type': 'application/json'
    //                 },
    //             }).then((res) => {
    //                 return res.data.message;
    //             }).catch((error)=> {
    //                 return error.message;
    //             });
    // };
}