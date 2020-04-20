module.exports = { 
 //param A : array of integers
 //return a array of integers
    prevSmaller : function(A){
        var G = []; G.push(-1);
        var stack = [];
        for(var i=1;i<A.length;i++){
                if(A[i]>A[i-1]){
                    stack.push(A[i-1]);
                    G.push(A[i-1]);
                }
                else {
                    while(stack.length && stack[stack.length-1]>=A[i]){
                        stack.pop();
                    }       
                    if(stack.length) G.push(stack[stack.length-1]);
                    else G.push(-1);
                }
        }
        return G;
    }
};  
