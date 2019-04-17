import { TODO_ACTIONS } from "./actions";

const initialState = {
    data: getLocalData()
}

function setLocalData(data) {
    localStorage.setItem('data',JSON.stringify(data))
}

function getLocalData() {
    const data = JSON.parse(localStorage.getItem('data'));
    return data || [];
}
const reducer = function(state = initialState, action) {
    let { data } = state;
    switch(action.type) {
        case TODO_ACTIONS.ADD:
            data.push(action.payload);
            setLocalData(data);
            return {
                data: data.slice()
            };
        case TODO_ACTIONS.REMOVE:
            data.splice(action.payload, 1);
            setLocalData(data);
            return {
                data: data.slice()
            };
        case TODO_ACTIONS.EDIT:
          setLocalData(data);
            return {
                data: data.slice(),
                value:data[action.payload],
                index:action.payload
            };
        case TODO_ACTIONS.UPDATE:
            setLocalData(data);
            data[action.payload.index]=action.payload.value;
            console.log(action.payload)
            return {
                data: data.slice()
                
            };
        default:
            return state;
    }
}

export default reducer;