
/**
 * UID = Unique ID
 * OR = Overall Ranking
 * SN = Settlement Name
 * PE = Physical Environment
 * QL = Quality of living
 * AC = Architecture, heritage, environmental credentials
 * PB = Price band of average family home
 * PBR = Ranking within price band
 */

const data = [
    {
        "UID": 1,
        "OR": 2,
        "SN": "Tenby",
        "PE": 78,
        "QL": 50,
        "AC": 32,
        "PB": "£350k-£650k",
        "PBR": 1
    },
    {
        "UID": 2,
        "OR": 3,
        "SN": "Bradford on Avon",
        "PE": 19,
        "QL": 251,
        "AC": 30,
        "PB": "£350k-£650k",
        "PBR": 2
    },
    {
        "UID": 3,
        "OR": 5,
        "SN": "Canterbury",
        "PE": 160,
        "QL": 58,
        "AC": 31,
        "PB": "£350k-£650k",
        "PBR": 3
    },
    {
        "UID": 4,
        "OR": 6,
        "SN": "Rye",
        "PE": 1,
        "QL": 205,
        "AC": 68,
        "PB": "£350k-£650k",
        "PBR": 4
    },
    {
        "UID": 5,
        "OR": 7,
        "SN": "St Ives (Cornwall)",
        "PE": 47,
        "QL": 202,
        "AC": 45,
        "PB": "£350k-£650k",
        "PBR": 5
    },
    {
        "UID": 6,
        "OR": 9,
        "SN": "Wilton (Wiltshire)",
        "PE": 67,
        "QL": 693,
        "AC": 5,
        "PB": "£350k-£650k",
        "PBR": 6
    },
    {
        "UID": 7,
        "OR": 11,
        "SN": "Faversham",
        "PE": 208,
        "QL": 134,
        "AC": 23,
        "PB": "£350k-£650k",
        "PBR": 7
    },
    {
        "UID": 8,
        "OR": 12,
        "SN": "Langport",
        "PE": 572,
        "QL": 30,
        "AC": 15,
        "PB": "£350k-£650k",
        "PBR": 8
    },
    {
        "UID": 9,
        "OR": 13,
        "SN": "Hay-on-Wye",
        "PE": 10,
        "QL": 1086,
        "AC": 4,
        "PB": "£350k-£650k",
        "PBR": 9
    },
    {
        "UID": 10,
        "OR": 15,
        "SN": "Lyme Regis",
        "PE": 57,
        "QL": 240,
        "AC": 71,
        "PB": "£350k-£650k",
        "PBR": 10
    },
    {
        "UID": 11,
        "OR": 16,
        "SN": "Marlborough",
        "PE": 15,
        "QL": 931,
        "AC": 18,
        "PB": "£350k-£650k",
        "PBR": 11
    },
    {
        "UID": 12,
        "OR": 18,
        "SN": "Bridport",
        "PE": 32,
        "QL": 202,
        "AC": 117,
        "PB": "£350k-£650k",
        "PBR": 12
    },
    {
        "UID": 13,
        "OR": 19,
        "SN": "Lenham",
        "PE": 449,
        "QL": 52,
        "AC": 20,
        "PB": "£350k-£650k",
        "PBR": 13
    },
    {
        "UID": 14,
        "OR": 20,
        "SN": "Malmesbury",
        "PE": 14,
        "QL": 1109,
        "AC": 8,
        "PB": "£350k-£650k",
        "PBR": 14
    },
    {
        "UID": 15,
        "OR": 21,
        "SN": "Frome",
        "PE": 223,
        "QL": 53,
        "AC": 84,
        "PB": "£350k-£650k",
        "PBR": 15
    },
    {
        "UID": 16,
        "OR": 22,
        "SN": "Arundel",
        "PE": 5,
        "QL": 355,
        "AC": 111,
        "PB": "£350k-£650k",
        "PBR": 16
    },
    {
        "UID": 17,
        "OR": 23,
        "SN": "Fowey",
        "PE": 6,
        "QL": 969,
        "AC": 25,
        "PB": "£350k-£650k",
        "PBR": 17
    },
    {
        "UID": 18,
        "OR": 24,
        "SN": "Fordingbridge",
        "PE": 17,
        "QL": 169,
        "AC": 208,
        "PB": "£350k-£650k",
        "PBR": 18
    },
    {
        "UID": 19,
        "OR": 26,
        "SN": "Hastings",
        "PE": 131,
        "QL": 19,
        "AC": 276,
        "PB": "£350k-£650k",
        "PBR": 19
    },
    {
        "UID": 20,
        "OR": 28,
        "SN": "Weymouth",
        "PE": 46,
        "QL": 241,
        "AC": 139,
        "PB": "£350k-£650k",
        "PBR": 20
    },
    {
        "UID": 21,
        "OR": 29,
        "SN": "Sudbury",
        "PE": 313,
        "QL": 175,
        "AC": 29,
        "PB": "£350k-£650k",
        "PBR": 21
    },
    {
        "UID": 22,
        "OR": 30,
        "SN": "Abergavenny",
        "PE": 221,
        "QL": 467,
        "AC": 19,
        "PB": "£350k-£650k",
        "PBR": 22
    },
    {
        "UID": 23,
        "OR": 31,
        "SN": "Dorchester (West Dorset)",
        "PE": 62,
        "QL": 535,
        "AC": 57,
        "PB": "£350k-£650k",
        "PBR": 23
    },
    {
        "UID": 24,
        "OR": 32,
        "SN": "Long Melford",
        "PE": 281,
        "QL": 182,
        "AC": 49,
        "PB": "£350k-£650k",
        "PBR": 24
    },
    {
        "UID": 25,
        "OR": 34,
        "SN": "Buckfastleigh",
        "PE": 84,
        "QL": 95,
        "AC": 220,
        "PB": "£350k-£650k",
        "PBR": 25
    },
    {
        "UID": 26,
        "OR": 35,
        "SN": "Godstone",
        "PE": 83,
        "QL": 3,
        "AC": 633,
        "PB": "£350k-£650k",
        "PBR": 26
    },
    {
        "UID": 27,
        "OR": 36,
        "SN": "Sidmouth",
        "PE": 41,
        "QL": 294,
        "AC": 174,
        "PB": "£350k-£650k",
        "PBR": 27
    },
    {
        "UID": 28,
        "OR": 38,
        "SN": "Wadebridge",
        "PE": 20,
        "QL": 853,
        "AC": 71,
        "PB": "£350k-£650k",
        "PBR": 28
    },
    {
        "UID": 29,
        "OR": 39,
        "SN": "Ilkley",
        "PE": 44,
        "QL": 759,
        "AC": 63,
        "PB": "£350k-£650k",
        "PBR": 29
    },
    {
        "UID": 30,
        "OR": 41,
        "SN": "Hadleigh",
        "PE": 233,
        "QL": 545,
        "AC": 21,
        "PB": "£350k-£650k",
        "PBR": 30
    },
    {
        "UID": 31,
        "OR": 42,
        "SN": "Shaftesbury",
        "PE": 449,
        "QL": 344,
        "AC": 13,
        "PB": "£350k-£650k",
        "PBR": 31
    },
    {
        "UID": 32,
        "OR": 46,
        "SN": "Bosham",
        "PE": 39,
        "QL": 321,
        "AC": 222,
        "PB": "£350k-£650k",
        "PBR": 32
    },
    {
        "UID": 33,
        "OR": 50,
        "SN": "Rowhedge",
        "PE": 244,
        "QL": 141,
        "AC": 122,
        "PB": "£350k-£650k",
        "PBR": 33
    },
    {
        "UID": 34,
        "OR": 53,
        "SN": "Keswick (Allerdale)",
        "PE": 7,
        "QL": 1041,
        "AC": 78,
        "PB": "£350k-£650k",
        "PBR": 34
    },
    {
        "UID": 35,
        "OR": 55,
        "SN": "West Malling",
        "PE": 708,
        "QL": 110,
        "AC": 27,
        "PB": "£350k-£650k",
        "PBR": 35
    },
    {
        "UID": 36,
        "OR": 58,
        "SN": "Ipswich",
        "PE": 144,
        "QL": 137,
        "AC": 249,
        "PB": "£350k-£650k",
        "PBR": 36
    },
    {
        "UID": 37,
        "OR": 60,
        "SN": "Edenbridge",
        "PE": 156,
        "QL": 71,
        "AC": 295,
        "PB": "£350k-£650k",
        "PBR": 37
    },
    {
        "UID": 38,
        "OR": 61,
        "SN": "Northam",
        "PE": 52,
        "QL": 1009,
        "AC": 62,
        "PB": "£350k-£650k",
        "PBR": 38
    },
    {
        "UID": 39,
        "OR": 62,
        "SN": "Hawkhurst",
        "PE": 449,
        "QL": 111,
        "AC": 79,
        "PB": "£350k-£650k",
        "PBR": 39
    },
    {
        "UID": 40,
        "OR": 64,
        "SN": "Great Malvern",
        "PE": 449,
        "QL": 74,
        "AC": 99,
        "PB": "£350k-£650k",
        "PBR": 40
    },
    {
        "UID": 41,
        "OR": 65,
        "SN": "Ripon",
        "PE": 112,
        "QL": 856,
        "AC": 54,
        "PB": "£350k-£650k",
        "PBR": 41
    },
    {
        "UID": 42,
        "OR": 66,
        "SN": "Dartmouth",
        "PE": 26,
        "QL": 728,
        "AC": 149,
        "PB": "£350k-£650k",
        "PBR": 42
    },
    {
        "UID": 43,
        "OR": 69,
        "SN": "Barnstaple",
        "PE": 279,
        "QL": 606,
        "AC": 35,
        "PB": "£350k-£650k",
        "PBR": 43
    },
    {
        "UID": 44,
        "OR": 70,
        "SN": "Truro",
        "PE": 150,
        "QL": 377,
        "AC": 140,
        "PB": "£350k-£650k",
        "PBR": 44
    },
    {
        "UID": 45,
        "OR": 71,
        "SN": "Loddon",
        "PE": 66,
        "QL": 732,
        "AC": 109,
        "PB": "£350k-£650k",
        "PBR": 45
    },
    {
        "UID": 46,
        "OR": 72,
        "SN": "Wells",
        "PE": 449,
        "QL": 658,
        "AC": 10,
        "PB": "£350k-£650k",
        "PBR": 46
    },
    {
        "UID": 47,
        "OR": 74,
        "SN": "Emsworth",
        "PE": 93,
        "QL": 375,
        "AC": 198,
        "PB": "£350k-£650k",
        "PBR": 47
    },
    {
        "UID": 48,
        "OR": 75,
        "SN": "Rochester",
        "PE": 138,
        "QL": 200,
        "AC": 250,
        "PB": "£350k-£650k",
        "PBR": 48
    },
    {
        "UID": 49,
        "OR": 76,
        "SN": "Wellington",
        "PE": 428,
        "QL": 102,
        "AC": 109,
        "PB": "£350k-£650k",
        "PBR": 49
    },
    {
        "UID": 50,
        "OR": 77,
        "SN": "Trowbridge",
        "PE": 421,
        "QL": 118,
        "AC": 108,
        "PB": "£350k-£650k",
        "PBR": 50
    },
    {
        "UID": 51,
        "OR": 78,
        "SN": "Bruton",
        "PE": 900,
        "QL": 319,
        "AC": 2,
        "PB": "£350k-£650k",
        "PBR": 51
    },
    {
        "UID": 52,
        "OR": 79,
        "SN": "Tonbridge",
        "PE": 88,
        "QL": 371,
        "AC": 228,
        "PB": "£350k-£650k",
        "PBR": 52
    },
    {
        "UID": 53,
        "OR": 80,
        "SN": "Deal",
        "PE": 196,
        "QL": 165,
        "AC": 239,
        "PB": "£350k-£650k",
        "PBR": 53
    },
    {
        "UID": 54,
        "OR": 81,
        "SN": "Downton",
        "PE": 70,
        "QL": 544,
        "AC": 185,
        "PB": "£350k-£650k",
        "PBR": 54
    },
    {
        "UID": 55,
        "OR": 83,
        "SN": "Mere",
        "PE": 449,
        "QL": 755,
        "AC": 12,
        "PB": "£350k-£650k",
        "PBR": 55
    },
    {
        "UID": 56,
        "OR": 87,
        "SN": "Shanklin",
        "PE": 147,
        "QL": 73,
        "AC": 396,
        "PB": "£350k-£650k",
        "PBR": 56
    },
    {
        "UID": 57,
        "OR": 88,
        "SN": "Tenbury Wells",
        "PE": 163,
        "QL": 172,
        "AC": 283,
        "PB": "£350k-£650k",
        "PBR": 57
    },
    {
        "UID": 58,
        "OR": 89,
        "SN": "Blandford Forum",
        "PE": 87,
        "QL": 667,
        "AC": 141,
        "PB": "£350k-£650k",
        "PBR": 58
    },
    {
        "UID": 59,
        "OR": 90,
        "SN": "Tenterden",
        "PE": 449,
        "QL": 140,
        "AC": 116,
        "PB": "£350k-£650k",
        "PBR": 59
    },
    {
        "UID": 60,
        "OR": 93,
        "SN": "Chipping Norton",
        "PE": 449,
        "QL": 619,
        "AC": 22,
        "PB": "£350k-£650k",
        "PBR": 60
    },
    {
        "UID": 61,
        "OR": 94,
        "SN": "Lostwithiel",
        "PE": 99,
        "QL": 571,
        "AC": 159,
        "PB": "£350k-£650k",
        "PBR": 61
    },
    {
        "UID": 62,
        "OR": 95,
        "SN": "Worcester",
        "PE": 338,
        "QL": 146,
        "AC": 181,
        "PB": "£350k-£650k",
        "PBR": 62
    },
    {
        "UID": 63,
        "OR": 96,
        "SN": "Kingsbridge",
        "PE": 42,
        "QL": 572,
        "AC": 262,
        "PB": "£350k-£650k",
        "PBR": 63
    },
    {
        "UID": 64,
        "OR": 97,
        "SN": "Norwich",
        "PE": 101,
        "QL": 346,
        "AC": 273,
        "PB": "£350k-£650k",
        "PBR": 64
    },
    {
        "UID": 65,
        "OR": 98,
        "SN": "Bowness-on-Windermere",
        "PE": 79,
        "QL": 304,
        "AC": 323,
        "PB": "£350k-£650k",
        "PBR": 65
    },
    {
        "UID": 66,
        "OR": 99,
        "SN": "Royal Tunbridge Wells",
        "PE": 449,
        "QL": 255,
        "AC": 87,
        "PB": "£350k-£650k",
        "PBR": 66
    },
    {
        "UID": 67,
        "OR": 100,
        "SN": "Bovey Tracey",
        "PE": 58,
        "QL": 667,
        "AC": 209,
        "PB": "£350k-£650k",
        "PBR": 67
    },
    {
        "UID": 68,
        "OR": 101,
        "SN": "Brightlingsea",
        "PE": 642,
        "QL": 114,
        "AC": 89,
        "PB": "£350k-£650k",
        "PBR": 68
    },
    {
        "UID": 69,
        "OR": 102,
        "SN": "Cromer",
        "PE": 56,
        "QL": 475,
        "AC": 304,
        "PB": "£350k-£650k",
        "PBR": 69
    },
    {
        "UID": 70,
        "OR": 105,
        "SN": "Chichester",
        "PE": 302,
        "QL": 651,
        "AC": 61,
        "PB": "£350k-£650k",
        "PBR": 70
    },
    {
        "UID": 71,
        "OR": 106,
        "SN": "Alcester",
        "PE": 329,
        "QL": 106,
        "AC": 251,
        "PB": "£350k-£650k",
        "PBR": 71
    },
    {
        "UID": 72,
        "OR": 107,
        "SN": "Halstead",
        "PE": 310,
        "QL": 189,
        "AC": 199,
        "PB": "£350k-£650k",
        "PBR": 72
    },
    {
        "UID": 73,
        "OR": 108,
        "SN": "Sandwich",
        "PE": 278,
        "QL": 398,
        "AC": 128,
        "PB": "£350k-£650k",
        "PBR": 73
    },
    {
        "UID": 74,
        "OR": 110,
        "SN": "Malton",
        "PE": 139,
        "QL": 858,
        "AC": 98,
        "PB": "£350k-£650k",
        "PBR": 74
    },
    {
        "UID": 75,
        "OR": 111,
        "SN": "Addingham",
        "PE": 74,
        "QL": 591,
        "AC": 234,
        "PB": "£350k-£650k",
        "PBR": 75
    },
    {
        "UID": 76,
        "OR": 116,
        "SN": "Charlbury",
        "PE": 111,
        "QL": 818,
        "AC": 143,
        "PB": "£350k-£650k",
        "PBR": 76
    },
    {
        "UID": 77,
        "OR": 118,
        "SN": "Swanage",
        "PE": 35,
        "QL": 625,
        "AC": 328,
        "PB": "£350k-£650k",
        "PBR": 77
    },
    {
        "UID": 78,
        "OR": 122,
        "SN": "Usk",
        "PE": 214,
        "QL": 1072,
        "AC": 50,
        "PB": "£350k-£650k",
        "PBR": 78
    },
    {
        "UID": 79,
        "OR": 128,
        "SN": "Macclesfield",
        "PE": 199,
        "QL": 429,
        "AC": 217,
        "PB": "£350k-£650k",
        "PBR": 79
    },
    {
        "UID": 80,
        "OR": 129,
        "SN": "Salisbury",
        "PE": 197,
        "QL": 955,
        "AC": 77,
        "PB": "£350k-£650k",
        "PBR": 80
    },
    {
        "UID": 81,
        "OR": 129,
        "SN": "Marple",
        "PE": 117,
        "QL": 191,
        "AC": 436,
        "PB": "£350k-£650k",
        "PBR": 80
    },
    {
        "UID": 82,
        "OR": 131,
        "SN": "Upton upon Severn",
        "PE": 202,
        "QL": 80,
        "AC": 446,
        "PB": "£350k-£650k",
        "PBR": 82
    },
    {
        "UID": 83,
        "OR": 132,
        "SN": "Ross-on-Wye",
        "PE": 232,
        "QL": 317,
        "AC": 260,
        "PB": "£350k-£650k",
        "PBR": 83
    },
    {
        "UID": 84,
        "OR": 134,
        "SN": "Combe Martin",
        "PE": 202,
        "QL": 227,
        "AC": 330,
        "PB": "£350k-£650k",
        "PBR": 84
    },
    {
        "UID": 85,
        "OR": 135,
        "SN": "Littlehampton",
        "PE": 103,
        "QL": 144,
        "AC": 530,
        "PB": "£350k-£650k",
        "PBR": 85
    },
    {
        "UID": 86,
        "OR": 136,
        "SN": "Seaton (East Devon)",
        "PE": 43,
        "QL": 997,
        "AC": 210,
        "PB": "£350k-£650k",
        "PBR": 86
    },
    {
        "UID": 87,
        "OR": 137,
        "SN": "Tetbury",
        "PE": 449,
        "QL": 1209,
        "AC": 3,
        "PB": "£350k-£650k",
        "PBR": 87
    },
    {
        "UID": 88,
        "OR": 139,
        "SN": "Wotton-under-Edge",
        "PE": 449,
        "QL": 787,
        "AC": 43,
        "PB": "£350k-£650k",
        "PBR": 88
    },
    {
        "UID": 89,
        "OR": 140,
        "SN": "Stratford-upon-Avon",
        "PE": 283,
        "QL": 351,
        "AC": 212,
        "PB": "£350k-£650k",
        "PBR": 89
    },
    {
        "UID": 90,
        "OR": 142,
        "SN": "Eastbourne",
        "PE": 149,
        "QL": 190,
        "AC": 422,
        "PB": "£350k-£650k",
        "PBR": 90
    },
    {
        "UID": 91,
        "OR": 144,
        "SN": "Folkestone",
        "PE": 142,
        "QL": 831,
        "AC": 160,
        "PB": "£350k-£650k",
        "PBR": 91
    },
    {
        "UID": 92,
        "OR": 145,
        "SN": "Bristol",
        "PE": 325,
        "QL": 143,
        "AC": 320,
        "PB": "£350k-£650k",
        "PBR": 92
    },
    {
        "UID": 93,
        "OR": 147,
        "SN": "Lymington",
        "PE": 158,
        "QL": 142,
        "AC": 475,
        "PB": "£350k-£650k",
        "PBR": 93
    },
    {
        "UID": 94,
        "OR": 149,
        "SN": "Ashford (Ashford)",
        "PE": 201,
        "QL": 249,
        "AC": 349,
        "PB": "£350k-£650k",
        "PBR": 94
    },
    {
        "UID": 95,
        "OR": 150,
        "SN": "Minster (Thanet)",
        "PE": 1137,
        "QL": 48,
        "AC": 55,
        "PB": "£350k-£650k",
        "PBR": 95
    },
    {
        "UID": 96,
        "OR": 151,
        "SN": "Maidstone",
        "PE": 128,
        "QL": 327,
        "AC": 389,
        "PB": "£350k-£650k",
        "PBR": 96
    },
    {
        "UID": 97,
        "OR": 154,
        "SN": "Needham Market",
        "PE": 589,
        "QL": 773,
        "AC": 37,
        "PB": "£350k-£650k",
        "PBR": 97
    },
    {
        "UID": 98,
        "OR": 156,
        "SN": "Pershore",
        "PE": 342,
        "QL": 112,
        "AC": 345,
        "PB": "£350k-£650k",
        "PBR": 98
    },
    {
        "UID": 99,
        "OR": 157,
        "SN": "Sturminster Newton",
        "PE": 255,
        "QL": 487,
        "AC": 202,
        "PB": "£350k-£650k",
        "PBR": 99
    },
    {
        "UID": 100,
        "OR": 158,
        "SN": "Manningtree",
        "PE": 51,
        "QL": 186,
        "AC": 657,
        "PB": "£350k-£650k",
        "PBR": 100
    },
    {
        "UID": 101,
        "OR": 161,
        "SN": "Hungerford",
        "PE": 25,
        "QL": 1015,
        "AC": 292,
        "PB": "£350k-£650k",
        "PBR": 101
    },
    {
        "UID": 102,
        "OR": 163,
        "SN": "Ambleside",
        "PE": 185,
        "QL": 699,
        "AC": 189,
        "PB": "£350k-£650k",
        "PBR": 102
    },
    {
        "UID": 103,
        "OR": 164,
        "SN": "Overton (Basingstoke and Deane)",
        "PE": 9,
        "QL": 413,
        "AC": 605,
        "PB": "£350k-£650k",
        "PBR": 103
    },
    {
        "UID": 104,
        "OR": 167,
        "SN": "Reading",
        "PE": 106,
        "QL": 748,
        "AC": 268,
        "PB": "£350k-£650k",
        "PBR": 104
    },
    {
        "UID": 105,
        "OR": 170,
        "SN": "Tangmere",
        "PE": 667,
        "QL": 609,
        "AC": 41,
        "PB": "£350k-£650k",
        "PBR": 105
    },
    {
        "UID": 106,
        "OR": 172,
        "SN": "Colchester",
        "PE": 359,
        "QL": 259,
        "AC": 264,
        "PB": "£350k-£650k",
        "PBR": 106
    },
    {
        "UID": 107,
        "OR": 174,
        "SN": "Ashburton",
        "PE": 449,
        "QL": 934,
        "AC": 45,
        "PB": "£350k-£650k",
        "PBR": 107
    },
    {
        "UID": 108,
        "OR": 175,
        "SN": "Sittingbourne",
        "PE": 562,
        "QL": 112,
        "AC": 281,
        "PB": "£350k-£650k",
        "PBR": 108
    },
    {
        "UID": 109,
        "OR": 178,
        "SN": "Beaminster",
        "PE": 449,
        "QL": 338,
        "AC": 170,
        "PB": "£350k-£650k",
        "PBR": 109
    },
    {
        "UID": 110,
        "OR": 179,
        "SN": "Margate",
        "PE": 747,
        "QL": 72,
        "AC": 219,
        "PB": "£350k-£650k",
        "PBR": 110
    },
    {
        "UID": 111,
        "OR": 179,
        "SN": "Ivybridge",
        "PE": 53,
        "QL": 577,
        "AC": 437,
        "PB": "£350k-£650k",
        "PBR": 110
    },
    {
        "UID": 112,
        "OR": 183,
        "SN": "Sturry",
        "PE": 357,
        "QL": 76,
        "AC": 427,
        "PB": "£350k-£650k",
        "PBR": 112
    },
    {
        "UID": 113,
        "OR": 187,
        "SN": "Exeter",
        "PE": 441,
        "QL": 305,
        "AC": 207,
        "PB": "£350k-£650k",
        "PBR": 113
    },
    {
        "UID": 114,
        "OR": 188,
        "SN": "Congresbury",
        "PE": 151,
        "QL": 150,
        "AC": 584,
        "PB": "£350k-£650k",
        "PBR": 114
    },
    {
        "UID": 115,
        "OR": 190,
        "SN": "Whalley",
        "PE": 221,
        "QL": 1019,
        "AC": 114,
        "PB": "£350k-£650k",
        "PBR": 115
    },
    {
        "UID": 116,
        "OR": 193,
        "SN": "Ringmer",
        "PE": 449,
        "QL": 403,
        "AC": 171,
        "PB": "£350k-£650k",
        "PBR": 116
    },
    {
        "UID": 117,
        "OR": 196,
        "SN": "Chester",
        "PE": 565,
        "QL": 287,
        "AC": 212,
        "PB": "£350k-£650k",
        "PBR": 117
    },
    {
        "UID": 118,
        "OR": 197,
        "SN": "Newton Abbot",
        "PE": 572,
        "QL": 239,
        "AC": 238,
        "PB": "£350k-£650k",
        "PBR": 118
    },
    {
        "UID": 119,
        "OR": 200,
        "SN": "Ditton",
        "PE": 314,
        "QL": 531,
        "AC": 242,
        "PB": "£350k-£650k",
        "PBR": 119
    },
    {
        "UID": 120,
        "OR": 201,
        "SN": "York",
        "PE": 548,
        "QL": 790,
        "AC": 86,
        "PB": "£350k-£650k",
        "PBR": 120
    },
    {
        "UID": 121,
        "OR": 202,
        "SN": "Somerton (South Somerset)",
        "PE": 1034,
        "QL": 185,
        "AC": 74,
        "PB": "£350k-£650k",
        "PBR": 121
    },
    {
        "UID": 122,
        "OR": 204,
        "SN": "Shefford",
        "PE": 309,
        "QL": 456,
        "AC": 286,
        "PB": "£350k-£650k",
        "PBR": 122
    },
    {
        "UID": 123,
        "OR": 207,
        "SN": "Christchurch",
        "PE": 64,
        "QL": 400,
        "AC": 617,
        "PB": "£350k-£650k",
        "PBR": 123
    },
    {
        "UID": 124,
        "OR": 208,
        "SN": "Gloucester",
        "PE": 177,
        "QL": 993,
        "AC": 196,
        "PB": "£350k-£650k",
        "PBR": 124
    },
    {
        "UID": 125,
        "OR": 209,
        "SN": "Weedon Bec",
        "PE": 577,
        "QL": 443,
        "AC": 157,
        "PB": "£350k-£650k",
        "PBR": 125
    },
    {
        "UID": 126,
        "OR": 209,
        "SN": "Yelverton",
        "PE": 24,
        "QL": 1086,
        "AC": 369,
        "PB": "£350k-£650k",
        "PBR": 125
    },
    {
        "UID": 127,
        "OR": 212,
        "SN": "Petworth",
        "PE": 449,
        "QL": 865,
        "AC": 89,
        "PB": "£350k-£650k",
        "PBR": 127
    },
    {
        "UID": 128,
        "OR": 213,
        "SN": "Much Wenlock",
        "PE": 691,
        "QL": 707,
        "AC": 60,
        "PB": "£350k-£650k",
        "PBR": 128
    },
    {
        "UID": 129,
        "OR": 214,
        "SN": "Newent",
        "PE": 966,
        "QL": 562,
        "AC": 28,
        "PB": "£350k-£650k",
        "PBR": 129
    },
    {
        "UID": 130,
        "OR": 217,
        "SN": "Lingfield",
        "PE": 762,
        "QL": 100,
        "AC": 264,
        "PB": "£350k-£650k",
        "PBR": 130
    },
    {
        "UID": 131,
        "OR": 218,
        "SN": "Hythe",
        "PE": 3,
        "QL": 1189,
        "AC": 363,
        "PB": "£350k-£650k",
        "PBR": 131
    },
    {
        "UID": 132,
        "OR": 218,
        "SN": "Diss",
        "PE": 702,
        "QL": 325,
        "AC": 147,
        "PB": "£350k-£650k",
        "PBR": 131
    },
    {
        "UID": 133,
        "OR": 220,
        "SN": "Budleigh Salterton",
        "PE": 48,
        "QL": 738,
        "AC": 500,
        "PB": "£350k-£650k",
        "PBR": 133
    },
    {
        "UID": 134,
        "OR": 221,
        "SN": "Kendal",
        "PE": 89,
        "QL": 851,
        "AC": 386,
        "PB": "£350k-£650k",
        "PBR": 134
    },
    {
        "UID": 135,
        "OR": 222,
        "SN": "Hadlow",
        "PE": 769,
        "QL": 775,
        "AC": 52,
        "PB": "£350k-£650k",
        "PBR": 135
    },
    {
        "UID": 136,
        "OR": 225,
        "SN": "Wickham",
        "PE": 449,
        "QL": 509,
        "AC": 202,
        "PB": "£350k-£650k",
        "PBR": 136
    },
    {
        "UID": 137,
        "OR": 227,
        "SN": "Ramsgate",
        "PE": 885,
        "QL": 125,
        "AC": 204,
        "PB": "£350k-£650k",
        "PBR": 137
    },
    {
        "UID": 138,
        "OR": 231,
        "SN": "Fakenham",
        "PE": 579,
        "QL": 935,
        "AC": 75,
        "PB": "£350k-£650k",
        "PBR": 138
    },
    {
        "UID": 139,
        "OR": 232,
        "SN": "Upper Beeding",
        "PE": 33,
        "QL": 759,
        "AC": 576,
        "PB": "£350k-£650k",
        "PBR": 139
    },
    {
        "UID": 140,
        "OR": 233,
        "SN": "Bollington",
        "PE": 85,
        "QL": 1203,
        "AC": 248,
        "PB": "£350k-£650k",
        "PBR": 140
    },
    {
        "UID": 141,
        "OR": 234,
        "SN": "Cheltenham",
        "PE": 449,
        "QL": 1100,
        "AC": 64,
        "PB": "£350k-£650k",
        "PBR": 141
    },
    {
        "UID": 142,
        "OR": 235,
        "SN": "Lechlade-on-Thames",
        "PE": 122,
        "QL": 762,
        "AC": 405,
        "PB": "£350k-£650k",
        "PBR": 142
    },
    {
        "UID": 143,
        "OR": 241,
        "SN": "Sandown",
        "PE": 170,
        "QL": 116,
        "AC": 758,
        "PB": "£350k-£650k",
        "PBR": 143
    },
    {
        "UID": 144,
        "OR": 242,
        "SN": "Gillingham",
        "PE": 206,
        "QL": 200,
        "AC": 631,
        "PB": "£350k-£650k",
        "PBR": 144
    },
    {
        "UID": 145,
        "OR": 245,
        "SN": "Cheddar",
        "PE": 449,
        "QL": 199,
        "AC": 409,
        "PB": "£350k-£650k",
        "PBR": 145
    },
    {
        "UID": 146,
        "OR": 249,
        "SN": "East Peckham",
        "PE": 389,
        "QL": 395,
        "AC": 342,
        "PB": "£350k-£650k",
        "PBR": 146
    },
    {
        "UID": 147,
        "OR": 253,
        "SN": "Warminster",
        "PE": 360,
        "QL": 745,
        "AC": 236,
        "PB": "£350k-£650k",
        "PBR": 147
    },
    {
        "UID": 148,
        "OR": 254,
        "SN": "Chatham",
        "PE": 237,
        "QL": 187,
        "AC": 647,
        "PB": "£350k-£650k",
        "PBR": 148
    },
    {
        "UID": 149,
        "OR": 257,
        "SN": "Milborne Port",
        "PE": 1057,
        "QL": 948,
        "AC": 11,
        "PB": "£350k-£650k",
        "PBR": 149
    },
    {
        "UID": 150,
        "OR": 259,
        "SN": "Chepstow",
        "PE": 91,
        "QL": 1029,
        "AC": 384,
        "PB": "£350k-£650k",
        "PBR": 150
    },
    {
        "UID": 151,
        "OR": 260,
        "SN": "South Petherton",
        "PE": 1011,
        "QL": 421,
        "AC": 76,
        "PB": "£350k-£650k",
        "PBR": 151
    },
    {
        "UID": 152,
        "OR": 262,
        "SN": "Delph",
        "PE": 781,
        "QL": 514,
        "AC": 125,
        "PB": "£350k-£650k",
        "PBR": 152
    },
    {
        "UID": 153,
        "OR": 266,
        "SN": "Corbridge",
        "PE": 433,
        "QL": 818,
        "AC": 189,
        "PB": "£350k-£650k",
        "PBR": 153
    },
    {
        "UID": 154,
        "OR": 266,
        "SN": "Minehead",
        "PE": 160,
        "QL": 522,
        "AC": 527,
        "PB": "£350k-£650k",
        "PBR": 153
    },
    {
        "UID": 155,
        "OR": 270,
        "SN": "Steyning",
        "PE": 449,
        "QL": 638,
        "AC": 230,
        "PB": "£350k-£650k",
        "PBR": 155
    },
    {
        "UID": 156,
        "OR": 272,
        "SN": "Newington",
        "PE": 768,
        "QL": 91,
        "AC": 376,
        "PB": "£350k-£650k",
        "PBR": 156
    },
    {
        "UID": 157,
        "OR": 273,
        "SN": "Forest Row",
        "PE": 449,
        "QL": 226,
        "AC": 437,
        "PB": "£350k-£650k",
        "PBR": 157
    },
    {
        "UID": 158,
        "OR": 274,
        "SN": "Headcorn",
        "PE": 699,
        "QL": 484,
        "AC": 172,
        "PB": "£350k-£650k",
        "PBR": 158
    },
    {
        "UID": 159,
        "OR": 276,
        "SN": "Southampton",
        "PE": 336,
        "QL": 244,
        "AC": 544,
        "PB": "£350k-£650k",
        "PBR": 159
    },
    {
        "UID": 160,
        "OR": 277,
        "SN": "Herne Bay",
        "PE": 557,
        "QL": 236,
        "AC": 418,
        "PB": "£350k-£650k",
        "PBR": 160
    },
    {
        "UID": 161,
        "OR": 279,
        "SN": "Royal Leamington Spa",
        "PE": 540,
        "QL": 863,
        "AC": 172,
        "PB": "£350k-£650k",
        "PBR": 161
    },
    {
        "UID": 162,
        "OR": 281,
        "SN": "Midhurst",
        "PE": 184,
        "QL": 1279,
        "AC": 179,
        "PB": "£350k-£650k",
        "PBR": 162
    },
    {
        "UID": 163,
        "OR": 285,
        "SN": "Bexhill",
        "PE": 257,
        "QL": 229,
        "AC": 671,
        "PB": "£350k-£650k",
        "PBR": 163
    },
    {
        "UID": 164,
        "OR": 286,
        "SN": "Newhaven",
        "PE": 37,
        "QL": 346,
        "AC": 901,
        "PB": "£350k-£650k",
        "PBR": 164
    },
    {
        "UID": 165,
        "OR": 297,
        "SN": "Kinver",
        "PE": 594,
        "QL": 210,
        "AC": 454,
        "PB": "£350k-£650k",
        "PBR": 165
    },
    {
        "UID": 166,
        "OR": 298,
        "SN": "Redhill",
        "PE": 244,
        "QL": 750,
        "AC": 415,
        "PB": "£350k-£650k",
        "PBR": 166
    },
    {
        "UID": 167,
        "OR": 299,
        "SN": "Knaresborough",
        "PE": 337,
        "QL": 863,
        "AC": 312,
        "PB": "£350k-£650k",
        "PBR": 167
    },
    {
        "UID": 168,
        "OR": 300,
        "SN": "Coleshill (North Warwickshire)",
        "PE": 693,
        "QL": 651,
        "AC": 168,
        "PB": "£350k-£650k",
        "PBR": 168
    },
    {
        "UID": 169,
        "OR": 302,
        "SN": "Cuckfield",
        "PE": 449,
        "QL": 779,
        "AC": 266,
        "PB": "£350k-£650k",
        "PBR": 169
    },
    {
        "UID": 170,
        "OR": 304,
        "SN": "Worthing",
        "PE": 135,
        "QL": 642,
        "AC": 608,
        "PB": "£350k-£650k",
        "PBR": 170
    },
    {
        "UID": 171,
        "OR": 305,
        "SN": "Uckfield",
        "PE": 209,
        "QL": 385,
        "AC": 667,
        "PB": "£350k-£650k",
        "PBR": 171
    },
    {
        "UID": 172,
        "OR": 306,
        "SN": "Burnham-on-Sea",
        "PE": 318,
        "QL": 55,
        "AC": 859,
        "PB": "£350k-£650k",
        "PBR": 172
    },
    {
        "UID": 173,
        "OR": 309,
        "SN": "Keynsham",
        "PE": 244,
        "QL": 327,
        "AC": 669,
        "PB": "£350k-£650k",
        "PBR": 173
    },
    {
        "UID": 174,
        "OR": 312,
        "SN": "Broadway",
        "PE": 449,
        "QL": 275,
        "AC": 513,
        "PB": "£350k-£650k",
        "PBR": 174
    },
    {
        "UID": 175,
        "OR": 313,
        "SN": "Boroughbridge",
        "PE": 319,
        "QL": 1268,
        "AC": 142,
        "PB": "£350k-£650k",
        "PBR": 175
    },
    {
        "UID": 176,
        "OR": 319,
        "SN": "Wirksworth",
        "PE": 779,
        "QL": 953,
        "AC": 88,
        "PB": "£350k-£650k",
        "PBR": 176
    },
    {
        "UID": 177,
        "OR": 321,
        "SN": "Bedford",
        "PE": 759,
        "QL": 299,
        "AC": 323,
        "PB": "£350k-£650k",
        "PBR": 177
    },
    {
        "UID": 178,
        "OR": 321,
        "SN": "Newlyn",
        "PE": 85,
        "QL": 1212,
        "AC": 399,
        "PB": "£350k-£650k",
        "PBR": 177
    },
    {
        "UID": 179,
        "OR": 325,
        "SN": "Banbury",
        "PE": 406,
        "QL": 241,
        "AC": 591,
        "PB": "£350k-£650k",
        "PBR": 179
    },
    {
        "UID": 180,
        "OR": 326,
        "SN": "Stockport",
        "PE": 566,
        "QL": 231,
        "AC": 519,
        "PB": "£350k-£650k",
        "PBR": 180
    },
    {
        "UID": 181,
        "OR": 330,
        "SN": "Wallingford",
        "PE": 94,
        "QL": 1345,
        "AC": 225,
        "PB": "£350k-£650k",
        "PBR": 181
    },
    {
        "UID": 182,
        "OR": 332,
        "SN": "Wantage",
        "PE": 449,
        "QL": 769,
        "AC": 306,
        "PB": "£350k-£650k",
        "PBR": 182
    },
    {
        "UID": 183,
        "OR": 334,
        "SN": "Williton",
        "PE": 746,
        "QL": 551,
        "AC": 230,
        "PB": "£350k-£650k",
        "PBR": 183
    },
    {
        "UID": 184,
        "OR": 335,
        "SN": "Crediton",
        "PE": 772,
        "QL": 884,
        "AC": 121,
        "PB": "£350k-£650k",
        "PBR": 184
    },
    {
        "UID": 185,
        "OR": 336,
        "SN": "Gillingham (North Dorset)",
        "PE": 176,
        "QL": 804,
        "AC": 543,
        "PB": "£350k-£650k",
        "PBR": 185
    },
    {
        "UID": 186,
        "OR": 338,
        "SN": "Church Stretton",
        "PE": 449,
        "QL": 1031,
        "AC": 205,
        "PB": "£350k-£650k",
        "PBR": 186
    },
    {
        "UID": 187,
        "OR": 339,
        "SN": "Petersfield",
        "PE": 234,
        "QL": 1243,
        "AC": 257,
        "PB": "£350k-£650k",
        "PBR": 187
    },
    {
        "UID": 188,
        "OR": 340,
        "SN": "Lydd",
        "PE": 1048,
        "QL": 448,
        "AC": 132,
        "PB": "£350k-£650k",
        "PBR": 188
    },
    {
        "UID": 189,
        "OR": 342,
        "SN": "Olney",
        "PE": 878,
        "QL": 1191,
        "AC": 39,
        "PB": "£350k-£650k",
        "PBR": 189
    },
    {
        "UID": 190,
        "OR": 345,
        "SN": "Henley-In-Arden",
        "PE": 1201,
        "QL": 139,
        "AC": 185,
        "PB": "£350k-£650k",
        "PBR": 190
    },
    {
        "UID": 191,
        "OR": 347,
        "SN": "Bournemouth",
        "PE": 432,
        "QL": 360,
        "AC": 526,
        "PB": "£350k-£650k",
        "PBR": 191
    },
    {
        "UID": 192,
        "OR": 349,
        "SN": "Bognor Regis",
        "PE": 294,
        "QL": 83,
        "AC": 875,
        "PB": "£350k-£650k",
        "PBR": 192
    },
    {
        "UID": 193,
        "OR": 354,
        "SN": "Faringdon",
        "PE": 979,
        "QL": 1099,
        "AC": 40,
        "PB": "£350k-£650k",
        "PBR": 193
    },
    {
        "UID": 194,
        "OR": 357,
        "SN": "Fremington",
        "PE": 291,
        "QL": 994,
        "AC": 362,
        "PB": "£350k-£650k",
        "PBR": 194
    },
    {
        "UID": 195,
        "OR": 358,
        "SN": "Teynham",
        "PE": 829,
        "QL": 60,
        "AC": 588,
        "PB": "£350k-£650k",
        "PBR": 195
    },
    {
        "UID": 196,
        "OR": 359,
        "SN": "Cheadle",
        "PE": 267,
        "QL": 238,
        "AC": 791,
        "PB": "£350k-£650k",
        "PBR": 196
    },
    {
        "UID": 197,
        "OR": 361,
        "SN": "Poole",
        "PE": 239,
        "QL": 516,
        "AC": 655,
        "PB": "£350k-£650k",
        "PBR": 197
    },
    {
        "UID": 198,
        "OR": 364,
        "SN": "Leighton Buzzard",
        "PE": 361,
        "QL": 502,
        "AC": 536,
        "PB": "£350k-£650k",
        "PBR": 198
    },
    {
        "UID": 199,
        "OR": 365,
        "SN": "High Wycombe",
        "PE": 256,
        "QL": 881,
        "AC": 461,
        "PB": "£350k-£650k",
        "PBR": 199
    },
    {
        "UID": 200,
        "OR": 366,
        "SN": "Honiton",
        "PE": 214,
        "QL": 427,
        "AC": 724,
        "PB": "£350k-£650k",
        "PBR": 200
    },
    {
        "UID": 201,
        "OR": 370,
        "SN": "Cowes",
        "PE": 31,
        "QL": 1318,
        "AC": 457,
        "PB": "£350k-£650k",
        "PBR": 201
    },
    {
        "UID": 202,
        "OR": 373,
        "SN": "Nettlestone",
        "PE": 162,
        "QL": 654,
        "AC": 676,
        "PB": "£350k-£650k",
        "PBR": 202
    },
    {
        "UID": 203,
        "OR": 376,
        "SN": "Swanscombe",
        "PE": 419,
        "QL": 502,
        "AC": 494,
        "PB": "£350k-£650k",
        "PBR": 203
    },
    {
        "UID": 204,
        "OR": 377,
        "SN": "Cricklade",
        "PE": 333,
        "QL": 903,
        "AC": 398,
        "PB": "£350k-£650k",
        "PBR": 204
    },
    {
        "UID": 205,
        "OR": 382,
        "SN": "Sutton Courtenay",
        "PE": 536,
        "QL": 1080,
        "AC": 234,
        "PB": "£350k-£650k",
        "PBR": 205
    },
    {
        "UID": 206,
        "OR": 382,
        "SN": "Chippenham (Wiltshire)",
        "PE": 299,
        "QL": 877,
        "AC": 433,
        "PB": "£350k-£650k",
        "PBR": 205
    },
    {
        "UID": 207,
        "OR": 385,
        "SN": "Glemsford",
        "PE": 1145,
        "QL": 247,
        "AC": 200,
        "PB": "£350k-£650k",
        "PBR": 207
    },
    {
        "UID": 208,
        "OR": 390,
        "SN": "Parbold",
        "PE": 592,
        "QL": 596,
        "AC": 366,
        "PB": "£350k-£650k",
        "PBR": 208
    },
    {
        "UID": 209,
        "OR": 392,
        "SN": "Stow-on-the-Wold",
        "PE": 449,
        "QL": 1102,
        "AC": 232,
        "PB": "£350k-£650k",
        "PBR": 209
    },
    {
        "UID": 210,
        "OR": 393,
        "SN": "Cardiff",
        "PE": 625,
        "QL": 892,
        "AC": 254,
        "PB": "£350k-£650k",
        "PBR": 210
    },
    {
        "UID": 211,
        "OR": 395,
        "SN": "Helston",
        "PE": 449,
        "QL": 973,
        "AC": 299,
        "PB": "£350k-£650k",
        "PBR": 211
    },
    {
        "UID": 212,
        "OR": 396,
        "SN": "Snodland",
        "PE": 287,
        "QL": 630,
        "AC": 566,
        "PB": "£350k-£650k",
        "PBR": 212
    },
    {
        "UID": 213,
        "OR": 398,
        "SN": "Hurstpierpoint",
        "PE": 449,
        "QL": 415,
        "AC": 549,
        "PB": "£350k-£650k",
        "PBR": 213
    },
    {
        "UID": 214,
        "OR": 399,
        "SN": "Milford on Sea",
        "PE": 96,
        "QL": 425,
        "AC": 916,
        "PB": "£350k-£650k",
        "PBR": 214
    },
    {
        "UID": 215,
        "OR": 401,
        "SN": "Alrewas",
        "PE": 308,
        "QL": 978,
        "AC": 411,
        "PB": "£350k-£650k",
        "PBR": 215
    },
    {
        "UID": 216,
        "OR": 404,
        "SN": "Stamford Bridge",
        "PE": 269,
        "QL": 1022,
        "AC": 417,
        "PB": "£350k-£650k",
        "PBR": 216
    },
    {
        "UID": 217,
        "OR": 406,
        "SN": "Odiham",
        "PE": 636,
        "QL": 596,
        "AC": 359,
        "PB": "£350k-£650k",
        "PBR": 217
    },
    {
        "UID": 218,
        "OR": 408,
        "SN": "Bury St Edmunds",
        "PE": 1099,
        "QL": 778,
        "AC": 83,
        "PB": "£350k-£650k",
        "PBR": 218
    },
    {
        "UID": 219,
        "OR": 408,
        "SN": "Stowmarket",
        "PE": 924,
        "QL": 127,
        "AC": 488,
        "PB": "£350k-£650k",
        "PBR": 218
    },
    {
        "UID": 220,
        "OR": 414,
        "SN": "Windermere",
        "PE": 449,
        "QL": 622,
        "AC": 461,
        "PB": "£350k-£650k",
        "PBR": 220
    },
    {
        "UID": 221,
        "OR": 415,
        "SN": "St Margaret's at Cliffe",
        "PE": 154,
        "QL": 1156,
        "AC": 481,
        "PB": "£350k-£650k",
        "PBR": 221
    },
    {
        "UID": 222,
        "OR": 416,
        "SN": "Studley",
        "PE": 799,
        "QL": 59,
        "AC": 690,
        "PB": "£350k-£650k",
        "PBR": 222
    },
    {
        "UID": 223,
        "OR": 418,
        "SN": "Saltdean",
        "PE": 141,
        "QL": 569,
        "AC": 815,
        "PB": "£350k-£650k",
        "PBR": 223
    },
    {
        "UID": 224,
        "OR": 418,
        "SN": "Downham Market",
        "PE": 863,
        "QL": 669,
        "AC": 223,
        "PB": "£350k-£650k",
        "PBR": 223
    },
    {
        "UID": 225,
        "OR": 421,
        "SN": "Aylsham",
        "PE": 622,
        "QL": 1216,
        "AC": 143,
        "PB": "£350k-£650k",
        "PBR": 225
    },
    {
        "UID": 226,
        "OR": 423,
        "SN": "Towcester",
        "PE": 959,
        "QL": 665,
        "AC": 183,
        "PB": "£350k-£650k",
        "PBR": 226
    },
    {
        "UID": 227,
        "OR": 424,
        "SN": "Street",
        "PE": 806,
        "QL": 564,
        "AC": 300,
        "PB": "£350k-£650k",
        "PBR": 227
    },
    {
        "UID": 228,
        "OR": 426,
        "SN": "Borough Green",
        "PE": 449,
        "QL": 871,
        "AC": 386,
        "PB": "£350k-£650k",
        "PBR": 228
    },
    {
        "UID": 229,
        "OR": 429,
        "SN": "Broadstairs",
        "PE": 824,
        "QL": 178,
        "AC": 528,
        "PB": "£350k-£650k",
        "PBR": 229
    },
    {
        "UID": 230,
        "OR": 430,
        "SN": "Wickham Market",
        "PE": 198,
        "QL": 1144,
        "AC": 457,
        "PB": "£350k-£650k",
        "PBR": 230
    },
    {
        "UID": 231,
        "OR": 436,
        "SN": "Stalbridge",
        "PE": 1028,
        "QL": 838,
        "AC": 117,
        "PB": "£350k-£650k",
        "PBR": 231
    },
    {
        "UID": 232,
        "OR": 445,
        "SN": "Tarporley",
        "PE": 1277,
        "QL": 480,
        "AC": 82,
        "PB": "£350k-£650k",
        "PBR": 232
    },
    {
        "UID": 233,
        "OR": 447,
        "SN": "Soham",
        "PE": 774,
        "QL": 736,
        "AC": 285,
        "PB": "£350k-£650k",
        "PBR": 233
    },
    {
        "UID": 234,
        "OR": 449,
        "SN": "Slough",
        "PE": 550,
        "QL": 356,
        "AC": 649,
        "PB": "£350k-£650k",
        "PBR": 234
    },
    {
        "UID": 235,
        "OR": 453,
        "SN": "Toddington",
        "PE": 812,
        "QL": 990,
        "AC": 185,
        "PB": "£350k-£650k",
        "PBR": 235
    },
    {
        "UID": 236,
        "OR": 457,
        "SN": "Whitstable",
        "PE": 447,
        "QL": 273,
        "AC": 746,
        "PB": "£350k-£650k",
        "PBR": 236
    },
    {
        "UID": 237,
        "OR": 466,
        "SN": "Witney",
        "PE": 187,
        "QL": 1294,
        "AC": 392,
        "PB": "£350k-£650k",
        "PBR": 237
    },
    {
        "UID": 238,
        "OR": 466,
        "SN": "Arlesey",
        "PE": 252,
        "QL": 1130,
        "AC": 471,
        "PB": "£350k-£650k",
        "PBR": 237
    },
    {
        "UID": 239,
        "OR": 468,
        "SN": "Calne",
        "PE": 683,
        "QL": 620,
        "AC": 395,
        "PB": "£350k-£650k",
        "PBR": 239
    },
    {
        "UID": 240,
        "OR": 473,
        "SN": "Lane End",
        "PE": 449,
        "QL": 1237,
        "AC": 271,
        "PB": "£350k-£650k",
        "PBR": 240
    },
    {
        "UID": 241,
        "OR": 474,
        "SN": "Saundersfoot",
        "PE": 449,
        "QL": 484,
        "AC": 643,
        "PB": "£350k-£650k",
        "PBR": 241
    },
    {
        "UID": 242,
        "OR": 476,
        "SN": "Mundesley",
        "PE": 27,
        "QL": 1211,
        "AC": 797,
        "PB": "£350k-£650k",
        "PBR": 242
    },
    {
        "UID": 243,
        "OR": 479,
        "SN": "South Cerney",
        "PE": 915,
        "QL": 1002,
        "AC": 161,
        "PB": "£350k-£650k",
        "PBR": 243
    },
    {
        "UID": 244,
        "OR": 480,
        "SN": "Bugbrooke",
        "PE": 1121,
        "QL": 340,
        "AC": 291,
        "PB": "£350k-£650k",
        "PBR": 244
    },
    {
        "UID": 245,
        "OR": 483,
        "SN": "Watlington (South Oxfordshire)",
        "PE": 449,
        "QL": 1013,
        "AC": 400,
        "PB": "£350k-£650k",
        "PBR": 245
    },
    {
        "UID": 246,
        "OR": 487,
        "SN": "Benson",
        "PE": 186,
        "QL": 1347,
        "AC": 318,
        "PB": "£350k-£650k",
        "PBR": 246
    },
    {
        "UID": 247,
        "OR": 489,
        "SN": "Northampton",
        "PE": 1097,
        "QL": 216,
        "AC": 385,
        "PB": "£350k-£650k",
        "PBR": 247
    },
    {
        "UID": 248,
        "OR": 491,
        "SN": "Chesham",
        "PE": 449,
        "QL": 939,
        "AC": 444,
        "PB": "£350k-£650k",
        "PBR": 248
    },
    {
        "UID": 249,
        "OR": 495,
        "SN": "Brantham",
        "PE": 157,
        "QL": 489,
        "AC": 948,
        "PB": "£350k-£650k",
        "PBR": 249
    },
    {
        "UID": 250,
        "OR": 496,
        "SN": "Willingham",
        "PE": 1345,
        "QL": 90,
        "AC": 279,
        "PB": "£350k-£650k",
        "PBR": 250
    },
    {
        "UID": 251,
        "OR": 498,
        "SN": "Felixstowe",
        "PE": 72,
        "QL": 1029,
        "AC": 836,
        "PB": "£350k-£650k",
        "PBR": 251
    },
    {
        "UID": 252,
        "OR": 499,
        "SN": "Kirkbymoorside",
        "PE": 707,
        "QL": 1198,
        "AC": 189,
        "PB": "£350k-£650k",
        "PBR": 252
    },
    {
        "UID": 253,
        "OR": 500,
        "SN": "High Lane",
        "PE": 71,
        "QL": 698,
        "AC": 990,
        "PB": "£350k-£650k",
        "PBR": 253
    },
    {
        "UID": 254,
        "OR": 504,
        "SN": "Clifton (Central Bedfordshire)",
        "PE": 714,
        "QL": 755,
        "AC": 391,
        "PB": "£350k-£650k",
        "PBR": 254
    },
    {
        "UID": 255,
        "OR": 506,
        "SN": "Crowborough",
        "PE": 449,
        "QL": 465,
        "AC": 702,
        "PB": "£350k-£650k",
        "PBR": 255
    },
    {
        "UID": 256,
        "OR": 508,
        "SN": "Horsham",
        "PE": 265,
        "QL": 1031,
        "AC": 596,
        "PB": "£350k-£650k",
        "PBR": 256
    },
    {
        "UID": 257,
        "OR": 509,
        "SN": "Cowbridge",
        "PE": 933,
        "QL": 1154,
        "AC": 127,
        "PB": "£350k-£650k",
        "PBR": 257
    },
    {
        "UID": 258,
        "OR": 516,
        "SN": "Portsmouth",
        "PE": 402,
        "QL": 1175,
        "AC": 372,
        "PB": "£350k-£650k",
        "PBR": 258
    },
    {
        "UID": 259,
        "OR": 517,
        "SN": "Mortimer",
        "PE": 909,
        "QL": 365,
        "AC": 470,
        "PB": "£350k-£650k",
        "PBR": 259
    },
    {
        "UID": 260,
        "OR": 518,
        "SN": "Dunstable",
        "PE": 449,
        "QL": 743,
        "AC": 569,
        "PB": "£350k-£650k",
        "PBR": 260
    },
    {
        "UID": 261,
        "OR": 519,
        "SN": "Gravesend",
        "PE": 310,
        "QL": 651,
        "AC": 727,
        "PB": "£350k-£650k",
        "PBR": 261
    },
    {
        "UID": 262,
        "OR": 521,
        "SN": "Wendover",
        "PE": 248,
        "QL": 1264,
        "AC": 451,
        "PB": "£350k-£650k",
        "PBR": 262
    },
    {
        "UID": 263,
        "OR": 521,
        "SN": "Wheatley",
        "PE": 849,
        "QL": 828,
        "AC": 309,
        "PB": "£350k-£650k",
        "PBR": 262
    },
    {
        "UID": 264,
        "OR": 526,
        "SN": "Heathfield",
        "PE": 449,
        "QL": 388,
        "AC": 768,
        "PB": "£350k-£650k",
        "PBR": 264
    },
    {
        "UID": 265,
        "OR": 527,
        "SN": "Westbury (Wiltshire)",
        "PE": 857,
        "QL": 356,
        "AC": 520,
        "PB": "£350k-£650k",
        "PBR": 265
    },
    {
        "UID": 266,
        "OR": 530,
        "SN": "Romsey",
        "PE": 349,
        "QL": 1134,
        "AC": 455,
        "PB": "£350k-£650k",
        "PBR": 266
    },
    {
        "UID": 267,
        "OR": 532,
        "SN": "Wilmslow",
        "PE": 580,
        "QL": 473,
        "AC": 673,
        "PB": "£350k-£650k",
        "PBR": 267
    },
    {
        "UID": 268,
        "OR": 534,
        "SN": "Gamlingay",
        "PE": 1232,
        "QL": 618,
        "AC": 138,
        "PB": "£350k-£650k",
        "PBR": 268
    },
    {
        "UID": 269,
        "OR": 537,
        "SN": "Abingdon",
        "PE": 276,
        "QL": 1083,
        "AC": 581,
        "PB": "£350k-£650k",
        "PBR": 269
    },
    {
        "UID": 270,
        "OR": 538,
        "SN": "Aylesbury",
        "PE": 533,
        "QL": 723,
        "AC": 603,
        "PB": "£350k-£650k",
        "PBR": 270
    },
    {
        "UID": 271,
        "OR": 541,
        "SN": "Amesbury",
        "PE": 564,
        "QL": 901,
        "AC": 492,
        "PB": "£350k-£650k",
        "PBR": 271
    },
    {
        "UID": 272,
        "OR": 543,
        "SN": "Iwade",
        "PE": 956,
        "QL": 6,
        "AC": 1049,
        "PB": "£350k-£650k",
        "PBR": 272
    },
    {
        "UID": 273,
        "OR": 549,
        "SN": "Southwell",
        "PE": 1316,
        "QL": 975,
        "AC": 51,
        "PB": "£350k-£650k",
        "PBR": 273
    },
    {
        "UID": 274,
        "OR": 551,
        "SN": "Thame",
        "PE": 611,
        "QL": 1263,
        "AC": 270,
        "PB": "£350k-£650k",
        "PBR": 274
    },
    {
        "UID": 275,
        "OR": 552,
        "SN": "Melbourne (South Derbyshire)",
        "PE": 1278,
        "QL": 660,
        "AC": 106,
        "PB": "£350k-£650k",
        "PBR": 275
    },
    {
        "UID": 276,
        "OR": 553,
        "SN": "Stonehouse",
        "PE": 136,
        "QL": 1325,
        "AC": 509,
        "PB": "£350k-£650k",
        "PBR": 276
    },
    {
        "UID": 277,
        "OR": 554,
        "SN": "Caterham",
        "PE": 449,
        "QL": 585,
        "AC": 696,
        "PB": "£350k-£650k",
        "PBR": 277
    },
    {
        "UID": 278,
        "OR": 556,
        "SN": "Billingshurst",
        "PE": 862,
        "QL": 799,
        "AC": 356,
        "PB": "£350k-£650k",
        "PBR": 278
    },
    {
        "UID": 279,
        "OR": 557,
        "SN": "Bloxham",
        "PE": 998,
        "QL": 683,
        "AC": 317,
        "PB": "£350k-£650k",
        "PBR": 279
    },
    {
        "UID": 280,
        "OR": 560,
        "SN": "Andover",
        "PE": 412,
        "QL": 558,
        "AC": 747,
        "PB": "£350k-£650k",
        "PBR": 280
    },
    {
        "UID": 281,
        "OR": 562,
        "SN": "Cottenham",
        "PE": 1347,
        "QL": 180,
        "AC": 277,
        "PB": "£350k-£650k",
        "PBR": 281
    },
    {
        "UID": 282,
        "OR": 563,
        "SN": "Penarth",
        "PE": 535,
        "QL": 1298,
        "AC": 294,
        "PB": "£350k-£650k",
        "PBR": 282
    },
    {
        "UID": 283,
        "OR": 565,
        "SN": "St Just",
        "PE": 449,
        "QL": 1017,
        "AC": 511,
        "PB": "£350k-£650k",
        "PBR": 283
    },
    {
        "UID": 284,
        "OR": 569,
        "SN": "Hamble-le-Rice",
        "PE": 132,
        "QL": 1051,
        "AC": 834,
        "PB": "£350k-£650k",
        "PBR": 284
    },
    {
        "UID": 285,
        "OR": 571,
        "SN": "Poynton",
        "PE": 317,
        "QL": 711,
        "AC": 795,
        "PB": "£350k-£650k",
        "PBR": 285
    },
    {
        "UID": 286,
        "OR": 574,
        "SN": "Pembury",
        "PE": 449,
        "QL": 507,
        "AC": 778,
        "PB": "£350k-£650k",
        "PBR": 286
    },
    {
        "UID": 287,
        "OR": 576,
        "SN": "Duffield",
        "PE": 349,
        "QL": 1267,
        "AC": 431,
        "PB": "£350k-£650k",
        "PBR": 287
    },
    {
        "UID": 288,
        "OR": 578,
        "SN": "Seaford",
        "PE": 133,
        "QL": 895,
        "AC": 926,
        "PB": "£350k-£650k",
        "PBR": 288
    },
    {
        "UID": 289,
        "OR": 580,
        "SN": "Maldon",
        "PE": 716,
        "QL": 773,
        "AC": 490,
        "PB": "£350k-£650k",
        "PBR": 289
    },
    {
        "UID": 290,
        "OR": 585,
        "SN": "Flexbury",
        "PE": 430,
        "QL": 421,
        "AC": 853,
        "PB": "£350k-£650k",
        "PBR": 290
    },
    {
        "UID": 291,
        "OR": 587,
        "SN": "Newick",
        "PE": 727,
        "QL": 535,
        "AC": 601,
        "PB": "£350k-£650k",
        "PBR": 291
    },
    {
        "UID": 292,
        "OR": 588,
        "SN": "Shoreham-by-Sea",
        "PE": 45,
        "QL": 1313,
        "AC": 764,
        "PB": "£350k-£650k",
        "PBR": 292
    },
    {
        "UID": 293,
        "OR": 590,
        "SN": "Droitwich",
        "PE": 537,
        "QL": 448,
        "AC": 831,
        "PB": "£350k-£650k",
        "PBR": 293
    },
    {
        "UID": 294,
        "OR": 592,
        "SN": "Haywards Heath",
        "PE": 666,
        "QL": 731,
        "AC": 555,
        "PB": "£350k-£650k",
        "PBR": 294
    },
    {
        "UID": 295,
        "OR": 595,
        "SN": "Melksham",
        "PE": 552,
        "QL": 645,
        "AC": 713,
        "PB": "£350k-£650k",
        "PBR": 295
    },
    {
        "UID": 296,
        "OR": 597,
        "SN": "Hemel Hempstead",
        "PE": 207,
        "QL": 841,
        "AC": 878,
        "PB": "£350k-£650k",
        "PBR": 296
    },
    {
        "UID": 297,
        "OR": 600,
        "SN": "Staplehurst",
        "PE": 896,
        "QL": 438,
        "AC": 573,
        "PB": "£350k-£650k",
        "PBR": 297
    },
    {
        "UID": 298,
        "OR": 605,
        "SN": "Hemingford Grey",
        "PE": 978,
        "QL": 793,
        "AC": 353,
        "PB": "£350k-£650k",
        "PBR": 298
    },
    {
        "UID": 299,
        "OR": 607,
        "SN": "Harrogate",
        "PE": 801,
        "QL": 860,
        "AC": 429,
        "PB": "£350k-£650k",
        "PBR": 299
    },
    {
        "UID": 300,
        "OR": 612,
        "SN": "Milton Keynes",
        "PE": 607,
        "QL": 520,
        "AC": 734,
        "PB": "£350k-£650k",
        "PBR": 300
    },
    {
        "UID": 301,
        "OR": 616,
        "SN": "Merley",
        "PE": 355,
        "QL": 822,
        "AC": 780,
        "PB": "£350k-£650k",
        "PBR": 301
    },
    {
        "UID": 302,
        "OR": 617,
        "SN": "Horley",
        "PE": 559,
        "QL": 899,
        "AC": 630,
        "PB": "£350k-£650k",
        "PBR": 302
    },
    {
        "UID": 303,
        "OR": 622,
        "SN": "Knutsford",
        "PE": 945,
        "QL": 834,
        "AC": 388,
        "PB": "£350k-£650k",
        "PBR": 303
    },
    {
        "UID": 304,
        "OR": 623,
        "SN": "North Walsham",
        "PE": 827,
        "QL": 1290,
        "AC": 197,
        "PB": "£350k-£650k",
        "PBR": 304
    },
    {
        "UID": 305,
        "OR": 624,
        "SN": "Minster (Swale)",
        "PE": 739,
        "QL": 119,
        "AC": 933,
        "PB": "£350k-£650k",
        "PBR": 305
    },
    {
        "UID": 306,
        "OR": 625,
        "SN": "Colden Common",
        "PE": 193,
        "QL": 1288,
        "AC": 642,
        "PB": "£350k-£650k",
        "PBR": 306
    },
    {
        "UID": 307,
        "OR": 626,
        "SN": "Over",
        "PE": 1339,
        "QL": 566,
        "AC": 158,
        "PB": "£350k-£650k",
        "PBR": 307
    },
    {
        "UID": 308,
        "OR": 628,
        "SN": "Bassingbourn",
        "PE": 1226,
        "QL": 176,
        "AC": 485,
        "PB": "£350k-£650k",
        "PBR": 308
    },
    {
        "UID": 309,
        "OR": 630,
        "SN": "Neston",
        "PE": 793,
        "QL": 290,
        "AC": 775,
        "PB": "£350k-£650k",
        "PBR": 309
    },
    {
        "UID": 310,
        "OR": 632,
        "SN": "Boston Spa",
        "PE": 561,
        "QL": 671,
        "AC": 736,
        "PB": "£350k-£650k",
        "PBR": 310
    },
    {
        "UID": 311,
        "OR": 633,
        "SN": "Aldershot",
        "PE": 388,
        "QL": 981,
        "AC": 686,
        "PB": "£350k-£650k",
        "PBR": 311
    },
    {
        "UID": 312,
        "OR": 634,
        "SN": "Royston",
        "PE": 1225,
        "QL": 678,
        "AC": 226,
        "PB": "£350k-£650k",
        "PBR": 312
    },
    {
        "UID": 313,
        "OR": 636,
        "SN": "Brundall",
        "PE": 116,
        "QL": 809,
        "AC": 1067,
        "PB": "£350k-£650k",
        "PBR": 313
    },
    {
        "UID": 314,
        "OR": 639,
        "SN": "Queniborough",
        "PE": 1369,
        "QL": 423,
        "AC": 218,
        "PB": "£350k-£650k",
        "PBR": 314
    },
    {
        "UID": 315,
        "OR": 642,
        "SN": "Burton Latimer",
        "PE": 1109,
        "QL": 802,
        "AC": 297,
        "PB": "£350k-£650k",
        "PBR": 315
    },
    {
        "UID": 316,
        "OR": 644,
        "SN": "Kingsclere",
        "PE": 449,
        "QL": 1015,
        "AC": 629,
        "PB": "£350k-£650k",
        "PBR": 316
    },
    {
        "UID": 317,
        "OR": 647,
        "SN": "Grays",
        "PE": 595,
        "QL": 700,
        "AC": 714,
        "PB": "£350k-£650k",
        "PBR": 317
    },
    {
        "UID": 318,
        "OR": 647,
        "SN": "Burwell",
        "PE": 964,
        "QL": 704,
        "AC": 441,
        "PB": "£350k-£650k",
        "PBR": 317
    },
    {
        "UID": 319,
        "OR": 650,
        "SN": "Claydon",
        "PE": 555,
        "QL": 628,
        "AC": 789,
        "PB": "£350k-£650k",
        "PBR": 319
    },
    {
        "UID": 320,
        "OR": 652,
        "SN": "Selsey",
        "PE": 272,
        "QL": 348,
        "AC": 1115,
        "PB": "£350k-£650k",
        "PBR": 320
    },
    {
        "UID": 321,
        "OR": 654,
        "SN": "Basingstoke",
        "PE": 545,
        "QL": 632,
        "AC": 806,
        "PB": "£350k-£650k",
        "PBR": 321
    },
    {
        "UID": 322,
        "OR": 656,
        "SN": "Gosport",
        "PE": 335,
        "QL": 1101,
        "AC": 692,
        "PB": "£350k-£650k",
        "PBR": 322
    },
    {
        "UID": 323,
        "OR": 659,
        "SN": "Etwall",
        "PE": 1193,
        "QL": 762,
        "AC": 263,
        "PB": "£350k-£650k",
        "PBR": 323
    },
    {
        "UID": 324,
        "OR": 661,
        "SN": "Hoddesdon",
        "PE": 640,
        "QL": 631,
        "AC": 709,
        "PB": "£350k-£650k",
        "PBR": 324
    },
    {
        "UID": 325,
        "OR": 666,
        "SN": "Adderbury",
        "PE": 1075,
        "QL": 862,
        "AC": 326,
        "PB": "£350k-£650k",
        "PBR": 325
    },
    {
        "UID": 326,
        "OR": 667,
        "SN": "Swanley",
        "PE": 449,
        "QL": 440,
        "AC": 933,
        "PB": "£350k-£650k",
        "PBR": 326
    },
    {
        "UID": 327,
        "OR": 668,
        "SN": "Clevedon",
        "PE": 383,
        "QL": 1236,
        "AC": 559,
        "PB": "£350k-£650k",
        "PBR": 327
    },
    {
        "UID": 328,
        "OR": 672,
        "SN": "Waltham Chase",
        "PE": 449,
        "QL": 770,
        "AC": 797,
        "PB": "£350k-£650k",
        "PBR": 328
    },
    {
        "UID": 329,
        "OR": 673,
        "SN": "Hoo St Werburgh",
        "PE": 970,
        "QL": 224,
        "AC": 753,
        "PB": "£350k-£650k",
        "PBR": 329
    },
    {
        "UID": 330,
        "OR": 674,
        "SN": "Polegate",
        "PE": 449,
        "QL": 268,
        "AC": 1060,
        "PB": "£350k-£650k",
        "PBR": 330
    },
    {
        "UID": 331,
        "OR": 674,
        "SN": "Potton",
        "PE": 1198,
        "QL": 207,
        "AC": 553,
        "PB": "£350k-£650k",
        "PBR": 330
    },
    {
        "UID": 332,
        "OR": 677,
        "SN": "Willington (South Derbyshire)",
        "PE": 551,
        "QL": 1241,
        "AC": 501,
        "PB": "£350k-£650k",
        "PBR": 332
    },
    {
        "UID": 333,
        "OR": 678,
        "SN": "Northfleet",
        "PE": 615,
        "QL": 738,
        "AC": 722,
        "PB": "£350k-£650k",
        "PBR": 333
    },
    {
        "UID": 334,
        "OR": 679,
        "SN": "Crawley",
        "PE": 449,
        "QL": 377,
        "AC": 1000,
        "PB": "£350k-£650k",
        "PBR": 334
    },
    {
        "UID": 335,
        "OR": 680,
        "SN": "Dunchurch",
        "PE": 1236,
        "QL": 233,
        "AC": 504,
        "PB": "£350k-£650k",
        "PBR": 335
    },
    {
        "UID": 336,
        "OR": 681,
        "SN": "Plymstock",
        "PE": 127,
        "QL": 1003,
        "AC": 1020,
        "PB": "£350k-£650k",
        "PBR": 336
    },
    {
        "UID": 337,
        "OR": 682,
        "SN": "Longstanton",
        "PE": 1337,
        "QL": 93,
        "AC": 523,
        "PB": "£350k-£650k",
        "PBR": 337
    },
    {
        "UID": 338,
        "OR": 687,
        "SN": "Chinnor",
        "PE": 675,
        "QL": 1285,
        "AC": 335,
        "PB": "£350k-£650k",
        "PBR": 338
    },
    {
        "UID": 339,
        "OR": 689,
        "SN": "Higham Ferrers",
        "PE": 1134,
        "QL": 905,
        "AC": 292,
        "PB": "£350k-£650k",
        "PBR": 339
    },
    {
        "UID": 340,
        "OR": 690,
        "SN": "North Petherton",
        "PE": 775,
        "QL": 706,
        "AC": 625,
        "PB": "£350k-£650k",
        "PBR": 340
    },
    {
        "UID": 341,
        "OR": 691,
        "SN": "Hale (Trafford)",
        "PE": 813,
        "QL": 432,
        "AC": 743,
        "PB": "£350k-£650k",
        "PBR": 341
    },
    {
        "UID": 342,
        "OR": 692,
        "SN": "Bexley",
        "PE": 442,
        "QL": 790,
        "AC": 816,
        "PB": "£350k-£650k",
        "PBR": 342
    },
    {
        "UID": 343,
        "OR": 696,
        "SN": "Sawston",
        "PE": 1177,
        "QL": 1122,
        "AC": 155,
        "PB": "£350k-£650k",
        "PBR": 343
    },
    {
        "UID": 344,
        "OR": 696,
        "SN": "Holmes Chapel",
        "PE": 598,
        "QL": 1045,
        "AC": 610,
        "PB": "£350k-£650k",
        "PBR": 343
    },
    {
        "UID": 345,
        "OR": 698,
        "SN": "Crawley Down",
        "PE": 712,
        "QL": 785,
        "AC": 645,
        "PB": "£350k-£650k",
        "PBR": 345
    },
    {
        "UID": 346,
        "OR": 699,
        "SN": "Strensall",
        "PE": 334,
        "QL": 330,
        "AC": 1123,
        "PB": "£350k-£650k",
        "PBR": 346
    },
    {
        "UID": 347,
        "OR": 700,
        "SN": "Godmanchester",
        "PE": 835,
        "QL": 1334,
        "AC": 188,
        "PB": "£350k-£650k",
        "PBR": 347
    },
    {
        "UID": 348,
        "OR": 701,
        "SN": "Havant",
        "PE": 260,
        "QL": 643,
        "AC": 1037,
        "PB": "£350k-£650k",
        "PBR": 348
    },
    {
        "UID": 349,
        "OR": 702,
        "SN": "Long Hanborough",
        "PE": 449,
        "QL": 1082,
        "AC": 674,
        "PB": "£350k-£650k",
        "PBR": 349
    },
    {
        "UID": 350,
        "OR": 704,
        "SN": "Fordham (East Cambridgeshire)",
        "PE": 1343,
        "QL": 933,
        "AC": 129,
        "PB": "£350k-£650k",
        "PBR": 350
    },
    {
        "UID": 351,
        "OR": 706,
        "SN": "Thornbury",
        "PE": 1031,
        "QL": 1053,
        "AC": 319,
        "PB": "£350k-£650k",
        "PBR": 351
    },
    {
        "UID": 352,
        "OR": 710,
        "SN": "Quorn (Quorndon)",
        "PE": 897,
        "QL": 1182,
        "AC": 337,
        "PB": "£350k-£650k",
        "PBR": 352
    },
    {
        "UID": 353,
        "OR": 713,
        "SN": "Lichfield",
        "PE": 884,
        "QL": 1166,
        "AC": 354,
        "PB": "£350k-£650k",
        "PBR": 353
    },
    {
        "UID": 354,
        "OR": 713,
        "SN": "Yatton",
        "PE": 930,
        "QL": 406,
        "AC": 721,
        "PB": "£350k-£650k",
        "PBR": 353
    },
    {
        "UID": 355,
        "OR": 717,
        "SN": "Kidlington",
        "PE": 171,
        "QL": 1270,
        "AC": 819,
        "PB": "£350k-£650k",
        "PBR": 355
    },
    {
        "UID": 356,
        "OR": 724,
        "SN": "Biggleswade",
        "PE": 569,
        "QL": 718,
        "AC": 828,
        "PB": "£350k-£650k",
        "PBR": 356
    },
    {
        "UID": 357,
        "OR": 725,
        "SN": "St Neots",
        "PE": 840,
        "QL": 835,
        "AC": 588,
        "PB": "£350k-£650k",
        "PBR": 357
    },
    {
        "UID": 358,
        "OR": 728,
        "SN": "Sheringham",
        "PE": 69,
        "QL": 1251,
        "AC": 1005,
        "PB": "£350k-£650k",
        "PBR": 358
    },
    {
        "UID": 359,
        "OR": 730,
        "SN": "Altrincham",
        "PE": 657,
        "QL": 723,
        "AC": 747,
        "PB": "£350k-£650k",
        "PBR": 359
    },
    {
        "UID": 360,
        "OR": 733,
        "SN": "Castle Cary",
        "PE": 1019,
        "QL": 1060,
        "AC": 347,
        "PB": "£350k-£650k",
        "PBR": 360
    },
    {
        "UID": 361,
        "OR": 734,
        "SN": "Guiseley",
        "PE": 810,
        "QL": 903,
        "AC": 583,
        "PB": "£350k-£650k",
        "PBR": 361
    },
    {
        "UID": 362,
        "OR": 735,
        "SN": "Holt (North Norfolk)",
        "PE": 449,
        "QL": 939,
        "AC": 801,
        "PB": "£350k-£650k",
        "PBR": 362
    },
    {
        "UID": 363,
        "OR": 736,
        "SN": "Eccleshall",
        "PE": 1142,
        "QL": 766,
        "AC": 390,
        "PB": "£350k-£650k",
        "PBR": 363
    },
    {
        "UID": 364,
        "OR": 737,
        "SN": "East Wittering",
        "PE": 165,
        "QL": 480,
        "AC": 1203,
        "PB": "£350k-£650k",
        "PBR": 364
    },
    {
        "UID": 365,
        "OR": 741,
        "SN": "Burgess Hill",
        "PE": 449,
        "QL": 822,
        "AC": 856,
        "PB": "£350k-£650k",
        "PBR": 365
    },
    {
        "UID": 366,
        "OR": 744,
        "SN": "Waltham Cross",
        "PE": 662,
        "QL": 799,
        "AC": 732,
        "PB": "£350k-£650k",
        "PBR": 366
    },
    {
        "UID": 367,
        "OR": 744,
        "SN": "Bromsgrove",
        "PE": 1098,
        "QL": 383,
        "AC": 622,
        "PB": "£350k-£650k",
        "PBR": 366
    },
    {
        "UID": 368,
        "OR": 748,
        "SN": "Thrapston",
        "PE": 923,
        "QL": 1343,
        "AC": 189,
        "PB": "£350k-£650k",
        "PBR": 368
    },
    {
        "UID": 369,
        "OR": 752,
        "SN": "South Ockendon",
        "PE": 849,
        "QL": 247,
        "AC": 919,
        "PB": "£350k-£650k",
        "PBR": 369
    },
    {
        "UID": 370,
        "OR": 753,
        "SN": "Luton",
        "PE": 449,
        "QL": 602,
        "AC": 961,
        "PB": "£350k-£650k",
        "PBR": 370
    },
    {
        "UID": 371,
        "OR": 756,
        "SN": "Poringland",
        "PE": 848,
        "QL": 584,
        "AC": 718,
        "PB": "£350k-£650k",
        "PBR": 371
    },
    {
        "UID": 372,
        "OR": 758,
        "SN": "Coven",
        "PE": 939,
        "QL": 336,
        "AC": 816,
        "PB": "£350k-£650k",
        "PBR": 372
    },
    {
        "UID": 373,
        "OR": 759,
        "SN": "Histon",
        "PE": 1333,
        "QL": 309,
        "AC": 425,
        "PB": "£350k-£650k",
        "PBR": 373
    },
    {
        "UID": 374,
        "OR": 762,
        "SN": "Bulford Camp",
        "PE": 382,
        "QL": 806,
        "AC": 936,
        "PB": "£350k-£650k",
        "PBR": 374
    },
    {
        "UID": 375,
        "OR": 763,
        "SN": "Farnborough",
        "PE": 400,
        "QL": 1017,
        "AC": 823,
        "PB": "£350k-£650k",
        "PBR": 375
    },
    {
        "UID": 376,
        "OR": 764,
        "SN": "Baldock",
        "PE": 1017,
        "QL": 1025,
        "AC": 408,
        "PB": "£350k-£650k",
        "PBR": 376
    },
    {
        "UID": 377,
        "OR": 765,
        "SN": "Netley",
        "PE": 284,
        "QL": 301,
        "AC": 1209,
        "PB": "£350k-£650k",
        "PBR": 377
    },
    {
        "UID": 378,
        "OR": 766,
        "SN": "Cholsey",
        "PE": 449,
        "QL": 1358,
        "AC": 381,
        "PB": "£350k-£650k",
        "PBR": 378
    },
    {
        "UID": 379,
        "OR": 766,
        "SN": "Market Harborough",
        "PE": 1355,
        "QL": 872,
        "AC": 193,
        "PB": "£350k-£650k",
        "PBR": 378
    },
    {
        "UID": 380,
        "OR": 775,
        "SN": "Newmarket",
        "PE": 1311,
        "QL": 419,
        "AC": 404,
        "PB": "£350k-£650k",
        "PBR": 380
    },
    {
        "UID": 381,
        "OR": 777,
        "SN": "Acle",
        "PE": 449,
        "QL": 1284,
        "AC": 599,
        "PB": "£350k-£650k",
        "PBR": 381
    },
    {
        "UID": 382,
        "OR": 778,
        "SN": "Yarnton",
        "PE": 872,
        "QL": 1259,
        "AC": 367,
        "PB": "£350k-£650k",
        "PBR": 382
    },
    {
        "UID": 383,
        "OR": 783,
        "SN": "Bramley",
        "PE": 931,
        "QL": 424,
        "AC": 803,
        "PB": "£350k-£650k",
        "PBR": 383
    },
    {
        "UID": 384,
        "OR": 786,
        "SN": "Ely",
        "PE": 1088,
        "QL": 931,
        "AC": 414,
        "PB": "£350k-£650k",
        "PBR": 384
    },
    {
        "UID": 385,
        "OR": 787,
        "SN": "Trimley St Mary",
        "PE": 449,
        "QL": 913,
        "AC": 869,
        "PB": "£350k-£650k",
        "PBR": 385
    },
    {
        "UID": 386,
        "OR": 788,
        "SN": "South Hayling",
        "PE": 38,
        "QL": 1022,
        "AC": 1215,
        "PB": "£350k-£650k",
        "PBR": 386
    },
    {
        "UID": 387,
        "OR": 791,
        "SN": "Stratton",
        "PE": 449,
        "QL": 1241,
        "AC": 677,
        "PB": "£350k-£650k",
        "PBR": 387
    },
    {
        "UID": 388,
        "OR": 792,
        "SN": "Chelmsford",
        "PE": 958,
        "QL": 670,
        "AC": 653,
        "PB": "£350k-£650k",
        "PBR": 388
    },
    {
        "UID": 389,
        "OR": 794,
        "SN": "Frampton Cotterell/Winterbourne",
        "PE": 367,
        "QL": 599,
        "AC": 1070,
        "PB": "£350k-£650k",
        "PBR": 389
    },
    {
        "UID": 390,
        "OR": 798,
        "SN": "Linton",
        "PE": 1310,
        "QL": 962,
        "AC": 221,
        "PB": "£350k-£650k",
        "PBR": 390
    },
    {
        "UID": 391,
        "OR": 799,
        "SN": "Easingwold",
        "PE": 767,
        "QL": 1161,
        "AC": 538,
        "PB": "£350k-£650k",
        "PBR": 391
    },
    {
        "UID": 392,
        "OR": 800,
        "SN": "Backwell",
        "PE": 974,
        "QL": 640,
        "AC": 667,
        "PB": "£350k-£650k",
        "PBR": 392
    },
    {
        "UID": 393,
        "OR": 802,
        "SN": "Wootton (Bedford)",
        "PE": 1133,
        "QL": 556,
        "AC": 567,
        "PB": "£350k-£650k",
        "PBR": 393
    },
    {
        "UID": 394,
        "OR": 803,
        "SN": "Pevensey Bay",
        "PE": 180,
        "QL": 409,
        "AC": 1255,
        "PB": "£350k-£650k",
        "PBR": 394
    },
    {
        "UID": 395,
        "OR": 805,
        "SN": "Great Dunmow",
        "PE": 1282,
        "QL": 1129,
        "AC": 164,
        "PB": "£350k-£650k",
        "PBR": 395
    },
    {
        "UID": 396,
        "OR": 808,
        "SN": "Yate",
        "PE": 796,
        "QL": 553,
        "AC": 842,
        "PB": "£350k-£650k",
        "PBR": 396
    },
    {
        "UID": 397,
        "OR": 810,
        "SN": "Fenstanton",
        "PE": 1324,
        "QL": 1292,
        "AC": 80,
        "PB": "£350k-£650k",
        "PBR": 397
    },
    {
        "UID": 398,
        "OR": 813,
        "SN": "Barton-le-Clay",
        "PE": 449,
        "QL": 809,
        "AC": 962,
        "PB": "£350k-£650k",
        "PBR": 398
    },
    {
        "UID": 399,
        "OR": 816,
        "SN": "Chipping Sodbury",
        "PE": 715,
        "QL": 1180,
        "AC": 575,
        "PB": "£350k-£650k",
        "PBR": 399
    },
    {
        "UID": 400,
        "OR": 818,
        "SN": "Waterbeach",
        "PE": 1352,
        "QL": 253,
        "AC": 539,
        "PB": "£350k-£650k",
        "PBR": 400
    },
    {
        "UID": 401,
        "OR": 819,
        "SN": "Earls Barton",
        "PE": 1312,
        "QL": 1027,
        "AC": 210,
        "PB": "£350k-£650k",
        "PBR": 401
    },
    {
        "UID": 402,
        "OR": 825,
        "SN": "Peacehaven",
        "PE": 155,
        "QL": 495,
        "AC": 1257,
        "PB": "£350k-£650k",
        "PBR": 402
    },
    {
        "UID": 403,
        "OR": 828,
        "SN": "Ampthill",
        "PE": 838,
        "QL": 1335,
        "AC": 314,
        "PB": "£350k-£650k",
        "PBR": 403
    },
    {
        "UID": 404,
        "OR": 830,
        "SN": "Capel St Mary",
        "PE": 710,
        "QL": 1300,
        "AC": 447,
        "PB": "£350k-£650k",
        "PBR": 404
    },
    {
        "UID": 405,
        "OR": 835,
        "SN": "Shortstown",
        "PE": 1156,
        "QL": 26,
        "AC": 1087,
        "PB": "£350k-£650k",
        "PBR": 405
    },
    {
        "UID": 406,
        "OR": 843,
        "SN": "Ashby-de-la-Zouch",
        "PE": 1265,
        "QL": 901,
        "AC": 334,
        "PB": "£350k-£650k",
        "PBR": 406
    },
    {
        "UID": 407,
        "OR": 844,
        "SN": "Kingsnorth (Ashford)",
        "PE": 917,
        "QL": 1065,
        "AC": 570,
        "PB": "£350k-£650k",
        "PBR": 407
    },
    {
        "UID": 408,
        "OR": 849,
        "SN": "Chalgrove",
        "PE": 859,
        "QL": 689,
        "AC": 809,
        "PB": "£350k-£650k",
        "PBR": 408
    },
    {
        "UID": 409,
        "OR": 855,
        "SN": "Portishead",
        "PE": 728,
        "QL": 1147,
        "AC": 662,
        "PB": "£350k-£650k",
        "PBR": 409
    },
    {
        "UID": 410,
        "OR": 859,
        "SN": "Wootton Bassett",
        "PE": 842,
        "QL": 975,
        "AC": 703,
        "PB": "£350k-£650k",
        "PBR": 410
    },
    {
        "UID": 411,
        "OR": 860,
        "SN": "Middleton Cheney",
        "PE": 1029,
        "QL": 1096,
        "AC": 479,
        "PB": "£350k-£650k",
        "PBR": 411
    },
    {
        "UID": 412,
        "OR": 861,
        "SN": "Woodley",
        "PE": 328,
        "QL": 1324,
        "AC": 732,
        "PB": "£350k-£650k",
        "PBR": 412
    },
    {
        "UID": 413,
        "OR": 869,
        "SN": "Yeadon",
        "PE": 397,
        "QL": 1093,
        "AC": 924,
        "PB": "£350k-£650k",
        "PBR": 413
    },
    {
        "UID": 414,
        "OR": 875,
        "SN": "Stoke Mandeville",
        "PE": 737,
        "QL": 1244,
        "AC": 615,
        "PB": "£350k-£650k",
        "PBR": 414
    },
    {
        "UID": 415,
        "OR": 878,
        "SN": "Melbourn",
        "PE": 1257,
        "QL": 388,
        "AC": 651,
        "PB": "£350k-£650k",
        "PBR": 415
    },
    {
        "UID": 416,
        "OR": 878,
        "SN": "Hawkinge",
        "PE": 449,
        "QL": 494,
        "AC": 1164,
        "PB": "£350k-£650k",
        "PBR": 415
    },
    {
        "UID": 417,
        "OR": 881,
        "SN": "Mattishall",
        "PE": 1178,
        "QL": 693,
        "AC": 587,
        "PB": "£350k-£650k",
        "PBR": 417
    },
    {
        "UID": 418,
        "OR": 884,
        "SN": "Cliffe Woods",
        "PE": 908,
        "QL": 249,
        "AC": 1073,
        "PB": "£350k-£650k",
        "PBR": 418
    },
    {
        "UID": 419,
        "OR": 888,
        "SN": "Thatcham",
        "PE": 346,
        "QL": 1313,
        "AC": 781,
        "PB": "£350k-£650k",
        "PBR": 419
    },
    {
        "UID": 420,
        "OR": 891,
        "SN": "Little Paxton",
        "PE": 625,
        "QL": 1155,
        "AC": 788,
        "PB": "£350k-£650k",
        "PBR": 420
    },
    {
        "UID": 421,
        "OR": 893,
        "SN": "Winslow",
        "PE": 1209,
        "QL": 1146,
        "AC": 338,
        "PB": "£350k-£650k",
        "PBR": 421
    },
    {
        "UID": 422,
        "OR": 894,
        "SN": "Kingsteignton",
        "PE": 673,
        "QL": 807,
        "AC": 933,
        "PB": "£350k-£650k",
        "PBR": 422
    },
    {
        "UID": 423,
        "OR": 896,
        "SN": "Hedge End",
        "PE": 632,
        "QL": 928,
        "AC": 913,
        "PB": "£350k-£650k",
        "PBR": 423
    },
    {
        "UID": 424,
        "OR": 901,
        "SN": "Long Stratton",
        "PE": 1081,
        "QL": 599,
        "AC": 738,
        "PB": "£350k-£650k",
        "PBR": 424
    },
    {
        "UID": 425,
        "OR": 902,
        "SN": "Cheshunt",
        "PE": 786,
        "QL": 502,
        "AC": 1022,
        "PB": "£350k-£650k",
        "PBR": 425
    },
    {
        "UID": 426,
        "OR": 904,
        "SN": "Clapham (Bedford)",
        "PE": 619,
        "QL": 809,
        "AC": 1008,
        "PB": "£350k-£650k",
        "PBR": 426
    },
    {
        "UID": 427,
        "OR": 906,
        "SN": "Sale",
        "PE": 641,
        "QL": 342,
        "AC": 1169,
        "PB": "£350k-£650k",
        "PBR": 427
    },
    {
        "UID": 428,
        "OR": 909,
        "SN": "New Milton",
        "PE": 449,
        "QL": 373,
        "AC": 1220,
        "PB": "£350k-£650k",
        "PBR": 428
    },
    {
        "UID": 429,
        "OR": 914,
        "SN": "Stourbridge",
        "PE": 1038,
        "QL": 611,
        "AC": 792,
        "PB": "£350k-£650k",
        "PBR": 429
    },
    {
        "UID": 430,
        "OR": 918,
        "SN": "Huntingdon",
        "PE": 1040,
        "QL": 1309,
        "AC": 340,
        "PB": "£350k-£650k",
        "PBR": 430
    },
    {
        "UID": 431,
        "OR": 920,
        "SN": "Menston",
        "PE": 755,
        "QL": 1074,
        "AC": 787,
        "PB": "£350k-£650k",
        "PBR": 431
    },
    {
        "UID": 432,
        "OR": 920,
        "SN": "Kibworth Harcourt",
        "PE": 1364,
        "QL": 1157,
        "AC": 224,
        "PB": "£350k-£650k",
        "PBR": 431
    },
    {
        "UID": 433,
        "OR": 922,
        "SN": "Bicester",
        "PE": 1154,
        "QL": 925,
        "AC": 561,
        "PB": "£350k-£650k",
        "PBR": 433
    },
    {
        "UID": 434,
        "OR": 924,
        "SN": "Fleet",
        "PE": 307,
        "QL": 1115,
        "AC": 1069,
        "PB": "£350k-£650k",
        "PBR": 434
    },
    {
        "UID": 435,
        "OR": 925,
        "SN": "Hinton",
        "PE": 1087,
        "QL": 909,
        "AC": 634,
        "PB": "£350k-£650k",
        "PBR": 435
    },
    {
        "UID": 436,
        "OR": 927,
        "SN": "Alvechurch",
        "PE": 609,
        "QL": 939,
        "AC": 974,
        "PB": "£350k-£650k",
        "PBR": 436
    },
    {
        "UID": 437,
        "OR": 929,
        "SN": "Addlestone",
        "PE": 765,
        "QL": 629,
        "AC": 998,
        "PB": "£350k-£650k",
        "PBR": 437
    },
    {
        "UID": 438,
        "OR": 933,
        "SN": "Aylesham",
        "PE": 692,
        "QL": 25,
        "AC": 1332,
        "PB": "£350k-£650k",
        "PBR": 438
    },
    {
        "UID": 439,
        "OR": 934,
        "SN": "Frinton-on-Sea",
        "PE": 390,
        "QL": 700,
        "AC": 1172,
        "PB": "£350k-£650k",
        "PBR": 439
    },
    {
        "UID": 440,
        "OR": 935,
        "SN": "Paddock Wood",
        "PE": 731,
        "QL": 388,
        "AC": 1140,
        "PB": "£350k-£650k",
        "PBR": 440
    },
    {
        "UID": 441,
        "OR": 936,
        "SN": "Willand",
        "PE": 886,
        "QL": 1302,
        "AC": 496,
        "PB": "£350k-£650k",
        "PBR": 441
    },
    {
        "UID": 442,
        "OR": 938,
        "SN": "Oakley (Basingstoke and Deane)",
        "PE": 696,
        "QL": 1167,
        "AC": 772,
        "PB": "£350k-£650k",
        "PBR": 442
    },
    {
        "UID": 443,
        "OR": 946,
        "SN": "Wombourne",
        "PE": 604,
        "QL": 673,
        "AC": 1106,
        "PB": "£350k-£650k",
        "PBR": 443
    },
    {
        "UID": 444,
        "OR": 949,
        "SN": "St Ives",
        "PE": 1004,
        "QL": 847,
        "AC": 774,
        "PB": "£350k-£650k",
        "PBR": 444
    },
    {
        "UID": 445,
        "OR": 960,
        "SN": "Hatfield",
        "PE": 1105,
        "QL": 779,
        "AC": 722,
        "PB": "£350k-£650k",
        "PBR": 445
    },
    {
        "UID": 446,
        "OR": 962,
        "SN": "Havering",
        "PE": 888,
        "QL": 405,
        "AC": 1076,
        "PB": "£350k-£650k",
        "PBR": 446
    },
    {
        "UID": 447,
        "OR": 965,
        "SN": "Sandy",
        "PE": 725,
        "QL": 944,
        "AC": 932,
        "PB": "£350k-£650k",
        "PBR": 447
    },
    {
        "UID": 448,
        "OR": 968,
        "SN": "Peasedown St John",
        "PE": 789,
        "QL": 294,
        "AC": 1182,
        "PB": "£350k-£650k",
        "PBR": 448
    },
    {
        "UID": 449,
        "OR": 970,
        "SN": "Somersham (Huntingdonshire)",
        "PE": 1358,
        "QL": 712,
        "AC": 487,
        "PB": "£350k-£650k",
        "PBR": 449
    },
    {
        "UID": 450,
        "OR": 973,
        "SN": "Rochford",
        "PE": 1073,
        "QL": 878,
        "AC": 725,
        "PB": "£350k-£650k",
        "PBR": 450
    },
    {
        "UID": 451,
        "OR": 976,
        "SN": "Long Lawford",
        "PE": 1051,
        "QL": 15,
        "AC": 1289,
        "PB": "£350k-£650k",
        "PBR": 451
    },
    {
        "UID": 452,
        "OR": 981,
        "SN": "Southwick",
        "PE": 63,
        "QL": 1271,
        "AC": 1229,
        "PB": "£350k-£650k",
        "PBR": 452
    },
    {
        "UID": 453,
        "OR": 983,
        "SN": "Newport Pagnell",
        "PE": 612,
        "QL": 1359,
        "AC": 591,
        "PB": "£350k-£650k",
        "PBR": 453
    },
    {
        "UID": 454,
        "OR": 985,
        "SN": "Coxheath",
        "PE": 962,
        "QL": 473,
        "AC": 1026,
        "PB": "£350k-£650k",
        "PBR": 454
    },
    {
        "UID": 455,
        "OR": 991,
        "SN": "Marks Tey",
        "PE": 993,
        "QL": 818,
        "AC": 848,
        "PB": "£350k-£650k",
        "PBR": 455
    },
    {
        "UID": 456,
        "OR": 993,
        "SN": "Didcot",
        "PE": 672,
        "QL": 950,
        "AC": 996,
        "PB": "£350k-£650k",
        "PBR": 456
    },
    {
        "UID": 457,
        "OR": 995,
        "SN": "Swavesey",
        "PE": 1330,
        "QL": 163,
        "AC": 872,
        "PB": "£350k-£650k",
        "PBR": 457
    },
    {
        "UID": 458,
        "OR": 998,
        "SN": "Fairfield Park",
        "PE": 951,
        "QL": 1265,
        "AC": 616,
        "PB": "£350k-£650k",
        "PBR": 458
    },
    {
        "UID": 459,
        "OR": 998,
        "SN": "Helsby",
        "PE": 1272,
        "QL": 1164,
        "AC": 375,
        "PB": "£350k-£650k",
        "PBR": 458
    },
    {
        "UID": 460,
        "OR": 1005,
        "SN": "Totton",
        "PE": 235,
        "QL": 640,
        "AC": 1304,
        "PB": "£350k-£650k",
        "PBR": 460
    },
    {
        "UID": 461,
        "OR": 1009,
        "SN": "Barking and Dagenham",
        "PE": 793,
        "QL": 354,
        "AC": 1182,
        "PB": "£350k-£650k",
        "PBR": 461
    },
    {
        "UID": 462,
        "OR": 1011,
        "SN": "Mayland",
        "PE": 824,
        "QL": 293,
        "AC": 1191,
        "PB": "£350k-£650k",
        "PBR": 462
    },
    {
        "UID": 463,
        "OR": 1012,
        "SN": "Blackwater",
        "PE": 343,
        "QL": 916,
        "AC": 1197,
        "PB": "£350k-£650k",
        "PBR": 463
    },
    {
        "UID": 464,
        "OR": 1013,
        "SN": "Bishop's Stortford",
        "PE": 765,
        "QL": 1321,
        "AC": 636,
        "PB": "£350k-£650k",
        "PBR": 464
    },
    {
        "UID": 465,
        "OR": 1023,
        "SN": "Brackley",
        "PE": 1191,
        "QL": 1004,
        "AC": 605,
        "PB": "£350k-£650k",
        "PBR": 465
    },
    {
        "UID": 466,
        "OR": 1025,
        "SN": "Nailsea",
        "PE": 1023,
        "QL": 961,
        "AC": 799,
        "PB": "£350k-£650k",
        "PBR": 466
    },
    {
        "UID": 467,
        "OR": 1026,
        "SN": "Warboys",
        "PE": 1359,
        "QL": 415,
        "AC": 710,
        "PB": "£350k-£650k",
        "PBR": 467
    },
    {
        "UID": 468,
        "OR": 1027,
        "SN": "Upper Poppleton",
        "PE": 690,
        "QL": 1170,
        "AC": 877,
        "PB": "£350k-£650k",
        "PBR": 468
    },
    {
        "UID": 469,
        "OR": 1032,
        "SN": "Sutton (East Cambridgeshire)",
        "PE": 1348,
        "QL": 735,
        "AC": 562,
        "PB": "£350k-£650k",
        "PBR": 469
    },
    {
        "UID": 470,
        "OR": 1032,
        "SN": "Saughall",
        "PE": 1158,
        "QL": 195,
        "AC": 1075,
        "PB": "£350k-£650k",
        "PBR": 469
    },
    {
        "UID": 471,
        "OR": 1034,
        "SN": "Pill",
        "PE": 439,
        "QL": 1134,
        "AC": 1072,
        "PB": "£350k-£650k",
        "PBR": 471
    },
    {
        "UID": 472,
        "OR": 1035,
        "SN": "Fareham",
        "PE": 404,
        "QL": 1276,
        "AC": 997,
        "PB": "£350k-£650k",
        "PBR": 472
    },
    {
        "UID": 473,
        "OR": 1036,
        "SN": "Elsenham",
        "PE": 1308,
        "QL": 1303,
        "AC": 261,
        "PB": "£350k-£650k",
        "PBR": 473
    },
    {
        "UID": 474,
        "OR": 1038,
        "SN": "Brampton (Huntingdonshire)",
        "PE": 1314,
        "QL": 1295,
        "AC": 275,
        "PB": "£350k-£650k",
        "PBR": 474
    },
    {
        "UID": 475,
        "OR": 1039,
        "SN": "Bletchley",
        "PE": 684,
        "QL": 1167,
        "AC": 892,
        "PB": "£350k-£650k",
        "PBR": 475
    },
    {
        "UID": 476,
        "OR": 1045,
        "SN": "Harlow",
        "PE": 1114,
        "QL": 425,
        "AC": 989,
        "PB": "£350k-£650k",
        "PBR": 476
    },
    {
        "UID": 477,
        "OR": 1046,
        "SN": "Indian Queens",
        "PE": 1055,
        "QL": 1013,
        "AC": 760,
        "PB": "£350k-£650k",
        "PBR": 477
    },
    {
        "UID": 478,
        "OR": 1051,
        "SN": "Mountsorrel",
        "PE": 899,
        "QL": 1318,
        "AC": 609,
        "PB": "£350k-£650k",
        "PBR": 478
    },
    {
        "UID": 479,
        "OR": 1054,
        "SN": "Sprotbrough",
        "PE": 763,
        "QL": 1187,
        "AC": 867,
        "PB": "£350k-£650k",
        "PBR": 479
    },
    {
        "UID": 480,
        "OR": 1056,
        "SN": "Burton Joyce",
        "PE": 984,
        "QL": 1140,
        "AC": 755,
        "PB": "£350k-£650k",
        "PBR": 480
    },
    {
        "UID": 481,
        "OR": 1061,
        "SN": "Hazel Grove",
        "PE": 844,
        "QL": 575,
        "AC": 1118,
        "PB": "£350k-£650k",
        "PBR": 481
    },
    {
        "UID": 482,
        "OR": 1063,
        "SN": "Haverhill",
        "PE": 1251,
        "QL": 261,
        "AC": 985,
        "PB": "£350k-£650k",
        "PBR": 482
    },
    {
        "UID": 483,
        "OR": 1064,
        "SN": "Whetstone",
        "PE": 1356,
        "QL": 622,
        "AC": 656,
        "PB": "£350k-£650k",
        "PBR": 483
    },
    {
        "UID": 484,
        "OR": 1065,
        "SN": "Stevenage",
        "PE": 952,
        "QL": 677,
        "AC": 1034,
        "PB": "£350k-£650k",
        "PBR": 484
    },
    {
        "UID": 485,
        "OR": 1067,
        "SN": "Meopham (North)",
        "PE": 671,
        "QL": 849,
        "AC": 1136,
        "PB": "£350k-£650k",
        "PBR": 485
    },
    {
        "UID": 486,
        "OR": 1074,
        "SN": "Alveston",
        "PE": 1061,
        "QL": 798,
        "AC": 915,
        "PB": "£350k-£650k",
        "PBR": 486
    },
    {
        "UID": 487,
        "OR": 1075,
        "SN": "Denmead",
        "PE": 449,
        "QL": 1260,
        "AC": 1055,
        "PB": "£350k-£650k",
        "PBR": 487
    },
    {
        "UID": 488,
        "OR": 1077,
        "SN": "Uppingham",
        "PE": 1372,
        "QL": 1269,
        "AC": 322,
        "PB": "£350k-£650k",
        "PBR": 488
    },
    {
        "UID": 489,
        "OR": 1081,
        "SN": "Bramhall",
        "PE": 381,
        "QL": 627,
        "AC": 1290,
        "PB": "£350k-£650k",
        "PBR": 489
    },
    {
        "UID": 490,
        "OR": 1083,
        "SN": "Kenilworth",
        "PE": 1238,
        "QL": 1255,
        "AC": 474,
        "PB": "£350k-£650k",
        "PBR": 490
    },
    {
        "UID": 491,
        "OR": 1089,
        "SN": "Borrowash",
        "PE": 918,
        "QL": 1022,
        "AC": 941,
        "PB": "£350k-£650k",
        "PBR": 491
    },
    {
        "UID": 492,
        "OR": 1090,
        "SN": "Kempston",
        "PE": 650,
        "QL": 483,
        "AC": 1243,
        "PB": "£350k-£650k",
        "PBR": 492
    },
    {
        "UID": 493,
        "OR": 1097,
        "SN": "Cil-y-coed",
        "PE": 833,
        "QL": 1246,
        "AC": 864,
        "PB": "£350k-£650k",
        "PBR": 493
    },
    {
        "UID": 494,
        "OR": 1098,
        "SN": "Ormesby St Margaret",
        "PE": 720,
        "QL": 697,
        "AC": 1186,
        "PB": "£350k-£650k",
        "PBR": 494
    },
    {
        "UID": 495,
        "OR": 1101,
        "SN": "Letchworth Garden City",
        "PE": 929,
        "QL": 886,
        "AC": 1041,
        "PB": "£350k-£650k",
        "PBR": 495
    },
    {
        "UID": 496,
        "OR": 1102,
        "SN": "Southam",
        "PE": 1083,
        "QL": 1001,
        "AC": 848,
        "PB": "£350k-£650k",
        "PBR": 496
    },
    {
        "UID": 497,
        "OR": 1103,
        "SN": "Wollaston",
        "PE": 1298,
        "QL": 1077,
        "AC": 581,
        "PB": "£350k-£650k",
        "PBR": 497
    },
    {
        "UID": 498,
        "OR": 1105,
        "SN": "Formby",
        "PE": 1131,
        "QL": 985,
        "AC": 839,
        "PB": "£350k-£650k",
        "PBR": 498
    },
    {
        "UID": 499,
        "OR": 1108,
        "SN": "Carterton",
        "PE": 776,
        "QL": 1125,
        "AC": 1021,
        "PB": "£350k-£650k",
        "PBR": 499
    },
    {
        "UID": 500,
        "OR": 1110,
        "SN": "Welwyn Garden City",
        "PE": 901,
        "QL": 868,
        "AC": 1083,
        "PB": "£350k-£650k",
        "PBR": 500
    },
    {
        "UID": 501,
        "OR": 1111,
        "SN": "Beeston (Broxtowe)",
        "PE": 975,
        "QL": 856,
        "AC": 1048,
        "PB": "£350k-£650k",
        "PBR": 501
    },
    {
        "UID": 502,
        "OR": 1112,
        "SN": "Goostrey",
        "PE": 1155,
        "QL": 714,
        "AC": 941,
        "PB": "£350k-£650k",
        "PBR": 502
    },
    {
        "UID": 503,
        "OR": 1115,
        "SN": "Branston",
        "PE": 1217,
        "QL": 1309,
        "AC": 466,
        "PB": "£350k-£650k",
        "PBR": 503
    },
    {
        "UID": 504,
        "OR": 1116,
        "SN": "Long Buckby",
        "PE": 1266,
        "QL": 946,
        "AC": 720,
        "PB": "£350k-£650k",
        "PBR": 504
    },
    {
        "UID": 505,
        "OR": 1117,
        "SN": "Red Lodge",
        "PE": 1322,
        "QL": 258,
        "AC": 1027,
        "PB": "£350k-£650k",
        "PBR": 505
    },
    {
        "UID": 506,
        "OR": 1121,
        "SN": "Broadbridge Heath",
        "PE": 861,
        "QL": 912,
        "AC": 1104,
        "PB": "£350k-£650k",
        "PBR": 506
    },
    {
        "UID": 507,
        "OR": 1122,
        "SN": "Narborough/Enderby",
        "PE": 1159,
        "QL": 1059,
        "AC": 805,
        "PB": "£350k-£650k",
        "PBR": 507
    },
    {
        "UID": 508,
        "OR": 1124,
        "SN": "Albrighton",
        "PE": 1146,
        "QL": 793,
        "AC": 951,
        "PB": "£350k-£650k",
        "PBR": 508
    },
    {
        "UID": 509,
        "OR": 1127,
        "SN": "Marston Moretaine",
        "PE": 1071,
        "QL": 815,
        "AC": 1013,
        "PB": "£350k-£650k",
        "PBR": 509
    },
    {
        "UID": 510,
        "OR": 1128,
        "SN": "Barton-under-Needwood",
        "PE": 1086,
        "QL": 1306,
        "AC": 627,
        "PB": "£350k-£650k",
        "PBR": 510
    },
    {
        "UID": 511,
        "OR": 1131,
        "SN": "Southwater",
        "PE": 839,
        "QL": 1171,
        "AC": 994,
        "PB": "£350k-£650k",
        "PBR": 511
    },
    {
        "UID": 512,
        "OR": 1132,
        "SN": "Willaston",
        "PE": 1182,
        "QL": 997,
        "AC": 833,
        "PB": "£350k-£650k",
        "PBR": 512
    },
    {
        "UID": 513,
        "OR": 1134,
        "SN": "Aveley",
        "PE": 1085,
        "QL": 266,
        "AC": 1212,
        "PB": "£350k-£650k",
        "PBR": 513
    },
    {
        "UID": 514,
        "OR": 1135,
        "SN": "Dersingham",
        "PE": 449,
        "QL": 1281,
        "AC": 1141,
        "PB": "£350k-£650k",
        "PBR": 514
    },
    {
        "UID": 515,
        "OR": 1138,
        "SN": "Wilstead",
        "PE": 1076,
        "QL": 987,
        "AC": 955,
        "PB": "£350k-£650k",
        "PBR": 515
    },
    {
        "UID": 516,
        "OR": 1141,
        "SN": "Sutton Coldfield",
        "PE": 716,
        "QL": 1057,
        "AC": 1156,
        "PB": "£350k-£650k",
        "PBR": 516
    },
    {
        "UID": 517,
        "OR": 1147,
        "SN": "Stotfold",
        "PE": 1001,
        "QL": 1313,
        "AC": 757,
        "PB": "£350k-£650k",
        "PBR": 517
    },
    {
        "UID": 518,
        "OR": 1148,
        "SN": "Tilbury",
        "PE": 560,
        "QL": 787,
        "AC": 1300,
        "PB": "£350k-£650k",
        "PBR": 518
    },
    {
        "UID": 519,
        "OR": 1149,
        "SN": "Bracknell",
        "PE": 1064,
        "QL": 887,
        "AC": 1043,
        "PB": "£350k-£650k",
        "PBR": 519
    },
    {
        "UID": 520,
        "OR": 1150,
        "SN": "Hextable",
        "PE": 785,
        "QL": 555,
        "AC": 1258,
        "PB": "£350k-£650k",
        "PBR": 520
    },
    {
        "UID": 521,
        "OR": 1154,
        "SN": "Hethersett",
        "PE": 985,
        "QL": 648,
        "AC": 1174,
        "PB": "£350k-£650k",
        "PBR": 521
    },
    {
        "UID": 522,
        "OR": 1155,
        "SN": "Horsforth",
        "PE": 644,
        "QL": 1090,
        "AC": 1184,
        "PB": "£350k-£650k",
        "PBR": 522
    },
    {
        "UID": 523,
        "OR": 1157,
        "SN": "Filton",
        "PE": 1035,
        "QL": 802,
        "AC": 1121,
        "PB": "£350k-£650k",
        "PBR": 523
    },
    {
        "UID": 524,
        "OR": 1158,
        "SN": "Bishop's Cleeve",
        "PE": 449,
        "QL": 1360,
        "AC": 1004,
        "PB": "£350k-£650k",
        "PBR": 524
    },
    {
        "UID": 525,
        "OR": 1159,
        "SN": "Alderholt",
        "PE": 748,
        "QL": 966,
        "AC": 1193,
        "PB": "£350k-£650k",
        "PBR": 525
    },
    {
        "UID": 526,
        "OR": 1161,
        "SN": "Tadcaster",
        "PE": 791,
        "QL": 1337,
        "AC": 872,
        "PB": "£350k-£650k",
        "PBR": 526
    },
    {
        "UID": 527,
        "OR": 1164,
        "SN": "Marchwood",
        "PE": 159,
        "QL": 1317,
        "AC": 1278,
        "PB": "£350k-£650k",
        "PBR": 527
    },
    {
        "UID": 528,
        "OR": 1167,
        "SN": "Syston",
        "PE": 1365,
        "QL": 783,
        "AC": 826,
        "PB": "£350k-£650k",
        "PBR": 528
    },
    {
        "UID": 529,
        "OR": 1170,
        "SN": "Burghfield Common",
        "PE": 836,
        "QL": 539,
        "AC": 1269,
        "PB": "£350k-£650k",
        "PBR": 529
    },
    {
        "UID": 530,
        "OR": 1176,
        "SN": "Solihull",
        "PE": 887,
        "QL": 1008,
        "AC": 1158,
        "PB": "£350k-£650k",
        "PBR": 530
    },
    {
        "UID": 531,
        "OR": 1176,
        "SN": "Worsley",
        "PE": 875,
        "QL": 999,
        "AC": 1162,
        "PB": "£350k-£650k",
        "PBR": 530
    },
    {
        "UID": 532,
        "OR": 1180,
        "SN": "Waltham Abbey",
        "PE": 963,
        "QL": 1158,
        "AC": 1042,
        "PB": "£350k-£650k",
        "PBR": 532
    },
    {
        "UID": 533,
        "OR": 1185,
        "SN": "Yateley",
        "PE": 845,
        "QL": 606,
        "AC": 1268,
        "PB": "£350k-£650k",
        "PBR": 533
    },
    {
        "UID": 534,
        "OR": 1186,
        "SN": "Caddington",
        "PE": 449,
        "QL": 715,
        "AC": 1336,
        "PB": "£350k-£650k",
        "PBR": 534
    },
    {
        "UID": 535,
        "OR": 1194,
        "SN": "South Earlswood",
        "PE": 852,
        "QL": 535,
        "AC": 1291,
        "PB": "£350k-£650k",
        "PBR": 535
    },
    {
        "UID": 536,
        "OR": 1196,
        "SN": "Houghton Regis",
        "PE": 764,
        "QL": 762,
        "AC": 1277,
        "PB": "£350k-£650k",
        "PBR": 536
    },
    {
        "UID": 537,
        "OR": 1197,
        "SN": "Basildon",
        "PE": 1165,
        "QL": 194,
        "AC": 1280,
        "PB": "£350k-£650k",
        "PBR": 537
    },
    {
        "UID": 538,
        "OR": 1198,
        "SN": "West Bridgford",
        "PE": 811,
        "QL": 1336,
        "AC": 949,
        "PB": "£350k-£650k",
        "PBR": 538
    },
    {
        "UID": 539,
        "OR": 1202,
        "SN": "Bishopthorpe",
        "PE": 943,
        "QL": 1322,
        "AC": 893,
        "PB": "£350k-£650k",
        "PBR": 539
    },
    {
        "UID": 540,
        "OR": 1203,
        "SN": "Murton (Swansea)",
        "PE": 449,
        "QL": 1093,
        "AC": 1297,
        "PB": "£350k-£650k",
        "PBR": 540
    },
    {
        "UID": 541,
        "OR": 1204,
        "SN": "Dinas Powis",
        "PE": 1102,
        "QL": 1257,
        "AC": 889,
        "PB": "£350k-£650k",
        "PBR": 541
    },
    {
        "UID": 542,
        "OR": 1205,
        "SN": "Breaston",
        "PE": 1107,
        "QL": 1106,
        "AC": 1003,
        "PB": "£350k-£650k",
        "PBR": 542
    },
    {
        "UID": 543,
        "OR": 1208,
        "SN": "Portslade-by-Sea",
        "PE": 238,
        "QL": 1301,
        "AC": 1303,
        "PB": "£350k-£650k",
        "PBR": 543
    },
    {
        "UID": 544,
        "OR": 1212,
        "SN": "Cheadle Hulme",
        "PE": 578,
        "QL": 562,
        "AC": 1354,
        "PB": "£350k-£650k",
        "PBR": 544
    },
    {
        "UID": 545,
        "OR": 1214,
        "SN": "Southend-on-Sea",
        "PE": 891,
        "QL": 1220,
        "AC": 1111,
        "PB": "£350k-£650k",
        "PBR": 545
    },
    {
        "UID": 546,
        "OR": 1216,
        "SN": "Balsall Common",
        "PE": 1280,
        "QL": 732,
        "AC": 1029,
        "PB": "£350k-£650k",
        "PBR": 546
    },
    {
        "UID": 547,
        "OR": 1217,
        "SN": "Hatfield Peverel",
        "PE": 1245,
        "QL": 1004,
        "AC": 947,
        "PB": "£350k-£650k",
        "PBR": 547
    },
    {
        "UID": 548,
        "OR": 1219,
        "SN": "Rayleigh",
        "PE": 1012,
        "QL": 1139,
        "AC": 1082,
        "PB": "£350k-£650k",
        "PBR": 548
    },
    {
        "UID": 549,
        "OR": 1222,
        "SN": "Stubbington",
        "PE": 346,
        "QL": 1332,
        "AC": 1223,
        "PB": "£350k-£650k",
        "PBR": 549
    },
    {
        "UID": 550,
        "OR": 1236,
        "SN": "Taverham",
        "PE": 625,
        "QL": 1253,
        "AC": 1231,
        "PB": "£350k-£650k",
        "PBR": 550
    },
    {
        "UID": 551,
        "OR": 1237,
        "SN": "Bromham (Bedford)",
        "PE": 983,
        "QL": 1012,
        "AC": 1199,
        "PB": "£350k-£650k",
        "PBR": 551
    },
    {
        "UID": 552,
        "OR": 1240,
        "SN": "Water Orton",
        "PE": 749,
        "QL": 919,
        "AC": 1307,
        "PB": "£350k-£650k",
        "PBR": 552
    },
    {
        "UID": 553,
        "OR": 1244,
        "SN": "Cosby",
        "PE": 1353,
        "QL": 1107,
        "AC": 851,
        "PB": "£350k-£650k",
        "PBR": 553
    },
    {
        "UID": 554,
        "OR": 1245,
        "SN": "Horndean",
        "PE": 449,
        "QL": 1254,
        "AC": 1298,
        "PB": "£350k-£650k",
        "PBR": 554
    },
    {
        "UID": 555,
        "OR": 1246,
        "SN": "Birstall",
        "PE": 1067,
        "QL": 751,
        "AC": 1226,
        "PB": "£350k-£650k",
        "PBR": 555
    },
    {
        "UID": 556,
        "OR": 1247,
        "SN": "Woodingdean",
        "PE": 449,
        "QL": 715,
        "AC": 1365,
        "PB": "£350k-£650k",
        "PBR": 556
    },
    {
        "UID": 557,
        "OR": 1250,
        "SN": "Ruddington",
        "PE": 1309,
        "QL": 913,
        "AC": 1022,
        "PB": "£350k-£650k",
        "PBR": 557
    },
    {
        "UID": 558,
        "OR": 1257,
        "SN": "Garforth",
        "PE": 1228,
        "QL": 1288,
        "AC": 885,
        "PB": "£350k-£650k",
        "PBR": 558
    },
    {
        "UID": 559,
        "OR": 1263,
        "SN": "Haxby",
        "PE": 648,
        "QL": 700,
        "AC": 1357,
        "PB": "£350k-£650k",
        "PBR": 559
    },
    {
        "UID": 560,
        "OR": 1267,
        "SN": "Istead Rise",
        "PE": 800,
        "QL": 775,
        "AC": 1337,
        "PB": "£350k-£650k",
        "PBR": 560
    },
    {
        "UID": 561,
        "OR": 1268,
        "SN": "Irchester",
        "PE": 1306,
        "QL": 1218,
        "AC": 903,
        "PB": "£350k-£650k",
        "PBR": 561
    },
    {
        "UID": 562,
        "OR": 1269,
        "SN": "Culcheth",
        "PE": 1283,
        "QL": 966,
        "AC": 1081,
        "PB": "£350k-£650k",
        "PBR": 562
    },
    {
        "UID": 563,
        "OR": 1271,
        "SN": "Gatley",
        "PE": 1036,
        "QL": 321,
        "AC": 1353,
        "PB": "£350k-£650k",
        "PBR": 563
    },
    {
        "UID": 564,
        "OR": 1272,
        "SN": "New Addington",
        "PE": 934,
        "QL": 312,
        "AC": 1368,
        "PB": "£350k-£650k",
        "PBR": 564
    },
    {
        "UID": 565,
        "OR": 1275,
        "SN": "Bulkington",
        "PE": 1077,
        "QL": 394,
        "AC": 1334,
        "PB": "£350k-£650k",
        "PBR": 565
    },
    {
        "UID": 566,
        "OR": 1279,
        "SN": "Sawtry",
        "PE": 1360,
        "QL": 1112,
        "AC": 960,
        "PB": "£350k-£650k",
        "PBR": 566
    },
    {
        "UID": 567,
        "OR": 1281,
        "SN": "Catshill",
        "PE": 1268,
        "QL": 407,
        "AC": 1275,
        "PB": "£350k-£650k",
        "PBR": 567
    },
    {
        "UID": 568,
        "OR": 1283,
        "SN": "Witchford",
        "PE": 1346,
        "QL": 755,
        "AC": 1147,
        "PB": "£350k-£650k",
        "PBR": 568
    },
    {
        "UID": 569,
        "OR": 1285,
        "SN": "Frimley",
        "PE": 366,
        "QL": 1369,
        "AC": 1213,
        "PB": "£350k-£650k",
        "PBR": 569
    },
    {
        "UID": 570,
        "OR": 1287,
        "SN": "Lower Stondon",
        "PE": 830,
        "QL": 1304,
        "AC": 1204,
        "PB": "£350k-£650k",
        "PBR": 570
    },
    {
        "UID": 571,
        "OR": 1291,
        "SN": "East Leake",
        "PE": 1320,
        "QL": 1365,
        "AC": 639,
        "PB": "£350k-£650k",
        "PBR": 571
    },
    {
        "UID": 572,
        "OR": 1293,
        "SN": "Girton",
        "PE": 1327,
        "QL": 1285,
        "AC": 876,
        "PB": "£350k-£650k",
        "PBR": 572
    },
    {
        "UID": 573,
        "OR": 1299,
        "SN": "Bingham",
        "PE": 1338,
        "QL": 1207,
        "AC": 978,
        "PB": "£350k-£650k",
        "PBR": 573
    },
    {
        "UID": 574,
        "OR": 1301,
        "SN": "Broughton Astley",
        "PE": 1342,
        "QL": 972,
        "AC": 1118,
        "PB": "£350k-£650k",
        "PBR": 574
    },
    {
        "UID": 575,
        "OR": 1303,
        "SN": "Camberley",
        "PE": 792,
        "QL": 1364,
        "AC": 1141,
        "PB": "£350k-£650k",
        "PBR": 575
    },
    {
        "UID": 576,
        "OR": 1306,
        "SN": "Spixworth",
        "PE": 770,
        "QL": 1226,
        "AC": 1312,
        "PB": "£350k-£650k",
        "PBR": 576
    },
    {
        "UID": 577,
        "OR": 1307,
        "SN": "Urmston",
        "PE": 926,
        "QL": 1249,
        "AC": 1265,
        "PB": "£350k-£650k",
        "PBR": 577
    },
    {
        "UID": 578,
        "OR": 1309,
        "SN": "Keyworth",
        "PE": 1331,
        "QL": 1045,
        "AC": 1132,
        "PB": "£350k-£650k",
        "PBR": 578
    },
    {
        "UID": 579,
        "OR": 1311,
        "SN": "North Baddesley",
        "PE": 953,
        "QL": 1088,
        "AC": 1310,
        "PB": "£350k-£650k",
        "PBR": 579
    },
    {
        "UID": 580,
        "OR": 1313,
        "SN": "Bagshot",
        "PE": 1116,
        "QL": 1353,
        "AC": 1034,
        "PB": "£350k-£650k",
        "PBR": 580
    },
    {
        "UID": 581,
        "OR": 1315,
        "SN": "Cambourne",
        "PE": 1289,
        "QL": 890,
        "AC": 1207,
        "PB": "£350k-£650k",
        "PBR": 581
    },
    {
        "UID": 582,
        "OR": 1317,
        "SN": "Knebworth",
        "PE": 1065,
        "QL": 1368,
        "AC": 982,
        "PB": "£350k-£650k",
        "PBR": 582
    },
    {
        "UID": 583,
        "OR": 1321,
        "SN": "Stanford-le-Hope",
        "PE": 1063,
        "QL": 1312,
        "AC": 1177,
        "PB": "£350k-£650k",
        "PBR": 583
    },
    {
        "UID": 584,
        "OR": 1326,
        "SN": "Kennington",
        "PE": 624,
        "QL": 1352,
        "AC": 1293,
        "PB": "£350k-£650k",
        "PBR": 584
    },
    {
        "UID": 585,
        "OR": 1327,
        "SN": "Chadwell St Mary",
        "PE": 994,
        "QL": 1152,
        "AC": 1307,
        "PB": "£350k-£650k",
        "PBR": 585
    },
    {
        "UID": 586,
        "OR": 1328,
        "SN": "Ravenshead",
        "PE": 1249,
        "QL": 1137,
        "AC": 1196,
        "PB": "£350k-£650k",
        "PBR": 586
    },
    {
        "UID": 587,
        "OR": 1330,
        "SN": "Canvey Island",
        "PE": 590,
        "QL": 1233,
        "AC": 1360,
        "PB": "£350k-£650k",
        "PBR": 587
    },
    {
        "UID": 588,
        "OR": 1331,
        "SN": "Undy",
        "PE": 981,
        "QL": 1366,
        "AC": 1124,
        "PB": "£350k-£650k",
        "PBR": 588
    },
    {
        "UID": 589,
        "OR": 1333,
        "SN": "Radcliffe on Trent",
        "PE": 1008,
        "QL": 1367,
        "AC": 1108,
        "PB": "£350k-£650k",
        "PBR": 589
    },
    {
        "UID": 590,
        "OR": 1335,
        "SN": "Great Glen",
        "PE": 1366,
        "QL": 1331,
        "AC": 913,
        "PB": "£350k-£650k",
        "PBR": 590
    },
    {
        "UID": 591,
        "OR": 1341,
        "SN": "Stilton",
        "PE": 1367,
        "QL": 1340,
        "AC": 923,
        "PB": "£350k-£650k",
        "PBR": 591
    },
    {
        "UID": 592,
        "OR": 1342,
        "SN": "Whitnash",
        "PE": 1144,
        "QL": 1119,
        "AC": 1280,
        "PB": "£350k-£650k",
        "PBR": 592
    },
    {
        "UID": 593,
        "OR": 1344,
        "SN": "Markfield",
        "PE": 1332,
        "QL": 1228,
        "AC": 1144,
        "PB": "£350k-£650k",
        "PBR": 593
    },
    {
        "UID": 594,
        "OR": 1345,
        "SN": "Fleckney",
        "PE": 1357,
        "QL": 1214,
        "AC": 1135,
        "PB": "£350k-£650k",
        "PBR": 594
    },
    {
        "UID": 595,
        "OR": 1347,
        "SN": "Berinsfield",
        "PE": 756,
        "QL": 1050,
        "AC": 1371,
        "PB": "£350k-£650k",
        "PBR": 595
    },
    {
        "UID": 596,
        "OR": 1353,
        "SN": "Papworth Everard",
        "PE": 1295,
        "QL": 1189,
        "AC": 1227,
        "PB": "£350k-£650k",
        "PBR": 596
    },
    {
        "UID": 597,
        "OR": 1357,
        "SN": "Great Notley",
        "PE": 1215,
        "QL": 1044,
        "AC": 1325,
        "PB": "£350k-£650k",
        "PBR": 597
    },
    {
        "UID": 598,
        "OR": 1358,
        "SN": "Ratby",
        "PE": 1340,
        "QL": 1085,
        "AC": 1271,
        "PB": "£350k-£650k",
        "PBR": 598
    },
    {
        "UID": 599,
        "OR": 1360,
        "SN": "Binley Woods",
        "PE": 1264,
        "QL": 839,
        "AC": 1340,
        "PB": "£350k-£650k",
        "PBR": 599
    },
    {
        "UID": 600,
        "OR": 1365,
        "SN": "Copmanthorpe",
        "PE": 1223,
        "QL": 1356,
        "AC": 1239,
        "PB": "£350k-£650k",
        "PBR": 600
    },
    {
        "UID": 601,
        "OR": 1367,
        "SN": "Bar Hill",
        "PE": 1319,
        "QL": 849,
        "AC": 1366,
        "PB": "£350k-£650k",
        "PBR": 601
    },
    {
        "UID": 602,
        "OR": 1369,
        "SN": "Groby",
        "PE": 1344,
        "QL": 1316,
        "AC": 1263,
        "PB": "£350k-£650k",
        "PBR": 602
    },
    {
        "UID": 603,
        "OR": 1370,
        "SN": "Northampton (South Northamptonshire)",
        "PE": 1302,
        "QL": 1350,
        "AC": 1236,
        "PB": "£350k-£650k",
        "PBR": 603
    },
    {
        "UID": 604,
        "OR": 1371,
        "SN": "East Goscote",
        "PE": 1368,
        "QL": 1220,
        "AC": 1352,
        "PB": "£350k-£650k",
        "PBR": 604
    },
    {
        "UID": 605,
        "OR": 1372,
        "SN": "Lightwater",
        "PE": 1096,
        "QL": 1372,
        "AC": 1362,
        "PB": "£350k-£650k",
        "PBR": 605
    },
    {
        "UID": 606,
        "OR": 1,
        "SN": "Bath",
        "PE": 40,
        "QL": 269,
        "AC": 1,
        "PB": "Over £650k",
        "PBR": 1
    },
    {
        "UID": 607,
        "OR": 10,
        "SN": "Aldeburgh",
        "PE": 23,
        "QL": 511,
        "AC": 33,
        "PB": "Over £650k",
        "PBR": 2
    },
    {
        "UID": 608,
        "OR": 14,
        "SN": "Lewes",
        "PE": 97,
        "QL": 633,
        "AC": 7,
        "PB": "Over £650k",
        "PBR": 3
    },
    {
        "UID": 609,
        "OR": 33,
        "SN": "Westerham",
        "PE": 449,
        "QL": 8,
        "AC": 151,
        "PB": "Over £650k",
        "PBR": 4
    },
    {
        "UID": 610,
        "OR": 58,
        "SN": "Southwold",
        "PE": 13,
        "QL": 995,
        "AC": 94,
        "PB": "Over £650k",
        "PBR": 5
    },
    {
        "UID": 611,
        "OR": 67,
        "SN": "Sevenoaks",
        "PE": 167,
        "QL": 271,
        "AC": 154,
        "PB": "Over £650k",
        "PBR": 6
    },
    {
        "UID": 612,
        "OR": 85,
        "SN": "Oxted",
        "PE": 242,
        "QL": 332,
        "AC": 129,
        "PB": "Over £650k",
        "PBR": 7
    },
    {
        "UID": 613,
        "OR": 86,
        "SN": "Winchester",
        "PE": 119,
        "QL": 825,
        "AC": 85,
        "PB": "Over £650k",
        "PBR": 8
    },
    {
        "UID": 614,
        "OR": 104,
        "SN": "Henley-on-Thames",
        "PE": 92,
        "QL": 1245,
        "AC": 44,
        "PB": "Over £650k",
        "PBR": 9
    },
    {
        "UID": 615,
        "OR": 117,
        "SN": "Woodstock (West Oxfordshire)",
        "PE": 194,
        "QL": 1133,
        "AC": 38,
        "PB": "Over £650k",
        "PBR": 10
    },
    {
        "UID": 616,
        "OR": 133,
        "SN": "Farnham",
        "PE": 140,
        "QL": 1204,
        "AC": 56,
        "PB": "Over £650k",
        "PBR": 11
    },
    {
        "UID": 617,
        "OR": 146,
        "SN": "Brighton and Hove",
        "PE": 172,
        "QL": 779,
        "AC": 150,
        "PB": "Over £650k",
        "PBR": 12
    },
    {
        "UID": 618,
        "OR": 159,
        "SN": "Dorking",
        "PE": 225,
        "QL": 611,
        "AC": 177,
        "PB": "Over £650k",
        "PBR": 13
    },
    {
        "UID": 619,
        "OR": 181,
        "SN": "Oxford",
        "PE": 349,
        "QL": 521,
        "AC": 153,
        "PB": "Over £650k",
        "PBR": 14
    },
    {
        "UID": 620,
        "OR": 192,
        "SN": "Shaldon",
        "PE": 266,
        "QL": 545,
        "AC": 239,
        "PB": "Over £650k",
        "PBR": 15
    },
    {
        "UID": 621,
        "OR": 199,
        "SN": "Camden",
        "PE": 916,
        "QL": 988,
        "AC": 6,
        "PB": "Over £650k",
        "PBR": 16
    },
    {
        "UID": 622,
        "OR": 211,
        "SN": "Berkhamsted",
        "PE": 12,
        "QL": 873,
        "AC": 508,
        "PB": "Over £650k",
        "PBR": 17
    },
    {
        "UID": 623,
        "OR": 236,
        "SN": "Cambridge",
        "PE": 1008,
        "QL": 192,
        "AC": 117,
        "PB": "Over £650k",
        "PBR": 18
    },
    {
        "UID": 624,
        "OR": 261,
        "SN": "Reigate",
        "PE": 449,
        "QL": 693,
        "AC": 200,
        "PB": "Over £650k",
        "PBR": 19
    },
    {
        "UID": 625,
        "OR": 268,
        "SN": "Islington",
        "PE": 866,
        "QL": 1162,
        "AC": 16,
        "PB": "Over £650k",
        "PBR": 20
    },
    {
        "UID": 626,
        "OR": 269,
        "SN": "Goring",
        "PE": 34,
        "QL": 1370,
        "AC": 103,
        "PB": "Over £650k",
        "PBR": 21
    },
    {
        "UID": 627,
        "OR": 271,
        "SN": "Hackney",
        "PE": 654,
        "QL": 1140,
        "AC": 48,
        "PB": "Over £650k",
        "PBR": 22
    },
    {
        "UID": 628,
        "OR": 287,
        "SN": "Marlow",
        "PE": 173,
        "QL": 1234,
        "AC": 237,
        "PB": "Over £650k",
        "PBR": 23
    },
    {
        "UID": 629,
        "OR": 311,
        "SN": "Lambeth",
        "PE": 817,
        "QL": 1188,
        "AC": 36,
        "PB": "Over £650k",
        "PBR": 24
    },
    {
        "UID": 630,
        "OR": 316,
        "SN": "Hertford",
        "PE": 563,
        "QL": 1275,
        "AC": 69,
        "PB": "Over £650k",
        "PBR": 25
    },
    {
        "UID": 631,
        "OR": 317,
        "SN": "Croydon",
        "PE": 419,
        "QL": 542,
        "AC": 377,
        "PB": "Over £650k",
        "PBR": 26
    },
    {
        "UID": 632,
        "OR": 319,
        "SN": "Alton (East Hampshire)",
        "PE": 449,
        "QL": 897,
        "AC": 244,
        "PB": "Over £650k",
        "PBR": 27
    },
    {
        "UID": 633,
        "OR": 331,
        "SN": "Princes Risborough",
        "PE": 449,
        "QL": 1126,
        "AC": 151,
        "PB": "Over £650k",
        "PBR": 28
    },
    {
        "UID": 634,
        "OR": 355,
        "SN": "Hounslow",
        "PE": 582,
        "QL": 738,
        "AC": 290,
        "PB": "Over £650k",
        "PBR": 29
    },
    {
        "UID": 635,
        "OR": 369,
        "SN": "Esher",
        "PE": 299,
        "QL": 1231,
        "AC": 251,
        "PB": "Over £650k",
        "PBR": 30
    },
    {
        "UID": 636,
        "OR": 374,
        "SN": "St Albans",
        "PE": 606,
        "QL": 495,
        "AC": 397,
        "PB": "Over £650k",
        "PBR": 31
    },
    {
        "UID": 637,
        "OR": 379,
        "SN": "Greenwich",
        "PE": 436,
        "QL": 1225,
        "AC": 163,
        "PB": "Over £650k",
        "PBR": 32
    },
    {
        "UID": 638,
        "OR": 381,
        "SN": "Long Crendon",
        "PE": 1041,
        "QL": 1143,
        "AC": 26,
        "PB": "Over £650k",
        "PBR": 33
    },
    {
        "UID": 639,
        "OR": 386,
        "SN": "Bramley",
        "PE": 152,
        "QL": 1234,
        "AC": 393,
        "PB": "Over £650k",
        "PBR": 34
    },
    {
        "UID": 640,
        "OR": 387,
        "SN": "Wheathampstead",
        "PE": 332,
        "QL": 560,
        "AC": 547,
        "PB": "Over £650k",
        "PBR": 35
    },
    {
        "UID": 641,
        "OR": 394,
        "SN": "Staines",
        "PE": 426,
        "QL": 574,
        "AC": 459,
        "PB": "Over £650k",
        "PBR": 36
    },
    {
        "UID": 642,
        "OR": 434,
        "SN": "Haringey",
        "PE": 1045,
        "QL": 807,
        "AC": 113,
        "PB": "Over £650k",
        "PBR": 37
    },
    {
        "UID": 643,
        "OR": 434,
        "SN": "Guildford",
        "PE": 114,
        "QL": 1346,
        "AC": 327,
        "PB": "Over £650k",
        "PBR": 37
    },
    {
        "UID": 644,
        "OR": 437,
        "SN": "Hitchin",
        "PE": 437,
        "QL": 1092,
        "AC": 303,
        "PB": "Over £650k",
        "PBR": 39
    },
    {
        "UID": 645,
        "OR": 438,
        "SN": "Kensington and Chelsea",
        "PE": 871,
        "QL": 1255,
        "AC": 66,
        "PB": "Over £650k",
        "PBR": 40
    },
    {
        "UID": 646,
        "OR": 441,
        "SN": "Maidenhead",
        "PE": 409,
        "QL": 1009,
        "AC": 360,
        "PB": "Over £650k",
        "PBR": 41
    },
    {
        "UID": 647,
        "OR": 451,
        "SN": "Watford",
        "PE": 392,
        "QL": 752,
        "AC": 512,
        "PB": "Over £650k",
        "PBR": 42
    },
    {
        "UID": 648,
        "OR": 454,
        "SN": "Hillingdon",
        "PE": 353,
        "QL": 466,
        "AC": 700,
        "PB": "Over £650k",
        "PBR": 43
    },
    {
        "UID": 649,
        "OR": 455,
        "SN": "Newham",
        "PE": 631,
        "QL": 1193,
        "AC": 181,
        "PB": "Over £650k",
        "PBR": 44
    },
    {
        "UID": 650,
        "OR": 460,
        "SN": "Wandsworth",
        "PE": 662,
        "QL": 1292,
        "AC": 104,
        "PB": "Over £650k",
        "PBR": 45
    },
    {
        "UID": 651,
        "OR": 481,
        "SN": "Weybridge",
        "PE": 324,
        "QL": 981,
        "AC": 530,
        "PB": "Over £650k",
        "PBR": 46
    },
    {
        "UID": 652,
        "OR": 484,
        "SN": "Walton-on-Thames",
        "PE": 423,
        "QL": 604,
        "AC": 612,
        "PB": "Over £650k",
        "PBR": 47
    },
    {
        "UID": 653,
        "OR": 494,
        "SN": "Woking",
        "PE": 279,
        "QL": 638,
        "AC": 729,
        "PB": "Over £650k",
        "PBR": 48
    },
    {
        "UID": 654,
        "OR": 502,
        "SN": "Lewisham",
        "PE": 732,
        "QL": 1218,
        "AC": 165,
        "PB": "Over £650k",
        "PBR": 49
    },
    {
        "UID": 655,
        "OR": 507,
        "SN": "Tring",
        "PE": 449,
        "QL": 614,
        "AC": 618,
        "PB": "Over £650k",
        "PBR": 50
    },
    {
        "UID": 656,
        "OR": 510,
        "SN": "Elstead",
        "PE": 143,
        "QL": 1153,
        "AC": 659,
        "PB": "Over £650k",
        "PBR": 51
    },
    {
        "UID": 657,
        "OR": 510,
        "SN": "Leatherhead",
        "PE": 191,
        "QL": 1151,
        "AC": 597,
        "PB": "Over £650k",
        "PBR": 51
    },
    {
        "UID": 658,
        "OR": 510,
        "SN": "Ware",
        "PE": 588,
        "QL": 1338,
        "AC": 134,
        "PB": "Over £650k",
        "PBR": 51
    },
    {
        "UID": 659,
        "OR": 513,
        "SN": "Bromley",
        "PE": 729,
        "QL": 440,
        "AC": 541,
        "PB": "Over £650k",
        "PBR": 54
    },
    {
        "UID": 660,
        "OR": 533,
        "SN": "Amersham",
        "PE": 449,
        "QL": 1262,
        "AC": 310,
        "PB": "Over £650k",
        "PBR": 55
    },
    {
        "UID": 661,
        "OR": 542,
        "SN": "Brent",
        "PE": 739,
        "QL": 704,
        "AC": 423,
        "PB": "Over £650k",
        "PBR": 56
    },
    {
        "UID": 662,
        "OR": 560,
        "SN": "Richmond upon Thames",
        "PE": 394,
        "QL": 1311,
        "AC": 296,
        "PB": "Over £650k",
        "PBR": 57
    },
    {
        "UID": 663,
        "OR": 566,
        "SN": "Barnet",
        "PE": 918,
        "QL": 495,
        "AC": 465,
        "PB": "Over £650k",
        "PBR": 58
    },
    {
        "UID": 664,
        "OR": 570,
        "SN": "East Horsley",
        "PE": 449,
        "QL": 1084,
        "AC": 477,
        "PB": "Over £650k",
        "PBR": 59
    },
    {
        "UID": 665,
        "OR": 572,
        "SN": "Stoke Poges",
        "PE": 971,
        "QL": 659,
        "AC": 356,
        "PB": "Over £650k",
        "PBR": 60
    },
    {
        "UID": 666,
        "OR": 573,
        "SN": "Datchet",
        "PE": 390,
        "QL": 771,
        "AC": 698,
        "PB": "Over £650k",
        "PBR": 61
    },
    {
        "UID": 667,
        "OR": 591,
        "SN": "Shenley",
        "PE": 1108,
        "QL": 11,
        "AC": 936,
        "PB": "Over £650k",
        "PBR": 62
    },
    {
        "UID": 668,
        "OR": 606,
        "SN": "Chertsey",
        "PE": 630,
        "QL": 678,
        "AC": 626,
        "PB": "Over £650k",
        "PBR": 63
    },
    {
        "UID": 669,
        "OR": 613,
        "SN": "Cobham (Elmbridge)",
        "PE": 416,
        "QL": 1193,
        "AC": 492,
        "PB": "Over £650k",
        "PBR": 64
    },
    {
        "UID": 670,
        "OR": 614,
        "SN": "Ealing",
        "PE": 618,
        "QL": 1273,
        "AC": 323,
        "PB": "Over £650k",
        "PBR": 65
    },
    {
        "UID": 671,
        "OR": 655,
        "SN": "Egham",
        "PE": 991,
        "QL": 654,
        "AC": 442,
        "PB": "Over £650k",
        "PBR": 66
    },
    {
        "UID": 672,
        "OR": 657,
        "SN": "Ewell",
        "PE": 411,
        "QL": 964,
        "AC": 707,
        "PB": "Over £650k",
        "PBR": 67
    },
    {
        "UID": 673,
        "OR": 703,
        "SN": "Kingston upon Thames",
        "PE": 540,
        "QL": 1287,
        "AC": 475,
        "PB": "Over £650k",
        "PBR": 68
    },
    {
        "UID": 674,
        "OR": 707,
        "SN": "Harrow",
        "PE": 706,
        "QL": 835,
        "AC": 646,
        "PB": "Over £650k",
        "PBR": 69
    },
    {
        "UID": 675,
        "OR": 715,
        "SN": "Harpenden",
        "PE": 287,
        "QL": 908,
        "AC": 925,
        "PB": "Over £650k",
        "PBR": 70
    },
    {
        "UID": 676,
        "OR": 719,
        "SN": "Bushey",
        "PE": 665,
        "QL": 977,
        "AC": 614,
        "PB": "Over £650k",
        "PBR": 71
    },
    {
        "UID": 677,
        "OR": 774,
        "SN": "Twyford (Wokingham)",
        "PE": 301,
        "QL": 1357,
        "AC": 513,
        "PB": "Over £650k",
        "PBR": 72
    },
    {
        "UID": 678,
        "OR": 781,
        "SN": "Chorleywood",
        "PE": 183,
        "QL": 1238,
        "AC": 906,
        "PB": "Over £650k",
        "PBR": 73
    },
    {
        "UID": 679,
        "OR": 793,
        "SN": "Rickmansworth",
        "PE": 178,
        "QL": 1180,
        "AC": 977,
        "PB": "Over £650k",
        "PBR": 74
    },
    {
        "UID": 680,
        "OR": 811,
        "SN": "Chobham",
        "PE": 1082,
        "QL": 637,
        "AC": 584,
        "PB": "Over £650k",
        "PBR": 75
    },
    {
        "UID": 681,
        "OR": 815,
        "SN": "Iver Heath",
        "PE": 745,
        "QL": 767,
        "AC": 799,
        "PB": "Over £650k",
        "PBR": 76
    },
    {
        "UID": 682,
        "OR": 838,
        "SN": "Enfield",
        "PE": 954,
        "QL": 456,
        "AC": 837,
        "PB": "Over £650k",
        "PBR": 77
    },
    {
        "UID": 683,
        "OR": 847,
        "SN": "Epsom",
        "PE": 841,
        "QL": 983,
        "AC": 679,
        "PB": "Over £650k",
        "PBR": 78
    },
    {
        "UID": 684,
        "OR": 848,
        "SN": "Hartley Wintney",
        "PE": 1093,
        "QL": 397,
        "AC": 766,
        "PB": "Over £650k",
        "PBR": 79
    },
    {
        "UID": 685,
        "OR": 881,
        "SN": "Ludgershall (Wiltshire)",
        "PE": 449,
        "QL": 1019,
        "AC": 955,
        "PB": "Over £650k",
        "PBR": 80
    },
    {
        "UID": 686,
        "OR": 895,
        "SN": "Warlingham",
        "PE": 668,
        "QL": 615,
        "AC": 1018,
        "PB": "Over £650k",
        "PBR": 81
    },
    {
        "UID": 687,
        "OR": 937,
        "SN": "Sutton",
        "PE": 365,
        "QL": 989,
        "AC": 1096,
        "PB": "Over £650k",
        "PBR": 82
    },
    {
        "UID": 688,
        "OR": 945,
        "SN": "Redbridge",
        "PE": 949,
        "QL": 580,
        "AC": 910,
        "PB": "Over £650k",
        "PBR": 83
    },
    {
        "UID": 689,
        "OR": 976,
        "SN": "Harefield",
        "PE": 320,
        "QL": 1021,
        "AC": 1161,
        "PB": "Over £650k",
        "PBR": 84
    },
    {
        "UID": 690,
        "OR": 978,
        "SN": "Walter's Ash",
        "PE": 449,
        "QL": 1118,
        "AC": 1016,
        "PB": "Over £650k",
        "PBR": 85
    },
    {
        "UID": 691,
        "OR": 980,
        "SN": "Epping",
        "PE": 1294,
        "QL": 821,
        "AC": 522,
        "PB": "Over £650k",
        "PBR": 86
    },
    {
        "UID": 692,
        "OR": 1006,
        "SN": "Merton",
        "PE": 699,
        "QL": 1320,
        "AC": 675,
        "PB": "Over £650k",
        "PBR": 87
    },
    {
        "UID": 693,
        "OR": 1021,
        "SN": "Chalfont St Giles",
        "PE": 449,
        "QL": 1330,
        "AC": 829,
        "PB": "Over £650k",
        "PBR": 88
    },
    {
        "UID": 694,
        "OR": 1030,
        "SN": "Waltham Forest",
        "PE": 1015,
        "QL": 1206,
        "AC": 652,
        "PB": "Over £650k",
        "PBR": 89
    },
    {
        "UID": 695,
        "OR": 1055,
        "SN": "Chigwell",
        "PE": 1252,
        "QL": 604,
        "AC": 758,
        "PB": "Over £650k",
        "PBR": 90
    },
    {
        "UID": 696,
        "OR": 1095,
        "SN": "Brentwood",
        "PE": 1227,
        "QL": 413,
        "AC": 979,
        "PB": "Over £650k",
        "PBR": 91
    },
    {
        "UID": 697,
        "OR": 1126,
        "SN": "Radlett",
        "PE": 1047,
        "QL": 929,
        "AC": 975,
        "PB": "Over £650k",
        "PBR": 92
    },
    {
        "UID": 698,
        "OR": 1130,
        "SN": "Borehamwood",
        "PE": 1100,
        "QL": 517,
        "AC": 1103,
        "PB": "Over £650k",
        "PBR": 93
    },
    {
        "UID": 699,
        "OR": 1133,
        "SN": "Seer Green",
        "PE": 449,
        "QL": 1279,
        "AC": 1137,
        "PB": "Over £650k",
        "PBR": 94
    },
    {
        "UID": 700,
        "OR": 1153,
        "SN": "Marlow Bottom",
        "PE": 449,
        "QL": 1049,
        "AC": 1251,
        "PB": "Over £650k",
        "PBR": 95
    },
    {
        "UID": 701,
        "OR": 1167,
        "SN": "Banstead",
        "PE": 847,
        "QL": 842,
        "AC": 1200,
        "PB": "Over £650k",
        "PBR": 96
    },
    {
        "UID": 702,
        "OR": 1172,
        "SN": "Ashtead",
        "PE": 752,
        "QL": 1333,
        "AC": 939,
        "PB": "Over £650k",
        "PBR": 97
    },
    {
        "UID": 703,
        "OR": 1179,
        "SN": "Ottershaw",
        "PE": 1091,
        "QL": 973,
        "AC": 1045,
        "PB": "Over £650k",
        "PBR": 98
    },
    {
        "UID": 704,
        "OR": 1234,
        "SN": "Ashford",
        "PE": 702,
        "QL": 812,
        "AC": 1322,
        "PB": "Over £650k",
        "PBR": 99
    },
    {
        "UID": 705,
        "OR": 1259,
        "SN": "Potters Bar",
        "PE": 1199,
        "QL": 793,
        "AC": 1188,
        "PB": "Over £650k",
        "PBR": 100
    },
    {
        "UID": 706,
        "OR": 1262,
        "SN": "Loughton",
        "PE": 1112,
        "QL": 775,
        "AC": 1230,
        "PB": "Over £650k",
        "PBR": 101
    },
    {
        "UID": 707,
        "OR": 1276,
        "SN": "Welham Green",
        "PE": 1169,
        "QL": 1342,
        "AC": 880,
        "PB": "Over £650k",
        "PBR": 102
    },
    {
        "UID": 708,
        "OR": 1282,
        "SN": "North Weald Bassett",
        "PE": 1305,
        "QL": 830,
        "AC": 1153,
        "PB": "Over £650k",
        "PBR": 103
    },
    {
        "UID": 709,
        "OR": 1288,
        "SN": "How Wood",
        "PE": 1020,
        "QL": 1064,
        "AC": 1245,
        "PB": "Over £650k",
        "PBR": 104
    },
    {
        "UID": 710,
        "OR": 1296,
        "SN": "Northwood",
        "PE": 881,
        "QL": 1207,
        "AC": 1264,
        "PB": "Over £650k",
        "PBR": 105
    },
    {
        "UID": 711,
        "OR": 1366,
        "SN": "Cuffley",
        "PE": 1229,
        "QL": 1148,
        "AC": 1356,
        "PB": "Over £650k",
        "PBR": 106
    },
    {
        "UID": 712,
        "OR": 4,
        "SN": "Ilfracombe",
        "PE": 65,
        "QL": 66,
        "AC": 69,
        "PB": "Up to £350k",
        "PBR": 1
    },
    {
        "UID": 713,
        "OR": 8,
        "SN": "Settle",
        "PE": 22,
        "QL": 847,
        "AC": 9,
        "PB": "Up to £350k",
        "PBR": 2
    },
    {
        "UID": 714,
        "OR": 17,
        "SN": "Newport (Isle of Wight)",
        "PE": 252,
        "QL": 83,
        "AC": 47,
        "PB": "Up to £350k",
        "PBR": 3
    },
    {
        "UID": 715,
        "OR": 25,
        "SN": "Scarborough",
        "PE": 192,
        "QL": 137,
        "AC": 67,
        "PB": "Up to £350k",
        "PBR": 4
    },
    {
        "UID": 716,
        "OR": 27,
        "SN": "Conwy",
        "PE": 76,
        "QL": 264,
        "AC": 96,
        "PB": "Up to £350k",
        "PBR": 5
    },
    {
        "UID": 717,
        "OR": 37,
        "SN": "Lancaster",
        "PE": 95,
        "QL": 447,
        "AC": 73,
        "PB": "Up to £350k",
        "PBR": 6
    },
    {
        "UID": 718,
        "OR": 40,
        "SN": "Brecon",
        "PE": 4,
        "QL": 542,
        "AC": 146,
        "PB": "Up to £350k",
        "PBR": 7
    },
    {
        "UID": 719,
        "OR": 43,
        "SN": "Alnwick",
        "PE": 600,
        "QL": 97,
        "AC": 34,
        "PB": "Up to £350k",
        "PBR": 8
    },
    {
        "UID": 720,
        "OR": 43,
        "SN": "Bethesda",
        "PE": 11,
        "QL": 222,
        "AC": 314,
        "PB": "Up to £350k",
        "PBR": 8
    },
    {
        "UID": 721,
        "OR": 45,
        "SN": "Cardigan",
        "PE": 219,
        "QL": 24,
        "AC": 289,
        "PB": "Up to £350k",
        "PBR": 10
    },
    {
        "UID": 722,
        "OR": 47,
        "SN": "Haworth",
        "PE": 670,
        "QL": 44,
        "AC": 53,
        "PB": "Up to £350k",
        "PBR": 11
    },
    {
        "UID": 723,
        "OR": 48,
        "SN": "Luddenden Foot",
        "PE": 374,
        "QL": 5,
        "AC": 332,
        "PB": "Up to £350k",
        "PBR": 12
    },
    {
        "UID": 724,
        "OR": 49,
        "SN": "Carnforth",
        "PE": 8,
        "QL": 87,
        "AC": 463,
        "PB": "Up to £350k",
        "PBR": 13
    },
    {
        "UID": 725,
        "OR": 51,
        "SN": "Huddersfield",
        "PE": 249,
        "QL": 103,
        "AC": 147,
        "PB": "Up to £350k",
        "PBR": 14
    },
    {
        "UID": 726,
        "OR": 52,
        "SN": "King's Lynn",
        "PE": 104,
        "QL": 298,
        "AC": 156,
        "PB": "Up to £350k",
        "PBR": 15
    },
    {
        "UID": 727,
        "OR": 54,
        "SN": "Llandudno",
        "PE": 82,
        "QL": 150,
        "AC": 297,
        "PB": "Up to £350k",
        "PBR": 16
    },
    {
        "UID": 728,
        "OR": 56,
        "SN": "Llanrwst",
        "PE": 123,
        "QL": 479,
        "AC": 100,
        "PB": "Up to £350k",
        "PBR": 17
    },
    {
        "UID": 729,
        "OR": 57,
        "SN": "Great Yarmouth",
        "PE": 50,
        "QL": 611,
        "AC": 137,
        "PB": "Up to £350k",
        "PBR": 18
    },
    {
        "UID": 730,
        "OR": 63,
        "SN": "Evesham",
        "PE": 254,
        "QL": 16,
        "AC": 371,
        "PB": "Up to £350k",
        "PBR": 19
    },
    {
        "UID": 731,
        "OR": 68,
        "SN": "Caton",
        "PE": 16,
        "QL": 1060,
        "AC": 91,
        "PB": "Up to £350k",
        "PBR": 20
    },
    {
        "UID": 732,
        "OR": 73,
        "SN": "Pwllheli",
        "PE": 101,
        "QL": 197,
        "AC": 284,
        "PB": "Up to £350k",
        "PBR": 21
    },
    {
        "UID": 733,
        "OR": 82,
        "SN": "Wolsingham",
        "PE": 59,
        "QL": 132,
        "AC": 444,
        "PB": "Up to £350k",
        "PBR": 22
    },
    {
        "UID": 734,
        "OR": 84,
        "SN": "Barmouth",
        "PE": 60,
        "QL": 301,
        "AC": 329,
        "PB": "Up to £350k",
        "PBR": 23
    },
    {
        "UID": 735,
        "OR": 91,
        "SN": "Sowerby Bridge",
        "PE": 418,
        "QL": 42,
        "AC": 233,
        "PB": "Up to £350k",
        "PBR": 24
    },
    {
        "UID": 736,
        "OR": 92,
        "SN": "Ryde",
        "PE": 125,
        "QL": 159,
        "AC": 342,
        "PB": "Up to £350k",
        "PBR": 25
    },
    {
        "UID": 737,
        "OR": 103,
        "SN": "Carlisle",
        "PE": 298,
        "QL": 133,
        "AC": 244,
        "PB": "Up to £350k",
        "PBR": 26
    },
    {
        "UID": 738,
        "OR": 109,
        "SN": "Kington",
        "PE": 364,
        "QL": 335,
        "AC": 105,
        "PB": "Up to £350k",
        "PBR": 27
    },
    {
        "UID": 739,
        "OR": 112,
        "SN": "Porthmadog",
        "PE": 79,
        "QL": 233,
        "AC": 406,
        "PB": "Up to £350k",
        "PBR": 28
    },
    {
        "UID": 740,
        "OR": 112,
        "SN": "Horncastle",
        "PE": 173,
        "QL": 1113,
        "AC": 42,
        "PB": "Up to £350k",
        "PBR": 28
    },
    {
        "UID": 741,
        "OR": 114,
        "SN": "Pembroke Dock",
        "PE": 235,
        "QL": 208,
        "AC": 271,
        "PB": "Up to £350k",
        "PBR": 30
    },
    {
        "UID": 742,
        "OR": 115,
        "SN": "Saltburn-by-the-Sea",
        "PE": 28,
        "QL": 356,
        "AC": 455,
        "PB": "Up to £350k",
        "PBR": 31
    },
    {
        "UID": 743,
        "OR": 119,
        "SN": "Hexham",
        "PE": 339,
        "QL": 387,
        "AC": 124,
        "PB": "Up to £350k",
        "PBR": 32
    },
    {
        "UID": 744,
        "OR": 120,
        "SN": "Holyhead",
        "PE": 55,
        "QL": 83,
        "AC": 662,
        "PB": "Up to £350k",
        "PBR": 33
    },
    {
        "UID": 745,
        "OR": 121,
        "SN": "Plymouth",
        "PE": 166,
        "QL": 709,
        "AC": 136,
        "PB": "Up to £350k",
        "PBR": 34
    },
    {
        "UID": 746,
        "OR": 123,
        "SN": "Ellesmere",
        "PE": 326,
        "QL": 1172,
        "AC": 14,
        "PB": "Up to £350k",
        "PBR": 35
    },
    {
        "UID": 747,
        "OR": 124,
        "SN": "Halifax",
        "PE": 645,
        "QL": 35,
        "AC": 229,
        "PB": "Up to £350k",
        "PBR": 36
    },
    {
        "UID": 748,
        "OR": 124,
        "SN": "Langley Park",
        "PE": 341,
        "QL": 7,
        "AC": 627,
        "PB": "Up to £350k",
        "PBR": 36
    },
    {
        "UID": 749,
        "OR": 126,
        "SN": "Haverfordwest",
        "PE": 226,
        "QL": 136,
        "AC": 364,
        "PB": "Up to £350k",
        "PBR": 38
    },
    {
        "UID": 750,
        "OR": 127,
        "SN": "Cleobury Mortimer",
        "PE": 213,
        "QL": 984,
        "AC": 65,
        "PB": "Up to £350k",
        "PBR": 39
    },
    {
        "UID": 751,
        "OR": 138,
        "SN": "Meltham",
        "PE": 656,
        "QL": 29,
        "AC": 274,
        "PB": "Up to £350k",
        "PBR": 40
    },
    {
        "UID": 752,
        "OR": 141,
        "SN": "Clitheroe",
        "PE": 323,
        "QL": 897,
        "AC": 59,
        "PB": "Up to £350k",
        "PBR": 41
    },
    {
        "UID": 753,
        "OR": 143,
        "SN": "Mytholmroyd",
        "PE": 349,
        "QL": 20,
        "AC": 533,
        "PB": "Up to £350k",
        "PBR": 42
    },
    {
        "UID": 754,
        "OR": 148,
        "SN": "Blaenavon",
        "PE": 718,
        "QL": 68,
        "AC": 175,
        "PB": "Up to £350k",
        "PBR": 43
    },
    {
        "UID": 755,
        "OR": 152,
        "SN": "Merthyr Tydfil",
        "PE": 49,
        "QL": 415,
        "AC": 473,
        "PB": "Up to £350k",
        "PBR": 44
    },
    {
        "UID": 756,
        "OR": 153,
        "SN": "Cockermouth",
        "PE": 81,
        "QL": 1134,
        "AC": 126,
        "PB": "Up to £350k",
        "PBR": 45
    },
    {
        "UID": 757,
        "OR": 154,
        "SN": "Richmond",
        "PE": 144,
        "QL": 853,
        "AC": 168,
        "PB": "Up to £350k",
        "PBR": 46
    },
    {
        "UID": 758,
        "OR": 160,
        "SN": "Maryport",
        "PE": 36,
        "QL": 236,
        "AC": 669,
        "PB": "Up to £350k",
        "PBR": 47
    },
    {
        "UID": 759,
        "OR": 162,
        "SN": "Weston",
        "PE": 395,
        "QL": 463,
        "AC": 132,
        "PB": "Up to £350k",
        "PBR": 48
    },
    {
        "UID": 760,
        "OR": 165,
        "SN": "Appleby-in-Westmorland",
        "PE": 121,
        "QL": 1102,
        "AC": 120,
        "PB": "Up to £350k",
        "PBR": 49
    },
    {
        "UID": 761,
        "OR": 166,
        "SN": "Burnley",
        "PE": 164,
        "QL": 385,
        "AC": 339,
        "PB": "Up to £350k",
        "PBR": 50
    },
    {
        "UID": 762,
        "OR": 168,
        "SN": "New Mills",
        "PE": 108,
        "QL": 1004,
        "AC": 162,
        "PB": "Up to £350k",
        "PBR": 51
    },
    {
        "UID": 763,
        "OR": 169,
        "SN": "Welshpool",
        "PE": 244,
        "QL": 296,
        "AC": 321,
        "PB": "Up to £350k",
        "PBR": 52
    },
    {
        "UID": 764,
        "OR": 171,
        "SN": "Kidwelly",
        "PE": 220,
        "QL": 575,
        "AC": 212,
        "PB": "Up to £350k",
        "PBR": 53
    },
    {
        "UID": 765,
        "OR": 173,
        "SN": "Bridlington",
        "PE": 115,
        "QL": 217,
        "AC": 535,
        "PB": "Up to £350k",
        "PBR": 54
    },
    {
        "UID": 766,
        "OR": 176,
        "SN": "Bridgwater",
        "PE": 218,
        "QL": 754,
        "AC": 166,
        "PB": "Up to £350k",
        "PBR": 55
    },
    {
        "UID": 767,
        "OR": 177,
        "SN": "Preston",
        "PE": 363,
        "QL": 77,
        "AC": 411,
        "PB": "Up to £350k",
        "PBR": 56
    },
    {
        "UID": 768,
        "OR": 182,
        "SN": "Chard",
        "PE": 442,
        "QL": 56,
        "AC": 403,
        "PB": "Up to £350k",
        "PBR": 57
    },
    {
        "UID": 769,
        "OR": 184,
        "SN": "Skipton",
        "PE": 73,
        "QL": 1120,
        "AC": 184,
        "PB": "Up to £350k",
        "PBR": 58
    },
    {
        "UID": 770,
        "OR": 185,
        "SN": "Narberth",
        "PE": 823,
        "QL": 392,
        "AC": 58,
        "PB": "Up to £350k",
        "PBR": 59
    },
    {
        "UID": 771,
        "OR": 186,
        "SN": "Watchet",
        "PE": 168,
        "QL": 287,
        "AC": 439,
        "PB": "Up to £350k",
        "PBR": 60
    },
    {
        "UID": 772,
        "OR": 189,
        "SN": "Ashbourne",
        "PE": 709,
        "QL": 980,
        "AC": 16,
        "PB": "Up to £350k",
        "PBR": 61
    },
    {
        "UID": 773,
        "OR": 191,
        "SN": "Bradford",
        "PE": 722,
        "QL": 101,
        "AC": 215,
        "PB": "Up to £350k",
        "PBR": 62
    },
    {
        "UID": 774,
        "OR": 194,
        "SN": "South Molton",
        "PE": 567,
        "QL": 1080,
        "AC": 24,
        "PB": "Up to £350k",
        "PBR": 63
    },
    {
        "UID": 775,
        "OR": 195,
        "SN": "Halton",
        "PE": 107,
        "QL": 1109,
        "AC": 180,
        "PB": "Up to £350k",
        "PBR": 64
    },
    {
        "UID": 776,
        "OR": 198,
        "SN": "Fishguard",
        "PE": 147,
        "QL": 512,
        "AC": 382,
        "PB": "Up to £350k",
        "PBR": 65
    },
    {
        "UID": 777,
        "OR": 203,
        "SN": "Telford",
        "PE": 357,
        "QL": 60,
        "AC": 553,
        "PB": "Up to £350k",
        "PBR": 66
    },
    {
        "UID": 778,
        "OR": 205,
        "SN": "Catterall",
        "PE": 124,
        "QL": 436,
        "AC": 478,
        "PB": "Up to £350k",
        "PBR": 67
    },
    {
        "UID": 779,
        "OR": 206,
        "SN": "Rockwell Green",
        "PE": 723,
        "QL": 96,
        "AC": 267,
        "PB": "Up to £350k",
        "PBR": 68
    },
    {
        "UID": 780,
        "OR": 215,
        "SN": "Swansea",
        "PE": 98,
        "QL": 654,
        "AC": 416,
        "PB": "Up to £350k",
        "PBR": 69
    },
    {
        "UID": 781,
        "OR": 216,
        "SN": "East Ayton",
        "PE": 18,
        "QL": 880,
        "AC": 515,
        "PB": "Up to £350k",
        "PBR": 70
    },
    {
        "UID": 782,
        "OR": 223,
        "SN": "Stourport-on-Severn",
        "PE": 433,
        "QL": 21,
        "AC": 680,
        "PB": "Up to £350k",
        "PBR": 71
    },
    {
        "UID": 783,
        "OR": 224,
        "SN": "Wisbech",
        "PE": 780,
        "QL": 131,
        "AC": 251,
        "PB": "Up to £350k",
        "PBR": 72
    },
    {
        "UID": 784,
        "OR": 226,
        "SN": "Penmaenmawr",
        "PE": 108,
        "QL": 219,
        "AC": 710,
        "PB": "Up to £350k",
        "PBR": 73
    },
    {
        "UID": 785,
        "OR": 228,
        "SN": "Sheerness",
        "PE": 385,
        "QL": 148,
        "AC": 451,
        "PB": "Up to £350k",
        "PBR": 74
    },
    {
        "UID": 786,
        "OR": 229,
        "SN": "Holywell Green",
        "PE": 1003,
        "QL": 47,
        "AC": 244,
        "PB": "Up to £350k",
        "PBR": 75
    },
    {
        "UID": 787,
        "OR": 230,
        "SN": "Keighley",
        "PE": 282,
        "QL": 213,
        "AC": 498,
        "PB": "Up to £350k",
        "PBR": 76
    },
    {
        "UID": 788,
        "OR": 237,
        "SN": "Church",
        "PE": 204,
        "QL": 822,
        "AC": 308,
        "PB": "Up to £350k",
        "PBR": 77
    },
    {
        "UID": 789,
        "OR": 238,
        "SN": "Leek",
        "PE": 417,
        "QL": 1043,
        "AC": 92,
        "PB": "Up to £350k",
        "PBR": 78
    },
    {
        "UID": 790,
        "OR": 239,
        "SN": "Elland",
        "PE": 553,
        "QL": 223,
        "AC": 361,
        "PB": "Up to £350k",
        "PBR": 79
    },
    {
        "UID": 791,
        "OR": 240,
        "SN": "Shifnal",
        "PE": 1005,
        "QL": 40,
        "AC": 279,
        "PB": "Up to £350k",
        "PBR": 80
    },
    {
        "UID": 792,
        "OR": 243,
        "SN": "Rhymney",
        "PE": 539,
        "QL": 70,
        "AC": 541,
        "PB": "Up to £350k",
        "PBR": 81
    },
    {
        "UID": 793,
        "OR": 244,
        "SN": "Netherton",
        "PE": 581,
        "QL": 38,
        "AC": 579,
        "PB": "Up to £350k",
        "PBR": 82
    },
    {
        "UID": 794,
        "OR": 246,
        "SN": "Brierfield",
        "PE": 190,
        "QL": 577,
        "AC": 411,
        "PB": "Up to £350k",
        "PBR": 83
    },
    {
        "UID": 795,
        "OR": 247,
        "SN": "Haltwhistle",
        "PE": 137,
        "QL": 875,
        "AC": 369,
        "PB": "Up to £350k",
        "PBR": 84
    },
    {
        "UID": 796,
        "OR": 248,
        "SN": "Aberdare",
        "PE": 189,
        "QL": 319,
        "AC": 586,
        "PB": "Up to £350k",
        "PBR": 85
    },
    {
        "UID": 797,
        "OR": 250,
        "SN": "Denbigh",
        "PE": 867,
        "QL": 547,
        "AC": 80,
        "PB": "Up to £350k",
        "PBR": 86
    },
    {
        "UID": 798,
        "OR": 251,
        "SN": "Wooler",
        "PE": 100,
        "QL": 591,
        "AC": 545,
        "PB": "Up to £350k",
        "PBR": 87
    },
    {
        "UID": 799,
        "OR": 252,
        "SN": "Great Ayton",
        "PE": 660,
        "QL": 432,
        "AC": 193,
        "PB": "Up to £350k",
        "PBR": 88
    },
    {
        "UID": 800,
        "OR": 255,
        "SN": "Cullingworth",
        "PE": 1094,
        "QL": 37,
        "AC": 255,
        "PB": "Up to £350k",
        "PBR": 89
    },
    {
        "UID": 801,
        "OR": 256,
        "SN": "Durham",
        "PE": 634,
        "QL": 528,
        "AC": 166,
        "PB": "Up to £350k",
        "PBR": 90
    },
    {
        "UID": 802,
        "OR": 258,
        "SN": "Gunnislake",
        "PE": 30,
        "QL": 1066,
        "AC": 490,
        "PB": "Up to £350k",
        "PBR": 91
    },
    {
        "UID": 803,
        "OR": 263,
        "SN": "Bodmin",
        "PE": 877,
        "QL": 438,
        "AC": 115,
        "PB": "Up to £350k",
        "PBR": 92
    },
    {
        "UID": 804,
        "OR": 264,
        "SN": "Crewkerne",
        "PE": 681,
        "QL": 678,
        "AC": 107,
        "PB": "Up to £350k",
        "PBR": 93
    },
    {
        "UID": 805,
        "OR": 265,
        "SN": "Yeovil",
        "PE": 623,
        "QL": 46,
        "AC": 556,
        "PB": "Up to £350k",
        "PBR": 94
    },
    {
        "UID": 806,
        "OR": 275,
        "SN": "Great Torrington",
        "PE": 620,
        "QL": 969,
        "AC": 93,
        "PB": "Up to £350k",
        "PBR": 95
    },
    {
        "UID": 807,
        "OR": 278,
        "SN": "Newport",
        "PE": 373,
        "QL": 648,
        "AC": 287,
        "PB": "Up to £350k",
        "PBR": 96
    },
    {
        "UID": 808,
        "OR": 280,
        "SN": "Loftus",
        "PE": 705,
        "QL": 31,
        "AC": 591,
        "PB": "Up to £350k",
        "PBR": 97
    },
    {
        "UID": 809,
        "OR": 282,
        "SN": "Penrith",
        "PE": 596,
        "QL": 1031,
        "AC": 102,
        "PB": "Up to £350k",
        "PBR": 98
    },
    {
        "UID": 810,
        "OR": 282,
        "SN": "Llanidloes",
        "PE": 444,
        "QL": 787,
        "AC": 226,
        "PB": "Up to £350k",
        "PBR": 98
    },
    {
        "UID": 811,
        "OR": 284,
        "SN": "Leeds",
        "PE": 592,
        "QL": 327,
        "AC": 358,
        "PB": "Up to £350k",
        "PBR": 100
    },
    {
        "UID": 812,
        "OR": 288,
        "SN": "Guisborough",
        "PE": 449,
        "QL": 839,
        "AC": 215,
        "PB": "Up to £350k",
        "PBR": 101
    },
    {
        "UID": 813,
        "OR": 289,
        "SN": "New Tredegar",
        "PE": 227,
        "QL": 63,
        "AC": 881,
        "PB": "Up to £350k",
        "PBR": 102
    },
    {
        "UID": 814,
        "OR": 290,
        "SN": "Whitchurch (Shropshire)",
        "PE": 1070,
        "QL": 369,
        "AC": 95,
        "PB": "Up to £350k",
        "PBR": 103
    },
    {
        "UID": 815,
        "OR": 291,
        "SN": "Northwich",
        "PE": 648,
        "QL": 467,
        "AC": 259,
        "PB": "Up to £350k",
        "PBR": 104
    },
    {
        "UID": 816,
        "OR": 292,
        "SN": "Darlington",
        "PE": 855,
        "QL": 39,
        "AC": 480,
        "PB": "Up to £350k",
        "PBR": 105
    },
    {
        "UID": 817,
        "OR": 293,
        "SN": "Liverpool",
        "PE": 1111,
        "QL": 272,
        "AC": 111,
        "PB": "Up to £350k",
        "PBR": 106
    },
    {
        "UID": 818,
        "OR": 294,
        "SN": "Lowestoft",
        "PE": 110,
        "QL": 693,
        "AC": 604,
        "PB": "Up to £350k",
        "PBR": 107
    },
    {
        "UID": 819,
        "OR": 295,
        "SN": "Rochdale",
        "PE": 393,
        "QL": 510,
        "AC": 383,
        "PB": "Up to £350k",
        "PBR": 108
    },
    {
        "UID": 820,
        "OR": 296,
        "SN": "Dover",
        "PE": 228,
        "QL": 728,
        "AC": 429,
        "PB": "Up to £350k",
        "PBR": 109
    },
    {
        "UID": 821,
        "OR": 301,
        "SN": "Amlwch",
        "PE": 205,
        "QL": 785,
        "AC": 448,
        "PB": "Up to £350k",
        "PBR": 110
    },
    {
        "UID": 822,
        "OR": 303,
        "SN": "Grange-over-Sands",
        "PE": 133,
        "QL": 1117,
        "AC": 377,
        "PB": "Up to £350k",
        "PBR": 111
    },
    {
        "UID": 823,
        "OR": 307,
        "SN": "Mickletown",
        "PE": 1021,
        "QL": 9,
        "AC": 610,
        "PB": "Up to £350k",
        "PBR": 112
    },
    {
        "UID": 824,
        "OR": 308,
        "SN": "Launceston",
        "PE": 873,
        "QL": 620,
        "AC": 122,
        "PB": "Up to £350k",
        "PBR": 113
    },
    {
        "UID": 825,
        "OR": 309,
        "SN": "Risca",
        "PE": 261,
        "QL": 514,
        "AC": 528,
        "PB": "Up to £350k",
        "PBR": 114
    },
    {
        "UID": 826,
        "OR": 313,
        "SN": "Sunderland",
        "PE": 303,
        "QL": 953,
        "AC": 311,
        "PB": "Up to £350k",
        "PBR": 115
    },
    {
        "UID": 827,
        "OR": 315,
        "SN": "Bingley",
        "PE": 231,
        "QL": 633,
        "AC": 499,
        "PB": "Up to £350k",
        "PBR": 116
    },
    {
        "UID": 828,
        "OR": 318,
        "SN": "Bromyard",
        "PE": 955,
        "QL": 193,
        "AC": 281,
        "PB": "Up to £350k",
        "PBR": 117
    },
    {
        "UID": 829,
        "OR": 323,
        "SN": "Shipley",
        "PE": 294,
        "QL": 884,
        "AC": 350,
        "PB": "Up to £350k",
        "PBR": 118
    },
    {
        "UID": 830,
        "OR": 324,
        "SN": "Leiston",
        "PE": 677,
        "QL": 230,
        "AC": 402,
        "PB": "Up to £350k",
        "PBR": 119
    },
    {
        "UID": 831,
        "OR": 327,
        "SN": "Dewsbury",
        "PE": 655,
        "QL": 167,
        "AC": 484,
        "PB": "Up to £350k",
        "PBR": 120
    },
    {
        "UID": 832,
        "OR": 328,
        "SN": "Stokesley",
        "PE": 820,
        "QL": 495,
        "AC": 206,
        "PB": "Up to £350k",
        "PBR": 121
    },
    {
        "UID": 833,
        "OR": 329,
        "SN": "Mirfield",
        "PE": 402,
        "QL": 129,
        "AC": 703,
        "PB": "Up to £350k",
        "PBR": 122
    },
    {
        "UID": 834,
        "OR": 333,
        "SN": "Brighouse",
        "PE": 628,
        "QL": 174,
        "AC": 517,
        "PB": "Up to £350k",
        "PBR": 123
    },
    {
        "UID": 835,
        "OR": 336,
        "SN": "Longtown",
        "PE": 243,
        "QL": 259,
        "AC": 765,
        "PB": "Up to £350k",
        "PBR": 124
    },
    {
        "UID": 836,
        "OR": 341,
        "SN": "Saltash",
        "PE": 105,
        "QL": 958,
        "AC": 568,
        "PB": "Up to £350k",
        "PBR": 125
    },
    {
        "UID": 837,
        "OR": 343,
        "SN": "Flamborough",
        "PE": 449,
        "QL": 460,
        "AC": 443,
        "PB": "Up to £350k",
        "PBR": 126
    },
    {
        "UID": 838,
        "OR": 344,
        "SN": "St Blazey",
        "PE": 449,
        "QL": 262,
        "AC": 588,
        "PB": "Up to £350k",
        "PBR": 127
    },
    {
        "UID": 839,
        "OR": 346,
        "SN": "Thornton (Bradford)",
        "PE": 1147,
        "QL": 17,
        "AC": 448,
        "PB": "Up to £350k",
        "PBR": 128
    },
    {
        "UID": 840,
        "OR": 348,
        "SN": "Rhyl",
        "PE": 285,
        "QL": 12,
        "AC": 1139,
        "PB": "Up to £350k",
        "PBR": 129
    },
    {
        "UID": 841,
        "OR": 349,
        "SN": "Coningsby Airfield",
        "PE": 534,
        "QL": 955,
        "AC": 256,
        "PB": "Up to £350k",
        "PBR": 130
    },
    {
        "UID": 842,
        "OR": 351,
        "SN": "Burton upon Trent",
        "PE": 616,
        "QL": 464,
        "AC": 367,
        "PB": "Up to £350k",
        "PBR": 131
    },
    {
        "UID": 843,
        "OR": 352,
        "SN": "Birmingham",
        "PE": 628,
        "QL": 324,
        "AC": 427,
        "PB": "Up to £350k",
        "PBR": 132
    },
    {
        "UID": 844,
        "OR": 353,
        "SN": "Rawtenstall",
        "PE": 353,
        "QL": 647,
        "AC": 426,
        "PB": "Up to £350k",
        "PBR": 133
    },
    {
        "UID": 845,
        "OR": 356,
        "SN": "Gainsborough",
        "PE": 815,
        "QL": 244,
        "AC": 379,
        "PB": "Up to £350k",
        "PBR": 134
    },
    {
        "UID": 846,
        "OR": 360,
        "SN": "Barnsley",
        "PE": 741,
        "QL": 81,
        "AC": 595,
        "PB": "Up to £350k",
        "PBR": 135
    },
    {
        "UID": 847,
        "OR": 362,
        "SN": "East Cowes",
        "PE": 29,
        "QL": 1296,
        "AC": 505,
        "PB": "Up to £350k",
        "PBR": 136
    },
    {
        "UID": 848,
        "OR": 362,
        "SN": "Colne",
        "PE": 146,
        "QL": 867,
        "AC": 602,
        "PB": "Up to £350k",
        "PBR": 136
    },
    {
        "UID": 849,
        "OR": 367,
        "SN": "Blackburn",
        "PE": 224,
        "QL": 333,
        "AC": 778,
        "PB": "Up to £350k",
        "PBR": 138
    },
    {
        "UID": 850,
        "OR": 367,
        "SN": "Llanhilleth",
        "PE": 211,
        "QL": 62,
        "AC": 1051,
        "PB": "Up to £350k",
        "PBR": 138
    },
    {
        "UID": 851,
        "OR": 370,
        "SN": "Stafford",
        "PE": 130,
        "QL": 530,
        "AC": 777,
        "PB": "Up to £350k",
        "PBR": 140
    },
    {
        "UID": 852,
        "OR": 372,
        "SN": "Blaenau Ffestiniog",
        "PE": 679,
        "QL": 94,
        "AC": 619,
        "PB": "Up to £350k",
        "PBR": 141
    },
    {
        "UID": 853,
        "OR": 374,
        "SN": "Queenborough",
        "PE": 385,
        "QL": 104,
        "AC": 816,
        "PB": "Up to £350k",
        "PBR": 142
    },
    {
        "UID": 854,
        "OR": 377,
        "SN": "Pontypridd",
        "PE": 396,
        "QL": 718,
        "AC": 410,
        "PB": "Up to £350k",
        "PBR": 143
    },
    {
        "UID": 855,
        "OR": 380,
        "SN": "Denholme",
        "PE": 1141,
        "QL": 2,
        "AC": 792,
        "PB": "Up to £350k",
        "PBR": 144
    },
    {
        "UID": 856,
        "OR": 384,
        "SN": "Lincoln",
        "PE": 610,
        "QL": 759,
        "AC": 302,
        "PB": "Up to £350k",
        "PBR": 145
    },
    {
        "UID": 857,
        "OR": 387,
        "SN": "Whitehaven",
        "PE": 370,
        "QL": 692,
        "AC": 440,
        "PB": "Up to £350k",
        "PBR": 146
    },
    {
        "UID": 858,
        "OR": 389,
        "SN": "Royston",
        "PE": 632,
        "QL": 122,
        "AC": 659,
        "PB": "Up to £350k",
        "PBR": 147
    },
    {
        "UID": 859,
        "OR": 391,
        "SN": "Cwm",
        "PE": 169,
        "QL": 89,
        "AC": 1064,
        "PB": "Up to £350k",
        "PBR": 148
    },
    {
        "UID": 860,
        "OR": 397,
        "SN": "Cross Hills",
        "PE": 263,
        "QL": 1210,
        "AC": 316,
        "PB": "Up to £350k",
        "PBR": 149
    },
    {
        "UID": 861,
        "OR": 400,
        "SN": "Cleator Moor",
        "PE": 210,
        "QL": 352,
        "AC": 827,
        "PB": "Up to £350k",
        "PBR": 150
    },
    {
        "UID": 862,
        "OR": 402,
        "SN": "Milford Haven",
        "PE": 271,
        "QL": 556,
        "AC": 636,
        "PB": "Up to £350k",
        "PBR": 151
    },
    {
        "UID": 863,
        "OR": 403,
        "SN": "Holywell",
        "PE": 922,
        "QL": 180,
        "AC": 419,
        "PB": "Up to £350k",
        "PBR": 152
    },
    {
        "UID": 864,
        "OR": 405,
        "SN": "Nottingham",
        "PE": 972,
        "QL": 356,
        "AC": 287,
        "PB": "Up to £350k",
        "PBR": 153
    },
    {
        "UID": 865,
        "OR": 406,
        "SN": "Colwyn Bay",
        "PE": 285,
        "QL": 664,
        "AC": 579,
        "PB": "Up to £350k",
        "PBR": 154
    },
    {
        "UID": 866,
        "OR": 410,
        "SN": "Bawtry",
        "PE": 1058,
        "QL": 178,
        "AC": 331,
        "PB": "Up to £350k",
        "PBR": 155
    },
    {
        "UID": 867,
        "OR": 411,
        "SN": "Filey",
        "PE": 638,
        "QL": 443,
        "AC": 434,
        "PB": "Up to £350k",
        "PBR": 156
    },
    {
        "UID": 868,
        "OR": 411,
        "SN": "Carmarthen",
        "PE": 897,
        "QL": 924,
        "AC": 134,
        "PB": "Up to £350k",
        "PBR": 156
    },
    {
        "UID": 869,
        "OR": 413,
        "SN": "Hyde (Tameside)",
        "PE": 370,
        "QL": 615,
        "AC": 517,
        "PB": "Up to £350k",
        "PBR": 158
    },
    {
        "UID": 870,
        "OR": 417,
        "SN": "Littleborough",
        "PE": 292,
        "QL": 723,
        "AC": 563,
        "PB": "Up to £350k",
        "PBR": 159
    },
    {
        "UID": 871,
        "OR": 420,
        "SN": "Bedale",
        "PE": 989,
        "QL": 738,
        "AC": 145,
        "PB": "Up to £350k",
        "PBR": 160
    },
    {
        "UID": 872,
        "OR": 422,
        "SN": "Longridge",
        "PE": 659,
        "QL": 560,
        "AC": 373,
        "PB": "Up to £350k",
        "PBR": 161
    },
    {
        "UID": 873,
        "OR": 425,
        "SN": "Consett",
        "PE": 424,
        "QL": 212,
        "AC": 750,
        "PB": "Up to £350k",
        "PBR": 162
    },
    {
        "UID": 874,
        "OR": 427,
        "SN": "Chirk",
        "PE": 195,
        "QL": 1191,
        "AC": 421,
        "PB": "Up to £350k",
        "PBR": 163
    },
    {
        "UID": 875,
        "OR": 427,
        "SN": "Bolton",
        "PE": 790,
        "QL": 177,
        "AC": 547,
        "PB": "Up to £350k",
        "PBR": 163
    },
    {
        "UID": 876,
        "OR": 430,
        "SN": "Hirwaun",
        "PE": 21,
        "QL": 292,
        "AC": 1181,
        "PB": "Up to £350k",
        "PBR": 165
    },
    {
        "UID": 877,
        "OR": 432,
        "SN": "Seahouses",
        "PE": 54,
        "QL": 945,
        "AC": 823,
        "PB": "Up to £350k",
        "PBR": 166
    },
    {
        "UID": 878,
        "OR": 433,
        "SN": "Caistor",
        "PE": 678,
        "QL": 1200,
        "AC": 129,
        "PB": "Up to £350k",
        "PBR": 167
    },
    {
        "UID": 879,
        "OR": 439,
        "SN": "Ilminster",
        "PE": 928,
        "QL": 625,
        "AC": 243,
        "PB": "Up to £350k",
        "PBR": 168
    },
    {
        "UID": 880,
        "OR": 440,
        "SN": "Atherstone",
        "PE": 646,
        "QL": 305,
        "AC": 558,
        "PB": "Up to £350k",
        "PBR": 169
    },
    {
        "UID": 881,
        "OR": 442,
        "SN": "Bacup",
        "PE": 570,
        "QL": 224,
        "AC": 705,
        "PB": "Up to £350k",
        "PBR": 170
    },
    {
        "UID": 882,
        "OR": 443,
        "SN": "Wakefield",
        "PE": 911,
        "QL": 350,
        "AC": 373,
        "PB": "Up to £350k",
        "PBR": 171
    },
    {
        "UID": 883,
        "OR": 444,
        "SN": "Builth Wells",
        "PE": 439,
        "QL": 812,
        "AC": 434,
        "PB": "Up to £350k",
        "PBR": 172
    },
    {
        "UID": 884,
        "OR": 446,
        "SN": "Mountain Ash",
        "PE": 228,
        "QL": 645,
        "AC": 706,
        "PB": "Up to £350k",
        "PBR": 173
    },
    {
        "UID": 885,
        "OR": 448,
        "SN": "Ruabon",
        "PE": 783,
        "QL": 491,
        "AC": 379,
        "PB": "Up to £350k",
        "PBR": 174
    },
    {
        "UID": 886,
        "OR": 450,
        "SN": "Mold",
        "PE": 259,
        "QL": 1000,
        "AC": 523,
        "PB": "Up to £350k",
        "PBR": 175
    },
    {
        "UID": 887,
        "OR": 452,
        "SN": "Catterick",
        "PE": 538,
        "QL": 674,
        "AC": 485,
        "PB": "Up to £350k",
        "PBR": 176
    },
    {
        "UID": 888,
        "OR": 455,
        "SN": "Nelson (Pendle)",
        "PE": 187,
        "QL": 415,
        "AC": 881,
        "PB": "Up to £350k",
        "PBR": 177
    },
    {
        "UID": 889,
        "OR": 458,
        "SN": "Eccles",
        "PE": 597,
        "QL": 526,
        "AC": 507,
        "PB": "Up to £350k",
        "PBR": 178
    },
    {
        "UID": 890,
        "OR": 459,
        "SN": "Hornsea",
        "PE": 568,
        "QL": 285,
        "AC": 693,
        "PB": "Up to £350k",
        "PBR": 179
    },
    {
        "UID": 891,
        "OR": 461,
        "SN": "Birkenhead",
        "PE": 932,
        "QL": 184,
        "AC": 501,
        "PB": "Up to £350k",
        "PBR": 180
    },
    {
        "UID": 892,
        "OR": 462,
        "SN": "Croesowallt",
        "PE": 965,
        "QL": 484,
        "AC": 305,
        "PB": "Up to £350k",
        "PBR": 181
    },
    {
        "UID": 893,
        "OR": 463,
        "SN": "Market Rasen",
        "PE": 816,
        "QL": 689,
        "AC": 301,
        "PB": "Up to £350k",
        "PBR": 182
    },
    {
        "UID": 894,
        "OR": 464,
        "SN": "Chesterfield",
        "PE": 422,
        "QL": 736,
        "AC": 510,
        "PB": "Up to £350k",
        "PBR": 183
    },
    {
        "UID": 895,
        "OR": 465,
        "SN": "Camelford",
        "PE": 778,
        "QL": 253,
        "AC": 557,
        "PB": "Up to £350k",
        "PBR": 184
    },
    {
        "UID": 896,
        "OR": 468,
        "SN": "Dyserth",
        "PE": 449,
        "QL": 244,
        "AC": 783,
        "PB": "Up to £350k",
        "PBR": 185
    },
    {
        "UID": 897,
        "OR": 470,
        "SN": "Barnoldswick",
        "PE": 270,
        "QL": 1212,
        "AC": 400,
        "PB": "Up to £350k",
        "PBR": 186
    },
    {
        "UID": 898,
        "OR": 471,
        "SN": "Yarm",
        "PE": 433,
        "QL": 723,
        "AC": 520,
        "PB": "Up to £350k",
        "PBR": 187
    },
    {
        "UID": 899,
        "OR": 472,
        "SN": "Callington",
        "PE": 658,
        "QL": 508,
        "AC": 483,
        "PB": "Up to £350k",
        "PBR": 188
    },
    {
        "UID": 900,
        "OR": 475,
        "SN": "Rhondda",
        "PE": 240,
        "QL": 364,
        "AC": 900,
        "PB": "Up to £350k",
        "PBR": 189
    },
    {
        "UID": 901,
        "OR": 477,
        "SN": "Kidderminster",
        "PE": 682,
        "QL": 86,
        "AC": 801,
        "PB": "Up to £350k",
        "PBR": 190
    },
    {
        "UID": 902,
        "OR": 478,
        "SN": "Chatteris",
        "PE": 1195,
        "QL": 196,
        "AC": 307,
        "PB": "Up to £350k",
        "PBR": 191
    },
    {
        "UID": 903,
        "OR": 482,
        "SN": "Bury",
        "PE": 721,
        "QL": 330,
        "AC": 574,
        "PB": "Up to £350k",
        "PBR": 192
    },
    {
        "UID": 904,
        "OR": 485,
        "SN": "West Rainton",
        "PE": 1039,
        "QL": 74,
        "AC": 572,
        "PB": "Up to £350k",
        "PBR": 193
    },
    {
        "UID": 905,
        "OR": 486,
        "SN": "Oldham",
        "PE": 905,
        "QL": 314,
        "AC": 467,
        "PB": "Up to £350k",
        "PBR": 194
    },
    {
        "UID": 906,
        "OR": 488,
        "SN": "Egremont",
        "PE": 182,
        "QL": 832,
        "AC": 762,
        "PB": "Up to £350k",
        "PBR": 195
    },
    {
        "UID": 907,
        "OR": 490,
        "SN": "Heysham",
        "PE": 315,
        "QL": 755,
        "AC": 659,
        "PB": "Up to £350k",
        "PBR": 196
    },
    {
        "UID": 908,
        "OR": 492,
        "SN": "Wombwell",
        "PE": 758,
        "QL": 106,
        "AC": 749,
        "PB": "Up to £350k",
        "PBR": 197
    },
    {
        "UID": 909,
        "OR": 493,
        "SN": "Barry",
        "PE": 585,
        "QL": 1057,
        "AC": 336,
        "PB": "Up to £350k",
        "PBR": 198
    },
    {
        "UID": 910,
        "OR": 497,
        "SN": "Glanaman",
        "PE": 2,
        "QL": 895,
        "AC": 1060,
        "PB": "Up to £350k",
        "PBR": 199
    },
    {
        "UID": 911,
        "OR": 500,
        "SN": "Romiley",
        "PE": 289,
        "QL": 265,
        "AC": 959,
        "PB": "Up to £350k",
        "PBR": 200
    },
    {
        "UID": 912,
        "OR": 502,
        "SN": "Milnthorpe",
        "PE": 68,
        "QL": 1079,
        "AC": 820,
        "PB": "Up to £350k",
        "PBR": 201
    },
    {
        "UID": 913,
        "OR": 505,
        "SN": "Llantwit Major",
        "PE": 449,
        "QL": 1055,
        "AC": 406,
        "PB": "Up to £350k",
        "PBR": 202
    },
    {
        "UID": 914,
        "OR": 514,
        "SN": "Middlesbrough",
        "PE": 617,
        "QL": 301,
        "AC": 717,
        "PB": "Up to £350k",
        "PBR": 203
    },
    {
        "UID": 915,
        "OR": 515,
        "SN": "Hadston",
        "PE": 760,
        "QL": 14,
        "AC": 1030,
        "PB": "Up to £350k",
        "PBR": 204
    },
    {
        "UID": 916,
        "OR": 520,
        "SN": "Burgh le Marsh",
        "PE": 808,
        "QL": 440,
        "AC": 489,
        "PB": "Up to £350k",
        "PBR": 205
    },
    {
        "UID": 917,
        "OR": 523,
        "SN": "Ashton-under-Lyne",
        "PE": 398,
        "QL": 453,
        "AC": 760,
        "PB": "Up to £350k",
        "PBR": 206
    },
    {
        "UID": 918,
        "OR": 524,
        "SN": "Denby Dale",
        "PE": 947,
        "QL": 117,
        "AC": 658,
        "PB": "Up to £350k",
        "PBR": 207
    },
    {
        "UID": 919,
        "OR": 524,
        "SN": "Aspatria",
        "PE": 889,
        "QL": 458,
        "AC": 431,
        "PB": "Up to £350k",
        "PBR": 207
    },
    {
        "UID": 920,
        "OR": 528,
        "SN": "Wath upon Dearne",
        "PE": 749,
        "QL": 311,
        "AC": 624,
        "PB": "Up to £350k",
        "PBR": 209
    },
    {
        "UID": 921,
        "OR": 528,
        "SN": "Tredegar",
        "PE": 424,
        "QL": 124,
        "AC": 988,
        "PB": "Up to £350k",
        "PBR": 209
    },
    {
        "UID": 922,
        "OR": 530,
        "SN": "Market Drayton",
        "PE": 913,
        "QL": 219,
        "AC": 594,
        "PB": "Up to £350k",
        "PBR": 211
    },
    {
        "UID": 923,
        "OR": 535,
        "SN": "Wilsden",
        "PE": 1079,
        "QL": 41,
        "AC": 688,
        "PB": "Up to £350k",
        "PBR": 212
    },
    {
        "UID": 924,
        "OR": 536,
        "SN": "Newcastle upon Tyne",
        "PE": 828,
        "QL": 784,
        "AC": 346,
        "PB": "Up to £350k",
        "PBR": 213
    },
    {
        "UID": 925,
        "OR": 539,
        "SN": "Ulverston",
        "PE": 834,
        "QL": 1149,
        "AC": 195,
        "PB": "Up to £350k",
        "PBR": 214
    },
    {
        "UID": 926,
        "OR": 540,
        "SN": "Treherbert",
        "PE": 181,
        "QL": 583,
        "AC": 922,
        "PB": "Up to £350k",
        "PBR": 215
    },
    {
        "UID": 927,
        "OR": 544,
        "SN": "Alford",
        "PE": 738,
        "QL": 1105,
        "AC": 269,
        "PB": "Up to £350k",
        "PBR": 216
    },
    {
        "UID": 928,
        "OR": 545,
        "SN": "Bignall End",
        "PE": 1187,
        "QL": 49,
        "AC": 576,
        "PB": "Up to £350k",
        "PBR": 217
    },
    {
        "UID": 929,
        "OR": 546,
        "SN": "Llandudno Junction",
        "PE": 179,
        "QL": 916,
        "AC": 809,
        "PB": "Up to £350k",
        "PBR": 218
    },
    {
        "UID": 930,
        "OR": 547,
        "SN": "Horbury",
        "PE": 685,
        "QL": 366,
        "AC": 665,
        "PB": "Up to £350k",
        "PBR": 219
    },
    {
        "UID": 931,
        "OR": 547,
        "SN": "Rishton",
        "PE": 175,
        "QL": 666,
        "AC": 898,
        "PB": "Up to £350k",
        "PBR": 219
    },
    {
        "UID": 932,
        "OR": 550,
        "SN": "Porth",
        "PE": 293,
        "QL": 602,
        "AC": 821,
        "PB": "Up to £350k",
        "PBR": 221
    },
    {
        "UID": 933,
        "OR": 555,
        "SN": "Clayton-le-Moors",
        "PE": 129,
        "QL": 955,
        "AC": 855,
        "PB": "Up to £350k",
        "PBR": 222
    },
    {
        "UID": 934,
        "OR": 558,
        "SN": "Tamworth",
        "PE": 549,
        "QL": 448,
        "AC": 770,
        "PB": "Up to £350k",
        "PBR": 223
    },
    {
        "UID": 935,
        "OR": 559,
        "SN": "Stoke-on-Trent",
        "PE": 555,
        "QL": 462,
        "AC": 751,
        "PB": "Up to £350k",
        "PBR": 224
    },
    {
        "UID": 936,
        "OR": 564,
        "SN": "March",
        "PE": 749,
        "QL": 232,
        "AC": 744,
        "PB": "Up to £350k",
        "PBR": 225
    },
    {
        "UID": 937,
        "OR": 567,
        "SN": "Wigan",
        "PE": 957,
        "QL": 145,
        "AC": 688,
        "PB": "Up to £350k",
        "PBR": 226
    },
    {
        "UID": 938,
        "OR": 568,
        "SN": "Woodend",
        "PE": 910,
        "QL": 106,
        "AC": 762,
        "PB": "Up to £350k",
        "PBR": 227
    },
    {
        "UID": 939,
        "OR": 574,
        "SN": "Ashington (Northumberland)",
        "PE": 603,
        "QL": 129,
        "AC": 968,
        "PB": "Up to £350k",
        "PBR": 228
    },
    {
        "UID": 940,
        "OR": 577,
        "SN": "Brynmawr",
        "PE": 449,
        "QL": 78,
        "AC": 1093,
        "PB": "Up to £350k",
        "PBR": 229
    },
    {
        "UID": 941,
        "OR": 579,
        "SN": "Bargod",
        "PE": 405,
        "QL": 152,
        "AC": 1058,
        "PB": "Up to £350k",
        "PBR": 230
    },
    {
        "UID": 942,
        "OR": 581,
        "SN": "Prestatyn",
        "PE": 212,
        "QL": 51,
        "AC": 1261,
        "PB": "Up to £350k",
        "PBR": 231
    },
    {
        "UID": 943,
        "OR": 582,
        "SN": "Rhosllanerchrugog",
        "PE": 669,
        "QL": 45,
        "AC": 1046,
        "PB": "Up to £350k",
        "PBR": 232
    },
    {
        "UID": 944,
        "OR": 583,
        "SN": "Whittlesey",
        "PE": 1015,
        "QL": 660,
        "AC": 344,
        "PB": "Up to £350k",
        "PBR": 233
    },
    {
        "UID": 945,
        "OR": 583,
        "SN": "Workington",
        "PE": 757,
        "QL": 165,
        "AC": 837,
        "PB": "Up to £350k",
        "PBR": 233
    },
    {
        "UID": 946,
        "OR": 586,
        "SN": "Asfordby",
        "PE": 793,
        "QL": 517,
        "AC": 565,
        "PB": "Up to £350k",
        "PBR": 235
    },
    {
        "UID": 947,
        "OR": 589,
        "SN": "Ramsbottom",
        "PE": 643,
        "QL": 566,
        "AC": 640,
        "PB": "Up to £350k",
        "PBR": 236
    },
    {
        "UID": 948,
        "OR": 593,
        "SN": "Leadgate",
        "PE": 902,
        "QL": 121,
        "AC": 808,
        "PB": "Up to £350k",
        "PBR": 237
    },
    {
        "UID": 949,
        "OR": 594,
        "SN": "Maesteg",
        "PE": 290,
        "QL": 541,
        "AC": 921,
        "PB": "Up to £350k",
        "PBR": 238
    },
    {
        "UID": 950,
        "OR": 596,
        "SN": "Dalton-in-Furness",
        "PE": 1046,
        "QL": 1077,
        "AC": 178,
        "PB": "Up to £350k",
        "PBR": 239
    },
    {
        "UID": 951,
        "OR": 597,
        "SN": "Morecambe",
        "PE": 275,
        "QL": 501,
        "AC": 970,
        "PB": "Up to £350k",
        "PBR": 240
    },
    {
        "UID": 952,
        "OR": 599,
        "SN": "Swineshead",
        "PE": 1274,
        "QL": 580,
        "AC": 176,
        "PB": "Up to £350k",
        "PBR": 241
    },
    {
        "UID": 953,
        "OR": 601,
        "SN": "Llanfair Pwllgwyngyll",
        "PE": 449,
        "QL": 835,
        "AC": 680,
        "PB": "Up to £350k",
        "PBR": 242
    },
    {
        "UID": 954,
        "OR": 602,
        "SN": "Withernsea",
        "PE": 268,
        "QL": 278,
        "AC": 1107,
        "PB": "Up to £350k",
        "PBR": 243
    },
    {
        "UID": 955,
        "OR": 603,
        "SN": "Gnosall",
        "PE": 412,
        "QL": 460,
        "AC": 867,
        "PB": "Up to £350k",
        "PBR": 244
    },
    {
        "UID": 956,
        "OR": 603,
        "SN": "Ince-in-Makerfield",
        "PE": 784,
        "QL": 155,
        "AC": 845,
        "PB": "Up to £350k",
        "PBR": 244
    },
    {
        "UID": 957,
        "OR": 607,
        "SN": "Wem",
        "PE": 1231,
        "QL": 408,
        "AC": 313,
        "PB": "Up to £350k",
        "PBR": 246
    },
    {
        "UID": 958,
        "OR": 609,
        "SN": "Tonypandy",
        "PE": 343,
        "QL": 383,
        "AC": 983,
        "PB": "Up to £350k",
        "PBR": 247
    },
    {
        "UID": 959,
        "OR": 610,
        "SN": "Neyland",
        "PE": 126,
        "QL": 1127,
        "AC": 840,
        "PB": "Up to £350k",
        "PBR": 248
    },
    {
        "UID": 960,
        "OR": 611,
        "SN": "Southport",
        "PE": 997,
        "QL": 360,
        "AC": 550,
        "PB": "Up to £350k",
        "PBR": 249
    },
    {
        "UID": 961,
        "OR": 615,
        "SN": "Eccleston",
        "PE": 1054,
        "QL": 204,
        "AC": 613,
        "PB": "Up to £350k",
        "PBR": 250
    },
    {
        "UID": 962,
        "OR": 618,
        "SN": "Brampton (Carlisle)",
        "PE": 831,
        "QL": 870,
        "AC": 420,
        "PB": "Up to £350k",
        "PBR": 251
    },
    {
        "UID": 963,
        "OR": 619,
        "SN": "Kidsgrove",
        "PE": 605,
        "QL": 217,
        "AC": 936,
        "PB": "Up to £350k",
        "PBR": 252
    },
    {
        "UID": 964,
        "OR": 620,
        "SN": "Spennymoor",
        "PE": 1152,
        "QL": 82,
        "AC": 672,
        "PB": "Up to £350k",
        "PBR": 253
    },
    {
        "UID": 965,
        "OR": 621,
        "SN": "Nantyglo",
        "PE": 697,
        "QL": 68,
        "AC": 1032,
        "PB": "Up to £350k",
        "PBR": 254
    },
    {
        "UID": 966,
        "OR": 627,
        "SN": "Coedpoeth",
        "PE": 652,
        "QL": 163,
        "AC": 955,
        "PB": "Up to £350k",
        "PBR": 255
    },
    {
        "UID": 967,
        "OR": 629,
        "SN": "Warrington",
        "PE": 732,
        "QL": 491,
        "AC": 687,
        "PB": "Up to £350k",
        "PBR": 256
    },
    {
        "UID": 968,
        "OR": 631,
        "SN": "St Martin's",
        "PE": 853,
        "QL": 865,
        "AC": 423,
        "PB": "Up to £350k",
        "PBR": 257
    },
    {
        "UID": 969,
        "OR": 634,
        "SN": "Shildon",
        "PE": 1143,
        "QL": 23,
        "AC": 861,
        "PB": "Up to £350k",
        "PBR": 258
    },
    {
        "UID": 970,
        "OR": 637,
        "SN": "Ferndale",
        "PE": 327,
        "QL": 419,
        "AC": 1015,
        "PB": "Up to £350k",
        "PBR": 259
    },
    {
        "UID": 971,
        "OR": 638,
        "SN": "Ramsey (Huntingdonshire)",
        "PE": 1090,
        "QL": 636,
        "AC": 347,
        "PB": "Up to £350k",
        "PBR": 260
    },
    {
        "UID": 972,
        "OR": 640,
        "SN": "Pudsey",
        "PE": 1053,
        "QL": 493,
        "AC": 448,
        "PB": "Up to £350k",
        "PBR": 261
    },
    {
        "UID": 973,
        "OR": 641,
        "SN": "Snaith",
        "PE": 1328,
        "QL": 362,
        "AC": 278,
        "PB": "Up to £350k",
        "PBR": 262
    },
    {
        "UID": 974,
        "OR": 642,
        "SN": "Torpoint",
        "PE": 75,
        "QL": 978,
        "AC": 1051,
        "PB": "Up to £350k",
        "PBR": 263
    },
    {
        "UID": 975,
        "OR": 645,
        "SN": "Irthlingborough",
        "PE": 1188,
        "QL": 524,
        "AC": 332,
        "PB": "Up to £350k",
        "PBR": 264
    },
    {
        "UID": 976,
        "OR": 646,
        "SN": "Hartlepool",
        "PE": 297,
        "QL": 715,
        "AC": 893,
        "PB": "Up to £350k",
        "PBR": 265
    },
    {
        "UID": 977,
        "OR": 647,
        "SN": "Treorchy",
        "PE": 230,
        "QL": 686,
        "AC": 990,
        "PB": "Up to £350k",
        "PBR": 266
    },
    {
        "UID": 978,
        "OR": 651,
        "SN": "Peterborough",
        "PE": 1114,
        "QL": 279,
        "AC": 550,
        "PB": "Up to £350k",
        "PBR": 267
    },
    {
        "UID": 979,
        "OR": 653,
        "SN": "Runcorn",
        "PE": 804,
        "QL": 282,
        "AC": 811,
        "PB": "Up to £350k",
        "PBR": 268
    },
    {
        "UID": 980,
        "OR": 658,
        "SN": "St Columb Major",
        "PE": 976,
        "QL": 1142,
        "AC": 258,
        "PB": "Up to £350k",
        "PBR": 269
    },
    {
        "UID": 981,
        "OR": 660,
        "SN": "Rugby",
        "PE": 913,
        "QL": 285,
        "AC": 738,
        "PB": "Up to £350k",
        "PBR": 270
    },
    {
        "UID": 982,
        "OR": 662,
        "SN": "Bridgend",
        "PE": 251,
        "QL": 1160,
        "AC": 741,
        "PB": "Up to £350k",
        "PBR": 271
    },
    {
        "UID": 983,
        "OR": 663,
        "SN": "Crook",
        "PE": 936,
        "QL": 32,
        "AC": 1036,
        "PB": "Up to £350k",
        "PBR": 272
    },
    {
        "UID": 984,
        "OR": 664,
        "SN": "Cwmbran",
        "PE": 199,
        "QL": 804,
        "AC": 1001,
        "PB": "Up to £350k",
        "PBR": 273
    },
    {
        "UID": 985,
        "OR": 665,
        "SN": "Gorleston-on-Sea",
        "PE": 216,
        "QL": 1261,
        "AC": 712,
        "PB": "Up to £350k",
        "PBR": 274
    },
    {
        "UID": 986,
        "OR": 669,
        "SN": "Blackwood",
        "PE": 408,
        "QL": 538,
        "AC": 908,
        "PB": "Up to £350k",
        "PBR": 275
    },
    {
        "UID": 987,
        "OR": 670,
        "SN": "Chorley",
        "PE": 802,
        "QL": 280,
        "AC": 825,
        "PB": "Up to £350k",
        "PBR": 276
    },
    {
        "UID": 988,
        "OR": 671,
        "SN": "Newbiggin-by-the-Sea",
        "PE": 276,
        "QL": 67,
        "AC": 1270,
        "PB": "Up to £350k",
        "PBR": 277
    },
    {
        "UID": 989,
        "OR": 676,
        "SN": "Wellingborough",
        "PE": 1166,
        "QL": 287,
        "AC": 540,
        "PB": "Up to £350k",
        "PBR": 278
    },
    {
        "UID": 990,
        "OR": 682,
        "SN": "Morley",
        "PE": 1181,
        "QL": 382,
        "AC": 464,
        "PB": "Up to £350k",
        "PBR": 279
    },
    {
        "UID": 991,
        "OR": 684,
        "SN": "Newark-on-Trent",
        "PE": 986,
        "QL": 712,
        "AC": 468,
        "PB": "Up to £350k",
        "PBR": 280
    },
    {
        "UID": 992,
        "OR": 684,
        "SN": "Atherton",
        "PE": 868,
        "QL": 123,
        "AC": 928,
        "PB": "Up to £350k",
        "PBR": 280
    },
    {
        "UID": 993,
        "OR": 684,
        "SN": "Blackpool",
        "PE": 875,
        "QL": 159,
        "AC": 878,
        "PB": "Up to £350k",
        "PBR": 280
    },
    {
        "UID": 994,
        "OR": 688,
        "SN": "Crowle (North Lincolnshire)",
        "PE": 1303,
        "QL": 586,
        "AC": 247,
        "PB": "Up to £350k",
        "PBR": 283
    },
    {
        "UID": 995,
        "OR": 693,
        "SN": "Ilkeston",
        "PE": 694,
        "QL": 308,
        "AC": 884,
        "PB": "Up to £350k",
        "PBR": 284
    },
    {
        "UID": 996,
        "OR": 694,
        "SN": "Newport (Telford and Wrekin)",
        "PE": 1074,
        "QL": 502,
        "AC": 506,
        "PB": "Up to £350k",
        "PBR": 285
    },
    {
        "UID": 997,
        "OR": 694,
        "SN": "Lees",
        "PE": 846,
        "QL": 211,
        "AC": 862,
        "PB": "Up to £350k",
        "PBR": 285
    },
    {
        "UID": 998,
        "OR": 705,
        "SN": "Mitcheldean",
        "PE": 894,
        "QL": 873,
        "AC": 497,
        "PB": "Up to £350k",
        "PBR": 287
    },
    {
        "UID": 999,
        "OR": 708,
        "SN": "Frodsham",
        "PE": 1056,
        "QL": 1172,
        "AC": 241,
        "PB": "Up to £350k",
        "PBR": 288
    },
    {
        "UID": 1000,
        "OR": 709,
        "SN": "Bolton-le-Sands",
        "PE": 77,
        "QL": 1202,
        "AC": 1006,
        "PB": "Up to £350k",
        "PBR": 289
    },
    {
        "UID": 1001,
        "OR": 711,
        "SN": "Wolverhampton",
        "PE": 554,
        "QL": 833,
        "AC": 804,
        "PB": "Up to £350k",
        "PBR": 290
    },
    {
        "UID": 1002,
        "OR": 711,
        "SN": "Grimsby",
        "PE": 621,
        "QL": 996,
        "AC": 641,
        "PB": "Up to £350k",
        "PBR": 290
    },
    {
        "UID": 1003,
        "OR": 716,
        "SN": "Houghton-le-Spring",
        "PE": 969,
        "QL": 436,
        "AC": 677,
        "PB": "Up to £350k",
        "PBR": 292
    },
    {
        "UID": 1004,
        "OR": 718,
        "SN": "Annfield Plain",
        "PE": 996,
        "QL": 91,
        "AC": 909,
        "PB": "Up to £350k",
        "PBR": 293
    },
    {
        "UID": 1005,
        "OR": 720,
        "SN": "Bamber Bridge",
        "PE": 704,
        "QL": 453,
        "AC": 840,
        "PB": "Up to £350k",
        "PBR": 294
    },
    {
        "UID": 1006,
        "OR": 721,
        "SN": "Pegswood",
        "PE": 1018,
        "QL": 314,
        "AC": 716,
        "PB": "Up to £350k",
        "PBR": 295
    },
    {
        "UID": 1007,
        "OR": 722,
        "SN": "Ammanford",
        "PE": 113,
        "QL": 827,
        "AC": 1154,
        "PB": "Up to £350k",
        "PBR": 296
    },
    {
        "UID": 1008,
        "OR": 722,
        "SN": "Great Harwood",
        "PE": 448,
        "QL": 593,
        "AC": 916,
        "PB": "Up to £350k",
        "PBR": 296
    },
    {
        "UID": 1009,
        "OR": 726,
        "SN": "Chapel-en-le-Frith",
        "PE": 661,
        "QL": 1297,
        "AC": 365,
        "PB": "Up to £350k",
        "PBR": 298
    },
    {
        "UID": 1010,
        "OR": 727,
        "SN": "Leicester",
        "PE": 1084,
        "QL": 398,
        "AC": 605,
        "PB": "Up to £350k",
        "PBR": 299
    },
    {
        "UID": 1011,
        "OR": 729,
        "SN": "Droylsden",
        "PE": 312,
        "QL": 622,
        "AC": 1040,
        "PB": "Up to £350k",
        "PBR": 300
    },
    {
        "UID": 1012,
        "OR": 731,
        "SN": "Gorseinon",
        "PE": 304,
        "QL": 1179,
        "AC": 767,
        "PB": "Up to £350k",
        "PBR": 301
    },
    {
        "UID": 1013,
        "OR": 732,
        "SN": "Bebington",
        "PE": 854,
        "QL": 937,
        "AC": 525,
        "PB": "Up to £350k",
        "PBR": 302
    },
    {
        "UID": 1014,
        "OR": 738,
        "SN": "Radcliffe",
        "PE": 574,
        "QL": 700,
        "AC": 846,
        "PB": "Up to £350k",
        "PBR": 303
    },
    {
        "UID": 1015,
        "OR": 739,
        "SN": "Long Sutton (South Holland)",
        "PE": 1129,
        "QL": 887,
        "AC": 352,
        "PB": "Up to £350k",
        "PBR": 304
    },
    {
        "UID": 1016,
        "OR": 740,
        "SN": "Audley",
        "PE": 1196,
        "QL": 54,
        "AC": 835,
        "PB": "Up to £350k",
        "PBR": 305
    },
    {
        "UID": 1017,
        "OR": 742,
        "SN": "Skegness",
        "PE": 584,
        "QL": 79,
        "AC": 1195,
        "PB": "Up to £350k",
        "PBR": 306
    },
    {
        "UID": 1018,
        "OR": 743,
        "SN": "Hattersley",
        "PE": 814,
        "QL": 266,
        "AC": 911,
        "PB": "Up to £350k",
        "PBR": 307
    },
    {
        "UID": 1019,
        "OR": 746,
        "SN": "Saxilby",
        "PE": 650,
        "QL": 1169,
        "AC": 534,
        "PB": "Up to £350k",
        "PBR": 308
    },
    {
        "UID": 1020,
        "OR": 747,
        "SN": "Platt Bridge",
        "PE": 959,
        "QL": 197,
        "AC": 866,
        "PB": "Up to £350k",
        "PBR": 309
    },
    {
        "UID": 1021,
        "OR": 749,
        "SN": "Blaina",
        "PE": 803,
        "QL": 63,
        "AC": 1125,
        "PB": "Up to £350k",
        "PBR": 310
    },
    {
        "UID": 1022,
        "OR": 750,
        "SN": "Dudley (Dudley)",
        "PE": 698,
        "QL": 771,
        "AC": 725,
        "PB": "Up to £350k",
        "PBR": 311
    },
    {
        "UID": 1023,
        "OR": 751,
        "SN": "Ogmore Vale",
        "PE": 614,
        "QL": 524,
        "AC": 904,
        "PB": "Up to £350k",
        "PBR": 312
    },
    {
        "UID": 1024,
        "OR": 754,
        "SN": "Armitage",
        "PE": 119,
        "QL": 825,
        "AC": 1171,
        "PB": "Up to £350k",
        "PBR": 313
    },
    {
        "UID": 1025,
        "OR": 755,
        "SN": "Whitwell (Bolsover)",
        "PE": 1222,
        "QL": 675,
        "AC": 355,
        "PB": "Up to £350k",
        "PBR": 314
    },
    {
        "UID": 1026,
        "OR": 757,
        "SN": "Tynemouth",
        "PE": 687,
        "QL": 860,
        "AC": 708,
        "PB": "Up to £350k",
        "PBR": 315
    },
    {
        "UID": 1027,
        "OR": 760,
        "SN": "Sutton Bridge",
        "PE": 576,
        "QL": 633,
        "AC": 886,
        "PB": "Up to £350k",
        "PBR": 316
    },
    {
        "UID": 1028,
        "OR": 761,
        "SN": "Abercynon",
        "PE": 272,
        "QL": 905,
        "AC": 1001,
        "PB": "Up to £350k",
        "PBR": 317
    },
    {
        "UID": 1029,
        "OR": 768,
        "SN": "Riccall",
        "PE": 1258,
        "QL": 1276,
        "AC": 97,
        "PB": "Up to £350k",
        "PBR": 318
    },
    {
        "UID": 1030,
        "OR": 769,
        "SN": "Fulwood",
        "PE": 602,
        "QL": 170,
        "AC": 1156,
        "PB": "Up to £350k",
        "PBR": 319
    },
    {
        "UID": 1031,
        "OR": 770,
        "SN": "Hunmanby",
        "PE": 843,
        "QL": 577,
        "AC": 745,
        "PB": "Up to £350k",
        "PBR": 320
    },
    {
        "UID": 1032,
        "OR": 771,
        "SN": "Blyth (Northumberland)",
        "PE": 773,
        "QL": 283,
        "AC": 971,
        "PB": "Up to £350k",
        "PBR": 321
    },
    {
        "UID": 1033,
        "OR": 772,
        "SN": "Ebbw Vale",
        "PE": 689,
        "QL": 173,
        "AC": 1091,
        "PB": "Up to £350k",
        "PBR": 322
    },
    {
        "UID": 1034,
        "OR": 773,
        "SN": "Bedlington",
        "PE": 558,
        "QL": 34,
        "AC": 1286,
        "PB": "Up to £350k",
        "PBR": 323
    },
    {
        "UID": 1035,
        "OR": 776,
        "SN": "Porthcawl",
        "PE": 118,
        "QL": 1038,
        "AC": 1113,
        "PB": "Up to £350k",
        "PBR": 324
    },
    {
        "UID": 1036,
        "OR": 779,
        "SN": "Stone (Stafford)",
        "PE": 304,
        "QL": 1329,
        "AC": 623,
        "PB": "Up to £350k",
        "PBR": 325
    },
    {
        "UID": 1037,
        "OR": 780,
        "SN": "Caister-on-Sea",
        "PE": 90,
        "QL": 678,
        "AC": 1228,
        "PB": "Up to £350k",
        "PBR": 326
    },
    {
        "UID": 1038,
        "OR": 781,
        "SN": "Eastwood",
        "PE": 1030,
        "QL": 297,
        "AC": 795,
        "PB": "Up to £350k",
        "PBR": 327
    },
    {
        "UID": 1039,
        "OR": 784,
        "SN": "Derby",
        "PE": 972,
        "QL": 564,
        "AC": 684,
        "PB": "Up to £350k",
        "PBR": 328
    },
    {
        "UID": 1040,
        "OR": 785,
        "SN": "Fleetwood",
        "PE": 741,
        "QL": 148,
        "AC": 1100,
        "PB": "Up to £350k",
        "PBR": 329
    },
    {
        "UID": 1041,
        "OR": 789,
        "SN": "Heckmondwike",
        "PE": 1183,
        "QL": 146,
        "AC": 781,
        "PB": "Up to £350k",
        "PBR": 330
    },
    {
        "UID": 1042,
        "OR": 790,
        "SN": "Baildon",
        "PE": 383,
        "QL": 675,
        "AC": 1019,
        "PB": "Up to £350k",
        "PBR": 331
    },
    {
        "UID": 1043,
        "OR": 795,
        "SN": "Rothwell",
        "PE": 1361,
        "QL": 255,
        "AC": 495,
        "PB": "Up to £350k",
        "PBR": 332
    },
    {
        "UID": 1044,
        "OR": 796,
        "SN": "Bootle",
        "PE": 771,
        "QL": 1107,
        "AC": 563,
        "PB": "Up to £350k",
        "PBR": 333
    },
    {
        "UID": 1045,
        "OR": 797,
        "SN": "Farnworth",
        "PE": 995,
        "QL": 411,
        "AC": 772,
        "PB": "Up to £350k",
        "PBR": 334
    },
    {
        "UID": 1046,
        "OR": 801,
        "SN": "Llanbradach",
        "PE": 372,
        "QL": 1183,
        "AC": 789,
        "PB": "Up to £350k",
        "PBR": 335
    },
    {
        "UID": 1047,
        "OR": 804,
        "SN": "Sedgefield",
        "PE": 1128,
        "QL": 467,
        "AC": 632,
        "PB": "Up to £350k",
        "PBR": 336
    },
    {
        "UID": 1048,
        "OR": 806,
        "SN": "Burry Port",
        "PE": 329,
        "QL": 470,
        "AC": 1168,
        "PB": "Up to £350k",
        "PBR": 337
    },
    {
        "UID": 1049,
        "OR": 807,
        "SN": "Winsford (Cheshire West and Chester)",
        "PE": 982,
        "QL": 56,
        "AC": 1101,
        "PB": "Up to £350k",
        "PBR": 338
    },
    {
        "UID": 1050,
        "OR": 808,
        "SN": "Cannock",
        "PE": 449,
        "QL": 402,
        "AC": 1129,
        "PB": "Up to £350k",
        "PBR": 339
    },
    {
        "UID": 1051,
        "OR": 812,
        "SN": "Oswaldtwistle",
        "PE": 639,
        "QL": 570,
        "AC": 930,
        "PB": "Up to £350k",
        "PBR": 340
    },
    {
        "UID": 1052,
        "OR": 814,
        "SN": "Kinmel Bay",
        "PE": 428,
        "QL": 28,
        "AC": 1329,
        "PB": "Up to £350k",
        "PBR": 341
    },
    {
        "UID": 1053,
        "OR": 817,
        "SN": "Sleaford",
        "PE": 961,
        "QL": 1048,
        "AC": 501,
        "PB": "Up to £350k",
        "PBR": 342
    },
    {
        "UID": 1054,
        "OR": 820,
        "SN": "Pontarddulais",
        "PE": 375,
        "QL": 1215,
        "AC": 785,
        "PB": "Up to £350k",
        "PBR": 343
    },
    {
        "UID": 1055,
        "OR": 821,
        "SN": "Abertillery",
        "PE": 912,
        "QL": 135,
        "AC": 1064,
        "PB": "Up to £350k",
        "PBR": 344
    },
    {
        "UID": 1056,
        "OR": 822,
        "SN": "Stockton-on-Tees",
        "PE": 855,
        "QL": 1060,
        "AC": 571,
        "PB": "Up to £350k",
        "PBR": 345
    },
    {
        "UID": 1057,
        "OR": 823,
        "SN": "Finedon",
        "PE": 1335,
        "QL": 599,
        "AC": 350,
        "PB": "Up to £350k",
        "PBR": 346
    },
    {
        "UID": 1058,
        "OR": 824,
        "SN": "Coalway",
        "PE": 724,
        "QL": 1066,
        "AC": 662,
        "PB": "Up to £350k",
        "PBR": 347
    },
    {
        "UID": 1059,
        "OR": 826,
        "SN": "Millom",
        "PE": 345,
        "QL": 1076,
        "AC": 906,
        "PB": "Up to £350k",
        "PBR": 348
    },
    {
        "UID": 1060,
        "OR": 827,
        "SN": "Castleside",
        "PE": 449,
        "QL": 33,
        "AC": 1323,
        "PB": "Up to £350k",
        "PBR": 349
    },
    {
        "UID": 1061,
        "OR": 829,
        "SN": "Horwich",
        "PE": 1250,
        "QL": 340,
        "AC": 600,
        "PB": "Up to £350k",
        "PBR": 350
    },
    {
        "UID": 1062,
        "OR": 831,
        "SN": "Askam in Furness",
        "PE": 575,
        "QL": 1137,
        "AC": 740,
        "PB": "Up to £350k",
        "PBR": 351
    },
    {
        "UID": 1063,
        "OR": 832,
        "SN": "Accrington",
        "PE": 893,
        "QL": 654,
        "AC": 756,
        "PB": "Up to £350k",
        "PBR": 352
    },
    {
        "UID": 1064,
        "OR": 833,
        "SN": "Murton (County Durham)",
        "PE": 837,
        "QL": 119,
        "AC": 1127,
        "PB": "Up to £350k",
        "PBR": 353
    },
    {
        "UID": 1065,
        "OR": 834,
        "SN": "Clay Cross",
        "PE": 950,
        "QL": 722,
        "AC": 699,
        "PB": "Up to £350k",
        "PBR": 354
    },
    {
        "UID": 1066,
        "OR": 835,
        "SN": "Throckley",
        "PE": 1173,
        "QL": 128,
        "AC": 864,
        "PB": "Up to £350k",
        "PBR": 355
    },
    {
        "UID": 1067,
        "OR": 837,
        "SN": "Langwith",
        "PE": 1213,
        "QL": 227,
        "AC": 734,
        "PB": "Up to £350k",
        "PBR": 356
    },
    {
        "UID": 1068,
        "OR": 839,
        "SN": "Caerleon",
        "PE": 294,
        "QL": 1093,
        "AC": 976,
        "PB": "Up to £350k",
        "PBR": 357
    },
    {
        "UID": 1069,
        "OR": 840,
        "SN": "Treeton",
        "PE": 817,
        "QL": 606,
        "AC": 843,
        "PB": "Up to £350k",
        "PBR": 358
    },
    {
        "UID": 1070,
        "OR": 841,
        "SN": "Sacriston",
        "PE": 1139,
        "QL": 18,
        "AC": 1145,
        "PB": "Up to £350k",
        "PBR": 359
    },
    {
        "UID": 1071,
        "OR": 842,
        "SN": "Wigton",
        "PE": 968,
        "QL": 911,
        "AC": 620,
        "PB": "Up to £350k",
        "PBR": 360
    },
    {
        "UID": 1072,
        "OR": 844,
        "SN": "Easington (County Durham)",
        "PE": 653,
        "QL": 269,
        "AC": 1137,
        "PB": "Up to £350k",
        "PBR": 361
    },
    {
        "UID": 1073,
        "OR": 846,
        "SN": "Heywood",
        "PE": 735,
        "QL": 586,
        "AC": 893,
        "PB": "Up to £350k",
        "PBR": 362
    },
    {
        "UID": 1074,
        "OR": 850,
        "SN": "Darwen",
        "PE": 883,
        "QL": 793,
        "AC": 752,
        "PB": "Up to £350k",
        "PBR": 363
    },
    {
        "UID": 1075,
        "OR": 851,
        "SN": "Barrow-in-Furness",
        "PE": 741,
        "QL": 881,
        "AC": 813,
        "PB": "Up to £350k",
        "PBR": 364
    },
    {
        "UID": 1076,
        "OR": 852,
        "SN": "Biddulph",
        "PE": 937,
        "QL": 551,
        "AC": 821,
        "PB": "Up to £350k",
        "PBR": 365
    },
    {
        "UID": 1077,
        "OR": 853,
        "SN": "Cheddleton",
        "PE": 315,
        "QL": 1355,
        "AC": 638,
        "PB": "Up to £350k",
        "PBR": 366
    },
    {
        "UID": 1078,
        "OR": 853,
        "SN": "Smethwick",
        "PE": 858,
        "QL": 1276,
        "AC": 460,
        "PB": "Up to £350k",
        "PBR": 366
    },
    {
        "UID": 1079,
        "OR": 855,
        "SN": "Bloxwich",
        "PE": 262,
        "QL": 409,
        "AC": 1250,
        "PB": "Up to £350k",
        "PBR": 368
    },
    {
        "UID": 1080,
        "OR": 857,
        "SN": "Cheadle",
        "PE": 1022,
        "QL": 1096,
        "AC": 481,
        "PB": "Up to £350k",
        "PBR": 369
    },
    {
        "UID": 1081,
        "OR": 858,
        "SN": "Cleethorpes",
        "PE": 407,
        "QL": 734,
        "AC": 1076,
        "PB": "Up to £350k",
        "PBR": 370
    },
    {
        "UID": 1082,
        "OR": 862,
        "SN": "Upper Tean",
        "PE": 375,
        "QL": 1220,
        "AC": 850,
        "PB": "Up to £350k",
        "PBR": 371
    },
    {
        "UID": 1083,
        "OR": 863,
        "SN": "Burtonwood",
        "PE": 1318,
        "QL": 1,
        "AC": 1219,
        "PB": "Up to £350k",
        "PBR": 372
    },
    {
        "UID": 1084,
        "OR": 864,
        "SN": "Treharris",
        "PE": 304,
        "QL": 1274,
        "AC": 862,
        "PB": "Up to £350k",
        "PBR": 373
    },
    {
        "UID": 1085,
        "OR": 865,
        "SN": "Fence Houses",
        "PE": 1024,
        "QL": 208,
        "AC": 986,
        "PB": "Up to £350k",
        "PBR": 374
    },
    {
        "UID": 1086,
        "OR": 866,
        "SN": "Nuneaton",
        "PE": 880,
        "QL": 153,
        "AC": 1122,
        "PB": "Up to £350k",
        "PBR": 375
    },
    {
        "UID": 1087,
        "OR": 867,
        "SN": "Alfreton",
        "PE": 1092,
        "QL": 939,
        "AC": 530,
        "PB": "Up to £350k",
        "PBR": 376
    },
    {
        "UID": 1088,
        "OR": 868,
        "SN": "St Helens",
        "PE": 1124,
        "QL": 156,
        "AC": 944,
        "PB": "Up to £350k",
        "PBR": 377
    },
    {
        "UID": 1089,
        "OR": 870,
        "SN": "Abergele",
        "PE": 782,
        "QL": 275,
        "AC": 1101,
        "PB": "Up to £350k",
        "PBR": 378
    },
    {
        "UID": 1090,
        "OR": 871,
        "SN": "Kirkham",
        "PE": 1132,
        "QL": 368,
        "AC": 794,
        "PB": "Up to £350k",
        "PBR": 379
    },
    {
        "UID": 1091,
        "OR": 872,
        "SN": "Trimdon",
        "PE": 1044,
        "QL": 4,
        "AC": 1309,
        "PB": "Up to £350k",
        "PBR": 380
    },
    {
        "UID": 1092,
        "OR": 873,
        "SN": "Grantham",
        "PE": 941,
        "QL": 1251,
        "AC": 472,
        "PB": "Up to £350k",
        "PBR": 381
    },
    {
        "UID": 1093,
        "OR": 874,
        "SN": "Northallerton",
        "PE": 940,
        "QL": 1172,
        "AC": 537,
        "PB": "Up to £350k",
        "PBR": 382
    },
    {
        "UID": 1094,
        "OR": 876,
        "SN": "Loggerheads",
        "PE": 1255,
        "QL": 547,
        "AC": 546,
        "PB": "Up to £350k",
        "PBR": 383
    },
    {
        "UID": 1095,
        "OR": 877,
        "SN": "Raunds",
        "PE": 1326,
        "QL": 547,
        "AC": 468,
        "PB": "Up to £350k",
        "PBR": 384
    },
    {
        "UID": 1096,
        "OR": 880,
        "SN": "Worsbrough",
        "PE": 806,
        "QL": 36,
        "AC": 1258,
        "PB": "Up to £350k",
        "PBR": 385
    },
    {
        "UID": 1097,
        "OR": 883,
        "SN": "Caerphilly",
        "PE": 863,
        "QL": 745,
        "AC": 829,
        "PB": "Up to £350k",
        "PBR": 386
    },
    {
        "UID": 1098,
        "OR": 885,
        "SN": "Fazeley",
        "PE": 355,
        "QL": 1109,
        "AC": 984,
        "PB": "Up to £350k",
        "PBR": 387
    },
    {
        "UID": 1099,
        "OR": 886,
        "SN": "Gateshead",
        "PE": 824,
        "QL": 1072,
        "AC": 695,
        "PB": "Up to £350k",
        "PBR": 388
    },
    {
        "UID": 1100,
        "OR": 887,
        "SN": "Worksop",
        "PE": 895,
        "QL": 412,
        "AC": 981,
        "PB": "Up to £350k",
        "PBR": 389
    },
    {
        "UID": 1101,
        "OR": 889,
        "SN": "Bentley",
        "PE": 1067,
        "QL": 403,
        "AC": 847,
        "PB": "Up to £350k",
        "PBR": 390
    },
    {
        "UID": 1102,
        "OR": 890,
        "SN": "Norton Canes",
        "PE": 241,
        "QL": 588,
        "AC": 1234,
        "PB": "Up to £350k",
        "PBR": 391
    },
    {
        "UID": 1103,
        "OR": 891,
        "SN": "Thetford",
        "PE": 921,
        "QL": 1070,
        "AC": 649,
        "PB": "Up to £350k",
        "PBR": 392
    },
    {
        "UID": 1104,
        "OR": 897,
        "SN": "Ushaw Moor",
        "PE": 1095,
        "QL": 13,
        "AC": 1225,
        "PB": "Up to £350k",
        "PBR": 393
    },
    {
        "UID": 1105,
        "OR": 898,
        "SN": "Swallownest",
        "PE": 1151,
        "QL": 339,
        "AC": 831,
        "PB": "Up to £350k",
        "PBR": 394
    },
    {
        "UID": 1106,
        "OR": 899,
        "SN": "South Shields",
        "PE": 732,
        "QL": 1053,
        "AC": 776,
        "PB": "Up to £350k",
        "PBR": 395
    },
    {
        "UID": 1107,
        "OR": 900,
        "SN": "Witton Gilbert",
        "PE": 1120,
        "QL": 22,
        "AC": 1189,
        "PB": "Up to £350k",
        "PBR": 396
    },
    {
        "UID": 1108,
        "OR": 903,
        "SN": "Crewe",
        "PE": 1235,
        "QL": 158,
        "AC": 871,
        "PB": "Up to £350k",
        "PBR": 397
    },
    {
        "UID": 1109,
        "OR": 905,
        "SN": "Swaffham",
        "PE": 1204,
        "QL": 550,
        "AC": 653,
        "PB": "Up to £350k",
        "PBR": 398
    },
    {
        "UID": 1110,
        "OR": 907,
        "SN": "Llangefni",
        "PE": 946,
        "QL": 205,
        "AC": 1099,
        "PB": "Up to £350k",
        "PBR": 399
    },
    {
        "UID": 1111,
        "OR": 908,
        "SN": "Milnrow",
        "PE": 585,
        "QL": 951,
        "AC": 972,
        "PB": "Up to £350k",
        "PBR": 400
    },
    {
        "UID": 1112,
        "OR": 910,
        "SN": "Marske-by-the-Sea",
        "PE": 368,
        "QL": 1047,
        "AC": 1038,
        "PB": "Up to £350k",
        "PBR": 401
    },
    {
        "UID": 1113,
        "OR": 911,
        "SN": "Farndon (Newark and Sherwood)",
        "PE": 941,
        "QL": 593,
        "AC": 870,
        "PB": "Up to £350k",
        "PBR": 402
    },
    {
        "UID": 1114,
        "OR": 912,
        "SN": "Great Houghton (Barnsley)",
        "PE": 1190,
        "QL": 63,
        "AC": 1060,
        "PB": "Up to £350k",
        "PBR": 403
    },
    {
        "UID": 1115,
        "OR": 913,
        "SN": "Rugeley",
        "PE": 61,
        "QL": 1114,
        "AC": 1245,
        "PB": "Up to £350k",
        "PBR": 404
    },
    {
        "UID": 1116,
        "OR": 914,
        "SN": "Chadderton",
        "PE": 543,
        "QL": 1074,
        "AC": 946,
        "PB": "Up to £350k",
        "PBR": 405
    },
    {
        "UID": 1117,
        "OR": 916,
        "SN": "Rotherham",
        "PE": 713,
        "QL": 687,
        "AC": 987,
        "PB": "Up to £350k",
        "PBR": 406
    },
    {
        "UID": 1118,
        "OR": 917,
        "SN": "Denton",
        "PE": 427,
        "QL": 743,
        "AC": 1134,
        "PB": "Up to £350k",
        "PBR": 407
    },
    {
        "UID": 1119,
        "OR": 919,
        "SN": "Failsworth",
        "PE": 321,
        "QL": 1040,
        "AC": 1093,
        "PB": "Up to £350k",
        "PBR": 408
    },
    {
        "UID": 1120,
        "OR": 923,
        "SN": "Howden",
        "PE": 1293,
        "QL": 1348,
        "AC": 100,
        "PB": "Up to £350k",
        "PBR": 409
    },
    {
        "UID": 1121,
        "OR": 926,
        "SN": "Chopwell",
        "PE": 1007,
        "QL": 43,
        "AC": 1206,
        "PB": "Up to £350k",
        "PBR": 410
    },
    {
        "UID": 1122,
        "OR": 928,
        "SN": "Castleford",
        "PE": 1042,
        "QL": 162,
        "AC": 1078,
        "PB": "Up to £350k",
        "PBR": 411
    },
    {
        "UID": 1123,
        "OR": 930,
        "SN": "Lakenheath",
        "PE": 754,
        "QL": 429,
        "AC": 1096,
        "PB": "Up to £350k",
        "PBR": 412
    },
    {
        "UID": 1124,
        "OR": 931,
        "SN": "Liversedge",
        "PE": 1153,
        "QL": 168,
        "AC": 998,
        "PB": "Up to £350k",
        "PBR": 413
    },
    {
        "UID": 1125,
        "OR": 932,
        "SN": "Whitworth",
        "PE": 1140,
        "QL": 475,
        "AC": 807,
        "PB": "Up to £350k",
        "PBR": 414
    },
    {
        "UID": 1126,
        "OR": 939,
        "SN": "Aspull",
        "PE": 1271,
        "QL": 429,
        "AC": 682,
        "PB": "Up to £350k",
        "PBR": 415
    },
    {
        "UID": 1127,
        "OR": 940,
        "SN": "Jaywick",
        "PE": 377,
        "QL": 27,
        "AC": 1370,
        "PB": "Up to £350k",
        "PBR": 416
    },
    {
        "UID": 1128,
        "OR": 940,
        "SN": "Port Talbot",
        "PE": 446,
        "QL": 935,
        "AC": 1070,
        "PB": "Up to £350k",
        "PBR": 416
    },
    {
        "UID": 1129,
        "OR": 942,
        "SN": "Stapleford",
        "PE": 777,
        "QL": 401,
        "AC": 1112,
        "PB": "Up to £350k",
        "PBR": 418
    },
    {
        "UID": 1130,
        "OR": 943,
        "SN": "Rhodes",
        "PE": 340,
        "QL": 969,
        "AC": 1133,
        "PB": "Up to £350k",
        "PBR": 419
    },
    {
        "UID": 1131,
        "OR": 944,
        "SN": "Walsall",
        "PE": 379,
        "QL": 1258,
        "AC": 920,
        "PB": "Up to £350k",
        "PBR": 420
    },
    {
        "UID": 1132,
        "OR": 947,
        "SN": "Morton (South Kesteven)",
        "PE": 1354,
        "QL": 718,
        "AC": 451,
        "PB": "Up to £350k",
        "PBR": 421
    },
    {
        "UID": 1133,
        "OR": 948,
        "SN": "Llangennech",
        "PE": 216,
        "QL": 1149,
        "AC": 1150,
        "PB": "Up to £350k",
        "PBR": 422
    },
    {
        "UID": 1134,
        "OR": 950,
        "SN": "Banks",
        "PE": 999,
        "QL": 452,
        "AC": 965,
        "PB": "Up to £350k",
        "PBR": 423
    },
    {
        "UID": 1135,
        "OR": 951,
        "SN": "Featherstone (Wakefield)",
        "PE": 1262,
        "QL": 125,
        "AC": 929,
        "PB": "Up to £350k",
        "PBR": 424
    },
    {
        "UID": 1136,
        "OR": 952,
        "SN": "Cudworth",
        "PE": 1167,
        "QL": 213,
        "AC": 965,
        "PB": "Up to £350k",
        "PBR": 425
    },
    {
        "UID": 1137,
        "OR": 953,
        "SN": "Redditch",
        "PE": 1032,
        "QL": 171,
        "AC": 1110,
        "PB": "Up to £350k",
        "PBR": 426
    },
    {
        "UID": 1138,
        "OR": 954,
        "SN": "Ferryhill",
        "PE": 1180,
        "QL": 104,
        "AC": 1053,
        "PB": "Up to £350k",
        "PBR": 427
    },
    {
        "UID": 1139,
        "OR": 955,
        "SN": "Weaverham",
        "PE": 1062,
        "QL": 344,
        "AC": 980,
        "PB": "Up to £350k",
        "PBR": 428
    },
    {
        "UID": 1140,
        "OR": 956,
        "SN": "Widnes",
        "PE": 1123,
        "QL": 221,
        "AC": 1012,
        "PB": "Up to £350k",
        "PBR": 429
    },
    {
        "UID": 1141,
        "OR": 957,
        "SN": "Loughborough",
        "PE": 906,
        "QL": 846,
        "AC": 857,
        "PB": "Up to £350k",
        "PBR": 430
    },
    {
        "UID": 1142,
        "OR": 958,
        "SN": "Sandiacre",
        "PE": 637,
        "QL": 1004,
        "AC": 955,
        "PB": "Up to £350k",
        "PBR": 431
    },
    {
        "UID": 1143,
        "OR": 959,
        "SN": "Neath",
        "PE": 379,
        "QL": 1088,
        "AC": 1066,
        "PB": "Up to £350k",
        "PBR": 432
    },
    {
        "UID": 1144,
        "OR": 961,
        "SN": "Esh Winning",
        "PE": 1010,
        "QL": 257,
        "AC": 1085,
        "PB": "Up to £350k",
        "PBR": 433
    },
    {
        "UID": 1145,
        "OR": 963,
        "SN": "Bolsover",
        "PE": 1130,
        "QL": 1071,
        "AC": 560,
        "PB": "Up to £350k",
        "PBR": 434
    },
    {
        "UID": 1146,
        "OR": 964,
        "SN": "Eye (City of Peterborough)",
        "PE": 1334,
        "QL": 499,
        "AC": 620,
        "PB": "Up to £350k",
        "PBR": 435
    },
    {
        "UID": 1147,
        "OR": 966,
        "SN": "Tidworth",
        "PE": 798,
        "QL": 1096,
        "AC": 814,
        "PB": "Up to £350k",
        "PBR": 436
    },
    {
        "UID": 1148,
        "OR": 967,
        "SN": "Heanor",
        "PE": 987,
        "QL": 443,
        "AC": 1006,
        "PB": "Up to £350k",
        "PBR": 437
    },
    {
        "UID": 1149,
        "OR": 968,
        "SN": "Nanpean",
        "PE": 938,
        "QL": 683,
        "AC": 911,
        "PB": "Up to £350k",
        "PBR": 438
    },
    {
        "UID": 1150,
        "OR": 971,
        "SN": "Hilton (South Derbyshire)",
        "PE": 635,
        "QL": 844,
        "AC": 1053,
        "PB": "Up to £350k",
        "PBR": 439
    },
    {
        "UID": 1151,
        "OR": 972,
        "SN": "Blackrod",
        "PE": 1260,
        "QL": 533,
        "AC": 685,
        "PB": "Up to £350k",
        "PBR": 440
    },
    {
        "UID": 1152,
        "OR": 974,
        "SN": "Mansfield",
        "PE": 1186,
        "QL": 348,
        "AC": 874,
        "PB": "Up to £350k",
        "PBR": 441
    },
    {
        "UID": 1153,
        "OR": 975,
        "SN": "Walkden",
        "PE": 1050,
        "QL": 596,
        "AC": 858,
        "PB": "Up to £350k",
        "PBR": 442
    },
    {
        "UID": 1154,
        "OR": 979,
        "SN": "Bilston",
        "PE": 409,
        "QL": 1175,
        "AC": 1011,
        "PB": "Up to £350k",
        "PBR": 443
    },
    {
        "UID": 1155,
        "OR": 982,
        "SN": "Seaton Sluice",
        "PE": 385,
        "QL": 580,
        "AC": 1224,
        "PB": "Up to £350k",
        "PBR": 444
    },
    {
        "UID": 1156,
        "OR": 984,
        "SN": "Brownhills",
        "PE": 153,
        "QL": 990,
        "AC": 1258,
        "PB": "Up to £350k",
        "PBR": 445
    },
    {
        "UID": 1157,
        "OR": 986,
        "SN": "Littleport",
        "PE": 1002,
        "QL": 470,
        "AC": 993,
        "PB": "Up to £350k",
        "PBR": 446
    },
    {
        "UID": 1158,
        "OR": 987,
        "SN": "Loughor",
        "PE": 331,
        "QL": 1056,
        "AC": 1149,
        "PB": "Up to £350k",
        "PBR": 447
    },
    {
        "UID": 1159,
        "OR": 988,
        "SN": "Willenhall",
        "PE": 414,
        "QL": 589,
        "AC": 1217,
        "PB": "Up to £350k",
        "PBR": 448
    },
    {
        "UID": 1160,
        "OR": 989,
        "SN": "Kirton (Boston)",
        "PE": 1270,
        "QL": 723,
        "AC": 597,
        "PB": "Up to £350k",
        "PBR": 449
    },
    {
        "UID": 1161,
        "OR": 990,
        "SN": "Ripley",
        "PE": 863,
        "QL": 909,
        "AC": 886,
        "PB": "Up to £350k",
        "PBR": 450
    },
    {
        "UID": 1162,
        "OR": 992,
        "SN": "Bourne",
        "PE": 1127,
        "QL": 1177,
        "AC": 516,
        "PB": "Up to £350k",
        "PBR": 451
    },
    {
        "UID": 1163,
        "OR": 994,
        "SN": "Thornaby-on-Tees",
        "PE": 547,
        "QL": 593,
        "AC": 1202,
        "PB": "Up to £350k",
        "PBR": 452
    },
    {
        "UID": 1164,
        "OR": 995,
        "SN": "Colburn",
        "PE": 904,
        "QL": 395,
        "AC": 1108,
        "PB": "Up to £350k",
        "PBR": 453
    },
    {
        "UID": 1165,
        "OR": 997,
        "SN": "Stakeford",
        "PE": 348,
        "QL": 159,
        "AC": 1349,
        "PB": "Up to £350k",
        "PBR": 454
    },
    {
        "UID": 1166,
        "OR": 998,
        "SN": "Pocklington",
        "PE": 1135,
        "QL": 1130,
        "AC": 550,
        "PB": "Up to £350k",
        "PBR": 455
    },
    {
        "UID": 1167,
        "OR": 998,
        "SN": "Burnopfield",
        "PE": 1059,
        "QL": 889,
        "AC": 768,
        "PB": "Up to £350k",
        "PBR": 455
    },
    {
        "UID": 1168,
        "OR": 1002,
        "SN": "Darlaston",
        "PE": 583,
        "QL": 1162,
        "AC": 953,
        "PB": "Up to £350k",
        "PBR": 457
    },
    {
        "UID": 1169,
        "OR": 1003,
        "SN": "Chilton (County Durham)",
        "PE": 1207,
        "QL": 243,
        "AC": 963,
        "PB": "Up to £350k",
        "PBR": 458
    },
    {
        "UID": 1170,
        "OR": 1004,
        "SN": "Middleton (Rochdale)",
        "PE": 711,
        "QL": 1035,
        "AC": 927,
        "PB": "Up to £350k",
        "PBR": 459
    },
    {
        "UID": 1171,
        "OR": 1007,
        "SN": "Earl Shilton",
        "PE": 1321,
        "QL": 156,
        "AC": 896,
        "PB": "Up to £350k",
        "PBR": 460
    },
    {
        "UID": 1172,
        "OR": 1008,
        "SN": "Tibshelf",
        "PE": 1104,
        "QL": 918,
        "AC": 719,
        "PB": "Up to £350k",
        "PBR": 461
    },
    {
        "UID": 1173,
        "OR": 1010,
        "SN": "Blackhall Colliery",
        "PE": 449,
        "QL": 98,
        "AC": 1347,
        "PB": "Up to £350k",
        "PBR": 462
    },
    {
        "UID": 1174,
        "OR": 1014,
        "SN": "Mexborough",
        "PE": 695,
        "QL": 728,
        "AC": 1086,
        "PB": "Up to £350k",
        "PBR": 463
    },
    {
        "UID": 1175,
        "OR": 1015,
        "SN": "Wednesfield",
        "PE": 250,
        "QL": 815,
        "AC": 1274,
        "PB": "Up to £350k",
        "PBR": 464
    },
    {
        "UID": 1176,
        "OR": 1016,
        "SN": "Barrow upon Humber",
        "PE": 1212,
        "QL": 1266,
        "AC": 394,
        "PB": "Up to £350k",
        "PBR": 465
    },
    {
        "UID": 1177,
        "OR": 1017,
        "SN": "Doncaster",
        "PE": 1037,
        "QL": 533,
        "AC": 951,
        "PB": "Up to £350k",
        "PBR": 466
    },
    {
        "UID": 1178,
        "OR": 1018,
        "SN": "Royton",
        "PE": 977,
        "QL": 372,
        "AC": 1092,
        "PB": "Up to £350k",
        "PBR": 467
    },
    {
        "UID": 1179,
        "OR": 1019,
        "SN": "Redcar",
        "PE": 542,
        "QL": 1039,
        "AC": 1090,
        "PB": "Up to £350k",
        "PBR": 468
    },
    {
        "UID": 1180,
        "OR": 1020,
        "SN": "Ossett",
        "PE": 1192,
        "QL": 373,
        "AC": 896,
        "PB": "Up to £350k",
        "PBR": 469
    },
    {
        "UID": 1181,
        "OR": 1022,
        "SN": "Laceby",
        "PE": 674,
        "QL": 915,
        "AC": 1043,
        "PB": "Up to £350k",
        "PBR": 470
    },
    {
        "UID": 1182,
        "OR": 1024,
        "SN": "Holsworthy",
        "PE": 1089,
        "QL": 947,
        "AC": 731,
        "PB": "Up to £350k",
        "PBR": 471
    },
    {
        "UID": 1183,
        "OR": 1027,
        "SN": "Gamesley",
        "PE": 543,
        "QL": 851,
        "AC": 1170,
        "PB": "Up to £350k",
        "PBR": 472
    },
    {
        "UID": 1184,
        "OR": 1029,
        "SN": "Scunthorpe",
        "PE": 1206,
        "QL": 114,
        "AC": 1095,
        "PB": "Up to £350k",
        "PBR": 473
    },
    {
        "UID": 1185,
        "OR": 1030,
        "SN": "West Bromwich",
        "PE": 601,
        "QL": 1240,
        "AC": 916,
        "PB": "Up to £350k",
        "PBR": 474
    },
    {
        "UID": 1186,
        "OR": 1037,
        "SN": "Leyland",
        "PE": 1164,
        "QL": 233,
        "AC": 1057,
        "PB": "Up to £350k",
        "PBR": 475
    },
    {
        "UID": 1187,
        "OR": 1040,
        "SN": "Awsworth",
        "PE": 1013,
        "QL": 490,
        "AC": 1038,
        "PB": "Up to £350k",
        "PBR": 476
    },
    {
        "UID": 1188,
        "OR": 1041,
        "SN": "Belton (Great Yarmouth)",
        "PE": 258,
        "QL": 1091,
        "AC": 1205,
        "PB": "Up to £350k",
        "PBR": 477
    },
    {
        "UID": 1189,
        "OR": 1042,
        "SN": "Pontycymer",
        "PE": 1106,
        "QL": 689,
        "AC": 852,
        "PB": "Up to £350k",
        "PBR": 478
    },
    {
        "UID": 1190,
        "OR": 1043,
        "SN": "Wallasey",
        "PE": 967,
        "QL": 718,
        "AC": 973,
        "PB": "Up to £350k",
        "PBR": 479
    },
    {
        "UID": 1191,
        "OR": 1044,
        "SN": "Thorpe Hesley",
        "PE": 1006,
        "QL": 540,
        "AC": 1024,
        "PB": "Up to £350k",
        "PBR": 480
    },
    {
        "UID": 1192,
        "OR": 1047,
        "SN": "Shaw (Oldham)",
        "PE": 944,
        "QL": 499,
        "AC": 1089,
        "PB": "Up to £350k",
        "PBR": 481
    },
    {
        "UID": 1193,
        "OR": 1047,
        "SN": "Askern",
        "PE": 1287,
        "QL": 263,
        "AC": 898,
        "PB": "Up to £350k",
        "PBR": 481
    },
    {
        "UID": 1194,
        "OR": 1049,
        "SN": "Tuxford",
        "PE": 1329,
        "QL": 1226,
        "AC": 341,
        "PB": "Up to £350k",
        "PBR": 483
    },
    {
        "UID": 1195,
        "OR": 1050,
        "SN": "Newhey",
        "PE": 444,
        "QL": 1041,
        "AC": 1143,
        "PB": "Up to £350k",
        "PBR": 484
    },
    {
        "UID": 1196,
        "OR": 1052,
        "SN": "Long Eaton",
        "PE": 699,
        "QL": 1127,
        "AC": 931,
        "PB": "Up to £350k",
        "PBR": 485
    },
    {
        "UID": 1197,
        "OR": 1053,
        "SN": "Newbold Verdon",
        "PE": 1315,
        "QL": 572,
        "AC": 696,
        "PB": "Up to £350k",
        "PBR": 486
    },
    {
        "UID": 1198,
        "OR": 1057,
        "SN": "Kettering",
        "PE": 1350,
        "QL": 522,
        "AC": 700,
        "PB": "Up to £350k",
        "PBR": 487
    },
    {
        "UID": 1199,
        "OR": 1058,
        "SN": "Ellesmere Port",
        "PE": 980,
        "QL": 528,
        "AC": 1060,
        "PB": "Up to £350k",
        "PBR": 488
    },
    {
        "UID": 1200,
        "OR": 1059,
        "SN": "Gwaun-Cae-Gurwen",
        "PE": 726,
        "QL": 526,
        "AC": 1184,
        "PB": "Up to £350k",
        "PBR": 489
    },
    {
        "UID": 1201,
        "OR": 1060,
        "SN": "Madeley",
        "PE": 1237,
        "QL": 949,
        "AC": 635,
        "PB": "Up to £350k",
        "PBR": 490
    },
    {
        "UID": 1202,
        "OR": 1062,
        "SN": "Nelson (Caerphilly)",
        "PE": 1118,
        "QL": 434,
        "AC": 1010,
        "PB": "Up to £350k",
        "PBR": 491
    },
    {
        "UID": 1203,
        "OR": 1066,
        "SN": "Conisbrough",
        "PE": 797,
        "QL": 710,
        "AC": 1113,
        "PB": "Up to £350k",
        "PBR": 492
    },
    {
        "UID": 1204,
        "OR": 1067,
        "SN": "Baddesley Ensor",
        "PE": 1246,
        "QL": 317,
        "AC": 967,
        "PB": "Up to £350k",
        "PBR": 493
    },
    {
        "UID": 1205,
        "OR": 1069,
        "SN": "Kearsley",
        "PE": 599,
        "QL": 922,
        "AC": 1159,
        "PB": "Up to £350k",
        "PBR": 494
    },
    {
        "UID": 1206,
        "OR": 1070,
        "SN": "Pilsley",
        "PE": 1049,
        "QL": 922,
        "AC": 854,
        "PB": "Up to £350k",
        "PBR": 495
    },
    {
        "UID": 1207,
        "OR": 1071,
        "SN": "Jarrow",
        "PE": 753,
        "QL": 1120,
        "AC": 949,
        "PB": "Up to £350k",
        "PBR": 496
    },
    {
        "UID": 1208,
        "OR": 1072,
        "SN": "Standish",
        "PE": 1261,
        "QL": 1034,
        "AC": 576,
        "PB": "Up to £350k",
        "PBR": 497
    },
    {
        "UID": 1209,
        "OR": 1073,
        "SN": "Kegworth",
        "PE": 849,
        "QL": 1327,
        "AC": 666,
        "PB": "Up to £350k",
        "PBR": 498
    },
    {
        "UID": 1210,
        "OR": 1076,
        "SN": "Tyldesley",
        "PE": 1273,
        "QL": 905,
        "AC": 647,
        "PB": "Up to £350k",
        "PBR": 499
    },
    {
        "UID": 1211,
        "OR": 1077,
        "SN": "Longton",
        "PE": 1170,
        "QL": 380,
        "AC": 1027,
        "PB": "Up to £350k",
        "PBR": 500
    },
    {
        "UID": 1212,
        "OR": 1079,
        "SN": "Goole",
        "PE": 805,
        "QL": 1230,
        "AC": 860,
        "PB": "Up to £350k",
        "PBR": 501
    },
    {
        "UID": 1213,
        "OR": 1080,
        "SN": "Crosby",
        "PE": 1148,
        "QL": 1027,
        "AC": 728,
        "PB": "Up to £350k",
        "PBR": 502
    },
    {
        "UID": 1214,
        "OR": 1082,
        "SN": "Pontllan-fraith",
        "PE": 545,
        "QL": 962,
        "AC": 1187,
        "PB": "Up to £350k",
        "PBR": 503
    },
    {
        "UID": 1215,
        "OR": 1084,
        "SN": "Prescot",
        "PE": 1341,
        "QL": 559,
        "AC": 741,
        "PB": "Up to £350k",
        "PBR": 504
    },
    {
        "UID": 1216,
        "OR": 1085,
        "SN": "Cottingham",
        "PE": 1279,
        "QL": 853,
        "AC": 682,
        "PB": "Up to £350k",
        "PBR": 505
    },
    {
        "UID": 1217,
        "OR": 1085,
        "SN": "Measham",
        "PE": 1256,
        "QL": 793,
        "AC": 737,
        "PB": "Up to £350k",
        "PBR": 505
    },
    {
        "UID": 1218,
        "OR": 1087,
        "SN": "Kirkby",
        "PE": 1103,
        "QL": 274,
        "AC": 1146,
        "PB": "Up to £350k",
        "PBR": 507
    },
    {
        "UID": 1219,
        "OR": 1088,
        "SN": "Peterlee",
        "PE": 664,
        "QL": 446,
        "AC": 1248,
        "PB": "Up to £350k",
        "PBR": 508
    },
    {
        "UID": 1220,
        "OR": 1091,
        "SN": "Melton Mowbray",
        "PE": 992,
        "QL": 1009,
        "AC": 891,
        "PB": "Up to £350k",
        "PBR": 509
    },
    {
        "UID": 1221,
        "OR": 1092,
        "SN": "Haslingden",
        "PE": 1066,
        "QL": 1193,
        "AC": 715,
        "PB": "Up to £350k",
        "PBR": 510
    },
    {
        "UID": 1222,
        "OR": 1093,
        "SN": "Gowerton",
        "PE": 400,
        "QL": 890,
        "AC": 1235,
        "PB": "Up to £350k",
        "PBR": 511
    },
    {
        "UID": 1223,
        "OR": 1094,
        "SN": "Seaton Delaval",
        "PE": 1179,
        "QL": 336,
        "AC": 1067,
        "PB": "Up to £350k",
        "PBR": 512
    },
    {
        "UID": 1224,
        "OR": 1096,
        "SN": "Netherton",
        "PE": 1161,
        "QL": 313,
        "AC": 1105,
        "PB": "Up to £350k",
        "PBR": 513
    },
    {
        "UID": 1225,
        "OR": 1099,
        "SN": "Rushden",
        "PE": 1299,
        "QL": 738,
        "AC": 730,
        "PB": "Up to £350k",
        "PBR": 514
    },
    {
        "UID": 1226,
        "OR": 1100,
        "SN": "Wallsend",
        "PE": 869,
        "QL": 868,
        "AC": 1074,
        "PB": "Up to £350k",
        "PBR": 515
    },
    {
        "UID": 1227,
        "OR": 1104,
        "SN": "Highley",
        "PE": 1033,
        "QL": 566,
        "AC": 1083,
        "PB": "Up to £350k",
        "PBR": 516
    },
    {
        "UID": 1228,
        "OR": 1106,
        "SN": "Shotton",
        "PE": 761,
        "QL": 748,
        "AC": 1180,
        "PB": "Up to £350k",
        "PBR": 517
    },
    {
        "UID": 1229,
        "OR": 1107,
        "SN": "Westhoughton",
        "PE": 1276,
        "QL": 477,
        "AC": 901,
        "PB": "Up to £350k",
        "PBR": 518
    },
    {
        "UID": 1230,
        "OR": 1109,
        "SN": "Hebburn",
        "PE": 869,
        "QL": 1144,
        "AC": 945,
        "PB": "Up to £350k",
        "PBR": 519
    },
    {
        "UID": 1231,
        "OR": 1113,
        "SN": "Shirebrook",
        "PE": 1202,
        "QL": 314,
        "AC": 1096,
        "PB": "Up to £350k",
        "PBR": 520
    },
    {
        "UID": 1232,
        "OR": 1114,
        "SN": "Partington",
        "PE": 787,
        "QL": 215,
        "AC": 1313,
        "PB": "Up to £350k",
        "PBR": 521
    },
    {
        "UID": 1233,
        "OR": 1118,
        "SN": "Deeside Industrial Park",
        "PE": 685,
        "QL": 488,
        "AC": 1272,
        "PB": "Up to £350k",
        "PBR": 522
    },
    {
        "UID": 1234,
        "OR": 1119,
        "SN": "Shavington",
        "PE": 1253,
        "QL": 929,
        "AC": 753,
        "PB": "Up to £350k",
        "PBR": 523
    },
    {
        "UID": 1235,
        "OR": 1120,
        "SN": "Hendreforgan",
        "PE": 1136,
        "QL": 767,
        "AC": 964,
        "PB": "Up to £350k",
        "PBR": 524
    },
    {
        "UID": 1236,
        "OR": 1123,
        "SN": "Stanley",
        "PE": 1060,
        "QL": 183,
        "AC": 1240,
        "PB": "Up to £350k",
        "PBR": 525
    },
    {
        "UID": 1237,
        "OR": 1125,
        "SN": "Cwmavon",
        "PE": 361,
        "QL": 1068,
        "AC": 1241,
        "PB": "Up to £350k",
        "PBR": 526
    },
    {
        "UID": 1238,
        "OR": 1129,
        "SN": "Shotton Colliery",
        "PE": 890,
        "QL": 153,
        "AC": 1321,
        "PB": "Up to £350k",
        "PBR": 527
    },
    {
        "UID": 1239,
        "OR": 1136,
        "SN": "Seaham",
        "PE": 368,
        "QL": 815,
        "AC": 1318,
        "PB": "Up to £350k",
        "PBR": 528
    },
    {
        "UID": 1240,
        "OR": 1137,
        "SN": "Hinckley",
        "PE": 1101,
        "QL": 455,
        "AC": 1151,
        "PB": "Up to £350k",
        "PBR": 529
    },
    {
        "UID": 1241,
        "OR": 1139,
        "SN": "Kippax",
        "PE": 1244,
        "QL": 307,
        "AC": 1116,
        "PB": "Up to £350k",
        "PBR": 530
    },
    {
        "UID": 1242,
        "OR": 1140,
        "SN": "Rainford",
        "PE": 1317,
        "QL": 369,
        "AC": 1013,
        "PB": "Up to £350k",
        "PBR": 531
    },
    {
        "UID": 1243,
        "OR": 1142,
        "SN": "Kingswinford",
        "PE": 809,
        "QL": 875,
        "AC": 1178,
        "PB": "Up to £350k",
        "PBR": 532
    },
    {
        "UID": 1244,
        "OR": 1143,
        "SN": "Shevington Vale",
        "PE": 680,
        "QL": 958,
        "AC": 1194,
        "PB": "Up to £350k",
        "PBR": 533
    },
    {
        "UID": 1245,
        "OR": 1144,
        "SN": "Burntwood",
        "PE": 264,
        "QL": 1196,
        "AC": 1282,
        "PB": "Up to £350k",
        "PBR": 534
    },
    {
        "UID": 1246,
        "OR": 1145,
        "SN": "Newcastle-under-Lyme",
        "PE": 1168,
        "QL": 609,
        "AC": 1056,
        "PB": "Up to £350k",
        "PBR": 535
    },
    {
        "UID": 1247,
        "OR": 1146,
        "SN": "Jacksdale",
        "PE": 1174,
        "QL": 427,
        "AC": 1130,
        "PB": "Up to £350k",
        "PBR": 536
    },
    {
        "UID": 1248,
        "OR": 1151,
        "SN": "Coalville",
        "PE": 1297,
        "QL": 660,
        "AC": 886,
        "PB": "Up to £350k",
        "PBR": 537
    },
    {
        "UID": 1249,
        "OR": 1152,
        "SN": "Haslington",
        "PE": 1219,
        "QL": 799,
        "AC": 941,
        "PB": "Up to £350k",
        "PBR": 538
    },
    {
        "UID": 1250,
        "OR": 1156,
        "SN": "Earby",
        "PE": 948,
        "QL": 1224,
        "AC": 969,
        "PB": "Up to £350k",
        "PBR": 539
    },
    {
        "UID": 1251,
        "OR": 1160,
        "SN": "Yaxley",
        "PE": 1157,
        "QL": 814,
        "AC": 1032,
        "PB": "Up to £350k",
        "PBR": 540
    },
    {
        "UID": 1252,
        "OR": 1162,
        "SN": "Carlton in Lindrick",
        "PE": 1263,
        "QL": 478,
        "AC": 1047,
        "PB": "Up to £350k",
        "PBR": 541
    },
    {
        "UID": 1253,
        "OR": 1163,
        "SN": "Washingborough",
        "PE": 821,
        "QL": 1323,
        "AC": 883,
        "PB": "Up to £350k",
        "PBR": 542
    },
    {
        "UID": 1254,
        "OR": 1165,
        "SN": "Rothwell",
        "PE": 988,
        "QL": 683,
        "AC": 1179,
        "PB": "Up to £350k",
        "PBR": 543
    },
    {
        "UID": 1255,
        "OR": 1166,
        "SN": "Penyffordd",
        "PE": 1000,
        "QL": 878,
        "AC": 1126,
        "PB": "Up to £350k",
        "PBR": 544
    },
    {
        "UID": 1256,
        "OR": 1169,
        "SN": "Wittering Airfield",
        "PE": 1371,
        "QL": 900,
        "AC": 771,
        "PB": "Up to £350k",
        "PBR": 545
    },
    {
        "UID": 1257,
        "OR": 1171,
        "SN": "Whitley Bay",
        "PE": 860,
        "QL": 992,
        "AC": 1163,
        "PB": "Up to £350k",
        "PBR": 546
    },
    {
        "UID": 1258,
        "OR": 1173,
        "SN": "Brierley Hill",
        "PE": 608,
        "QL": 779,
        "AC": 1306,
        "PB": "Up to £350k",
        "PBR": 547
    },
    {
        "UID": 1259,
        "OR": 1174,
        "SN": "Market Warsop",
        "PE": 1241,
        "QL": 323,
        "AC": 1167,
        "PB": "Up to £350k",
        "PBR": 548
    },
    {
        "UID": 1260,
        "OR": 1175,
        "SN": "Messingham",
        "PE": 1214,
        "QL": 375,
        "AC": 1166,
        "PB": "Up to £350k",
        "PBR": 549
    },
    {
        "UID": 1261,
        "OR": 1178,
        "SN": "Golborne",
        "PE": 1301,
        "QL": 519,
        "AC": 1031,
        "PB": "Up to £350k",
        "PBR": 550
    },
    {
        "UID": 1262,
        "OR": 1180,
        "SN": "Connah's Quay",
        "PE": 647,
        "QL": 615,
        "AC": 1315,
        "PB": "Up to £350k",
        "PBR": 551
    },
    {
        "UID": 1263,
        "OR": 1182,
        "SN": "Watlington (King's Lynn and West Norfolk)",
        "PE": 1080,
        "QL": 1035,
        "AC": 1025,
        "PB": "Up to £350k",
        "PBR": 552
    },
    {
        "UID": 1264,
        "OR": 1183,
        "SN": "Halesowen",
        "PE": 1026,
        "QL": 1327,
        "AC": 786,
        "PB": "Up to £350k",
        "PBR": 553
    },
    {
        "UID": 1265,
        "OR": 1184,
        "SN": "Aldridge",
        "PE": 431,
        "QL": 1185,
        "AC": 1242,
        "PB": "Up to £350k",
        "PBR": 554
    },
    {
        "UID": 1266,
        "OR": 1187,
        "SN": "Oldbury (Sandwell)",
        "PE": 612,
        "QL": 1271,
        "AC": 1165,
        "PB": "Up to £350k",
        "PBR": 555
    },
    {
        "UID": 1267,
        "OR": 1188,
        "SN": "Hindley",
        "PE": 1288,
        "QL": 300,
        "AC": 1159,
        "PB": "Up to £350k",
        "PBR": 556
    },
    {
        "UID": 1268,
        "OR": 1189,
        "SN": "Skelmersdale",
        "PE": 1292,
        "QL": 99,
        "AC": 1232,
        "PB": "Up to £350k",
        "PBR": 557
    },
    {
        "UID": 1269,
        "OR": 1190,
        "SN": "Walton",
        "PE": 1221,
        "QL": 1115,
        "AC": 844,
        "PB": "Up to £350k",
        "PBR": 558
    },
    {
        "UID": 1270,
        "OR": 1191,
        "SN": "Hedon",
        "PE": 1230,
        "QL": 1177,
        "AC": 811,
        "PB": "Up to £350k",
        "PBR": 559
    },
    {
        "UID": 1271,
        "OR": 1191,
        "SN": "Kirkby-in-Ashfield",
        "PE": 1205,
        "QL": 283,
        "AC": 1217,
        "PB": "Up to £350k",
        "PBR": 559
    },
    {
        "UID": 1272,
        "OR": 1193,
        "SN": "Sutton in Ashfield",
        "PE": 1160,
        "QL": 648,
        "AC": 1128,
        "PB": "Up to £350k",
        "PBR": 561
    },
    {
        "UID": 1273,
        "OR": 1195,
        "SN": "South Hetton",
        "PE": 907,
        "QL": 109,
        "AC": 1358,
        "PB": "Up to £350k",
        "PBR": 562
    },
    {
        "UID": 1274,
        "OR": 1199,
        "SN": "Kimberley",
        "PE": 1243,
        "QL": 708,
        "AC": 1050,
        "PB": "Up to £350k",
        "PBR": 563
    },
    {
        "UID": 1275,
        "OR": 1200,
        "SN": "Castle Donington",
        "PE": 1291,
        "QL": 1247,
        "AC": 694,
        "PB": "Up to £350k",
        "PBR": 564
    },
    {
        "UID": 1276,
        "OR": 1201,
        "SN": "Thurnscoe",
        "PE": 1200,
        "QL": 388,
        "AC": 1201,
        "PB": "Up to £350k",
        "PBR": 565
    },
    {
        "UID": 1277,
        "OR": 1206,
        "SN": "Mansfield Woodhouse",
        "PE": 1218,
        "QL": 451,
        "AC": 1176,
        "PB": "Up to £350k",
        "PBR": 566
    },
    {
        "UID": 1278,
        "OR": 1207,
        "SN": "Hucknall",
        "PE": 1247,
        "QL": 470,
        "AC": 1151,
        "PB": "Up to £350k",
        "PBR": 567
    },
    {
        "UID": 1279,
        "OR": 1209,
        "SN": "Llay",
        "PE": 730,
        "QL": 367,
        "AC": 1351,
        "PB": "Up to £350k",
        "PBR": 568
    },
    {
        "UID": 1280,
        "OR": 1210,
        "SN": "Rainworth",
        "PE": 1051,
        "QL": 512,
        "AC": 1233,
        "PB": "Up to £350k",
        "PBR": 569
    },
    {
        "UID": 1281,
        "OR": 1211,
        "SN": "Skellingthorpe",
        "PE": 1259,
        "QL": 1216,
        "AC": 783,
        "PB": "Up to £350k",
        "PBR": 570
    },
    {
        "UID": 1282,
        "OR": 1212,
        "SN": "Rhoose",
        "PE": 438,
        "QL": 1132,
        "AC": 1295,
        "PB": "Up to £350k",
        "PBR": 571
    },
    {
        "UID": 1283,
        "OR": 1215,
        "SN": "Kiveton Park",
        "PE": 1175,
        "QL": 671,
        "AC": 1147,
        "PB": "Up to £350k",
        "PBR": 572
    },
    {
        "UID": 1284,
        "OR": 1217,
        "SN": "Desborough",
        "PE": 1362,
        "QL": 859,
        "AC": 890,
        "PB": "Up to £350k",
        "PBR": 573
    },
    {
        "UID": 1285,
        "OR": 1220,
        "SN": "Brinsley",
        "PE": 1203,
        "QL": 532,
        "AC": 1173,
        "PB": "Up to £350k",
        "PBR": 574
    },
    {
        "UID": 1286,
        "OR": 1221,
        "SN": "Ryhill",
        "PE": 1216,
        "QL": 88,
        "AC": 1319,
        "PB": "Up to £350k",
        "PBR": 575
    },
    {
        "UID": 1287,
        "OR": 1222,
        "SN": "Brough",
        "PE": 1138,
        "QL": 1354,
        "AC": 691,
        "PB": "Up to £350k",
        "PBR": 576
    },
    {
        "UID": 1288,
        "OR": 1224,
        "SN": "Newton (Bolsover)",
        "PE": 1126,
        "QL": 1362,
        "AC": 643,
        "PB": "Up to £350k",
        "PBR": 577
    },
    {
        "UID": 1289,
        "OR": 1225,
        "SN": "Tipton",
        "PE": 414,
        "QL": 1184,
        "AC": 1304,
        "PB": "Up to £350k",
        "PBR": 578
    },
    {
        "UID": 1290,
        "OR": 1226,
        "SN": "North Walney",
        "PE": 322,
        "QL": 1068,
        "AC": 1344,
        "PB": "Up to £350k",
        "PBR": 579
    },
    {
        "UID": 1291,
        "OR": 1227,
        "SN": "West Hallam",
        "PE": 1210,
        "QL": 752,
        "AC": 1117,
        "PB": "Up to £350k",
        "PBR": 580
    },
    {
        "UID": 1292,
        "OR": 1228,
        "SN": "Normanton",
        "PE": 1125,
        "QL": 377,
        "AC": 1273,
        "PB": "Up to £350k",
        "PBR": 581
    },
    {
        "UID": 1293,
        "OR": 1229,
        "SN": "Pyle",
        "PE": 882,
        "QL": 1299,
        "AC": 1059,
        "PB": "Up to £350k",
        "PBR": 582
    },
    {
        "UID": 1294,
        "OR": 1230,
        "SN": "Selston",
        "PE": 1185,
        "QL": 458,
        "AC": 1221,
        "PB": "Up to £350k",
        "PBR": 583
    },
    {
        "UID": 1295,
        "OR": 1231,
        "SN": "Maltby",
        "PE": 1233,
        "QL": 480,
        "AC": 1191,
        "PB": "Up to £350k",
        "PBR": 584
    },
    {
        "UID": 1296,
        "OR": 1232,
        "SN": "Irlam",
        "PE": 741,
        "QL": 893,
        "AC": 1302,
        "PB": "Up to £350k",
        "PBR": 585
    },
    {
        "UID": 1297,
        "OR": 1233,
        "SN": "Higher Folds",
        "PE": 1286,
        "QL": 9,
        "AC": 1372,
        "PB": "Up to £350k",
        "PBR": 586
    },
    {
        "UID": 1298,
        "OR": 1235,
        "SN": "Immingham",
        "PE": 1013,
        "QL": 1341,
        "AC": 904,
        "PB": "Up to £350k",
        "PBR": 587
    },
    {
        "UID": 1299,
        "OR": 1238,
        "SN": "Swinton",
        "PE": 1224,
        "QL": 927,
        "AC": 1080,
        "PB": "Up to £350k",
        "PBR": 588
    },
    {
        "UID": 1300,
        "OR": 1239,
        "SN": "Sherburn (County Durham)",
        "PE": 1078,
        "QL": 291,
        "AC": 1328,
        "PB": "Up to £350k",
        "PBR": 589
    },
    {
        "UID": 1301,
        "OR": 1241,
        "SN": "Freckleton",
        "PE": 1171,
        "QL": 1196,
        "AC": 994,
        "PB": "Up to £350k",
        "PBR": 590
    },
    {
        "UID": 1302,
        "OR": 1242,
        "SN": "Widdrington Station",
        "PE": 822,
        "QL": 309,
        "AC": 1361,
        "PB": "Up to £350k",
        "PBR": 591
    },
    {
        "UID": 1303,
        "OR": 1243,
        "SN": "Litherland",
        "PE": 719,
        "QL": 1026,
        "AC": 1287,
        "PB": "Up to £350k",
        "PBR": 592
    },
    {
        "UID": 1304,
        "OR": 1248,
        "SN": "Rawmarsh",
        "PE": 924,
        "QL": 925,
        "AC": 1253,
        "PB": "Up to £350k",
        "PBR": 593
    },
    {
        "UID": 1305,
        "OR": 1249,
        "SN": "Maghull",
        "PE": 688,
        "QL": 939,
        "AC": 1315,
        "PB": "Up to £350k",
        "PBR": 594
    },
    {
        "UID": 1306,
        "OR": 1251,
        "SN": "Thorpe Willoughby",
        "PE": 1300,
        "QL": 1063,
        "AC": 939,
        "PB": "Up to £350k",
        "PBR": 595
    },
    {
        "UID": 1307,
        "OR": 1252,
        "SN": "Great Wyrley",
        "PE": 819,
        "QL": 958,
        "AC": 1284,
        "PB": "Up to £350k",
        "PBR": 596
    },
    {
        "UID": 1308,
        "OR": 1253,
        "SN": "Whitefield",
        "PE": 1026,
        "QL": 985,
        "AC": 1216,
        "PB": "Up to £350k",
        "PBR": 597
    },
    {
        "UID": 1309,
        "OR": 1254,
        "SN": "Clifton (City of Nottingham)",
        "PE": 1121,
        "QL": 678,
        "AC": 1236,
        "PB": "Up to £350k",
        "PBR": 598
    },
    {
        "UID": 1310,
        "OR": 1255,
        "SN": "Ashton-in-Makerfield",
        "PE": 1307,
        "QL": 434,
        "AC": 1207,
        "PB": "Up to £350k",
        "PBR": 599
    },
    {
        "UID": 1311,
        "OR": 1256,
        "SN": "Brayton",
        "PE": 1117,
        "QL": 938,
        "AC": 1190,
        "PB": "Up to £350k",
        "PBR": 600
    },
    {
        "UID": 1312,
        "OR": 1258,
        "SN": "Bedworth",
        "PE": 1025,
        "QL": 326,
        "AC": 1345,
        "PB": "Up to £350k",
        "PBR": 601
    },
    {
        "UID": 1313,
        "OR": 1260,
        "SN": "Upton (Wakefield)",
        "PE": 1254,
        "QL": 362,
        "AC": 1262,
        "PB": "Up to £350k",
        "PBR": 602
    },
    {
        "UID": 1314,
        "OR": 1261,
        "SN": "Stretford",
        "PE": 587,
        "QL": 1249,
        "AC": 1298,
        "PB": "Up to £350k",
        "PBR": 603
    },
    {
        "UID": 1315,
        "OR": 1264,
        "SN": "Hambleton (Wyre)",
        "PE": 398,
        "QL": 1164,
        "AC": 1342,
        "PB": "Up to £350k",
        "PBR": 604
    },
    {
        "UID": 1316,
        "OR": 1265,
        "SN": "South Normanton",
        "PE": 1150,
        "QL": 1185,
        "AC": 1088,
        "PB": "Up to £350k",
        "PBR": 605
    },
    {
        "UID": 1317,
        "OR": 1266,
        "SN": "Rowley Regis",
        "PE": 570,
        "QL": 1238,
        "AC": 1314,
        "PB": "Up to £350k",
        "PBR": 606
    },
    {
        "UID": 1318,
        "OR": 1270,
        "SN": "Sharlston",
        "PE": 1248,
        "QL": 380,
        "AC": 1279,
        "PB": "Up to £350k",
        "PBR": 607
    },
    {
        "UID": 1319,
        "OR": 1273,
        "SN": "Swillington",
        "PE": 1234,
        "QL": 352,
        "AC": 1300,
        "PB": "Up to £350k",
        "PBR": 608
    },
    {
        "UID": 1320,
        "OR": 1274,
        "SN": "Bowburn",
        "PE": 1113,
        "QL": 952,
        "AC": 1210,
        "PB": "Up to £350k",
        "PBR": 609
    },
    {
        "UID": 1321,
        "OR": 1277,
        "SN": "Billinge",
        "PE": 1313,
        "QL": 333,
        "AC": 1266,
        "PB": "Up to £350k",
        "PBR": 610
    },
    {
        "UID": 1322,
        "OR": 1278,
        "SN": "Pencoed",
        "PE": 274,
        "QL": 1361,
        "AC": 1294,
        "PB": "Up to £350k",
        "PBR": 611
    },
    {
        "UID": 1323,
        "OR": 1280,
        "SN": "Little Lever",
        "PE": 735,
        "QL": 921,
        "AC": 1338,
        "PB": "Up to £350k",
        "PBR": 612
    },
    {
        "UID": 1324,
        "OR": 1284,
        "SN": "Blidworth",
        "PE": 1269,
        "QL": 392,
        "AC": 1283,
        "PB": "Up to £350k",
        "PBR": 613
    },
    {
        "UID": 1325,
        "OR": 1286,
        "SN": "Crofton",
        "PE": 1240,
        "QL": 687,
        "AC": 1222,
        "PB": "Up to £350k",
        "PBR": 614
    },
    {
        "UID": 1326,
        "OR": 1289,
        "SN": "Bayston Hill",
        "PE": 935,
        "QL": 1124,
        "AC": 1267,
        "PB": "Up to £350k",
        "PBR": 615
    },
    {
        "UID": 1327,
        "OR": 1290,
        "SN": "Scotter",
        "PE": 1220,
        "QL": 1291,
        "AC": 992,
        "PB": "Up to £350k",
        "PBR": 616
    },
    {
        "UID": 1328,
        "OR": 1291,
        "SN": "New Rossington",
        "PE": 1285,
        "QL": 252,
        "AC": 1320,
        "PB": "Up to £350k",
        "PBR": 617
    },
    {
        "UID": 1329,
        "OR": 1294,
        "SN": "Cleveleys",
        "PE": 676,
        "QL": 745,
        "AC": 1366,
        "PB": "Up to £350k",
        "PBR": 618
    },
    {
        "UID": 1330,
        "OR": 1295,
        "SN": "Broughton (Flintshire)",
        "PE": 1069,
        "QL": 1123,
        "AC": 1211,
        "PB": "Up to £350k",
        "PBR": 619
    },
    {
        "UID": 1331,
        "OR": 1297,
        "SN": "Thurcroft",
        "PE": 1211,
        "QL": 275,
        "AC": 1339,
        "PB": "Up to £350k",
        "PBR": 620
    },
    {
        "UID": 1332,
        "OR": 1298,
        "SN": "Newton Aycliffe",
        "PE": 1197,
        "QL": 280,
        "AC": 1342,
        "PB": "Up to £350k",
        "PBR": 621
    },
    {
        "UID": 1333,
        "OR": 1300,
        "SN": "Waltham",
        "PE": 788,
        "QL": 1283,
        "AC": 1256,
        "PB": "Up to £350k",
        "PBR": 622
    },
    {
        "UID": 1334,
        "OR": 1302,
        "SN": "Ruskington",
        "PE": 1267,
        "QL": 1104,
        "AC": 1120,
        "PB": "Up to £350k",
        "PBR": 623
    },
    {
        "UID": 1335,
        "OR": 1304,
        "SN": "Haydock",
        "PE": 1323,
        "QL": 506,
        "AC": 1251,
        "PB": "Up to £350k",
        "PBR": 624
    },
    {
        "UID": 1336,
        "OR": 1305,
        "SN": "Edwinstowe",
        "PE": 1275,
        "QL": 964,
        "AC": 1175,
        "PB": "Up to £350k",
        "PBR": 625
    },
    {
        "UID": 1337,
        "OR": 1308,
        "SN": "West Bromwich (East)",
        "PE": 377,
        "QL": 1307,
        "AC": 1346,
        "PB": "Up to £350k",
        "PBR": 626
    },
    {
        "UID": 1338,
        "OR": 1310,
        "SN": "South Milford",
        "PE": 1281,
        "QL": 845,
        "AC": 1214,
        "PB": "Up to £350k",
        "PBR": 627
    },
    {
        "UID": 1339,
        "OR": 1312,
        "SN": "New Marske",
        "PE": 879,
        "QL": 1228,
        "AC": 1296,
        "PB": "Up to £350k",
        "PBR": 628
    },
    {
        "UID": 1340,
        "OR": 1314,
        "SN": "Cramlington",
        "PE": 1149,
        "QL": 590,
        "AC": 1331,
        "PB": "Up to £350k",
        "PBR": 629
    },
    {
        "UID": 1341,
        "OR": 1316,
        "SN": "Seghill",
        "PE": 1194,
        "QL": 187,
        "AC": 1369,
        "PB": "Up to £350k",
        "PBR": 630
    },
    {
        "UID": 1342,
        "OR": 1318,
        "SN": "Shepshed",
        "PE": 1325,
        "QL": 1282,
        "AC": 1008,
        "PB": "Up to £350k",
        "PBR": 631
    },
    {
        "UID": 1343,
        "OR": 1319,
        "SN": "Barlestone",
        "PE": 1304,
        "QL": 966,
        "AC": 1198,
        "PB": "Up to £350k",
        "PBR": 632
    },
    {
        "UID": 1344,
        "OR": 1320,
        "SN": "Corby",
        "PE": 1370,
        "QL": 553,
        "AC": 1254,
        "PB": "Up to £350k",
        "PBR": 633
    },
    {
        "UID": 1345,
        "OR": 1322,
        "SN": "Coseley",
        "PE": 591,
        "QL": 1200,
        "AC": 1359,
        "PB": "Up to £350k",
        "PBR": 634
    },
    {
        "UID": 1346,
        "OR": 1323,
        "SN": "Anstey",
        "PE": 1349,
        "QL": 1198,
        "AC": 1079,
        "PB": "Up to £350k",
        "PBR": 635
    },
    {
        "UID": 1347,
        "OR": 1324,
        "SN": "North Ferriby",
        "PE": 920,
        "QL": 1363,
        "AC": 1155,
        "PB": "Up to £350k",
        "PBR": 636
    },
    {
        "UID": 1348,
        "OR": 1325,
        "SN": "Llanharry",
        "PE": 1072,
        "QL": 1371,
        "AC": 954,
        "PB": "Up to £350k",
        "PBR": 637
    },
    {
        "UID": 1349,
        "OR": 1329,
        "SN": "Sedgley",
        "PE": 1163,
        "QL": 790,
        "AC": 1326,
        "PB": "Up to £350k",
        "PBR": 638
    },
    {
        "UID": 1350,
        "OR": 1332,
        "SN": "Wednesbury",
        "PE": 903,
        "QL": 1232,
        "AC": 1317,
        "PB": "Up to £350k",
        "PBR": 639
    },
    {
        "UID": 1351,
        "OR": 1334,
        "SN": "Billingham",
        "PE": 832,
        "QL": 1308,
        "AC": 1287,
        "PB": "Up to £350k",
        "PBR": 640
    },
    {
        "UID": 1352,
        "OR": 1335,
        "SN": "Coxhoe",
        "PE": 1110,
        "QL": 660,
        "AC": 1348,
        "PB": "Up to £350k",
        "PBR": 641
    },
    {
        "UID": 1353,
        "OR": 1337,
        "SN": "Featherstone (South Staffordshire)",
        "PE": 927,
        "QL": 843,
        "AC": 1363,
        "PB": "Up to £350k",
        "PBR": 642
    },
    {
        "UID": 1354,
        "OR": 1338,
        "SN": "Calverton",
        "PE": 1290,
        "QL": 881,
        "AC": 1249,
        "PB": "Up to £350k",
        "PBR": 643
    },
    {
        "UID": 1355,
        "OR": 1339,
        "SN": "North Hykeham",
        "PE": 1119,
        "QL": 1349,
        "AC": 1130,
        "PB": "Up to £350k",
        "PBR": 644
    },
    {
        "UID": 1356,
        "OR": 1340,
        "SN": "Goldthorpe",
        "PE": 1189,
        "QL": 643,
        "AC": 1334,
        "PB": "Up to £350k",
        "PBR": 645
    },
    {
        "UID": 1357,
        "OR": 1343,
        "SN": "Wideopen",
        "PE": 1043,
        "QL": 893,
        "AC": 1350,
        "PB": "Up to £350k",
        "PBR": 646
    },
    {
        "UID": 1358,
        "OR": 1346,
        "SN": "Sileby",
        "PE": 1363,
        "QL": 1305,
        "AC": 1017,
        "PB": "Up to £350k",
        "PBR": 647
    },
    {
        "UID": 1359,
        "OR": 1348,
        "SN": "Carlton (Gedling)",
        "PE": 1162,
        "QL": 1220,
        "AC": 1244,
        "PB": "Up to £350k",
        "PBR": 648
    },
    {
        "UID": 1360,
        "OR": 1349,
        "SN": "Beddau",
        "PE": 1176,
        "QL": 919,
        "AC": 1324,
        "PB": "Up to £350k",
        "PBR": 649
    },
    {
        "UID": 1361,
        "OR": 1350,
        "SN": "Longbenton",
        "PE": 1208,
        "QL": 1052,
        "AC": 1285,
        "PB": "Up to £350k",
        "PBR": 650
    },
    {
        "UID": 1362,
        "OR": 1351,
        "SN": "Elton",
        "PE": 1351,
        "QL": 828,
        "AC": 1292,
        "PB": "Up to £350k",
        "PBR": 651
    },
    {
        "UID": 1363,
        "OR": 1352,
        "SN": "Arnold",
        "PE": 1284,
        "QL": 1035,
        "AC": 1276,
        "PB": "Up to £350k",
        "PBR": 652
    },
    {
        "UID": 1364,
        "OR": 1354,
        "SN": "Armthorpe",
        "PE": 1296,
        "QL": 765,
        "AC": 1330,
        "PB": "Up to £350k",
        "PBR": 653
    },
    {
        "UID": 1365,
        "OR": 1355,
        "SN": "Moorends",
        "PE": 1336,
        "QL": 343,
        "AC": 1364,
        "PB": "Up to £350k",
        "PBR": 654
    },
    {
        "UID": 1366,
        "OR": 1356,
        "SN": "Church Village",
        "PE": 1184,
        "QL": 1158,
        "AC": 1311,
        "PB": "Up to £350k",
        "PBR": 655
    },
    {
        "UID": 1367,
        "OR": 1359,
        "SN": "Thornton (Wyre)",
        "PE": 990,
        "QL": 1204,
        "AC": 1355,
        "PB": "Up to £350k",
        "PBR": 656
    },
    {
        "UID": 1368,
        "OR": 1361,
        "SN": "Holton le Clay",
        "PE": 874,
        "QL": 1344,
        "AC": 1327,
        "PB": "Up to £350k",
        "PBR": 657
    },
    {
        "UID": 1369,
        "OR": 1362,
        "SN": "Cherry Willingham",
        "PE": 1172,
        "QL": 1326,
        "AC": 1247,
        "PB": "Up to £350k",
        "PBR": 658
    },
    {
        "UID": 1370,
        "OR": 1363,
        "SN": "New Waltham",
        "PE": 892,
        "QL": 1351,
        "AC": 1333,
        "PB": "Up to £350k",
        "PBR": 659
    },
    {
        "UID": 1371,
        "OR": 1364,
        "SN": "Bracebridge Heath",
        "PE": 1242,
        "QL": 1339,
        "AC": 1236,
        "PB": "Up to £350k",
        "PBR": 660
    },
    {
        "UID": 1372,
        "OR": 1368,
        "SN": "Blackheath",
        "PE": 1239,
        "QL": 1247,
        "AC": 1341,
        "PB": "Up to £350k",
        "PBR": 661
    }
]

export default data;
