<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout row justify-center>
            <Playground/>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Playground from './components/Playground';
export default {
  name: 'app',
  components: {
    Playground,
  }
}
</script>
