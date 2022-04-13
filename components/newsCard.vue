<template>
    <v-card
    class="mx-auto"
    max-width="700"
    >
        <!-- <v-img
        :src="gambar"
        height="400px"
        ></v-img> -->

        <!-- <v-card-title>
            {{nama}}
        </v-card-title>

        <v-card-text>
            {{level}}
        </v-card-text> -->

        <v-card-actions>
            <v-sheet
                color="grey darken-2"
                elevation="10"
                height="25"
                rounded
                width="192"
                class="white--text"
            >
            {{nama}}
            </v-sheet>
            <v-spacer></v-spacer>
            <v-icon v-if="level == 'Fresh' ">mdi-reddit</v-icon>
            <v-icon v-if="level == 'Training' ">mdi-alarm-light-outline</v-icon>
            <v-icon v-if="level == 'In Training' ">mdi-twitter</v-icon>
            <v-icon v-if="level == 'Champion' ">mdi-facebook</v-icon>
            <v-icon v-if="level == 'Rookie' ">mdi-google</v-icon>
            <v-icon v-if="level == 'Ultimate' ">mdi-linkedin</v-icon>
             <v-icon v-if="level == 'Mega' ">mdi-all-inclusive</v-icon>
             <v-icon v-if="level == 'Armor' ">mdi-cards-diamond</v-icon>
            <v-spacer></v-spacer>
            <v-btn :to="{ name: 'HalamanBerita', params: { id: nama, index: index }}">READ MORE</v-btn> 

        </v-card-actions>

    </v-card>
</template>

<script>
export default {
    // props: ['gambar', 'author', 'judul', 'waktu','deskripsi', 'path', 'index'],
    props: {
        gambar: {
            type: String,
            required: true
        },
        nama: {
            type: String,
            required: true
        },
        level: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        // 'gambar','nama','level', 'index'
        }
}
</script>