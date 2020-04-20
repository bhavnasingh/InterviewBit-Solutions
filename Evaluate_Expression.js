module.exports = { 
 //param A : array of strings
 //return an integer
    evalRPN : function(A){
        function evaluate(a,b,operator){
            a = +a; //to convert it to number from string
            b = +b;
            switch (operator){
                case "+": return a+b;
                case "-": return a-b;
                case "*": return a*b;
                case "/": return Math.floor(a / b);
            }
        }
        var stack = [];
        for(var i=0; i<A.length; i++){
            if(A[i]!='+' && A[i]!='-' && A[i]!='*' && A[i]!='/'){ //if it's a number store it in stack
                stack.push(A[i]);
            }    
            else {
                   var b = stack.pop();
                   var a = stack.pop();
                   stack.push(evaluate(a,b,A[i]));
            }
        }
            return stack.pop();
        
    }
};
