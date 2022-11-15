<template>
  <div class="header">
    <div class="header-wrapper content-box">
        <img src="@/assets/imgs/logo.png" alt="" class="header-wrapper__logo">
        <div class="header-wrapper_buttons">
            <NuxtLink to="/"><ui-button>Главная</ui-button></NuxtLink>
            <NuxtLink to="/referats"><ui-button>Рефераты</ui-button></NuxtLink>
            <NuxtLink to="/lab"><ui-button>Лабараторки</ui-button></NuxtLink>
            <NuxtLink to="/presentation"><ui-button>Презентации и курсы</ui-button></NuxtLink>
        </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.header {
    width: 100%;
    height: 80px;
    display: flex;
    background: #adb9eb;

    &-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;

        &__logo {
            width: 40px;
            height: 40px;
        }

        &_buttons {
            display: flex;
            width: auto;
            height: auto;
            flex-direction: row;
            gap: 10px;
        }
    }
}
</style>