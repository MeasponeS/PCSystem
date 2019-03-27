import {reportRecord as  report} from '../../api/study.js'
export default {
    data: function () {
        return {
            ResidenceTime:0,//页面停留时间，只有切换课程才会重置
            PlayTime:0,//视音频实打实的播放时间。秒,60秒上报之后重置为0
            initPlay:true,//切换章节会初始化为true,表示用户首次播放音视频
            courseType:2//1富文本， 2、视频课
        }
    },
    create(){

    },
    methods: {
        videoReport(coursePackId,courseId,chapterId){
            this.initPlay = true;
            this.courseType = 2;
            this.numberAccumulation(coursePackId,courseId,chapterId,1);//学习次数加一

            this.initResidenceTime(coursePackId,courseId,chapterId,3);//页面停留时长和学习时长累加
        },
        audioReport(coursePackId,courseId,chapterId){
            this.initPlay = true;
            this.numberAccumulation(coursePackId,courseId,chapterId,1);//学习次数加一

            this.initResidenceTime(coursePackId,courseId,chapterId,2);//页面停留时长和学习时长累加
        },
        richTextReport(coursePackId,courseId,chapterId){
            this.initPlay = true;
            this.numberAccumulation(coursePackId,courseId,chapterId,1);//学习次数加一
            this.initResidenceTime(coursePackId,courseId,chapterId,1);//页面停留时长累加
        },

        initResidenceTime(coursePackId,courseId,chapterId,type = 1) {//type  1富文本；2音频；3视频
            let self = this;
            self.ResidenceTime = 0;
            self.PlayTime = 0;

            if(window.residenceTimeInterval){clearInterval(window.residenceTimeInterval)}
            window.residenceTimeInterval = setInterval(() => {
                self.ResidenceTime ++;

                if(self.ResidenceTime >= 60){//页面停留时长加60s并重置ResidenceTime
                    this.residenceTimeAdd60(coursePackId,courseId,chapterId)
                    self.ResidenceTime = 0;
                }
                if(type == 3){
                    let video = document.querySelector('video');
                    if(video && !video.paused){//在播放
                        self.PlayTime ++;
                        if(this.initPlay){
                            this.numberAccumulation(coursePackId,courseId,chapterId,2);//视频观看次数加一
                            this.initPlay = false
                        }
                    }
                    if(self.PlayTime >= 60){//视频播放时长加60s并重置PlayTime

                        this.videoTimeAdd60(coursePackId,courseId,chapterId,video.duration);
                        self.PlayTime = 0;
                    }
                }
                if(type == 2){
                    let audio = document.querySelector('audio');
                    if(audio && !audio.paused){//在播放
                        self.PlayTime ++;
                        if(this.initPlay){
                            this.numberAccumulation(coursePackId,courseId,chapterId,3);//音频观看次数加一
                            this.initPlay = false
                        }
                    }
                    if(self.PlayTime >= 60){//音频播放时长加60s并重置PlayTime
                        this.audioTimeAdd60(coursePackId,courseId,chapterId,audio.duration);
                        self.PlayTime = 0;
                    }
                }
            }, 1000)
        },
        noVideoReport(coursePackId,courseId,chapterId){
            setTimeout(_=>{
                this.courseType = 1;
                this.richTextReport(coursePackId,courseId,chapterId);
                //先不做音频
                // let myaudio = document.querySelector('audio');
                //
                // if(myaudio){
                //     this.audioReport(coursePackId,courseId,chapterId)
                // }else {
                //     this.richTextReport(coursePackId,courseId,chapterId)
                // }
            },500)
        },
        numberAccumulation(coursePackId,courseId,chapterId,type){
            report({
                orgId : this.ORGINFO.id,
                reportType:type,
                courseType:this.courseType,
                coursePackId:coursePackId,
                courseId:courseId,
                chapterId:chapterId ? chapterId : -1,
            }).then(_=>{
                if(type == 1){
                    console.log('学习次数加1次')
                }
                if(type == 2){
                    console.log('视频观看次数加1次')
                }
                if(type == 3){
                    console.log('音频播放次数加1次')
                }
            }).catch(_=>{})//学习次数加一
        },
        residenceTimeAdd60(coursePackId,courseId,chapterId){
            report({
                orgId : this.ORGINFO.id,
                reportType:0,
                courseType:this.courseType,
                coursePackId:coursePackId,
                courseId:courseId,
                chapterId:chapterId ? chapterId : -1,
                take_time:60
            }).then(_=>{
                console.log('页面停留时长加60s')
            }).catch(_=>{})
        },
        videoTimeAdd60(coursePackId,courseId,chapterId,videoDuration = 0){
            report({
                orgId : this.ORGINFO.id,
                reportType:0,
                courseType:this.courseType,
                coursePackId:coursePackId,
                courseId:courseId,
                chapterId:chapterId ? chapterId : -1,
                videoTime:60,
                videoDuration:videoDuration
            }).then(_=>{
                console.log('视频观看时长加60s')
            }).catch(_=>{})
        },
        audioTimeAdd60(coursePackId,courseId,chapterId,audioDuration = 0){
            report({
                orgId : this.ORGINFO.id,
                reportType:0,
                courseType:this.courseType,
                coursePackId:coursePackId,
                courseId:courseId,
                chapterId:chapterId ? chapterId : -1,
                audioTime:60,
                audioDuration:audioDuration
            }).then(_=>{
                console.log('音频时长加60s')

            }).catch(_=>{})
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
            let audio = document.querySelector('audio');
            if (document[hiddenProperty]) {
                if(myvideo){
                    myvideo.pause()
                }
                if(audio){
                    audio.pause()
                }
            }else{
                if(myvideo){
                    myvideo.play()
                }
                if(audio){
                    audio.play()
                }
            }
        }
        document.addEventListener(visibilityChangeEvent, onVisibilityChange);
    },
    beforeDestroy: function () {

    },
    components: {}
}

