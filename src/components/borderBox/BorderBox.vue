<!--  -->
<template>
  <div id="borderBox">
    <div class="innerBox">
      <div class="leftShandow"></div>
      <div class="rightShandow"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  //   props: ['children'],
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
#borderBox {
  position: relative;
  width: 100%;
  height: 100%;
  clip-path: polygon(50px 0, 100% 0, 100% 100%, 0 100%, 0 50px);
  background: #709edf;
  display: flex;
  flex-direction: column;
  .innerBox {
    position: absolute;
    width: 99.2%;
    height: 99.2%;
    clip-path: polygon(50px 0, 100% 0, 100% 100%, 0 100%, 0 50px);
    background: #204987;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .leftShandow {
      position: absolute;
      left: 0;
      bottom: 0;
      &::before {
        content: '';
        width: 5px;
        height: 200px;
        position: absolute;
        left: 0;
        bottom: 0;
        background: linear-gradient(to top, #7db7f5, #204987);
      }
    }
    .leftShandow::after {
      content: '';
      width: 200px;
      height: 5px;
      position: absolute;
      left: 0;
      bottom: 0;
      background: linear-gradient(to right, #7db7f5, #204987);
    }
    .rightShandow {
      position: absolute;
      right: 0;
      top: 0;
      &::before {
        content: '';
        width: 5px;
        height: 200px;
        position: absolute;
        top: 0;
        right: 0;
        background: linear-gradient(to bottom, #7db7f5, #204987);
      }
    }
    .rightShandow::after {
      content: '';
      width: 200px;
      height: 5px;
      position: absolute;
      right: 0;
      top: 0;
      background: linear-gradient(to left, #7db7f5, #204987);
    }
  }
}
</style>
