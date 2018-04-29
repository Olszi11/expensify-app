const promise = new Promise((resolve, reject) =>{

    setTimeout(()=>{
        resolve({
            name: 'kris',
            age: 23
        });

       // reject('something went wrong!')
        
    },1500)
    
});


console.log('before');
promise.then((data)=>{
    console.log('1',data);
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(
                'THis is my other promise'
            );
    
           // reject('something went wrong!')
            
        },5000)
        
    });
    
    
}).then((str)=>{
    console.log('does this run? ', str)
}).catch((error)=>{
    console.log('error: ', error);
})



//secend method

// promise.then((data)=>{
//     console.log('1',data);
// },(error) => {
//     console.log('error: ', error);
// });


console.log('after');