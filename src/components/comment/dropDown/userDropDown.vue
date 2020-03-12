<template>
    <el-dropdown>
    <span class="el-dropdown-link">
        {{username}}
    </span>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>详情</el-dropdown-item>
        <el-dropdown-item>退出  </el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
export default {
    data(){
        return{
            username:'admin'
        }
    },
    methods:{

    },
    create:function(){
        //获取用户名
        // this.username=sessionStorage('username')
        this.axios.post('/api/#').then(res=>{
            console.log(res)
            if(res.data.data['status']=='success'){
                this.username=res.data.data['username']
            }
        }).catch(err=>{
            console.log(err)
        })
    }
}
</script>
<style scoped>
.el-dropdown-link{
    cursor: pointer;
    color: #409EFF;
    font-size:16px;
    letter-spacing: 1px;
}
</style>