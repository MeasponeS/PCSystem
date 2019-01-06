
import AnswerPopup from './AnswerPopup.vue'
export default function popupAnswer(self,answer ,html){
    const h = self.$createElement;
    self.$msgbox({
        title: '',
        message: h(AnswerPopup, {props:{answer:answer,html:html}}, ''),
        showCancelButton: false,
        showConfirmButton:false,
        showClose:false,
        customClass:'answer-popup-box'
    }).catch(_=>{})
}
