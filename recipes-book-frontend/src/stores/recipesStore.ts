import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref([])
  const loaded = ref(false)
  const loading = ref(false)

  const apiUrl = 'http://localhost:3000'

  async function getAllRecipies() {
    loaded.value = false
    loading.value = true
    try {
      const response = await fetch(`${apiUrl}/recipes`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        loaded.value = false
        loading.value = false
        throw new Error(`Response status: ${response.status}`)
      }

      const recipesList = await response.json()
      recipes.value = recipesList
      loaded.value = true
      loading.value = false
    } catch (error) {
      console.error(error)
    }
  }
  return {
    getAllRecipies,
    recipes,
    loading,
    loaded
  }
})
