<!-- 中间部分的盒子 -->
<template>
  <div id="centerContent">
    <div class="topBox">
      <div id="container"></div>
    </div>
    <div class="bottomBox"></div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// import china from 'echarts/map/json/china.json'
import 'echarts/map/js/province/anhui'
import 'echarts/lib/chart/map'
// import mingguang from '../../assets/json/mingguang.json'
import instance from '../../utils/request'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      option: {
        backgroundColor: '', // 背景颜色
        title: {
          text: '安徽',
          subtext: 'China',
          color: '#fff',
          // sublink: 'http://www.pm25.in',
          x: 'center'
        },
        // 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
        visualMap: {
          min: 0, // 最小值
          max: 600, // 最大值
          calculable: true, // 是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
          inRange: {
            color: ['#fb714c', '#70b4f4', '#70e4f4', '#f09640', '#f9d9bb'] // 颜色
          },
          textStyle: {
            color: '#fff'
          }
        },
        // 提示框，鼠标移入
        tooltip: {
          show: true, // 鼠标移入是否触发数据
          trigger: 'item', // 出发方式
          formatter: '{b}-销售数量：{c}'
        },
        // 配置地图的数据，并且显示
        series: [
          {
            name: '地图',
            type: 'map', // 地图种类
            // mapType: '安徽', // 地图类型。
            data: [
              { name: '北京', value: Math.round(Math.random() * 500) },
              { name: '天津', value: Math.round(Math.random() * 500) },
              { name: '上海', value: Math.round(Math.random() * 500) },
              { name: '重庆', value: Math.round(Math.random() * 500) },
              { name: '河北', value: Math.round(Math.random() * 500) },
              { name: '河南', value: Math.round(Math.random() * 500) },
              { name: '云南', value: Math.round(Math.random() * 500) },
              { name: '辽宁', value: Math.round(Math.random() * 500) },
              { name: '黑龙江', value: Math.round(Math.random() * 500) },
              { name: '湖南', value: Math.round(Math.random() * 500) },
              { name: '安徽', value: Math.round(Math.random() * 500) },
              { name: '山东', value: Math.round(Math.random() * 500) },
              { name: '新疆', value: Math.round(Math.random() * 500) },
              { name: '江苏', value: Math.round(Math.random() * 500) },
              { name: '浙江', value: Math.round(Math.random() * 500) },
              { name: '江西', value: Math.round(Math.random() * 500) },
              { name: '湖北', value: Math.round(Math.random() * 500) },
              { name: '广西', value: Math.round(Math.random() * 500) },
              { name: '甘肃', value: Math.round(Math.random() * 500) },
              { name: '山西', value: Math.round(Math.random() * 500) },
              { name: '内蒙古', value: Math.round(Math.random() * 500) },
              { name: '陕西', value: Math.round(Math.random() * 500) },
              { name: '吉林', value: Math.round(Math.random() * 500) },
              { name: '福建', value: Math.round(Math.random() * 500) },
              { name: '贵州', value: Math.round(Math.random() * 500) },
              { name: '广东', value: Math.round(Math.random() * 500) },
              { name: '青海', value: Math.round(Math.random() * 500) },
              { name: '西藏', value: Math.round(Math.random() * 500) },
              { name: '四川', value: Math.round(Math.random() * 500) },
              { name: '宁夏', value: Math.round(Math.random() * 500) },
              { name: '海南', value: Math.round(Math.random() * 500) },
              { name: '台湾', value: Math.round(Math.random() * 500) },
              { name: '香港', value: Math.round(Math.random() * 500) },
              { name: '澳门', value: Math.round(Math.random() * 500) },
              { name: '南海诸岛', value: Math.round(Math.random() * 500) }
            ],
            itemStyle: {
              // 地图区域的多边形 图形样式。
              emphasis: {
                // 高亮状态下的样试
                label: {
                  show: true
                }
              }
            },
            zoom: 1, // 放大比例
            label: {
              // 图形上的文本标签，可用于说明图形的一些数据信息
              show: true
            }
          },
          {
            type: 'scatter',
            showEffectOn: 'render', // 配置什么时候显示特效
            coordinateSystem: 'geo', // 该系列使用的坐标系
            symbolSize: 10, // 标记的大小
            data: [{ name: '宜昌', value: [111.3, 30.7, 130] }],
            zlevel: 99999
          }
        ]
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async initMap() {
      var mapChart = echarts.init(document.getElementById('container'))
      instance.get('/json/mingguang.json').then(({ data }) => {
        console.log(data)
        echarts.registerMap('明光市', data, {})
        // let option = myChart.setOption(option)
        mapChart.setOption(this.option)
      })
      // console.log(data)
      // 基于准备好的dom，初始化echarts实例
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initMap()
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {} // 生命周期 - 挂载之前
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
#centerContent {
  flex: 1;
  height: 100%;
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .topBox {
    position: relative;
    width: 100%;
    flex: 1;
    #container {
      width: 100%;
      height: 100%;
    }
  }
  .bottomBox {
    width: 100%;
    height: 280px;
    border: 2px solid #709edf;
  }
}
</style>
