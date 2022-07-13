
var initialValue = 0;

const ChnageTheNumber = (state=initialValue,action)=>{
    switch(action.type){

        case 'Increment' : return state+1;
        case 'Decrement' : return state-1;
        default : return state;
        
    }

}

const changeNumberByFive = (state= initialValue,action) => {
    switch(action.type){
        case 'IncrementFive' : return state+5;
        case 'DecrementFive' : return state-5;
        default : return state; 
    }
}


// export default ChnageTheNumber;
export {ChnageTheNumber,changeNumberByFive}