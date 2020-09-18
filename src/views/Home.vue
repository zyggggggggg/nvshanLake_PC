<template>
  <dv-full-screen-container>
    <div id="home">
      <router-view />
    </div>
  </dv-full-screen-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 100%;
  background: #5b88d3;
  display: flex;
  flex-direction: column;
}
</style>
