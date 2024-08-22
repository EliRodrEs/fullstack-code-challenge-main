<template>
    <div class="search-recipes">
      <h2>Search Recipes</h2>
      <form @submit.prevent="searchRecipes">
        <div class="form-group">
          <label for="name">Recipe name:</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div class="form-group">
          <label for="cookingTime">Cooking Time (minutes):</label>
          <input type="number" id="cookingTime" v-model.number="cookingTime" />
        </div>
        <button type="submit">Search</button>
      </form>
      <div class="recipes-list" v-if="recipes.length > 0">
        <div v-for="recipe in recipes" :key="recipe._id" class="recipe-card">
          <h3>{{ recipe.name }}</h3>
          <p><span class="text-bold">Difficulty:</span> {{ recipe.difficulty }}</p>
          <p><span class="text-bold">Description:</span> {{ recipe.description }}</p>
          <p><span class="text-bold">Cooking Time:</span> {{ recipe.cookingTime }} minutes</p>
          <p><span class="text-bold">Ingredients:</span> {{ recipe.ingredients.join(', ') }}</p>
        </div>
      </div>
      <div v-else-if="searched">No recipes found.</div>
    </div>
  </template>