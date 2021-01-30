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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationType = void 0;
const graphql_1 = require("@nestjs/graphql");
let ConversationType = class ConversationType {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], ConversationType.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ConversationType.prototype, "message", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ConversationType.prototype, "from", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ConversationType.prototype, "to", void 0);
ConversationType = __decorate([
    graphql_1.ObjectType()
], ConversationType);
exports.ConversationType = ConversationType;
//# sourceMappingURL=create-appointment.dto.js.map
