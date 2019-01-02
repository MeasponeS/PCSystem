<template>
    <div class="head">
        <div class="container">
            <img class="logo" src="./img/logo.jpg" alt="">
            <ul class="nav">
                <li v-for="(title,url) in nav"><a :class="{active:activeUrl == url}" :href="'./'+url+'.html'">{{ title }}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Config from '../../config/app.js'
    export default {
        name: 'Head',
        props: {
            activeUrl: {
                type:String,
                default:'',
            }
        },
        data: function () {
            return {
                nav:Config.nav
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../assets/css/var.scss";
   .head{
       height: 100px;
       width: 100%;
       background-color: #fff;
       border-bottom: 1px solid #DFDFDF;
       .container{
           display: flex;
           height: 100%;
           align-items: center;
           .logo{
               width: 184px;
               height: 44px;
           }
           .nav{
               flex: 1;
               padding-left: 90px;
               list-style-type: none;
               li{
                   float: left;
                   margin-right: 46px;
                   a{
                       font-size: 18px;
                       &:hover,&.active{
                           color: $--color-primary;
                           border-bottom: 2px solid $--color-primary;
                       }
                   }
               }
           }
       }
   }
</style>
