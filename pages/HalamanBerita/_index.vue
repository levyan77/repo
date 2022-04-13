<template>
  <div class="detail">
      <img :src="ListArtikel[indexArtikel].img">
      <h2>{{ListArtikel[indexArtikel].name}}</h2>
      <!-- <div class="authorDanWaktu">
          <div>{{ListArtikel[indexArtikel].author}}</div>
          <div>{{ListArtikel[indexArtikel].publishedAt}}</div>
      </div> -->
      <p>{{ListArtikel[indexArtikel].level}}</p>
      <div>Lanjutkan baca ke: <a :href = url+ListArtikel[indexArtikel].name>Sini</a></div>
      <div class="text-center">
          <v-btn color="secondary" @click="kembali">Kembali</v-btn>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            url: 'https://digimon.fandom.com/wiki/'
        }
    },
        computed:{
        id(){
            return this.$route.params.id;
        },
        indexArtikel(){
            return this.$route.params.index;
        },
        ListArtikel(){
            return this.$store.state.news.listArtikel;
        },
    },
    methods:{
        kembali(){
            // return this.$router.push('/');
            return this.$router.go(-1);
        }
    },

}
</script>

<style scoped>
img{
    width: 25%;
}
h2{
    text-align: center;
}
p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.detail{
    display: block;
}
.authorDanWaktu{
    display: flex;
    place-content: space-between;
    margin: 0 12px;
}
</style>