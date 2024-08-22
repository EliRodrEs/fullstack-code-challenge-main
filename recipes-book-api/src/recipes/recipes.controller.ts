import { RecipeDocument, RecipeDto } from './recipe.interface';
import { RecipesService } from './recipes.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async getRecipes(
    @Query('name') name?: string,
    @Query('cookingTime') cookingTime?: number,
    @Query('ingredients') ingredients?: string,
  ): Promise<RecipeDocument[]> {
    const ingredientsArray = ingredients ? ingredients.split(',').map(ingredient => ingredient.trim()) : []
    return this.recipesService.searchRecipes(name, cookingTime, ingredientsArray)
  }

  @Post()
  async createRecipe(@Body() createRecipeDto: RecipeDto): Promise<RecipeDocument> {
    return this.recipesService.createRecipe(createRecipeDto)
  }
  
}
