<template>
  <div class="referats">
    <div class="content-box">
      <OrganismsCreateForm>
        <template v-slot:activeButton>
          <ui-button>Добавить работу</ui-button>
        </template>
      </OrganismsCreateForm>
      <div class="referats_wrapper">
        <p class="referats_wrapper__title">Список лабораторных работ</p>
        <div class="referats_wrapper_list">
          <OrganismsWorkForm :key="`referats_wrapper_list-${index}`" v-for="(item, index) in data.referats" :options="item"></OrganismsWorkForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let data = ref({
  referats: [
    {
      title: "Лабораторная работа №1",
      date: "15.11.2022 21:07",
      author: "Романов Данила Юрьевич",
      course: "1",
      group: "15.27Д-ПИ06/22б",
      subject: "Информационные системы и технологии",
      theme: "Установка программного средства QGIS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet diam at nulla lobortis pulvinar. Donec porta, sem quis aliquet pretium, neque ligula fringilla magna, non mattis massa orci nec nulla. Ut aliquet porta nunc ac accumsan. Suspendisse potenti. Nullam a laoreet felis. Cras vel egestas purus, sed hendrerit massa. Sed mollis velit ac sem lacinia, nec tempus massa mattis. Sed euismod est ac nulla ultricies, in auctor eros pretium. Nullam mattis vel elit eget dictum. Integer venenatis eget purus sed luctus. Sed non turpis elit. Pellentesque sit amet lectus hendrerit, ullamcorper eros ac, fermentum leo.",
      file: { fileName: "lab1.docx", url: "" },
    },
    {
      title: "Лабораторная работа №1",
      date: "15.11.2022 21:07",
      author: "Романов Данила Юрьевич",
      course: "1",
      group: "15.27Д-ПИ06/22б",
      subject: "Информационные системы и технологии",
      theme: "Установка программного средства QGIS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet diam at nulla lobortis pulvinar. Donec porta, sem quis aliquet pretium, neque ligula fringilla magna, non mattis massa orci nec nulla. Ut aliquet porta nunc ac accumsan. Suspendisse potenti. Nullam a laoreet felis. Cras vel egestas purus, sed hendrerit massa. Sed mollis velit ac sem lacinia, nec tempus massa mattis. Sed euismod est ac nulla ultricies, in auctor eros pretium. Nullam mattis vel elit eget dictum. Integer venenatis eget purus sed luctus. Sed non turpis elit. Pellentesque sit amet lectus hendrerit, ullamcorper eros ac, fermentum leo.",
      file: { fileName: "lab1.docx", url: "" },
    },
    {
      title: "Лабораторная работа №1",
      date: "15.11.2022 21:07",
      author: "Романов Данила Юрьевич",
      course: "1",
      group: "15.27Д-ПИ06/22б",
      subject: "Информационные системы и технологии",
      theme: "Установка программного средства QGIS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet diam at nulla lobortis pulvinar. Donec porta, sem quis aliquet pretium, neque ligula fringilla magna, non mattis massa orci nec nulla. Ut aliquet porta nunc ac accumsan. Suspendisse potenti. Nullam a laoreet felis. Cras vel egestas purus, sed hendrerit massa. Sed mollis velit ac sem lacinia, nec tempus massa mattis. Sed euismod est ac nulla ultricies, in auctor eros pretium. Nullam mattis vel elit eget dictum. Integer venenatis eget purus sed luctus. Sed non turpis elit. Pellentesque sit amet lectus hendrerit, ullamcorper eros ac, fermentum leo.",
      file: { fileName: "lab1.docx", url: "" },
    },
    {
      title: "Лабораторная работа №1",
      date: "15.11.2022 21:07",
      author: "Романов Данила Юрьевич",
      course: "1",
      group: "15.27Д-ПИ06/22б",
      subject: "Информационные системы и технологии",
      theme: "Установка программного средства QGIS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet diam at nulla lobortis pulvinar. Donec porta, sem quis aliquet pretium, neque ligula fringilla magna, non mattis massa orci nec nulla. Ut aliquet porta nunc ac accumsan. Suspendisse potenti. Nullam a laoreet felis. Cras vel egestas purus, sed hendrerit massa. Sed mollis velit ac sem lacinia, nec tempus massa mattis. Sed euismod est ac nulla ultricies, in auctor eros pretium. Nullam mattis vel elit eget dictum. Integer venenatis eget purus sed luctus. Sed non turpis elit. Pellentesque sit amet lectus hendrerit, ullamcorper eros ac, fermentum leo.",
      file: { fileName: "lab1.docx", url: "" },
    },
    {
      title: "Лабораторная работа №1",
      date: "15.11.2022 21:07",
      author: "Романов Данила Юрьевич",
      course: "1",
      group: "15.27Д-ПИ06/22б",
      subject: "Информационные системы и технологии",
      theme: "Установка программного средства QGIS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet diam at nulla lobortis pulvinar. Donec porta, sem quis aliquet pretium, neque ligula fringilla magna, non mattis massa orci nec nulla. Ut aliquet porta nunc ac accumsan. Suspendisse potenti. Nullam a laoreet felis. Cras vel egestas purus, sed hendrerit massa. Sed mollis velit ac sem lacinia, nec tempus massa mattis. Sed euismod est ac nulla ultricies, in auctor eros pretium. Nullam mattis vel elit eget dictum. Integer venenatis eget purus sed luctus. Sed non turpis elit. Pellentesque sit amet lectus hendrerit, ullamcorper eros ac, fermentum leo.",
      file: { fileName: "lab1.docx", url: "" },
    },
    {
      title: "Лабораторная работа №1",
      date: "15.11.2022 21:07",
      author: "Романов Данила Юрьевич",
      course: "1",
      group: "15.27Д-ПИ06/22б",
      subject: "Информационные системы и технологии",
      theme: "Установка программного средства QGIS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet diam at nulla lobortis pulvinar. Donec porta, sem quis aliquet pretium, neque ligula fringilla magna, non mattis massa orci nec nulla. Ut aliquet porta nunc ac accumsan. Suspendisse potenti. Nullam a laoreet felis. Cras vel egestas purus, sed hendrerit massa. Sed mollis velit ac sem lacinia, nec tempus massa mattis. Sed euismod est ac nulla ultricies, in auctor eros pretium. Nullam mattis vel elit eget dictum. Integer venenatis eget purus sed luctus. Sed non turpis elit. Pellentesque sit amet lectus hendrerit, ullamcorper eros ac, fermentum leo.",
      file: { fileName: "lab1.docx", url: "" },
    },
  ],
});
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
</style>
