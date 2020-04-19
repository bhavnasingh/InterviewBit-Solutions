module.exports = { 
 //param A : string
 //return an integer
    braces : function(A){
        var stack = [];
        let i = 0;
        while(i<A.length){
            if(A[i]==='(' || A[i]==='+' || A[i]==='-' || A[i]==='*' || A[i]==='/'){
                stack.push(A[i]);
            }
            else if(A[i]===')'){
                if (stack[stack.length-1] == '(') {
	                return 1;
	            } else {
	                while (stack.length > 0 && stack[stack.length-1] != '(') {
	                    stack.pop();
	                }
	                stack.pop();
	            }
	        }
	        ++i;
	    }
	    return 0;
	}
};
