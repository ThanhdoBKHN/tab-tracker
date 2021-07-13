/* eslint-disable */
<template>
  <v-row align="center" justify="space-around">
    <v-btn
      depressed
      v-if="$store.state.isUserLoggedIn"
      @click="turnOff">
      Turn Off
    </v-btn>
    <v-btn
      depressed
      color="error"
      v-if="$store.state.isUserLoggedIn"
      @click="turnOn">
      Turn On
    </v-btn>
  </v-row>
</template>

<script>
import DeviceService from '@/services/DeviceService'

export default {
  methods: {
    async turnOn () {
      try {
        var response = await DeviceService.post({
          command: '1'
        })
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async turnOff () {
      try {
        var response = await DeviceService.post({
          command: '0'
        })
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped></style>
