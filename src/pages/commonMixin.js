import {getOrgInfo,saveOrgInfo,getToken,getUserInfo} from '../utils/dataStorage.js'
import {getOrgCodeByDomain} from '../api/common.js'
export default {
    data: function () {
        return {
            ORGINFO:{},
            USERINFO:false
        }
    },
    create(){

    },
    methods: {

    },
    mounted() {
        let orgInfo = getOrgInfo();
        let userToken = getToken();
        let userInfo = getUserInfo();
        if(!orgInfo){
            getOrgCodeByDomain({}).then(r=>{
                saveOrgInfo(r);
                this.ORGINFO = r;
                document.title += ('-'+this.ORGINFO.orgName)
            }).catch(_=>{})
        }else {
            this.ORGINFO = orgInfo;
            document.title += ('-'+this.ORGINFO.orgName)
        }
        if(userToken && userInfo){
            this.USERINFO = userInfo;
        }else{
            this.USERINFO = false
        }

    },
    beforeDestroy: function () {

    },
    components: {}
}
