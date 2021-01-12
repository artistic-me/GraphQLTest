import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';

import {
  AppointmentUpdateInput,
  Appointment,
  AppointmentCreateInput,
  AppointmentWhereUniqueInput,
  AppointmentWhereInput,
  AppointmentOrderByInput,
} from '@prisma/client';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}

  async appointment(appointmentWhereUniqueInput: AppointmentWhereUniqueInput): Promise<Appointment | null> {
    return this.prisma.appointment.findUnique({
      where: appointmentWhereUniqueInput,
    });
  }

  async appointments(params: {
    skip?: number;
    take?: number;
    cursor?: AppointmentWhereUniqueInput;
    where?: AppointmentWhereInput;
    orderBy?: AppointmentOrderByInput;
  }): Promise<Appointment[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.appointment.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createAppointment(data: AppointmentCreateInput): Promise<Appointment> {
    return this.prisma.appointment.create({
      data,
    });
  }

  async updateappointment(params: {
    where: AppointmentWhereUniqueInput;
    data: AppointmentUpdateInput;
  }): Promise<Appointment> {
    const { data, where } = params;
    return this.prisma.appointment.update({
      data,
      where,
    });
  }

  async deleteAppointment(where: AppointmentWhereUniqueInput): Promise<Appointment> {
    return this.prisma.appointment.delete({
      where,
    });
  }
}