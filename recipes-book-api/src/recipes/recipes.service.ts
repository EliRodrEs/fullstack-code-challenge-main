import { Recipe, RecipeDocument } from './schemas/recipes.schemas';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RecipeDto } from './recipe.interface';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name)
    private readonly recipesModule: Model<RecipeDocument>,
  ) {}

  async getAll(): Promise<RecipeDocument[]> {
    return this.recipesModule.find().exec();
  }

  async createRecipe(payload: RecipeDto): Promise<RecipeDocument> {
    try {
      const recipe = new this.recipesModule(payload);
      await recipe.save();
      return recipe;
    } catch (error) {
      console.error('createRecipe() -> Error creating recipe:', error);
      throw new Error('Failed to create recipe');
    }
  }

  async searchRecipes(name?: string, cookingTime?: number, ingredients?: string[]): Promise<RecipeDocument[]> {
    const query: any = {}
    if(name) {
      query.name = {$regex: name, $options: 'i'}
    }
    if(cookingTime) {
      query.cookingTime = cookingTime
    }
    if (ingredients && ingredients.length > 0) {
      query.ingredients = { $all: ingredients }
    }

    try {
      return this.recipesModule.find(query).exec()
    } catch (error) {
      console.error('searchRecipes() -> Error searching for recipes:', error);
      throw new Error('Failed to search for recipes');
    }
  }
}
