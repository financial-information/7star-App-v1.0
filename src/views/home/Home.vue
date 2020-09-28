<template>
  <div>home</div>
  <div class="container">
      <div class="col-md-4">
        <div id="myChart" :style="{width: '300px', height: '300px'}">
        
        </div>
      </div>
    </div>
</template>

<script>
import { getHotNews } from "@/network/get"
import echarts from "echarts"
export default {

  name: 'Home',
  mounted() {
    getHotNews().then(res => {
      console.log(res)
    })
    this.draw()
  },
  data () {
    return {

    }
  },
  methods: {
    draw() {
      let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    },
  }
}
</script>

<style lang="css" scoped>
</style>