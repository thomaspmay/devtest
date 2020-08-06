import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config.service';
import { FoodModule } from './food/food.module';
import { RankModule } from './rank/rank.module';
import { GrpcJwtServiceService } from './grpc-jwt-service/grpc-jwt-service.service';
import { GrpcJwtService } from './grpc-jwt/grpc-jwt.service';

@Module({
  imports: [RecipesModule, 
  TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  UsersModule,
  AuthModule,
  FoodModule,
  RankModule,],
  controllers: [AppController],
  providers: [AppService, GrpcJwtServiceService, GrpcJwtService],
})
export class AppModule {}
