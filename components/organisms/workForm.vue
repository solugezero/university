<template>
  <div class="work-form">
    <div class="work-form_top">
      <p class="work-form_top__title">{{ options?.title }}</p>
      <p class="work-form_top__date">Дата публикации: {{ options.date }}</p>
    </div>
    <div class="work-form_wrapper">
      <div class="work-form_wrapper__item">Автор: {{ options?.author }}</div>
      <div class="work-form_wrapper__item">Тема: {{ options?.theme }}</div>
      <div class="work-form_wrapper__item">Предмет: {{ options?.subject }}</div>
      <div class="work-form_wrapper__item">Группа: {{ options?.group }}</div>
      <div class="work-form_wrapper__item">Курс: {{ options?.course }}</div>
      <span class="work-form_wrapper__item">Описание: {{ options?.description }}</span>
      <div class="work-form_wrapper__item_file-wrapper" @click="downloadFile">
        <img class="work-form_wrapper__item_file-wrapper__icon" src="@/assets/imgs/fileicon.png" alt="" />
        <p class="work-form_wrapper__item_file-wrapper__file-name" @click="downloadFile()">
          <a :href="`http://localhost:3000/download/${options.fileid}.${options?.filetitle.split('.').reverse()[0]}`">{{ options?.filetitle }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
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
      type: "lab",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet diam at nulla lobortis pulvinar. Donec porta, sem quis aliquet pretium, neque ligula fringilla magna, non mattis massa orci nec nulla. Ut aliquet porta nunc ac accumsan. Suspendisse potenti. Nullam a laoreet felis. Cras vel egestas purus, sed hendrerit massa. Sed mollis velit ac sem lacinia, nec tempus massa mattis. Sed euismod est ac nulla ultricies, in auctor eros pretium. Nullam mattis vel elit eget dictum. Integer venenatis eget purus sed luctus. Sed non turpis elit. Pellentesque sit amet lectus hendrerit, ullamcorper eros ac, fermentum leo.",
      filename: "123",
    },
  },
});

const downloadFile = () => {
  const { filetitle, fileid } = props.options;
  let ext = filetitle.split(".").reverse()[0];
  return `http://localhost:3000/download/${fileid}.${ext}`;
};
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
    background: #ffffff;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    width: 100%;
    max-width: 100vw;
    height: auto;
    padding: 13px;
    flex-direction: column;
    gap: 11px;
    flex-wrap: wrap;
    position: relative;

    &__item {
      display: flex;
      color: #000;
      flex-wrap: wrap;
      word-break: break-all;

      &_file-wrapper {
        display: flex;
        width: auto;
        height: auto;
        flex-direction: row;
        gap: 6px;
        align-items: center;
        &__file-name {
          color: #000;

          a {
            text-decoration: none;
            color: #000;
          }
        }
      }
    }
  }
}

.desc {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  max-width: 100%;
}
</style>
