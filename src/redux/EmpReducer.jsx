import { ADD_EMP, DEL_EMP, EDIT_EMP, VIEW_EMP } from "./actions";

const initialState = {
    employee: [
        {
            name: "Viresh",
            age: 28,
        },
        {
            name: "Kiyan",
            age: 10,
        },
        {
            name: "Krish",
            age: 15,
        },
    ],
}

const EmpReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMP:
            return {
                ...state.employee,
                employee: [...state.employee, action.payload],
            }
        case DEL_EMP:
            return {
                ...state.employee,
                employee: state.employee.filter((v, i) => i !== action.payload),
            }
        case EDIT_EMP:
            return {
                ...state.employee,
                employee: state.employee.map((v, i) =>
                    i == action.payload.pos ? action.payload.empData : v),
            }
        case VIEW_EMP:
            return state;
        default:
            return state;
    }
};

export default EmpReducer;