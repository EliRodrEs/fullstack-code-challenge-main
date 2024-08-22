<template>
    <div class="card">
      
      <div class="card-header">
        <span>{{ recipe.name }}</span>
        <span>{{ recipe.difficulty }}</span>
      </div>
      
      <div class="card-body">
        <p><span class="text-bold">Description:</span> {{ recipe.description }}</p>
        <p><span class="text-bold">Cooking Time:</span> {{ recipe.cookingTime }} minutes</p>
        <p><span class="text-bold">Ingredients:</span> {{ recipe.ingredients.join(', ') }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  import './card.css'
  
  const props = defineProps<{
    recipe: {
      name: string;
      difficulty: string;
      description: string;
      cookingTime: number;
      ingredients: string[];
    }
  }>()
  </script>
