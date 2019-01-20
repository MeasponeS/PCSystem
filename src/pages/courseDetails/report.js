import {report} from '../../api/study.js'
import {clone} from '../../utils/app.js'
export default {
    data: function () {
        return {
            ResidenceTime:0,//页面停留时间
            ReportData:{
                coursePackId:'',
                courseId:'',
                chapterId:'',

                videoTime:0,
                type:1,//1会让课程观看时间添加60s,2会让视频观看时间添加60s
                reportType:1, //1观看课程次数加1，2观看视频次数加1
            }//报告要上传的值
        }
    },
    create(){

    },
    methods: {
        report(packId,couId,chaId){
            this.ResidenceTime = 0;
            
            this.ReportData.coursePackId = packId+''
            this.ReportData.courseId = couId+''
            this.ReportData.chapterId = chaId+''


            let myvideo = document.querySelector('video');

            if(myvideo){
                this.ReportData.type = 2   
                this.ReportData.reportType = 2
            }else{
                this.ReportData.type = 1 
                this.ReportData.reportType = 1
            }

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
        initResidenceTime(){
            this.ResidenceTime = 0;
            setInterval(()=>{
                this.ResidenceTime ++;
            },1000)
        },
        ReportRequest(){
            let newReportData = clone(this.ReportData);
            newReportData.orgId = this.ORGINFO.id;
            if(newReportData.type == 1){
                newReportData.takeTime = 60;
            }else {
                newReportData.videoTime = 60;

                newReportData.status = this.computeFinish();

            }
            
            newReportData.status = this.computeFinish();

            report(newReportData).then(_=>{}).catch(_=>{})
        }
    },
    mounted() {
        this.initResidenceTime();
     

        setInterval(_=>{
            this.ReportRequest();
        },1000 * 10)
    },
    beforeDestroy: function () {

    },
    components: {}
}
