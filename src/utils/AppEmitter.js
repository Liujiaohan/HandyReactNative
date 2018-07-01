/**
 * Created by jiaohanliu on 2018/7/1
 * Function:
 * Des:
 */


const EventEmitter = require('events');

class AppEmitter extends EventEmitter {

}
const SharedAppEmitter = new AppEmitter();
export default SharedAppEmitter;