module.exports = function repeater(
    str,
    options = {
        repeatTimes: 0,
        separator: "+",
        addition: '',
        additionRepeatTimes: 0,
        additionSeparator: '|'
    }) {
    if (options.separator === undefined) {
        options.separator = "+";
    }
    if (str === null) {
        str = 'null';
    } else {
        if (str === undefined) {
            str = 'undefined';
        } else {
            str = str.toString();
        }
    }
    if (options.addition !== '') {
        if (options.addition === null) {
            options.addition = 'null';
        } else {
            if (options.addition === undefined) {
                options.addition = 'undefined';
            } else {
                options.addition = options.addition.toString();
            }
        }
    }
    if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
        return str + options.addition;
    }
    let result = '';
    let resultItem = '';

    for (let i = 0; i < options.repeatTimes; i++) {
        result += str;
        resultItem = '';
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            if (options.additionRepeatTimes - 1 > j) {
                resultItem += (options.addition + options.additionSeparator);
            } else {
                if (options.addition !== '') {
                    resultItem += options.addition;
                }
            }
        }

        if (options.repeatTimes - 1 > i) {
            if (resultItem !== '') {
                result += resultItem;

            }
            if (options.separator !== '') {
                result += options.separator;
            }
        } else  {
            if (resultItem !== '') {
                result += resultItem;
            }

        }

    }
    return result;
};
