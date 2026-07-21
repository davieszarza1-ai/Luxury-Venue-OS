import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {

  @Get()
  status() {

    return {
      system: "Luxury Venue OS",
      status: "ONLINE",
      version: "0.1.0"
    };

  }

}











