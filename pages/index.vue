<template>
  <div class="main-page content-box">
    <img src="@/assets/imgs/mainpage.jpg" alt="" />
  </div>
</template>

<script setup>
const { data: fetchData } = await useFetch("http://localhost:3000/all");
</script>

<style scoped lang="scss">
.main-page {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80vw;
    height: 80vh;
  }
}
</style>
