export const usePopupStore = defineStore('popupStore',{
    state: () => ({
        show: false
    }),
    actions: {
        set(show: boolean){
            this.$patch({show: show})
        }
    }
})