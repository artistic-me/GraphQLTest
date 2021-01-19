import { PrismaService } from './../prisma.service';
import { UserUpdateInput, User, UserCreateInput, UserWhereUniqueInput, UserWhereInput, UserOrderByInput } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    user(userWhereUniqueInput: UserWhereUniqueInput): Promise<User | null>;
    users(params: {
        skip?: number;
        take?: number;
        cursor?: UserWhereUniqueInput;
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
    }): Promise<User[]>;
    createUser(data: UserCreateInput): Promise<User>;
    updateuser(params: {
        where: UserWhereUniqueInput;
        data: UserUpdateInput;
    }): Promise<User>;
    deleteUser(where: UserWhereUniqueInput): Promise<User>;
}
