 <template>
  <div id="app">
    <v-app>
      <page-header />
      <page-button />
      <line-chart />
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageButton from '@/components/Button.vue'
import LineChart from '@/components/Chart/LineChart.vue'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageButton,
    LineChart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.danger-alert {
  color: red;
}
</style>
