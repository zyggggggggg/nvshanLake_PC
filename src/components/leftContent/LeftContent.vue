<!-- 左边展示的部分 -->
<template>
  <div id="leftContent">
    <BorderBox>
      <div class="contentBox">
        <div class="tableBox">
          <!-- 表格标题 -->
          <Decorate title="排灌站统计" time="2020-09-14" />
          <!-- 表格内容 -->
          <div class="tableCon">
            <el-table :data="tableData" stripe style="width: 100%" max-height="280"
              >>
              <el-table-column prop="date" label="名称"> </el-table-column>
              <el-table-column prop="name" label="日处理量(万吨)"> </el-table-column>
              <el-table-column prop="address" label="日产泥量(万吨)"> </el-table-column>
              <el-table-column prop="tai" label="开泵台数(万吨)"> </el-table-column>
              <el-table-column prop="nongdu" label="污泥浓度(万吨)"> </el-table-column>
              <el-table-column prop="min" label="液位最低(万吨)"> </el-table-column>
              <!-- <el-table-column prop="liu" label="液位最低(万吨)"> </el-table-column> -->
            </el-table>
          </div>
        </div>
        <div class="tableBox">
          <!-- 表格标题 -->
          <Decorate title="明渠统计" time="2020-09-14" />
          <!-- <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table> -->
        </div>
        <div class="tableBox">
          <!-- 表格标题 -->
          <Decorate title="排灌站流量计统计" time="2020-09-14" />
          <!-- <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table> -->
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
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { BorderBox, Decorate },
  data() {
    // 这里存放数据
    return {
      tableData: [
        {
          date: '123',
          name: '王小虎',
          address: '上海市',
          tai: '5',
          nongdu: '9',
          min: '-',
          liu: 'liu'
        },
        {
          date: '123',
          name: '王小虎',
          address: '上海市',
          tai: '5',
          nongdu: '9',
          min: '-',
          liu: 'liu'
        },
        {
          date: '123',
          name: '王小虎',
          address: '上海市',
          tai: '5',
          nongdu: '9',
          min: '-',
          liu: 'liu'
        }
      ]
    }
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
#leftContent {
  width: 517px;
  height: 100%;
  .contentBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .tableBox {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
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
            top: 50%;
            left: 40px;
            content: '';
            width: 8px;
            height: 16px;
            background: #709edf;
            transform: translateY(-50%) skewX(-45deg);
            z-index: 3;
          }
          &::before {
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
        .text::after {
          position: absolute;
          top: 50%;
          left: 55px;
          content: '';
          width: 8px;
          height: 16px;
          background: #709edf;
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
      .tableCon {
        width: 100%;
        flex: 1;
        margin-top: 10px;
      }
    }
  }
  /deep/ .el-table {
    width: 100%;
    border: 0;
    color: #fff;
    background: transparent;
    thead {
      color: #fff;
      background: #5579ac;
      th {
        background: transparent;
        font-weight: 400 !important;
      }
    }
    .el-table__row {
      td {
        text-align: center;
      }
    }
    tr {
      background: transparent;
      th,
      td {
        padding: 1px 0;
        font-size: 10px;
        text-align: center;
        max-width: 50px !important;
        .cell {
          // max-width: ;
          padding-left: 3px;
          padding-right: 3px;
        }
      }
    }
  }
  /deep/ .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #356aa8 !important;
  }
  /deep/ .el-table--striped .el-table__body tr.el-table__row--striped td {
    background: #356aa8 !important;
  }
}
</style>
