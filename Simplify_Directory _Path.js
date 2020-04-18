module.exports = { 
 //param A : string
 //return a strings
    simplifyPath : function(A){
        var stack = []
        var arr = A.split('/')
        for(var i=0;i<arr.length;i++){
            if(arr[i]=== '..')
                stack.pop();
            else if(arr[i]=== '.' || arr[i]=== '')
            	continue;
            else stack.push(arr[i])
        }
        return '/' + stack.join('/')
    }
};
