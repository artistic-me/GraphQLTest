import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserType } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UserInput } from './input/user.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserType])
  async users() {
    return await this.userService.users({});
  }

  @Mutation(() => UserType)
  async createUser(@Args('input') input: UserInput) {
    return this.userService.createUser(input);
  }
}
