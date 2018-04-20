export const sample = (state=[], action)=>{
    return ({
        123:{
            title: 'My lovely list',
            items: [
                {
                    text: 'Do a thing',
                    id: 'afdashfjhwoaeh',
                    unfinished: true
                },
                {
                    text: 'Do another thing',
                    id: 'xvbxchsfhd',
                    unfinished: false
                },
                {
                    text: 'Do yet a third thing',
                    id: 'aasdfdhh',
                    unfinished: true
                },
            ]

        },
        234: {
            title: 'My not as lovely list',
            items: [
                {
                    text: 'Do a thing',
                    id: 'afdashfjhwoaeh',
                    unfinished: true
                },
                {
                    text: 'Do another thing',
                    id: 'xvbxchsfhd',
                    unfinished: false
                },
                {
                    text: 'Do yet a third thing',
                    id: 'aasdfdhh',
                    unfinished: true
                },
            ]

        },
    });
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

export const allLists = (state=['List1', 'List2'], action) =>{
    switch(action.type){
        case 'ADD_LIST':
            return (
                state
                // [
                //     ...state,
                //     {
                //         title: action.title,
                //         id: action.listId,
                //         items: []
                //     }
                // ]
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