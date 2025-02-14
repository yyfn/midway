import { Configuration, Inject } from '@midwayjs/decorator';
import { MidwayKafkaFramework } from './framework';

@Configuration({
  namespace: 'kafka',
  importConfigs: [
    {
      default: {
        kafka: {},
      },
    },
  ],
})
export class KafkaConfiguration {
  @Inject()
  framework: MidwayKafkaFramework;

  async onReady() {}
}
