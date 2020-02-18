

module.exports = function transform(arr) {
    if (!(arr instanceof Array)) {
        throw new Error();
    }
     const CONTROL_SEQUENCES = {
        DISCARD_NEXT : '--discard-next',
        DISCARD_PREV: '--discard-prev',
        DOUBLE_NEXT: '--double-next',
        DOUBLE_PREV: '--double-prev',
        NULL: 'null'
    };

    let newArr = [];
    for (let i = 0,j = 0; i < arr.length; i++, j++) {
        switch (arr[i]) {
            case CONTROL_SEQUENCES.DISCARD_NEXT: {
               i++;
               break;
            }
            case CONTROL_SEQUENCES.DISCARD_PREV: {
                newArr.pop();
                break;
            }
            case CONTROL_SEQUENCES.DOUBLE_NEXT: {
                if (i+1 < arr.length) {
                    newArr.push(arr[i+1]);
                }
                break;
            }
            case CONTROL_SEQUENCES.DOUBLE_PREV: {
                if (i-1 >= 0) {
                    newArr.push(arr[i-1]);
                }
                break;
            }
            default: {
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;
};
