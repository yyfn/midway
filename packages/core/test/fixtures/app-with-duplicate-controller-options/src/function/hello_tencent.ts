import {
  Controller, Get,
} from '@midwayjs/decorator';

@Controller('/', { middleware: ['auth1']})
export class HelloTencentService {
  @Get('/tencent_invoke')
  async invoke() {}
}
