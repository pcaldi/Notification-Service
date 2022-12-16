import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['cunning-cheetah-8855-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y3VubmluZy1jaGVldGFoLTg4NTUkqwwcu4eyAGMxIRhVtYfuoAXrfxtPM-x5ozM',
          password:
            'wsaUQHhMKg-K8OpQ2NXaoYF8BnVB72GCuhQxVMo4adzoMHFdkET0kA52LAS_3o0T0OaXiA==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
