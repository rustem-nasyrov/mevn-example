<template>
  <div id="app">
    <div>
      <!-- Nav bar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">
          MEVN Stack Example
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link
              to="/"
              custom
              v-slot="{ href, navigate, isExactActive }"
            >
              <li class="nav-item" :class="[isExactActive && 'active']">
                <a :href="href" class="nav-link" @click="navigate">
                  Create a student
                </a>
              </li>
            </router-link>
            <router-link
              to="/view"
              custom
              v-slot="{ href, navigate, isExactActive }"
            >
              <li class="nav-item" :class="[isExactActive && 'active']">
                <a :href="href" class="nav-link" @click="navigate">
                  View students
                </a>
              </li>
            </router-link>
          </ul>
        </div>
      </nav>
      <!-- Router view -->
      <div class="container mt-5">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
