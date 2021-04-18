<template>
  <section>
    <div class="main-container">
      <div class="main-section-heading">
        <h2 id="main-section-heading-h2">Latest Music Content</h2>
      </div>

      <div class="grid-wrap">
        <div class="cms-wrapper">
          <!--cms item-->

          <div class="cms-item-container">
            <div class="cms-card-image image1"></div>

            <div class="cms-text-block">
              <h3 class="cms-text-block-header">
                AP Dhillon X Gurinder Gill: 'Arrogant' Punjabi and English
                Lyrics
              </h3>

              <p class="cms-paragraph">
                Punjabi-to-English lyrics translation of AP Dhillon X Gurinder
                Gill's 'Arrogant', with producer Gmnxr.
              </p>

              <div class="category-subcat-wrapper">
                <div class="cms-category">Features</div>

                <div class="cms-sub-category">Lyrics</div>
              </div>
            </div>
          </div>

          <!--cms item-->

          <div class="cms-item-container">
            <div class="cms-card-image image2"></div>

            <div class="cms-text-block">
              <h3 class="cms-text-block-header">
                AP Dhillon X Gurinder Gill: 'Droptop' Lyrics English Translation
              </h3>

              <p class="cms-paragraph">
                Punjabi-to-English lyrics translation of AP Dhillon X Gurinder
                Gill's 'Droptop', a song for convertible-cruising..
              </p>

              <div class="category-subcat-wrapper">
                <div class="cms-category">Features</div>

                <div class="cms-sub-category">Lyrics</div>
              </div>
            </div>
          </div>

          <!--cms item-->

          <div class="cms-item-container">
            <div class="cms-card-image image3"></div>

            <div class="cms-text-block">
              <h3 class="cms-text-block-header">
                Prabh Deep: 'Chitta' Punjabi and English Lyrics
              </h3>

              <p class="cms-paragraph">
                Punjabi-to-English lyrics translation of AP Dhillon X Gurinder
                Gill's 'Arrogant', with producer Gmnxr. This is a song about
                staying away from the influence of cocaine.
              </p>

              <div class="category-subcat-wrapper">
                <div class="cms-category">Features</div>

                <div class="cms-sub-category">Lyrics</div>
              </div>
            </div>
          </div>

          <!--cms item-->

          <div class="cms-item-container">
            <div class="cms-card-image image4"></div>

            <div class="cms-text-block">
              <h3 class="cms-text-block-header">
                Sidhu Moose Wala: '47', the Choice of God or Gun
              </h3>

              <p class="cms-paragraph">
                Review of Sidhu Moose Wala's discography, comparing his lyrics
                to gangster rapper Tupac.
              </p>

              <div class="category-subcat-wrapper">
                <div class="cms-category">Features</div>

                <div class="cms-sub-category">Lyrics</div>
              </div>
            </div>
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

<script>
export default {
  name: "More Music",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
