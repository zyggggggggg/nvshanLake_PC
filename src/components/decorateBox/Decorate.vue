<!-- 头部带装饰的盒子 -->
<template>
  <!-- 表格标题 -->
  <div class="tableHeader">
    <span class="text">
      {{ title }}
      <div class="decorate"></div>
    </span>
    <div class="timeBox">统计时间：{{ time }}</div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  props: {
    title: { type: String, required: true },
    time: { type: String, required: true }
  },
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {}
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {} // 生命周期 - 挂载之前
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.tableHeader {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  .text {
    display: inline-block;
    font-size: 22px;
    position: relative;
    padding-left: 85px;
    padding-right: 30px;
    z-index: 2;
    letter-spacing: 2px;
    .decorate {
      position: absolute;
      top: -3px;
      left: 22px;
      bottom: 0;
      right: 0;
      content: '';
      background: transparent;
      z-index: 1;
      transform: skewX(-45deg);
      border: 3px solid #709edf;
    }
  }
  .text::before {
    position: absolute;
    top: 50%;
    left: 40px;
    content: '';
    width: 8px;
    height: 16px;
    background: #a4e4fc;
    transform: translateY(-50%) skewX(-45deg);
    z-index: 3;
  }
  .text::after {
    position: absolute;
    top: 50%;
    left: 55px;
    content: '';
    width: 8px;
    height: 16px;
    background: #a4e4fc;
    transform: translateY(-50%) skewX(-45deg);
    z-index: 3;
  }
  .timeBox {
    top: 5px;
    position: absolute;
    right: 20px;
    font-size: 16px;
  }
}
</style>
