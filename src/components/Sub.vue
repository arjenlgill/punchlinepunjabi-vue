<template>
  <div class="cat-content-container">
    <div id="tte">
      <h1 class="cat-h1">{{subTitle}}</h1>

      <p class="cat-content">
        {{subContent}}
      </p>
    </div>
  </div>
</template>

<script>

export default {
    props: {
        subTitle: String,
        subContent: String
    }
}

</script>
