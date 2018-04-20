const store = {
    user: {
        name: Bobo,
        userId: 12345,
        //lists is a series of ID numbers for lists. This is needed by the AllLists container.
        userLists: [
            123,
            234
        ]     
    },
    lists : {
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
    }
}


