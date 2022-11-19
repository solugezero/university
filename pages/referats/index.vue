<template>
  <div class="referats-page content-box">
    <OrganismsCreateForm>
      <template v-slot:activeButton>
        <v-btn>Добавить работу</v-btn>
      </template>
    </OrganismsCreateForm>
    <div style="margin-top: 20px">
      <OrganismsWorkForm :key="`referats_wrapper_list-${index}`" v-for="(item, index) in fetchData" :options="item"></OrganismsWorkForm>
    </div>
  </div>
</template>

<script setup>
const { data: fetchData } = await useFetch("http://localhost:3000/all/637670dd9960d925c73d0bf3");
</script>

<style scoped lang="scss"></style>
