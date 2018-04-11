const store = {
    user: {
        name: Bobo,
        userId: 12345,
        //lists is a series of ID numbers for lists. This is needed by the AllLists container.
        lists: {
            123: true, 
            234: true
        }    
    },
    lists : {
        123: {
            title: 'My lovely list',
            items: {
                'abacdag': {
                   'Do a thing': true,
                },
                'bjaoisdhf': {
                   'Do another thing': false
                },
                'afaioehr': {
                   'Do yet a third thing': true
                }
            }
        },
        234: {
            title: 'My not quite as lovely list',
            items: {
                'abacdag': {
                    'Do a thing': true,
                },
                'bjaoisdhf': {
                    'Do another thing': false
                },
                'afaioehr': {
                    'Do yet a third thing': true
                }
            }
        }
    }
}


