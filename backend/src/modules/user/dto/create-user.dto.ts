import {
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsInt,
  MaxLength,
  MinLength,
  IsString,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required.' })
  @MaxLength(100, { message: 'Name should not exceed 100 characters.' })
  @IsString({ message: 'Name must be a string.' })
  name: string;

  @IsOptional()
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  @MaxLength(100, { message: 'Email should not exceed 100 characters.' })
  email: string;

  @IsNotEmpty({ message: 'Phone number is required.' })
  @MaxLength(10, { message: 'Phone number should be exactly 10 digits.' })
  @MinLength(10, { message: 'Phone number should be exactly 10 digits.' })
  @IsString({ message: 'Phone number must be a string.' })
  phone: string;

  @IsOptional()
  @MaxLength(100, { message: 'Address should not exceed 100 characters.' })
  @IsString({ message: 'Address must be a string.' })
  address: string;

  @IsOptional()
  @IsString({ message: 'Password must be a string.' })
  @MaxLength(20, { message: 'Password should not exceed 20 characters.' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must contain at least one lowercase letter, uppercase letter, number, special character, and be at least 8 characters long.',
    },
  )
  password: string;

  @IsNotEmpty({ message: 'Role ID is required.' })
  @IsInt({ message: 'Role ID must be an integer.' })
  role_id: number;

  @IsOptional()
  @IsInt({ message: 'Department ID must be an integer.' })
  dept_id?: number;

  @IsOptional()
  @IsInt({ message: 'State ID must be an integer.' })
  state_id?: number;

  @IsOptional()
  @IsInt({ message: 'District ID must be an integer.' })
  district_id?: number;

  @IsOptional()
  @IsInt({ message: 'Block ID must be an integer.' })
  block_id?: number;

  @IsOptional()
  @IsInt({ message: 'Panchayat ID must be an integer.' })
  panchayat_id?: number;

  @IsOptional()
  @IsInt({ message: 'Village ID must be an integer.' })
  village_id?: number;
}
