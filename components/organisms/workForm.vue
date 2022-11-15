<template>
  <div class="work-form">
    <div class="work-form_top">
      <p class="work-form_top__title">{{ props.options.title }}</p>
      <p class="work-form_top__date">Дата публикации: {{ props.options.date }}</p>
    </div>

    <div class="work-form_wrapper">
      <p class="work-form_wrapper__item">Автор: {{ props.options.author }}</p>
      <p class="work-form_wrapper__item">Тема: {{ props.options.theme }}</p>
      <p class="work-form_wrapper__item">Предмет: {{ props.options.subject }}</p>
      <p class="work-form_wrapper__item">Группа: {{ props.options.group }}</p>
      <p class="work-form_wrapper__item">Курс: {{ props.options.course }}</p>
      <p class="work-form_wrapper__item">Описание: {{ props.options.description }}</p>
      <div class="work-form_wrapper__item_file-wrapper">
        <img class="work-form_wrapper__item_file-wrapper__icon" src="@/assets/imgs/fileicon.png" alt="" />
        <p class="work-form_wrapper__item_file-wrapper__file-name">{{ props.options.file.fileName }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Object,
    default: {
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
  },
});
</script>

<style scoped lang="scss">
.work-form {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &_top {
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    &__title,
    &__date {
      color: #000;
    }

    &__title {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
    }
  }

  &_wrapper {
    background: #d9d9d9;
    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    width: 100%;
    height: auto;
    padding: 13px;
    flex-direction: column;
    gap: 11px;

    &__item {
      color: #000;

      &_file-wrapper {
        display: flex;
        width: auto;
        height: auto;
        flex-direction: row;
        gap: 6px;
        align-items: center;
        &__file-name {
          color: #000;
        }
      }
    }
  }
}
</style>
