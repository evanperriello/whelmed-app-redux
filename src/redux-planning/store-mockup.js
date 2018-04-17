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
    lists : [
        {
            title: 'My lovely list',
            id:123,
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
        {
            title: 'My not as lovely list',
            id:124,
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
    ]

}


