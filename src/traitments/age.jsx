export default function Age({age}){
    //const age = 20
    let isAdult = 18
    
        return   <span> {(age > isAdult)?'is Adult':'is Minor' }  </span> 
  
}