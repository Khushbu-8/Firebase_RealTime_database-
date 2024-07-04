import {combineReducers} from 'redux'
import CompanyReduser from './CompanyReduser'

const rootReduser = combineReducers({
    Details : CompanyReduser
})
export default rootReduser