<template>
  <div class="course-page content-box">
    <OrganismsCreateForm>
      <template v-slot:activeButton>
        <v-btn>Добавить работу</v-btn>
      </template>
    </OrganismsCreateForm>
    <div style="margin-top: 20px; display: flex; gap: 10px; flex-direction: column">
      <OrganismsWorkForm :key="`referats_wrapper_list-${index}`" v-for="(item, index) in fetchData" :options="item"></OrganismsWorkForm>
    </div>
  </div>
</template>

<script setup>
const { data: fetchData } = await useFetch("http://localhost:3000/all/637670a35f1ebdeaf17bf0e2");
</script>

<style scoped lang="scss"></style>
