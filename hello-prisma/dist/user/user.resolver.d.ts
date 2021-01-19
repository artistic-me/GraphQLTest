import { UserService } from './user.service';
import { UserInput } from './input/user.input';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    users(): Promise<import(".prisma/client").User[]>;
    createUser(input: UserInput): Promise<import(".prisma/client").User>;
}
