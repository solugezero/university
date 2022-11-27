<template>
  <div class="mobile-header">
    <div class="active-btn" @click="handleActive">
      <img src="@/assets/svgs/mobileMenu.svg" alt="" />
    </div>
    <div class="content" v-if="isActive" ref="content">
      <img src="@/assets/svgs/arrow-right.svg" @click="isActive = false" alt="" />
      <div class="buttons">
        <NuxtLink to="/lab" @click="handleActive"><v-btn>Лабараторные работы</v-btn></NuxtLink>
        <NuxtLink to="/referats" @click="handleActive"><v-btn>Рефераты</v-btn></NuxtLink>
        <NuxtLink to="/course" @click="handleActive"><v-btn>Курсовые работы</v-btn></NuxtLink>
        <NuxtLink to="/presentation" @click="handleActive"><v-btn>Перезентации</v-btn></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
let content = ref();
let isActive = ref(false);

onClickOutside(content, () => (isActive.value = false));

const handleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped>
.content {
  position: fixed;
  right: 0;
  padding: 30px;
  top: 0;
  height: 100vh;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  @media (max-width: 425px) {
    width: 100vw;
  }

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  * {
    width: 100%;
  }
}
</style>
