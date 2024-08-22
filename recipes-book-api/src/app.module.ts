import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    RecipesModule,
    MongooseModule.forRoot(process.env.DATABASE_URL), //I know this is not advisable for complex projects. But time's short and we should always have env variables for things like this
  ],
})
export class AppModule {}
