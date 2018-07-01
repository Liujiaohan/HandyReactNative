/**
 * Created by jiaohanliu on 2018/7/1
 * Function:
 * Des:
 */

const arrTools={};

arrTools.isInArray = (arr, value) => {
    if(arr.indexOf&&typeof(arr.indexOf)=='function'){
        var index = arr.indexOf(value);
        if(index >= 0){
            return true;
        }
    }
    return false;
};

export default arrTools;