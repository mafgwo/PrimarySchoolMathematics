import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
  state: () => ({
    printPreviewPapers: [],
    formDataValue: []
  }),
  actions: {
    /**
     * 
     * @param {import("vue-router").Router} router 
     * @param {String} fileName 
     * @param {Array} printPreviewPapers 
     * @param {Object} formDataValue 
     */
    navigateToPrint(router, fileName, printPreviewPapers, formDataValue) {
      this.$patch((s) => {
        s.printPreviewPapers = printPreviewPapers
        s.formDataValue = formDataValue
        router.push({ path: '/print', query: { fileName } })
      })
    }
  }
})