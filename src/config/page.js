module.exports = {

    login:{
        title:'登录',
        requiredParameters:{}
    },
    index:{
        title:'学习',
        requiredParameters:{}
    },
    template:{
        title:'Template',
        requiredParameters:{}
    },
    exam:{
        title:'考试',
        requiredParameters:{}
    },
    message:{
        title:'消息首页',
        requiredParameters:{}
    },
    topic:{
        title:'习题集',
        requiredParameters:{}
    },
    topicList:{
        title:'习题集关卡列表',
        requiredParameters:{
            packageId:'课程包id',
            courseId:'课程id',
        }
    },
    topicDetails:{
        title:'习题详情页',
        requiredParameters:{
            packageId:'课程包id',
            courseId:'课程id',
            levelId:'关卡id'
        }
    },

    topicError:{
        title:'我的错题集',
        requiredParameters:{}
    },
    register:{
        title:'注册',
        requiredParameters:{}
    },
    personal:{
        title:'个人信息',
        requiredParameters:{}
    },
    study:{
        title:'课程详情',
        requiredParameters:{}
    },
    courseDetails:{
        title:'课程学习页',
        requiredParameters:{}
    },
    examDetails:{
        title:'考试中',
        requiredParameters:{}
    },
    examResults:{
        title:'考试详情',
        requiredParameters:{}
    },
    examHistory:{
        title:'查看考试结果',
        requiredParameters:{}
    },
    collection:{
        title:'我的收藏',
        requiredParameters:{}
    },
    changePassword:{
        title:'修改密码',
        requiredParameters:{}
    }
}
