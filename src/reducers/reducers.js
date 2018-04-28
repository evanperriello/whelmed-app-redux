export const allLists = (state={}, action)=>{
    switch(action.type){
        case 'ADD_LIST':
            return (
                {...state,
                    //this syntax creates a ComputedPropertyName (i.e., name from variable)
                    [action.listId]: {
                        title: action.title,
                        items: []
                    }
                }
            );
        case 'DELETE_LIST':
            return (
                action.newLists
            );
        case 'ADD_ITEM':
            return (
                {...state,
                    [action.listId] : {
                        ...state[action.listId],
                        items: action.items
                    }
                }
            );
        case 'DELETE_ITEM':
            return (
                {
                    ...state,
                    [action.listId] : {
                        ...state[action.listId],
                        items: state[action.listId].items.filter(
                            item=>{
                                return item.id !== action.itemId;
                            }
                        )
                    }
                }
            );
        case 'CHECK_ITEM':
            return (
                {
                    ...state,
                    [action.listId] : {
                        ...state[action.listId],
                        items: state[action.listId].items.map(
                            item=>{
                                return (item.id === action.itemId)?
                                {...item, unfinished: !item.unfinished}:
                                item
                            }
                        )
                    }
                }
            )
        default:
            return state;
}
}

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
export const toggleShow = (state=true, action)=>{
    switch(action.type){
        case 'TOGGLE_SHOW':
            return !state;
        default:
            return state;
    }
}
