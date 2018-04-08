const store = {
    user: {
        name: Bobo,
        userId: 12345,
        //lists is a series of ID numbers for lists
        lists: {
            123: true, 
            234: true, 
            345: true
        }
            
    },
    lists : {
        123: {
            title: 'My lovely list',
            items: [
                'Do a thing',
                'Do another thing',
                'Do yet a third thing',
                'And a fourth'
            ]
        },
        234: {
            title: 'My not quite as lovely list',
            items: [
                'Do a thing',
                'Do another thing',
                'Do yet a third thing',
                'And a fourth'
            ]
        }
    }
}
