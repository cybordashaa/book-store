import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
import { ConfigServise } from 'src/config/config.service';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from 'src/config/config.keys';


export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigServise],
        async useFactory(config: ConfigServise) {
            return {
                ssl: false,
                type: 'mysql' as 'mysql',
                host: config.get(Configuration.HOST),
                username: config.get(Configuration.USERNAME),
                port: 3306,
                database: config.get(Configuration.DATABASE),
                password: config.get(Configuration.PASSWORD),
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],

            } as ConnectionOptions;

        }
    })
];