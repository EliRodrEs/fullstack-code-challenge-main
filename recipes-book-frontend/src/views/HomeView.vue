<template>
    

  <main>
    <h1>Recipes Book</h1>
    <section class="action-sec">
      <RecipesBook />
      <CreateRecipe />
    </section>
  </main>
</template>

<script setup lang="ts">
import RecipesBook from '../components/RecipesBook.vue'
import CreateRecipe from '../components/CreateRecipe.vue'
</script>

<style scoped>
  .action-sec {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
</style>