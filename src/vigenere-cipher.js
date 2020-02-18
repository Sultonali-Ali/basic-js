class VigenereCipheringMachine {
    constructor(flag = true) {
        this.flag = flag;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    encrypt(message, key) {
        if (message === '' || typeof message !== 'string' || key === '' || typeof key !== 'string') {
            throw new Error();
        }
        message = message.toUpperCase();
        key = key.toUpperCase();
        let maxLength = Math.max(message.length, key.length);
        let resultMessage = '';
        let m;
        let k;
        let c;
        for (let i = 0, j = 0; i < message.length; i++, j++) {
            m = this.alphabet.indexOf(message[( (i >= message.length) ? i % message.length : i) ]);
            k = this.alphabet.indexOf(key[ ( (j >= key.length) ? j % key.length : j ) ]);

           if (m !== -1) {
               c = this.alphabet[( this.alphabet.length + ( m + k ) ) % this.alphabet.length ];
           } else {
               c = message[( (i >= message.length) ? i % message.length : i) ];
               j--;
           }
            resultMessage += c;
        }
        return this.flag ? resultMessage : resultMessage.split('').reverse().join('');
    }

    decrypt(message, key) {
        if (message === '' || typeof message !== 'string' || key === '' || typeof key !== 'string') {
            throw new Error();
        }
        message = message.toUpperCase();
        key = key.toUpperCase();
        let maxLength = Math.max(message.length, key.length);
        let resultMessage = '';
        let m;
        let k;
        let c;
        for (let i = 0, j = 0; i < message.length; i++, j++ ) {
            m = this.alphabet.indexOf(message[( (i >= message.length) ? i % message.length : i) ]);
            k = this.alphabet.indexOf(key[ ( (j >= key.length) ? j % key.length : j ) ]);
            if (m !== -1) {
                c = this.alphabet[( this.alphabet.length + ( m - k ) ) % this.alphabet.length ];
            } else {
                c = message[( (i >= message.length) ? i % message.length : i) ];
                j--;
            }
            resultMessage += c;
        }
        return this.flag ? resultMessage : resultMessage.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
