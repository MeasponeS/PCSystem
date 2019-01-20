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
                status:-1,//是否完成此门课程
                type:2,//1会让课程观看时间添加60s,2会让视频观看时间添加60s
                reportType:null, //1观看课程次数加1，2观看视频次数加1
            }//报告要上传的值
        }
    },
    create(){

    },
    methods: {
        computeFinish(){},
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
            }
            report(newReportData).then(_=>{}).catch(_=>{})
        }
    },
    mounted() {
        this.initResidenceTime();


        setInterval(_=>{
            this.ReportRequest();
        },1000 * 60)
    },
    beforeDestroy: function () {

    },
    components: {}
}
