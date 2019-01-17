<template>
    <div class="countdown">
        {{ time }}
    </div>
</template>

<script>
    export default {
        name: 'Countdown',
        props: {
            second: Number
        },
        data: function () {
            return {
                time:'00:00:00'
            }
        },
        mounted() {
            if(this.second == 0)return;
            let initSecond =  this.second;

            window.Countdown = setInterval(_=>{
                if(initSecond <= 0){
                    this.$emit('end');
                    clearInterval(window.Countdown);
                    return
                }
                initSecond --;
                this.$emit('toggle');

                let hour = Math.floor(initSecond/3600);
                let minute = Math.floor(initSecond%3600/60);
                let second = Math.floor(initSecond%60);

                this.time = (hour < 10 ? '0'+ hour : hour )
                    +':'+
                    (minute< 10 ? '0'+ minute : minute)
                    +':'+
                    (second< 10 ? '0'+ second : second)
            },1000)

        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
