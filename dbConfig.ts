import { Property } from "src/entities/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig:PostgresConnectionOptions = {
    url: "postgresql://test_owner:URX9azZd0kiY@ep-orange-salad-a5mwrghq.us-east-2.aws.neon.tech/test?sslmode=require",
    type: "postgres",
    port: 3306,
    entities: [__dirname+'/**/*.entity{.ts,.js}'],
    synchronize: true
}