
 function AList() {
    
    this._array = [];
    this._length = 0;
   
 
 this.init = function (elements)  {

    if (elements) {

        for (let i = 0; i < elements.length; i++) {
            this._array[i] = elements[i];
            this._length++;
        }

    }

    return this._array;
};

this.getArray = function () {
    return this._array;
};

this.toString = function() {
    let str = '"[';

    for (let i = 0; i < this._length; i++) {
        str += `${this._array[i]}`;
        if (i !== this._length - 1) {
            str += ', ';
        }
    }

    str += ']"';

    return str;
};

this.getSize = function () {
    return this._length;
};

this.push = function (value) {
    if (value !== undefined) {
        this._array[this._length] = value;
        this._length++;
    }

    return this._length;
};

this.pop = function () {
    let element;

    if (this._length !== 0) {
        element = this._array[this._length - 1];
        this._array.length--;
        this._length--;
    }

    return  element;
};

AList.prototype.shift = function () {
    let element = this._array[0];

    if (this._length !== 0) {

        for (let i = 0; i < this._length - 1; i++) {
            this._array[i] = this._array[i + 1];
        }

        this._length--;
        this._array.length--;
    }

    return element;
};

this.unshift = function (element) {

    if (element !== undefined) {

        for (let i = this._length; i > 0; i--) {
            this._array[i] = this._array[i - 1];
        }

        this._array[0] = element;
        this._length++;
    }

    return this._length;
};

this.slice = function (startIndex, finishIndex) {
    let newArray = [];

    if(!startIndex && startIndex !== 0) {
        return this._array;
    }

    if (!finishIndex && finishIndex !== 0) {

        for (let i = 0; i < this._length - startIndex; i++) {
            newArray[i] = this._array[i + startIndex];
        }

    } else if (startIndex > finishIndex){
        return [];
    } else {

        if (finishIndex > this._length) {
            finishIndex = this._length;
        }

        for (let i = 0, j = startIndex; i < this._length, j < finishIndex; i++, j++) {
            newArray[i] = this._array[j];
        }

    }

    return newArray;
};

// this.splice = function (startIndex, amountDelete, ...insertElem) {

//     let definedStartIndex = 0;
//     let definedAmountDeleted = 0;
//     let definedInsertElem = [];
//     let spliceArray = [];

//     if (!startIndex) {
//         definedStartIndex = 0;
//     } else if (!!Number(startIndex)) {

//         if (startIndex > this.size()) {
//             definedStartIndex = this.size();
//         } else if (startIndex < -this.size()) {
//             definedStartIndex = 0;
//         } else {
//             definedStartIndex = parseInt(startIndex);
//         }

//     } else {
//         return spliceArray;
//     }

//     if (!amountDelete || amountDelete <= 0) {
//         definedAmountDeleted = 0;
//     } else if (!!Number(amountDelete)) {
//         definedAmountDeleted = parseInt(amountDelete);
//     } else {
//         definedAmountDeleted = 0;
//     }

//     if (!insertElem) {
//         definedInsertElem = null;
//     } else {

//         for (let i = 0; i < insertElem.length; i++) {
//             definedInsertElem[i] = insertElem[i];
//         }

//     }

//     spliceArray = this.slice(definedStartIndex,definedStartIndex + definedAmountDeleted);

//     let leftPart = this.slice(0, definedStartIndex);

//     let rightPart = this.slice(definedStartIndex + definedAmountDeleted );

//     array = [...leftPart, ...definedInsertElem, ...rightPart];

//     return spliceArray;
// };

this.get = function (index) {
    return this._array[index];
};

this.set = function (index, value) {

    if (index >= 0 && index < this._length && this._length !==0) {
        this._array[index] = value;
    }

};
this.sort = function (sortFunction) {

    for (let i = 0; i < this._length; i++) {
        for (let j = 0; j < this._length - i - 1; j++){
            if (sortFunction(this._array[j], this._array[j + 1]) > 0) {
                let temp = this._array[j];
                this._array[j] = this._array[j + 1];
                this._array[j + 1] = temp;
            }
        }
    }

    return this._array;
}
};

// ------------------------------------------------------------------//

const NodeLlist = function (value) {
    this.value = value;
    this.next = null;
    
};

