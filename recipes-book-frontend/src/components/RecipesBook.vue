<template>
  <div>
    <h1>My recipes</h1>

    <div class="loader-msg" v-if="loading"> Loading Recipes... </div>
    <div class="error-msg" v-if="!loading && !loaded">We couldn't find any recipe</div>

    <ul class="recipes-list" v-if="loaded">
      <li v-for="recipe in recipes" :key="recipe._id">
        <h2>{{ recipe.name }}</h2>
        <p><strong>Difficulty:</strong> {{ recipe.difficulty }}</p>
        <p><strong>Descipription:</strong> {{ recipe.description }}</p>
        <p><strong>Cooking time:</strong> {{ recipe.cookingTime }} (minutes)</p>
        <p><strong>Ingredients</strong> {{ recipe.ingredients.join(', ') }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRecipesStore } from '../stores/recipesStore'

const recipesStore = useRecipesStore()

onMounted(() => {
  if (!recipesStore.loaded || !recipesStore.loading) {
    recipesStore.getAllRecipies()
  }
})
const recipes = computed(() => recipesStore.recipes)
const loading = computed(() => recipesStore.loading)
const loaded = computed(() => recipesStore.loaded)
</script>
