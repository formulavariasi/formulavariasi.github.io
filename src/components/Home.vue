<template>
  <div class="home">
  <section class="hero is-fullheight-with-navbar landing">
    <div class="hero-body">
        <div class="container">
            <div class="column is-6 landing-page-title">
                <h1 class="title is-1">
                    <strong>Formula Variasi</strong>
                </h1>
                <h4 class="subtitle is-4">
                    Kami merupakan pilihan pertama dalam urusan perawatan dan variasi mobil Anda.
                </h4>
                <span v-scroll-to="'#carcare'" class="button is-primary">
                Lihat selengkapnya
                </span>
            </div>
        </div>
    </div>
  </section>
  <section class="hero is-fullheight" id="carcare">
    <div class="hero-body">
        <div class="container">
        <h1 class="title is-1 section-title">Car Care</h1>
            <div class="columns">
                <router-link :to="data.prodRoute" class="column is-half product" v-for="(data,index) in products" :key="index">
                            <img :src="data.prodImg">
                            <h4 class="title is-4">{{ data.prodName }}</h4>
                            <h6 class="subtitle is-6">
                                {{ data.prodDesc }}
                            </h6>
                </router-link>
            </div>
        </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
      return {
        title: 'Home',
        products: [
            {
                prodName: "Car Wash",
                prodDesc: "Formula Carwash sudah berpengalaman dalam menangani pencucian mobil. Dengan tekologi hidrolik, kami menjamin kebersihan mobil Anda secara merata.",
                prodImg: require('../assets/carwash.jpg'),
                prodRoute: "CarWash"
            },
            {
                prodName: "Auto Detailing",
                prodDesc: "Kualitas detailing yang sangat rapi didukung oleh tenaga kerja yang sudah berpengalaman akan membuat mobil Anda bersih dari baret halus yang nampak. Mobil Anda akan kembali seperti baru keluar dari dealer.",
                prodImg: require('../assets/detailing.jpg'),
                prodRoute: "AutoDetailing"
            }
        ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

.landing {
    font-family: 'Open Sans', serif;
    background:
        linear-gradient(rgba(31, 45, 58, 0.8),rgba(31, 45, 58, 0.8)),
        url('../assets/landingpagebg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.landing-page-title {
    position: absolute;
}

.section-title {
    border-bottom: 2px solid rgba(165, 42, 42, 1);
}

.product img {
    max-width: 100%;
}

.product:hover {
    background-color: rgba(165, 42, 42, 0.5);
}
</style>
