# 使用方法

``` javascript

const h = this.$createElement;
this.$msgbox({
    title: '',
    message: h('AnswerPopup', null, ''),
    showCancelButton: false,
    showConfirmButton:false,
    showClose:false,
    customClass:'answer-popup-box'
    // beforeClose: (action, instance, done) => {
    //     if (action === 'confirm') {
    //         instance.confirmButtonLoading = true;
    //         instance.confirmButtonText = '执行中...';
    //         setTimeout(() => {
    //             done();
    //             setTimeout(() => {
    //                 instance.confirmButtonLoading = false;
    //             }, 300);
    //         }, 3000);
    //     } else {
    //         done();
    //     }
    // }
}).then(action => {
    this.$message({
        type: 'info',
        message: 'action: '
    });
}).catch(_=>{});
```


