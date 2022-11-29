<template>
  <div class="main-page content-box">
    <OrganismsCreateForm>
      <template v-slot:activeButton>
        <v-btn>Добавить работу</v-btn>
      </template>
    </OrganismsCreateForm>
    <div style="margin-top: 20px; display: flex; gap: 20px; flex-direction: column">
      <OrganismsWorkForm :key="`referats_wrapper_list-${index}`" v-for="(item, index) in fetchData" :options="item"></OrganismsWorkForm>
    </div>
  </div>
</template>

<script setup>
const { data: fetchData } = await useFetch("https://rococo-selkie-b34e78.netlify.app/.netlify/functions/get_all");
</script>

<style scoped lang="scss"></style>
