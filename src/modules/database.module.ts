import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../entities/role.entity';
import { Privilege } from '../entities/privilege.entity';
import { User } from '../users/user.entity';
import { UserRoles } from '../users/user_roles.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'datalens',
      entities: [Role, Privilege, User, UserRoles],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
