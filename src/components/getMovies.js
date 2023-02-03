let movies = [
    {
        "adult": false,
        "backdrop_path": "/faXT8V80JRhnArTAeYXz0Eutpv9.jpg",
        "genre_ids": [
        16,
        28,
        12,
        35,
        10751,
        14
        ],
        "id": 315162,
        "original_language": "en",
        "original_title": "Puss in Boots: The Last Wish",
        "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        "popularity": 5032.178,
        "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        "release_date": "2022-12-07",
        "title": "Puss in Boots: The Last Wish",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 3032
    },
    {
        "adult": false,
        "backdrop_path": "/otOtC45BDzFW7nuxnWHMmnYsicK.jpg",
        "genre_ids": [
        878,
        27,
        35
        ],
        "id": 536554,
        "original_language": "en",
        "original_title": "M3GAN",
        "overview": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
        "popularity": 3734.476,
        "poster_path": "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
        "release_date": "2022-12-28",
        "title": "M3GAN",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1110
    },
    {
        "adult": false,
        "backdrop_path": "/qHdPNd1cUaSNYLLNgt1Pv3LVd0T.jpg",
        "genre_ids": [
        878,
        28,
        12
        ],
        "id": 843794,
        "original_language": "ko",
        "original_title": "정이",
        "overview": "On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",
        "popularity": 2435.432,
        "poster_path": "/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg",
        "release_date": "2023-01-20",
        "title": "JUNG_E",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 185
    },
    {
    "adult": false,
    "backdrop_path": "/evaFLqtswezLosllRZtJNMiO1UR.jpg",
    "genre_ids": [
    878,
    12,
    28
    ],
    "id": 76600,
    "original_language": "en",
    "original_title": "Avatar: The Way of Water",
    "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    "popularity": 2099.293,
    "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "release_date": "2022-12-14",
    "title": "Avatar: The Way of Water",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 4894
    },
    {
    "adult": false,
    "backdrop_path": "/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    "genre_ids": [
    28,
    12,
    878
    ],
    "id": 505642,
    "original_language": "en",
    "original_title": "Black Panther: Wakanda Forever",
    "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "popularity": 1993.631,
    "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    "release_date": "2022-11-09",
    "title": "Black Panther: Wakanda Forever",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 1893
    },
    {
    "adult": false,
    "backdrop_path": "/96SADhPnkXnVN3KaRKsDeBovLcm.jpg",
    "genre_ids": [
    28,
    14,
    10770
    ],
    "id": 877703,
    "original_language": "en",
    "original_title": "Teen Wolf: The Movie",
    "overview": "The wolves are howling once again, as a terrifying ancient evil emerges in Beacon Hills. Scott McCall, no longer a teenager yet still an Alpha, must gather new allies and reunite trusted friends to fight back against this powerful and deadly enemy.",
    "popularity": 1991.263,
    "poster_path": "/wAkpPm3wcHRqZl8XjUI3Y2chYq2.jpg",
    "release_date": "2023-01-18",
    "title": "Teen Wolf: The Movie",
    "video": false,
    "vote_average": 8.4,
    "vote_count": 232
    },
    {
    "adult": false,
    "backdrop_path": "/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg",
    "genre_ids": [
    10752,
    36,
    18
    ],
    "id": 653851,
    "original_language": "en",
    "original_title": "Devotion",
    "overview": "The harrowing true story of two elite US Navy fighter pilots during the Korean War. Their heroic sacrifices would ultimately make them the Navy's most celebrated wingmen.",
    "popularity": 1573.715,
    "poster_path": "/26yQPXymbWeCLKwcmyL8dRjAzth.jpg",
    "release_date": "2022-11-23",
    "title": "Devotion",
    "video": false,
    "vote_average": 7.6,
    "vote_count": 195
    },
    {
    "adult": false,
    "backdrop_path": "/Aqldsq65Nj1KAkQD2MzkZsAk5N5.jpg",
    "genre_ids": [
    28,
    53,
    18
    ],
    "id": 846433,
    "original_language": "es",
    "original_title": "The Enforcer",
    "overview": "A noir thriller set in Miami, the film follows an enforcer who discovers his femme fatale boss has branched out into cyber sex trafficking, putting a young runaway he’s befriended at risk. He sacrifices everything to save the young girl from the deadly organization he’s spent his life building.",
    "popularity": 1317.659,
    "poster_path": "/72V1r1G8S87ELagVxjqAUdChMCt.jpg",
    "release_date": "2022-09-22",
    "title": "The Enforcer",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 122
    },
    {
        "adult": false,
        "backdrop_path": "/vLPSvAt1CnfmDCeqG3zkFh0s6S4.jpg",
        "genre_ids": [
        10752,
        28
        ],
        "id": 542196,
        "original_language": "en",
        "original_title": "Wolf Hound",
        "overview": "Inspired by the real-life German special operations unit KG 200 that shot down, repaired, and flew Allied aircraft as Trojan horses, Wolf Hound takes place in 1944 German-occupied France and follows the daring exploits of Jewish-American fighter pilot Captain David Holden. Ambushed behind enemy lines, Holden must rescue a captured B-17 Flying Fortress crew, evade a ruthless enemy stalking him at every turn, and foil a plot that could completely alter the outcome of World War II.",
        "popularity": 1151.278,
        "poster_path": "/6sMnY4fEVAfdadhANhGnNckxsmx.jpg",
        "release_date": "2022-06-03",
        "title": "Wolf Hound",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 23
    },
    {
    "adult": false,
    "backdrop_path": "/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg",
    "genre_ids": [
    28,
    35,
    80,
    53
    ],
    "id": 899112,
    "original_language": "en",
    "original_title": "Violent Night",
    "overview": "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
    "popularity": 1132.661,
    "poster_path": "/1XSYOP0JjjyMz1irihvWywro82r.jpg",
    "release_date": "2022-11-30",
    "title": "Violent Night",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 1079
    },
    {
    "adult": false,
    "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    "genre_ids": [
    14,
    28,
    878
    ],
    "id": 436270,
    "original_language": "en",
    "original_title": "Black Adam",
    "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    "popularity": 1143.242,
    "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    "release_date": "2022-10-19",
    "title": "Black Adam",
    "video": false,
    "vote_average": 7.2,
    "vote_count": 3977
    },
    {
    "adult": false,
    "backdrop_path": "/53BC9F2tpZnsGno2cLhzvGprDYS.jpg",
    "genre_ids": [
    14,
    28,
    12,
    53
    ],
    "id": 736526,
    "original_language": "no",
    "original_title": "Troll",
    "overview": "Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?",
    "popularity": 1033.084,
    "poster_path": "/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
    "release_date": "2022-12-01",
    "title": "Troll",
    "video": false,
    "vote_average": 6.7,
    "vote_count": 1120
    },
    {
    "adult": false,
    "backdrop_path": "/94kQGMiFbs5MUTlt7kj9dewsMDi.jpg",
    "genre_ids": [
    27,
    53
    ],
    "id": 676547,
    "original_language": "en",
    "original_title": "Prey for the Devil",
    "overview": "In response to a global rise in demonic possessions, the Catholic Church reopens exorcism schools to train priests in the Rite of Exorcism. On this spiritual battlefield, an unlikely warrior rises: a young nun, Sister Ann. Thrust onto the spiritual frontline with fellow student Father Dante, Sister Ann finds herself in a battle for the soul of a young girl and soon realizes the Devil has her right where he wants her.",
    "popularity": 974.998,
    "poster_path": "/iCvgemXf2Kpr2LvpDmt5J9NhjKM.jpg",
    "release_date": "2022-10-23",
    "title": "Prey for the Devil",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 460
    },
    {
    "adult": false,
    "backdrop_path": "/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
    "genre_ids": [
    28,
    12,
    14,
    878
    ],
    "id": 19995,
    "original_language": "en",
    "original_title": "Avatar",
    "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    "popularity": 1001.678,
    "poster_path": "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    "release_date": "2009-12-15",
    "title": "Avatar",
    "video": false,
    "vote_average": 7.6,
    "vote_count": 28134
    },
    {
    "adult": false,
    "backdrop_path": "/tsjXBo4LmzV0Bb9hdrz25tzX5GD.jpg",
    "genre_ids": [
    10402
    ],
    "id": 1041513,
    "original_language": "en",
    "original_title": "Encanto at the Hollywood Bowl",
    "overview": "A taped performance of the Encanto Live-to-Film Concert Experience at the Hollywood Bowl. The original cast puts on a miracle of a concert as they sing the favorite songs, accompanied by a full orchestra and 50 person ensemble, and the Hollywood Bowl transforms into Casita!",
    "popularity": 858.726,
    "poster_path": "/sa3Ku5yNVjp8NloWxJoI9dQjvOi.jpg",
    "release_date": "2022-12-28",
    "title": "Encanto at the Hollywood Bowl",
    "video": false,
    "vote_average": 7.6,
    "vote_count": 71
    },
    {
    "adult": false,
    "backdrop_path": "/nWs0auTqn2UaFGfTKtUE5tlTeBu.jpg",
    "genre_ids": [
    10751,
    35,
    14
    ],
    "id": 668482,
    "original_language": "en",
    "original_title": "Roald Dahl's Matilda the Musical",
    "overview": "An extraordinary young girl discovers her superpower and summons the remarkable courage, against all odds, to help others change their stories, whilst also taking charge of her own destiny. Standing up for what's right, she's met with miraculous results.",
    "popularity": 836.221,
    "poster_path": "/ga8R3OiOMMgSvZ4cOj8x7prUNYZ.jpg",
    "release_date": "2022-11-25",
    "title": "Roald Dahl's Matilda the Musical",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 440
    },
    {
    "adult": false,
    "backdrop_path": "/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",
    "genre_ids": [
    35,
    80,
    9648
    ],
    "id": 661374,
    "original_language": "en",
    "original_title": "Glass Onion: A Knives Out Mystery",
    "overview": "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",
    "popularity": 912.773,
    "poster_path": "/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
    "release_date": "2022-11-23",
    "title": "Glass Onion: A Knives Out Mystery",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 3121
    },
    {
    "adult": false,
    "backdrop_path": "/sKK5bbQm15jzbMRwCJmPBbv9trN.jpg",
    "genre_ids": [
    12,
    10751,
    14
    ],
    "id": 411,
    "original_language": "en",
    "original_title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "overview": "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
    "popularity": 870.951,
    "poster_path": "/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
    "release_date": "2005-12-07",
    "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 9242
    },
    {
    "adult": false,
    "backdrop_path": "/ecaB1LUoQE1ylZJVF5KLRTkewt8.jpg",
    "genre_ids": [
    28,
    35,
    80
    ],
    "id": 683328,
    "original_language": "id",
    "original_title": "The Big 4",
    "overview": "A by-the-book female detective teams up with four down-on-their-luck assassins to investigate her father's murder.",
    "popularity": 783.271,
    "poster_path": "/jrw684BhFJZ9Jac6KJda3hSQkxt.jpg",
    "release_date": "2022-12-19",
    "title": "The Big 4",
    "video": false,
    "vote_average": 7.2,
    "vote_count": 115
    },
    {
        "adult": false,
        "backdrop_path": "/ofteFQqIntae7wqVAYYyXOCmkF1.jpg",
        "genre_ids": [
        27,
        53
        ],
        "id": 980078,
        "original_language": "en",
        "original_title": "Winnie-the-Pooh: Blood and Honey",
        "overview": "Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.",
        "popularity": 811.511,
        "poster_path": "/wtFwgFFk1ze789ghcadWGEVjj3N.jpg",
        "release_date": "2023-01-27",
        "title": "Winnie-the-Pooh: Blood and Honey",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 5
    }]
export default movies;