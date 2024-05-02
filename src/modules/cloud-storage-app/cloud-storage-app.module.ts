import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';

import { QueryProceduresModule } from './query-procedures/query-procedures.module';
import { TestController } from './controllers/test/test.controller';
import { TestService } from './services/test/test.service';

@Module({
  imports: [QueryProceduresModule, AuthModule],
  controllers: [TestController],
  providers: [TestService],
}) 
export class CloudStorageAppModule {}
