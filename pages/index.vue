<template>
  <div>
      <h1 class="judul">
          List Digimon
      </h1>
        <div id="wrapper" class="container" >
                <div v-for="(artikel, index) in ListArtikel " :key="index"  class="article"  >
                    <div class="item">
                        <news-card :nama="artikel.name" :index="index" :level="artikel.level" />
                    </div>
                </div>
        </div>

  </div>
</template>

<script>
// import kontainer from '@/components/containerBerita.vue'
import NewsCard from '@/components/newsCard.vue';

export default {
    name: 'indexVue',
    components:{
        // kontainer,
        NewsCard
    },
    data(){
        return {
            testing: 'vue'
        }
    },
    
    computed:{
     ListArtikel(){
      return this.$store.state.news.listArtikel;
    },
    },
    mounted(){
     this.$store.dispatch("news/fetchArtikel");

    },
    methods:{
        fetchMoreArtikel(){
            this.$store.dispatch("news/fetchMoreArtikel");
        }
    },

}
</script>

<style>

#wrapper{
    display: flex;
    flex-wrap: wrap;
}
.kotakBerita{
    text-decoration: none;
}
.judul{
    text-align: center;
}

.item{
    /* display: flex;
    flex-wrap: wrap; */
    padding: 12px;
    border-radius: 4px;
}

.article{
    width: 100%;
}

/* @media only screen and (max-width: 640px){
.article{
        width: 100%;
    }
} */
</style>