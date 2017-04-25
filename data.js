var data = {
    "name" : "Sample title",
    "owner" : ObjectId("58c05374e297d2598f8ae211"),
    "teamId" : ObjectId("58fb43e6561e21e4253fbe1f"),
    "updatedAt" : ISODate("2017-04-23T12:44:35.655-06:00"),
    "createdAt" : ISODate("2017-04-22T05:52:16.105-06:00"),
    "archived" : false,
    "meta" : {
        "_id" : ObjectId("58fb43f0561e21e4253fbe20"),
        "format" : [
            "What went well?",
            "What didn't go well?",
            "What needs change?"
        ],
        "cardCount" : NumberInt("4"),
        "participationRate" : NumberInt("0.34")
    },
    "participants" : [
        ObjectId("58c05374e297d2598f8ae211")
    ],
    "columns" : [
        {
            "placeholder" : "What went well?",
            "color" : "alert-success",
            "_id" : ObjectId("58fb43f0561e21e4253fbe23"),
            "createdAt" : ISODate("2017-04-22T05:52:16.106-06:00"),
            "rows" : [
                {
                    "owner" : ObjectId("58c05374e297d2598f8ae211"),
                    "value" : "This conference is the best",
                    "_id" : ObjectId("58fbada7d52c8e24fe0fc7e9"),
                    "createdAt" : ISODate("2017-04-22T13:23:19.510-06:00"),
                    "nodes" : [ ],
                    "selected" : false,
                    "votes" : NumberInt("0"),
                    "externalId" : "rJyn67Y0e"
                },
                {
                    "owner" : ObjectId("58c05374e297d2598f8ae211"),
                    "value" : "d",
                    "_id" : ObjectId("58fcbf28718c3f1d3328540f"),
                    "createdAt" : ISODate("2017-04-23T08:50:16.512-06:00"),
                    "nodes" : [ ],
                    "selected" : false,
                    "votes" : NumberInt("0"),
                    "externalId" : "BJvx41B9Cl"
                }
            ]
        },
        {
            "placeholder" : "What didn't go well?",
            "color" : "alert-danger",
            "_id" : ObjectId("58fb43f0561e21e4253fbe22"),
            "createdAt" : ISODate("2017-04-22T05:52:16.106-06:00"),
            "rows" : [
                {
                    "owner" : ObjectId("58c05374e297d2598f8ae211"),
                    "value" : "This is a group",
                    "_id" : ObjectId("58fbadb2d52c8e24fe0fc7f2"),
                    "type" : "GROUP",
                    "createdAt" : ISODate("2017-04-22T13:23:30.290-06:00"),
                    "nodes" : [
                        {
                            "owner" : ObjectId("58c05374e297d2598f8ae211"),
                            "value" : "Sea sick",
                            "_id" : ObjectId("58fbadb5d52c8e24fe0fc7f7"),
                            "createdAt" : ISODate("2017-04-22T13:23:33.690-06:00"),
                            "votes" : NumberInt("0"),
                            "externalId" : "S1XC2pmFRl"
                        },
                        {
                            "owner" : ObjectId("58c05374e297d2598f8ae211"),
                            "value" : "Food sucks",
                            "_id" : ObjectId("58fbadb2d52c8e24fe0fc7f2"),
                            "createdAt" : ISODate("2017-04-22T13:23:30.290-06:00"),
                            "votes" : NumberInt("0"),
                            "externalId" : "Skb9hp7YRe"
                        }
                    ],
                    "selected" : false,
                    "votes" : NumberInt("1"),
                    "externalId" : "Skb9hp7YRe"
                }
            ]
        },
        {
            "placeholder" : "What needs change?",
            "color" : "alert-info",
            "_id" : ObjectId("58fb43f0561e21e4253fbe21"),
            "createdAt" : ISODate("2017-04-22T05:52:16.105-06:00"),
            "rows" : [
                {
                    "owner" : ObjectId("58c05374e297d2598f8ae211"),
                    "value" : "Colleen needs to speak longer",
                    "_id" : ObjectId("58fbadc2d52c8e24fe0fc7fc"),
                    "createdAt" : ISODate("2017-04-22T13:23:46.524-06:00"),
                    "nodes" : [ ],
                    "selected" : true,
                    "votes" : NumberInt("0"),
                    "externalId" : "H1GjT6mFAx"
                }
            ]
        }
    ],
    "__v" : NumberInt("9")
}
