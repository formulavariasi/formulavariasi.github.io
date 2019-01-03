<template>
  <div class="autodetailing">
    <section class="hero is-fullheight-with-navbar header" id="header">
        <div class="hero-body">
            <div class="container">
                <div class="column is-8 header-title">
                    <h1 class="title is-1">
                        <strong>Auto Detailing</strong>
                    </h1>
                    <h4 class="subtitle is-4">
                        Car detailing, coating, and polishing.
                    </h4>
                    <span v-scroll-to="'#detailing'" class="button is-primary">
                    Lihat selengkapnya
                    </span>
                </div>
            </div>
        </div>
    </section>
    <section class="hero is-fullheight" id="detailing">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-half section-container">
                        <div class="content">
                            <h1 class="title is-1 section-title">Car Detailing</h1>
                            <h4>Kami dapat melakukan detailing pada</h4>
                            <h5>
                                <ol>
                                    <li>Exterior</li>
                                    <li>Interior</li>
                                    <li>Undercarriage</li>
                                    <li>Mesin</li>
                                </ol>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-footer">
            <div class="container">
                <div class="tile is-ancestor is-pulled-right">
                    <div class="tile is-vertical is-parent scroll-button-group">
                        <div class="tile">
                            <span class="button is-primary scroll-button" v-scroll-to="'#coating'">
                                <font-awesome-icon icon="angle-down"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="hero is-fullheight" id="coating">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-half is-offset-6 has-text-right section-container">
                        <div class="content">
                            <h1 class="title is-1 section-title">Car Coating</h1>
                            <h5>Kami menyediakan coating 3, 5, 8, dan 10 tahun.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-footer">
            <div class="container">
                <div class="tile is-ancestor is-pulled-right">
                    <div class="tile is-vertical is-parent scroll-button-group">
                        <div class="tile">
                            <span class="button is-primary scroll-button" v-scroll-to="'#detailing'">
                                <font-awesome-icon icon="angle-up"/>
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
  name: 'AutoDetailing'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

.header {
    font-family: 'Open Sans', serif;
    background:
        linear-gradient(rgba(31, 45, 58, 0.8),rgba(31, 45, 58, 0.8)),
        url('../assets/detailing.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.header-title {
    position: absolute;
}

.section-title {
    border-bottom: 2px solid rgba(165, 42, 42, 1);
}

.section-container {
    position: absolute;
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

#detailing {
    background:
        linear-gradient(rgba(31, 45, 58, 0.8),rgba(31, 45, 58, 0.8)),
        url('../assets/transparentbg01r.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;
}

#coating {
    background:
        linear-gradient(rgba(31, 45, 58, 0.8),rgba(31, 45, 58, 0.8)),
        url('../assets/transparentbg03l.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left;
}
</style>