// ##课程类型确定
//
// 通过someKey区分【视频、音频、富文本】
//
// ## 视频课程统计规则
//
// * 页面停留时长：用户进入页面开始计数一分钟上报一次(结果可能非常大，累加)
// * 学习次数：用户每次进入页面上报一次，后续不再上报
// * 播放次数：用户进入页面点击视频播放上报一次，后续暂停和播放不再上报
// * 学习时长：用户在视频播放的情况下计数，计数到1分钟就上报(并上报视频长度，后端根据进度规则判断是否完成)
//
// (每秒钟检测视频是否在播放，播放的情况下计数加一，否则计数不处理，当计数到60s上报一次。当用户切换浏览器tab标签页视频停止播放)
//
// ## 音频课程统计规则
//
// * 页面停留时长：用户进入页面开始计数一分钟上报一次(结果可能非常大，累加)
// * 学习次数：用户每次进入页面上报一次，后续不再上报
// * 播放次数：用户进入页面点击音频播放上报一次，后续暂停和播放不再上报
// * 学习时长：用户在音频播放的情况下计数，计数到1分钟就上报(并上报音频长度，后端根据进度规则判断是否完成)
//
// (每秒钟检测音频是否在播放，播放的情况下计数加一，否则计数不处理，当计数到60s上报一次。当用户切换浏览器tab标签页音频停止播放)
//
// ## 富文本课程统计规则
//
// * 页面停留时长：用户进入页面开始计数一分钟上报一次(结果可能非常大，累加)
// * 学习次数：用户每次进入页面上报一次，后续不再上报
//
// (后端在第一次上报就会当课程学习完成)
//
//
// ## 视音频完成规则（后端）
//
// * 0~10分钟的视频/音频，单次学视频/音频时长的50%以上算完成
// * 10~15分钟的视频/音频，单次学视频/音频时长的60%以上算完成
// * 15~20分钟的视频/音频，单次学视频/音频时长的70%以上算完成
// * 20分钟以上的视频/音频，单次学视频/音频时长的80%以上算完成
//
// ## 其他
//
// * 页面同时存在视频和音频的情况音频会被忽略
//

