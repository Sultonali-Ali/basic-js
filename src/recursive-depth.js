

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            if (arr.length === 0) { return 1; }
            //console.log('true',arr, count);
            return 1 + Math.max(...arr.map(t => this.calculateDepth(t)));

        } else {
            //console.log('false');
            return 0;
        }
    }
};



