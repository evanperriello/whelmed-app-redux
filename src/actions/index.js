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
export const deleteItem = (itemId)=>({
    type: 'DELETE_ITEM',
    itemId
});
//Add a list
export const addList = (title)=>({
    type: 'ADD_LIST',
    title,
    listId: uuid() 
});
//Delete a list
export const deleteList = (listId)=>({
    type: 'DELETE_LIST',
    listId
});

//Check off an item
export const toggleItem = (itemId)=>({
    type:'TOGGLE_ITEM',
    itemId
});

//show/hide done
export const toggleVisible = ()=>({
    type: 'TOGGLE_VISIBLE'
});