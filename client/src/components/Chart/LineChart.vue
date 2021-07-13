<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveData } = mixins
import SensorService from '../../services/SensorService.'

export default {
  extends: Line,
  mixins: [reactiveData],
  data: () => ({
    chartData: '',
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  created () {
    this.fillData()
  },
  methods: {
    fillData () {
      // get data from server
      const dataTemperature = []
      const dataHumidity = []
      SensorService.get().then(function (response) {
        for (let i = 0; i < 10; i++) {
          const temp = Number(response.data[i].temperature)
          dataTemperature.push(temp)
        }

        for (let i = 0; i < 10; i++) {
          const temp = Number(response.data[i].humidity)
          dataHumidity.push(temp)
        }
        // console.log(data)
      })

      this.chartData = {
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10'
        ],
        datasets: [
          {
            label: 'Temperature oC',
            data: dataTemperature,
            backgroundColor: 'transparent',
            borderColor: 'gba(1, 116, 188, 0.50)',
            pointBackgroundColor: 'rgba(171, 71, 188, 1)'
          },
          {
            label: 'Humidity %',
            data: dataHumidity,
            backgroundColor: 'transparent',
            borderColor: 'rgba(1, 116, 188, 0.50)',
            pointBackgroundColor: 'rgba(171, 71, 188, 1)'
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)

    setInterval(() => {
      this.fillData()
    }, 5000)
  }
}
</script>
