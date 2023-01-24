/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Redirect,
  Render,
  Session,
} from '@nestjs/common';
import { AppService } from './app.service';
import db from './db';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/tarhely')
  async allTarhely() {
    const [tarhelyek] = await db.execute(
      'SELECT * FROM tarhelycsomagok'
    );
    return { tarhelyek: tarhelyek };
  }
}
