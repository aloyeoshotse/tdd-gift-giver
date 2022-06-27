const {BadRequestError} = require("../utils/errors")

class GiftExchange {

    static pairs(names) {
        if (names.length % 2 != 0) {throw new BadRequestError;} //check this
        var copyNames = names;
        var finalArr = []
        for (let idx=0; idx < (names.length)/2; idx++) {
            var tup = []
            for (let count=0; count < 2; count++){
                let randomIdx = Math.random(copyNames.length)
                let item = copyNames[randomIdx]
                tup.splice(count,0,item)
                copyNames.splice(randomIdx,1)
            }
            finalArr.splice(idx,0,tup)
        }
        return finalArr
    }


    static traditional(names){
        var copyNames = names;
        let randomArr = [];
        let finalArr = [];
        for (let idx=0; idx < names.length; idx++) {
            let randomIdx = Math.random(copyNames.length);
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