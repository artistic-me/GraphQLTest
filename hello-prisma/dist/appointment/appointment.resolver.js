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
exports.AppointmentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_appointment_dto_1 = require("./dto/create-appointment.dto");
const appointment_service_1 = require("./appointment.service");
const appointment_input_1 = require("./inputs/appointment.input");
let AppointmentResolver = class AppointmentResolver {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }
    async appointments() {
        return await this.appointmentService.appointments({});
    }
    async createAppointment(input) {
        return this.appointmentService.createAppointment(input);
    }
};
__decorate([
    graphql_1.Query(() => [create_appointment_dto_1.AppointmentType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "appointments", null);
__decorate([
    graphql_1.Mutation(() => create_appointment_dto_1.AppointmentType),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [appointment_input_1.AppointmentInput]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "createAppointment", null);
AppointmentResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [appointment_service_1.AppointmentService])
], AppointmentResolver);
exports.AppointmentResolver = AppointmentResolver;
//# sourceMappingURL=appointment.resolver.js.map