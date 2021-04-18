<template>
  <div class="home">
    <div class="burger-menu-popup">
      <div class="burger-menu-exit-button">X</div>

      <div class="burger-menu-nav-link-container">
        <a class="burger-menu-nav-link hover" href="features.html"
          >Features</a
        >
        <a class="burger-menu-nav-link hover" href="playlists.html"
          >Playlists</a
        >
        <a class="burger-menu-nav-link hover" href="dictionary.html"
          >Dictionary</a
        >
        <a class="burger-menu-nav-link hover" href="about.html">About</a>
      </div>
    </div>
    <div id="page-container">
      <!--slide-down nav bar-->

      <div id="navbar">
        <div class="navbar-content">
          <div class="slide-down-nav-link-container">
            <a class="slide-down-nav-link hover" href="features.html"
              >Features</a
            >
            <a class="slide-down-nav-link hover" href="playlists.html"
              >Playlists</a
            >
            <a class="slide-down-nav-link hover" href="dictionary.html"
              >Dictionary</a
            >
            <a class="slide-down-nav-link hover" href="about.html"
              >About</a
            >
          </div>

          <div class="slide-down-burger-menu">Menu</div>

          <div class="slide-down-nav-header hover">
            <a href="index.html">
              <h1 id="slide-down-nav-punchline-punjabi">Punchline Punjabi</h1>
            </a>
          </div>

          <div class="slide-down-nav-social-icons-container">
            <div class="slide-down-social-links">
              <a class="slide-down-social-icons" href="#"
                ><img
                  id="insta-svg"
                  src="dist/svg icons/instagram white logo.svg"
                  alt="punchline punjabi instagram icon"
              /></a>
              <!--<a class="slide-down-social-icons" href="#"
                ><img
                  src="dist/svg icons/twitter white logo.svg"
                  alt="punchline punjabi twitter icon"
              /></a>-->
              <a class="slide-down-social-icons" href="#"
                ><img
                  src="dist/svg icons/youtube white logo.svg"
                  alt="punchline punjabi youtube icon"
              /></a>
              <!--<a class="slide-down-social-icons" href="#"
                ><img
                  src="dist/svg icons/genius icon.svg"
                  alt="punchline punjabi genius icon"
              /></a>-->
            </div>
          </div>
        </div>
      </div>

      <div class="cat-content-container">
        <div id="tte">
          <h1 class="cat-h1">About</h1>

          <p class="cat-content">
            Punchline Punjabi seeks to be a 1/1 music magazine that promotes our most talented Punjabi artists, deconstructing their songs into their individual parts to see exactly what makes them so rich in substance.

We are a magazine in the traditional sense of producing written content, but also a magazine that you would find in a camera or CD player, loading pieces of dynamic media into the receptacle to play for your enjoyment.

Through these two mediums of presenting content, we aim to document how the Punjabi sound continues to evolve over the centuries, from its folk roots. This will be achieved through series like: Sonah [gold] Selectah, which picks out some of the most ghaint [excellent] pieces of music; and Punjabi Samples, which picks out the most catchy old-school Punjabi loops and turns them into fresh tracks - to name just two of many.

Further, we will cover interesting stories that are not being told elsewhere; for example: the influence of west coast G-Funk on Punjabi music.

Essentially, our sonic magazine is at the intersection of Punjab and the wider Punjabi diaspora, covering the music that is coming out from the hemispheres.

At our core, we seek to highlight the punchlines of our cultural narrative, hence the name: Punchline Punjabi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
