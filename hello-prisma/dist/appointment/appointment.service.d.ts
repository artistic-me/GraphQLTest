import { PrismaService } from './../prisma.service';
import { AppointmentUpdateInput, Appointment, AppointmentCreateInput, AppointmentWhereUniqueInput, AppointmentWhereInput, AppointmentOrderByInput } from '@prisma/client';
export declare class AppointmentService {
    private prisma;
    constructor(prisma: PrismaService);
    appointment(appointmentWhereUniqueInput: AppointmentWhereUniqueInput): Promise<Appointment | null>;
    appointments(params: {
        skip?: number;
        take?: number;
        cursor?: AppointmentWhereUniqueInput;
        where?: AppointmentWhereInput;
        orderBy?: AppointmentOrderByInput;
    }): Promise<Appointment[]>;
    createAppointment(data: AppointmentCreateInput): Promise<Appointment>;
    updateappointment(params: {
        where: AppointmentWhereUniqueInput;
        data: AppointmentUpdateInput;
    }): Promise<Appointment>;
    deleteAppointment(where: AppointmentWhereUniqueInput): Promise<Appointment>;
}
