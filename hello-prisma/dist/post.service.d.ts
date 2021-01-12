import { PrismaService } from './prisma.service';
import { PostUpdateInput, Post, PostCreateInput, PostWhereUniqueInput, PostWhereInput, PostOrderByInput } from '@prisma/client';
export declare class PostService {
    private prisma;
    constructor(prisma: PrismaService);
    post(postWhereUniqueInput: PostWhereUniqueInput): Promise<Post | null>;
    posts(params: {
        skip?: number;
        take?: number;
        cursor?: PostWhereUniqueInput;
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
    }): Promise<Post[]>;
    createPost(data: PostCreateInput): Promise<Post>;
    updatePost(params: {
        where: PostWhereUniqueInput;
        data: PostUpdateInput;
    }): Promise<Post>;
    deletePost(where: PostWhereUniqueInput): Promise<Post>;
}
