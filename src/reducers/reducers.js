export const userLists = (state=[], action)=>{
    switch(action.type){
        case 'ADD_LIST':
            return [...state, action.listId];
        case 'DELETE_LIST':
            return (
                state.filter(listId=>listId !== action.listId)
            );
        default: 
            return state;
    }
}

export const items = (state = [], action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return (
                [
                    ...state,
                    {
                        text: action.text,
                        itemId: action.itemId,
                        unfinished:true
                    }
                ]

            );
        case 'DELETE_ITEM':
            return (
                state.filter(
                    (item)=>{
                        return item.id !== action.itemId;
                    }
                )
            );
        case 'TOGGLE_ITEM':
        //add in error handling here. This will break if there is a mismatch in id 
            // const currentItem = state.find(object=> object.id === action.itemId);
            // const placeInState = state.indexOf(currentItem);
            // state[placeInState].unfinished = !state[placeInState].unfinished;
            return (
                state.map(()=>{})
            );
        
        
        default:
            return state;
    }
}

export const allLists = (state=[], action) =>{
    switch(action.type){
        case 'ADD_LIST':
            return (
                [
                    ...state,
                    {
                        title: action.title,
                        id: action.listId,
                        items: []
                    }
                ]
            );
        case 'DELETE_LIST':
            return (
                state.filter(list=>{return (list.id !== action.listId)})
            );
        default:
            return state;
    }
}


//show/hide done
export const toggleVisible = ()=>({
    type: 'TOGGLE_VISIBLE'
});