<!-- 首页内容界面 -->
<template>
  <div id="index">
    <LeftContent />
    <CenterContent />
    <RightContent />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import LeftContent from '../../components/leftContent/LeftContent'
import RightContent from '../../components/rightContent/RightContent'
import CenterContent from '../../components/centerContent/CenterContent'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { LeftContent, RightContent, CenterContent },
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
#index {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 30px;
  padding: 0 20px;
  padding-bottom: 5px;
}
</style>
