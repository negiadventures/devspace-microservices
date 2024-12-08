import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class SchedulerService {
  @Cron('*/5 * * * * *')
  handleCron() {
    console.log('Task executed every 5 seconds');
  }
}
