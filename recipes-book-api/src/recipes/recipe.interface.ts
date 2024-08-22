export enum RecipeDifficultyEnum {
    easy = 'Easy',
    medium = 'Medium',
    hard = 'Master Chef'
}

export interface RecipeDto  {
    name: string
    ingredientes: string[]
    description: string
    difficulty: RecipeDifficultyEnum
    cookingTime: number
}

export interface RecipeDocument {
    name: string
    ingredients: string[]
    description: string
    difficulty: RecipeDifficultyEnum
    cookingTime: number
}