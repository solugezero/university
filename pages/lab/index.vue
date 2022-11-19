<template>
  <div class="referats">
    <div class="content-box">
      <OrganismsCreateForm @add="(el) => handleForm(el)">
        <template v-slot:activeButton>
          <ui-button class="btn">Добавить работу</ui-button>
        </template>
      </OrganismsCreateForm>
      <div class="referats_wrapper">
        <p class="referats_wrapper__title">Список лабораторных работ</p>
        <div class="referats_wrapper_list">
          <OrganismsWorkForm :key="`referats_wrapper_list-${index}`" v-for="(item, index) in fetchData" :options="item"></OrganismsWorkForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let data = ref({
  referats: [],
});

const handleForm = (el) => {
  data.value.referats.push(el);
};

const { data: fetchData } = await useFetch("http://localhost:3000/all");
</script>

<style lang="scss" scoped>
.referats {
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;

  .content-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &_wrapper {
    display: flex;
    width: 100%;
    height: 300px;
    flex-direction: column;
    gap: 30px;

    &_list {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      gap: 30px;
    }

    &__title {
      font-size: 20px;
      font-weight: 700;
      color: #000;
    }
  }
}

.btn {
  width: 250px;
}
</style>
