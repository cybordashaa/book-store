import { Module } from '@nestjs/common';
import { ConfigServise } from './config.service';

@Module({
    providers: [
        {
        provide: ConfigServise,
        useValue: new ConfigServise
        }
    ],
    exports: [ConfigServise]
})
export class ConfigModule {}
