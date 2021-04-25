<template>
  <section>
    <div class="main-container">
      <div class="main-section-heading">
        <h2 id="main-section-heading-h2">Latest Music Content</h2>
      </div>

      <div class="grid-wrap">
        <div class="cms-wrapper">
          <!--cms item-->
          <div
            v-bind:key="article"
            v-for="article in articles"
            class="cms-item-container"
          >
            <a v-bind:href="article.url">
              <img v-bind:src="article.img" class="cms-card-image">

              <div class="cms-text-block">
                <h3 class="cms-text-block-header">
                  {{ article.header }}
                </h3>

                <p class="cms-paragraph">
                  {{ article.teaser }}
                </p>

                <div class="category-subcat-wrapper">
                  <div class="cms-category">{{article.cmsCat}}</div>

                  <div class="cms-sub-category">{{article.cmsSubCat}}</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!--cms section end-->

      <div class="newsletter-form-signup">
        <form class="newsletter-form-container" action="/form.js">
          <label for="newsletter-form" id="form-text-paragraph"
            >Stay informed of our latest drops by subscribing to our
            newsletter</label
          >
          <input
            type="text"
            name="newsletter-form"
            id="form-text-input"
            placeholder="type in e-mail and hit 'enter'"
          />
        </form>
      </div>
    </div>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

<script>
export default {
  //props: ["limit"],
  data: function () {
    return {
      articles: [
        {
          url: "singleone.html",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
        {
          url: "#",
          header:
            "Steel Banglez X Sidhu Moose Wala: '47' Track Review",
          img: require("../assets/img/sidhusteelbanglez.jpg"),
          teaser: `‘47’ chronicles the sin-ridden lives of self-professed daaku [gangster] Sidhu Moose Wala, and his collaborators: MIST and Stefflon Don.`,
          cmsCat: 'Features',
          cmsSubCat: 'Lyrics'
        },
      ],
    };
  },
};
</script>