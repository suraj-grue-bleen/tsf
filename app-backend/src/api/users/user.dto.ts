import { ValidationError } from '@nestjs/common';
import { 
    IsString,
    IsNotEmpty,
    IsNumber,
    IsEmail,
    IsObject,
    ValidateIf
} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    user_name: string;
  
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
  
    @IsString()
    @IsNotEmpty()
    mobile_no: string;
  
}

//password update for forgot password
export class UpdatePasswordDto {
    @IsString()
    @IsNotEmpty()
    current_password: string;

    @IsString()
    @IsNotEmpty()
    new_password: string;

    @IsString()
    @IsNotEmpty()
    confirm_password: string;

}

//password change for logged in User
export class ResetPassWordDto {
    @IsString()
    @IsNotEmpty()
    new_password: string;

    @IsString()
    @IsNotEmpty()
    confirm_password: string;
}

export class ForgotPasswordMailDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string
}

// export class CheckDuplicateUserDto {
//     @ValidateIf()
// }

