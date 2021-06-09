import { Controller, Get } from '@nestjs/common';

@Controller('restaurants')
export class RestaurantController {
  @Get()
  finaAll(): string {
    return 'This is a response';
  }
}
