import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  @Inject(ConfigService) public config: ConfigService;

  getHello(): string {
    const developmentMode: string = `DEVELOPMENT_MODE: ${process.env.DEVELOPMENT_MODE}`;
    console.log(developmentMode);
    return 'Hello World! ' + developmentMode;
  }
}
