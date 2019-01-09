import {getOrgInfo,saveOrgInfo} from '../utils/dataStorage.js'
import {getOrgCodeByDomain} from '../api/common.js'
export default {
    data: function () {
        return {
            ORGINFO:{}
        }
    },
    create(){

    },
    methods: {

    },
    mounted() {
        let orgInfo = getOrgInfo();
        if(!orgInfo){
            getOrgCodeByDomain({}).then(r=>{
                saveOrgInfo(r);
                this.ORGINFO = r;
            }).catch(_=>{})
        }else {
            this.ORGINFO = orgInfo;

        }

        document.title += ('-'+this.ORGINFO.orgName)
    },
    beforeDestroy: function () {

    },
    components: {}
}
