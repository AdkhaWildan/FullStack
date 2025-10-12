import { defineStore } from "pinia";

export const useNumbers = defineStore("numbers", {
  state: () => ({
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  }),
  actions: {
    addNumber() {
      this.numbers.push(this.numbers.length + 1);
    },
  },
  getters: {
    filterNumber: (state) => {
      return (minNumber) => {
        return state.numbers.filter((num) => num >= minNumber);
      };
    },
  },
});
