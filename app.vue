<template>
  <v-app>
    <NuxtLayout>
      <OrganismsHeader></OrganismsHeader>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #000;

  font-family: Verdana, Geneva, sans-serif;
}

body {
  background-color: #d7d7d7;
}

a {
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(128, 128, 128, 0.329);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(80, 80, 80, 0.274);
}
</style>
