import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/create-account.controller'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'
import { AuthenticateController } from './controllers/authenticate.controller'
import { AuthModule } from './auth/auth.module'
import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionsontroller } from './controllers/fetch-recent-questions.controller'
import { PrismaService } from './prisma/prisma.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsontroller,
  ],
  providers: [PrismaService],
})
export class AppModule {}
