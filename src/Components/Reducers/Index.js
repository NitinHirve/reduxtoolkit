
import {combineReducers} from 'redux';
import {ChnageTheNumber,changeNumberByFive} from './Reducer';


const Reducers = combineReducers({
    ChnageTheNumber :ChnageTheNumber,
    changeNumberByFive :changeNumberByFive
})

export default Reducers;