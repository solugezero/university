<template>
  <div class="header">
    <div class="header-wrapper content-box">
        <NuxtLink to="/"><img src="@/assets/imgs/logo.png" alt="" class="header-wrapper__logo"></NuxtLink>
        <div class="header-wrapper_buttons">
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
    background: rgba( 255, 255, 255, 0.05 );
    box-shadow: 0 8px 20px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );

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