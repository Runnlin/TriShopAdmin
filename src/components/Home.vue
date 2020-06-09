// home页面只是用来放导航栏
<template>
    <div>
      <nav-menu></nav-menu>
      <router-view/>
    </div>
</template>

<script>
import NavMenu from '../common/NavMenu'
export default {
  name: 'Home',
  components: {NavMenu}
}
</script>

<style scoped>

</style>
