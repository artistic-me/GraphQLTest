import { AppointmentService } from './appointment.service';
import { AppointmentInput } from './inputs/appointment.input';
export declare class AppointmentResolver {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    appointments(): Promise<import(".prisma/client").Appointment[]>;
    createAppointment(input: AppointmentInput): Promise<import(".prisma/client").Appointment>;
}
