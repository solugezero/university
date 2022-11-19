<template>
  <div class="main-page"></div>
</template>

<script setup>
const fetchAllData = async () => {
  const data = await fetch("http://localhost:3000/all", {
    method: "GET",
  });
  return data;
};
onMounted(() => {
  console.log(fetchAllData());
});
</script>

<style scoped lang="scss"></style>
