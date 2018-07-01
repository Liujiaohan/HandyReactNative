/**
 * Created by jiaohanliu on 2018/7/1
 * Function:
 * Des:
 */
import {ToastAndroid} from 'react-native'

export default class ToastUtil {
    static show(hint){
        ToastAndroid.show(hint, ToastAndroid.SHORT);
    }
}