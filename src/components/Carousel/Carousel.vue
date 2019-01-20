<template>
    <div class="carousel" :style="carousel.length == 0?'display: none':''">
        <el-carousel :height="( 410/1920 ) * clientWidth + 'px'">
            <el-carousel-item v-for="item in carousel" :key="item.id">
                <a :href="item.url" target="_blank">
                    <img style="width: 100%" :src="item.pic" alt="">
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import {getAdvertising} from '../../api/common.js'
    export default {
        name: 'Carousel',
        props: {
            position: Number
        },
        data: function () {
            return {
                clientWidth:1920,
                carousel:[],
            }
        },
        mounted() {
            let self = this;

            getAdvertising({position:this.position}).then(r=>{
                self.carousel = r;
            }).catch(_=>{})

            self.clientWidth = document.body.clientWidth;

            window.addEventListener('resize',()=>{
                self.clientWidth = document.body.clientWidth
            })
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .carousel {

    }
</style>
