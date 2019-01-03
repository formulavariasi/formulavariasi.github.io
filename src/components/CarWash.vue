<template>
  <div class="carwash">
    <section class="hero is-fullheight-with-navbar header">
        <div class="hero-body">
            <div class="container">
                <div class="column is-8 header-title">
                    <h1 class="title is-1">
                        <strong>Car Wash</strong>
                    </h1>
                    <h4 class="subtitle is-4">
                        Perawatan pencucian mobil dengan produk-produk special yang hanya bisa Anda dapatkan di Formula Carwash.
                    </h4>
                    <span v-scroll-to="'#prodSect1'" class="button is-primary">
                    Lihat selengkapnya
                    </span>
                </div>
            </div>
        </div>
    </section>
    <section v-for="i in Math.ceil(products.length / 2)" :key="i" class="section hero is-fullheight" :id="'prodSect' + i">
        <div class="hero-body">
        <div class="container">
            <div class="columns">
                <div class="column is-one-quarter" v-if="i % 2 == 0">
                </div>
                <div class="column" v-for="(data,index) in products.slice((i - 1) * 2, i * 2)" :key="index">
                    <div class="content">
                        <div>
                            <h3 class="is-title is-3 product-name">{{ data.prodName }}</h3>
                            <table>
                                <tr v-for="(desc, index) in data.prodDesc" :key="index">
                                    <td>{{ desc }}</td>
                                </tr>
                            </table>
                            <div class="has-text-centered">
                                <span class="button is-hovered is-primary"><h6 class="title is-6 price">Rp {{ formatPrice(data.prodPrice) }}</h6></span>
                                <router-link to="/BookingForm" class="button is-success"><h6 class="title is-6 price">Book Service</h6></router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-one-quarter" v-if="i % 2 == 1">
                </div>
            </div>
        </div>
        </div>
        <div class="hero-footer">
            <div class="container">
                <div class="tile is-ancestor is-pulled-right">
                    <div class="tile is-vertical is-parent scroll-button-group">
                        <div class="tile" v-if="i > 1">
                            <span class="button is-primary scroll-button" v-scroll-to="'#prodSect' + (i-1)">
                                <font-awesome-icon icon="angle-up"/>
                            </span>
                        </div>
                        <div class="tile" v-if="i < Math.ceil(products.length / 2)">
                            <span class="button is-primary scroll-button" v-scroll-to="'#prodSect' + (i+1)">
                                <font-awesome-icon icon="angle-down"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CarWash',
  data () {
      return {
        title: 'CarWash',
        products: [
            {
                prodId: 1,
                prodName: "Paket Murah Meriah di Rumah",
                prodDesc: ["Cuci manual menggunakan sabun special dari Formula Carwash"
                    ],
                prodPrice: 35000
            },
            {
                prodId: 2,
                prodName: "Paket Steam Biasa",
                prodDesc: [
                    "Cuci steam menggunakan sprayer air dan snow spray"
                ],
                prodPrice: 50000
            },
            {
                prodId: 3,
                prodName: "Paket Steam + Interior Cleaning",
                prodDesc: [
                    "Cuci steam menggunakan sprayer air dan snow spray",
                    "Interior dibersihkan dan di-vacuum sehingga debu-debu yang ada di dalam mobil hilang dan bersih kembali"
                ],
                prodPrice: 60000
            },
            {
                prodId: 4,
                prodName: "Paket Steam + Ultimate Wax",
                prodDesc: [
                    "Cuci steam menggunakan sprayer air dan snow spray",
                    "Menggunakan wax special dari Formula Variasi yang membuat mobil Anda mengkilap kembali"
                ],
                prodPrice: 125000
            },
            {
                prodId: 5,
                prodName: "Paket Ultimate Steam + Wax Machine",
                prodDesc: [
                    "Cuci steam menggunakan sprayer air dan snow spray",
                    "Menggunakan wax special dari Formula Variasi menggunakan mesin khusus yang memberikan kilap lebih pada mobil Anda yang akan membuat mobil Anda mengkilap kembali dan lebih tahan lama"
                ],
                prodPrice: 200000
            },
            {
                prodId: 6,
                prodName: "Paket Ultimate Steam + Wax Manual + Interior Cleaning",
                prodDesc: [
                    "Cuci steam menggunakan sprayer air dan snow spray",
                    "Interior mobil di-vacuum, dibersihkan, dan diberi pewangi khusus yang hanya bisa didapatkan di Formula Variasi",
                    "Menggunakan wax special dari Formula Variasi menggunakan mesin khusus yang memberikan kilap lebih pada mobil Anda yang akan membuat mobil Anda mengkilap kembali dan lebih tahan lama"
                ],
                prodPrice: 200000
            },
            {
                prodId: 7,
                prodName: "Paket Ultimate Steam + Wax Machine + Interior Cleaning",
                prodDesc: [
                    "Cuci steam menggunakan sprayer air dan snow spray",
                    "Interior mobil di-vacuum, dibersihkan, dan diberi pewangi khusus yang hanya bisa didapatkan di Formula Variasi",
                    "Menggunakan wax special dari Formula Variasi menggunakan mesin khusus yang memberikan kilap lebih pada mobil Anda yang akan membuat mobil Anda mengkilap kembali dan lebih tahan lama"
                ],
                prodPrice: 250000
            },
        ]
      }
  },
  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

.header {
    font-family: 'Open Sans', serif;
    background:
        linear-gradient(rgba(31, 45, 58, 0.8),rgba(31, 45, 58, 0.8)),
        url('../assets/carwash.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.header-title {
    position: absolute;
}

.section {
    padding: 0px;
}

.product-name {
    text-align: center;
    border-bottom: 2px solid rgba(165, 42, 42, 1);
    padding-bottom: 16px;
}

.price {
    color: white;
    margin-bottom: 0px;
}

.scroll-button-group {
    margin-bottom: 20px;
}

.scroll-button {
    margin-bottom: 10px;
}

.scroll-button:hover {
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);
}

#prodSect1 {
    background:
        linear-gradient(rgba(31, 45, 58, 0.8),rgba(31, 45, 58, 0.8)),
        url('../assets/transparentbg04r.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;
}

#prodSect2 {
    background:
        linear-gradient(rgba(31, 45, 58, 0.8),rgba(31, 45, 58, 0.8)),
        url('../assets/transparentbg05l.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left;
}

#prodSect3 {
    background:
        linear-gradient(rgba(31, 45, 58, 0.8),rgba(31, 45, 58, 0.8)),
        url('../assets/transparentbg02r.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;
}

#prodSect4 {
    background:
        linear-gradient(rgba(31, 45, 58, 0.8),rgba(31, 45, 58, 0.8)),
        url('../assets/transparentbg06l.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left;
}
</style>
