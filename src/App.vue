<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { configAdapter } from './layer-modules/config/adapter';
import { CONFIG_ADAPTER_TYPES } from './layer-modules/config/adapter/types';

@Component({
  name: 'App',
  // Provides IoC container at the top level of VueComponent
  provide: {
    [CONFIG_ADAPTER_TYPES.CONTAINER]: configAdapter.container,
  },
})
export default class App extends Vue {}
</script>