function Llist(){
    this._root = null;
    this._length = 0;
   

this.getArray =  function () {
    let array = [];
    let temp = this._root;

    for (let i = 0; i < this._length; i++) {

        if(temp !== null) {
            array[i] = temp.value;
            temp = temp.next;
        }

    }

    return array;
};

this.init = function (...elements) {
    let array = [];

    if (elements) {

        for (let i = 0; i < elements.length; i++) {
            this.push(elements[i]);
            array[i] = elements[i];
        }

    }

    return array;
};

this.getSize = function()  {
    return this._length;
};

this.toString = function () {
    let string = '"[';
    let temp;

    if (this._root !== null) {
        temp = this._root;
    } else {
        return '"[]"';
    }

    for (let i = 0; i < this._length; i++) {

        if (temp.next !== null && i !== this._length - 1) {
            string += temp.value;
            temp = temp.next;
            string += ', ';
        }

    }

    string += temp.value + ']"';

    return string;
};

this.push = function (element) {

    if (element !== undefined) {
        const node = new NodeLlist(element);

        if (this._root === null) {
            this._root = node;
        } else {
            let tempNode = this._root;

            while (tempNode.next) {
                tempNode = tempNode.next;
            }

            tempNode.next = node;
        }

        this._length++;
    }

    return this._length;
};


this.pop = function () {
    let temp;

    if (this._root !== null){
        temp = this._root;
    } else {
        return undefined;
    }

    let beforeElem = temp;
    let returnTemp;

    for (let i = 0; i < this._length; i++) {

        if (temp.next !== null) {
            beforeElem = temp;
            temp = temp.next;
        } else {
            beforeElem.next = null;
            returnTemp = temp.value;
            this._length--;
        }

    }

    return returnTemp;
};


this.shift = function () {

    if (this._length === 0 ) {
        return undefined;
    } else {
        let temp = this._root;

        this._root = temp.next;
        this._length--;

        return temp.value;
    }

};

this.unshift = function (element) {
    let node;

    if (element) {
        node = new NodeLlist(element);
        node.next = this._root;
        this._root = node;
        this._length++;
    }

    return this._length;
};

// this.slice = function (begin, end){
//     if(!root) {
//         return undefined;
//     }
//     let tempNode = root;
//     if (tempNode.next !== null) {
//         var nextNode = tempNode.next;
//     }
//     let arrList = [];
//     let j = 1,
//         k = 0;

//     if (!root || this.getSize() <= begin || begin < 0 || end < 0 || end < begin) {
//         throw new Error('Invalid argument provided!');
//     } else if (this.getSize() > begin && end === undefined) {
//         if (begin === 0) {
//             for (let i = 0; i < this.getSize(); i++) {
//                 arrList[i] = tempNode.value;
//                 tempNode = tempNode.next;
//             }

//             root = null;
//         } else {
//             while (j < begin) {
//                 tempNode = tempNode.next;
//                 nextNode = tempNode.next;
//                 j++;
//             }

//             for (let i = j + 1; i <= this.getSize(); i++) {
//                 if (nextNode !== null) {
//                     arrList[k] = nextNode.value;
//                     nextNode = nextNode.next;
//                     k++;
//                 }
//             }

//             tempNode.next = null;
//         }

//         return arrList;
//     } else {
//         if (begin === 0) {
//             for (let i = begin; i < end; i++) {
//                 if (tempNode.value) {
//                     arrList[i] = tempNode.value;
//                     tempNode = tempNode.next;
//                     k++;
//                 } else {
//                     arrList[i] = undefined;
//                     k++;
//                 }
//             }

//             root = tempNode;
//         } else {
//             while (j < begin) {
//                 tempNode = tempNode.next;
//                 nextNode = tempNode.next;
//                 j++;
//             }

//             for (let i = j; i < end; i++) {
//                 if (nextNode !== null) {
//                     arrList[k] = nextNode.value;
//                     nextNode = nextNode.next;
//                     k++;
//                 } else {
//                     arrList[k] = undefined;
//                     k++;
//                 }
//             }

//             tempNode.next = nextNode;
//         }

//         return arrList;
//     }
// };

// Llist.prototype.splice = function (begin, count, element) {
//     if (!root) {
//         return undefined;
//     }
//     let tempNode = root;
//     if (tempNode !== null) {
//         var nextNode = tempNode.next;
//     }
//     let arrList = [];
//     let argument = [];
//     let j = 1,
//         k = 0;

//     for (let i = 2, k = 0; i < arguments.length; i++, k++) {
//         argument[k] = arguments[i];
//     }

//     if ((this.getSize() < begin && argument.length === 0) || begin < 0 || count < 0 || (this.getSize() < begin && argument.length > 0)) {
//         throw new Error('Invalid argument provided!');
//     } else if (this.getSize() > begin && count > 0 && argument.length === 0) {
//          if (begin === 0) {
//              for (let i = begin; i < begin + count; i++) {
//                  if (tempNode !== null) {
//                      arrList[i] = tempNode.value;
//                      tempNode = tempNode.next;
//                  } else {
//                      arrList[i] = undefined;
//                      k++;
//                  }
//              }

//              root = tempNode;
//          } else {
//              while (j < begin) {
//                  tempNode = tempNode.next;
//                  nextNode = tempNode.next;
//                  j++;
//              }

//              for (let i = j + 1; i <= begin + count; i++) {
//                  if (nextNode !== null) {
//                      arrList[k] = nextNode.value;
//                      nextNode = nextNode.next;
//                      k++;
//                  } else {
//                      arrList[k] = undefined;
//                      k++;
//                  }
//              }

//              tempNode.next = nextNode;
//          }

//     } else if (this.getSize() > begin && argument.length > 0 && count === 0) {
//         if (begin === 0) {
//             for (let i = argument.length - 1; i >=0; i--) {
//                 this.shift(argument[i]);
//             }
//         } else {
//             while (j < begin) {
//                 tempNode = tempNode.next;
//                 nextNode = tempNode.next;
//                 j++;
//             }

//             for (let i = 0; i < argument.length; i++) {
//                 const temp = new Node(argument[i]);
//                 tempNode.next = temp;
//                 tempNode = tempNode.next;
//                 }
//             }

//         tempNode.next = nextNode;


//     } else if (this.getSize() > begin && argument.length > 0 && count > 0) {
//         if (begin === 0) {
//             for (let i = begin; i < begin + count; i++) {
//                 if (tempNode !== null) {
//                     arrList[i] = tempNode.value;
//                     tempNode = tempNode.next;
//                 } else {
//                     arrList[i] = undefined
//                     k++;
//                 }
//             }

//             root = tempNode;

//             for (let i = argument.length - 1; i >=0; i--) {
//                 this.shift(argument[i]);
//             }
//         } else {
//             while (j < begin) {
//                 tempNode = tempNode.next;
//                 nextNode = tempNode.next;
//                 j++;
//             }

//             for (let i = j + 1; i <= begin + count; i++) {
//                 if (nextNode !== null) {
//                     arrList[k] = nextNode.value;
//                     nextNode = nextNode.next;
//                     k++;
//                 } else {
//                     arrList[k] = undefined;
//                     k++;
//                 }
//             }

//             for (let i = 0; i < argument.length; i++) {
//                 const temp = new Node(argument[i]);
//                 tempNode.next = temp;
//                 tempNode = tempNode.next;
//             }

//             tempNode.next = nextNode;
//         }
//     }
//     return arrList;
// };

    

this.get = function (index) {
    let temp;

    if (this._length !== 0) {
        temp = this._root;
    } else {
        return undefined;
    }

    let curIndex = 0;

    if (index > this._length || index < 0 ) {
        return undefined;
    } else {

        while (curIndex < index && temp !== null) {
            curIndex++;
            temp = temp.next;
        }

    }

    return temp.value;
};

this.set = function (index, value) {
    let temp;

    if (this._length !== 0 && index < this._length && index >= 0) {
        temp = this._root;
    } else {
        return ;
    }

    let curIndex = 0;

    while (curIndex < index && temp.next !== null ) {
        curIndex++;
        temp = temp.next;
    }

    temp.value = value;
};



this.sort = function (sortFunction) {
    let current = this._root;

    for (let i = 0; i < this._length; i++) {

        for (let j = 0; j < this._length - 1; j++) {
            let result = sortFunction(current.value, current.next.value);
            let temp = 0;

            if (result > 0) {
                temp = current.next.value;
                current.next.value = current.value;
                current.value = temp;
            }

            if (current.next) {
                current = current.next;
            } else {
                break;
            }

        }

        current = this._root;
    }

    return this.getArray();
}
};

//-------------------------------------------------------------------//

//=============sortFunctionction==============
const sortFunction = function (first, second) {

    if(first > second) {
        return 1;
    } else if (first === second) {
        return 0;
    } else {
        return -1;
    }

};
