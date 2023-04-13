import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "../models/user.entity";
import { UsersService } from "./users.service";
import { LoginResponse, RegisterDto } from "./util";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async signIn(username: string, pass: string): Promise<LoginResponse> {
        const user = await this.usersService.findOne(username);

        if (!user) {
            throw new BadRequestException(
                "User does not exist. Invalid username",
            );
        }

        if (user?.password !== pass) {
            throw new BadRequestException("username and password do not match");
        }
        const { password, ...result } = user;
        // TODO: Generate a JWT and return it here
        // instead of the user object
        const payload = { username: user.username, id: user.id };
        return {
            token: await this.jwtService.signAsync(payload),
            user: result,
        };
    }

    public async register(registerDto: RegisterDto): Promise<LoginResponse> {
        const user = await User.findOne({
            where: [
                { username: registerDto.username },
                { email: registerDto.email },
            ],
        });

        if (user) {
            if (user.email == registerDto.email)
                throw new BadRequestException("This email is already in use");
            else if (user.username == registerDto.username)
                throw new BadRequestException(
                    "This username is already in use",
                );
            else throw new BadRequestException("This user already exists");
        }

        const newUser = new User();
        newUser.username = registerDto.username;
        newUser.email = registerDto.email;
        newUser.password = registerDto.password;
        newUser.disability_type = registerDto.disability_type;
        newUser.fullname = registerDto.fullname;
        await newUser.save();
        console.log(newUser.disability_type);
        return this.signIn(registerDto.username, registerDto.password);
    }
}
