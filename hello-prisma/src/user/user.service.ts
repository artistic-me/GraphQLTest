import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';

import {
  UserUpdateInput,
  User,
  UserCreateInput,
  UserWhereUniqueInput,
  UserWhereInput,
  UserOrderByInput,
} from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(userWhereUniqueInput: UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }
  
   async userCountByHealthID(args: string): Promise<number | null> {
    return this.prisma.user.count({
      where: {healthID: args},
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: UserWhereUniqueInput;
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateuser(params: {
    where: UserWhereUniqueInput;
    data: UserUpdateInput;
  }): Promise<User> {
    const { data, where } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
