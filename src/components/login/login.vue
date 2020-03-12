<template>
    <div class="mian">
        <div class="logincard">
            <div class="logincardLeft">

            </div>
            <div class="logincardRight">
                <span class="logintitle" font-family= "Helvetica Neue">登录</span>
                <div class="inputdiv">
                    <el-input v-model="username" placeholder="账号" ></el-input>
                </div>
                <div class="inputdiv">
                    <el-input type="password" v-model="password" placeholder="密码"></el-input>
                </div>
                <div class="inputdiv">
                    <img class="captchaSrc" v-bind:src="captchaSrc" v-on:click="updateCaptcha" />
                </div>
                <div class="inputdiv">
                    <el-input type="captcha" v-model="captcha" placeholder="验证码"></el-input>
                </div>
                <div class="inputdiv2">
                    <el-button type="primary" class="loginbtn" v-on:click="submit">登录</el-button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
   import qs from 'qs'
    export default{
        data(){
            return{
                username:'',
                password:'',
                captcha:'',
                captchaSrc:'',
                cToken:''
            }
        },
        methods:{
            submit(){
                console.log(111)
                //账号密码 admin admin
                this.axios.post('/api/loginCheck',qs.stringify({
                    username:this.username,
                    password:this.password,
                    captcha:this.captcha,
                    cToken:this.cToken
                })).then(res=>{
                    console.log(res.data)
                    if(res.data.status=='success'){
                        this.$router.push({name:'Home'})
                    }
                }).catch(err=>{
                    console.log(err)
                    //
                }
                )

            },
            //刷新验证码
            updateCaptcha(){
                var self=this
                this.axios.post('/api/captcha').then(function(response){
                    console.log(response.data.data)
                    self.captchaSrc=response.data.data.img
                    self.cToken=response.data.data.cToken
                }).catch(function(error){
                    console.log(error)
                })
            }
        },
        created:function(){
            this.updateCaptcha()
        }
    }
</script>
<style scoped>

    .mian{
        width: 100%;
        height: 100%;
        /*border:1px solid red;*/
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logincard{
        width: 1000px;
        height: 500px;
        /* border: 1px solid #2f77e3 ; */
        border-radius: 14px;
        box-shadow: 8px 3px 20px #dfe1e4;
        background-color: #ffffff;
        float: left;
        margin-top:80px;
    }
    .logincardLeft{
        width: 64%;
        height: 100%;
        background-image: linear-gradient(to right , #2f77e3, #6baee6);
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        float: left;
        /*border:1px solid red;*/
    }
    .logincardRight{
        width: 36%;
        height: 100%;
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        float: left;
        /*border:1px solid red;*/
    }
    .logintitle{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
        font-size:20px;
        color:#2f77e3;
    }
    .inputdiv{
        margin-top: 30px;
        width: 80%;
        margin-left: 10%;
    }
    .inputdiv2{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        width: 80%;
        margin-left: 10%;
    }
    .loginbtn{
        width: 100%;
    }
    .captchaSrc{
        height: 40px;
        width: 100%;
    }
</style>