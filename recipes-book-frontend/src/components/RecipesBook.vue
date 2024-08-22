<template>
  <div>{{ recipes }}</div>
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
</script>
