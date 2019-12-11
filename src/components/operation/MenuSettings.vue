<!-- vue快捷创建组件 -->
<template>
<div class='app'>
  <div class="content">
    <div>
      <div style="padding:8px 0"><span style="margin-right:10px">菜单设置</span> <el-button type="primary">新增</el-button></div>
      <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <div>

    </div>
  </div>
</div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
name:'app',
props: {

},
// import引入的组件需要注入到对象中才能使用
components: {

},
data() {
// 这里存放数据
return {
  treeData: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }]
}
},
// 监听属性 类似于data概念
computed: {},
// 监控data中的数据变化
watch: {},
// 方法集合
methods: {
  handleNodeClick(data) {
        console.log(data);
      }
},
// 生命周期 - 创建完成（可以访问当前this实例）
created() {

},
// 生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, // 生命周期 - 创建之前
beforeMount() {}, // 生命周期 - 挂载之前
beforeUpdate() {}, // 生命周期 - 更新之前
updated() {}, // 生命周期 - 更新之后
beforeDestroy() {}, // 生命周期 - 销毁之前
destroyed() {}, // 生命周期 - 销毁完成
activated() {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.content{
  display: flex;
  flex-direction: row
}
.content>div{
  flex: auto
}

</style>
