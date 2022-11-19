<template>
  <div>
    <v-app-bar color="#0B2D50" dense dark>
      <v-app-bar-nav-icon
        ><NuxtLink to="/"><img src="@/assets/imgs/logo.png" style="width: 40px; height: 40px" alt="" /></NuxtLink
      ></v-app-bar-nav-icon>

      <v-toolbar-title><p style="color: #fff">РЭУ</p></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn elevation="2"
        ><NuxtLink to="/lab"><p style="color: #fff">Лабараторные работы</p></NuxtLink></v-btn
      >
      <v-btn elevation="2"
        ><NuxtLink to="/referats"><p style="color: #fff">Рефераты</p></NuxtLink></v-btn
      >
      <v-btn elevation="2"
        ><NuxtLink to="/course"><p style="color: #fff">Курсовые работы</p></NuxtLink></v-btn
      >
      <v-btn elevation="2"
        ><NuxtLink to="/presentation"><p style="color: #fff">Презентации</p></NuxtLink></v-btn
      >

      <!-- <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </div>
</template>
