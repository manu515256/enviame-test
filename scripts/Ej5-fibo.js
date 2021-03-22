
const fibo = () =>{
    const limit = 1000
    let a,b = 1;
    let temp;
    let divisores = []

    while(divisores.length <= limit){
        
        temp = a
        a = b
        b = temp + b
        
        for (let i = b; i >= 1;--i){
            
            if(b % i == 0) divisores.push(i)

        }
    }

    return divisores;

}

console.log(fibo())