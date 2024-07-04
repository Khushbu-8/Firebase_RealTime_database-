let initialState ={
    Userdata : [],
    error : null

}
const CompanyReduser = (state = initialState, action) => {
    switch (action.type) {
        case "Add_Detail":
            return {
                ...state,
                Userdata: [...state.Userdata, action.payload],
                error: null

            }
         default :
         return state
    }
}
export default CompanyReduser