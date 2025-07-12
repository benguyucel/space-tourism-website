import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const data = ref([]);
  const fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      data.value = await response.json();
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return { data, fetchData };
});
