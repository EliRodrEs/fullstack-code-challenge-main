<template>
    <div class="create-recipe">
      <h2>Create a New Recipe</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="recipe.name" required />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="recipe.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="difficulty">Difficulty:</label>
          <select id="difficulty" v-model="recipe.difficulty" required>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Master Chef</option>
          </select>
        </div>
        <div class="form-group">
          <label for="cookingTime">Cooking Time (minutes):</label>
          <input type="number" id="cookingTime" v-model.number="recipe.cookingTime" required />
        </div>
        <div class="form-group">
          <label for="ingredients">Ingredients (comma-separated):</label>
          <input type="text" id="ingredients" v-model="recipe.ingredients" required />
        </div>
        <button type="submit">Create Recipe</button>
      </form>
      <div v-if="message">{{ message }}</div>
    </div>
  </template>

  <script setup lang="ts">
    import { ref } from 'vue';

    const recipe = ref({
    name: '',
    description: '',
    difficulty: 'Easy',
    cookingTime: 0,
    ingredients: ''
    });

    const message = ref('');


    async function submitForm() {
    try {
        const response = await fetch('http://localhost:3000/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...recipe.value,
            ingredients: recipe.value.ingredients.split(',').map(ingredient => ingredient.trim())
        })
        });
        
        if (!response.ok) throw new Error('Failed to create recipe');
        
        recipe.value = {
        name: '',
        description: '',
        difficulty: 'Easy',
        cookingTime: 0,
        ingredients: ''
        };
        message.value = 'Recipe created successfully!';
    } catch (error) {
        message.value = `Error: ${error.message}`;
    }
    }
</script>