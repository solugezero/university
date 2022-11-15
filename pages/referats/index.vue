<template>
    <div class="referats">
      <OrganismsCreateForm>
        <template v-slot:activeButton>
            <ui-button>Добавить работу</ui-button>
        </template>
      </OrganismsCreateForm>
    </div>
  </template>
  
  <script setup>
  let dataRefers = ref({})
  </script>
  
  <style scoped lang="scss">
  
  </style>