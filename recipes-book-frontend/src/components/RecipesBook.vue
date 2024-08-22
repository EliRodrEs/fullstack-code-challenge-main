<template>
  <div class="wrapper">
    <h1>My recipes</h1>

    <div class="loader-msg" v-if="loading"> Loading Recipes... </div>
    <div class="error-msg" v-if="!loading && !loaded">We couldn't find any recipe</div>
    <div class="recipes-list" v-if="loaded">
      <RecipeCard v-for="recipe in recipes" :key="recipe._id" :recipe="recipe" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRecipesStore } from '../stores/recipesStore'
import RecipeCard from './cards/RecipeCard.vue' 

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

<style scoped>

.wrapper {
  width: 100%;
}
.recipes-list {
  display: flex;
  column-gap: 1rem;
  row-gap: 1rem;
  flex-wrap: wrap;
}
</style>