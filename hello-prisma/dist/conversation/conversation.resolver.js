"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_conversation_dto_1 = require("./dto/create-conversation.dto");
const conversation_service_1 = require("./conversation.service");
const conversation_input_1 = require("./inputs/conversation.input");
let ConversationResolver = class ConversationResolver {
    constructor(conversationService) {
        this.conversationService = conversationService;
    }
    async conversations() {
        return await this.conversationService.conversations({});
    }
    async createConversation(input) {
        return this.conversationService.createConversation(input);
    }
};
__decorate([
    graphql_1.Query(() => [create_conversation_dto_1.ConversationType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConversationResolver.prototype, "conversations", null);
__decorate([
    graphql_1.Mutation(() => create_conversation_dto_1.ConversationType),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [conversation_input_1.ConversationInput]),
    __metadata("design:returntype", Promise)
], ConversationResolver.prototype, "createConversation", null);
ConversationResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [conversation_service_1.conversationService])
], ConversationResolver);
exports.ConversationResolver = ConversationResolver;
//# sourceMappingURL=appointment.resolver.js.map