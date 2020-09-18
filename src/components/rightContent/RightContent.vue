<!-- 右边显示的部分 -->
<template>
  <div id="rightContent">
    <BorderBox>
      <div class="rightBox">
        <!-- 每一个监测的盒子 -->
        <div class="watchBox">
          <!-- 标题 -->
          <Decorate title="排灌站运行监测" time="09-03 10:23" />
          <!-- 内容 -->
          <div class="watchCon">
            <p class="watchText"><i class="iconfont icon-sanjiaoxing-copy"></i>监测设备</p>
            <div class="equipment">
              <span class="leftText">流量计</span>
              <div class="status">
                <div class="normal">
                  <i class="iconfont icon-liuliang"></i>
                  <p><span class="number">83</span><span>正常</span></p>
                </div>
                <div class="warning">
                  <i class="iconfont icon-liuliang"></i>
                  <p><span class="number">83</span><span>报警</span></p>
                </div>
                <div class="fault">
                  <i class="iconfont icon-liuliang"></i>
                  <p><span class="number">83</span><span>故障</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="watchBox">
          <Decorate title="明渠运行监测" time="09-03 10:23" />
          <div class="watchCon">
            <div id="pieMain"></div>
          </div>
        </div>
        <div class="watchBox">
          <Decorate title="18闸运行监测" time="09-03 10:23" />
          <div class="watchCon">
            <div id="main"></div>
          </div>
        </div>
      </div>
    </BorderBox>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import BorderBox from '../borderBox/BorderBox'
import Decorate from '../decorateBox/Decorate'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'zrender/lib/svg/svg'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { BorderBox, Decorate },
  data() {
    // 这里存放数据
    return {
      // 折线图数据
      option: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
          textStyle: {
            fontSize: 18, // 字体大小
            color: '#ffffff' // 字体颜色
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        // x轴
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          // 文字样式
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff'
            }
          },
          // 线样式
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        // y轴
        yAxis: {
          type: 'value',
          // 文字样式
          axisLabel: {
            textStyle: {
              color: '#ffffff'
            }
          },
          // 线样式
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210],
            smooth: true,
            itemStyle: {
              normal: {
                color: 'yellow', // 改变折线点的颜色
                lineStyle: {
                  color: 'yellow' // 改变折线颜色
                }
              }
            }
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310],
            smooth: true
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410],
            smooth: true
          }
        ]
      },
      // 饼状图数据
      pieOption: {
        // title: {
        //   text: '某站点用户访问来源',
        //   subtext: '纯属虚构',
        //   left: 'center'
        // },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
          textStyle: {
            // 图例文字的样式
            color: '#fff',
            fontSize: 16
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
    initLine() {
      // 基于准备好的dom，初始化echarts实例
      // 使用svg进行渲染，不使用canvas，canvas会糊
      var myChart = echarts.init(document.getElementById('main'), null, { renderer: 'svg' })
      // 绘制图表
      myChart.setOption(this.option)
    },
    initPie() {
      // 基于准备好的dom，初始化echarts实例
      // 使用svg进行渲染，不使用canvas，canvas会糊
      var myChart = echarts.init(document.getElementById('pieMain'), null, { renderer: 'svg' })
      // 绘制图表
      myChart.setOption(this.pieOption)
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initLine()
    this.initPie()
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {} // 生命周期 - 挂载之前
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
#rightContent {
  width: 517px;
  height: 100%;
  .rightBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .watchBox {
      width: 100%;
      flex: 1;
      color: #fff;
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
      .watchCon {
        width: 100%;
        flex: 1;
        // padding-top: 1px;
        position: relative;
        .watchText {
          margin-top: 20px;
          padding-left: 20px;
          i {
            margin-right: 5px;
          }
        }
        .equipment {
          margin-top: 20px;
          display: flex;
          padding-left: 80px;
          width: 100%;
          height: 45px;
          align-items: center;
          .leftText {
            margin-right: 20px;
          }
          .status {
            flex: 1;
            display: flex;
            > div {
              flex: 1;
              display: flex;
              align-items: center;
              i {
                font-size: 35px;
                color: #80bd3c;
                margin-right: 8px;
              }
              p {
                display: flex;
                flex-direction: column;
                align-items: center;
                .number {
                  color: #80bd3c;
                }
              }
            }
            .warning {
              i,
              .number {
                color: #ec615b;
              }
            }
            .fault {
              i,
              .number {
                color: #f5e752;
              }
            }
          }
        }
        #main,
        #pieMain {
          width: 100%;
          height: 98%;
          position: absolute;
          left: 0;
          bottom: 0;
        }
        #pieMain {
          padding-left: 20px;
        }
      }
    }
  }
}
</style>
