import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipesModule } from './recipes/recipes.module';
import * as dotenv from 'dotenv';

dotenv.config()

@Module({
  imports: [
    RecipesModule,
    MongooseModule.forRoot(process.env.DATABASE_URL)
  ],
})
export class AppModule {}
