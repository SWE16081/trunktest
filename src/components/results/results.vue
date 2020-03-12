<template>
    <div class="main">
        <div class="contentRightUp">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">员工列表</a></el-breadcrumb-item>
                <el-breadcrumb-item>个人业绩</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contentRightDown">
            <el-button @click="resetDateFilter">清除日期过滤器</el-button>
            <el-button @click="clearFilter">清除所有过滤器</el-button>
            <el-table
                ref="filterTable"
                :data="tableData"
                style="width: 100%">
                <el-table-column
                prop="date"
                label="日期"
                sortable
                width="180"
                column-key="date"
                :filters="[{text: '2016-05-01', value: '2016-05-01'}, 
                        {text: '2016-05-02', value: '2016-05-02'}, 
                        {text: '2016-05-03', value: '2016-05-03'}, 
                        {text: '2016-05-04', value: '2016-05-04'}]"
                :filter-method="filterHandler"
                >
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址"
                :formatter="formatter"
                >
                </el-table-column>
                <el-table-column
                prop="tag"
                label="标签"
                width="100"
                :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                :filter-method="filterTag"
                filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                    :type="scope.row.tag === '家' ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.tag}}</el-tag>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    name:'',
    components:{},
    data(){
        return{
       tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }]
        }
    },
    methods:{
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      //用来格式化内容	
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
          //row每行的数据
        return row.tag === value;
      },
      /*filter-method
           数据过滤使用的方法，如果是多选的筛选项，
           对每一条数据会执行多次，任意一次返回 true 就会显示。
      */
      filterHandler(value, row, column) {
          //column['property']即该列的属性值 date
          //value是filters设置的value值
        const property = column['property'];
        console.log('列property',value)
        //返回数据的property字段为value的行
        return row[property] === value;
      }
    }
}
</script>
<style scoped>
.main{
    height:100%;
    width: 100%;
}
.contentRightUp{
    height:6%;
    width: 96%;
    display: flex;
    align-items: center;
    margin-left: 2%;
    margin-right: 2%;
}
.contentRightDown{
    margin-top:2%;
    height:92%;
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
}
</style>
