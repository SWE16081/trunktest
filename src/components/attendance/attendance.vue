<template>
    <div class="main">
        <div class="contentRightUp">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">员工列表</a></el-breadcrumb-item>
                <el-breadcrumb-item>员工考勤</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contentRightDown">
            <el-table
                :data="tableData"
                style="width: 100%"
                :default-sort = "{prop: 'date', order: 'descending'}"
                @sort-change="sortChange"   
                >
                    <el-table-column
                    prop="date"
                    label="日期"
                    width="180"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    :sortable="true"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="salary"
                    label="工资"
                    :sortable="true"
                    :sort-method="salaryOrder"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="salary2"
                    label="工资2"
                    width="180"
                    sortable="custom">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="地址"
                    :formatter="formatter">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
            </el-table>
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
             </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'',
    components:{},
    data(){
        return{
         currentPage: 1,
       tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          salary:1200,
          salary2:2100,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          salary:1400,
           salary2:1200,
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          salary:2100,
          salary2:3200,
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          salary:1800,
          salary2:4000,
          address: '上海市普陀区金沙江路 1516 弄'
        }]
        }
    },
    methods:{
      formatter(row, column) {
        return row.address;
      },
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        //val 当前页数
        //请求分页数据，传递val参数
      },
      //工资排序
      //a,b为选中的
      salaryOrder(a,b){
          console.log(a,b)
          return a.salary-b.salary;
      },
      sortChange(column,key,order){
          console.log(column, key, order)
              //按照降序排序
              var fieldName = column.prop;
        var sortingType = column.order;

        if(sortingType == "descending"){
            this.tableData = this.tableData.sort((a, b) => b[fieldName] - a[fieldName]);
        }
        //按照升序排序
        else{
            this.tableData = this.tableData.sort((a, b) => a[fieldName] - b[fieldName]);
        }
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
.block{
    margin-left:70%;
    width: 30%;
    margin-top: 30px;
}
</style>
