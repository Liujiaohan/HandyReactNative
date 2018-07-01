/**
 * Created by jiaohanliu on 2018/7/1
 * Function:
 * Des:
 */
import {Dimensions} from 'react-native';

export default class DimenUtil {
    static getScreenWidth() {
        return Dimensions.get('window').width;
    }
}
