<template>
  <div class="header">
    <!-- <NuxtLink to="/"><img src="@/assets/imgs/logo.png" alt="" /></NuxtLink> -->
    <div style="display: flex; flex-deriction: row; gap: 10px; align-items: center">
      <NuxtLink to="/"><img src="@/assets/imgs/logo.png" alt="" /></NuxtLink>
      <p style="color: #fff; font-weight: 700">ОАО "Усосок"</p>
    </div>

    <div class="buttons">
      <NuxtLink to="/lab"><v-btn>Лабараторные работы</v-btn></NuxtLink>
      <NuxtLink to="/referats"><v-btn>Рефераты</v-btn></NuxtLink>
      <NuxtLink to="/course"><v-btn>Курсовые работы</v-btn></NuxtLink>
      <NuxtLink to="/presentation"><v-btn>Перезентации</v-btn></NuxtLink>
    </div>
    <MoleculesMobileHeaderMenu class="mobile-menu"></MoleculesMobileHeaderMenu>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 80px;
  padding: 0px 40px;
  background: #0b2d50;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    height: 60px;
  }

  @media (max-width: 425px) {
    height: 50px;
  }

  img {
    width: 70px;
    height: 70px;

    @media (max-width: 1024px) {
      height: 50px;

      width: 50px;
    }

    @media (max-width: 425px) {
      height: 40px;
      width: 40px;
    }
  }
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  @media (max-width: 1024px) {
    display: none;
  }
}

.mobile-menu {
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
}
</style>
