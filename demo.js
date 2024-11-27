// /*1. Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase,
// number, or other sequences of characters that reads the same forward and backward.*/

// //     let str=prompt("Enter the value");

// //     let rev=str.split('').reverse().join('');

// //     let result = reverStr(str,rev)

// //    function reverStr(a,b){

// //     if(a===b){
// //         return true;
// //     }else{
// //         return false;
// //     }

// //    }

// //    console.log(result)


//   /* 2. Write a function that takes an integer as input and counts how many prime numbers are less
// than the given integer. A prime number is a number that is greater than 1 and is divisible only
// by 1 and itself*/

// //    let inp=100;

// //    let result= checkprime(inp)

// //    let count=[]

// //    function checkprime(n){
// //       if(n<2){
// //         // console.log(i)
// //         return false;
       
// //       }

// //       for(let i=2;i<n;i++){
// //         if(n%i===0){
// //             // console.log(i)
// //            return false;
           
// //         }
        
// //       }
// //       return true;
     
     
// //    }

// //    for(let i=2;i<inp;i++){
// //     if(checkprime(i)){
// //         count.push(i)
// //     }
// //   }
  
// //   let final= count.length

// //   console.log(final);





// /*3. Write a function that calculates the sum of all even numbers in a given array of integers. If no
// even numbers are found in the array, return 0.*/


//         // let arr=[1,4,5,8,2,9];

//         // let total = 0;

//     /*    This is Extra ans

//         let rlt=arr.map(function (n){return n%2==0 ? total+=n : n})

//         console.log(total)
//     */
    
//         // let result = eventtl(arr);

//         //  function eventtl(num){

//         //     let total=0;

//         //     for(let i=0;i<num.length;i++){

//         //         if(num[i]%2==0){
//         //             total+=num[i]
//         //         }
//         //     }
            
//         //     return total;

//         //  }

        
//         // console.log(result);
        

//         /*4. Write a function that takes an array containing both numbers and strings, and returns a new
//         array with numbers sorted in ascending order and strings sorted alphabetically.*/

//         // let inp= [42,'zomato', "mango",12,1, 17, "banana", 2];

//         //     let str=[];
//         //     let num=[];

//         //     inp=inp.map(function (n){ return n/n==1 ? num.push(n): str.push(n)})
            
            

//         //     for(let i=0;i<num.length;i++){
//         //         for(let j=0;j<num.length;j++){
//         //             if(num[j]>num[j+1]){
//         //                 out=num[j]
//         //                 num[j]=num[j+1]
//         //                 num[j+1]=out
//         //             }
//         //         }
//         //     }
            
            
//         //     str=str.sort()
//         //     str=str.map(function (n){ return true ? num.push(n): n});

//         //     let result=num;

//         //     console.log(result);


//        /* 5. Create a Student Marksheet System to manage student details, calculate total marks,
//         percentage, and determine pass/fail status based on their percentage*/


//         //Adding students

//         let students=[];

//         let b=[];
//         let c=[];


//         let ent=Number(prompt("create student mark sheet \n 1. Add student \n 2. Display all student \n 3. Update students \n 4. Delete students \n 5. Exit."));

//         while (true){
//            if(ent===1){
//             let a = prompt("Enter student Name");
            
//             while(true){
                
//                 let c=Number(prompt("Enter marks or enter 404 to exit"))
                
//                 if(c==404){
//                     break;
//                 }else{
//                     b.push(c)
//                 }
//             }
            
//             let inp;
//             while(true){
                
//                  inp=prompt('Enter subject Name or done to exit');
                
//                 if(inp=='done'){
//                     break;
//                 }else {
//                     c.push(inp)
//                 } 
                
               
                
//             }

            
//                 while(true){
//                     if(c.length==b.length){

//                         break;
//                     }
                    
//                     else{

//                         alert('Mark or subject mismatched please enter correct subject count')
                       
//                        c=[];
//                        while(true){
                    
//                         inp=prompt('Mismatch subjects enter correct subjects or enter done to exit');
                       
//                        if(inp=='done'){
//                            break;
//                        }else {
//                            c.push(inp)
//                        } 
                        
//                     }
//                 }
        
//             } 
            
