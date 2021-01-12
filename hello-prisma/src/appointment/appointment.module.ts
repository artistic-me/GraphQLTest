import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentResolver } from './appointment.resolver';
import { PrismaService } from './../prisma.service';
@Module({
  imports: [],
  providers: [PrismaService, AppointmentService, AppointmentResolver]
})
export class AppointmentModule {}
