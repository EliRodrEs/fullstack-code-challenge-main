import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref([])
  const loaded = ref(false)
  const loading = ref(false)

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'

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
        throw new Error(`Response status: ${response.status}`)
      }

      const recipesList = await response.json()
      recipes.value = recipesList
      loaded.value = true
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  return {
    getAllRecipies,
    recipes,
    loading,
    loaded
  }
})