//             let id=Math.floor(Math.random()*9999)

//             students.push({id :id ,name : a , marks : b , subject : c})

//             alert(`${a} has been added has a student`);

//             ent=Number(prompt("create student mark sheet \n 1. Add student \n 2. Display all student \n 3. Update students \n 4. Delete students \n 5. Exit."));
//         }    
        
//         //Display contacts
        
//         else if(ent===2){
            

//                 for(let i=0;i<students.length;i++){

//                     let check = students[i].marks

//                     // console.log(check)

//                     let  total=0;
//                   for(let i=0;i<check.length;i++){
                    
//                     total+=Number(check[i])
//                     }

//                 // console.log(total)

//                 alert('Your marks are listed in console')

//                 let toff=((check.length)*100)/2

//                 // console.log(toff)

//                 let percent=total/check.length

//                 // console.log(percent)

                

//                 if(percent>(toff/2)){
//                     console.log(`${i+1}. ID ${students[i].id}, Name: ${students[i].name}, Marks: [${students[i].marks}], Subjects: [${students[i].subject}], Total: [${total}], Percentage: ${percent}%, status: Pass`);
//                 }else{
//                     console.log(`${i+1}. ID ${students[i].id}, Name: ${students[i].name}, Marks: [${students[i].marks}],Subjects: [${students[i].subject}], Total: [${total}], Percentage: ${percent}%, status: Fail`);
//                 }

               
                
//             }

//             ent=Number(prompt("create student mark sheet \n 1. Add student \n 2. Display all student \n 3. Update students \n 4. Delete students \n 5. Exit."));

//         }
    

//     else if(ent==3){

//                 let inp=Number(prompt('Enter id to update'));

//                 for(let i=0;i<students.length;i++){
//                     if(inp==students[i].id){
//                         let ppt=prompt('1. Update mark\n 2. Update subject');

//                         if(ppt==1){

//                             b=[]

//                           students[i].marks=b;

//                          while(true){
                
//                          let inp=Number(prompt("Update marks or enter 404 to exit"))
                
//                         if(inp==404){
//                           break;
//                          }else{
//                              b.push(inp)
//                          }
//                         }
//                         }
                       
//                         else if(ppt==2){

//                             c=[];

//                          students[i].subject=c
//                             let inp;
//                             while(true){
                                
//                                  inp=prompt('Enter subject Name or done to exit');
                                
//                                 if(inp=='done'){
//                                     break;
//                                 }else {
//                                     c.push(inp)
//                                 } 
                                
                               
                                
//                             }
//                             console.log(c.length,b.length)
                            
//                                 while(true){
//                                     if(c.length==b.length){
                
//                                         break;
//                                     }
                                    
//                                     else{
                
//                                         // alert('Mark or subject mismatched please enter correct subject count')
                                       
//                                        c=[];
//                                        while(true){
                                    
//                                         inp=prompt('Mismatch subjects enter correct subjects or enter done to exit');
                                       
//                                        if(inp=='done'){
//                                            break;
//                                        }else {
//                                            c.push(inp)
//                                        } 
                                        
//                                        }
//                                 }
                        
//                             } 
//                         }

//                     }else{
//                         alert("id not exists")
//                     }
//                 }

//                 ent=Number(prompt("create student mark sheet \n 1. Add student \n 2. Display all student \n 3. Update students \n 4. Delete students \n 5. Exit."));


//     }
    
        
           

//              else if(ent ===4){

//                 let ente=Number(prompt('Enter id to delete student'));

//                 for(let i=0;i<students.length;i++){
//                     if(students[i].id===ente){

//                         alert(`${students[i].name} has been deleted`)
//                         students.splice(i,1)
//                     }
//                     else{
//                         alert('Id not Exists');
//                     }
//                 }
                
//                 ent=Number(prompt("create student mark sheet \n 1. Add student \n 2. Display all student \n 3. Update students \n 4. Delete students \n 5. Exit."));


//              }
//              else if(ent===5){
//                 break;
//                  }

//     }


        
//         console.log(students);




// // let a=[10,10]

// // let total=0;

// // for(let i=0;i<a.length;i++){
// //     total+=a[i]
// // }
        
// // console.log(total);
