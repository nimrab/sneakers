<template>
  <div class="item">
    <router-link class="link" :to="/shop/ + product.id"><img :src="product.img" :title="product.title"/></router-link>
      <router-link class="link" :to="/shop/ + product.id">{{product.title}}</router-link>
  </div>


</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>




<style lang="scss" scoped>
.item {
    max-width: 48%;
    text-align: center;
    p {
        font-size: 22px;
    }
}
</style>>

