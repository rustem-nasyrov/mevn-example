<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            MEVN Stack Example
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <router-link to="/" custom v-slot="{ navigate }">
          <v-list-item link @click="navigate">Home</v-list-item>
        </router-link>
        <router-link to="/view" custom v-slot="{ navigate }">
          <v-list-item link @click="navigate">Students list</v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
