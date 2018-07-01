/**
 * Created by jiaohanliu on 2018/7/1
 * Function:
 * Des:
 */
export default class LogUtil {
    static debug = true
    static i(tag, hint){
        if (this.debug) {
            console.log(tag + "==>" +new DataCue().valueOf() + " "+ hint)
        }
    }
}