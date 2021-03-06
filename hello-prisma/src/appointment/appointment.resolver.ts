import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { AppointmentType } from './dto/create-appointment.dto';
import { AppointmentService } from './appointment.service';
import { AppointmentInput } from './inputs/appointment.input';

@Resolver()
export class AppointmentResolver {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Query(() => [AppointmentType])
  async appointments() {
    return await this.appointmentService.appointments({});
  }

  @Mutation(() => AppointmentType)
  async createAppointment(@Args('input') input: AppointmentInput) {
    return this.appointmentService.createAppointment(input);
  }

}
