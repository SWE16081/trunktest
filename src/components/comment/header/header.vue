<template>
      <el-menu  
         :default-active="activeIndex" class="el-menu-demo"
         mode="horizontal" @select="handleSelect" 
         background-color="#ffffff"
         text-color="#000000"
         active-text-color="#409EFF"
         >
         <el-menu-item   v-for="item in tabData" :key="item.id":index="item.id">{{item.name}}</el-menu-item>
      </el-menu>
</template>
<script>
export default {
    data(){
        return{
            activeIndex:'1',
          //tab数据
             tabData:[
                 {
                 id:'1',name:'首页'
                 },
                  {
                 id:'2',name:'人事管理'
                 },
                   {
                 id:'3',name:'财务管理'
                 },
                   {
                 id:'4',name:'项目管理'
                 },
                   {
                 id:'5',name:'网站编辑'
                 },
                   {
                 id:'6',name:'系统管理'
                 }
           ]
        }
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    //加载初始化数据
    created:function(){
        this.axios.post('/api/#').then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
}
</script>
<style scoped>

/* .el-menu-demo{
    margin-top:-55px;
} */
</style>
