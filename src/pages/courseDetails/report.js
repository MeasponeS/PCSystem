import {report} from '../../api/study.js'
export default {
    data: function () {
        return {
            ResidenceTime:0,//视频实打实的播放时间。秒
            PlayTime:0,//视频实打实的播放时间。秒,60秒上报之后重置为0
        }
    },
    create(){

    },
    methods: {


        computeFinish(){

            let myvideo = document.querySelector('video');
            let videoDuration = myvideo.duration;
            if(myvideo && myvideo.duration){

                let m = parseInt(videoDuration/60);
                let residenceTime = this.ResidenceTime;

                if(m < 10){
                    let finishTime =videoDuration * 0.5;

                    if(residenceTime > finishTime){
                        return 1
                    } else {
                        return 0
                    }
                } else if( 10 <= m && m < 15){
                    let finishTime = videoDuration * 0.6;

                    if(residenceTime > finishTime){
                        return 1
                    } else {
                        return 0
                    }
                } else if( 15 <= m && m <20){
                    let finishTime = videoDuration * 0.7;

                    if(residenceTime > finishTime){
                        return 1
                    } else {
                        return 0
                    }
                } else if( m >= 20){
                    let finishTime = videoDuration * 0.8;

                    if(residenceTime > finishTime){
                        return 1
                    } else {
                        return 0
                    }
                }
            } else {
                return 1
            }

        },
        videoReport(coursePackId,courseId,chapterId){

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
            this.initResidenceTime(coursePackId,courseId,chapterId);
        },
        initResidenceTime(coursePackId,courseId,chapterId) {
            let self = this;
            self.ResidenceTime = 0;
            self.PlayTime = 0;

            if(window.residenceTimeInterval){clearInterval(window.residenceTimeInterval)}
            window.residenceTimeInterval = setInterval(() => {
                let myvideo = document.querySelector('video');
                if(myvideo && !myvideo.paused){//在播放视频
                    self.ResidenceTime ++;
                    self.PlayTime ++;
                }
                if(self.PlayTime >= 60){//如果播放视频大于等于60S上报
                    report({
                        orgId : self.ORGINFO.id,
                        reportType:0,
                        coursePackId:coursePackId,
                        courseId:courseId,
                        chapterId:chapterId ? chapterId : -1,
                        takeTime:60,
                        videoTime:60,
                        status:self.computeFinish(),
                    }).then(_=>{
                        self.PlayTime = 0;
                    }).catch(_=>{})
                }
            }, 1000)
        },
        noVideoReport(coursePackId,courseId,chapterId){
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

        },

    },
    mounted() {
        let hiddenProperty = 'hidden' in document ? 'hidden' :
            'webkitHidden' in document ? 'webkitHidden' :
                'mozHidden' in document ? 'mozHidden' :
                    null;
        let visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
        let onVisibilityChange = function(){
            let myvideo = document.querySelector('video');
            if (document[hiddenProperty]) {

                if(myvideo){
                    myvideo.pause()
                }
                // console.log('页面隐藏:'+ new Date());
            }else{
                if(myvideo){
                    myvideo.play()
                }
                // console.log('页面激活：' + new Date())
            }
        }
        document.addEventListener(visibilityChangeEvent, onVisibilityChange);
    },
    beforeDestroy: function () {

    },
    components: {}
}
