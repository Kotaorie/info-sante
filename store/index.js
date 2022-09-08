export const state = () => ({
    news: [
        {
            id: 1,
            title: "info covid 19",
            description: "voicie les dernieres info du covid 19",
            image: "covid19.jpg"
        },
        {
            id:2,
            title: "variole du singe",
            description:" LA VARIOLE DU SINGE UNE MALADIE GRAVE",
            image:"variole-singe.jpg"
        },
        {
            id:3,
            title: "variole du singe",
            description:" LA VARIOLE DU SINGE UNE MALADIE GRAVE",
            image:"variole-singe.jpg"
        }
    ],
})

export const getters = {
    getNewsById: (state) => (id) => {
        return state.news.find(news => news.id == id )
    }
}  

