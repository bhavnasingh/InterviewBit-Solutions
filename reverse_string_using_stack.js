module.exports = { 
 //param A : string
 //return a string
    reverseString : function(A){
        var stack = [];
        var revString = "";
        for(var i=0;i<A.length;i++){
            stack.push(A[i]);
        }
        
        for(var i=0;i<A.length;i++){
            revString += stack.pop();
        }
        return revString;
    }
};
