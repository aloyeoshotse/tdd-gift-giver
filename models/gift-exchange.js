const {BadRequestError} = require("../utils/errors")

class GiftExchange {

    static pairs(names) {
        if (names.length % 2 != 0) {throw new BadRequestError;} //check this
        var copyNames = names;
        var finalArr = []
        while (copyNames.length > 0) {
            var tup = []
            for (let count=0; count < 2; count++){
                // let len = copyNames.length
                let randomIdx = Math.floor(Math.random() * copyNames.length)
                let item = copyNames[randomIdx]
                tup.splice(count,0,item)
                copyNames.splice(randomIdx,1)
            }
            finalArr.push(tup)
        }
        return finalArr
    }

    static traditional(names){
        var copyNames = names;
        let randomArr = [];
        let finalArr = [];
        var len = names.length
        while (copyNames.length > 0) {
            let randomIdx = Math.floor(Math.random() * copyNames.length);
            randomArr.push(copyNames[randomIdx]);
            copyNames.splice(randomIdx,1);
        }
        for (let idx=0; idx < randomArr.length; idx++){
            let val = randomArr[idx];
            let nextVal;
            if (idx == randomArr.length - 1){nextVal = randomArr[0];}
            else{nextVal = randomArr[idx + 1]}
            let newString = `${val} is giving a gift to ${nextVal}`
            finalArr.push(newString)
        }
        return finalArr;
    }
    
}

module.exports = GiftExchange