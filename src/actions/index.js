import uuid from 'uuid/v1';
//Add an item

export const sampleAction = () =>({
    type: 'SAMPLE_ACTION',
});

export const addItem = (items, listId) =>({
    type: 'ADD_ITEM',
    items,
    listId
});
//Delete an item
export const deleteItem = (itemId, listId)=>({
    type: 'DELETE_ITEM',
    itemId,
    listId
});
//Add a list
export const addList = (title)=>({
    type: 'ADD_LIST',
    title,
    listId: uuid() 
});
//Delete a list
export const deleteList = (newLists)=>({
    type: 'DELETE_LIST',
    newLists
});

//Check off an item
export const checkItem = (itemId, listId)=>({
    type:'CHECK_ITEM',
    itemId,
    listId
});

//show/hide done
export const toggleShow = ()=>({
    type: 'TOGGLE_SHOW'
});