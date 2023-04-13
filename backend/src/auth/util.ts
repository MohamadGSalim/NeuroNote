import { ApiProperty } from "@nestjs/swagger";
import { User } from "../models/user.entity";

export const jwtConstants = {
    secret: "JWT SECRET.",
};

export class LoginResponse {
    @ApiProperty()
    token: string;
    @ApiProperty({ type: User })
    user: Partial<User>;
}

export class SignInDto {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}

export class RegisterDto extends SignInDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    disability_type: string;

    @ApiProperty()
    fullname: string;
}
