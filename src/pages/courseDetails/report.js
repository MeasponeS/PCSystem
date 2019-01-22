import {report} from '../../api/study.js'
export default {
    data: function () {
        return {
            ResidenceTime:0,
        }
    },
    create(){

    },
    methods: {
        initResidenceTime() {
            this.ResidenceTime = 0;
            if(window.residenceTimeInterval){clearInterval(window.residenceTimeInterval)}
            window.residenceTimeInterval = setInterval(() => {
                this.ResidenceTime++;
            }, 1000)
        },

        computeFinish(){

            let myvideo = document.querySelector('video');
            if(myvideo && myvideo.duration){

                let m = parseInt(myvideo.duration/60);
                let residenceTime = this.ResidenceTime;

                if(m < 10){
                    if(residenceTime > myvideo.duration*0.5){
                        return 1
                    } else {
                        return 0
                    }
                } else if( 10<m<15){
                    if(residenceTime > myvideo.duration*0.6){
                        return 1
                    } else {
                        return 0
                    }
                } else if( 15<m<20){
                    if(residenceTime > myvideo.duration*0.7){
                        return 1
                    } else {
                        return 0
                    }
                } else if( m> 20){
                    if(residenceTime > myvideo.duration*0.8){
                        return 1
                    } else {
                        return 0
                    }
                }
                this.videoTime = myvideo.duration

            } else {
                return 1
            }

        },

        videoReport(coursePackId,courseId,chapterId){
            if(window.reportInterval){clearInterval(window.reportInterval)}
            this.initResidenceTime();
            report({
                orgId : this.ORGINFO.id,
                reportType:2,
                coursePackId:coursePackId,
                courseId:courseId,
                chapterId:chapterId ? chapterId : -1,
                takeTime:0,
                videoTime:0,
                status:0,
            }).then(_=>{}).catch(_=>{})

            window.reportInterval = setInterval(()=>{
                report({
                    orgId : this.ORGINFO.id,
                    reportType:0,
                    coursePackId:coursePackId,
                    courseId:courseId,
                    chapterId:chapterId ? chapterId : -1,
                    takeTime:60,
                    videoTime:60,
                    status:this.computeFinish(),
                }).then(_=>{}).catch(_=>{})
            },1000 * 60)
        },
        noVideoReport(coursePackId,courseId,chapterId){
            if(window.reportInterval){clearInterval(window.reportInterval)}
            this.initResidenceTime();
            report({
                orgId : this.ORGINFO.id,
                reportType:1,
                coursePackId:coursePackId,
                courseId:courseId,
                chapterId:chapterId ? chapterId : -1,
                takeTime:0,
                videoTime:0,
                status:1,
            }).then(_=>{}).catch(_=>{})

            window.reportInterval = setInterval(()=>{
                report({
                    orgId : this.ORGINFO.id,
                    reportType:0,
                    coursePackId:coursePackId,
                    courseId:courseId,
                    chapterId:chapterId ? chapterId : -1,
                    takeTime:60,
                    videoTime:0,
                    status:1,
                }).then(_=>{}).catch(_=>{})
            },1000 * 60)

        },

    },
    mounted() {

    },
    beforeDestroy: function () {

    },
    components: {}
}
