<template>
    

  <main>
    <h1>Recipes Book</h1>
    <section class="action-sec">
      <RecipesBook />
      <section class="interact">
        <CreateRecipe />
        <SearchRecipes />
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import RecipesBook from '../components/RecipesBook.vue'
import CreateRecipe from '../components/CreateRecipe.vue'
import SearchRecipes from '../components/SearchRecipes.vue'
</script>

<style scoped>
  .action-sec {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }

  .interact {
    display: grid;
    row-gap: 2rem;
  }
</style>