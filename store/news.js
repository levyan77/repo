import Axios from 'axios'

const state = () => ({
    listArtikel: [],
    listOrigin: [],
    Page: 2,
    Kategori: '',
    searchText: '',
    ApiKey: 'e662876be5954d1c8c843326b941ad91',
    index: 0,
    info: '',
    link: `https://digimon-api.vercel.app/api/digimon`,
    linkBaru:``,
    jumlahTekan: 0
})

const mutations =  {
    setListArtikel(state,payload){
        state.listArtikel = payload;
    },
    setListOrigin(state,payload){
        state.listOrigin = payload;
    },
    setKategori(state,payload){
        state.Kategori = payload;
    },
    setSearch(state,payload){
        state.searchText = payload;
    },
    setError(state,param){
        state.info = param;
    },
    setURL(state,param){
        state.link = param;
    },
    setJumlahTekan(state,param){
        state.jumlahTekan = param;
    },
}

const actions = {
        // fetchArtikel({commit}, {query, kategori, countryId}){
        // const ApiKey = 'e662876be5954d1c8c843326b941ad91'
        // Axios.get(`https://newsapi.org/v2/top-headlines?country=${ countryId }&category=${ kategori }&q=${ query }&apiKey=${ ApiKey }`).then((response => {
        //         console.log('response', response);
        //         commit('setListArtikel', response.data.articles)
        //     }))
        //     .catch((error)=>{
        //         commit('setError', error);
        //     })
        // },
        fetchArtikel(store){
            const url = store.state.link
            Axios.get(url).then((response => {
                    console.log('response', response);
                    store.commit('setListArtikel', response.data);
                    store.commit('setListOrigin', response.data);
                }))
                .catch((error)=>{
                    store.commit('setError', error);
                })
                
            },
        // fetchArtikelDenganSeach(store){
        //     Axios.get(`https://newsapi.org/v2/top-headlines?country=id&q=${ store.state.searchText }&apiKey=${ store.state.ApiKey }`).then((response => {
        //             console.log('response', response);
        //             store.commit('setListArtikel', response.data.articles)
        //         }))
        //         .catch((error)=>{
        //             store.commit('setError', error);
        //         })
        //     },
        fetchMoreArtikel(store){
            Axios
            .get(`https://newsapi.org/v2/top-headlines?country=id&category=${ store.state.Kategori }&apiKey=${ store.state.ApiKey }`, {
                params: {
                    page: store.state.Page ++,
                    pageSize: 20,
                }
            })
            .then((response) => {
                store.commit("setListArtikel", [
                    ...store.state.listArtikel,
                    ...response.data.articles,
                ]);
            })
            .catch((error)=>{
                store.commit('setError', error);
            })
        },
        gantiKategori(store,payload){
            console.log("Origin :", store.state.listOrigin);
            // store.commit('setListArtikel', store.state.listOrigin)
            // store.commit('setKategori', payload)
            // const result = store.state.listArtikel.filter(cek => cek.level == store.state.Kategori);
            // store.commit('setListArtikel', result)
            // console.log(result)
            // store.commit("setJumlahTekan",jumlahTekan)
            // console.log(store.state.jumlahTekan)
                store.state.linkBaru = store.state.link + "/level/" + payload
                store.commit('setURL', store.state.linkBaru)
                store.dispatch('fetchArtikel')
                console.log(store.state.linkBaru)
                const reset = 'https://digimon-api.vercel.app/api/digimon'
                // const tekan = 0    
                store.commit('setURL', reset)
                // store.commit('setJumlahTekan', tekan)
            
        },
        searchFunction(store,payload){
            if (payload === ''){
                store.commit('setURL',"https://digimon-api.vercel.app/api/digimon")
                store.dispatch('fetchArtikel');
            }
            else
            {
            // store.commit('setListArtikel', store.state.listOrigin)
            // store.commit('setSearch', payload)
            // const res = store.state.listArtikel.filter(check => check.name == payload);
            // store.commit ('setListArtikel',res)
            // console.log(res)

            store.state.linkBaru = store.state.link + "/name/" + payload
            store.commit('setURL', store.state.linkBaru)
            store.dispatch('fetchArtikel')
            console.log(store.state.linkBaru)
            const reset = 'https://digimon-api.vercel.app/api/digimon'   
            store.commit('setURL', reset)

            }
        },
        GantiBerita(store,payload){
            store.commit('setListArtikel',payload)
        }
}

export default {
    state,
    mutations,
    actions,

}