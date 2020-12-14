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
        "OR": 1,
        "SN": "Caernarfon",
        "PE": 96,
        "QL": 17,
        "AC": 4,
        "PB": "Up to £350k",
        "PBR": 1
    },
    {
        "UID": 2,
        "OR": 2,
        "SN": "Bath",
        "PE": 40,
        "QL": 270,
        "AC": 1,
        "PB": "Over £650k",
        "PBR": 1
    },
    {
        "UID": 3,
        "OR": 3,
        "SN": "Tenby",
        "PE": 78,
        "QL": 51,
        "AC": 33,
        "PB": "£350k-£650k",
        "PBR": 1
    },
    {
        "UID": 4,
        "OR": 4,
        "SN": "Bradford on Avon",
        "PE": 19,
        "QL": 252,
        "AC": 31,
        "PB": "£350k-£650k",
        "PBR": 2
    },
    {
        "UID": 5,
        "OR": 5,
        "SN": "Ilfracombe",
        "PE": 65,
        "QL": 67,
        "AC": 70,
        "PB": "Up to £350k",
        "PBR": 2
    },
    {
        "UID": 6,
        "OR": 6,
        "SN": "Canterbury",
        "PE": 162,
        "QL": 59,
        "AC": 32,
        "PB": "£350k-£650k",
        "PBR": 3
    },
    {
        "UID": 7,
        "OR": 7,
        "SN": "Rye",
        "PE": 1,
        "QL": 206,
        "AC": 68,
        "PB": "£350k-£650k",
        "PBR": 4
    },
    {
        "UID": 8,
        "OR": 8,
        "SN": "St Ives (Cornwall)",
        "PE": 47,
        "QL": 203,
        "AC": 47,
        "PB": "£350k-£650k",
        "PBR": 5
    },
    {
        "UID": 9,
        "OR": 9,
        "SN": "Settle",
        "PE": 22,
        "QL": 847,
        "AC": 10,
        "PB": "Up to £350k",
        "PBR": 3
    },
    {
        "UID": 10,
        "OR": 10,
        "SN": "Wilton (Wiltshire)",
        "PE": 67,
        "QL": 696,
        "AC": 6,
        "PB": "£350k-£650k",
        "PBR": 6
    },
    {
        "UID": 11,
        "OR": 11,
        "SN": "Aldeburgh",
        "PE": 23,
        "QL": 512,
        "AC": 34,
        "PB": "Over £650k",
        "PBR": 2
    },
    {
        "UID": 12,
        "OR": 12,
        "SN": "Faversham",
        "PE": 209,
        "QL": 134,
        "AC": 24,
        "PB": "£350k-£650k",
        "PBR": 7
    },
    {
        "UID": 13,
        "OR": 13,
        "SN": "Langport",
        "PE": 573,
        "QL": 31,
        "AC": 16,
        "PB": "£350k-£650k",
        "PBR": 8
    },
    {
        "UID": 14,
        "OR": 14,
        "SN": "Hay-on-Wye",
        "PE": 10,
        "QL": 1087,
        "AC": 5,
        "PB": "£350k-£650k",
        "PBR": 9
    },
    {
        "UID": 15,
        "OR": 15,
        "SN": "Lewes",
        "PE": 98,
        "QL": 634,
        "AC": 8,
        "PB": "Over £650k",
        "PBR": 3
    },
    {
        "UID": 16,
        "OR": 16,
        "SN": "Lyme Regis",
        "PE": 57,
        "QL": 240,
        "AC": 72,
        "PB": "£350k-£650k",
        "PBR": 10
    },
    {
        "UID": 17,
        "OR": 17,
        "SN": "Marlborough",
        "PE": 15,
        "QL": 932,
        "AC": 19,
        "PB": "£350k-£650k",
        "PBR": 11
    },
    {
        "UID": 18,
        "OR": 18,
        "SN": "Newport (Isle of Wight)",
        "PE": 253,
        "QL": 84,
        "AC": 48,
        "PB": "Up to £350k",
        "PBR": 4
    },
    {
        "UID": 19,
        "OR": 19,
        "SN": "Bridport",
        "PE": 32,
        "QL": 204,
        "AC": 118,
        "PB": "£350k-£650k",
        "PBR": 12
    },
    {
        "UID": 20,
        "OR": 20,
        "SN": "Lenham",
        "PE": 449,
        "QL": 53,
        "AC": 21,
        "PB": "£350k-£650k",
        "PBR": 13
    },
    {
        "UID": 21,
        "OR": 21,
        "SN": "Malmesbury",
        "PE": 14,
        "QL": 1110,
        "AC": 9,
        "PB": "£350k-£650k",
        "PBR": 14
    },
    {
        "UID": 22,
        "OR": 22,
        "SN": "Frome",
        "PE": 224,
        "QL": 54,
        "AC": 85,
        "PB": "£350k-£650k",
        "PBR": 15
    },
    {
        "UID": 23,
        "OR": 22,
        "SN": "Arundel",
        "PE": 5,
        "QL": 358,
        "AC": 112,
        "PB": "£350k-£650k",
        "PBR": 15
    },
    {
        "UID": 24,
        "OR": 24,
        "SN": "Fowey",
        "PE": 6,
        "QL": 968,
        "AC": 26,
        "PB": "£350k-£650k",
        "PBR": 17
    },
    {
        "UID": 25,
        "OR": 25,
        "SN": "Fordingbridge",
        "PE": 17,
        "QL": 170,
        "AC": 209,
        "PB": "£350k-£650k",
        "PBR": 18
    },
    {
        "UID": 26,
        "OR": 26,
        "SN": "Scarborough",
        "PE": 193,
        "QL": 137,
        "AC": 68,
        "PB": "Up to £350k",
        "PBR": 5
    },
    {
        "UID": 27,
        "OR": 27,
        "SN": "Hastings",
        "PE": 132,
        "QL": 20,
        "AC": 277,
        "PB": "£350k-£650k",
        "PBR": 19
    },
    {
        "UID": 28,
        "OR": 28,
        "SN": "Conwy",
        "PE": 76,
        "QL": 265,
        "AC": 97,
        "PB": "Up to £350k",
        "PBR": 6
    },
    {
        "UID": 29,
        "OR": 29,
        "SN": "Weymouth",
        "PE": 46,
        "QL": 243,
        "AC": 140,
        "PB": "£350k-£650k",
        "PBR": 20
    },
    {
        "UID": 30,
        "OR": 30,
        "SN": "Sudbury",
        "PE": 314,
        "QL": 176,
        "AC": 29,
        "PB": "£350k-£650k",
        "PBR": 21
    },
    {
        "UID": 31,
        "OR": 31,
        "SN": "Abergavenny",
        "PE": 222,
        "QL": 469,
        "AC": 20,
        "PB": "£350k-£650k",
        "PBR": 22
    },
    {
        "UID": 32,
        "OR": 32,
        "SN": "Dorchester (West Dorset)",
        "PE": 62,
        "QL": 537,
        "AC": 58,
        "PB": "£350k-£650k",
        "PBR": 23
    },
    {
        "UID": 33,
        "OR": 33,
        "SN": "Westerham",
        "PE": 449,
        "QL": 8,
        "AC": 152,
        "PB": "Over £650k",
        "PBR": 4
    },
    {
        "UID": 34,
        "OR": 34,
        "SN": "Long Melford",
        "PE": 282,
        "QL": 183,
        "AC": 50,
        "PB": "£350k-£650k",
        "PBR": 24
    },
    {
        "UID": 35,
        "OR": 35,
        "SN": "Buckfastleigh",
        "PE": 84,
        "QL": 96,
        "AC": 220,
        "PB": "£350k-£650k",
        "PBR": 25
    },
    {
        "UID": 36,
        "OR": 36,
        "SN": "Godstone",
        "PE": 83,
        "QL": 3,
        "AC": 634,
        "PB": "£350k-£650k",
        "PBR": 26
    },
    {
        "UID": 37,
        "OR": 37,
        "SN": "Sidmouth",
        "PE": 41,
        "QL": 295,
        "AC": 175,
        "PB": "£350k-£650k",
        "PBR": 27
    },
    {
        "UID": 38,
        "OR": 38,
        "SN": "Lancaster",
        "PE": 95,
        "QL": 448,
        "AC": 74,
        "PB": "Up to £350k",
        "PBR": 7
    },
    {
        "UID": 39,
        "OR": 39,
        "SN": "Wadebridge",
        "PE": 20,
        "QL": 854,
        "AC": 72,
        "PB": "£350k-£650k",
        "PBR": 28
    },
    {
        "UID": 40,
        "OR": 40,
        "SN": "Ilkley",
        "PE": 44,
        "QL": 761,
        "AC": 64,
        "PB": "£350k-£650k",
        "PBR": 29
    },
    {
        "UID": 41,
        "OR": 41,
        "SN": "Brecon",
        "PE": 4,
        "QL": 542,
        "AC": 147,
        "PB": "Up to £350k",
        "PBR": 8
    },
    {
        "UID": 42,
        "OR": 42,
        "SN": "Hadleigh",
        "PE": 234,
        "QL": 546,
        "AC": 22,
        "PB": "£350k-£650k",
        "PBR": 30
    },
    {
        "UID": 43,
        "OR": 43,
        "SN": "Shaftesbury",
        "PE": 449,
        "QL": 345,
        "AC": 14,
        "PB": "£350k-£650k",
        "PBR": 31
    },
    {
        "UID": 44,
        "OR": 44,
        "SN": "Bethesda",
        "PE": 11,
        "QL": 223,
        "AC": 315,
        "PB": "Up to £350k",
        "PBR": 9
    },
    {
        "UID": 45,
        "OR": 45,
        "SN": "Alnwick",
        "PE": 601,
        "QL": 98,
        "AC": 35,
        "PB": "Up to £350k",
        "PBR": 10
    },
    {
        "UID": 46,
        "OR": 46,
        "SN": "Cardigan",
        "PE": 220,
        "QL": 25,
        "AC": 290,
        "PB": "Up to £350k",
        "PBR": 11
    },
    {
        "UID": 47,
        "OR": 47,
        "SN": "Bosham",
        "PE": 39,
        "QL": 322,
        "AC": 223,
        "PB": "£350k-£650k",
        "PBR": 32
    },
    {
        "UID": 48,
        "OR": 48,
        "SN": "Haworth",
        "PE": 671,
        "QL": 45,
        "AC": 54,
        "PB": "Up to £350k",
        "PBR": 12
    },
    {
        "UID": 49,
        "OR": 49,
        "SN": "Luddenden Foot",
        "PE": 375,
        "QL": 5,
        "AC": 333,
        "PB": "Up to £350k",
        "PBR": 13
    },
    {
        "UID": 50,
        "OR": 50,
        "SN": "Carnforth",
        "PE": 8,
        "QL": 88,
        "AC": 464,
        "PB": "Up to £350k",
        "PBR": 14
    },
    {
        "UID": 51,
        "OR": 51,
        "SN": "Rowhedge",
        "PE": 245,
        "QL": 142,
        "AC": 122,
        "PB": "£350k-£650k",
        "PBR": 33
    },
    {
        "UID": 52,
        "OR": 52,
        "SN": "Huddersfield",
        "PE": 250,
        "QL": 104,
        "AC": 149,
        "PB": "Up to £350k",
        "PBR": 15
    },
    {
        "UID": 53,
        "OR": 53,
        "SN": "King's Lynn",
        "PE": 105,
        "QL": 299,
        "AC": 156,
        "PB": "Up to £350k",
        "PBR": 16
    },
    {
        "UID": 54,
        "OR": 54,
        "SN": "Keswick (Allerdale)",
        "PE": 7,
        "QL": 1042,
        "AC": 79,
        "PB": "£350k-£650k",
        "PBR": 34
    },
    {
        "UID": 55,
        "OR": 55,
        "SN": "Llandudno",
        "PE": 82,
        "QL": 151,
        "AC": 299,
        "PB": "Up to £350k",
        "PBR": 17
    },
    {
        "UID": 56,
        "OR": 56,
        "SN": "West Malling",
        "PE": 709,
        "QL": 110,
        "AC": 28,
        "PB": "£350k-£650k",
        "PBR": 35
    },
    {
        "UID": 57,
        "OR": 57,
        "SN": "Great Yarmouth",
        "PE": 50,
        "QL": 608,
        "AC": 138,
        "PB": "Up to £350k",
        "PBR": 18
    },
    {
        "UID": 58,
        "OR": 58,
        "SN": "Llanrwst",
        "PE": 124,
        "QL": 479,
        "AC": 101,
        "PB": "Up to £350k",
        "PBR": 19
    },
    {
        "UID": 59,
        "OR": 59,
        "SN": "Ipswich",
        "PE": 145,
        "QL": 137,
        "AC": 249,
        "PB": "£350k-£650k",
        "PBR": 36
    },
    {
        "UID": 60,
        "OR": 59,
        "SN": "Southwold",
        "PE": 13,
        "QL": 996,
        "AC": 95,
        "PB": "Over £650k",
        "PBR": 5
    },
    {
        "UID": 61,
        "OR": 61,
        "SN": "Northam",
        "PE": 52,
        "QL": 1010,
        "AC": 63,
        "PB": "£350k-£650k",
        "PBR": 37
    },
    {
        "UID": 62,
        "OR": 61,
        "SN": "Edenbridge",
        "PE": 157,
        "QL": 72,
        "AC": 296,
        "PB": "£350k-£650k",
        "PBR": 37
    },
    {
        "UID": 63,
        "OR": 63,
        "SN": "Hawkhurst",
        "PE": 449,
        "QL": 112,
        "AC": 80,
        "PB": "£350k-£650k",
        "PBR": 39
    },
    {
        "UID": 64,
        "OR": 64,
        "SN": "Evesham",
        "PE": 255,
        "QL": 16,
        "AC": 371,
        "PB": "Up to £350k",
        "PBR": 20
    },
    {
        "UID": 65,
        "OR": 65,
        "SN": "Great Malvern",
        "PE": 449,
        "QL": 75,
        "AC": 100,
        "PB": "£350k-£650k",
        "PBR": 40
    },
    {
        "UID": 66,
        "OR": 66,
        "SN": "Ripon",
        "PE": 113,
        "QL": 858,
        "AC": 55,
        "PB": "£350k-£650k",
        "PBR": 41
    },
    {
        "UID": 67,
        "OR": 67,
        "SN": "Dartmouth",
        "PE": 26,
        "QL": 729,
        "AC": 148,
        "PB": "£350k-£650k",
        "PBR": 42
    },
    {
        "UID": 68,
        "OR": 68,
        "SN": "Sevenoaks",
        "PE": 168,
        "QL": 272,
        "AC": 155,
        "PB": "Over £650k",
        "PBR": 6
    },
    {
        "UID": 69,
        "OR": 69,
        "SN": "Caton",
        "PE": 16,
        "QL": 1062,
        "AC": 92,
        "PB": "Up to £350k",
        "PBR": 21
    },
    {
        "UID": 70,
        "OR": 70,
        "SN": "Barnstaple",
        "PE": 280,
        "QL": 608,
        "AC": 36,
        "PB": "£350k-£650k",
        "PBR": 43
    },
    {
        "UID": 71,
        "OR": 71,
        "SN": "Truro",
        "PE": 151,
        "QL": 379,
        "AC": 141,
        "PB": "£350k-£650k",
        "PBR": 44
    },
    {
        "UID": 72,
        "OR": 72,
        "SN": "Loddon",
        "PE": 66,
        "QL": 733,
        "AC": 110,
        "PB": "£350k-£650k",
        "PBR": 45
    },
    {
        "UID": 73,
        "OR": 73,
        "SN": "Wells",
        "PE": 449,
        "QL": 659,
        "AC": 11,
        "PB": "£350k-£650k",
        "PBR": 46
    },
    {
        "UID": 74,
        "OR": 74,
        "SN": "Pwllheli",
        "PE": 102,
        "QL": 199,
        "AC": 284,
        "PB": "Up to £350k",
        "PBR": 22
    },
    {
        "UID": 75,
        "OR": 75,
        "SN": "Emsworth",
        "PE": 93,
        "QL": 376,
        "AC": 199,
        "PB": "£350k-£650k",
        "PBR": 47
    },
    {
        "UID": 76,
        "OR": 76,
        "SN": "Rochester",
        "PE": 139,
        "QL": 201,
        "AC": 251,
        "PB": "£350k-£650k",
        "PBR": 48
    },
    {
        "UID": 77,
        "OR": 77,
        "SN": "Wellington",
        "PE": 429,
        "QL": 103,
        "AC": 110,
        "PB": "£350k-£650k",
        "PBR": 49
    },
    {
        "UID": 78,
        "OR": 78,
        "SN": "Trowbridge",
        "PE": 422,
        "QL": 119,
        "AC": 108,
        "PB": "£350k-£650k",
        "PBR": 50
    },
    {
        "UID": 79,
        "OR": 79,
        "SN": "Bruton",
        "PE": 901,
        "QL": 319,
        "AC": 2,
        "PB": "£350k-£650k",
        "PBR": 51
    },
    {
        "UID": 80,
        "OR": 80,
        "SN": "Tonbridge",
        "PE": 88,
        "QL": 372,
        "AC": 229,
        "PB": "£350k-£650k",
        "PBR": 52
    },
    {
        "UID": 81,
        "OR": 81,
        "SN": "Deal",
        "PE": 197,
        "QL": 166,
        "AC": 241,
        "PB": "£350k-£650k",
        "PBR": 53
    },
    {
        "UID": 82,
        "OR": 82,
        "SN": "Downton",
        "PE": 70,
        "QL": 545,
        "AC": 186,
        "PB": "£350k-£650k",
        "PBR": 54
    },
    {
        "UID": 83,
        "OR": 83,
        "SN": "Wolsingham",
        "PE": 59,
        "QL": 133,
        "AC": 444,
        "PB": "Up to £350k",
        "PBR": 23
    },
    {
        "UID": 84,
        "OR": 84,
        "SN": "Mere",
        "PE": 449,
        "QL": 757,
        "AC": 13,
        "PB": "£350k-£650k",
        "PBR": 55
    },
    {
        "UID": 85,
        "OR": 85,
        "SN": "Barmouth",
        "PE": 60,
        "QL": 304,
        "AC": 330,
        "PB": "Up to £350k",
        "PBR": 24
    },
    {
        "UID": 86,
        "OR": 86,
        "SN": "Oxted",
        "PE": 243,
        "QL": 333,
        "AC": 130,
        "PB": "Over £650k",
        "PBR": 7
    },
    {
        "UID": 87,
        "OR": 87,
        "SN": "Winchester",
        "PE": 120,
        "QL": 826,
        "AC": 86,
        "PB": "Over £650k",
        "PBR": 8
    },
    {
        "UID": 88,
        "OR": 88,
        "SN": "Shanklin",
        "PE": 147,
        "QL": 74,
        "AC": 397,
        "PB": "£350k-£650k",
        "PBR": 56
    },
    {
        "UID": 89,
        "OR": 89,
        "SN": "Tenbury Wells",
        "PE": 164,
        "QL": 172,
        "AC": 285,
        "PB": "£350k-£650k",
        "PBR": 57
    },
    {
        "UID": 90,
        "OR": 90,
        "SN": "Blandford Forum",
        "PE": 87,
        "QL": 669,
        "AC": 142,
        "PB": "£350k-£650k",
        "PBR": 58
    },
    {
        "UID": 91,
        "OR": 91,
        "SN": "Tenterden",
        "PE": 449,
        "QL": 141,
        "AC": 117,
        "PB": "£350k-£650k",
        "PBR": 59
    },
    {
        "UID": 92,
        "OR": 92,
        "SN": "Sowerby Bridge",
        "PE": 419,
        "QL": 43,
        "AC": 234,
        "PB": "Up to £350k",
        "PBR": 25
    },
    {
        "UID": 93,
        "OR": 93,
        "SN": "Ryde",
        "PE": 126,
        "QL": 160,
        "AC": 342,
        "PB": "Up to £350k",
        "PBR": 26
    },
    {
        "UID": 94,
        "OR": 94,
        "SN": "Chipping Norton",
        "PE": 449,
        "QL": 620,
        "AC": 23,
        "PB": "£350k-£650k",
        "PBR": 60
    },
    {
        "UID": 95,
        "OR": 95,
        "SN": "Lostwithiel",
        "PE": 100,
        "QL": 572,
        "AC": 159,
        "PB": "£350k-£650k",
        "PBR": 61
    },
    {
        "UID": 96,
        "OR": 96,
        "SN": "Worcester",
        "PE": 339,
        "QL": 148,
        "AC": 182,
        "PB": "£350k-£650k",
        "PBR": 62
    },
    {
        "UID": 97,
        "OR": 97,
        "SN": "Kingsbridge",
        "PE": 42,
        "QL": 573,
        "AC": 263,
        "PB": "£350k-£650k",
        "PBR": 63
    },
    {
        "UID": 98,
        "OR": 98,
        "SN": "Norwich",
        "PE": 102,
        "QL": 345,
        "AC": 274,
        "PB": "£350k-£650k",
        "PBR": 64
    },
    {
        "UID": 99,
        "OR": 99,
        "SN": "Bowness-on-Windermere",
        "PE": 79,
        "QL": 305,
        "AC": 326,
        "PB": "£350k-£650k",
        "PBR": 65
    },
    {
        "UID": 100,
        "OR": 100,
        "SN": "Royal Tunbridge Wells",
        "PE": 449,
        "QL": 256,
        "AC": 88,
        "PB": "£350k-£650k",
        "PBR": 66
    },
    {
        "UID": 101,
        "OR": 101,
        "SN": "Bovey Tracey",
        "PE": 58,
        "QL": 668,
        "AC": 210,
        "PB": "£350k-£650k",
        "PBR": 67
    },
    {
        "UID": 102,
        "OR": 102,
        "SN": "Brightlingsea",
        "PE": 643,
        "QL": 116,
        "AC": 89,
        "PB": "£350k-£650k",
        "PBR": 68
    },
    {
        "UID": 103,
        "OR": 103,
        "SN": "Cromer",
        "PE": 56,
        "QL": 476,
        "AC": 305,
        "PB": "£350k-£650k",
        "PBR": 69
    },
    {
        "UID": 104,
        "OR": 104,
        "SN": "Carlisle",
        "PE": 299,
        "QL": 134,
        "AC": 245,
        "PB": "Up to £350k",
        "PBR": 27
    },
    {
        "UID": 105,
        "OR": 105,
        "SN": "Henley-on-Thames",
        "PE": 92,
        "QL": 1246,
        "AC": 45,
        "PB": "Over £650k",
        "PBR": 9
    },
    {
        "UID": 106,
        "OR": 106,
        "SN": "Chichester",
        "PE": 302,
        "QL": 652,
        "AC": 62,
        "PB": "£350k-£650k",
        "PBR": 70
    },
    {
        "UID": 107,
        "OR": 107,
        "SN": "Alcester",
        "PE": 330,
        "QL": 108,
        "AC": 254,
        "PB": "£350k-£650k",
        "PBR": 71
    },
    {
        "UID": 108,
        "OR": 108,
        "SN": "Sandwich",
        "PE": 279,
        "QL": 399,
        "AC": 128,
        "PB": "£350k-£650k",
        "PBR": 72
    },
    {
        "UID": 109,
        "OR": 108,
        "SN": "Halstead",
        "PE": 311,
        "QL": 190,
        "AC": 200,
        "PB": "£350k-£650k",
        "PBR": 72
    },
    {
        "UID": 110,
        "OR": 110,
        "SN": "Kington",
        "PE": 365,
        "QL": 336,
        "AC": 106,
        "PB": "Up to £350k",
        "PBR": 28
    },
    {
        "UID": 111,
        "OR": 111,
        "SN": "Malton",
        "PE": 140,
        "QL": 859,
        "AC": 99,
        "PB": "£350k-£650k",
        "PBR": 74
    },
    {
        "UID": 112,
        "OR": 112,
        "SN": "Addingham",
        "PE": 74,
        "QL": 593,
        "AC": 236,
        "PB": "£350k-£650k",
        "PBR": 75
    },
    {
        "UID": 113,
        "OR": 113,
        "SN": "Porthmadog",
        "PE": 79,
        "QL": 234,
        "AC": 407,
        "PB": "Up to £350k",
        "PBR": 29
    },
    {
        "UID": 114,
        "OR": 114,
        "SN": "Horncastle",
        "PE": 175,
        "QL": 1114,
        "AC": 43,
        "PB": "Up to £350k",
        "PBR": 30
    },
    {
        "UID": 115,
        "OR": 115,
        "SN": "Pembroke Dock",
        "PE": 237,
        "QL": 209,
        "AC": 273,
        "PB": "Up to £350k",
        "PBR": 31
    },
    {
        "UID": 116,
        "OR": 116,
        "SN": "Charlbury",
        "PE": 112,
        "QL": 820,
        "AC": 144,
        "PB": "£350k-£650k",
        "PBR": 76
    },
    {
        "UID": 117,
        "OR": 116,
        "SN": "Saltburn-by-the-Sea",
        "PE": 28,
        "QL": 360,
        "AC": 456,
        "PB": "Up to £350k",
        "PBR": 32
    },
    {
        "UID": 118,
        "OR": 118,
        "SN": "Woodstock (West Oxfordshire)",
        "PE": 195,
        "QL": 1134,
        "AC": 39,
        "PB": "Over £650k",
        "PBR": 10
    },
    {
        "UID": 119,
        "OR": 119,
        "SN": "Swanage",
        "PE": 35,
        "QL": 627,
        "AC": 329,
        "PB": "£350k-£650k",
        "PBR": 77
    },
    {
        "UID": 120,
        "OR": 120,
        "SN": "Hexham",
        "PE": 340,
        "QL": 388,
        "AC": 125,
        "PB": "Up to £350k",
        "PBR": 33
    },
    {
        "UID": 121,
        "OR": 121,
        "SN": "Holyhead",
        "PE": 55,
        "QL": 84,
        "AC": 664,
        "PB": "Up to £350k",
        "PBR": 34
    },
    {
        "UID": 122,
        "OR": 122,
        "SN": "Plymouth",
        "PE": 166,
        "QL": 710,
        "AC": 137,
        "PB": "Up to £350k",
        "PBR": 35
    },
    {
        "UID": 123,
        "OR": 123,
        "SN": "Usk",
        "PE": 214,
        "QL": 1074,
        "AC": 51,
        "PB": "£350k-£650k",
        "PBR": 78
    },
    {
        "UID": 124,
        "OR": 124,
        "SN": "Ellesmere",
        "PE": 327,
        "QL": 1173,
        "AC": 15,
        "PB": "Up to £350k",
        "PBR": 36
    },
    {
        "UID": 125,
        "OR": 125,
        "SN": "Halifax",
        "PE": 646,
        "QL": 36,
        "AC": 230,
        "PB": "Up to £350k",
        "PBR": 37
    },
    {
        "UID": 126,
        "OR": 125,
        "SN": "Langley Park",
        "PE": 342,
        "QL": 7,
        "AC": 628,
        "PB": "Up to £350k",
        "PBR": 37
    },
    {
        "UID": 127,
        "OR": 127,
        "SN": "Haverfordwest",
        "PE": 227,
        "QL": 137,
        "AC": 365,
        "PB": "Up to £350k",
        "PBR": 39
    },
    {
        "UID": 128,
        "OR": 128,
        "SN": "Macclesfield",
        "PE": 200,
        "QL": 430,
        "AC": 218,
        "PB": "£350k-£650k",
        "PBR": 79
    },
    {
        "UID": 129,
        "OR": 128,
        "SN": "Cleobury Mortimer",
        "PE": 214,
        "QL": 985,
        "AC": 67,
        "PB": "Up to £350k",
        "PBR": 40
    },
    {
        "UID": 130,
        "OR": 130,
        "SN": "Marple",
        "PE": 118,
        "QL": 192,
        "AC": 437,
        "PB": "£350k-£650k",
        "PBR": 80
    },
    {
        "UID": 131,
        "OR": 131,
        "SN": "Salisbury",
        "PE": 198,
        "QL": 958,
        "AC": 77,
        "PB": "£350k-£650k",
        "PBR": 81
    },
    {
        "UID": 132,
        "OR": 132,
        "SN": "Upton upon Severn",
        "PE": 204,
        "QL": 81,
        "AC": 447,
        "PB": "£350k-£650k",
        "PBR": 82
    },
    {
        "UID": 133,
        "OR": 133,
        "SN": "Ross-on-Wye",
        "PE": 233,
        "QL": 319,
        "AC": 261,
        "PB": "£350k-£650k",
        "PBR": 83
    },
    {
        "UID": 134,
        "OR": 134,
        "SN": "Farnham",
        "PE": 141,
        "QL": 1205,
        "AC": 57,
        "PB": "Over £650k",
        "PBR": 11
    },
    {
        "UID": 135,
        "OR": 135,
        "SN": "Combe Martin",
        "PE": 203,
        "QL": 227,
        "AC": 331,
        "PB": "£350k-£650k",
        "PBR": 84
    },
    {
        "UID": 136,
        "OR": 136,
        "SN": "Littlehampton",
        "PE": 104,
        "QL": 145,
        "AC": 531,
        "PB": "£350k-£650k",
        "PBR": 85
    },
    {
        "UID": 137,
        "OR": 137,
        "SN": "Seaton (East Devon)",
        "PE": 43,
        "QL": 998,
        "AC": 211,
        "PB": "£350k-£650k",
        "PBR": 86
    },
    {
        "UID": 138,
        "OR": 138,
        "SN": "Tetbury",
        "PE": 449,
        "QL": 1210,
        "AC": 3,
        "PB": "£350k-£650k",
        "PBR": 87
    },
    {
        "UID": 139,
        "OR": 139,
        "SN": "Meltham",
        "PE": 656,
        "QL": 30,
        "AC": 275,
        "PB": "Up to £350k",
        "PBR": 41
    },
    {
        "UID": 140,
        "OR": 140,
        "SN": "Wotton-under-Edge",
        "PE": 449,
        "QL": 788,
        "AC": 44,
        "PB": "£350k-£650k",
        "PBR": 88
    },
    {
        "UID": 141,
        "OR": 141,
        "SN": "Stratford-upon-Avon",
        "PE": 284,
        "QL": 352,
        "AC": 211,
        "PB": "£350k-£650k",
        "PBR": 89
    },
    {
        "UID": 142,
        "OR": 142,
        "SN": "Eastbourne",
        "PE": 150,
        "QL": 191,
        "AC": 423,
        "PB": "£350k-£650k",
        "PBR": 90
    },
    {
        "UID": 143,
        "OR": 142,
        "SN": "Clitheroe",
        "PE": 324,
        "QL": 898,
        "AC": 60,
        "PB": "Up to £350k",
        "PBR": 42
    },
    {
        "UID": 144,
        "OR": 144,
        "SN": "Mytholmroyd",
        "PE": 349,
        "QL": 21,
        "AC": 534,
        "PB": "Up to £350k",
        "PBR": 43
    },
    {
        "UID": 145,
        "OR": 145,
        "SN": "Bristol",
        "PE": 326,
        "QL": 144,
        "AC": 321,
        "PB": "£350k-£650k",
        "PBR": 91
    },
    {
        "UID": 146,
        "OR": 145,
        "SN": "Brighton and Hove",
        "PE": 173,
        "QL": 780,
        "AC": 151,
        "PB": "Over £650k",
        "PBR": 12
    },
    {
        "UID": 147,
        "OR": 147,
        "SN": "Folkestone",
        "PE": 143,
        "QL": 832,
        "AC": 161,
        "PB": "£350k-£650k",
        "PBR": 92
    },
    {
        "UID": 148,
        "OR": 148,
        "SN": "Lymington",
        "PE": 159,
        "QL": 143,
        "AC": 476,
        "PB": "£350k-£650k",
        "PBR": 93
    },
    {
        "UID": 149,
        "OR": 149,
        "SN": "Blaenavon",
        "PE": 720,
        "QL": 69,
        "AC": 176,
        "PB": "Up to £350k",
        "PBR": 44
    },
    {
        "UID": 150,
        "OR": 150,
        "SN": "Ashford (Ashford)",
        "PE": 202,
        "QL": 250,
        "AC": 350,
        "PB": "£350k-£650k",
        "PBR": 94
    },
    {
        "UID": 151,
        "OR": 151,
        "SN": "Minster (Thanet)",
        "PE": 1138,
        "QL": 48,
        "AC": 56,
        "PB": "£350k-£650k",
        "PBR": 95
    },
    {
        "UID": 152,
        "OR": 152,
        "SN": "Maidstone",
        "PE": 129,
        "QL": 329,
        "AC": 390,
        "PB": "£350k-£650k",
        "PBR": 96
    },
    {
        "UID": 153,
        "OR": 153,
        "SN": "Cockermouth",
        "PE": 79,
        "QL": 1134,
        "AC": 127,
        "PB": "Up to £350k",
        "PBR": 45
    },
    {
        "UID": 154,
        "OR": 153,
        "SN": "Merthyr Tydfil",
        "PE": 49,
        "QL": 418,
        "AC": 474,
        "PB": "Up to £350k",
        "PBR": 45
    },
    {
        "UID": 155,
        "OR": 155,
        "SN": "Needham Market",
        "PE": 590,
        "QL": 774,
        "AC": 38,
        "PB": "£350k-£650k",
        "PBR": 97
    },
    {
        "UID": 156,
        "OR": 155,
        "SN": "Richmond",
        "PE": 145,
        "QL": 854,
        "AC": 169,
        "PB": "Up to £350k",
        "PBR": 47
    },
    {
        "UID": 157,
        "OR": 157,
        "SN": "Pershore",
        "PE": 343,
        "QL": 114,
        "AC": 346,
        "PB": "£350k-£650k",
        "PBR": 98
    },
    {
        "UID": 158,
        "OR": 158,
        "SN": "Sturminster Newton",
        "PE": 256,
        "QL": 485,
        "AC": 204,
        "PB": "£350k-£650k",
        "PBR": 99
    },
    {
        "UID": 159,
        "OR": 159,
        "SN": "Manningtree",
        "PE": 51,
        "QL": 187,
        "AC": 658,
        "PB": "£350k-£650k",
        "PBR": 100
    },
    {
        "UID": 160,
        "OR": 160,
        "SN": "Dorking",
        "PE": 226,
        "QL": 613,
        "AC": 178,
        "PB": "Over £650k",
        "PBR": 13
    },
    {
        "UID": 161,
        "OR": 161,
        "SN": "Maryport",
        "PE": 36,
        "QL": 237,
        "AC": 670,
        "PB": "Up to £350k",
        "PBR": 48
    },
    {
        "UID": 162,
        "OR": 162,
        "SN": "Hungerford",
        "PE": 25,
        "QL": 1016,
        "AC": 294,
        "PB": "£350k-£650k",
        "PBR": 101
    },
    {
        "UID": 163,
        "OR": 163,
        "SN": "Ambleside",
        "PE": 186,
        "QL": 700,
        "AC": 190,
        "PB": "£350k-£650k",
        "PBR": 102
    },
    {
        "UID": 164,
        "OR": 163,
        "SN": "Weston",
        "PE": 396,
        "QL": 464,
        "AC": 131,
        "PB": "Up to £350k",
        "PBR": 49
    },
    {
        "UID": 165,
        "OR": 165,
        "SN": "Overton (Basingstoke and Deane)",
        "PE": 9,
        "QL": 414,
        "AC": 607,
        "PB": "£350k-£650k",
        "PBR": 103
    },
    {
        "UID": 166,
        "OR": 166,
        "SN": "Appleby-in-Westmorland",
        "PE": 122,
        "QL": 1103,
        "AC": 121,
        "PB": "Up to £350k",
        "PBR": 50
    },
    {
        "UID": 167,
        "OR": 167,
        "SN": "Reading",
        "PE": 107,
        "QL": 746,
        "AC": 269,
        "PB": "£350k-£650k",
        "PBR": 104
    },
    {
        "UID": 168,
        "OR": 167,
        "SN": "Burnley",
        "PE": 165,
        "QL": 385,
        "AC": 340,
        "PB": "Up to £350k",
        "PBR": 51
    },
    {
        "UID": 169,
        "OR": 169,
        "SN": "New Mills",
        "PE": 109,
        "QL": 1008,
        "AC": 163,
        "PB": "Up to £350k",
        "PBR": 52
    },
    {
        "UID": 170,
        "OR": 170,
        "SN": "Welshpool",
        "PE": 245,
        "QL": 297,
        "AC": 322,
        "PB": "Up to £350k",
        "PBR": 53
    },
    {
        "UID": 171,
        "OR": 171,
        "SN": "Tangmere",
        "PE": 668,
        "QL": 608,
        "AC": 42,
        "PB": "£350k-£650k",
        "PBR": 105
    },
    {
        "UID": 172,
        "OR": 172,
        "SN": "Kidwelly",
        "PE": 220,
        "QL": 576,
        "AC": 215,
        "PB": "Up to £350k",
        "PBR": 54
    },
    {
        "UID": 173,
        "OR": 173,
        "SN": "Colchester",
        "PE": 360,
        "QL": 260,
        "AC": 265,
        "PB": "£350k-£650k",
        "PBR": 106
    },
    {
        "UID": 174,
        "OR": 174,
        "SN": "Bridlington",
        "PE": 116,
        "QL": 218,
        "AC": 536,
        "PB": "Up to £350k",
        "PBR": 55
    },
    {
        "UID": 175,
        "OR": 175,
        "SN": "Ashburton",
        "PE": 449,
        "QL": 935,
        "AC": 46,
        "PB": "£350k-£650k",
        "PBR": 107
    },
    {
        "UID": 176,
        "OR": 176,
        "SN": "Sittingbourne",
        "PE": 563,
        "QL": 113,
        "AC": 282,
        "PB": "£350k-£650k",
        "PBR": 108
    },
    {
        "UID": 177,
        "OR": 177,
        "SN": "Bridgwater",
        "PE": 219,
        "QL": 755,
        "AC": 167,
        "PB": "Up to £350k",
        "PBR": 56
    },
    {
        "UID": 178,
        "OR": 178,
        "SN": "Beaminster",
        "PE": 449,
        "QL": 337,
        "AC": 171,
        "PB": "£350k-£650k",
        "PBR": 109
    },
    {
        "UID": 179,
        "OR": 179,
        "SN": "Preston",
        "PE": 364,
        "QL": 78,
        "AC": 413,
        "PB": "Up to £350k",
        "PBR": 57
    },
    {
        "UID": 180,
        "OR": 180,
        "SN": "Ivybridge",
        "PE": 53,
        "QL": 578,
        "AC": 438,
        "PB": "£350k-£650k",
        "PBR": 110
    },
    {
        "UID": 181,
        "OR": 181,
        "SN": "Margate",
        "PE": 748,
        "QL": 72,
        "AC": 220,
        "PB": "£350k-£650k",
        "PBR": 111
    },
    {
        "UID": 182,
        "OR": 182,
        "SN": "Oxford",
        "PE": 352,
        "QL": 522,
        "AC": 154,
        "PB": "Over £650k",
        "PBR": 14
    },
    {
        "UID": 183,
        "OR": 183,
        "SN": "Chard",
        "PE": 443,
        "QL": 57,
        "AC": 404,
        "PB": "Up to £350k",
        "PBR": 58
    },
    {
        "UID": 184,
        "OR": 184,
        "SN": "Sturry",
        "PE": 359,
        "QL": 77,
        "AC": 429,
        "PB": "£350k-£650k",
        "PBR": 112
    },
    {
        "UID": 185,
        "OR": 185,
        "SN": "Skipton",
        "PE": 73,
        "QL": 1122,
        "AC": 185,
        "PB": "Up to £350k",
        "PBR": 59
    },
    {
        "UID": 186,
        "OR": 186,
        "SN": "Narberth",
        "PE": 824,
        "QL": 393,
        "AC": 59,
        "PB": "Up to £350k",
        "PBR": 60
    },
    {
        "UID": 187,
        "OR": 187,
        "SN": "Watchet",
        "PE": 169,
        "QL": 288,
        "AC": 440,
        "PB": "Up to £350k",
        "PBR": 61
    },
    {
        "UID": 188,
        "OR": 188,
        "SN": "Exeter",
        "PE": 442,
        "QL": 306,
        "AC": 208,
        "PB": "£350k-£650k",
        "PBR": 113
    },
    {
        "UID": 189,
        "OR": 189,
        "SN": "Congresbury",
        "PE": 152,
        "QL": 151,
        "AC": 585,
        "PB": "£350k-£650k",
        "PBR": 114
    },
    {
        "UID": 190,
        "OR": 190,
        "SN": "Ashbourne",
        "PE": 710,
        "QL": 981,
        "AC": 18,
        "PB": "Up to £350k",
        "PBR": 62
    },
    {
        "UID": 191,
        "OR": 191,
        "SN": "Bradford",
        "PE": 723,
        "QL": 102,
        "AC": 216,
        "PB": "Up to £350k",
        "PBR": 63
    },
    {
        "UID": 192,
        "OR": 192,
        "SN": "Whalley",
        "PE": 223,
        "QL": 1020,
        "AC": 115,
        "PB": "£350k-£650k",
        "PBR": 115
    },
    {
        "UID": 193,
        "OR": 193,
        "SN": "Shaldon",
        "PE": 267,
        "QL": 547,
        "AC": 238,
        "PB": "Over £650k",
        "PBR": 15
    },
    {
        "UID": 194,
        "OR": 194,
        "SN": "Ringmer",
        "PE": 449,
        "QL": 404,
        "AC": 172,
        "PB": "£350k-£650k",
        "PBR": 116
    },
    {
        "UID": 195,
        "OR": 195,
        "SN": "South Molton",
        "PE": 568,
        "QL": 1080,
        "AC": 25,
        "PB": "Up to £350k",
        "PBR": 64
    },
    {
        "UID": 196,
        "OR": 196,
        "SN": "Halton",
        "PE": 108,
        "QL": 1110,
        "AC": 180,
        "PB": "Up to £350k",
        "PBR": 65
    },
    {
        "UID": 197,
        "OR": 197,
        "SN": "Chester",
        "PE": 566,
        "QL": 288,
        "AC": 211,
        "PB": "£350k-£650k",
        "PBR": 117
    },
    {
        "UID": 198,
        "OR": 198,
        "SN": "Newton Abbot",
        "PE": 573,
        "QL": 240,
        "AC": 240,
        "PB": "£350k-£650k",
        "PBR": 118
    },
    {
        "UID": 199,
        "OR": 199,
        "SN": "Fishguard",
        "PE": 147,
        "QL": 513,
        "AC": 383,
        "PB": "Up to £350k",
        "PBR": 66
    },
    {
        "UID": 200,
        "OR": 200,
        "SN": "Camden",
        "PE": 917,
        "QL": 989,
        "AC": 7,
        "PB": "Over £650k",
        "PBR": 16
    },
    {
        "UID": 201,
        "OR": 201,
        "SN": "Ditton",
        "PE": 315,
        "QL": 532,
        "AC": 243,
        "PB": "£350k-£650k",
        "PBR": 119
    },
    {
        "UID": 202,
        "OR": 202,
        "SN": "York",
        "PE": 549,
        "QL": 791,
        "AC": 87,
        "PB": "£350k-£650k",
        "PBR": 120
    },
    {
        "UID": 203,
        "OR": 203,
        "SN": "Somerton (South Somerset)",
        "PE": 1035,
        "QL": 185,
        "AC": 75,
        "PB": "£350k-£650k",
        "PBR": 121
    },
    {
        "UID": 204,
        "OR": 204,
        "SN": "Telford",
        "PE": 358,
        "QL": 62,
        "AC": 554,
        "PB": "Up to £350k",
        "PBR": 67
    },
    {
        "UID": 205,
        "OR": 205,
        "SN": "Shefford",
        "PE": 310,
        "QL": 458,
        "AC": 287,
        "PB": "£350k-£650k",
        "PBR": 122
    },
    {
        "UID": 206,
        "OR": 206,
        "SN": "Catterall",
        "PE": 125,
        "QL": 436,
        "AC": 478,
        "PB": "Up to £350k",
        "PBR": 68
    },
    {
        "UID": 207,
        "OR": 207,
        "SN": "Christchurch",
        "PE": 64,
        "QL": 401,
        "AC": 618,
        "PB": "£350k-£650k",
        "PBR": 123
    },
    {
        "UID": 208,
        "OR": 208,
        "SN": "Rockwell Green",
        "PE": 724,
        "QL": 97,
        "AC": 268,
        "PB": "Up to £350k",
        "PBR": 69
    },
    {
        "UID": 209,
        "OR": 209,
        "SN": "Gloucester",
        "PE": 178,
        "QL": 994,
        "AC": 197,
        "PB": "£350k-£650k",
        "PBR": 124
    },
    {
        "UID": 210,
        "OR": 210,
        "SN": "Yelverton",
        "PE": 24,
        "QL": 1087,
        "AC": 371,
        "PB": "£350k-£650k",
        "PBR": 125
    },
    {
        "UID": 211,
        "OR": 211,
        "SN": "Weedon Bec",
        "PE": 577,
        "QL": 445,
        "AC": 158,
        "PB": "£350k-£650k",
        "PBR": 126
    },
    {
        "UID": 212,
        "OR": 212,
        "SN": "Berkhamsted",
        "PE": 12,
        "QL": 874,
        "AC": 509,
        "PB": "Over £650k",
        "PBR": 17
    },
    {
        "UID": 213,
        "OR": 213,
        "SN": "Petworth",
        "PE": 449,
        "QL": 867,
        "AC": 89,
        "PB": "£350k-£650k",
        "PBR": 127
    },
    {
        "UID": 214,
        "OR": 214,
        "SN": "Much Wenlock",
        "PE": 692,
        "QL": 707,
        "AC": 61,
        "PB": "£350k-£650k",
        "PBR": 128
    },
    {
        "UID": 215,
        "OR": 215,
        "SN": "Newent",
        "PE": 967,
        "QL": 564,
        "AC": 29,
        "PB": "£350k-£650k",
        "PBR": 129
    },
    {
        "UID": 216,
        "OR": 216,
        "SN": "Swansea",
        "PE": 99,
        "QL": 658,
        "AC": 417,
        "PB": "Up to £350k",
        "PBR": 70
    },
    {
        "UID": 217,
        "OR": 216,
        "SN": "East Ayton",
        "PE": 18,
        "QL": 881,
        "AC": 516,
        "PB": "Up to £350k",
        "PBR": 70
    },
    {
        "UID": 218,
        "OR": 218,
        "SN": "Lingfield",
        "PE": 763,
        "QL": 100,
        "AC": 266,
        "PB": "£350k-£650k",
        "PBR": 130
    },
    {
        "UID": 219,
        "OR": 219,
        "SN": "Hythe",
        "PE": 3,
        "QL": 1190,
        "AC": 364,
        "PB": "£350k-£650k",
        "PBR": 131
    },
    {
        "UID": 220,
        "OR": 220,
        "SN": "Diss",
        "PE": 703,
        "QL": 326,
        "AC": 149,
        "PB": "£350k-£650k",
        "PBR": 132
    },
    {
        "UID": 221,
        "OR": 221,
        "SN": "Budleigh Salterton",
        "PE": 48,
        "QL": 739,
        "AC": 501,
        "PB": "£350k-£650k",
        "PBR": 133
    },
    {
        "UID": 222,
        "OR": 222,
        "SN": "Kendal",
        "PE": 89,
        "QL": 852,
        "AC": 387,
        "PB": "£350k-£650k",
        "PBR": 134
    },
    {
        "UID": 223,
        "OR": 223,
        "SN": "Hadlow",
        "PE": 770,
        "QL": 776,
        "AC": 53,
        "PB": "£350k-£650k",
        "PBR": 135
    },
    {
        "UID": 224,
        "OR": 224,
        "SN": "Wisbech",
        "PE": 781,
        "QL": 132,
        "AC": 252,
        "PB": "Up to £350k",
        "PBR": 72
    },
    {
        "UID": 225,
        "OR": 224,
        "SN": "Stourport-on-Severn",
        "PE": 434,
        "QL": 22,
        "AC": 681,
        "PB": "Up to £350k",
        "PBR": 72
    },
    {
        "UID": 226,
        "OR": 226,
        "SN": "Wickham",
        "PE": 449,
        "QL": 510,
        "AC": 203,
        "PB": "£350k-£650k",
        "PBR": 136
    },
    {
        "UID": 227,
        "OR": 227,
        "SN": "Penmaenmawr",
        "PE": 109,
        "QL": 220,
        "AC": 711,
        "PB": "Up to £350k",
        "PBR": 74
    },
    {
        "UID": 228,
        "OR": 228,
        "SN": "Ramsgate",
        "PE": 886,
        "QL": 126,
        "AC": 205,
        "PB": "£350k-£650k",
        "PBR": 137
    },
    {
        "UID": 229,
        "OR": 229,
        "SN": "Sheerness",
        "PE": 387,
        "QL": 149,
        "AC": 452,
        "PB": "Up to £350k",
        "PBR": 75
    },
    {
        "UID": 230,
        "OR": 230,
        "SN": "Holywell Green",
        "PE": 1004,
        "QL": 48,
        "AC": 246,
        "PB": "Up to £350k",
        "PBR": 76
    },
    {
        "UID": 231,
        "OR": 231,
        "SN": "Keighley",
        "PE": 283,
        "QL": 213,
        "AC": 499,
        "PB": "Up to £350k",
        "PBR": 77
    },
    {
        "UID": 232,
        "OR": 232,
        "SN": "Fakenham",
        "PE": 580,
        "QL": 936,
        "AC": 76,
        "PB": "£350k-£650k",
        "PBR": 138
    },
    {
        "UID": 233,
        "OR": 232,
        "SN": "Upper Beeding",
        "PE": 33,
        "QL": 757,
        "AC": 579,
        "PB": "£350k-£650k",
        "PBR": 138
    },
    {
        "UID": 234,
        "OR": 234,
        "SN": "Bollington",
        "PE": 85,
        "QL": 1204,
        "AC": 249,
        "PB": "£350k-£650k",
        "PBR": 140
    },
    {
        "UID": 235,
        "OR": 235,
        "SN": "Cheltenham",
        "PE": 449,
        "QL": 1101,
        "AC": 65,
        "PB": "£350k-£650k",
        "PBR": 141
    },
    {
        "UID": 236,
        "OR": 236,
        "SN": "Lechlade-on-Thames",
        "PE": 123,
        "QL": 765,
        "AC": 405,
        "PB": "£350k-£650k",
        "PBR": 142
    },
    {
        "UID": 237,
        "OR": 237,
        "SN": "Cambridge",
        "PE": 1009,
        "QL": 193,
        "AC": 118,
        "PB": "Over £650k",
        "PBR": 18
    },
    {
        "UID": 238,
        "OR": 238,
        "SN": "Church",
        "PE": 205,
        "QL": 823,
        "AC": 308,
        "PB": "Up to £350k",
        "PBR": 78
    },
    {
        "UID": 239,
        "OR": 239,
        "SN": "Leek",
        "PE": 418,
        "QL": 1044,
        "AC": 93,
        "PB": "Up to £350k",
        "PBR": 79
    },
    {
        "UID": 240,
        "OR": 240,
        "SN": "Elland",
        "PE": 554,
        "QL": 224,
        "AC": 362,
        "PB": "Up to £350k",
        "PBR": 80
    },
    {
        "UID": 241,
        "OR": 241,
        "SN": "Shifnal",
        "PE": 1006,
        "QL": 41,
        "AC": 280,
        "PB": "Up to £350k",
        "PBR": 81
    },
    {
        "UID": 242,
        "OR": 242,
        "SN": "Sandown",
        "PE": 171,
        "QL": 117,
        "AC": 760,
        "PB": "£350k-£650k",
        "PBR": 143
    },
    {
        "UID": 243,
        "OR": 243,
        "SN": "Gillingham",
        "PE": 207,
        "QL": 201,
        "AC": 632,
        "PB": "£350k-£650k",
        "PBR": 144
    },
    {
        "UID": 244,
        "OR": 244,
        "SN": "Rhymney",
        "PE": 540,
        "QL": 71,
        "AC": 543,
        "PB": "Up to £350k",
        "PBR": 82
    },
    {
        "UID": 245,
        "OR": 245,
        "SN": "Netherton",
        "PE": 582,
        "QL": 39,
        "AC": 580,
        "PB": "Up to £350k",
        "PBR": 83
    },
    {
        "UID": 246,
        "OR": 246,
        "SN": "Cheddar",
        "PE": 449,
        "QL": 200,
        "AC": 410,
        "PB": "£350k-£650k",
        "PBR": 145
    },
    {
        "UID": 247,
        "OR": 247,
        "SN": "Brierfield",
        "PE": 191,
        "QL": 580,
        "AC": 412,
        "PB": "Up to £350k",
        "PBR": 84
    },
    {
        "UID": 248,
        "OR": 248,
        "SN": "Haltwhistle",
        "PE": 138,
        "QL": 875,
        "AC": 370,
        "PB": "Up to £350k",
        "PBR": 85
    },
    {
        "UID": 249,
        "OR": 249,
        "SN": "Aberdare",
        "PE": 190,
        "QL": 322,
        "AC": 585,
        "PB": "Up to £350k",
        "PBR": 86
    },
    {
        "UID": 250,
        "OR": 250,
        "SN": "Denbigh",
        "PE": 868,
        "QL": 547,
        "AC": 81,
        "PB": "Up to £350k",
        "PBR": 87
    },
    {
        "UID": 251,
        "OR": 251,
        "SN": "East Peckham",
        "PE": 390,
        "QL": 396,
        "AC": 344,
        "PB": "£350k-£650k",
        "PBR": 146
    },
    {
        "UID": 252,
        "OR": 252,
        "SN": "Wooler",
        "PE": 101,
        "QL": 592,
        "AC": 546,
        "PB": "Up to £350k",
        "PBR": 88
    },
    {
        "UID": 253,
        "OR": 253,
        "SN": "Great Ayton",
        "PE": 661,
        "QL": 433,
        "AC": 194,
        "PB": "Up to £350k",
        "PBR": 89
    },
    {
        "UID": 254,
        "OR": 254,
        "SN": "Chatham",
        "PE": 238,
        "QL": 188,
        "AC": 648,
        "PB": "£350k-£650k",
        "PBR": 147
    },
    {
        "UID": 255,
        "OR": 255,
        "SN": "Warminster",
        "PE": 361,
        "QL": 746,
        "AC": 237,
        "PB": "£350k-£650k",
        "PBR": 148
    },
    {
        "UID": 256,
        "OR": 256,
        "SN": "Cullingworth",
        "PE": 1095,
        "QL": 38,
        "AC": 256,
        "PB": "Up to £350k",
        "PBR": 90
    },
    {
        "UID": 257,
        "OR": 257,
        "SN": "Durham",
        "PE": 635,
        "QL": 529,
        "AC": 167,
        "PB": "Up to £350k",
        "PBR": 91
    },
    {
        "UID": 258,
        "OR": 258,
        "SN": "Milborne Port",
        "PE": 1058,
        "QL": 948,
        "AC": 12,
        "PB": "£350k-£650k",
        "PBR": 149
    },
    {
        "UID": 259,
        "OR": 259,
        "SN": "Gunnislake",
        "PE": 30,
        "QL": 1066,
        "AC": 491,
        "PB": "Up to £350k",
        "PBR": 92
    },
    {
        "UID": 260,
        "OR": 260,
        "SN": "Chepstow",
        "PE": 91,
        "QL": 1031,
        "AC": 385,
        "PB": "£350k-£650k",
        "PBR": 150
    },
    {
        "UID": 261,
        "OR": 261,
        "SN": "South Petherton",
        "PE": 1012,
        "QL": 421,
        "AC": 77,
        "PB": "£350k-£650k",
        "PBR": 151
    },
    {
        "UID": 262,
        "OR": 262,
        "SN": "Reigate",
        "PE": 449,
        "QL": 693,
        "AC": 201,
        "PB": "Over £650k",
        "PBR": 19
    },
    {
        "UID": 263,
        "OR": 263,
        "SN": "Delph",
        "PE": 782,
        "QL": 515,
        "AC": 126,
        "PB": "£350k-£650k",
        "PBR": 152
    },
    {
        "UID": 264,
        "OR": 264,
        "SN": "Bodmin",
        "PE": 878,
        "QL": 441,
        "AC": 116,
        "PB": "Up to £350k",
        "PBR": 93
    },
    {
        "UID": 265,
        "OR": 265,
        "SN": "Crewkerne",
        "PE": 681,
        "QL": 683,
        "AC": 108,
        "PB": "Up to £350k",
        "PBR": 94
    },
    {
        "UID": 266,
        "OR": 266,
        "SN": "Yeovil",
        "PE": 624,
        "QL": 47,
        "AC": 557,
        "PB": "Up to £350k",
        "PBR": 95
    },
    {
        "UID": 267,
        "OR": 267,
        "SN": "Minehead",
        "PE": 161,
        "QL": 523,
        "AC": 528,
        "PB": "£350k-£650k",
        "PBR": 153
    },
    {
        "UID": 268,
        "OR": 268,
        "SN": "Corbridge",
        "PE": 434,
        "QL": 819,
        "AC": 192,
        "PB": "£350k-£650k",
        "PBR": 154
    },
    {
        "UID": 269,
        "OR": 269,
        "SN": "Islington",
        "PE": 867,
        "QL": 1162,
        "AC": 17,
        "PB": "Over £650k",
        "PBR": 20
    },
    {
        "UID": 270,
        "OR": 270,
        "SN": "Goring",
        "PE": 34,
        "QL": 1371,
        "AC": 104,
        "PB": "Over £650k",
        "PBR": 21
    },
    {
        "UID": 271,
        "OR": 271,
        "SN": "Steyning",
        "PE": 449,
        "QL": 638,
        "AC": 231,
        "PB": "£350k-£650k",
        "PBR": 155
    },
    {
        "UID": 272,
        "OR": 272,
        "SN": "Hackney",
        "PE": 655,
        "QL": 1141,
        "AC": 49,
        "PB": "Over £650k",
        "PBR": 22
    },
    {
        "UID": 273,
        "OR": 273,
        "SN": "Newington",
        "PE": 769,
        "QL": 92,
        "AC": 377,
        "PB": "£350k-£650k",
        "PBR": 156
    },
    {
        "UID": 274,
        "OR": 274,
        "SN": "Forest Row",
        "PE": 449,
        "QL": 227,
        "AC": 439,
        "PB": "£350k-£650k",
        "PBR": 157
    },
    {
        "UID": 275,
        "OR": 275,
        "SN": "Headcorn",
        "PE": 700,
        "QL": 487,
        "AC": 173,
        "PB": "£350k-£650k",
        "PBR": 158
    },
    {
        "UID": 276,
        "OR": 276,
        "SN": "Great Torrington",
        "PE": 621,
        "QL": 968,
        "AC": 93,
        "PB": "Up to £350k",
        "PBR": 96
    },
    {
        "UID": 277,
        "OR": 277,
        "SN": "Southampton",
        "PE": 337,
        "QL": 244,
        "AC": 545,
        "PB": "£350k-£650k",
        "PBR": 159
    },
    {
        "UID": 278,
        "OR": 278,
        "SN": "Herne Bay",
        "PE": 558,
        "QL": 237,
        "AC": 419,
        "PB": "£350k-£650k",
        "PBR": 160
    },
    {
        "UID": 279,
        "OR": 279,
        "SN": "Newport",
        "PE": 374,
        "QL": 648,
        "AC": 289,
        "PB": "Up to £350k",
        "PBR": 97
    },
    {
        "UID": 280,
        "OR": 280,
        "SN": "Royal Leamington Spa",
        "PE": 541,
        "QL": 865,
        "AC": 173,
        "PB": "£350k-£650k",
        "PBR": 161
    },
    {
        "UID": 281,
        "OR": 281,
        "SN": "Loftus",
        "PE": 706,
        "QL": 32,
        "AC": 592,
        "PB": "Up to £350k",
        "PBR": 98
    },
    {
        "UID": 282,
        "OR": 282,
        "SN": "Midhurst",
        "PE": 185,
        "QL": 1280,
        "AC": 180,
        "PB": "£350k-£650k",
        "PBR": 162
    },
    {
        "UID": 283,
        "OR": 283,
        "SN": "Llanidloes",
        "PE": 443,
        "QL": 788,
        "AC": 226,
        "PB": "Up to £350k",
        "PBR": 99
    },
    {
        "UID": 284,
        "OR": 284,
        "SN": "Leeds",
        "PE": 594,
        "QL": 328,
        "AC": 359,
        "PB": "Up to £350k",
        "PBR": 100
    },
    {
        "UID": 285,
        "OR": 285,
        "SN": "Penrith",
        "PE": 597,
        "QL": 1034,
        "AC": 103,
        "PB": "Up to £350k",
        "PBR": 101
    },
    {
        "UID": 286,
        "OR": 286,
        "SN": "Bexhill",
        "PE": 258,
        "QL": 230,
        "AC": 672,
        "PB": "£350k-£650k",
        "PBR": 163
    },
    {
        "UID": 287,
        "OR": 286,
        "SN": "Newhaven",
        "PE": 37,
        "QL": 345,
        "AC": 902,
        "PB": "£350k-£650k",
        "PBR": 163
    },
    {
        "UID": 288,
        "OR": 288,
        "SN": "Marlow",
        "PE": 174,
        "QL": 1234,
        "AC": 238,
        "PB": "Over £650k",
        "PBR": 23
    },
    {
        "UID": 289,
        "OR": 289,
        "SN": "Guisborough",
        "PE": 449,
        "QL": 840,
        "AC": 216,
        "PB": "Up to £350k",
        "PBR": 102
    },
    {
        "UID": 290,
        "OR": 290,
        "SN": "New Tredegar",
        "PE": 228,
        "QL": 66,
        "AC": 882,
        "PB": "Up to £350k",
        "PBR": 103
    },
    {
        "UID": 291,
        "OR": 291,
        "SN": "Whitchurch (Shropshire)",
        "PE": 1071,
        "QL": 371,
        "AC": 96,
        "PB": "Up to £350k",
        "PBR": 104
    },
    {
        "UID": 292,
        "OR": 292,
        "SN": "Northwich",
        "PE": 649,
        "QL": 468,
        "AC": 259,
        "PB": "Up to £350k",
        "PBR": 105
    },
    {
        "UID": 293,
        "OR": 293,
        "SN": "Darlington",
        "PE": 856,
        "QL": 40,
        "AC": 481,
        "PB": "Up to £350k",
        "PBR": 106
    },
    {
        "UID": 294,
        "OR": 294,
        "SN": "Liverpool",
        "PE": 1112,
        "QL": 272,
        "AC": 112,
        "PB": "Up to £350k",
        "PBR": 107
    },
    {
        "UID": 295,
        "OR": 295,
        "SN": "Lowestoft",
        "PE": 111,
        "QL": 696,
        "AC": 605,
        "PB": "Up to £350k",
        "PBR": 108
    },
    {
        "UID": 296,
        "OR": 296,
        "SN": "Rochdale",
        "PE": 394,
        "QL": 511,
        "AC": 384,
        "PB": "Up to £350k",
        "PBR": 109
    },
    {
        "UID": 297,
        "OR": 297,
        "SN": "Dover",
        "PE": 229,
        "QL": 729,
        "AC": 430,
        "PB": "Up to £350k",
        "PBR": 110
    },
    {
        "UID": 298,
        "OR": 298,
        "SN": "Kinver",
        "PE": 595,
        "QL": 211,
        "AC": 455,
        "PB": "£350k-£650k",
        "PBR": 165
    },
    {
        "UID": 299,
        "OR": 299,
        "SN": "Redhill",
        "PE": 245,
        "QL": 751,
        "AC": 416,
        "PB": "£350k-£650k",
        "PBR": 166
    },
    {
        "UID": 300,
        "OR": 300,
        "SN": "Knaresborough",
        "PE": 338,
        "QL": 864,
        "AC": 313,
        "PB": "£350k-£650k",
        "PBR": 167
    },
    {
        "UID": 301,
        "OR": 301,
        "SN": "Coleshill (North Warwickshire)",
        "PE": 694,
        "QL": 652,
        "AC": 169,
        "PB": "£350k-£650k",
        "PBR": 168
    },
    {
        "UID": 302,
        "OR": 302,
        "SN": "Amlwch",
        "PE": 206,
        "QL": 786,
        "AC": 449,
        "PB": "Up to £350k",
        "PBR": 111
    },
    {
        "UID": 303,
        "OR": 303,
        "SN": "Cuckfield",
        "PE": 449,
        "QL": 780,
        "AC": 267,
        "PB": "£350k-£650k",
        "PBR": 169
    },
    {
        "UID": 304,
        "OR": 304,
        "SN": "Worthing",
        "PE": 136,
        "QL": 641,
        "AC": 609,
        "PB": "£350k-£650k",
        "PBR": 170
    },
    {
        "UID": 305,
        "OR": 304,
        "SN": "Grange-over-Sands",
        "PE": 135,
        "QL": 1117,
        "AC": 379,
        "PB": "Up to £350k",
        "PBR": 112
    },
    {
        "UID": 306,
        "OR": 306,
        "SN": "Uckfield",
        "PE": 210,
        "QL": 385,
        "AC": 668,
        "PB": "£350k-£650k",
        "PBR": 171
    },
    {
        "UID": 307,
        "OR": 307,
        "SN": "Burnham-on-Sea",
        "PE": 319,
        "QL": 56,
        "AC": 860,
        "PB": "£350k-£650k",
        "PBR": 172
    },
    {
        "UID": 308,
        "OR": 308,
        "SN": "Mickletown",
        "PE": 1022,
        "QL": 9,
        "AC": 612,
        "PB": "Up to £350k",
        "PBR": 113
    },
    {
        "UID": 309,
        "OR": 309,
        "SN": "Launceston",
        "PE": 874,
        "QL": 621,
        "AC": 122,
        "PB": "Up to £350k",
        "PBR": 114
    },
    {
        "UID": 310,
        "OR": 310,
        "SN": "Risca",
        "PE": 262,
        "QL": 516,
        "AC": 529,
        "PB": "Up to £350k",
        "PBR": 115
    },
    {
        "UID": 311,
        "OR": 311,
        "SN": "Keynsham",
        "PE": 248,
        "QL": 330,
        "AC": 670,
        "PB": "£350k-£650k",
        "PBR": 173
    },
    {
        "UID": 312,
        "OR": 312,
        "SN": "Lambeth",
        "PE": 818,
        "QL": 1188,
        "AC": 37,
        "PB": "Over £650k",
        "PBR": 24
    },
    {
        "UID": 313,
        "OR": 313,
        "SN": "Broadway",
        "PE": 449,
        "QL": 277,
        "AC": 513,
        "PB": "£350k-£650k",
        "PBR": 174
    },
    {
        "UID": 314,
        "OR": 314,
        "SN": "Sunderland",
        "PE": 304,
        "QL": 954,
        "AC": 312,
        "PB": "Up to £350k",
        "PBR": 116
    },
    {
        "UID": 315,
        "OR": 315,
        "SN": "Boroughbridge",
        "PE": 320,
        "QL": 1269,
        "AC": 143,
        "PB": "£350k-£650k",
        "PBR": 175
    },
    {
        "UID": 316,
        "OR": 316,
        "SN": "Bingley",
        "PE": 232,
        "QL": 634,
        "AC": 500,
        "PB": "Up to £350k",
        "PBR": 117
    },
    {
        "UID": 317,
        "OR": 317,
        "SN": "Hertford",
        "PE": 564,
        "QL": 1276,
        "AC": 70,
        "PB": "Over £650k",
        "PBR": 25
    },
    {
        "UID": 318,
        "OR": 317,
        "SN": "Croydon",
        "PE": 420,
        "QL": 542,
        "AC": 377,
        "PB": "Over £650k",
        "PBR": 25
    },
    {
        "UID": 319,
        "OR": 319,
        "SN": "Alton (East Hampshire)",
        "PE": 449,
        "QL": 898,
        "AC": 246,
        "PB": "Over £650k",
        "PBR": 27
    },
    {
        "UID": 320,
        "OR": 319,
        "SN": "Bromyard",
        "PE": 956,
        "QL": 194,
        "AC": 282,
        "PB": "Up to £350k",
        "PBR": 118
    },
    {
        "UID": 321,
        "OR": 321,
        "SN": "Bedford",
        "PE": 760,
        "QL": 300,
        "AC": 325,
        "PB": "£350k-£650k",
        "PBR": 176
    },
    {
        "UID": 322,
        "OR": 321,
        "SN": "Newlyn",
        "PE": 85,
        "QL": 1213,
        "AC": 400,
        "PB": "£350k-£650k",
        "PBR": 176
    },
    {
        "UID": 323,
        "OR": 323,
        "SN": "Wirksworth",
        "PE": 780,
        "QL": 955,
        "AC": 89,
        "PB": "£350k-£650k",
        "PBR": 178
    },
    {
        "UID": 324,
        "OR": 324,
        "SN": "Shipley",
        "PE": 295,
        "QL": 883,
        "AC": 351,
        "PB": "Up to £350k",
        "PBR": 119
    },
    {
        "UID": 325,
        "OR": 325,
        "SN": "Leiston",
        "PE": 678,
        "QL": 231,
        "AC": 403,
        "PB": "Up to £350k",
        "PBR": 120
    },
    {
        "UID": 326,
        "OR": 326,
        "SN": "Banbury",
        "PE": 407,
        "QL": 242,
        "AC": 592,
        "PB": "£350k-£650k",
        "PBR": 179
    },
    {
        "UID": 327,
        "OR": 327,
        "SN": "Stockport",
        "PE": 567,
        "QL": 231,
        "AC": 520,
        "PB": "£350k-£650k",
        "PBR": 180
    },
    {
        "UID": 328,
        "OR": 328,
        "SN": "Dewsbury",
        "PE": 657,
        "QL": 168,
        "AC": 485,
        "PB": "Up to £350k",
        "PBR": 121
    },
    {
        "UID": 329,
        "OR": 329,
        "SN": "Stokesley",
        "PE": 821,
        "QL": 495,
        "AC": 207,
        "PB": "Up to £350k",
        "PBR": 122
    },
    {
        "UID": 330,
        "OR": 330,
        "SN": "Mirfield",
        "PE": 403,
        "QL": 130,
        "AC": 704,
        "PB": "Up to £350k",
        "PBR": 123
    },
    {
        "UID": 331,
        "OR": 331,
        "SN": "Princes Risborough",
        "PE": 449,
        "QL": 1127,
        "AC": 152,
        "PB": "Over £650k",
        "PBR": 28
    },
    {
        "UID": 332,
        "OR": 332,
        "SN": "Wallingford",
        "PE": 94,
        "QL": 1346,
        "AC": 226,
        "PB": "£350k-£650k",
        "PBR": 181
    },
    {
        "UID": 333,
        "OR": 333,
        "SN": "Wantage",
        "PE": 449,
        "QL": 769,
        "AC": 307,
        "PB": "£350k-£650k",
        "PBR": 182
    },
    {
        "UID": 334,
        "OR": 334,
        "SN": "Brighouse",
        "PE": 629,
        "QL": 175,
        "AC": 519,
        "PB": "Up to £350k",
        "PBR": 124
    },
    {
        "UID": 335,
        "OR": 335,
        "SN": "Williton",
        "PE": 747,
        "QL": 551,
        "AC": 231,
        "PB": "£350k-£650k",
        "PBR": 183
    },
    {
        "UID": 336,
        "OR": 336,
        "SN": "Crediton",
        "PE": 773,
        "QL": 886,
        "AC": 122,
        "PB": "£350k-£650k",
        "PBR": 184
    },
    {
        "UID": 337,
        "OR": 336,
        "SN": "Gillingham (North Dorset)",
        "PE": 177,
        "QL": 805,
        "AC": 544,
        "PB": "£350k-£650k",
        "PBR": 184
    },
    {
        "UID": 338,
        "OR": 336,
        "SN": "Longtown",
        "PE": 244,
        "QL": 260,
        "AC": 766,
        "PB": "Up to £350k",
        "PBR": 125
    },
    {
        "UID": 339,
        "OR": 339,
        "SN": "Church Stretton",
        "PE": 449,
        "QL": 1031,
        "AC": 206,
        "PB": "£350k-£650k",
        "PBR": 186
    },
    {
        "UID": 340,
        "OR": 340,
        "SN": "Petersfield",
        "PE": 234,
        "QL": 1244,
        "AC": 258,
        "PB": "£350k-£650k",
        "PBR": 187
    },
    {
        "UID": 341,
        "OR": 341,
        "SN": "Lydd",
        "PE": 1049,
        "QL": 451,
        "AC": 134,
        "PB": "£350k-£650k",
        "PBR": 188
    },
    {
        "UID": 342,
        "OR": 342,
        "SN": "Saltash",
        "PE": 106,
        "QL": 961,
        "AC": 569,
        "PB": "Up to £350k",
        "PBR": 126
    },
    {
        "UID": 343,
        "OR": 343,
        "SN": "Olney",
        "PE": 879,
        "QL": 1192,
        "AC": 40,
        "PB": "£350k-£650k",
        "PBR": 189
    },
    {
        "UID": 344,
        "OR": 344,
        "SN": "Flamborough",
        "PE": 449,
        "QL": 461,
        "AC": 444,
        "PB": "Up to £350k",
        "PBR": 127
    },
    {
        "UID": 345,
        "OR": 345,
        "SN": "St Blazey",
        "PE": 449,
        "QL": 263,
        "AC": 589,
        "PB": "Up to £350k",
        "PBR": 128
    },
    {
        "UID": 346,
        "OR": 346,
        "SN": "Henley-In-Arden",
        "PE": 1202,
        "QL": 140,
        "AC": 186,
        "PB": "£350k-£650k",
        "PBR": 190
    },
    {
        "UID": 347,
        "OR": 347,
        "SN": "Thornton (Bradford)",
        "PE": 1148,
        "QL": 18,
        "AC": 449,
        "PB": "Up to £350k",
        "PBR": 129
    },
    {
        "UID": 348,
        "OR": 348,
        "SN": "Bournemouth",
        "PE": 433,
        "QL": 361,
        "AC": 527,
        "PB": "Over £650k",
        "PBR": 29
    },
    {
        "UID": 349,
        "OR": 349,
        "SN": "Coningsby Airfield",
        "PE": 535,
        "QL": 956,
        "AC": 257,
        "PB": "Up to £350k",
        "PBR": 130
    },
    {
        "UID": 350,
        "OR": 349,
        "SN": "Rhyl",
        "PE": 286,
        "QL": 12,
        "AC": 1140,
        "PB": "Up to £350k",
        "PBR": 130
    },
    {
        "UID": 351,
        "OR": 351,
        "SN": "Bognor Regis",
        "PE": 295,
        "QL": 84,
        "AC": 876,
        "PB": "£350k-£650k",
        "PBR": 191
    },
    {
        "UID": 352,
        "OR": 352,
        "SN": "Burton upon Trent",
        "PE": 617,
        "QL": 465,
        "AC": 369,
        "PB": "Up to £350k",
        "PBR": 132
    },
    {
        "UID": 353,
        "OR": 352,
        "SN": "Birmingham",
        "PE": 629,
        "QL": 325,
        "AC": 428,
        "PB": "Up to £350k",
        "PBR": 132
    },
    {
        "UID": 354,
        "OR": 354,
        "SN": "Rawtenstall",
        "PE": 354,
        "QL": 648,
        "AC": 427,
        "PB": "Up to £350k",
        "PBR": 134
    },
    {
        "UID": 355,
        "OR": 355,
        "SN": "Faringdon",
        "PE": 980,
        "QL": 1100,
        "AC": 41,
        "PB": "£350k-£650k",
        "PBR": 192
    },
    {
        "UID": 356,
        "OR": 356,
        "SN": "Hounslow",
        "PE": 583,
        "QL": 736,
        "AC": 291,
        "PB": "Over £650k",
        "PBR": 30
    },
    {
        "UID": 357,
        "OR": 357,
        "SN": "Gainsborough",
        "PE": 816,
        "QL": 246,
        "AC": 380,
        "PB": "Up to £350k",
        "PBR": 135
    },
    {
        "UID": 358,
        "OR": 358,
        "SN": "Fremington",
        "PE": 292,
        "QL": 994,
        "AC": 362,
        "PB": "£350k-£650k",
        "PBR": 193
    },
    {
        "UID": 359,
        "OR": 359,
        "SN": "Teynham",
        "PE": 830,
        "QL": 60,
        "AC": 589,
        "PB": "£350k-£650k",
        "PBR": 194
    },
    {
        "UID": 360,
        "OR": 360,
        "SN": "Cheadle",
        "PE": 268,
        "QL": 237,
        "AC": 792,
        "PB": "£350k-£650k",
        "PBR": 195
    },
    {
        "UID": 361,
        "OR": 361,
        "SN": "Barnsley",
        "PE": 742,
        "QL": 81,
        "AC": 596,
        "PB": "Up to £350k",
        "PBR": 136
    },
    {
        "UID": 362,
        "OR": 362,
        "SN": "Poole",
        "PE": 240,
        "QL": 517,
        "AC": 656,
        "PB": "£350k-£650k",
        "PBR": 196
    },
    {
        "UID": 363,
        "OR": 363,
        "SN": "East Cowes",
        "PE": 29,
        "QL": 1297,
        "AC": 506,
        "PB": "Up to £350k",
        "PBR": 137
    },
    {
        "UID": 364,
        "OR": 363,
        "SN": "Colne",
        "PE": 147,
        "QL": 868,
        "AC": 603,
        "PB": "Up to £350k",
        "PBR": 137
    },
    {
        "UID": 365,
        "OR": 365,
        "SN": "High Wycombe",
        "PE": 257,
        "QL": 881,
        "AC": 462,
        "PB": "£350k-£650k",
        "PBR": 197
    },
    {
        "UID": 366,
        "OR": 366,
        "SN": "Leighton Buzzard",
        "PE": 363,
        "QL": 504,
        "AC": 537,
        "PB": "£350k-£650k",
        "PBR": 198
    },
    {
        "UID": 367,
        "OR": 367,
        "SN": "Honiton",
        "PE": 214,
        "QL": 428,
        "AC": 725,
        "PB": "£350k-£650k",
        "PBR": 199
    },
    {
        "UID": 368,
        "OR": 368,
        "SN": "Llanhilleth",
        "PE": 212,
        "QL": 62,
        "AC": 1052,
        "PB": "Up to £350k",
        "PBR": 139
    },
    {
        "UID": 369,
        "OR": 369,
        "SN": "Blackburn",
        "PE": 225,
        "QL": 334,
        "AC": 779,
        "PB": "Up to £350k",
        "PBR": 140
    },
    {
        "UID": 370,
        "OR": 370,
        "SN": "Esher",
        "PE": 300,
        "QL": 1232,
        "AC": 252,
        "PB": "Over £650k",
        "PBR": 31
    },
    {
        "UID": 371,
        "OR": 371,
        "SN": "Stafford",
        "PE": 131,
        "QL": 531,
        "AC": 778,
        "PB": "Up to £350k",
        "PBR": 141
    },
    {
        "UID": 372,
        "OR": 372,
        "SN": "Blaenau Ffestiniog",
        "PE": 680,
        "QL": 95,
        "AC": 619,
        "PB": "Up to £350k",
        "PBR": 142
    },
    {
        "UID": 373,
        "OR": 373,
        "SN": "Cowes",
        "PE": 31,
        "QL": 1319,
        "AC": 458,
        "PB": "£350k-£650k",
        "PBR": 200
    },
    {
        "UID": 374,
        "OR": 374,
        "SN": "Nettlestone",
        "PE": 163,
        "QL": 655,
        "AC": 677,
        "PB": "£350k-£650k",
        "PBR": 201
    },
    {
        "UID": 375,
        "OR": 375,
        "SN": "Queenborough",
        "PE": 387,
        "QL": 105,
        "AC": 818,
        "PB": "Up to £350k",
        "PBR": 143
    },
    {
        "UID": 376,
        "OR": 376,
        "SN": "Swanscombe",
        "PE": 421,
        "QL": 502,
        "AC": 495,
        "PB": "£350k-£650k",
        "PBR": 202
    },
    {
        "UID": 377,
        "OR": 376,
        "SN": "St Albans",
        "PE": 607,
        "QL": 495,
        "AC": 398,
        "PB": "Over £650k",
        "PBR": 32
    },
    {
        "UID": 378,
        "OR": 378,
        "SN": "Pontypridd",
        "PE": 396,
        "QL": 719,
        "AC": 411,
        "PB": "Up to £350k",
        "PBR": 144
    },
    {
        "UID": 379,
        "OR": 379,
        "SN": "Cricklade",
        "PE": 334,
        "QL": 904,
        "AC": 399,
        "PB": "£350k-£650k",
        "PBR": 203
    },
    {
        "UID": 380,
        "OR": 379,
        "SN": "Greenwich",
        "PE": 437,
        "QL": 1226,
        "AC": 164,
        "PB": "Over £650k",
        "PBR": 33
    },
    {
        "UID": 381,
        "OR": 381,
        "SN": "Denholme",
        "PE": 1142,
        "QL": 2,
        "AC": 793,
        "PB": "Up to £350k",
        "PBR": 145
    },
    {
        "UID": 382,
        "OR": 382,
        "SN": "Long Crendon",
        "PE": 1042,
        "QL": 1144,
        "AC": 27,
        "PB": "Over £650k",
        "PBR": 34
    },
    {
        "UID": 383,
        "OR": 383,
        "SN": "Sutton Courtenay",
        "PE": 537,
        "QL": 1080,
        "AC": 234,
        "PB": "£350k-£650k",
        "PBR": 204
    },
    {
        "UID": 384,
        "OR": 384,
        "SN": "Chippenham (Wiltshire)",
        "PE": 300,
        "QL": 878,
        "AC": 434,
        "PB": "£350k-£650k",
        "PBR": 205
    },
    {
        "UID": 385,
        "OR": 385,
        "SN": "Lincoln",
        "PE": 611,
        "QL": 761,
        "AC": 303,
        "PB": "Up to £350k",
        "PBR": 146
    },
    {
        "UID": 386,
        "OR": 386,
        "SN": "Glemsford",
        "PE": 1146,
        "QL": 249,
        "AC": 201,
        "PB": "£350k-£650k",
        "PBR": 206
    },
    {
        "UID": 387,
        "OR": 387,
        "SN": "Bramley",
        "PE": 153,
        "QL": 1236,
        "AC": 394,
        "PB": "Over £650k",
        "PBR": 35
    },
    {
        "UID": 388,
        "OR": 388,
        "SN": "Wheathampstead",
        "PE": 333,
        "QL": 561,
        "AC": 548,
        "PB": "Over £650k",
        "PBR": 36
    },
    {
        "UID": 389,
        "OR": 389,
        "SN": "Whitehaven",
        "PE": 371,
        "QL": 693,
        "AC": 441,
        "PB": "Up to £350k",
        "PBR": 147
    },
    {
        "UID": 390,
        "OR": 390,
        "SN": "Royston",
        "PE": 633,
        "QL": 123,
        "AC": 659,
        "PB": "Up to £350k",
        "PBR": 148
    },
    {
        "UID": 391,
        "OR": 391,
        "SN": "Parbold",
        "PE": 593,
        "QL": 597,
        "AC": 367,
        "PB": "£350k-£650k",
        "PBR": 207
    },
    {
        "UID": 392,
        "OR": 392,
        "SN": "Cwm",
        "PE": 169,
        "QL": 90,
        "AC": 1065,
        "PB": "Up to £350k",
        "PBR": 149
    },
    {
        "UID": 393,
        "OR": 393,
        "SN": "Stow-on-the-Wold",
        "PE": 449,
        "QL": 1104,
        "AC": 231,
        "PB": "£350k-£650k",
        "PBR": 208
    },
    {
        "UID": 394,
        "OR": 394,
        "SN": "Cardiff",
        "PE": 627,
        "QL": 891,
        "AC": 255,
        "PB": "£350k-£650k",
        "PBR": 209
    },
    {
        "UID": 395,
        "OR": 395,
        "SN": "Staines",
        "PE": 427,
        "QL": 574,
        "AC": 460,
        "PB": "Over £650k",
        "PBR": 37
    },
    {
        "UID": 396,
        "OR": 396,
        "SN": "Helston",
        "PE": 449,
        "QL": 975,
        "AC": 300,
        "PB": "£350k-£650k",
        "PBR": 210
    },
    {
        "UID": 397,
        "OR": 397,
        "SN": "Snodland",
        "PE": 288,
        "QL": 631,
        "AC": 567,
        "PB": "£350k-£650k",
        "PBR": 211
    },
    {
        "UID": 398,
        "OR": 398,
        "SN": "Cross Hills",
        "PE": 264,
        "QL": 1211,
        "AC": 317,
        "PB": "Up to £350k",
        "PBR": 150
    },
    {
        "UID": 399,
        "OR": 399,
        "SN": "Hurstpierpoint",
        "PE": 449,
        "QL": 416,
        "AC": 550,
        "PB": "£350k-£650k",
        "PBR": 212
    },
    {
        "UID": 400,
        "OR": 400,
        "SN": "Milford on Sea",
        "PE": 97,
        "QL": 426,
        "AC": 918,
        "PB": "£350k-£650k",
        "PBR": 213
    },
    {
        "UID": 401,
        "OR": 401,
        "SN": "Cleator Moor",
        "PE": 210,
        "QL": 353,
        "AC": 828,
        "PB": "Up to £350k",
        "PBR": 151
    },
    {
        "UID": 402,
        "OR": 402,
        "SN": "Alrewas",
        "PE": 309,
        "QL": 979,
        "AC": 413,
        "PB": "£350k-£650k",
        "PBR": 214
    },
    {
        "UID": 403,
        "OR": 403,
        "SN": "Milford Haven",
        "PE": 272,
        "QL": 558,
        "AC": 637,
        "PB": "Up to £350k",
        "PBR": 152
    },
    {
        "UID": 404,
        "OR": 404,
        "SN": "Holywell",
        "PE": 923,
        "QL": 182,
        "AC": 420,
        "PB": "Up to £350k",
        "PBR": 153
    },
    {
        "UID": 405,
        "OR": 405,
        "SN": "Stamford Bridge",
        "PE": 270,
        "QL": 1024,
        "AC": 418,
        "PB": "£350k-£650k",
        "PBR": 215
    },
    {
        "UID": 406,
        "OR": 406,
        "SN": "Nottingham",
        "PE": 973,
        "QL": 356,
        "AC": 288,
        "PB": "Up to £350k",
        "PBR": 154
    },
    {
        "UID": 407,
        "OR": 407,
        "SN": "Odiham",
        "PE": 637,
        "QL": 599,
        "AC": 360,
        "PB": "£350k-£650k",
        "PBR": 216
    },
    {
        "UID": 408,
        "OR": 408,
        "SN": "Colwyn Bay",
        "PE": 286,
        "QL": 665,
        "AC": 580,
        "PB": "Up to £350k",
        "PBR": 155
    },
    {
        "UID": 409,
        "OR": 409,
        "SN": "Bury St Edmunds",
        "PE": 1100,
        "QL": 778,
        "AC": 84,
        "PB": "£350k-£650k",
        "PBR": 217
    },
    {
        "UID": 410,
        "OR": 410,
        "SN": "Stowmarket",
        "PE": 925,
        "QL": 128,
        "AC": 489,
        "PB": "£350k-£650k",
        "PBR": 218
    },
    {
        "UID": 411,
        "OR": 411,
        "SN": "Bawtry",
        "PE": 1059,
        "QL": 179,
        "AC": 332,
        "PB": "Up to £350k",
        "PBR": 156
    },
    {
        "UID": 412,
        "OR": 412,
        "SN": "Carmarthen",
        "PE": 898,
        "QL": 925,
        "AC": 135,
        "PB": "Up to £350k",
        "PBR": 157
    },
    {
        "UID": 413,
        "OR": 412,
        "SN": "Filey",
        "PE": 639,
        "QL": 445,
        "AC": 436,
        "PB": "Up to £350k",
        "PBR": 157
    },
    {
        "UID": 414,
        "OR": 414,
        "SN": "Hyde (Tameside)",
        "PE": 371,
        "QL": 616,
        "AC": 517,
        "PB": "Up to £350k",
        "PBR": 159
    },
    {
        "UID": 415,
        "OR": 415,
        "SN": "Windermere",
        "PE": 449,
        "QL": 623,
        "AC": 463,
        "PB": "£350k-£650k",
        "PBR": 219
    },
    {
        "UID": 416,
        "OR": 416,
        "SN": "St Margaret's at Cliffe",
        "PE": 155,
        "QL": 1157,
        "AC": 482,
        "PB": "£350k-£650k",
        "PBR": 220
    },
    {
        "UID": 417,
        "OR": 417,
        "SN": "Studley",
        "PE": 800,
        "QL": 60,
        "AC": 691,
        "PB": "£350k-£650k",
        "PBR": 221
    },
    {
        "UID": 418,
        "OR": 418,
        "SN": "Littleborough",
        "PE": 293,
        "QL": 724,
        "AC": 564,
        "PB": "Up to £350k",
        "PBR": 160
    },
    {
        "UID": 419,
        "OR": 419,
        "SN": "Saltdean",
        "PE": 142,
        "QL": 570,
        "AC": 816,
        "PB": "£350k-£650k",
        "PBR": 222
    },
    {
        "UID": 420,
        "OR": 420,
        "SN": "Downham Market",
        "PE": 864,
        "QL": 670,
        "AC": 224,
        "PB": "£350k-£650k",
        "PBR": 223
    },
    {
        "UID": 421,
        "OR": 421,
        "SN": "Bedale",
        "PE": 990,
        "QL": 742,
        "AC": 146,
        "PB": "Up to £350k",
        "PBR": 161
    },
    {
        "UID": 422,
        "OR": 422,
        "SN": "Aylsham",
        "PE": 623,
        "QL": 1217,
        "AC": 145,
        "PB": "£350k-£650k",
        "PBR": 224
    },
    {
        "UID": 423,
        "OR": 423,
        "SN": "Longridge",
        "PE": 660,
        "QL": 562,
        "AC": 374,
        "PB": "Up to £350k",
        "PBR": 162
    },
    {
        "UID": 424,
        "OR": 424,
        "SN": "Towcester",
        "PE": 960,
        "QL": 666,
        "AC": 184,
        "PB": "£350k-£650k",
        "PBR": 225
    },
    {
        "UID": 425,
        "OR": 425,
        "SN": "Street",
        "PE": 807,
        "QL": 566,
        "AC": 301,
        "PB": "£350k-£650k",
        "PBR": 226
    },
    {
        "UID": 426,
        "OR": 426,
        "SN": "Consett",
        "PE": 425,
        "QL": 213,
        "AC": 751,
        "PB": "Up to £350k",
        "PBR": 163
    },
    {
        "UID": 427,
        "OR": 427,
        "SN": "Borough Green",
        "PE": 449,
        "QL": 872,
        "AC": 387,
        "PB": "£350k-£650k",
        "PBR": 227
    },
    {
        "UID": 428,
        "OR": 428,
        "SN": "Bolton",
        "PE": 791,
        "QL": 177,
        "AC": 548,
        "PB": "Up to £350k",
        "PBR": 164
    },
    {
        "UID": 429,
        "OR": 429,
        "SN": "Chirk",
        "PE": 196,
        "QL": 1192,
        "AC": 422,
        "PB": "Up to £350k",
        "PBR": 165
    },
    {
        "UID": 430,
        "OR": 430,
        "SN": "Broadstairs",
        "PE": 825,
        "QL": 179,
        "AC": 529,
        "PB": "£350k-£650k",
        "PBR": 228
    },
    {
        "UID": 431,
        "OR": 430,
        "SN": "Hirwaun",
        "PE": 21,
        "QL": 293,
        "AC": 1182,
        "PB": "Up to £350k",
        "PBR": 166
    },
    {
        "UID": 432,
        "OR": 432,
        "SN": "Wickham Market",
        "PE": 199,
        "QL": 1145,
        "AC": 458,
        "PB": "£350k-£650k",
        "PBR": 229
    },
    {
        "UID": 433,
        "OR": 433,
        "SN": "Seahouses",
        "PE": 54,
        "QL": 945,
        "AC": 824,
        "PB": "Up to £350k",
        "PBR": 167
    },
    {
        "UID": 434,
        "OR": 434,
        "SN": "Caistor",
        "PE": 679,
        "QL": 1201,
        "AC": 131,
        "PB": "Up to £350k",
        "PBR": 168
    },
    {
        "UID": 435,
        "OR": 435,
        "SN": "Haringey",
        "PE": 1046,
        "QL": 808,
        "AC": 114,
        "PB": "Over £650k",
        "PBR": 38
    },
    {
        "UID": 436,
        "OR": 435,
        "SN": "Guildford",
        "PE": 115,
        "QL": 1347,
        "AC": 328,
        "PB": "Over £650k",
        "PBR": 38
    },
    {
        "UID": 437,
        "OR": 437,
        "SN": "Stalbridge",
        "PE": 1029,
        "QL": 839,
        "AC": 120,
        "PB": "£350k-£650k",
        "PBR": 230
    },
    {
        "UID": 438,
        "OR": 438,
        "SN": "Hitchin",
        "PE": 438,
        "QL": 1093,
        "AC": 304,
        "PB": "Over £650k",
        "PBR": 40
    },
    {
        "UID": 439,
        "OR": 439,
        "SN": "Kensington and Chelsea",
        "PE": 872,
        "QL": 1255,
        "AC": 66,
        "PB": "Over £650k",
        "PBR": 41
    },
    {
        "UID": 440,
        "OR": 440,
        "SN": "Ilminster",
        "PE": 929,
        "QL": 626,
        "AC": 244,
        "PB": "Up to £350k",
        "PBR": 169
    },
    {
        "UID": 441,
        "OR": 441,
        "SN": "Maidenhead",
        "PE": 410,
        "QL": 1010,
        "AC": 361,
        "PB": "Over £650k",
        "PBR": 42
    },
    {
        "UID": 442,
        "OR": 442,
        "SN": "Atherstone",
        "PE": 647,
        "QL": 306,
        "AC": 559,
        "PB": "Up to £350k",
        "PBR": 170
    },
    {
        "UID": 443,
        "OR": 443,
        "SN": "Bacup",
        "PE": 571,
        "QL": 225,
        "AC": 704,
        "PB": "Up to £350k",
        "PBR": 171
    },
    {
        "UID": 444,
        "OR": 444,
        "SN": "Wakefield",
        "PE": 912,
        "QL": 349,
        "AC": 374,
        "PB": "Up to £350k",
        "PBR": 172
    },
    {
        "UID": 445,
        "OR": 445,
        "SN": "Builth Wells",
        "PE": 440,
        "QL": 811,
        "AC": 435,
        "PB": "Up to £350k",
        "PBR": 173
    },
    {
        "UID": 446,
        "OR": 446,
        "SN": "Tarporley",
        "PE": 1278,
        "QL": 481,
        "AC": 83,
        "PB": "£350k-£650k",
        "PBR": 231
    },
    {
        "UID": 447,
        "OR": 447,
        "SN": "Mountain Ash",
        "PE": 229,
        "QL": 646,
        "AC": 707,
        "PB": "Up to £350k",
        "PBR": 174
    },
    {
        "UID": 448,
        "OR": 448,
        "SN": "Soham",
        "PE": 775,
        "QL": 739,
        "AC": 286,
        "PB": "£350k-£650k",
        "PBR": 232
    },
    {
        "UID": 449,
        "OR": 449,
        "SN": "Slough",
        "PE": 551,
        "QL": 356,
        "AC": 650,
        "PB": "£350k-£650k",
        "PBR": 233
    },
    {
        "UID": 450,
        "OR": 450,
        "SN": "Ruabon",
        "PE": 784,
        "QL": 492,
        "AC": 380,
        "PB": "Up to £350k",
        "PBR": 175
    },
    {
        "UID": 451,
        "OR": 451,
        "SN": "Mold",
        "PE": 260,
        "QL": 1001,
        "AC": 525,
        "PB": "Up to £350k",
        "PBR": 176
    },
    {
        "UID": 452,
        "OR": 452,
        "SN": "Watford",
        "PE": 393,
        "QL": 753,
        "AC": 513,
        "PB": "Over £650k",
        "PBR": 43
    },
    {
        "UID": 453,
        "OR": 453,
        "SN": "Hillingdon",
        "PE": 354,
        "QL": 467,
        "AC": 700,
        "PB": "Over £650k",
        "PBR": 44
    },
    {
        "UID": 454,
        "OR": 453,
        "SN": "Catterick",
        "PE": 539,
        "QL": 675,
        "AC": 487,
        "PB": "Up to £350k",
        "PBR": 177
    },
    {
        "UID": 455,
        "OR": 455,
        "SN": "Toddington",
        "PE": 813,
        "QL": 991,
        "AC": 188,
        "PB": "£350k-£650k",
        "PBR": 234
    },
    {
        "UID": 456,
        "OR": 456,
        "SN": "Newham",
        "PE": 632,
        "QL": 1192,
        "AC": 182,
        "PB": "Over £650k",
        "PBR": 45
    },
    {
        "UID": 457,
        "OR": 456,
        "SN": "Nelson (Pendle)",
        "PE": 188,
        "QL": 416,
        "AC": 882,
        "PB": "Up to £350k",
        "PBR": 178
    },
    {
        "UID": 458,
        "OR": 458,
        "SN": "Whitstable",
        "PE": 448,
        "QL": 274,
        "AC": 747,
        "PB": "£350k-£650k",
        "PBR": 235
    },
    {
        "UID": 459,
        "OR": 458,
        "SN": "Eccles",
        "PE": 598,
        "QL": 525,
        "AC": 508,
        "PB": "Up to £350k",
        "PBR": 179
    },
    {
        "UID": 460,
        "OR": 460,
        "SN": "Wandsworth",
        "PE": 663,
        "QL": 1293,
        "AC": 105,
        "PB": "Over £650k",
        "PBR": 46
    },
    {
        "UID": 461,
        "OR": 460,
        "SN": "Birkenhead",
        "PE": 933,
        "QL": 185,
        "AC": 502,
        "PB": "Up to £350k",
        "PBR": 180
    },
    {
        "UID": 462,
        "OR": 460,
        "SN": "Hornsea",
        "PE": 569,
        "QL": 288,
        "AC": 694,
        "PB": "Up to £350k",
        "PBR": 180
    },
    {
        "UID": 463,
        "OR": 463,
        "SN": "Croesowallt",
        "PE": 966,
        "QL": 487,
        "AC": 306,
        "PB": "Up to £350k",
        "PBR": 182
    },
    {
        "UID": 464,
        "OR": 464,
        "SN": "Market Rasen",
        "PE": 817,
        "QL": 689,
        "AC": 302,
        "PB": "Up to £350k",
        "PBR": 183
    },
    {
        "UID": 465,
        "OR": 465,
        "SN": "Chesterfield",
        "PE": 423,
        "QL": 736,
        "AC": 511,
        "PB": "Up to £350k",
        "PBR": 184
    },
    {
        "UID": 466,
        "OR": 466,
        "SN": "Camelford",
        "PE": 779,
        "QL": 254,
        "AC": 558,
        "PB": "Up to £350k",
        "PBR": 185
    },
    {
        "UID": 467,
        "OR": 467,
        "SN": "Dyserth",
        "PE": 449,
        "QL": 246,
        "AC": 785,
        "PB": "Up to £350k",
        "PBR": 186
    },
    {
        "UID": 468,
        "OR": 468,
        "SN": "Arlesey",
        "PE": 254,
        "QL": 1131,
        "AC": 472,
        "PB": "£350k-£650k",
        "PBR": 236
    },
    {
        "UID": 469,
        "OR": 469,
        "SN": "Calne",
        "PE": 684,
        "QL": 621,
        "AC": 396,
        "PB": "£350k-£650k",
        "PBR": 237
    },
    {
        "UID": 470,
        "OR": 470,
        "SN": "Witney",
        "PE": 188,
        "QL": 1295,
        "AC": 393,
        "PB": "£350k-£650k",
        "PBR": 238
    },
    {
        "UID": 471,
        "OR": 471,
        "SN": "Barnoldswick",
        "PE": 271,
        "QL": 1213,
        "AC": 402,
        "PB": "Up to £350k",
        "PBR": 187
    },
    {
        "UID": 472,
        "OR": 472,
        "SN": "Yarm",
        "PE": 434,
        "QL": 724,
        "AC": 521,
        "PB": "Up to £350k",
        "PBR": 188
    },
    {
        "UID": 473,
        "OR": 473,
        "SN": "Callington",
        "PE": 659,
        "QL": 509,
        "AC": 484,
        "PB": "Up to £350k",
        "PBR": 189
    },
    {
        "UID": 474,
        "OR": 474,
        "SN": "Lane End",
        "PE": 449,
        "QL": 1238,
        "AC": 271,
        "PB": "£350k-£650k",
        "PBR": 239
    },
    {
        "UID": 475,
        "OR": 475,
        "SN": "Saundersfoot",
        "PE": 449,
        "QL": 485,
        "AC": 644,
        "PB": "£350k-£650k",
        "PBR": 240
    },
    {
        "UID": 476,
        "OR": 476,
        "SN": "Rhondda",
        "PE": 241,
        "QL": 365,
        "AC": 901,
        "PB": "Up to £350k",
        "PBR": 190
    },
    {
        "UID": 477,
        "OR": 477,
        "SN": "Mundesley",
        "PE": 27,
        "QL": 1212,
        "AC": 798,
        "PB": "£350k-£650k",
        "PBR": 241
    },
    {
        "UID": 478,
        "OR": 478,
        "SN": "Kidderminster",
        "PE": 683,
        "QL": 87,
        "AC": 802,
        "PB": "Up to £350k",
        "PBR": 191
    },
    {
        "UID": 479,
        "OR": 479,
        "SN": "Chatteris",
        "PE": 1196,
        "QL": 197,
        "AC": 309,
        "PB": "Up to £350k",
        "PBR": 192
    },
    {
        "UID": 480,
        "OR": 480,
        "SN": "South Cerney",
        "PE": 916,
        "QL": 1003,
        "AC": 162,
        "PB": "£350k-£650k",
        "PBR": 242
    },
    {
        "UID": 481,
        "OR": 481,
        "SN": "Bugbrooke",
        "PE": 1122,
        "QL": 342,
        "AC": 292,
        "PB": "£350k-£650k",
        "PBR": 243
    },
    {
        "UID": 482,
        "OR": 482,
        "SN": "Weybridge",
        "PE": 325,
        "QL": 981,
        "AC": 531,
        "PB": "Over £650k",
        "PBR": 47
    },
    {
        "UID": 483,
        "OR": 483,
        "SN": "Bury",
        "PE": 722,
        "QL": 330,
        "AC": 575,
        "PB": "Up to £350k",
        "PBR": 193
    },
    {
        "UID": 484,
        "OR": 484,
        "SN": "Watlington (South Oxfordshire)",
        "PE": 449,
        "QL": 1014,
        "AC": 401,
        "PB": "£350k-£650k",
        "PBR": 244
    },
    {
        "UID": 485,
        "OR": 485,
        "SN": "Oldham",
        "PE": 906,
        "QL": 314,
        "AC": 468,
        "PB": "Up to £350k",
        "PBR": 194
    },
    {
        "UID": 486,
        "OR": 486,
        "SN": "Walton-on-Thames",
        "PE": 424,
        "QL": 606,
        "AC": 613,
        "PB": "Over £650k",
        "PBR": 48
    },
    {
        "UID": 487,
        "OR": 487,
        "SN": "West Rainton",
        "PE": 1040,
        "QL": 75,
        "AC": 573,
        "PB": "Up to £350k",
        "PBR": 195
    },
    {
        "UID": 488,
        "OR": 488,
        "SN": "Benson",
        "PE": 187,
        "QL": 1348,
        "AC": 319,
        "PB": "£350k-£650k",
        "PBR": 245
    },
    {
        "UID": 489,
        "OR": 489,
        "SN": "Northampton",
        "PE": 1098,
        "QL": 217,
        "AC": 386,
        "PB": "£350k-£650k",
        "PBR": 246
    },
    {
        "UID": 490,
        "OR": 490,
        "SN": "Egremont",
        "PE": 183,
        "QL": 832,
        "AC": 764,
        "PB": "Up to £350k",
        "PBR": 196
    },
    {
        "UID": 491,
        "OR": 491,
        "SN": "Heysham",
        "PE": 316,
        "QL": 755,
        "AC": 661,
        "PB": "Up to £350k",
        "PBR": 197
    },
    {
        "UID": 492,
        "OR": 492,
        "SN": "Chesham",
        "PE": 449,
        "QL": 942,
        "AC": 446,
        "PB": "£350k-£650k",
        "PBR": 247
    },
    {
        "UID": 493,
        "OR": 493,
        "SN": "Wombwell",
        "PE": 759,
        "QL": 107,
        "AC": 750,
        "PB": "Up to £350k",
        "PBR": 198
    },
    {
        "UID": 494,
        "OR": 494,
        "SN": "Barry",
        "PE": 586,
        "QL": 1059,
        "AC": 336,
        "PB": "Up to £350k",
        "PBR": 199
    },
    {
        "UID": 495,
        "OR": 495,
        "SN": "Brantham",
        "PE": 158,
        "QL": 490,
        "AC": 949,
        "PB": "£350k-£650k",
        "PBR": 248
    },
    {
        "UID": 496,
        "OR": 495,
        "SN": "Woking",
        "PE": 280,
        "QL": 638,
        "AC": 730,
        "PB": "Over £650k",
        "PBR": 49
    },
    {
        "UID": 497,
        "OR": 497,
        "SN": "Willingham",
        "PE": 1346,
        "QL": 91,
        "AC": 280,
        "PB": "£350k-£650k",
        "PBR": 249
    },
    {
        "UID": 498,
        "OR": 498,
        "SN": "Glanaman",
        "PE": 2,
        "QL": 896,
        "AC": 1063,
        "PB": "Up to £350k",
        "PBR": 200
    },
    {
        "UID": 499,
        "OR": 499,
        "SN": "Felixstowe",
        "PE": 72,
        "QL": 1030,
        "AC": 837,
        "PB": "£350k-£650k",
        "PBR": 250
    },
    {
        "UID": 500,
        "OR": 500,
        "SN": "High Lane",
        "PE": 71,
        "QL": 699,
        "AC": 992,
        "PB": "£350k-£650k",
        "PBR": 251
    },
    {
        "UID": 501,
        "OR": 501,
        "SN": "Romiley",
        "PE": 290,
        "QL": 265,
        "AC": 960,
        "PB": "Up to £350k",
        "PBR": 201
    },
    {
        "UID": 502,
        "OR": 502,
        "SN": "Kirkbymoorside",
        "PE": 708,
        "QL": 1199,
        "AC": 192,
        "PB": "£350k-£650k",
        "PBR": 252
    },
    {
        "UID": 503,
        "OR": 503,
        "SN": "Lewisham",
        "PE": 733,
        "QL": 1217,
        "AC": 165,
        "PB": "Over £650k",
        "PBR": 50
    },
    {
        "UID": 504,
        "OR": 504,
        "SN": "Milnthorpe",
        "PE": 68,
        "QL": 1080,
        "AC": 821,
        "PB": "Up to £350k",
        "PBR": 202
    },
    {
        "UID": 505,
        "OR": 505,
        "SN": "Clifton (Central Bedfordshire)",
        "PE": 715,
        "QL": 757,
        "AC": 392,
        "PB": "£350k-£650k",
        "PBR": 253
    },
    {
        "UID": 506,
        "OR": 506,
        "SN": "Llantwit Major",
        "PE": 449,
        "QL": 1056,
        "AC": 408,
        "PB": "Up to £350k",
        "PBR": 203
    },
    {
        "UID": 507,
        "OR": 507,
        "SN": "Crowborough",
        "PE": 449,
        "QL": 466,
        "AC": 703,
        "PB": "£350k-£650k",
        "PBR": 254
    },
    {
        "UID": 508,
        "OR": 508,
        "SN": "Tring",
        "PE": 449,
        "QL": 615,
        "AC": 619,
        "PB": "Over £650k",
        "PBR": 51
    },
    {
        "UID": 509,
        "OR": 509,
        "SN": "Horsham",
        "PE": 266,
        "QL": 1031,
        "AC": 597,
        "PB": "£350k-£650k",
        "PBR": 255
    },
    {
        "UID": 510,
        "OR": 510,
        "SN": "Cowbridge",
        "PE": 934,
        "QL": 1155,
        "AC": 129,
        "PB": "£350k-£650k",
        "PBR": 256
    },
    {
        "UID": 511,
        "OR": 511,
        "SN": "Leatherhead",
        "PE": 191,
        "QL": 1152,
        "AC": 598,
        "PB": "Over £650k",
        "PBR": 52
    },
    {
        "UID": 512,
        "OR": 512,
        "SN": "Elstead",
        "PE": 144,
        "QL": 1154,
        "AC": 661,
        "PB": "Over £650k",
        "PBR": 53
    },
    {
        "UID": 513,
        "OR": 513,
        "SN": "Ware",
        "PE": 589,
        "QL": 1339,
        "AC": 135,
        "PB": "Over £650k",
        "PBR": 54
    },
    {
        "UID": 514,
        "OR": 514,
        "SN": "Bromley",
        "PE": 730,
        "QL": 441,
        "AC": 541,
        "PB": "Over £650k",
        "PBR": 55
    },
    {
        "UID": 515,
        "OR": 515,
        "SN": "Middlesbrough",
        "PE": 618,
        "QL": 301,
        "AC": 718,
        "PB": "Up to £350k",
        "PBR": 204
    },
    {
        "UID": 516,
        "OR": 516,
        "SN": "Hadston",
        "PE": 761,
        "QL": 14,
        "AC": 1031,
        "PB": "Up to £350k",
        "PBR": 205
    },
    {
        "UID": 517,
        "OR": 517,
        "SN": "Portsmouth",
        "PE": 403,
        "QL": 1176,
        "AC": 373,
        "PB": "£350k-£650k",
        "PBR": 257
    },
    {
        "UID": 518,
        "OR": 518,
        "SN": "Mortimer",
        "PE": 910,
        "QL": 365,
        "AC": 471,
        "PB": "£350k-£650k",
        "PBR": 258
    },
    {
        "UID": 519,
        "OR": 518,
        "SN": "Dunstable",
        "PE": 449,
        "QL": 742,
        "AC": 569,
        "PB": "£350k-£650k",
        "PBR": 258
    },
    {
        "UID": 520,
        "OR": 520,
        "SN": "Gravesend",
        "PE": 311,
        "QL": 652,
        "AC": 728,
        "PB": "£350k-£650k",
        "PBR": 260
    },
    {
        "UID": 521,
        "OR": 521,
        "SN": "Burgh le Marsh",
        "PE": 809,
        "QL": 443,
        "AC": 490,
        "PB": "Up to £350k",
        "PBR": 206
    },
    {
        "UID": 522,
        "OR": 522,
        "SN": "Wheatley",
        "PE": 850,
        "QL": 828,
        "AC": 310,
        "PB": "£350k-£650k",
        "PBR": 261
    },
    {
        "UID": 523,
        "OR": 522,
        "SN": "Wendover",
        "PE": 249,
        "QL": 1265,
        "AC": 453,
        "PB": "£350k-£650k",
        "PBR": 261
    },
    {
        "UID": 524,
        "OR": 524,
        "SN": "Ashton-under-Lyne",
        "PE": 399,
        "QL": 454,
        "AC": 761,
        "PB": "Up to £350k",
        "PBR": 207
    },
    {
        "UID": 525,
        "OR": 525,
        "SN": "Aspatria",
        "PE": 890,
        "QL": 458,
        "AC": 432,
        "PB": "Up to £350k",
        "PBR": 208
    },
    {
        "UID": 526,
        "OR": 526,
        "SN": "Denby Dale",
        "PE": 948,
        "QL": 118,
        "AC": 659,
        "PB": "Up to £350k",
        "PBR": 209
    },
    {
        "UID": 527,
        "OR": 527,
        "SN": "Heathfield",
        "PE": 449,
        "QL": 389,
        "AC": 769,
        "PB": "£350k-£650k",
        "PBR": 263
    },
    {
        "UID": 528,
        "OR": 528,
        "SN": "Westbury (Wiltshire)",
        "PE": 858,
        "QL": 358,
        "AC": 521,
        "PB": "£350k-£650k",
        "PBR": 264
    },
    {
        "UID": 529,
        "OR": 529,
        "SN": "Wath upon Dearne",
        "PE": 750,
        "QL": 310,
        "AC": 625,
        "PB": "Up to £350k",
        "PBR": 210
    },
    {
        "UID": 530,
        "OR": 530,
        "SN": "Tredegar",
        "PE": 425,
        "QL": 125,
        "AC": 989,
        "PB": "Up to £350k",
        "PBR": 211
    },
    {
        "UID": 531,
        "OR": 531,
        "SN": "Romsey",
        "PE": 352,
        "QL": 1134,
        "AC": 456,
        "PB": "£350k-£650k",
        "PBR": 265
    },
    {
        "UID": 532,
        "OR": 532,
        "SN": "Amersham",
        "PE": 449,
        "QL": 1263,
        "AC": 310,
        "PB": "Over £650k",
        "PBR": 56
    },
    {
        "UID": 533,
        "OR": 533,
        "SN": "Wilmslow",
        "PE": 581,
        "QL": 473,
        "AC": 674,
        "PB": "£350k-£650k",
        "PBR": 266
    },
    {
        "UID": 534,
        "OR": 533,
        "SN": "Market Drayton",
        "PE": 914,
        "QL": 221,
        "AC": 595,
        "PB": "Up to £350k",
        "PBR": 212
    },
    {
        "UID": 535,
        "OR": 535,
        "SN": "Gamlingay",
        "PE": 1233,
        "QL": 617,
        "AC": 139,
        "PB": "£350k-£650k",
        "PBR": 267
    },
    {
        "UID": 536,
        "OR": 535,
        "SN": "Wilsden",
        "PE": 1080,
        "QL": 42,
        "AC": 689,
        "PB": "Up to £350k",
        "PBR": 213
    },
    {
        "UID": 537,
        "OR": 537,
        "SN": "Newcastle upon Tyne",
        "PE": 829,
        "QL": 785,
        "AC": 347,
        "PB": "Up to £350k",
        "PBR": 214
    },
    {
        "UID": 538,
        "OR": 538,
        "SN": "Abingdon",
        "PE": 277,
        "QL": 1084,
        "AC": 580,
        "PB": "£350k-£650k",
        "PBR": 268
    },
    {
        "UID": 539,
        "OR": 539,
        "SN": "Aylesbury",
        "PE": 534,
        "QL": 728,
        "AC": 604,
        "PB": "£350k-£650k",
        "PBR": 269
    },
    {
        "UID": 540,
        "OR": 540,
        "SN": "Treherbert",
        "PE": 182,
        "QL": 584,
        "AC": 923,
        "PB": "Up to £350k",
        "PBR": 215
    },
    {
        "UID": 541,
        "OR": 541,
        "SN": "Ulverston",
        "PE": 835,
        "QL": 1150,
        "AC": 196,
        "PB": "Up to £350k",
        "PBR": 216
    },
    {
        "UID": 542,
        "OR": 542,
        "SN": "Amesbury",
        "PE": 565,
        "QL": 903,
        "AC": 493,
        "PB": "£350k-£650k",
        "PBR": 270
    },
    {
        "UID": 543,
        "OR": 543,
        "SN": "Brent",
        "PE": 740,
        "QL": 701,
        "AC": 424,
        "PB": "Over £650k",
        "PBR": 57
    },
    {
        "UID": 544,
        "OR": 544,
        "SN": "Iwade",
        "PE": 957,
        "QL": 6,
        "AC": 1050,
        "PB": "£350k-£650k",
        "PBR": 271
    },
    {
        "UID": 545,
        "OR": 545,
        "SN": "Bignall End",
        "PE": 1188,
        "QL": 50,
        "AC": 577,
        "PB": "Up to £350k",
        "PBR": 217
    },
    {
        "UID": 546,
        "OR": 546,
        "SN": "Alford",
        "PE": 739,
        "QL": 1106,
        "AC": 270,
        "PB": "Up to £350k",
        "PBR": 218
    },
    {
        "UID": 547,
        "OR": 547,
        "SN": "Llandudno Junction",
        "PE": 180,
        "QL": 918,
        "AC": 810,
        "PB": "Up to £350k",
        "PBR": 219
    },
    {
        "UID": 548,
        "OR": 547,
        "SN": "Rishton",
        "PE": 176,
        "QL": 667,
        "AC": 897,
        "PB": "Up to £350k",
        "PBR": 219
    },
    {
        "UID": 549,
        "OR": 549,
        "SN": "Horbury",
        "PE": 686,
        "QL": 365,
        "AC": 666,
        "PB": "Up to £350k",
        "PBR": 221
    },
    {
        "UID": 550,
        "OR": 550,
        "SN": "Southwell",
        "PE": 1317,
        "QL": 975,
        "AC": 52,
        "PB": "£350k-£650k",
        "PBR": 272
    },
    {
        "UID": 551,
        "OR": 551,
        "SN": "Porth",
        "PE": 294,
        "QL": 604,
        "AC": 822,
        "PB": "Up to £350k",
        "PBR": 222
    },
    {
        "UID": 552,
        "OR": 552,
        "SN": "Thame",
        "PE": 612,
        "QL": 1264,
        "AC": 271,
        "PB": "£350k-£650k",
        "PBR": 273
    },
    {
        "UID": 553,
        "OR": 553,
        "SN": "Melbourne (South Derbyshire)",
        "PE": 1279,
        "QL": 661,
        "AC": 107,
        "PB": "£350k-£650k",
        "PBR": 274
    },
    {
        "UID": 554,
        "OR": 554,
        "SN": "Stonehouse",
        "PE": 137,
        "QL": 1326,
        "AC": 510,
        "PB": "£350k-£650k",
        "PBR": 275
    },
    {
        "UID": 555,
        "OR": 555,
        "SN": "Caterham",
        "PE": 449,
        "QL": 586,
        "AC": 697,
        "PB": "£350k-£650k",
        "PBR": 276
    },
    {
        "UID": 556,
        "OR": 556,
        "SN": "Clayton-le-Moors",
        "PE": 130,
        "QL": 956,
        "AC": 856,
        "PB": "Up to £350k",
        "PBR": 223
    },
    {
        "UID": 557,
        "OR": 557,
        "SN": "Billingshurst",
        "PE": 863,
        "QL": 799,
        "AC": 358,
        "PB": "£350k-£650k",
        "PBR": 277
    },
    {
        "UID": 558,
        "OR": 558,
        "SN": "Bloxham",
        "PE": 999,
        "QL": 683,
        "AC": 318,
        "PB": "£350k-£650k",
        "PBR": 278
    },
    {
        "UID": 559,
        "OR": 559,
        "SN": "Tamworth",
        "PE": 550,
        "QL": 449,
        "AC": 771,
        "PB": "Up to £350k",
        "PBR": 224
    },
    {
        "UID": 560,
        "OR": 560,
        "SN": "Stoke-on-Trent",
        "PE": 556,
        "QL": 461,
        "AC": 752,
        "PB": "Up to £350k",
        "PBR": 225
    },
    {
        "UID": 561,
        "OR": 561,
        "SN": "Andover",
        "PE": 413,
        "QL": 558,
        "AC": 748,
        "PB": "£350k-£650k",
        "PBR": 279
    },
    {
        "UID": 562,
        "OR": 561,
        "SN": "Richmond upon Thames",
        "PE": 395,
        "QL": 1312,
        "AC": 296,
        "PB": "Over £650k",
        "PBR": 58
    },
    {
        "UID": 563,
        "OR": 563,
        "SN": "Cottenham",
        "PE": 1348,
        "QL": 181,
        "AC": 278,
        "PB": "£350k-£650k",
        "PBR": 280
    },
    {
        "UID": 564,
        "OR": 564,
        "SN": "Penarth",
        "PE": 536,
        "QL": 1299,
        "AC": 295,
        "PB": "£350k-£650k",
        "PBR": 281
    },
    {
        "UID": 565,
        "OR": 565,
        "SN": "St Just",
        "PE": 449,
        "QL": 1018,
        "AC": 511,
        "PB": "£350k-£650k",
        "PBR": 282
    },
    {
        "UID": 566,
        "OR": 566,
        "SN": "March",
        "PE": 750,
        "QL": 233,
        "AC": 745,
        "PB": "Up to £350k",
        "PBR": 226
    },
    {
        "UID": 567,
        "OR": 567,
        "SN": "Barnet",
        "PE": 919,
        "QL": 495,
        "AC": 465,
        "PB": "Over £650k",
        "PBR": 59
    },
    {
        "UID": 568,
        "OR": 568,
        "SN": "Wigan",
        "PE": 958,
        "QL": 146,
        "AC": 689,
        "PB": "Up to £350k",
        "PBR": 227
    },
    {
        "UID": 569,
        "OR": 569,
        "SN": "Woodend",
        "PE": 911,
        "QL": 108,
        "AC": 761,
        "PB": "Up to £350k",
        "PBR": 228
    },
    {
        "UID": 570,
        "OR": 570,
        "SN": "Hamble-le-Rice",
        "PE": 133,
        "QL": 1051,
        "AC": 835,
        "PB": "£350k-£650k",
        "PBR": 283
    },
    {
        "UID": 571,
        "OR": 571,
        "SN": "East Horsley",
        "PE": 449,
        "QL": 1085,
        "AC": 478,
        "PB": "Over £650k",
        "PBR": 60
    },
    {
        "UID": 572,
        "OR": 572,
        "SN": "Poynton",
        "PE": 318,
        "QL": 712,
        "AC": 795,
        "PB": "£350k-£650k",
        "PBR": 284
    },
    {
        "UID": 573,
        "OR": 573,
        "SN": "Stoke Poges",
        "PE": 972,
        "QL": 659,
        "AC": 357,
        "PB": "Over £650k",
        "PBR": 61
    },
    {
        "UID": 574,
        "OR": 574,
        "SN": "Datchet",
        "PE": 391,
        "QL": 772,
        "AC": 699,
        "PB": "Over £650k",
        "PBR": 62
    },
    {
        "UID": 575,
        "OR": 575,
        "SN": "Pembury",
        "PE": 449,
        "QL": 508,
        "AC": 779,
        "PB": "£350k-£650k",
        "PBR": 285
    },
    {
        "UID": 576,
        "OR": 576,
        "SN": "Ashington (Northumberland)",
        "PE": 604,
        "QL": 131,
        "AC": 969,
        "PB": "Up to £350k",
        "PBR": 229
    },
    {
        "UID": 577,
        "OR": 577,
        "SN": "Duffield",
        "PE": 349,
        "QL": 1268,
        "AC": 433,
        "PB": "£350k-£650k",
        "PBR": 286
    },
    {
        "UID": 578,
        "OR": 578,
        "SN": "Brynmawr",
        "PE": 449,
        "QL": 79,
        "AC": 1094,
        "PB": "Up to £350k",
        "PBR": 230
    },
    {
        "UID": 579,
        "OR": 579,
        "SN": "Seaford",
        "PE": 134,
        "QL": 897,
        "AC": 927,
        "PB": "£350k-£650k",
        "PBR": 287
    },
    {
        "UID": 580,
        "OR": 580,
        "SN": "Bargod",
        "PE": 406,
        "QL": 153,
        "AC": 1059,
        "PB": "Up to £350k",
        "PBR": 231
    },
    {
        "UID": 581,
        "OR": 581,
        "SN": "Maldon",
        "PE": 717,
        "QL": 774,
        "AC": 491,
        "PB": "£350k-£650k",
        "PBR": 288
    },
    {
        "UID": 582,
        "OR": 582,
        "SN": "Prestatyn",
        "PE": 213,
        "QL": 52,
        "AC": 1262,
        "PB": "Up to £350k",
        "PBR": 232
    },
    {
        "UID": 583,
        "OR": 583,
        "SN": "Rhosllanerchrugog",
        "PE": 670,
        "QL": 46,
        "AC": 1047,
        "PB": "Up to £350k",
        "PBR": 233
    },
    {
        "UID": 584,
        "OR": 584,
        "SN": "Whittlesey",
        "PE": 1016,
        "QL": 662,
        "AC": 344,
        "PB": "Up to £350k",
        "PBR": 234
    },
    {
        "UID": 585,
        "OR": 584,
        "SN": "Workington",
        "PE": 758,
        "QL": 166,
        "AC": 838,
        "PB": "Up to £350k",
        "PBR": 234
    },
    {
        "UID": 586,
        "OR": 586,
        "SN": "Flexbury",
        "PE": 431,
        "QL": 421,
        "AC": 854,
        "PB": "£350k-£650k",
        "PBR": 289
    },
    {
        "UID": 587,
        "OR": 587,
        "SN": "Asfordby",
        "PE": 794,
        "QL": 519,
        "AC": 566,
        "PB": "Up to £350k",
        "PBR": 236
    },
    {
        "UID": 588,
        "OR": 588,
        "SN": "Newick",
        "PE": 728,
        "QL": 536,
        "AC": 602,
        "PB": "£350k-£650k",
        "PBR": 290
    },
    {
        "UID": 589,
        "OR": 589,
        "SN": "Shoreham-by-Sea",
        "PE": 45,
        "QL": 1314,
        "AC": 765,
        "PB": "£350k-£650k",
        "PBR": 291
    },
    {
        "UID": 590,
        "OR": 590,
        "SN": "Ramsbottom",
        "PE": 644,
        "QL": 567,
        "AC": 641,
        "PB": "Up to £350k",
        "PBR": 237
    },
    {
        "UID": 591,
        "OR": 591,
        "SN": "Droitwich",
        "PE": 538,
        "QL": 449,
        "AC": 832,
        "PB": "£350k-£650k",
        "PBR": 292
    },
    {
        "UID": 592,
        "OR": 592,
        "SN": "Shenley",
        "PE": 1109,
        "QL": 11,
        "AC": 937,
        "PB": "Over £650k",
        "PBR": 63
    },
    {
        "UID": 593,
        "OR": 593,
        "SN": "Haywards Heath",
        "PE": 667,
        "QL": 732,
        "AC": 556,
        "PB": "£350k-£650k",
        "PBR": 293
    },
    {
        "UID": 594,
        "OR": 594,
        "SN": "Leadgate",
        "PE": 903,
        "QL": 122,
        "AC": 809,
        "PB": "Up to £350k",
        "PBR": 238
    },
    {
        "UID": 595,
        "OR": 595,
        "SN": "Maesteg",
        "PE": 290,
        "QL": 542,
        "AC": 922,
        "PB": "Up to £350k",
        "PBR": 239
    },
    {
        "UID": 596,
        "OR": 596,
        "SN": "Melksham",
        "PE": 553,
        "QL": 646,
        "AC": 714,
        "PB": "£350k-£650k",
        "PBR": 294
    },
    {
        "UID": 597,
        "OR": 597,
        "SN": "Dalton-in-Furness",
        "PE": 1047,
        "QL": 1078,
        "AC": 178,
        "PB": "Up to £350k",
        "PBR": 240
    },
    {
        "UID": 598,
        "OR": 598,
        "SN": "Morecambe",
        "PE": 276,
        "QL": 502,
        "AC": 971,
        "PB": "Up to £350k",
        "PBR": 241
    },
    {
        "UID": 599,
        "OR": 599,
        "SN": "Hemel Hempstead",
        "PE": 208,
        "QL": 842,
        "AC": 879,
        "PB": "£350k-£650k",
        "PBR": 295
    },
    {
        "UID": 600,
        "OR": 600,
        "SN": "Swineshead",
        "PE": 1275,
        "QL": 582,
        "AC": 177,
        "PB": "Up to £350k",
        "PBR": 242
    },
    {
        "UID": 601,
        "OR": 601,
        "SN": "Staplehurst",
        "PE": 897,
        "QL": 439,
        "AC": 574,
        "PB": "£350k-£650k",
        "PBR": 296
    },
    {
        "UID": 602,
        "OR": 602,
        "SN": "Withernsea",
        "PE": 269,
        "QL": 279,
        "AC": 1108,
        "PB": "Up to £350k",
        "PBR": 243
    },
    {
        "UID": 603,
        "OR": 603,
        "SN": "Llanfair Pwllgwyngyll",
        "PE": 449,
        "QL": 837,
        "AC": 681,
        "PB": "Up to £350k",
        "PBR": 244
    },
    {
        "UID": 604,
        "OR": 604,
        "SN": "Ince-in-Makerfield",
        "PE": 785,
        "QL": 156,
        "AC": 846,
        "PB": "Up to £350k",
        "PBR": 245
    },
    {
        "UID": 605,
        "OR": 605,
        "SN": "Gnosall",
        "PE": 413,
        "QL": 461,
        "AC": 868,
        "PB": "Up to £350k",
        "PBR": 246
    },
    {
        "UID": 606,
        "OR": 606,
        "SN": "Hemingford Grey",
        "PE": 979,
        "QL": 796,
        "AC": 354,
        "PB": "£350k-£650k",
        "PBR": 297
    },
    {
        "UID": 607,
        "OR": 607,
        "SN": "Chertsey",
        "PE": 631,
        "QL": 679,
        "AC": 627,
        "PB": "Over £650k",
        "PBR": 64
    },
    {
        "UID": 608,
        "OR": 608,
        "SN": "Harrogate",
        "PE": 802,
        "QL": 860,
        "AC": 430,
        "PB": "£350k-£650k",
        "PBR": 298
    },
    {
        "UID": 609,
        "OR": 608,
        "SN": "Wem",
        "PE": 1232,
        "QL": 409,
        "AC": 314,
        "PB": "Up to £350k",
        "PBR": 247
    },
    {
        "UID": 610,
        "OR": 610,
        "SN": "Tonypandy",
        "PE": 344,
        "QL": 385,
        "AC": 984,
        "PB": "Up to £350k",
        "PBR": 248
    },
    {
        "UID": 611,
        "OR": 611,
        "SN": "Neyland",
        "PE": 127,
        "QL": 1129,
        "AC": 841,
        "PB": "Up to £350k",
        "PBR": 249
    },
    {
        "UID": 612,
        "OR": 612,
        "SN": "Southport",
        "PE": 998,
        "QL": 362,
        "AC": 553,
        "PB": "Up to £350k",
        "PBR": 250
    },
    {
        "UID": 613,
        "OR": 613,
        "SN": "Milton Keynes",
        "PE": 608,
        "QL": 521,
        "AC": 735,
        "PB": "£350k-£650k",
        "PBR": 299
    },
    {
        "UID": 614,
        "OR": 614,
        "SN": "Ealing",
        "PE": 619,
        "QL": 1274,
        "AC": 324,
        "PB": "Over £650k",
        "PBR": 65
    },
    {
        "UID": 615,
        "OR": 614,
        "SN": "Cobham (Elmbridge)",
        "PE": 417,
        "QL": 1195,
        "AC": 493,
        "PB": "Over £650k",
        "PBR": 65
    },
    {
        "UID": 616,
        "OR": 616,
        "SN": "Eccleston",
        "PE": 1055,
        "QL": 205,
        "AC": 614,
        "PB": "Up to £350k",
        "PBR": 251
    },
    {
        "UID": 617,
        "OR": 617,
        "SN": "Merley",
        "PE": 357,
        "QL": 823,
        "AC": 781,
        "PB": "£350k-£650k",
        "PBR": 300
    },
    {
        "UID": 618,
        "OR": 618,
        "SN": "Horley",
        "PE": 560,
        "QL": 900,
        "AC": 631,
        "PB": "£350k-£650k",
        "PBR": 301
    },
    {
        "UID": 619,
        "OR": 619,
        "SN": "Brampton (Carlisle)",
        "PE": 832,
        "QL": 871,
        "AC": 421,
        "PB": "Up to £350k",
        "PBR": 252
    },
    {
        "UID": 620,
        "OR": 620,
        "SN": "Kidsgrove",
        "PE": 606,
        "QL": 218,
        "AC": 937,
        "PB": "Up to £350k",
        "PBR": 253
    },
    {
        "UID": 621,
        "OR": 621,
        "SN": "Spennymoor",
        "PE": 1153,
        "QL": 83,
        "AC": 673,
        "PB": "Up to £350k",
        "PBR": 254
    },
    {
        "UID": 622,
        "OR": 622,
        "SN": "Nantyglo",
        "PE": 698,
        "QL": 69,
        "AC": 1033,
        "PB": "Up to £350k",
        "PBR": 255
    },
    {
        "UID": 623,
        "OR": 623,
        "SN": "Knutsford",
        "PE": 946,
        "QL": 835,
        "AC": 389,
        "PB": "£350k-£650k",
        "PBR": 302
    },
    {
        "UID": 624,
        "OR": 624,
        "SN": "North Walsham",
        "PE": 828,
        "QL": 1291,
        "AC": 198,
        "PB": "£350k-£650k",
        "PBR": 303
    },
    {
        "UID": 625,
        "OR": 625,
        "SN": "Minster (Swale)",
        "PE": 740,
        "QL": 119,
        "AC": 935,
        "PB": "£350k-£650k",
        "PBR": 304
    },
    {
        "UID": 626,
        "OR": 626,
        "SN": "Colden Common",
        "PE": 194,
        "QL": 1289,
        "AC": 643,
        "PB": "£350k-£650k",
        "PBR": 305
    },
    {
        "UID": 627,
        "OR": 627,
        "SN": "Over",
        "PE": 1340,
        "QL": 567,
        "AC": 159,
        "PB": "£350k-£650k",
        "PBR": 306
    },
    {
        "UID": 628,
        "OR": 628,
        "SN": "Bassingbourn",
        "PE": 1227,
        "QL": 177,
        "AC": 485,
        "PB": "£350k-£650k",
        "PBR": 307
    },
    {
        "UID": 629,
        "OR": 628,
        "SN": "Coedpoeth",
        "PE": 651,
        "QL": 165,
        "AC": 956,
        "PB": "Up to £350k",
        "PBR": 256
    },
    {
        "UID": 630,
        "OR": 630,
        "SN": "Warrington",
        "PE": 733,
        "QL": 492,
        "AC": 688,
        "PB": "Up to £350k",
        "PBR": 257
    },
    {
        "UID": 631,
        "OR": 631,
        "SN": "Neston",
        "PE": 794,
        "QL": 291,
        "AC": 776,
        "PB": "£350k-£650k",
        "PBR": 308
    },
    {
        "UID": 632,
        "OR": 632,
        "SN": "St Martin's",
        "PE": 854,
        "QL": 866,
        "AC": 424,
        "PB": "Up to £350k",
        "PBR": 258
    },
    {
        "UID": 633,
        "OR": 633,
        "SN": "Aldershot",
        "PE": 389,
        "QL": 983,
        "AC": 687,
        "PB": "£350k-£650k",
        "PBR": 309
    },
    {
        "UID": 634,
        "OR": 634,
        "SN": "Boston Spa",
        "PE": 562,
        "QL": 672,
        "AC": 737,
        "PB": "£350k-£650k",
        "PBR": 310
    },
    {
        "UID": 635,
        "OR": 635,
        "SN": "Royston",
        "PE": 1226,
        "QL": 679,
        "AC": 228,
        "PB": "£350k-£650k",
        "PBR": 311
    },
    {
        "UID": 636,
        "OR": 635,
        "SN": "Shildon",
        "PE": 1144,
        "QL": 24,
        "AC": 862,
        "PB": "Up to £350k",
        "PBR": 259
    },
    {
        "UID": 637,
        "OR": 637,
        "SN": "Brundall",
        "PE": 117,
        "QL": 810,
        "AC": 1068,
        "PB": "£350k-£650k",
        "PBR": 312
    },
    {
        "UID": 638,
        "OR": 638,
        "SN": "Ferndale",
        "PE": 328,
        "QL": 421,
        "AC": 1016,
        "PB": "Up to £350k",
        "PBR": 260
    },
    {
        "UID": 639,
        "OR": 639,
        "SN": "Queniborough",
        "PE": 1370,
        "QL": 424,
        "AC": 219,
        "PB": "£350k-£650k",
        "PBR": 313
    },
    {
        "UID": 640,
        "OR": 640,
        "SN": "Ramsey (Huntingdonshire)",
        "PE": 1091,
        "QL": 637,
        "AC": 349,
        "PB": "Up to £350k",
        "PBR": 261
    },
    {
        "UID": 641,
        "OR": 641,
        "SN": "Pudsey",
        "PE": 1054,
        "QL": 494,
        "AC": 449,
        "PB": "Up to £350k",
        "PBR": 262
    },
    {
        "UID": 642,
        "OR": 642,
        "SN": "Snaith",
        "PE": 1329,
        "QL": 363,
        "AC": 279,
        "PB": "Up to £350k",
        "PBR": 263
    },
    {
        "UID": 643,
        "OR": 643,
        "SN": "Burton Latimer",
        "PE": 1110,
        "QL": 803,
        "AC": 298,
        "PB": "£350k-£650k",
        "PBR": 314
    },
    {
        "UID": 644,
        "OR": 643,
        "SN": "Torpoint",
        "PE": 75,
        "QL": 980,
        "AC": 1052,
        "PB": "Up to £350k",
        "PBR": 264
    },
    {
        "UID": 645,
        "OR": 645,
        "SN": "Kingsclere",
        "PE": 449,
        "QL": 1016,
        "AC": 630,
        "PB": "£350k-£650k",
        "PBR": 315
    },
    {
        "UID": 646,
        "OR": 646,
        "SN": "Irthlingborough",
        "PE": 1189,
        "QL": 526,
        "AC": 334,
        "PB": "Up to £350k",
        "PBR": 265
    },
    {
        "UID": 647,
        "OR": 647,
        "SN": "Hartlepool",
        "PE": 298,
        "QL": 716,
        "AC": 894,
        "PB": "Up to £350k",
        "PBR": 266
    },
    {
        "UID": 648,
        "OR": 648,
        "SN": "Grays",
        "PE": 596,
        "QL": 701,
        "AC": 715,
        "PB": "£350k-£650k",
        "PBR": 316
    },
    {
        "UID": 649,
        "OR": 648,
        "SN": "Treorchy",
        "PE": 231,
        "QL": 687,
        "AC": 991,
        "PB": "Up to £350k",
        "PBR": 267
    },
    {
        "UID": 650,
        "OR": 650,
        "SN": "Burwell",
        "PE": 965,
        "QL": 706,
        "AC": 442,
        "PB": "£350k-£650k",
        "PBR": 317
    },
    {
        "UID": 651,
        "OR": 651,
        "SN": "Claydon",
        "PE": 556,
        "QL": 629,
        "AC": 790,
        "PB": "£350k-£650k",
        "PBR": 318
    },
    {
        "UID": 652,
        "OR": 651,
        "SN": "Peterborough",
        "PE": 1115,
        "QL": 280,
        "AC": 551,
        "PB": "Up to £350k",
        "PBR": 268
    },
    {
        "UID": 653,
        "OR": 653,
        "SN": "Selsey",
        "PE": 274,
        "QL": 349,
        "AC": 1116,
        "PB": "£350k-£650k",
        "PBR": 319
    },
    {
        "UID": 654,
        "OR": 654,
        "SN": "Runcorn",
        "PE": 805,
        "QL": 282,
        "AC": 812,
        "PB": "Up to £350k",
        "PBR": 269
    },
    {
        "UID": 655,
        "OR": 655,
        "SN": "Basingstoke",
        "PE": 546,
        "QL": 633,
        "AC": 807,
        "PB": "£350k-£650k",
        "PBR": 320
    },
    {
        "UID": 656,
        "OR": 656,
        "SN": "Egham",
        "PE": 992,
        "QL": 655,
        "AC": 443,
        "PB": "Over £650k",
        "PBR": 67
    },
    {
        "UID": 657,
        "OR": 657,
        "SN": "Gosport",
        "PE": 336,
        "QL": 1102,
        "AC": 693,
        "PB": "£350k-£650k",
        "PBR": 321
    },
    {
        "UID": 658,
        "OR": 658,
        "SN": "Ewell",
        "PE": 412,
        "QL": 964,
        "AC": 708,
        "PB": "Over £650k",
        "PBR": 68
    },
    {
        "UID": 659,
        "OR": 659,
        "SN": "St Columb Major",
        "PE": 977,
        "QL": 1143,
        "AC": 259,
        "PB": "Up to £350k",
        "PBR": 270
    },
    {
        "UID": 660,
        "OR": 660,
        "SN": "Etwall",
        "PE": 1194,
        "QL": 761,
        "AC": 264,
        "PB": "£350k-£650k",
        "PBR": 322
    },
    {
        "UID": 661,
        "OR": 661,
        "SN": "Rugby",
        "PE": 914,
        "QL": 286,
        "AC": 739,
        "PB": "Up to £350k",
        "PBR": 271
    },
    {
        "UID": 662,
        "OR": 662,
        "SN": "Hoddesdon",
        "PE": 641,
        "QL": 632,
        "AC": 710,
        "PB": "£350k-£650k",
        "PBR": 323
    },
    {
        "UID": 663,
        "OR": 663,
        "SN": "Bridgend",
        "PE": 252,
        "QL": 1161,
        "AC": 743,
        "PB": "Up to £350k",
        "PBR": 272
    },
    {
        "UID": 664,
        "OR": 664,
        "SN": "Crook",
        "PE": 937,
        "QL": 33,
        "AC": 1037,
        "PB": "Up to £350k",
        "PBR": 273
    },
    {
        "UID": 665,
        "OR": 665,
        "SN": "Cwmbran",
        "PE": 200,
        "QL": 805,
        "AC": 1002,
        "PB": "Up to £350k",
        "PBR": 274
    },
    {
        "UID": 666,
        "OR": 666,
        "SN": "Gorleston-on-Sea",
        "PE": 217,
        "QL": 1262,
        "AC": 713,
        "PB": "Up to £350k",
        "PBR": 275
    },
    {
        "UID": 667,
        "OR": 667,
        "SN": "Adderbury",
        "PE": 1076,
        "QL": 862,
        "AC": 327,
        "PB": "£350k-£650k",
        "PBR": 324
    },
    {
        "UID": 668,
        "OR": 667,
        "SN": "Swanley",
        "PE": 449,
        "QL": 439,
        "AC": 933,
        "PB": "£350k-£650k",
        "PBR": 324
    },
    {
        "UID": 669,
        "OR": 669,
        "SN": "Clevedon",
        "PE": 384,
        "QL": 1237,
        "AC": 560,
        "PB": "£350k-£650k",
        "PBR": 326
    },
    {
        "UID": 670,
        "OR": 670,
        "SN": "Chorley",
        "PE": 803,
        "QL": 281,
        "AC": 826,
        "PB": "Up to £350k",
        "PBR": 276
    },
    {
        "UID": 671,
        "OR": 670,
        "SN": "Blackwood",
        "PE": 409,
        "QL": 539,
        "AC": 909,
        "PB": "Up to £350k",
        "PBR": 276
    },
    {
        "UID": 672,
        "OR": 672,
        "SN": "Newbiggin-by-the-Sea",
        "PE": 277,
        "QL": 68,
        "AC": 1271,
        "PB": "Up to £350k",
        "PBR": 278
    },
    {
        "UID": 673,
        "OR": 673,
        "SN": "Waltham Chase",
        "PE": 449,
        "QL": 771,
        "AC": 798,
        "PB": "£350k-£650k",
        "PBR": 327
    },
    {
        "UID": 674,
        "OR": 674,
        "SN": "Hoo St Werburgh",
        "PE": 971,
        "QL": 225,
        "AC": 754,
        "PB": "£350k-£650k",
        "PBR": 328
    },
    {
        "UID": 675,
        "OR": 675,
        "SN": "Polegate",
        "PE": 449,
        "QL": 269,
        "AC": 1060,
        "PB": "£350k-£650k",
        "PBR": 329
    },
    {
        "UID": 676,
        "OR": 676,
        "SN": "Potton",
        "PE": 1199,
        "QL": 206,
        "AC": 554,
        "PB": "£350k-£650k",
        "PBR": 330
    },
    {
        "UID": 677,
        "OR": 677,
        "SN": "Wellingborough",
        "PE": 1167,
        "QL": 286,
        "AC": 541,
        "PB": "Up to £350k",
        "PBR": 279
    },
    {
        "UID": 678,
        "OR": 678,
        "SN": "Willington (South Derbyshire)",
        "PE": 551,
        "QL": 1242,
        "AC": 502,
        "PB": "£350k-£650k",
        "PBR": 331
    },
    {
        "UID": 679,
        "OR": 679,
        "SN": "Northfleet",
        "PE": 616,
        "QL": 739,
        "AC": 723,
        "PB": "£350k-£650k",
        "PBR": 332
    },
    {
        "UID": 680,
        "OR": 680,
        "SN": "Crawley",
        "PE": 449,
        "QL": 379,
        "AC": 1001,
        "PB": "£350k-£650k",
        "PBR": 333
    },
    {
        "UID": 681,
        "OR": 681,
        "SN": "Dunchurch",
        "PE": 1237,
        "QL": 234,
        "AC": 505,
        "PB": "£350k-£650k",
        "PBR": 334
    },
    {
        "UID": 682,
        "OR": 681,
        "SN": "Longstanton",
        "PE": 1338,
        "QL": 93,
        "AC": 524,
        "PB": "£350k-£650k",
        "PBR": 334
    },
    {
        "UID": 683,
        "OR": 681,
        "SN": "Morley",
        "PE": 1182,
        "QL": 381,
        "AC": 465,
        "PB": "Up to £350k",
        "PBR": 280
    },
    {
        "UID": 684,
        "OR": 684,
        "SN": "Plymstock",
        "PE": 128,
        "QL": 1004,
        "AC": 1021,
        "PB": "£350k-£650k",
        "PBR": 336
    },
    {
        "UID": 685,
        "OR": 684,
        "SN": "Atherton",
        "PE": 869,
        "QL": 124,
        "AC": 929,
        "PB": "Up to £350k",
        "PBR": 281
    },
    {
        "UID": 686,
        "OR": 686,
        "SN": "Blackpool",
        "PE": 876,
        "QL": 160,
        "AC": 879,
        "PB": "Up to £350k",
        "PBR": 282
    },
    {
        "UID": 687,
        "OR": 687,
        "SN": "Chinnor",
        "PE": 676,
        "QL": 1287,
        "AC": 336,
        "PB": "£350k-£650k",
        "PBR": 337
    },
    {
        "UID": 688,
        "OR": 688,
        "SN": "Newark-on-Trent",
        "PE": 987,
        "QL": 713,
        "AC": 469,
        "PB": "Up to £350k",
        "PBR": 283
    },
    {
        "UID": 689,
        "OR": 689,
        "SN": "Crowle (North Lincolnshire)",
        "PE": 1304,
        "QL": 588,
        "AC": 248,
        "PB": "Up to £350k",
        "PBR": 284
    },
    {
        "UID": 690,
        "OR": 690,
        "SN": "Higham Ferrers",
        "PE": 1135,
        "QL": 906,
        "AC": 293,
        "PB": "£350k-£650k",
        "PBR": 338
    },
    {
        "UID": 691,
        "OR": 691,
        "SN": "North Petherton",
        "PE": 776,
        "QL": 707,
        "AC": 626,
        "PB": "£350k-£650k",
        "PBR": 339
    },
    {
        "UID": 692,
        "OR": 692,
        "SN": "Hale (Trafford)",
        "PE": 814,
        "QL": 433,
        "AC": 744,
        "PB": "£350k-£650k",
        "PBR": 340
    },
    {
        "UID": 693,
        "OR": 693,
        "SN": "Bexley",
        "PE": 443,
        "QL": 791,
        "AC": 817,
        "PB": "£350k-£650k",
        "PBR": 341
    },
    {
        "UID": 694,
        "OR": 694,
        "SN": "Ilkeston",
        "PE": 695,
        "QL": 309,
        "AC": 885,
        "PB": "Up to £350k",
        "PBR": 285
    },
    {
        "UID": 695,
        "OR": 695,
        "SN": "Lees",
        "PE": 847,
        "QL": 211,
        "AC": 864,
        "PB": "Up to £350k",
        "PBR": 286
    },
    {
        "UID": 696,
        "OR": 696,
        "SN": "Newport (Telford and Wrekin)",
        "PE": 1075,
        "QL": 506,
        "AC": 507,
        "PB": "Up to £350k",
        "PBR": 287
    },
    {
        "UID": 697,
        "OR": 697,
        "SN": "Holmes Chapel",
        "PE": 599,
        "QL": 1046,
        "AC": 611,
        "PB": "£350k-£650k",
        "PBR": 342
    },
    {
        "UID": 698,
        "OR": 698,
        "SN": "Crawley Down",
        "PE": 713,
        "QL": 786,
        "AC": 646,
        "PB": "£350k-£650k",
        "PBR": 343
    },
    {
        "UID": 699,
        "OR": 699,
        "SN": "Sawston",
        "PE": 1178,
        "QL": 1123,
        "AC": 156,
        "PB": "£350k-£650k",
        "PBR": 344
    },
    {
        "UID": 700,
        "OR": 699,
        "SN": "Strensall",
        "PE": 335,
        "QL": 330,
        "AC": 1124,
        "PB": "£350k-£650k",
        "PBR": 344
    },
    {
        "UID": 701,
        "OR": 701,
        "SN": "Godmanchester",
        "PE": 836,
        "QL": 1335,
        "AC": 189,
        "PB": "£350k-£650k",
        "PBR": 346
    },
    {
        "UID": 702,
        "OR": 702,
        "SN": "Havant",
        "PE": 260,
        "QL": 644,
        "AC": 1038,
        "PB": "£350k-£650k",
        "PBR": 347
    },
    {
        "UID": 703,
        "OR": 703,
        "SN": "Long Hanborough",
        "PE": 449,
        "QL": 1083,
        "AC": 675,
        "PB": "£350k-£650k",
        "PBR": 348
    },
    {
        "UID": 704,
        "OR": 704,
        "SN": "Kingston upon Thames",
        "PE": 541,
        "QL": 1288,
        "AC": 476,
        "PB": "Over £650k",
        "PBR": 69
    },
    {
        "UID": 705,
        "OR": 705,
        "SN": "Fordham (East Cambridgeshire)",
        "PE": 1344,
        "QL": 934,
        "AC": 131,
        "PB": "£350k-£650k",
        "PBR": 349
    },
    {
        "UID": 706,
        "OR": 706,
        "SN": "Mitcheldean",
        "PE": 895,
        "QL": 875,
        "AC": 498,
        "PB": "Up to £350k",
        "PBR": 288
    },
    {
        "UID": 707,
        "OR": 707,
        "SN": "Thornbury",
        "PE": 1032,
        "QL": 1055,
        "AC": 320,
        "PB": "£350k-£650k",
        "PBR": 350
    },
    {
        "UID": 708,
        "OR": 708,
        "SN": "Harrow",
        "PE": 707,
        "QL": 836,
        "AC": 647,
        "PB": "Over £650k",
        "PBR": 70
    },
    {
        "UID": 709,
        "OR": 709,
        "SN": "Frodsham",
        "PE": 1057,
        "QL": 1173,
        "AC": 242,
        "PB": "Up to £350k",
        "PBR": 289
    },
    {
        "UID": 710,
        "OR": 710,
        "SN": "Bolton-le-Sands",
        "PE": 77,
        "QL": 1203,
        "AC": 1007,
        "PB": "Up to £350k",
        "PBR": 290
    },
    {
        "UID": 711,
        "OR": 711,
        "SN": "Quorn (Quorndon)",
        "PE": 898,
        "QL": 1183,
        "AC": 338,
        "PB": "£350k-£650k",
        "PBR": 351
    },
    {
        "UID": 712,
        "OR": 712,
        "SN": "Grimsby",
        "PE": 622,
        "QL": 997,
        "AC": 641,
        "PB": "Up to £350k",
        "PBR": 291
    },
    {
        "UID": 713,
        "OR": 713,
        "SN": "Wolverhampton",
        "PE": 555,
        "QL": 834,
        "AC": 805,
        "PB": "Up to £350k",
        "PBR": 292
    },
    {
        "UID": 714,
        "OR": 714,
        "SN": "Yatton",
        "PE": 931,
        "QL": 407,
        "AC": 722,
        "PB": "£350k-£650k",
        "PBR": 352
    },
    {
        "UID": 715,
        "OR": 714,
        "SN": "Lichfield",
        "PE": 885,
        "QL": 1167,
        "AC": 354,
        "PB": "Over £650k",
        "PBR": 71
    },
    {
        "UID": 716,
        "OR": 716,
        "SN": "Harpenden",
        "PE": 289,
        "QL": 906,
        "AC": 926,
        "PB": "Over £650k",
        "PBR": 72
    },
    {
        "UID": 717,
        "OR": 717,
        "SN": "Houghton-le-Spring",
        "PE": 970,
        "QL": 436,
        "AC": 678,
        "PB": "Up to £350k",
        "PBR": 293
    },
    {
        "UID": 718,
        "OR": 718,
        "SN": "Kidlington",
        "PE": 172,
        "QL": 1271,
        "AC": 820,
        "PB": "£350k-£650k",
        "PBR": 353
    },
    {
        "UID": 719,
        "OR": 719,
        "SN": "Bushey",
        "PE": 666,
        "QL": 978,
        "AC": 615,
        "PB": "Over £650k",
        "PBR": 73
    },
    {
        "UID": 720,
        "OR": 720,
        "SN": "Annfield Plain",
        "PE": 997,
        "QL": 93,
        "AC": 910,
        "PB": "Up to £350k",
        "PBR": 294
    },
    {
        "UID": 721,
        "OR": 721,
        "SN": "Bamber Bridge",
        "PE": 705,
        "QL": 455,
        "AC": 841,
        "PB": "Up to £350k",
        "PBR": 295
    },
    {
        "UID": 722,
        "OR": 722,
        "SN": "Pegswood",
        "PE": 1019,
        "QL": 317,
        "AC": 716,
        "PB": "Up to £350k",
        "PBR": 296
    },
    {
        "UID": 723,
        "OR": 723,
        "SN": "Great Harwood",
        "PE": 533,
        "QL": 593,
        "AC": 917,
        "PB": "Up to £350k",
        "PBR": 297
    },
    {
        "UID": 724,
        "OR": 724,
        "SN": "Ammanford",
        "PE": 113,
        "QL": 828,
        "AC": 1155,
        "PB": "Up to £350k",
        "PBR": 298
    },
    {
        "UID": 725,
        "OR": 725,
        "SN": "Biggleswade",
        "PE": 570,
        "QL": 719,
        "AC": 829,
        "PB": "£350k-£650k",
        "PBR": 354
    },
    {
        "UID": 726,
        "OR": 726,
        "SN": "Chapel-en-le-Frith",
        "PE": 662,
        "QL": 1298,
        "AC": 366,
        "PB": "Up to £350k",
        "PBR": 299
    },
    {
        "UID": 727,
        "OR": 727,
        "SN": "St Neots",
        "PE": 841,
        "QL": 837,
        "AC": 589,
        "PB": "£350k-£650k",
        "PBR": 355
    },
    {
        "UID": 728,
        "OR": 728,
        "SN": "Leicester",
        "PE": 1085,
        "QL": 399,
        "AC": 605,
        "PB": "Up to £350k",
        "PBR": 300
    },
    {
        "UID": 729,
        "OR": 729,
        "SN": "Sheringham",
        "PE": 69,
        "QL": 1252,
        "AC": 1006,
        "PB": "£350k-£650k",
        "PBR": 356
    },
    {
        "UID": 730,
        "OR": 730,
        "SN": "Droylsden",
        "PE": 313,
        "QL": 623,
        "AC": 1041,
        "PB": "Up to £350k",
        "PBR": 301
    },
    {
        "UID": 731,
        "OR": 731,
        "SN": "Altrincham",
        "PE": 658,
        "QL": 724,
        "AC": 748,
        "PB": "£350k-£650k",
        "PBR": 357
    },
    {
        "UID": 732,
        "OR": 732,
        "SN": "Gorseinon",
        "PE": 307,
        "QL": 1180,
        "AC": 768,
        "PB": "Up to £350k",
        "PBR": 302
    },
    {
        "UID": 733,
        "OR": 733,
        "SN": "Bebington",
        "PE": 855,
        "QL": 936,
        "AC": 526,
        "PB": "Up to £350k",
        "PBR": 303
    },
    {
        "UID": 734,
        "OR": 734,
        "SN": "Castle Cary",
        "PE": 1020,
        "QL": 1061,
        "AC": 348,
        "PB": "£350k-£650k",
        "PBR": 358
    },
    {
        "UID": 735,
        "OR": 735,
        "SN": "Guiseley",
        "PE": 811,
        "QL": 904,
        "AC": 584,
        "PB": "£350k-£650k",
        "PBR": 359
    },
    {
        "UID": 736,
        "OR": 736,
        "SN": "Holt (North Norfolk)",
        "PE": 449,
        "QL": 942,
        "AC": 802,
        "PB": "£350k-£650k",
        "PBR": 360
    },
    {
        "UID": 737,
        "OR": 737,
        "SN": "Eccleshall",
        "PE": 1143,
        "QL": 767,
        "AC": 391,
        "PB": "£350k-£650k",
        "PBR": 361
    },
    {
        "UID": 738,
        "OR": 738,
        "SN": "East Wittering",
        "PE": 166,
        "QL": 481,
        "AC": 1204,
        "PB": "£350k-£650k",
        "PBR": 362
    },
    {
        "UID": 739,
        "OR": 739,
        "SN": "Radcliffe",
        "PE": 575,
        "QL": 701,
        "AC": 847,
        "PB": "Up to £350k",
        "PBR": 304
    },
    {
        "UID": 740,
        "OR": 740,
        "SN": "Long Sutton (South Holland)",
        "PE": 1130,
        "QL": 889,
        "AC": 353,
        "PB": "Up to £350k",
        "PBR": 305
    },
    {
        "UID": 741,
        "OR": 741,
        "SN": "Burgess Hill",
        "PE": 449,
        "QL": 823,
        "AC": 857,
        "PB": "£350k-£650k",
        "PBR": 363
    },
    {
        "UID": 742,
        "OR": 741,
        "SN": "Audley",
        "PE": 1197,
        "QL": 55,
        "AC": 836,
        "PB": "Up to £350k",
        "PBR": 306
    },
    {
        "UID": 743,
        "OR": 743,
        "SN": "Skegness",
        "PE": 585,
        "QL": 80,
        "AC": 1196,
        "PB": "Up to £350k",
        "PBR": 307
    },
    {
        "UID": 744,
        "OR": 744,
        "SN": "Hattersley",
        "PE": 815,
        "QL": 268,
        "AC": 911,
        "PB": "Up to £350k",
        "PBR": 308
    },
    {
        "UID": 745,
        "OR": 745,
        "SN": "Waltham Cross",
        "PE": 663,
        "QL": 799,
        "AC": 732,
        "PB": "£350k-£650k",
        "PBR": 364
    },
    {
        "UID": 746,
        "OR": 746,
        "SN": "Bromsgrove",
        "PE": 1099,
        "QL": 384,
        "AC": 623,
        "PB": "£350k-£650k",
        "PBR": 365
    },
    {
        "UID": 747,
        "OR": 747,
        "SN": "Platt Bridge",
        "PE": 960,
        "QL": 198,
        "AC": 867,
        "PB": "Up to £350k",
        "PBR": 309
    },
    {
        "UID": 748,
        "OR": 748,
        "SN": "Saxilby",
        "PE": 652,
        "QL": 1170,
        "AC": 535,
        "PB": "Up to £350k",
        "PBR": 310
    },
    {
        "UID": 749,
        "OR": 749,
        "SN": "Thrapston",
        "PE": 924,
        "QL": 1344,
        "AC": 190,
        "PB": "£350k-£650k",
        "PBR": 366
    },
    {
        "UID": 750,
        "OR": 750,
        "SN": "Blaina",
        "PE": 804,
        "QL": 64,
        "AC": 1126,
        "PB": "Up to £350k",
        "PBR": 311
    },
    {
        "UID": 751,
        "OR": 751,
        "SN": "Dudley (Dudley)",
        "PE": 699,
        "QL": 772,
        "AC": 726,
        "PB": "Up to £350k",
        "PBR": 312
    },
    {
        "UID": 752,
        "OR": 752,
        "SN": "South Ockendon",
        "PE": 850,
        "QL": 246,
        "AC": 918,
        "PB": "£350k-£650k",
        "PBR": 367
    },
    {
        "UID": 753,
        "OR": 752,
        "SN": "Ogmore Vale",
        "PE": 615,
        "QL": 526,
        "AC": 905,
        "PB": "Up to £350k",
        "PBR": 313
    },
    {
        "UID": 754,
        "OR": 754,
        "SN": "Luton",
        "PE": 449,
        "QL": 600,
        "AC": 962,
        "PB": "£350k-£650k",
        "PBR": 368
    },
    {
        "UID": 755,
        "OR": 755,
        "SN": "Armitage",
        "PE": 120,
        "QL": 826,
        "AC": 1172,
        "PB": "Up to £350k",
        "PBR": 314
    },
    {
        "UID": 756,
        "OR": 756,
        "SN": "Whitwell (Bolsover)",
        "PE": 1223,
        "QL": 676,
        "AC": 356,
        "PB": "Up to £350k",
        "PBR": 315
    },
    {
        "UID": 757,
        "OR": 757,
        "SN": "Poringland",
        "PE": 849,
        "QL": 584,
        "AC": 719,
        "PB": "£350k-£650k",
        "PBR": 369
    },
    {
        "UID": 758,
        "OR": 758,
        "SN": "Coven",
        "PE": 940,
        "QL": 337,
        "AC": 818,
        "PB": "£350k-£650k",
        "PBR": 370
    },
    {
        "UID": 759,
        "OR": 759,
        "SN": "Tynemouth",
        "PE": 688,
        "QL": 862,
        "AC": 709,
        "PB": "Up to £350k",
        "PBR": 316
    },
    {
        "UID": 760,
        "OR": 760,
        "SN": "Histon",
        "PE": 1334,
        "QL": 310,
        "AC": 426,
        "PB": "£350k-£650k",
        "PBR": 371
    },
    {
        "UID": 761,
        "OR": 761,
        "SN": "Sutton Bridge",
        "PE": 577,
        "QL": 636,
        "AC": 887,
        "PB": "Up to £350k",
        "PBR": 317
    },
    {
        "UID": 762,
        "OR": 762,
        "SN": "Abercynon",
        "PE": 273,
        "QL": 906,
        "AC": 1002,
        "PB": "Up to £350k",
        "PBR": 318
    },
    {
        "UID": 763,
        "OR": 763,
        "SN": "Bulford Camp",
        "PE": 383,
        "QL": 807,
        "AC": 937,
        "PB": "£350k-£650k",
        "PBR": 372
    },
    {
        "UID": 764,
        "OR": 764,
        "SN": "Farnborough",
        "PE": 401,
        "QL": 1019,
        "AC": 824,
        "PB": "£350k-£650k",
        "PBR": 373
    },
    {
        "UID": 765,
        "OR": 765,
        "SN": "Baldock",
        "PE": 1018,
        "QL": 1026,
        "AC": 409,
        "PB": "£350k-£650k",
        "PBR": 374
    },
    {
        "UID": 766,
        "OR": 766,
        "SN": "Netley",
        "PE": 285,
        "QL": 301,
        "AC": 1210,
        "PB": "£350k-£650k",
        "PBR": 375
    },
    {
        "UID": 767,
        "OR": 767,
        "SN": "Cholsey",
        "PE": 449,
        "QL": 1359,
        "AC": 380,
        "PB": "£350k-£650k",
        "PBR": 376
    },
    {
        "UID": 768,
        "OR": 768,
        "SN": "Market Harborough",
        "PE": 1356,
        "QL": 873,
        "AC": 194,
        "PB": "£350k-£650k",
        "PBR": 377
    },
    {
        "UID": 769,
        "OR": 769,
        "SN": "Riccall",
        "PE": 1259,
        "QL": 1277,
        "AC": 98,
        "PB": "Up to £350k",
        "PBR": 319
    },
    {
        "UID": 770,
        "OR": 770,
        "SN": "Fulwood",
        "PE": 603,
        "QL": 170,
        "AC": 1157,
        "PB": "Up to £350k",
        "PBR": 320
    },
    {
        "UID": 771,
        "OR": 771,
        "SN": "Hunmanby",
        "PE": 844,
        "QL": 578,
        "AC": 746,
        "PB": "Up to £350k",
        "PBR": 321
    },
    {
        "UID": 772,
        "OR": 772,
        "SN": "Blyth (Northumberland)",
        "PE": 774,
        "QL": 284,
        "AC": 972,
        "PB": "Up to £350k",
        "PBR": 322
    },
    {
        "UID": 773,
        "OR": 773,
        "SN": "Ebbw Vale",
        "PE": 689,
        "QL": 174,
        "AC": 1092,
        "PB": "Up to £350k",
        "PBR": 323
    },
    {
        "UID": 774,
        "OR": 774,
        "SN": "Bedlington",
        "PE": 559,
        "QL": 35,
        "AC": 1287,
        "PB": "Up to £350k",
        "PBR": 324
    },
    {
        "UID": 775,
        "OR": 775,
        "SN": "Twyford (Wokingham)",
        "PE": 302,
        "QL": 1358,
        "AC": 513,
        "PB": "Over £650k",
        "PBR": 74
    },
    {
        "UID": 776,
        "OR": 776,
        "SN": "Newmarket",
        "PE": 1312,
        "QL": 420,
        "AC": 405,
        "PB": "£350k-£650k",
        "PBR": 378
    },
    {
        "UID": 777,
        "OR": 777,
        "SN": "Porthcawl",
        "PE": 119,
        "QL": 1039,
        "AC": 1114,
        "PB": "Up to £350k",
        "PBR": 325
    },
    {
        "UID": 778,
        "OR": 778,
        "SN": "Acle",
        "PE": 449,
        "QL": 1285,
        "AC": 600,
        "PB": "£350k-£650k",
        "PBR": 379
    },
    {
        "UID": 779,
        "OR": 779,
        "SN": "Yarnton",
        "PE": 873,
        "QL": 1260,
        "AC": 367,
        "PB": "£350k-£650k",
        "PBR": 380
    },
    {
        "UID": 780,
        "OR": 780,
        "SN": "Stone (Stafford)",
        "PE": 305,
        "QL": 1330,
        "AC": 624,
        "PB": "Up to £350k",
        "PBR": 326
    },
    {
        "UID": 781,
        "OR": 781,
        "SN": "Caister-on-Sea",
        "PE": 90,
        "QL": 679,
        "AC": 1229,
        "PB": "Up to £350k",
        "PBR": 327
    },
    {
        "UID": 782,
        "OR": 782,
        "SN": "Chorleywood",
        "PE": 184,
        "QL": 1238,
        "AC": 908,
        "PB": "Over £650k",
        "PBR": 75
    },
    {
        "UID": 783,
        "OR": 783,
        "SN": "Eastwood",
        "PE": 1031,
        "QL": 297,
        "AC": 797,
        "PB": "Up to £350k",
        "PBR": 328
    },
    {
        "UID": 784,
        "OR": 784,
        "SN": "Bramley",
        "PE": 932,
        "QL": 425,
        "AC": 804,
        "PB": "£350k-£650k",
        "PBR": 381
    },
    {
        "UID": 785,
        "OR": 785,
        "SN": "Derby",
        "PE": 973,
        "QL": 565,
        "AC": 683,
        "PB": "Up to £350k",
        "PBR": 329
    },
    {
        "UID": 786,
        "OR": 786,
        "SN": "Fleetwood",
        "PE": 742,
        "QL": 150,
        "AC": 1101,
        "PB": "Up to £350k",
        "PBR": 330
    },
    {
        "UID": 787,
        "OR": 787,
        "SN": "Ely",
        "PE": 1089,
        "QL": 932,
        "AC": 415,
        "PB": "£350k-£650k",
        "PBR": 382
    },
    {
        "UID": 788,
        "OR": 788,
        "SN": "Trimley St Mary",
        "PE": 449,
        "QL": 914,
        "AC": 870,
        "PB": "£350k-£650k",
        "PBR": 383
    },
    {
        "UID": 789,
        "OR": 789,
        "SN": "South Hayling",
        "PE": 38,
        "QL": 1024,
        "AC": 1216,
        "PB": "£350k-£650k",
        "PBR": 384
    },
    {
        "UID": 790,
        "OR": 790,
        "SN": "Heckmondwike",
        "PE": 1184,
        "QL": 147,
        "AC": 782,
        "PB": "Up to £350k",
        "PBR": 331
    },
    {
        "UID": 791,
        "OR": 791,
        "SN": "Baildon",
        "PE": 384,
        "QL": 676,
        "AC": 1020,
        "PB": "Up to £350k",
        "PBR": 332
    },
    {
        "UID": 792,
        "OR": 792,
        "SN": "Stratton",
        "PE": 449,
        "QL": 1243,
        "AC": 678,
        "PB": "£350k-£650k",
        "PBR": 385
    },
    {
        "UID": 793,
        "OR": 793,
        "SN": "Chelmsford",
        "PE": 959,
        "QL": 670,
        "AC": 654,
        "PB": "£350k-£650k",
        "PBR": 386
    },
    {
        "UID": 794,
        "OR": 794,
        "SN": "Rickmansworth",
        "PE": 179,
        "QL": 1181,
        "AC": 978,
        "PB": "Over £650k",
        "PBR": 76
    },
    {
        "UID": 795,
        "OR": 795,
        "SN": "Frampton Cotterell/Winterbourne",
        "PE": 368,
        "QL": 600,
        "AC": 1071,
        "PB": "£350k-£650k",
        "PBR": 387
    },
    {
        "UID": 796,
        "OR": 796,
        "SN": "Rothwell",
        "PE": 1362,
        "QL": 257,
        "AC": 496,
        "PB": "Up to £350k",
        "PBR": 333
    },
    {
        "UID": 797,
        "OR": 797,
        "SN": "Bootle",
        "PE": 772,
        "QL": 1108,
        "AC": 564,
        "PB": "Up to £350k",
        "PBR": 334
    },
    {
        "UID": 798,
        "OR": 798,
        "SN": "Farnworth",
        "PE": 996,
        "QL": 412,
        "AC": 773,
        "PB": "Up to £350k",
        "PBR": 335
    },
    {
        "UID": 799,
        "OR": 799,
        "SN": "Linton",
        "PE": 1311,
        "QL": 963,
        "AC": 222,
        "PB": "£350k-£650k",
        "PBR": 388
    },
    {
        "UID": 800,
        "OR": 800,
        "SN": "Easingwold",
        "PE": 768,
        "QL": 1162,
        "AC": 539,
        "PB": "£350k-£650k",
        "PBR": 389
    },
    {
        "UID": 801,
        "OR": 801,
        "SN": "Backwell",
        "PE": 975,
        "QL": 641,
        "AC": 668,
        "PB": "£350k-£650k",
        "PBR": 390
    },
    {
        "UID": 802,
        "OR": 802,
        "SN": "Llanbradach",
        "PE": 373,
        "QL": 1184,
        "AC": 790,
        "PB": "Up to £350k",
        "PBR": 336
    },
    {
        "UID": 803,
        "OR": 803,
        "SN": "Wootton (Bedford)",
        "PE": 1134,
        "QL": 557,
        "AC": 568,
        "PB": "£350k-£650k",
        "PBR": 391
    },
    {
        "UID": 804,
        "OR": 804,
        "SN": "Pevensey Bay",
        "PE": 181,
        "QL": 411,
        "AC": 1256,
        "PB": "£350k-£650k",
        "PBR": 392
    },
    {
        "UID": 805,
        "OR": 805,
        "SN": "Sedgefield",
        "PE": 1129,
        "QL": 469,
        "AC": 633,
        "PB": "Up to £350k",
        "PBR": 337
    },
    {
        "UID": 806,
        "OR": 806,
        "SN": "Great Dunmow",
        "PE": 1283,
        "QL": 1130,
        "AC": 165,
        "PB": "£350k-£650k",
        "PBR": 393
    },
    {
        "UID": 807,
        "OR": 807,
        "SN": "Burry Port",
        "PE": 331,
        "QL": 471,
        "AC": 1169,
        "PB": "Up to £350k",
        "PBR": 338
    },
    {
        "UID": 808,
        "OR": 808,
        "SN": "Cannock",
        "PE": 449,
        "QL": 403,
        "AC": 1130,
        "PB": "Up to £350k",
        "PBR": 339
    },
    {
        "UID": 809,
        "OR": 809,
        "SN": "Winsford (Cheshire West and Chester)",
        "PE": 983,
        "QL": 57,
        "AC": 1102,
        "PB": "Up to £350k",
        "PBR": 340
    },
    {
        "UID": 810,
        "OR": 810,
        "SN": "Yate",
        "PE": 797,
        "QL": 554,
        "AC": 843,
        "PB": "£350k-£650k",
        "PBR": 394
    },
    {
        "UID": 811,
        "OR": 811,
        "SN": "Fenstanton",
        "PE": 1325,
        "QL": 1293,
        "AC": 81,
        "PB": "£350k-£650k",
        "PBR": 395
    },
    {
        "UID": 812,
        "OR": 812,
        "SN": "Oswaldtwistle",
        "PE": 640,
        "QL": 571,
        "AC": 931,
        "PB": "Up to £350k",
        "PBR": 341
    },
    {
        "UID": 813,
        "OR": 813,
        "SN": "Barton-le-Clay",
        "PE": 449,
        "QL": 811,
        "AC": 963,
        "PB": "£350k-£650k",
        "PBR": 396
    },
    {
        "UID": 814,
        "OR": 813,
        "SN": "Chobham",
        "PE": 1083,
        "QL": 638,
        "AC": 585,
        "PB": "Over £650k",
        "PBR": 77
    },
    {
        "UID": 815,
        "OR": 815,
        "SN": "Kinmel Bay",
        "PE": 429,
        "QL": 29,
        "AC": 1330,
        "PB": "Up to £350k",
        "PBR": 342
    },
    {
        "UID": 816,
        "OR": 816,
        "SN": "Iver Heath",
        "PE": 746,
        "QL": 768,
        "AC": 800,
        "PB": "Over £650k",
        "PBR": 78
    },
    {
        "UID": 817,
        "OR": 817,
        "SN": "Chipping Sodbury",
        "PE": 716,
        "QL": 1182,
        "AC": 575,
        "PB": "£350k-£650k",
        "PBR": 397
    },
    {
        "UID": 818,
        "OR": 818,
        "SN": "Sleaford",
        "PE": 962,
        "QL": 1049,
        "AC": 504,
        "PB": "Up to £350k",
        "PBR": 343
    },
    {
        "UID": 819,
        "OR": 819,
        "SN": "Waterbeach",
        "PE": 1353,
        "QL": 254,
        "AC": 540,
        "PB": "£350k-£650k",
        "PBR": 398
    },
    {
        "UID": 820,
        "OR": 820,
        "SN": "Earls Barton",
        "PE": 1313,
        "QL": 1028,
        "AC": 211,
        "PB": "£350k-£650k",
        "PBR": 399
    },
    {
        "UID": 821,
        "OR": 821,
        "SN": "Abertillery",
        "PE": 913,
        "QL": 136,
        "AC": 1065,
        "PB": "Up to £350k",
        "PBR": 344
    },
    {
        "UID": 822,
        "OR": 822,
        "SN": "Pontarddulais",
        "PE": 376,
        "QL": 1216,
        "AC": 786,
        "PB": "Up to £350k",
        "PBR": 345
    },
    {
        "UID": 823,
        "OR": 823,
        "SN": "Finedon",
        "PE": 1336,
        "QL": 600,
        "AC": 351,
        "PB": "Up to £350k",
        "PBR": 346
    },
    {
        "UID": 824,
        "OR": 824,
        "SN": "Stockton-on-Tees",
        "PE": 856,
        "QL": 1062,
        "AC": 572,
        "PB": "Up to £350k",
        "PBR": 347
    },
    {
        "UID": 825,
        "OR": 825,
        "SN": "Coalway",
        "PE": 725,
        "QL": 1068,
        "AC": 664,
        "PB": "Up to £350k",
        "PBR": 348
    },
    {
        "UID": 826,
        "OR": 826,
        "SN": "Peacehaven",
        "PE": 156,
        "QL": 499,
        "AC": 1258,
        "PB": "£350k-£650k",
        "PBR": 400
    },
    {
        "UID": 827,
        "OR": 826,
        "SN": "Millom",
        "PE": 346,
        "QL": 1076,
        "AC": 906,
        "PB": "Up to £350k",
        "PBR": 349
    },
    {
        "UID": 828,
        "OR": 828,
        "SN": "Castleside",
        "PE": 449,
        "QL": 34,
        "AC": 1324,
        "PB": "Up to £350k",
        "PBR": 350
    },
    {
        "UID": 829,
        "OR": 829,
        "SN": "Ampthill",
        "PE": 839,
        "QL": 1336,
        "AC": 316,
        "PB": "£350k-£650k",
        "PBR": 401
    },
    {
        "UID": 830,
        "OR": 829,
        "SN": "Horwich",
        "PE": 1251,
        "QL": 341,
        "AC": 601,
        "PB": "Up to £350k",
        "PBR": 351
    },
    {
        "UID": 831,
        "OR": 831,
        "SN": "Capel St Mary",
        "PE": 711,
        "QL": 1301,
        "AC": 448,
        "PB": "£350k-£650k",
        "PBR": 402
    },
    {
        "UID": 832,
        "OR": 832,
        "SN": "Askam in Furness",
        "PE": 576,
        "QL": 1137,
        "AC": 739,
        "PB": "Up to £350k",
        "PBR": 352
    },
    {
        "UID": 833,
        "OR": 833,
        "SN": "Accrington",
        "PE": 894,
        "QL": 655,
        "AC": 756,
        "PB": "Up to £350k",
        "PBR": 353
    },
    {
        "UID": 834,
        "OR": 834,
        "SN": "Murton (County Durham)",
        "PE": 838,
        "QL": 121,
        "AC": 1128,
        "PB": "Up to £350k",
        "PBR": 354
    },
    {
        "UID": 835,
        "OR": 835,
        "SN": "Clay Cross",
        "PE": 951,
        "QL": 723,
        "AC": 700,
        "PB": "Up to £350k",
        "PBR": 355
    },
    {
        "UID": 836,
        "OR": 836,
        "SN": "Shortstown",
        "PE": 1157,
        "QL": 27,
        "AC": 1088,
        "PB": "£350k-£650k",
        "PBR": 403
    },
    {
        "UID": 837,
        "OR": 836,
        "SN": "Throckley",
        "PE": 1174,
        "QL": 129,
        "AC": 865,
        "PB": "Up to £350k",
        "PBR": 356
    },
    {
        "UID": 838,
        "OR": 838,
        "SN": "Langwith",
        "PE": 1214,
        "QL": 229,
        "AC": 735,
        "PB": "Up to £350k",
        "PBR": 357
    },
    {
        "UID": 839,
        "OR": 839,
        "SN": "Enfield",
        "PE": 955,
        "QL": 457,
        "AC": 838,
        "PB": "Over £650k",
        "PBR": 79
    },
    {
        "UID": 840,
        "OR": 840,
        "SN": "Caerleon",
        "PE": 295,
        "QL": 1095,
        "AC": 977,
        "PB": "Up to £350k",
        "PBR": 358
    },
    {
        "UID": 841,
        "OR": 841,
        "SN": "Sacriston",
        "PE": 1140,
        "QL": 19,
        "AC": 1146,
        "PB": "Up to £350k",
        "PBR": 359
    },
    {
        "UID": 842,
        "OR": 842,
        "SN": "Treeton",
        "PE": 818,
        "QL": 608,
        "AC": 844,
        "PB": "Up to £350k",
        "PBR": 360
    },
    {
        "UID": 843,
        "OR": 843,
        "SN": "Ashby-de-la-Zouch",
        "PE": 1266,
        "QL": 901,
        "AC": 335,
        "PB": "£350k-£650k",
        "PBR": 404
    },
    {
        "UID": 844,
        "OR": 843,
        "SN": "Wigton",
        "PE": 969,
        "QL": 912,
        "AC": 622,
        "PB": "Up to £350k",
        "PBR": 361
    },
    {
        "UID": 845,
        "OR": 845,
        "SN": "Easington (County Durham)",
        "PE": 654,
        "QL": 270,
        "AC": 1138,
        "PB": "Up to £350k",
        "PBR": 362
    },
    {
        "UID": 846,
        "OR": 846,
        "SN": "Kingsnorth (Ashford)",
        "PE": 918,
        "QL": 1066,
        "AC": 571,
        "PB": "£350k-£650k",
        "PBR": 405
    },
    {
        "UID": 847,
        "OR": 847,
        "SN": "Heywood",
        "PE": 736,
        "QL": 587,
        "AC": 894,
        "PB": "Up to £350k",
        "PBR": 363
    },
    {
        "UID": 848,
        "OR": 848,
        "SN": "Epsom",
        "PE": 842,
        "QL": 984,
        "AC": 680,
        "PB": "Over £650k",
        "PBR": 80
    },
    {
        "UID": 849,
        "OR": 849,
        "SN": "Hartley Wintney",
        "PE": 1094,
        "QL": 398,
        "AC": 767,
        "PB": "Over £650k",
        "PBR": 81
    },
    {
        "UID": 850,
        "OR": 850,
        "SN": "Chalgrove",
        "PE": 860,
        "QL": 689,
        "AC": 810,
        "PB": "£350k-£650k",
        "PBR": 406
    },
    {
        "UID": 851,
        "OR": 851,
        "SN": "Darwen",
        "PE": 884,
        "QL": 794,
        "AC": 753,
        "PB": "Up to £350k",
        "PBR": 364
    },
    {
        "UID": 852,
        "OR": 852,
        "SN": "Barrow-in-Furness",
        "PE": 742,
        "QL": 883,
        "AC": 814,
        "PB": "Up to £350k",
        "PBR": 365
    },
    {
        "UID": 853,
        "OR": 853,
        "SN": "Biddulph",
        "PE": 938,
        "QL": 553,
        "AC": 823,
        "PB": "Up to £350k",
        "PBR": 366
    },
    {
        "UID": 854,
        "OR": 854,
        "SN": "Smethwick",
        "PE": 859,
        "QL": 1277,
        "AC": 461,
        "PB": "Up to £350k",
        "PBR": 367
    },
    {
        "UID": 855,
        "OR": 854,
        "SN": "Cheddleton",
        "PE": 316,
        "QL": 1356,
        "AC": 639,
        "PB": "Up to £350k",
        "PBR": 367
    },
    {
        "UID": 856,
        "OR": 856,
        "SN": "Bloxwich",
        "PE": 263,
        "QL": 409,
        "AC": 1251,
        "PB": "Up to £350k",
        "PBR": 369
    },
    {
        "UID": 857,
        "OR": 857,
        "SN": "Portishead",
        "PE": 729,
        "QL": 1148,
        "AC": 663,
        "PB": "£350k-£650k",
        "PBR": 407
    },
    {
        "UID": 858,
        "OR": 858,
        "SN": "Cheadle",
        "PE": 1023,
        "QL": 1098,
        "AC": 482,
        "PB": "Up to £350k",
        "PBR": 370
    },
    {
        "UID": 859,
        "OR": 859,
        "SN": "Cleethorpes",
        "PE": 408,
        "QL": 735,
        "AC": 1077,
        "PB": "Up to £350k",
        "PBR": 371
    },
    {
        "UID": 860,
        "OR": 860,
        "SN": "Wootton Bassett",
        "PE": 843,
        "QL": 975,
        "AC": 704,
        "PB": "£350k-£650k",
        "PBR": 408
    },
    {
        "UID": 861,
        "OR": 861,
        "SN": "Middleton Cheney",
        "PE": 1030,
        "QL": 1097,
        "AC": 480,
        "PB": "£350k-£650k",
        "PBR": 409
    },
    {
        "UID": 862,
        "OR": 862,
        "SN": "Woodley",
        "PE": 329,
        "QL": 1325,
        "AC": 734,
        "PB": "£350k-£650k",
        "PBR": 410
    },
    {
        "UID": 863,
        "OR": 863,
        "SN": "Burtonwood",
        "PE": 1319,
        "QL": 1,
        "AC": 1220,
        "PB": "Up to £350k",
        "PBR": 372
    },
    {
        "UID": 864,
        "OR": 864,
        "SN": "Upper Tean",
        "PE": 376,
        "QL": 1221,
        "AC": 851,
        "PB": "Up to £350k",
        "PBR": 373
    },
    {
        "UID": 865,
        "OR": 865,
        "SN": "Treharris",
        "PE": 305,
        "QL": 1275,
        "AC": 863,
        "PB": "Up to £350k",
        "PBR": 374
    },
    {
        "UID": 866,
        "OR": 866,
        "SN": "Fence Houses",
        "PE": 1025,
        "QL": 209,
        "AC": 987,
        "PB": "Up to £350k",
        "PBR": 375
    },
    {
        "UID": 867,
        "OR": 867,
        "SN": "Nuneaton",
        "PE": 881,
        "QL": 154,
        "AC": 1123,
        "PB": "Up to £350k",
        "PBR": 376
    },
    {
        "UID": 868,
        "OR": 868,
        "SN": "Alfreton",
        "PE": 1093,
        "QL": 940,
        "AC": 531,
        "PB": "Up to £350k",
        "PBR": 377
    },
    {
        "UID": 869,
        "OR": 869,
        "SN": "St Helens",
        "PE": 1125,
        "QL": 157,
        "AC": 945,
        "PB": "Up to £350k",
        "PBR": 378
    },
    {
        "UID": 870,
        "OR": 870,
        "SN": "Yeadon",
        "PE": 398,
        "QL": 1095,
        "AC": 925,
        "PB": "£350k-£650k",
        "PBR": 411
    },
    {
        "UID": 871,
        "OR": 871,
        "SN": "Abergele",
        "PE": 783,
        "QL": 278,
        "AC": 1102,
        "PB": "Up to £350k",
        "PBR": 379
    },
    {
        "UID": 872,
        "OR": 872,
        "SN": "Kirkham",
        "PE": 1133,
        "QL": 369,
        "AC": 795,
        "PB": "Up to £350k",
        "PBR": 380
    },
    {
        "UID": 873,
        "OR": 873,
        "SN": "Trimdon",
        "PE": 1045,
        "QL": 4,
        "AC": 1310,
        "PB": "Up to £350k",
        "PBR": 381
    },
    {
        "UID": 874,
        "OR": 874,
        "SN": "Grantham",
        "PE": 942,
        "QL": 1252,
        "AC": 473,
        "PB": "Up to £350k",
        "PBR": 382
    },
    {
        "UID": 875,
        "OR": 875,
        "SN": "Stoke Mandeville",
        "PE": 738,
        "QL": 1245,
        "AC": 616,
        "PB": "£350k-£650k",
        "PBR": 412
    },
    {
        "UID": 876,
        "OR": 875,
        "SN": "Northallerton",
        "PE": 941,
        "QL": 1173,
        "AC": 538,
        "PB": "Up to £350k",
        "PBR": 383
    },
    {
        "UID": 877,
        "OR": 877,
        "SN": "Loggerheads",
        "PE": 1256,
        "QL": 549,
        "AC": 547,
        "PB": "Up to £350k",
        "PBR": 384
    },
    {
        "UID": 878,
        "OR": 878,
        "SN": "Raunds",
        "PE": 1327,
        "QL": 549,
        "AC": 469,
        "PB": "Up to £350k",
        "PBR": 385
    },
    {
        "UID": 879,
        "OR": 879,
        "SN": "Worsbrough",
        "PE": 807,
        "QL": 37,
        "AC": 1259,
        "PB": "Up to £350k",
        "PBR": 386
    },
    {
        "UID": 880,
        "OR": 880,
        "SN": "Melbourn",
        "PE": 1258,
        "QL": 389,
        "AC": 652,
        "PB": "£350k-£650k",
        "PBR": 413
    },
    {
        "UID": 881,
        "OR": 880,
        "SN": "Hawkinge",
        "PE": 449,
        "QL": 495,
        "AC": 1165,
        "PB": "£350k-£650k",
        "PBR": 413
    },
    {
        "UID": 882,
        "OR": 882,
        "SN": "Mattishall",
        "PE": 1179,
        "QL": 693,
        "AC": 588,
        "PB": "£350k-£650k",
        "PBR": 415
    },
    {
        "UID": 883,
        "OR": 882,
        "SN": "Ludgershall (Wiltshire)",
        "PE": 449,
        "QL": 1020,
        "AC": 956,
        "PB": "Over £650k",
        "PBR": 82
    },
    {
        "UID": 884,
        "OR": 884,
        "SN": "Caerphilly",
        "PE": 864,
        "QL": 746,
        "AC": 830,
        "PB": "Up to £350k",
        "PBR": 387
    },
    {
        "UID": 885,
        "OR": 885,
        "SN": "Cliffe Woods",
        "PE": 909,
        "QL": 250,
        "AC": 1074,
        "PB": "£350k-£650k",
        "PBR": 416
    },
    {
        "UID": 886,
        "OR": 886,
        "SN": "Fazeley",
        "PE": 356,
        "QL": 1110,
        "AC": 985,
        "PB": "Up to £350k",
        "PBR": 388
    },
    {
        "UID": 887,
        "OR": 887,
        "SN": "Gateshead",
        "PE": 825,
        "QL": 1073,
        "AC": 696,
        "PB": "Up to £350k",
        "PBR": 389
    },
    {
        "UID": 888,
        "OR": 888,
        "SN": "Worksop",
        "PE": 896,
        "QL": 413,
        "AC": 982,
        "PB": "Up to £350k",
        "PBR": 390
    },
    {
        "UID": 889,
        "OR": 889,
        "SN": "Thatcham",
        "PE": 347,
        "QL": 1314,
        "AC": 782,
        "PB": "£350k-£650k",
        "PBR": 417
    },
    {
        "UID": 890,
        "OR": 890,
        "SN": "Bentley",
        "PE": 1068,
        "QL": 404,
        "AC": 848,
        "PB": "Up to £350k",
        "PBR": 391
    },
    {
        "UID": 891,
        "OR": 891,
        "SN": "Norton Canes",
        "PE": 242,
        "QL": 590,
        "AC": 1235,
        "PB": "Up to £350k",
        "PBR": 392
    },
    {
        "UID": 892,
        "OR": 892,
        "SN": "Little Paxton",
        "PE": 626,
        "QL": 1156,
        "AC": 788,
        "PB": "£350k-£650k",
        "PBR": 418
    },
    {
        "UID": 893,
        "OR": 893,
        "SN": "Thetford",
        "PE": 922,
        "QL": 1071,
        "AC": 650,
        "PB": "Up to £350k",
        "PBR": 393
    },
    {
        "UID": 894,
        "OR": 894,
        "SN": "Kingsteignton",
        "PE": 674,
        "QL": 808,
        "AC": 935,
        "PB": "£350k-£650k",
        "PBR": 419
    },
    {
        "UID": 895,
        "OR": 895,
        "SN": "Winslow",
        "PE": 1210,
        "QL": 1147,
        "AC": 339,
        "PB": "£350k-£650k",
        "PBR": 420
    },
    {
        "UID": 896,
        "OR": 896,
        "SN": "Warlingham",
        "PE": 669,
        "QL": 617,
        "AC": 1019,
        "PB": "Over £650k",
        "PBR": 83
    },
    {
        "UID": 897,
        "OR": 897,
        "SN": "Hedge End",
        "PE": 633,
        "QL": 929,
        "AC": 913,
        "PB": "£350k-£650k",
        "PBR": 421
    },
    {
        "UID": 898,
        "OR": 898,
        "SN": "Ushaw Moor",
        "PE": 1096,
        "QL": 13,
        "AC": 1226,
        "PB": "Up to £350k",
        "PBR": 394
    },
    {
        "UID": 899,
        "OR": 899,
        "SN": "Swallownest",
        "PE": 1152,
        "QL": 339,
        "AC": 832,
        "PB": "Up to £350k",
        "PBR": 395
    },
    {
        "UID": 900,
        "OR": 900,
        "SN": "South Shields",
        "PE": 733,
        "QL": 1053,
        "AC": 777,
        "PB": "Up to £350k",
        "PBR": 396
    },
    {
        "UID": 901,
        "OR": 901,
        "SN": "Witton Gilbert",
        "PE": 1121,
        "QL": 23,
        "AC": 1190,
        "PB": "Up to £350k",
        "PBR": 397
    },
    {
        "UID": 902,
        "OR": 902,
        "SN": "Long Stratton",
        "PE": 1082,
        "QL": 600,
        "AC": 739,
        "PB": "£350k-£650k",
        "PBR": 422
    },
    {
        "UID": 903,
        "OR": 903,
        "SN": "Cheshunt",
        "PE": 787,
        "QL": 504,
        "AC": 1023,
        "PB": "£350k-£650k",
        "PBR": 423
    },
    {
        "UID": 904,
        "OR": 904,
        "SN": "Crewe",
        "PE": 1236,
        "QL": 159,
        "AC": 872,
        "PB": "Up to £350k",
        "PBR": 398
    },
    {
        "UID": 905,
        "OR": 905,
        "SN": "Clapham (Bedford)",
        "PE": 620,
        "QL": 811,
        "AC": 1009,
        "PB": "£350k-£650k",
        "PBR": 424
    },
    {
        "UID": 906,
        "OR": 906,
        "SN": "Swaffham",
        "PE": 1205,
        "QL": 551,
        "AC": 654,
        "PB": "Up to £350k",
        "PBR": 399
    },
    {
        "UID": 907,
        "OR": 907,
        "SN": "Sale",
        "PE": 642,
        "QL": 342,
        "AC": 1170,
        "PB": "£350k-£650k",
        "PBR": 425
    },
    {
        "UID": 908,
        "OR": 908,
        "SN": "New Milton",
        "PE": 449,
        "QL": 375,
        "AC": 1221,
        "PB": "£350k-£650k",
        "PBR": 426
    },
    {
        "UID": 909,
        "OR": 908,
        "SN": "Llangefni",
        "PE": 947,
        "QL": 206,
        "AC": 1100,
        "PB": "Up to £350k",
        "PBR": 400
    },
    {
        "UID": 910,
        "OR": 910,
        "SN": "Milnrow",
        "PE": 586,
        "QL": 952,
        "AC": 973,
        "PB": "Up to £350k",
        "PBR": 401
    },
    {
        "UID": 911,
        "OR": 911,
        "SN": "Marske-by-the-Sea",
        "PE": 370,
        "QL": 1048,
        "AC": 1039,
        "PB": "Up to £350k",
        "PBR": 402
    },
    {
        "UID": 912,
        "OR": 912,
        "SN": "Great Houghton (Barnsley)",
        "PE": 1191,
        "QL": 64,
        "AC": 1063,
        "PB": "Up to £350k",
        "PBR": 403
    },
    {
        "UID": 913,
        "OR": 913,
        "SN": "Farndon (Newark and Sherwood)",
        "PE": 942,
        "QL": 597,
        "AC": 871,
        "PB": "Up to £350k",
        "PBR": 404
    },
    {
        "UID": 914,
        "OR": 914,
        "SN": "Rugeley",
        "PE": 61,
        "QL": 1115,
        "AC": 1246,
        "PB": "Up to £350k",
        "PBR": 405
    },
    {
        "UID": 915,
        "OR": 915,
        "SN": "Stourbridge",
        "PE": 1039,
        "QL": 613,
        "AC": 793,
        "PB": "£350k-£650k",
        "PBR": 427
    },
    {
        "UID": 916,
        "OR": 915,
        "SN": "Chadderton",
        "PE": 544,
        "QL": 1075,
        "AC": 947,
        "PB": "Up to £350k",
        "PBR": 406
    },
    {
        "UID": 917,
        "OR": 917,
        "SN": "Rotherham",
        "PE": 714,
        "QL": 687,
        "AC": 988,
        "PB": "Up to £350k",
        "PBR": 407
    },
    {
        "UID": 918,
        "OR": 918,
        "SN": "Denton",
        "PE": 428,
        "QL": 742,
        "AC": 1135,
        "PB": "Up to £350k",
        "PBR": 408
    },
    {
        "UID": 919,
        "OR": 919,
        "SN": "Huntingdon",
        "PE": 1041,
        "QL": 1310,
        "AC": 341,
        "PB": "£350k-£650k",
        "PBR": 428
    },
    {
        "UID": 920,
        "OR": 920,
        "SN": "Failsworth",
        "PE": 322,
        "QL": 1041,
        "AC": 1094,
        "PB": "Up to £350k",
        "PBR": 409
    },
    {
        "UID": 921,
        "OR": 921,
        "SN": "Kibworth Harcourt",
        "PE": 1365,
        "QL": 1158,
        "AC": 225,
        "PB": "£350k-£650k",
        "PBR": 429
    },
    {
        "UID": 922,
        "OR": 922,
        "SN": "Menston",
        "PE": 756,
        "QL": 1076,
        "AC": 788,
        "PB": "£350k-£650k",
        "PBR": 430
    },
    {
        "UID": 923,
        "OR": 923,
        "SN": "Bicester",
        "PE": 1155,
        "QL": 927,
        "AC": 562,
        "PB": "£350k-£650k",
        "PBR": 431
    },
    {
        "UID": 924,
        "OR": 924,
        "SN": "Howden",
        "PE": 1294,
        "QL": 1349,
        "AC": 101,
        "PB": "Up to £350k",
        "PBR": 410
    },
    {
        "UID": 925,
        "OR": 925,
        "SN": "Fleet",
        "PE": 308,
        "QL": 1116,
        "AC": 1070,
        "PB": "£350k-£650k",
        "PBR": 432
    },
    {
        "UID": 926,
        "OR": 926,
        "SN": "Hinton",
        "PE": 1088,
        "QL": 911,
        "AC": 635,
        "PB": "£350k-£650k",
        "PBR": 433
    },
    {
        "UID": 927,
        "OR": 926,
        "SN": "Chopwell",
        "PE": 1008,
        "QL": 44,
        "AC": 1207,
        "PB": "Up to £350k",
        "PBR": 411
    },
    {
        "UID": 928,
        "OR": 928,
        "SN": "Alvechurch",
        "PE": 610,
        "QL": 942,
        "AC": 975,
        "PB": "£350k-£650k",
        "PBR": 434
    },
    {
        "UID": 929,
        "OR": 929,
        "SN": "Castleford",
        "PE": 1043,
        "QL": 160,
        "AC": 1079,
        "PB": "Up to £350k",
        "PBR": 412
    },
    {
        "UID": 930,
        "OR": 930,
        "SN": "Addlestone",
        "PE": 766,
        "QL": 630,
        "AC": 999,
        "PB": "£350k-£650k",
        "PBR": 435
    },
    {
        "UID": 931,
        "OR": 931,
        "SN": "Lakenheath",
        "PE": 755,
        "QL": 432,
        "AC": 1097,
        "PB": "Up to £350k",
        "PBR": 413
    },
    {
        "UID": 932,
        "OR": 932,
        "SN": "Liversedge",
        "PE": 1154,
        "QL": 169,
        "AC": 999,
        "PB": "Up to £350k",
        "PBR": 414
    },
    {
        "UID": 933,
        "OR": 933,
        "SN": "Whitworth",
        "PE": 1141,
        "QL": 476,
        "AC": 808,
        "PB": "Up to £350k",
        "PBR": 415
    },
    {
        "UID": 934,
        "OR": 934,
        "SN": "Aylesham",
        "PE": 693,
        "QL": 26,
        "AC": 1333,
        "PB": "£350k-£650k",
        "PBR": 436
    },
    {
        "UID": 935,
        "OR": 935,
        "SN": "Paddock Wood",
        "PE": 732,
        "QL": 389,
        "AC": 1141,
        "PB": "£350k-£650k",
        "PBR": 437
    },
    {
        "UID": 936,
        "OR": 936,
        "SN": "Frinton-on-Sea",
        "PE": 391,
        "QL": 705,
        "AC": 1173,
        "PB": "£350k-£650k",
        "PBR": 438
    },
    {
        "UID": 937,
        "OR": 937,
        "SN": "Sutton",
        "PE": 366,
        "QL": 990,
        "AC": 1097,
        "PB": "Over £650k",
        "PBR": 84
    },
    {
        "UID": 938,
        "OR": 938,
        "SN": "Willand",
        "PE": 887,
        "QL": 1303,
        "AC": 497,
        "PB": "£350k-£650k",
        "PBR": 439
    },
    {
        "UID": 939,
        "OR": 939,
        "SN": "Oakley (Basingstoke and Deane)",
        "PE": 697,
        "QL": 1168,
        "AC": 774,
        "PB": "£350k-£650k",
        "PBR": 440
    },
    {
        "UID": 940,
        "OR": 940,
        "SN": "Aspull",
        "PE": 1272,
        "QL": 430,
        "AC": 683,
        "PB": "Up to £350k",
        "PBR": 416
    },
    {
        "UID": 941,
        "OR": 941,
        "SN": "Jaywick",
        "PE": 378,
        "QL": 28,
        "AC": 1371,
        "PB": "Up to £350k",
        "PBR": 417
    },
    {
        "UID": 942,
        "OR": 942,
        "SN": "Port Talbot",
        "PE": 447,
        "QL": 936,
        "AC": 1071,
        "PB": "Up to £350k",
        "PBR": 418
    },
    {
        "UID": 943,
        "OR": 943,
        "SN": "Stapleford",
        "PE": 778,
        "QL": 402,
        "AC": 1113,
        "PB": "Up to £350k",
        "PBR": 419
    },
    {
        "UID": 944,
        "OR": 943,
        "SN": "Rhodes",
        "PE": 340,
        "QL": 968,
        "AC": 1134,
        "PB": "Up to £350k",
        "PBR": 419
    },
    {
        "UID": 945,
        "OR": 945,
        "SN": "Walsall",
        "PE": 380,
        "QL": 1259,
        "AC": 921,
        "PB": "Up to £350k",
        "PBR": 421
    },
    {
        "UID": 946,
        "OR": 946,
        "SN": "Redbridge",
        "PE": 950,
        "QL": 580,
        "AC": 911,
        "PB": "Over £650k",
        "PBR": 85
    },
    {
        "UID": 947,
        "OR": 947,
        "SN": "Wombourne",
        "PE": 605,
        "QL": 672,
        "AC": 1107,
        "PB": "£350k-£650k",
        "PBR": 441
    },
    {
        "UID": 948,
        "OR": 948,
        "SN": "Morton (South Kesteven)",
        "PE": 1355,
        "QL": 719,
        "AC": 453,
        "PB": "Up to £350k",
        "PBR": 422
    },
    {
        "UID": 949,
        "OR": 949,
        "SN": "Llangennech",
        "PE": 217,
        "QL": 1150,
        "AC": 1151,
        "PB": "Up to £350k",
        "PBR": 423
    },
    {
        "UID": 950,
        "OR": 950,
        "SN": "St Ives",
        "PE": 1005,
        "QL": 847,
        "AC": 775,
        "PB": "£350k-£650k",
        "PBR": 442
    },
    {
        "UID": 951,
        "OR": 951,
        "SN": "Banks",
        "PE": 1000,
        "QL": 453,
        "AC": 967,
        "PB": "Up to £350k",
        "PBR": 424
    },
    {
        "UID": 952,
        "OR": 952,
        "SN": "Featherstone (Wakefield)",
        "PE": 1263,
        "QL": 126,
        "AC": 930,
        "PB": "Up to £350k",
        "PBR": 425
    },
    {
        "UID": 953,
        "OR": 953,
        "SN": "Cudworth",
        "PE": 1168,
        "QL": 213,
        "AC": 966,
        "PB": "Up to £350k",
        "PBR": 426
    },
    {
        "UID": 954,
        "OR": 954,
        "SN": "Redditch",
        "PE": 1033,
        "QL": 172,
        "AC": 1111,
        "PB": "Up to £350k",
        "PBR": 427
    },
    {
        "UID": 955,
        "OR": 955,
        "SN": "Ferryhill",
        "PE": 1181,
        "QL": 106,
        "AC": 1055,
        "PB": "Up to £350k",
        "PBR": 428
    },
    {
        "UID": 956,
        "OR": 956,
        "SN": "Widnes",
        "PE": 1124,
        "QL": 222,
        "AC": 1013,
        "PB": "Up to £350k",
        "PBR": 429
    },
    {
        "UID": 957,
        "OR": 957,
        "SN": "Weaverham",
        "PE": 1063,
        "QL": 345,
        "AC": 981,
        "PB": "Up to £350k",
        "PBR": 430
    },
    {
        "UID": 958,
        "OR": 958,
        "SN": "Loughborough",
        "PE": 907,
        "QL": 847,
        "AC": 858,
        "PB": "Up to £350k",
        "PBR": 431
    },
    {
        "UID": 959,
        "OR": 959,
        "SN": "Sandiacre",
        "PE": 638,
        "QL": 1004,
        "AC": 956,
        "PB": "Up to £350k",
        "PBR": 432
    },
    {
        "UID": 960,
        "OR": 960,
        "SN": "Hatfield",
        "PE": 1106,
        "QL": 780,
        "AC": 723,
        "PB": "£350k-£650k",
        "PBR": 443
    },
    {
        "UID": 961,
        "OR": 961,
        "SN": "Neath",
        "PE": 380,
        "QL": 1089,
        "AC": 1067,
        "PB": "Up to £350k",
        "PBR": 433
    },
    {
        "UID": 962,
        "OR": 962,
        "SN": "Esh Winning",
        "PE": 1011,
        "QL": 257,
        "AC": 1086,
        "PB": "Up to £350k",
        "PBR": 434
    },
    {
        "UID": 963,
        "OR": 963,
        "SN": "Havering",
        "PE": 889,
        "QL": 406,
        "AC": 1077,
        "PB": "£350k-£650k",
        "PBR": 444
    },
    {
        "UID": 964,
        "OR": 964,
        "SN": "Bolsover",
        "PE": 1131,
        "QL": 1072,
        "AC": 561,
        "PB": "Up to £350k",
        "PBR": 435
    },
    {
        "UID": 965,
        "OR": 965,
        "SN": "Eye (City of Peterborough)",
        "PE": 1335,
        "QL": 499,
        "AC": 621,
        "PB": "Up to £350k",
        "PBR": 436
    },
    {
        "UID": 966,
        "OR": 966,
        "SN": "Tidworth",
        "PE": 799,
        "QL": 1098,
        "AC": 815,
        "PB": "Up to £350k",
        "PBR": 437
    },
    {
        "UID": 967,
        "OR": 967,
        "SN": "Sandy",
        "PE": 726,
        "QL": 945,
        "AC": 933,
        "PB": "£350k-£650k",
        "PBR": 445
    },
    {
        "UID": 968,
        "OR": 968,
        "SN": "Heanor",
        "PE": 988,
        "QL": 444,
        "AC": 1007,
        "PB": "Up to £350k",
        "PBR": 438
    },
    {
        "UID": 969,
        "OR": 969,
        "SN": "Peasedown St John",
        "PE": 790,
        "QL": 295,
        "AC": 1183,
        "PB": "£350k-£650k",
        "PBR": 446
    },
    {
        "UID": 970,
        "OR": 969,
        "SN": "Nanpean",
        "PE": 939,
        "QL": 683,
        "AC": 913,
        "PB": "Up to £350k",
        "PBR": 439
    },
    {
        "UID": 971,
        "OR": 971,
        "SN": "Hilton (South Derbyshire)",
        "PE": 636,
        "QL": 845,
        "AC": 1054,
        "PB": "Up to £350k",
        "PBR": 440
    },
    {
        "UID": 972,
        "OR": 972,
        "SN": "Somersham (Huntingdonshire)",
        "PE": 1359,
        "QL": 713,
        "AC": 488,
        "PB": "£350k-£650k",
        "PBR": 447
    },
    {
        "UID": 973,
        "OR": 973,
        "SN": "Blackrod",
        "PE": 1261,
        "QL": 534,
        "AC": 686,
        "PB": "Up to £350k",
        "PBR": 441
    },
    {
        "UID": 974,
        "OR": 974,
        "SN": "Mansfield",
        "PE": 1187,
        "QL": 349,
        "AC": 875,
        "PB": "Up to £350k",
        "PBR": 442
    },
    {
        "UID": 975,
        "OR": 975,
        "SN": "Rochford",
        "PE": 1074,
        "QL": 880,
        "AC": 726,
        "PB": "£350k-£650k",
        "PBR": 448
    },
    {
        "UID": 976,
        "OR": 975,
        "SN": "Walkden",
        "PE": 1051,
        "QL": 593,
        "AC": 858,
        "PB": "Up to £350k",
        "PBR": 443
    },
    {
        "UID": 977,
        "OR": 977,
        "SN": "Long Lawford",
        "PE": 1052,
        "QL": 15,
        "AC": 1290,
        "PB": "£350k-£650k",
        "PBR": 449
    },
    {
        "UID": 978,
        "OR": 978,
        "SN": "Harefield",
        "PE": 321,
        "QL": 1022,
        "AC": 1162,
        "PB": "Over £650k",
        "PBR": 86
    },
    {
        "UID": 979,
        "OR": 979,
        "SN": "Walter's Ash",
        "PE": 449,
        "QL": 1119,
        "AC": 1017,
        "PB": "Over £650k",
        "PBR": 87
    },
    {
        "UID": 980,
        "OR": 980,
        "SN": "Bilston",
        "PE": 410,
        "QL": 1176,
        "AC": 1011,
        "PB": "Up to £350k",
        "PBR": 444
    },
    {
        "UID": 981,
        "OR": 981,
        "SN": "Epping",
        "PE": 1295,
        "QL": 822,
        "AC": 523,
        "PB": "Over £650k",
        "PBR": 88
    },
    {
        "UID": 982,
        "OR": 982,
        "SN": "Southwick",
        "PE": 63,
        "QL": 1272,
        "AC": 1230,
        "PB": "£350k-£650k",
        "PBR": 450
    },
    {
        "UID": 983,
        "OR": 983,
        "SN": "Seaton Sluice",
        "PE": 384,
        "QL": 583,
        "AC": 1225,
        "PB": "Up to £350k",
        "PBR": 445
    },
    {
        "UID": 984,
        "OR": 984,
        "SN": "Newport Pagnell",
        "PE": 613,
        "QL": 1360,
        "AC": 592,
        "PB": "£350k-£650k",
        "PBR": 451
    },
    {
        "UID": 985,
        "OR": 985,
        "SN": "Brownhills",
        "PE": 154,
        "QL": 991,
        "AC": 1259,
        "PB": "Up to £350k",
        "PBR": 446
    },
    {
        "UID": 986,
        "OR": 986,
        "SN": "Coxheath",
        "PE": 963,
        "QL": 473,
        "AC": 1027,
        "PB": "£350k-£650k",
        "PBR": 452
    },
    {
        "UID": 987,
        "OR": 987,
        "SN": "Littleport",
        "PE": 1003,
        "QL": 473,
        "AC": 994,
        "PB": "Up to £350k",
        "PBR": 447
    },
    {
        "UID": 988,
        "OR": 988,
        "SN": "Willenhall",
        "PE": 415,
        "QL": 589,
        "AC": 1218,
        "PB": "Up to £350k",
        "PBR": 448
    },
    {
        "UID": 989,
        "OR": 989,
        "SN": "Loughor",
        "PE": 332,
        "QL": 1057,
        "AC": 1150,
        "PB": "Up to £350k",
        "PBR": 449
    },
    {
        "UID": 990,
        "OR": 990,
        "SN": "Kirton (Boston)",
        "PE": 1271,
        "QL": 724,
        "AC": 598,
        "PB": "Up to £350k",
        "PBR": 450
    },
    {
        "UID": 991,
        "OR": 991,
        "SN": "Ripley",
        "PE": 864,
        "QL": 910,
        "AC": 887,
        "PB": "Up to £350k",
        "PBR": 451
    },
    {
        "UID": 992,
        "OR": 992,
        "SN": "Marks Tey",
        "PE": 994,
        "QL": 820,
        "AC": 849,
        "PB": "£350k-£650k",
        "PBR": 453
    },
    {
        "UID": 993,
        "OR": 993,
        "SN": "Bourne",
        "PE": 1128,
        "QL": 1178,
        "AC": 517,
        "PB": "Up to £350k",
        "PBR": 452
    },
    {
        "UID": 994,
        "OR": 994,
        "SN": "Didcot",
        "PE": 673,
        "QL": 950,
        "AC": 997,
        "PB": "£350k-£650k",
        "PBR": 454
    },
    {
        "UID": 995,
        "OR": 995,
        "SN": "Thornaby-on-Tees",
        "PE": 548,
        "QL": 593,
        "AC": 1203,
        "PB": "Up to £350k",
        "PBR": 453
    },
    {
        "UID": 996,
        "OR": 996,
        "SN": "Swavesey",
        "PE": 1331,
        "QL": 164,
        "AC": 873,
        "PB": "£350k-£650k",
        "PBR": 455
    },
    {
        "UID": 997,
        "OR": 996,
        "SN": "Colburn",
        "PE": 905,
        "QL": 396,
        "AC": 1109,
        "PB": "Up to £350k",
        "PBR": 454
    },
    {
        "UID": 998,
        "OR": 998,
        "SN": "Stakeford",
        "PE": 349,
        "QL": 160,
        "AC": 1350,
        "PB": "Up to £350k",
        "PBR": 455
    },
    {
        "UID": 999,
        "OR": 999,
        "SN": "Helsby",
        "PE": 1273,
        "QL": 1165,
        "AC": 376,
        "PB": "£350k-£650k",
        "PBR": 456
    },
    {
        "UID": 1000,
        "OR": 1000,
        "SN": "Fairfield Park",
        "PE": 952,
        "QL": 1266,
        "AC": 617,
        "PB": "£350k-£650k",
        "PBR": 457
    },
    {
        "UID": 1001,
        "OR": 1000,
        "SN": "Pocklington",
        "PE": 1136,
        "QL": 1131,
        "AC": 551,
        "PB": "Up to £350k",
        "PBR": 456
    },
    {
        "UID": 1002,
        "OR": 1002,
        "SN": "Burnopfield",
        "PE": 1060,
        "QL": 890,
        "AC": 769,
        "PB": "Up to £350k",
        "PBR": 457
    },
    {
        "UID": 1003,
        "OR": 1003,
        "SN": "Darlaston",
        "PE": 584,
        "QL": 1162,
        "AC": 954,
        "PB": "Up to £350k",
        "PBR": 458
    },
    {
        "UID": 1004,
        "OR": 1004,
        "SN": "Chilton (County Durham)",
        "PE": 1208,
        "QL": 244,
        "AC": 964,
        "PB": "Up to £350k",
        "PBR": 459
    },
    {
        "UID": 1005,
        "OR": 1005,
        "SN": "Middleton (Rochdale)",
        "PE": 712,
        "QL": 1036,
        "AC": 928,
        "PB": "Up to £350k",
        "PBR": 460
    },
    {
        "UID": 1006,
        "OR": 1006,
        "SN": "Totton",
        "PE": 236,
        "QL": 641,
        "AC": 1305,
        "PB": "£350k-£650k",
        "PBR": 458
    },
    {
        "UID": 1007,
        "OR": 1007,
        "SN": "Merton",
        "PE": 700,
        "QL": 1321,
        "AC": 676,
        "PB": "Over £650k",
        "PBR": 89
    },
    {
        "UID": 1008,
        "OR": 1008,
        "SN": "Earl Shilton",
        "PE": 1322,
        "QL": 158,
        "AC": 897,
        "PB": "Up to £350k",
        "PBR": 461
    },
    {
        "UID": 1009,
        "OR": 1009,
        "SN": "Tibshelf",
        "PE": 1105,
        "QL": 918,
        "AC": 720,
        "PB": "Up to £350k",
        "PBR": 462
    },
    {
        "UID": 1010,
        "OR": 1010,
        "SN": "Barking and Dagenham",
        "PE": 794,
        "QL": 355,
        "AC": 1183,
        "PB": "£350k-£650k",
        "PBR": 459
    },
    {
        "UID": 1011,
        "OR": 1011,
        "SN": "Blackhall Colliery",
        "PE": 449,
        "QL": 99,
        "AC": 1348,
        "PB": "Up to £350k",
        "PBR": 463
    },
    {
        "UID": 1012,
        "OR": 1012,
        "SN": "Mayland",
        "PE": 825,
        "QL": 294,
        "AC": 1192,
        "PB": "£350k-£650k",
        "PBR": 460
    },
    {
        "UID": 1013,
        "OR": 1013,
        "SN": "Blackwater",
        "PE": 344,
        "QL": 917,
        "AC": 1198,
        "PB": "£350k-£650k",
        "PBR": 461
    },
    {
        "UID": 1014,
        "OR": 1014,
        "SN": "Bishop's Stortford",
        "PE": 766,
        "QL": 1322,
        "AC": 637,
        "PB": "£350k-£650k",
        "PBR": 462
    },
    {
        "UID": 1015,
        "OR": 1014,
        "SN": "Mexborough",
        "PE": 696,
        "QL": 729,
        "AC": 1087,
        "PB": "Up to £350k",
        "PBR": 464
    },
    {
        "UID": 1016,
        "OR": 1016,
        "SN": "Wednesfield",
        "PE": 251,
        "QL": 815,
        "AC": 1275,
        "PB": "Up to £350k",
        "PBR": 465
    },
    {
        "UID": 1017,
        "OR": 1017,
        "SN": "Royton",
        "PE": 978,
        "QL": 373,
        "AC": 1093,
        "PB": "Up to £350k",
        "PBR": 466
    },
    {
        "UID": 1018,
        "OR": 1018,
        "SN": "Doncaster",
        "PE": 1038,
        "QL": 534,
        "AC": 952,
        "PB": "Up to £350k",
        "PBR": 467
    },
    {
        "UID": 1019,
        "OR": 1019,
        "SN": "Barrow upon Humber",
        "PE": 1213,
        "QL": 1267,
        "AC": 395,
        "PB": "Up to £350k",
        "PBR": 468
    },
    {
        "UID": 1020,
        "OR": 1020,
        "SN": "Redcar",
        "PE": 543,
        "QL": 1040,
        "AC": 1091,
        "PB": "Up to £350k",
        "PBR": 469
    },
    {
        "UID": 1021,
        "OR": 1021,
        "SN": "Ossett",
        "PE": 1193,
        "QL": 374,
        "AC": 897,
        "PB": "Up to £350k",
        "PBR": 470
    },
    {
        "UID": 1022,
        "OR": 1022,
        "SN": "Chalfont St Giles",
        "PE": 449,
        "QL": 1331,
        "AC": 830,
        "PB": "Over £650k",
        "PBR": 90
    },
    {
        "UID": 1023,
        "OR": 1023,
        "SN": "Laceby",
        "PE": 675,
        "QL": 916,
        "AC": 1045,
        "PB": "Up to £350k",
        "PBR": 471
    },
    {
        "UID": 1024,
        "OR": 1024,
        "SN": "Brackley",
        "PE": 1192,
        "QL": 1004,
        "AC": 607,
        "PB": "£350k-£650k",
        "PBR": 463
    },
    {
        "UID": 1025,
        "OR": 1025,
        "SN": "Holsworthy",
        "PE": 1090,
        "QL": 948,
        "AC": 732,
        "PB": "Up to £350k",
        "PBR": 472
    },
    {
        "UID": 1026,
        "OR": 1026,
        "SN": "Nailsea",
        "PE": 1024,
        "QL": 962,
        "AC": 800,
        "PB": "£350k-£650k",
        "PBR": 464
    },
    {
        "UID": 1027,
        "OR": 1027,
        "SN": "Warboys",
        "PE": 1360,
        "QL": 418,
        "AC": 712,
        "PB": "£350k-£650k",
        "PBR": 465
    },
    {
        "UID": 1028,
        "OR": 1028,
        "SN": "Upper Poppleton",
        "PE": 691,
        "QL": 1171,
        "AC": 878,
        "PB": "£350k-£650k",
        "PBR": 466
    },
    {
        "UID": 1029,
        "OR": 1028,
        "SN": "Gamesley",
        "PE": 544,
        "QL": 852,
        "AC": 1171,
        "PB": "Up to £350k",
        "PBR": 473
    },
    {
        "UID": 1030,
        "OR": 1030,
        "SN": "Scunthorpe",
        "PE": 1207,
        "QL": 115,
        "AC": 1096,
        "PB": "Up to £350k",
        "PBR": 474
    },
    {
        "UID": 1031,
        "OR": 1031,
        "SN": "Waltham Forest",
        "PE": 1016,
        "QL": 1207,
        "AC": 653,
        "PB": "Over £650k",
        "PBR": 91
    },
    {
        "UID": 1032,
        "OR": 1031,
        "SN": "West Bromwich",
        "PE": 602,
        "QL": 1241,
        "AC": 918,
        "PB": "Up to £350k",
        "PBR": 475
    },
    {
        "UID": 1033,
        "OR": 1033,
        "SN": "Saughall",
        "PE": 1159,
        "QL": 196,
        "AC": 1076,
        "PB": "£350k-£650k",
        "PBR": 467
    },
    {
        "UID": 1034,
        "OR": 1034,
        "SN": "Sutton (East Cambridgeshire)",
        "PE": 1349,
        "QL": 736,
        "AC": 563,
        "PB": "£350k-£650k",
        "PBR": 468
    },
    {
        "UID": 1035,
        "OR": 1035,
        "SN": "Pill",
        "PE": 441,
        "QL": 1137,
        "AC": 1073,
        "PB": "£350k-£650k",
        "PBR": 469
    },
    {
        "UID": 1036,
        "OR": 1036,
        "SN": "Fareham",
        "PE": 405,
        "QL": 1277,
        "AC": 998,
        "PB": "£350k-£650k",
        "PBR": 470
    },
    {
        "UID": 1037,
        "OR": 1037,
        "SN": "Elsenham",
        "PE": 1309,
        "QL": 1304,
        "AC": 262,
        "PB": "£350k-£650k",
        "PBR": 471
    },
    {
        "UID": 1038,
        "OR": 1038,
        "SN": "Leyland",
        "PE": 1165,
        "QL": 234,
        "AC": 1058,
        "PB": "Up to £350k",
        "PBR": 476
    },
    {
        "UID": 1039,
        "OR": 1039,
        "SN": "Brampton (Huntingdonshire)",
        "PE": 1315,
        "QL": 1296,
        "AC": 275,
        "PB": "£350k-£650k",
        "PBR": 472
    },
    {
        "UID": 1040,
        "OR": 1040,
        "SN": "Bletchley",
        "PE": 685,
        "QL": 1168,
        "AC": 893,
        "PB": "£350k-£650k",
        "PBR": 473
    },
    {
        "UID": 1041,
        "OR": 1041,
        "SN": "Awsworth",
        "PE": 1014,
        "QL": 491,
        "AC": 1039,
        "PB": "Up to £350k",
        "PBR": 477
    },
    {
        "UID": 1042,
        "OR": 1042,
        "SN": "Belton (Great Yarmouth)",
        "PE": 258,
        "QL": 1092,
        "AC": 1206,
        "PB": "Up to £350k",
        "PBR": 478
    },
    {
        "UID": 1043,
        "OR": 1043,
        "SN": "Pontycymer",
        "PE": 1107,
        "QL": 692,
        "AC": 853,
        "PB": "Up to £350k",
        "PBR": 479
    },
    {
        "UID": 1044,
        "OR": 1044,
        "SN": "Wallasey",
        "PE": 968,
        "QL": 719,
        "AC": 974,
        "PB": "Up to £350k",
        "PBR": 480
    },
    {
        "UID": 1045,
        "OR": 1045,
        "SN": "Thorpe Hesley",
        "PE": 1007,
        "QL": 541,
        "AC": 1025,
        "PB": "Up to £350k",
        "PBR": 481
    },
    {
        "UID": 1046,
        "OR": 1046,
        "SN": "Harlow",
        "PE": 1115,
        "QL": 426,
        "AC": 990,
        "PB": "£350k-£650k",
        "PBR": 474
    },
    {
        "UID": 1047,
        "OR": 1047,
        "SN": "Askern",
        "PE": 1288,
        "QL": 264,
        "AC": 897,
        "PB": "Up to £350k",
        "PBR": 482
    },
    {
        "UID": 1048,
        "OR": 1048,
        "SN": "Indian Queens",
        "PE": 1056,
        "QL": 1014,
        "AC": 761,
        "PB": "£350k-£650k",
        "PBR": 475
    },
    {
        "UID": 1049,
        "OR": 1048,
        "SN": "Shaw (Oldham)",
        "PE": 945,
        "QL": 499,
        "AC": 1090,
        "PB": "Up to £350k",
        "PBR": 483
    },
    {
        "UID": 1050,
        "OR": 1050,
        "SN": "Newhey",
        "PE": 446,
        "QL": 1042,
        "AC": 1144,
        "PB": "Up to £350k",
        "PBR": 484
    },
    {
        "UID": 1051,
        "OR": 1051,
        "SN": "Tuxford",
        "PE": 1330,
        "QL": 1227,
        "AC": 342,
        "PB": "Up to £350k",
        "PBR": 485
    },
    {
        "UID": 1052,
        "OR": 1052,
        "SN": "Mountsorrel",
        "PE": 900,
        "QL": 1319,
        "AC": 610,
        "PB": "£350k-£650k",
        "PBR": 476
    },
    {
        "UID": 1053,
        "OR": 1053,
        "SN": "Long Eaton",
        "PE": 700,
        "QL": 1127,
        "AC": 932,
        "PB": "Up to £350k",
        "PBR": 486
    },
    {
        "UID": 1054,
        "OR": 1054,
        "SN": "Chigwell",
        "PE": 1253,
        "QL": 604,
        "AC": 759,
        "PB": "Over £650k",
        "PBR": 92
    },
    {
        "UID": 1055,
        "OR": 1054,
        "SN": "Newbold Verdon",
        "PE": 1316,
        "QL": 574,
        "AC": 698,
        "PB": "Up to £350k",
        "PBR": 487
    },
    {
        "UID": 1056,
        "OR": 1056,
        "SN": "Sprotbrough",
        "PE": 764,
        "QL": 1188,
        "AC": 868,
        "PB": "£350k-£650k",
        "PBR": 477
    },
    {
        "UID": 1057,
        "OR": 1057,
        "SN": "Burton Joyce",
        "PE": 985,
        "QL": 1141,
        "AC": 756,
        "PB": "£350k-£650k",
        "PBR": 478
    },
    {
        "UID": 1058,
        "OR": 1058,
        "SN": "Kettering",
        "PE": 1351,
        "QL": 523,
        "AC": 702,
        "PB": "Up to £350k",
        "PBR": 488
    },
    {
        "UID": 1059,
        "OR": 1059,
        "SN": "Ellesmere Port",
        "PE": 981,
        "QL": 529,
        "AC": 1060,
        "PB": "Up to £350k",
        "PBR": 489
    },
    {
        "UID": 1060,
        "OR": 1060,
        "SN": "Gwaun-Cae-Gurwen",
        "PE": 727,
        "QL": 526,
        "AC": 1185,
        "PB": "Up to £350k",
        "PBR": 490
    },
    {
        "UID": 1061,
        "OR": 1061,
        "SN": "Madeley",
        "PE": 1238,
        "QL": 950,
        "AC": 636,
        "PB": "Up to £350k",
        "PBR": 491
    },
    {
        "UID": 1062,
        "OR": 1062,
        "SN": "Hazel Grove",
        "PE": 845,
        "QL": 576,
        "AC": 1119,
        "PB": "£350k-£650k",
        "PBR": 479
    },
    {
        "UID": 1063,
        "OR": 1063,
        "SN": "Whetstone",
        "PE": 1357,
        "QL": 623,
        "AC": 656,
        "PB": "£350k-£650k",
        "PBR": 480
    },
    {
        "UID": 1064,
        "OR": 1063,
        "SN": "Nelson (Caerphilly)",
        "PE": 1119,
        "QL": 436,
        "AC": 1011,
        "PB": "Up to £350k",
        "PBR": 492
    },
    {
        "UID": 1065,
        "OR": 1065,
        "SN": "Haverhill",
        "PE": 1252,
        "QL": 262,
        "AC": 986,
        "PB": "£350k-£650k",
        "PBR": 481
    },
    {
        "UID": 1066,
        "OR": 1066,
        "SN": "Stevenage",
        "PE": 953,
        "QL": 678,
        "AC": 1035,
        "PB": "£350k-£650k",
        "PBR": 482
    },
    {
        "UID": 1067,
        "OR": 1067,
        "SN": "Conisbrough",
        "PE": 798,
        "QL": 710,
        "AC": 1114,
        "PB": "Up to £350k",
        "PBR": 493
    },
    {
        "UID": 1068,
        "OR": 1068,
        "SN": "Meopham (North)",
        "PE": 672,
        "QL": 851,
        "AC": 1137,
        "PB": "£350k-£650k",
        "PBR": 483
    },
    {
        "UID": 1069,
        "OR": 1068,
        "SN": "Baddesley Ensor",
        "PE": 1247,
        "QL": 317,
        "AC": 968,
        "PB": "Up to £350k",
        "PBR": 494
    },
    {
        "UID": 1070,
        "OR": 1070,
        "SN": "Kearsley",
        "PE": 600,
        "QL": 922,
        "AC": 1160,
        "PB": "Up to £350k",
        "PBR": 495
    },
    {
        "UID": 1071,
        "OR": 1071,
        "SN": "Pilsley",
        "PE": 1050,
        "QL": 922,
        "AC": 855,
        "PB": "Up to £350k",
        "PBR": 496
    },
    {
        "UID": 1072,
        "OR": 1072,
        "SN": "Jarrow",
        "PE": 754,
        "QL": 1121,
        "AC": 950,
        "PB": "Up to £350k",
        "PBR": 497
    },
    {
        "UID": 1073,
        "OR": 1073,
        "SN": "Standish",
        "PE": 1262,
        "QL": 1035,
        "AC": 577,
        "PB": "Up to £350k",
        "PBR": 498
    },
    {
        "UID": 1074,
        "OR": 1074,
        "SN": "Kegworth",
        "PE": 850,
        "QL": 1328,
        "AC": 667,
        "PB": "Up to £350k",
        "PBR": 499
    },
    {
        "UID": 1075,
        "OR": 1075,
        "SN": "Alveston",
        "PE": 1062,
        "QL": 799,
        "AC": 916,
        "PB": "£350k-£650k",
        "PBR": 484
    },
    {
        "UID": 1076,
        "OR": 1076,
        "SN": "Denmead",
        "PE": 449,
        "QL": 1261,
        "AC": 1056,
        "PB": "£350k-£650k",
        "PBR": 485
    },
    {
        "UID": 1077,
        "OR": 1077,
        "SN": "Tyldesley",
        "PE": 1274,
        "QL": 906,
        "AC": 648,
        "PB": "Up to £350k",
        "PBR": 500
    },
    {
        "UID": 1078,
        "OR": 1078,
        "SN": "Uppingham",
        "PE": 1373,
        "QL": 1270,
        "AC": 323,
        "PB": "£350k-£650k",
        "PBR": 486
    },
    {
        "UID": 1079,
        "OR": 1078,
        "SN": "Longton",
        "PE": 1171,
        "QL": 381,
        "AC": 1029,
        "PB": "Up to £350k",
        "PBR": 501
    },
    {
        "UID": 1080,
        "OR": 1080,
        "SN": "Goole",
        "PE": 806,
        "QL": 1231,
        "AC": 861,
        "PB": "Up to £350k",
        "PBR": 502
    },
    {
        "UID": 1081,
        "OR": 1081,
        "SN": "Crosby",
        "PE": 1149,
        "QL": 1029,
        "AC": 729,
        "PB": "Up to £350k",
        "PBR": 503
    },
    {
        "UID": 1082,
        "OR": 1082,
        "SN": "Bramhall",
        "PE": 382,
        "QL": 627,
        "AC": 1291,
        "PB": "£350k-£650k",
        "PBR": 487
    },
    {
        "UID": 1083,
        "OR": 1083,
        "SN": "Pontllan-fraith",
        "PE": 546,
        "QL": 964,
        "AC": 1188,
        "PB": "Up to £350k",
        "PBR": 504
    },
    {
        "UID": 1084,
        "OR": 1084,
        "SN": "Kenilworth",
        "PE": 1239,
        "QL": 1257,
        "AC": 475,
        "PB": "£350k-£650k",
        "PBR": 488
    },
    {
        "UID": 1085,
        "OR": 1085,
        "SN": "Prescot",
        "PE": 1342,
        "QL": 560,
        "AC": 742,
        "PB": "Up to £350k",
        "PBR": 505
    },
    {
        "UID": 1086,
        "OR": 1086,
        "SN": "Cottingham",
        "PE": 1280,
        "QL": 854,
        "AC": 683,
        "PB": "Up to £350k",
        "PBR": 506
    },
    {
        "UID": 1087,
        "OR": 1086,
        "SN": "Measham",
        "PE": 1257,
        "QL": 796,
        "AC": 738,
        "PB": "Up to £350k",
        "PBR": 506
    },
    {
        "UID": 1088,
        "OR": 1088,
        "SN": "Peterlee",
        "PE": 665,
        "QL": 447,
        "AC": 1249,
        "PB": "Up to £350k",
        "PBR": 508
    },
    {
        "UID": 1089,
        "OR": 1089,
        "SN": "Kirkby",
        "PE": 1104,
        "QL": 275,
        "AC": 1147,
        "PB": "Up to £350k",
        "PBR": 509
    },
    {
        "UID": 1090,
        "OR": 1090,
        "SN": "Borrowash",
        "PE": 919,
        "QL": 1022,
        "AC": 942,
        "PB": "£350k-£650k",
        "PBR": 489
    },
    {
        "UID": 1091,
        "OR": 1091,
        "SN": "Kempston",
        "PE": 652,
        "QL": 484,
        "AC": 1244,
        "PB": "£350k-£650k",
        "PBR": 490
    },
    {
        "UID": 1092,
        "OR": 1092,
        "SN": "Melton Mowbray",
        "PE": 993,
        "QL": 1012,
        "AC": 892,
        "PB": "Up to £350k",
        "PBR": 510
    },
    {
        "UID": 1093,
        "OR": 1093,
        "SN": "Haslingden",
        "PE": 1067,
        "QL": 1195,
        "AC": 716,
        "PB": "Up to £350k",
        "PBR": 511
    },
    {
        "UID": 1094,
        "OR": 1094,
        "SN": "Gowerton",
        "PE": 401,
        "QL": 891,
        "AC": 1236,
        "PB": "Up to £350k",
        "PBR": 512
    },
    {
        "UID": 1095,
        "OR": 1095,
        "SN": "Seaton Delaval",
        "PE": 1180,
        "QL": 339,
        "AC": 1068,
        "PB": "Up to £350k",
        "PBR": 513
    },
    {
        "UID": 1096,
        "OR": 1096,
        "SN": "Brentwood",
        "PE": 1228,
        "QL": 414,
        "AC": 980,
        "PB": "Over £650k",
        "PBR": 93
    },
    {
        "UID": 1097,
        "OR": 1097,
        "SN": "Netherton",
        "PE": 1162,
        "QL": 314,
        "AC": 1106,
        "PB": "Up to £350k",
        "PBR": 514
    },
    {
        "UID": 1098,
        "OR": 1098,
        "SN": "Cil-y-coed",
        "PE": 834,
        "QL": 1247,
        "AC": 866,
        "PB": "£350k-£650k",
        "PBR": 491
    },
    {
        "UID": 1099,
        "OR": 1099,
        "SN": "Ormesby St Margaret",
        "PE": 721,
        "QL": 696,
        "AC": 1187,
        "PB": "£350k-£650k",
        "PBR": 492
    },
    {
        "UID": 1100,
        "OR": 1100,
        "SN": "Wallsend",
        "PE": 870,
        "QL": 868,
        "AC": 1075,
        "PB": "Up to £350k",
        "PBR": 515
    },
    {
        "UID": 1101,
        "OR": 1101,
        "SN": "Rushden",
        "PE": 1300,
        "QL": 742,
        "AC": 731,
        "PB": "Up to £350k",
        "PBR": 516
    },
    {
        "UID": 1102,
        "OR": 1102,
        "SN": "Letchworth Garden City",
        "PE": 930,
        "QL": 887,
        "AC": 1042,
        "PB": "£350k-£650k",
        "PBR": 493
    },
    {
        "UID": 1103,
        "OR": 1103,
        "SN": "Southam",
        "PE": 1084,
        "QL": 1002,
        "AC": 849,
        "PB": "£350k-£650k",
        "PBR": 494
    },
    {
        "UID": 1104,
        "OR": 1104,
        "SN": "Wollaston",
        "PE": 1299,
        "QL": 1078,
        "AC": 583,
        "PB": "£350k-£650k",
        "PBR": 495
    },
    {
        "UID": 1105,
        "OR": 1105,
        "SN": "Highley",
        "PE": 1034,
        "QL": 567,
        "AC": 1084,
        "PB": "Up to £350k",
        "PBR": 517
    },
    {
        "UID": 1106,
        "OR": 1106,
        "SN": "Formby",
        "PE": 1132,
        "QL": 986,
        "AC": 840,
        "PB": "£350k-£650k",
        "PBR": 496
    },
    {
        "UID": 1107,
        "OR": 1107,
        "SN": "Shotton",
        "PE": 762,
        "QL": 746,
        "AC": 1181,
        "PB": "Up to £350k",
        "PBR": 518
    },
    {
        "UID": 1108,
        "OR": 1108,
        "SN": "Westhoughton",
        "PE": 1277,
        "QL": 478,
        "AC": 902,
        "PB": "Up to £350k",
        "PBR": 519
    },
    {
        "UID": 1109,
        "OR": 1109,
        "SN": "Hebburn",
        "PE": 870,
        "QL": 1145,
        "AC": 946,
        "PB": "Up to £350k",
        "PBR": 520
    },
    {
        "UID": 1110,
        "OR": 1110,
        "SN": "Carterton",
        "PE": 777,
        "QL": 1126,
        "AC": 1022,
        "PB": "£350k-£650k",
        "PBR": 497
    },
    {
        "UID": 1111,
        "OR": 1111,
        "SN": "Welwyn Garden City",
        "PE": 902,
        "QL": 868,
        "AC": 1084,
        "PB": "£350k-£650k",
        "PBR": 498
    },
    {
        "UID": 1112,
        "OR": 1112,
        "SN": "Beeston (Broxtowe)",
        "PE": 976,
        "QL": 854,
        "AC": 1049,
        "PB": "£350k-£650k",
        "PBR": 499
    },
    {
        "UID": 1113,
        "OR": 1113,
        "SN": "Goostrey",
        "PE": 1156,
        "QL": 715,
        "AC": 942,
        "PB": "£350k-£650k",
        "PBR": 500
    },
    {
        "UID": 1114,
        "OR": 1114,
        "SN": "Partington",
        "PE": 788,
        "QL": 213,
        "AC": 1314,
        "PB": "Up to £350k",
        "PBR": 521
    },
    {
        "UID": 1115,
        "OR": 1115,
        "SN": "Shirebrook",
        "PE": 1203,
        "QL": 316,
        "AC": 1097,
        "PB": "Up to £350k",
        "PBR": 522
    },
    {
        "UID": 1116,
        "OR": 1116,
        "SN": "Branston",
        "PE": 1218,
        "QL": 1310,
        "AC": 467,
        "PB": "£350k-£650k",
        "PBR": 501
    },
    {
        "UID": 1117,
        "OR": 1117,
        "SN": "Long Buckby",
        "PE": 1267,
        "QL": 947,
        "AC": 721,
        "PB": "£350k-£650k",
        "PBR": 502
    },
    {
        "UID": 1118,
        "OR": 1117,
        "SN": "Red Lodge",
        "PE": 1323,
        "QL": 259,
        "AC": 1028,
        "PB": "£350k-£650k",
        "PBR": 502
    },
    {
        "UID": 1119,
        "OR": 1119,
        "SN": "Deeside Industrial Park",
        "PE": 686,
        "QL": 489,
        "AC": 1273,
        "PB": "Up to £350k",
        "PBR": 523
    },
    {
        "UID": 1120,
        "OR": 1120,
        "SN": "Shavington",
        "PE": 1254,
        "QL": 931,
        "AC": 754,
        "PB": "Up to £350k",
        "PBR": 524
    },
    {
        "UID": 1121,
        "OR": 1121,
        "SN": "Hendreforgan",
        "PE": 1137,
        "QL": 769,
        "AC": 965,
        "PB": "Up to £350k",
        "PBR": 525
    },
    {
        "UID": 1122,
        "OR": 1122,
        "SN": "Broadbridge Heath",
        "PE": 862,
        "QL": 913,
        "AC": 1105,
        "PB": "£350k-£650k",
        "PBR": 504
    },
    {
        "UID": 1123,
        "OR": 1123,
        "SN": "Narborough/Enderby",
        "PE": 1160,
        "QL": 1060,
        "AC": 806,
        "PB": "£350k-£650k",
        "PBR": 505
    },
    {
        "UID": 1124,
        "OR": 1124,
        "SN": "Stanley",
        "PE": 1061,
        "QL": 184,
        "AC": 1241,
        "PB": "Up to £350k",
        "PBR": 526
    },
    {
        "UID": 1125,
        "OR": 1125,
        "SN": "Albrighton",
        "PE": 1147,
        "QL": 796,
        "AC": 952,
        "PB": "£350k-£650k",
        "PBR": 506
    },
    {
        "UID": 1126,
        "OR": 1126,
        "SN": "Cwmavon",
        "PE": 362,
        "QL": 1069,
        "AC": 1242,
        "PB": "Up to £350k",
        "PBR": 527
    },
    {
        "UID": 1127,
        "OR": 1127,
        "SN": "Radlett",
        "PE": 1048,
        "QL": 930,
        "AC": 976,
        "PB": "Over £650k",
        "PBR": 94
    },
    {
        "UID": 1128,
        "OR": 1128,
        "SN": "Marston Moretaine",
        "PE": 1072,
        "QL": 815,
        "AC": 1014,
        "PB": "£350k-£650k",
        "PBR": 507
    },
    {
        "UID": 1129,
        "OR": 1129,
        "SN": "Barton-under-Needwood",
        "PE": 1087,
        "QL": 1307,
        "AC": 628,
        "PB": "£350k-£650k",
        "PBR": 508
    },
    {
        "UID": 1130,
        "OR": 1129,
        "SN": "Shotton Colliery",
        "PE": 891,
        "QL": 154,
        "AC": 1322,
        "PB": "Up to £350k",
        "PBR": 528
    },
    {
        "UID": 1131,
        "OR": 1131,
        "SN": "Borehamwood",
        "PE": 1101,
        "QL": 517,
        "AC": 1102,
        "PB": "Over £650k",
        "PBR": 95
    },
    {
        "UID": 1132,
        "OR": 1132,
        "SN": "Southwater",
        "PE": 840,
        "QL": 1172,
        "AC": 996,
        "PB": "£350k-£650k",
        "PBR": 509
    },
    {
        "UID": 1133,
        "OR": 1133,
        "SN": "Willaston",
        "PE": 1183,
        "QL": 999,
        "AC": 834,
        "PB": "£350k-£650k",
        "PBR": 510
    },
    {
        "UID": 1134,
        "OR": 1134,
        "SN": "Seer Green",
        "PE": 449,
        "QL": 1280,
        "AC": 1138,
        "PB": "Over £650k",
        "PBR": 96
    },
    {
        "UID": 1135,
        "OR": 1135,
        "SN": "Aveley",
        "PE": 1086,
        "QL": 267,
        "AC": 1213,
        "PB": "£350k-£650k",
        "PBR": 511
    },
    {
        "UID": 1136,
        "OR": 1136,
        "SN": "Dersingham",
        "PE": 449,
        "QL": 1282,
        "AC": 1142,
        "PB": "£350k-£650k",
        "PBR": 512
    },
    {
        "UID": 1137,
        "OR": 1137,
        "SN": "Seaham",
        "PE": 368,
        "QL": 818,
        "AC": 1319,
        "PB": "Up to £350k",
        "PBR": 529
    },
    {
        "UID": 1138,
        "OR": 1138,
        "SN": "Hinckley",
        "PE": 1102,
        "QL": 456,
        "AC": 1152,
        "PB": "Up to £350k",
        "PBR": 530
    },
    {
        "UID": 1139,
        "OR": 1139,
        "SN": "Wilstead",
        "PE": 1077,
        "QL": 988,
        "AC": 956,
        "PB": "£350k-£650k",
        "PBR": 513
    },
    {
        "UID": 1140,
        "OR": 1140,
        "SN": "Kippax",
        "PE": 1245,
        "QL": 308,
        "AC": 1117,
        "PB": "Up to £350k",
        "PBR": 531
    },
    {
        "UID": 1141,
        "OR": 1141,
        "SN": "Rainford",
        "PE": 1318,
        "QL": 370,
        "AC": 1014,
        "PB": "Up to £350k",
        "PBR": 532
    },
    {
        "UID": 1142,
        "OR": 1142,
        "SN": "Sutton Coldfield",
        "PE": 717,
        "QL": 1057,
        "AC": 1157,
        "PB": "£350k-£650k",
        "PBR": 514
    },
    {
        "UID": 1143,
        "OR": 1143,
        "SN": "Kingswinford",
        "PE": 810,
        "QL": 875,
        "AC": 1179,
        "PB": "Up to £350k",
        "PBR": 533
    },
    {
        "UID": 1144,
        "OR": 1144,
        "SN": "Shevington Vale",
        "PE": 682,
        "QL": 958,
        "AC": 1195,
        "PB": "Up to £350k",
        "PBR": 534
    },
    {
        "UID": 1145,
        "OR": 1145,
        "SN": "Burntwood",
        "PE": 265,
        "QL": 1198,
        "AC": 1283,
        "PB": "Up to £350k",
        "PBR": 535
    },
    {
        "UID": 1146,
        "OR": 1146,
        "SN": "Newcastle-under-Lyme",
        "PE": 1169,
        "QL": 608,
        "AC": 1057,
        "PB": "Up to £350k",
        "PBR": 536
    },
    {
        "UID": 1147,
        "OR": 1147,
        "SN": "Jacksdale",
        "PE": 1175,
        "QL": 428,
        "AC": 1132,
        "PB": "Up to £350k",
        "PBR": 537
    },
    {
        "UID": 1148,
        "OR": 1148,
        "SN": "Stotfold",
        "PE": 1002,
        "QL": 1314,
        "AC": 758,
        "PB": "£350k-£650k",
        "PBR": 515
    },
    {
        "UID": 1149,
        "OR": 1149,
        "SN": "Tilbury",
        "PE": 561,
        "QL": 788,
        "AC": 1301,
        "PB": "£350k-£650k",
        "PBR": 516
    },
    {
        "UID": 1150,
        "OR": 1150,
        "SN": "Bracknell",
        "PE": 1065,
        "QL": 887,
        "AC": 1043,
        "PB": "£350k-£650k",
        "PBR": 517
    },
    {
        "UID": 1151,
        "OR": 1151,
        "SN": "Hextable",
        "PE": 786,
        "QL": 556,
        "AC": 1259,
        "PB": "£350k-£650k",
        "PBR": 518
    },
    {
        "UID": 1152,
        "OR": 1152,
        "SN": "Coalville",
        "PE": 1298,
        "QL": 662,
        "AC": 887,
        "PB": "Up to £350k",
        "PBR": 538
    },
    {
        "UID": 1153,
        "OR": 1153,
        "SN": "Haslington",
        "PE": 1220,
        "QL": 799,
        "AC": 942,
        "PB": "Up to £350k",
        "PBR": 539
    },
    {
        "UID": 1154,
        "OR": 1154,
        "SN": "Marlow Bottom",
        "PE": 449,
        "QL": 1049,
        "AC": 1252,
        "PB": "Over £650k",
        "PBR": 97
    },
    {
        "UID": 1155,
        "OR": 1155,
        "SN": "Hethersett",
        "PE": 986,
        "QL": 648,
        "AC": 1175,
        "PB": "£350k-£650k",
        "PBR": 519
    },
    {
        "UID": 1156,
        "OR": 1156,
        "SN": "Horsforth",
        "PE": 645,
        "QL": 1091,
        "AC": 1185,
        "PB": "£350k-£650k",
        "PBR": 520
    },
    {
        "UID": 1157,
        "OR": 1157,
        "SN": "Earby",
        "PE": 949,
        "QL": 1225,
        "AC": 970,
        "PB": "Up to £350k",
        "PBR": 540
    },
    {
        "UID": 1158,
        "OR": 1158,
        "SN": "Filton",
        "PE": 1036,
        "QL": 803,
        "AC": 1122,
        "PB": "£350k-£650k",
        "PBR": 521
    },
    {
        "UID": 1159,
        "OR": 1159,
        "SN": "Bishop's Cleeve",
        "PE": 449,
        "QL": 1361,
        "AC": 1005,
        "PB": "£350k-£650k",
        "PBR": 522
    },
    {
        "UID": 1160,
        "OR": 1160,
        "SN": "Alderholt",
        "PE": 749,
        "QL": 968,
        "AC": 1194,
        "PB": "£350k-£650k",
        "PBR": 523
    },
    {
        "UID": 1161,
        "OR": 1161,
        "SN": "Yaxley",
        "PE": 1158,
        "QL": 815,
        "AC": 1033,
        "PB": "Up to £350k",
        "PBR": 541
    },
    {
        "UID": 1162,
        "OR": 1162,
        "SN": "Tadcaster",
        "PE": 792,
        "QL": 1338,
        "AC": 873,
        "PB": "£350k-£650k",
        "PBR": 524
    },
    {
        "UID": 1163,
        "OR": 1163,
        "SN": "Carlton in Lindrick",
        "PE": 1264,
        "QL": 479,
        "AC": 1048,
        "PB": "Up to £350k",
        "PBR": 542
    },
    {
        "UID": 1164,
        "OR": 1164,
        "SN": "Washingborough",
        "PE": 822,
        "QL": 1324,
        "AC": 884,
        "PB": "Up to £350k",
        "PBR": 543
    },
    {
        "UID": 1165,
        "OR": 1165,
        "SN": "Marchwood",
        "PE": 160,
        "QL": 1318,
        "AC": 1279,
        "PB": "£350k-£650k",
        "PBR": 525
    },
    {
        "UID": 1166,
        "OR": 1166,
        "SN": "Rothwell",
        "PE": 989,
        "QL": 683,
        "AC": 1180,
        "PB": "Up to £350k",
        "PBR": 544
    },
    {
        "UID": 1167,
        "OR": 1167,
        "SN": "Penyffordd",
        "PE": 1001,
        "QL": 879,
        "AC": 1127,
        "PB": "Up to £350k",
        "PBR": 545
    },
    {
        "UID": 1168,
        "OR": 1168,
        "SN": "Syston",
        "PE": 1366,
        "QL": 784,
        "AC": 827,
        "PB": "£350k-£650k",
        "PBR": 526
    },
    {
        "UID": 1169,
        "OR": 1169,
        "SN": "Banstead",
        "PE": 848,
        "QL": 843,
        "AC": 1201,
        "PB": "Over £650k",
        "PBR": 98
    },
    {
        "UID": 1170,
        "OR": 1170,
        "SN": "Wittering Airfield",
        "PE": 1372,
        "QL": 901,
        "AC": 772,
        "PB": "Up to £350k",
        "PBR": 546
    },
    {
        "UID": 1171,
        "OR": 1171,
        "SN": "Burghfield Common",
        "PE": 837,
        "QL": 539,
        "AC": 1270,
        "PB": "£350k-£650k",
        "PBR": 527
    },
    {
        "UID": 1172,
        "OR": 1172,
        "SN": "Whitley Bay",
        "PE": 861,
        "QL": 993,
        "AC": 1164,
        "PB": "Up to £350k",
        "PBR": 547
    },
    {
        "UID": 1173,
        "OR": 1173,
        "SN": "Ashtead",
        "PE": 753,
        "QL": 1334,
        "AC": 941,
        "PB": "Over £650k",
        "PBR": 99
    },
    {
        "UID": 1174,
        "OR": 1174,
        "SN": "Brierley Hill",
        "PE": 609,
        "QL": 780,
        "AC": 1307,
        "PB": "Up to £350k",
        "PBR": 548
    },
    {
        "UID": 1175,
        "OR": 1175,
        "SN": "Market Warsop",
        "PE": 1242,
        "QL": 324,
        "AC": 1168,
        "PB": "Up to £350k",
        "PBR": 549
    },
    {
        "UID": 1176,
        "OR": 1176,
        "SN": "Messingham",
        "PE": 1215,
        "QL": 376,
        "AC": 1167,
        "PB": "Up to £350k",
        "PBR": 550
    },
    {
        "UID": 1177,
        "OR": 1177,
        "SN": "Solihull",
        "PE": 888,
        "QL": 1008,
        "AC": 1159,
        "PB": "£350k-£650k",
        "PBR": 528
    },
    {
        "UID": 1178,
        "OR": 1178,
        "SN": "Worsley",
        "PE": 876,
        "QL": 1000,
        "AC": 1163,
        "PB": "£350k-£650k",
        "PBR": 529
    },
    {
        "UID": 1179,
        "OR": 1179,
        "SN": "Golborne",
        "PE": 1302,
        "QL": 520,
        "AC": 1032,
        "PB": "Up to £350k",
        "PBR": 551
    },
    {
        "UID": 1180,
        "OR": 1180,
        "SN": "Ottershaw",
        "PE": 1092,
        "QL": 974,
        "AC": 1046,
        "PB": "Over £650k",
        "PBR": 100
    },
    {
        "UID": 1181,
        "OR": 1181,
        "SN": "Waltham Abbey",
        "PE": 964,
        "QL": 1158,
        "AC": 1043,
        "PB": "£350k-£650k",
        "PBR": 530
    },
    {
        "UID": 1182,
        "OR": 1182,
        "SN": "Connah's Quay",
        "PE": 648,
        "QL": 617,
        "AC": 1316,
        "PB": "Up to £350k",
        "PBR": 552
    },
    {
        "UID": 1183,
        "OR": 1183,
        "SN": "Watlington (King's Lynn and West Norfolk)",
        "PE": 1081,
        "QL": 1036,
        "AC": 1026,
        "PB": "Up to £350k",
        "PBR": 553
    },
    {
        "UID": 1184,
        "OR": 1184,
        "SN": "Halesowen",
        "PE": 1027,
        "QL": 1329,
        "AC": 787,
        "PB": "Up to £350k",
        "PBR": 554
    },
    {
        "UID": 1185,
        "OR": 1185,
        "SN": "Aldridge",
        "PE": 432,
        "QL": 1187,
        "AC": 1243,
        "PB": "Up to £350k",
        "PBR": 555
    },
    {
        "UID": 1186,
        "OR": 1186,
        "SN": "Yateley",
        "PE": 846,
        "QL": 607,
        "AC": 1269,
        "PB": "£350k-£650k",
        "PBR": 531
    },
    {
        "UID": 1187,
        "OR": 1187,
        "SN": "Caddington",
        "PE": 449,
        "QL": 717,
        "AC": 1337,
        "PB": "£350k-£650k",
        "PBR": 532
    },
    {
        "UID": 1188,
        "OR": 1188,
        "SN": "Oldbury (Sandwell)",
        "PE": 613,
        "QL": 1272,
        "AC": 1166,
        "PB": "Up to £350k",
        "PBR": 556
    },
    {
        "UID": 1189,
        "OR": 1189,
        "SN": "Hindley",
        "PE": 1289,
        "QL": 301,
        "AC": 1160,
        "PB": "Up to £350k",
        "PBR": 557
    },
    {
        "UID": 1190,
        "OR": 1190,
        "SN": "Skelmersdale",
        "PE": 1293,
        "QL": 100,
        "AC": 1233,
        "PB": "Up to £350k",
        "PBR": 558
    },
    {
        "UID": 1191,
        "OR": 1191,
        "SN": "Walton",
        "PE": 1222,
        "QL": 1117,
        "AC": 845,
        "PB": "Up to £350k",
        "PBR": 559
    },
    {
        "UID": 1192,
        "OR": 1191,
        "SN": "Kirkby-in-Ashfield",
        "PE": 1206,
        "QL": 284,
        "AC": 1218,
        "PB": "Up to £350k",
        "PBR": 559
    },
    {
        "UID": 1193,
        "OR": 1193,
        "SN": "Hedon",
        "PE": 1231,
        "QL": 1178,
        "AC": 812,
        "PB": "Up to £350k",
        "PBR": 561
    },
    {
        "UID": 1194,
        "OR": 1194,
        "SN": "Sutton in Ashfield",
        "PE": 1161,
        "QL": 648,
        "AC": 1129,
        "PB": "Up to £350k",
        "PBR": 562
    },
    {
        "UID": 1195,
        "OR": 1195,
        "SN": "South Earlswood",
        "PE": 853,
        "QL": 537,
        "AC": 1292,
        "PB": "£350k-£650k",
        "PBR": 533
    },
    {
        "UID": 1196,
        "OR": 1196,
        "SN": "South Hetton",
        "PE": 908,
        "QL": 110,
        "AC": 1359,
        "PB": "Up to £350k",
        "PBR": 563
    },
    {
        "UID": 1197,
        "OR": 1197,
        "SN": "Houghton Regis",
        "PE": 765,
        "QL": 761,
        "AC": 1278,
        "PB": "£350k-£650k",
        "PBR": 534
    },
    {
        "UID": 1198,
        "OR": 1198,
        "SN": "Basildon",
        "PE": 1166,
        "QL": 195,
        "AC": 1281,
        "PB": "£350k-£650k",
        "PBR": 535
    },
    {
        "UID": 1199,
        "OR": 1199,
        "SN": "West Bridgford",
        "PE": 812,
        "QL": 1337,
        "AC": 950,
        "PB": "£350k-£650k",
        "PBR": 536
    },
    {
        "UID": 1200,
        "OR": 1200,
        "SN": "Kimberley",
        "PE": 1244,
        "QL": 709,
        "AC": 1051,
        "PB": "Up to £350k",
        "PBR": 564
    },
    {
        "UID": 1201,
        "OR": 1201,
        "SN": "Castle Donington",
        "PE": 1292,
        "QL": 1248,
        "AC": 695,
        "PB": "Up to £350k",
        "PBR": 565
    },
    {
        "UID": 1202,
        "OR": 1202,
        "SN": "Thurnscoe",
        "PE": 1201,
        "QL": 389,
        "AC": 1202,
        "PB": "Up to £350k",
        "PBR": 566
    },
    {
        "UID": 1203,
        "OR": 1203,
        "SN": "Bishopthorpe",
        "PE": 944,
        "QL": 1323,
        "AC": 894,
        "PB": "£350k-£650k",
        "PBR": 537
    },
    {
        "UID": 1204,
        "OR": 1204,
        "SN": "Murton (Swansea)",
        "PE": 449,
        "QL": 1094,
        "AC": 1298,
        "PB": "£350k-£650k",
        "PBR": 538
    },
    {
        "UID": 1205,
        "OR": 1205,
        "SN": "Dinas Powis",
        "PE": 1103,
        "QL": 1258,
        "AC": 890,
        "PB": "£350k-£650k",
        "PBR": 539
    },
    {
        "UID": 1206,
        "OR": 1206,
        "SN": "Breaston",
        "PE": 1108,
        "QL": 1106,
        "AC": 1004,
        "PB": "£350k-£650k",
        "PBR": 540
    },
    {
        "UID": 1207,
        "OR": 1207,
        "SN": "Mansfield Woodhouse",
        "PE": 1219,
        "QL": 451,
        "AC": 1177,
        "PB": "Up to £350k",
        "PBR": 567
    },
    {
        "UID": 1208,
        "OR": 1208,
        "SN": "Hucknall",
        "PE": 1248,
        "QL": 471,
        "AC": 1152,
        "PB": "Up to £350k",
        "PBR": 568
    },
    {
        "UID": 1209,
        "OR": 1209,
        "SN": "Portslade-by-Sea",
        "PE": 239,
        "QL": 1302,
        "AC": 1304,
        "PB": "£350k-£650k",
        "PBR": 541
    },
    {
        "UID": 1210,
        "OR": 1210,
        "SN": "Llay",
        "PE": 731,
        "QL": 368,
        "AC": 1352,
        "PB": "Up to £350k",
        "PBR": 569
    },
    {
        "UID": 1211,
        "OR": 1211,
        "SN": "Rainworth",
        "PE": 1052,
        "QL": 514,
        "AC": 1234,
        "PB": "Up to £350k",
        "PBR": 570
    },
    {
        "UID": 1212,
        "OR": 1212,
        "SN": "Skellingthorpe",
        "PE": 1260,
        "QL": 1217,
        "AC": 782,
        "PB": "Up to £350k",
        "PBR": 571
    },
    {
        "UID": 1213,
        "OR": 1213,
        "SN": "Cheadle Hulme",
        "PE": 579,
        "QL": 563,
        "AC": 1355,
        "PB": "£350k-£650k",
        "PBR": 542
    },
    {
        "UID": 1214,
        "OR": 1214,
        "SN": "Rhoose",
        "PE": 439,
        "QL": 1133,
        "AC": 1296,
        "PB": "Up to £350k",
        "PBR": 572
    },
    {
        "UID": 1215,
        "OR": 1215,
        "SN": "Southend-on-Sea",
        "PE": 892,
        "QL": 1221,
        "AC": 1112,
        "PB": "£350k-£650k",
        "PBR": 543
    },
    {
        "UID": 1216,
        "OR": 1216,
        "SN": "Balsall Common",
        "PE": 1281,
        "QL": 733,
        "AC": 1030,
        "PB": "£350k-£650k",
        "PBR": 544
    },
    {
        "UID": 1217,
        "OR": 1216,
        "SN": "Kiveton Park",
        "PE": 1176,
        "QL": 672,
        "AC": 1148,
        "PB": "Up to £350k",
        "PBR": 573
    },
    {
        "UID": 1218,
        "OR": 1218,
        "SN": "Hatfield Peverel",
        "PE": 1246,
        "QL": 1004,
        "AC": 948,
        "PB": "£350k-£650k",
        "PBR": 545
    },
    {
        "UID": 1219,
        "OR": 1219,
        "SN": "Desborough",
        "PE": 1363,
        "QL": 860,
        "AC": 891,
        "PB": "Up to £350k",
        "PBR": 574
    },
    {
        "UID": 1220,
        "OR": 1220,
        "SN": "Rayleigh",
        "PE": 1013,
        "QL": 1140,
        "AC": 1083,
        "PB": "£350k-£650k",
        "PBR": 546
    },
    {
        "UID": 1221,
        "OR": 1221,
        "SN": "Brinsley",
        "PE": 1204,
        "QL": 533,
        "AC": 1174,
        "PB": "Up to £350k",
        "PBR": 575
    },
    {
        "UID": 1222,
        "OR": 1222,
        "SN": "Ryhill",
        "PE": 1217,
        "QL": 89,
        "AC": 1320,
        "PB": "Up to £350k",
        "PBR": 576
    },
    {
        "UID": 1223,
        "OR": 1223,
        "SN": "Brough",
        "PE": 1139,
        "QL": 1355,
        "AC": 691,
        "PB": "Up to £350k",
        "PBR": 577
    },
    {
        "UID": 1224,
        "OR": 1224,
        "SN": "Stubbington",
        "PE": 347,
        "QL": 1333,
        "AC": 1224,
        "PB": "£350k-£650k",
        "PBR": 547
    },
    {
        "UID": 1225,
        "OR": 1225,
        "SN": "Newton (Bolsover)",
        "PE": 1127,
        "QL": 1363,
        "AC": 644,
        "PB": "Up to £350k",
        "PBR": 578
    },
    {
        "UID": 1226,
        "OR": 1226,
        "SN": "Tipton",
        "PE": 415,
        "QL": 1185,
        "AC": 1305,
        "PB": "Up to £350k",
        "PBR": 579
    },
    {
        "UID": 1227,
        "OR": 1227,
        "SN": "North Walney",
        "PE": 322,
        "QL": 1069,
        "AC": 1345,
        "PB": "Up to £350k",
        "PBR": 580
    },
    {
        "UID": 1228,
        "OR": 1228,
        "SN": "West Hallam",
        "PE": 1211,
        "QL": 753,
        "AC": 1118,
        "PB": "Up to £350k",
        "PBR": 581
    },
    {
        "UID": 1229,
        "OR": 1229,
        "SN": "Normanton",
        "PE": 1126,
        "QL": 376,
        "AC": 1274,
        "PB": "Up to £350k",
        "PBR": 582
    },
    {
        "UID": 1230,
        "OR": 1230,
        "SN": "Pyle",
        "PE": 883,
        "QL": 1300,
        "AC": 1060,
        "PB": "Up to £350k",
        "PBR": 583
    },
    {
        "UID": 1231,
        "OR": 1231,
        "SN": "Selston",
        "PE": 1186,
        "QL": 458,
        "AC": 1222,
        "PB": "Up to £350k",
        "PBR": 584
    },
    {
        "UID": 1232,
        "OR": 1232,
        "SN": "Maltby",
        "PE": 1234,
        "QL": 481,
        "AC": 1192,
        "PB": "Up to £350k",
        "PBR": 585
    },
    {
        "UID": 1233,
        "OR": 1233,
        "SN": "Irlam",
        "PE": 742,
        "QL": 894,
        "AC": 1303,
        "PB": "Up to £350k",
        "PBR": 586
    },
    {
        "UID": 1234,
        "OR": 1234,
        "SN": "Higher Folds",
        "PE": 1287,
        "QL": 9,
        "AC": 1373,
        "PB": "Up to £350k",
        "PBR": 587
    },
    {
        "UID": 1235,
        "OR": 1235,
        "SN": "Ashford",
        "PE": 703,
        "QL": 811,
        "AC": 1323,
        "PB": "Over £650k",
        "PBR": 101
    },
    {
        "UID": 1236,
        "OR": 1236,
        "SN": "Immingham",
        "PE": 1014,
        "QL": 1342,
        "AC": 906,
        "PB": "Up to £350k",
        "PBR": 588
    },
    {
        "UID": 1237,
        "OR": 1237,
        "SN": "Taverham",
        "PE": 627,
        "QL": 1254,
        "AC": 1232,
        "PB": "£350k-£650k",
        "PBR": 548
    },
    {
        "UID": 1238,
        "OR": 1238,
        "SN": "Bromham (Bedford)",
        "PE": 984,
        "QL": 1013,
        "AC": 1200,
        "PB": "£350k-£650k",
        "PBR": 549
    },
    {
        "UID": 1239,
        "OR": 1239,
        "SN": "Swinton",
        "PE": 1225,
        "QL": 928,
        "AC": 1081,
        "PB": "Up to £350k",
        "PBR": 589
    },
    {
        "UID": 1240,
        "OR": 1240,
        "SN": "Freckleton",
        "PE": 1172,
        "QL": 1197,
        "AC": 994,
        "PB": "Up to £350k",
        "PBR": 590
    },
    {
        "UID": 1241,
        "OR": 1241,
        "SN": "Water Orton",
        "PE": 750,
        "QL": 920,
        "AC": 1308,
        "PB": "£350k-£650k",
        "PBR": 550
    },
    {
        "UID": 1242,
        "OR": 1242,
        "SN": "Sherburn (County Durham)",
        "PE": 1079,
        "QL": 292,
        "AC": 1329,
        "PB": "Up to £350k",
        "PBR": 591
    },
    {
        "UID": 1243,
        "OR": 1243,
        "SN": "Litherland",
        "PE": 717,
        "QL": 1026,
        "AC": 1288,
        "PB": "Up to £350k",
        "PBR": 592
    },
    {
        "UID": 1244,
        "OR": 1244,
        "SN": "Widdrington Station",
        "PE": 823,
        "QL": 310,
        "AC": 1362,
        "PB": "Up to £350k",
        "PBR": 593
    },
    {
        "UID": 1245,
        "OR": 1245,
        "SN": "Cosby",
        "PE": 1354,
        "QL": 1108,
        "AC": 852,
        "PB": "£350k-£650k",
        "PBR": 551
    },
    {
        "UID": 1246,
        "OR": 1246,
        "SN": "Horndean",
        "PE": 449,
        "QL": 1255,
        "AC": 1299,
        "PB": "£350k-£650k",
        "PBR": 552
    },
    {
        "UID": 1247,
        "OR": 1247,
        "SN": "Birstall",
        "PE": 1068,
        "QL": 752,
        "AC": 1227,
        "PB": "£350k-£650k",
        "PBR": 553
    },
    {
        "UID": 1248,
        "OR": 1248,
        "SN": "Woodingdean",
        "PE": 449,
        "QL": 717,
        "AC": 1366,
        "PB": "£350k-£650k",
        "PBR": 554
    },
    {
        "UID": 1249,
        "OR": 1249,
        "SN": "Rawmarsh",
        "PE": 925,
        "QL": 925,
        "AC": 1254,
        "PB": "Up to £350k",
        "PBR": 594
    },
    {
        "UID": 1250,
        "OR": 1250,
        "SN": "Maghull",
        "PE": 690,
        "QL": 940,
        "AC": 1316,
        "PB": "Up to £350k",
        "PBR": 595
    },
    {
        "UID": 1251,
        "OR": 1251,
        "SN": "Ruddington",
        "PE": 1310,
        "QL": 915,
        "AC": 1023,
        "PB": "£350k-£650k",
        "PBR": 555
    },
    {
        "UID": 1252,
        "OR": 1252,
        "SN": "Thorpe Willoughby",
        "PE": 1301,
        "QL": 1064,
        "AC": 940,
        "PB": "Up to £350k",
        "PBR": 596
    },
    {
        "UID": 1253,
        "OR": 1253,
        "SN": "Great Wyrley",
        "PE": 820,
        "QL": 958,
        "AC": 1285,
        "PB": "Up to £350k",
        "PBR": 597
    },
    {
        "UID": 1254,
        "OR": 1254,
        "SN": "Whitefield",
        "PE": 1027,
        "QL": 986,
        "AC": 1217,
        "PB": "Up to £350k",
        "PBR": 598
    },
    {
        "UID": 1255,
        "OR": 1255,
        "SN": "Clifton (City of Nottingham)",
        "PE": 1122,
        "QL": 679,
        "AC": 1237,
        "PB": "Up to £350k",
        "PBR": 599
    },
    {
        "UID": 1256,
        "OR": 1256,
        "SN": "Ashton-in-Makerfield",
        "PE": 1308,
        "QL": 435,
        "AC": 1208,
        "PB": "Up to £350k",
        "PBR": 600
    },
    {
        "UID": 1257,
        "OR": 1257,
        "SN": "Brayton",
        "PE": 1118,
        "QL": 939,
        "AC": 1191,
        "PB": "Up to £350k",
        "PBR": 601
    },
    {
        "UID": 1258,
        "OR": 1258,
        "SN": "Garforth",
        "PE": 1229,
        "QL": 1289,
        "AC": 885,
        "PB": "£350k-£650k",
        "PBR": 556
    },
    {
        "UID": 1259,
        "OR": 1259,
        "SN": "Bedworth",
        "PE": 1026,
        "QL": 327,
        "AC": 1346,
        "PB": "Up to £350k",
        "PBR": 602
    },
    {
        "UID": 1260,
        "OR": 1260,
        "SN": "Potters Bar",
        "PE": 1200,
        "QL": 794,
        "AC": 1189,
        "PB": "Over £650k",
        "PBR": 102
    },
    {
        "UID": 1261,
        "OR": 1261,
        "SN": "Upton (Wakefield)",
        "PE": 1255,
        "QL": 363,
        "AC": 1263,
        "PB": "Up to £350k",
        "PBR": 603
    },
    {
        "UID": 1262,
        "OR": 1262,
        "SN": "Stretford",
        "PE": 588,
        "QL": 1250,
        "AC": 1299,
        "PB": "Up to £350k",
        "PBR": 604
    },
    {
        "UID": 1263,
        "OR": 1263,
        "SN": "Loughton",
        "PE": 1113,
        "QL": 776,
        "AC": 1231,
        "PB": "Over £650k",
        "PBR": 103
    },
    {
        "UID": 1264,
        "OR": 1264,
        "SN": "Haxby",
        "PE": 649,
        "QL": 701,
        "AC": 1358,
        "PB": "£350k-£650k",
        "PBR": 557
    },
    {
        "UID": 1265,
        "OR": 1265,
        "SN": "Hambleton (Wyre)",
        "PE": 399,
        "QL": 1166,
        "AC": 1343,
        "PB": "Up to £350k",
        "PBR": 605
    },
    {
        "UID": 1266,
        "OR": 1266,
        "SN": "South Normanton",
        "PE": 1151,
        "QL": 1186,
        "AC": 1089,
        "PB": "Up to £350k",
        "PBR": 606
    },
    {
        "UID": 1267,
        "OR": 1267,
        "SN": "Rowley Regis",
        "PE": 571,
        "QL": 1240,
        "AC": 1315,
        "PB": "Up to £350k",
        "PBR": 607
    },
    {
        "UID": 1268,
        "OR": 1268,
        "SN": "Istead Rise",
        "PE": 801,
        "QL": 778,
        "AC": 1338,
        "PB": "£350k-£650k",
        "PBR": 558
    },
    {
        "UID": 1269,
        "OR": 1269,
        "SN": "Irchester",
        "PE": 1307,
        "QL": 1220,
        "AC": 904,
        "PB": "£350k-£650k",
        "PBR": 559
    },
    {
        "UID": 1270,
        "OR": 1270,
        "SN": "Culcheth",
        "PE": 1284,
        "QL": 966,
        "AC": 1082,
        "PB": "£350k-£650k",
        "PBR": 560
    },
    {
        "UID": 1271,
        "OR": 1271,
        "SN": "Gatley",
        "PE": 1037,
        "QL": 321,
        "AC": 1354,
        "PB": "£350k-£650k",
        "PBR": 561
    },
    {
        "UID": 1272,
        "OR": 1272,
        "SN": "Sharlston",
        "PE": 1249,
        "QL": 383,
        "AC": 1280,
        "PB": "Up to £350k",
        "PBR": 608
    },
    {
        "UID": 1273,
        "OR": 1273,
        "SN": "New Addington",
        "PE": 935,
        "QL": 313,
        "AC": 1369,
        "PB": "£350k-£650k",
        "PBR": 562
    },
    {
        "UID": 1274,
        "OR": 1274,
        "SN": "Swillington",
        "PE": 1235,
        "QL": 353,
        "AC": 1301,
        "PB": "Up to £350k",
        "PBR": 609
    },
    {
        "UID": 1275,
        "OR": 1275,
        "SN": "Bulkington",
        "PE": 1078,
        "QL": 394,
        "AC": 1335,
        "PB": "£350k-£650k",
        "PBR": 563
    },
    {
        "UID": 1276,
        "OR": 1276,
        "SN": "Bowburn",
        "PE": 1114,
        "QL": 953,
        "AC": 1211,
        "PB": "Up to £350k",
        "PBR": 610
    },
    {
        "UID": 1277,
        "OR": 1277,
        "SN": "Welham Green",
        "PE": 1170,
        "QL": 1343,
        "AC": 881,
        "PB": "Over £650k",
        "PBR": 104
    },
    {
        "UID": 1278,
        "OR": 1278,
        "SN": "Billinge",
        "PE": 1314,
        "QL": 334,
        "AC": 1267,
        "PB": "Up to £350k",
        "PBR": 611
    },
    {
        "UID": 1279,
        "OR": 1279,
        "SN": "Pencoed",
        "PE": 275,
        "QL": 1362,
        "AC": 1295,
        "PB": "Up to £350k",
        "PBR": 612
    },
    {
        "UID": 1280,
        "OR": 1280,
        "SN": "Sawtry",
        "PE": 1361,
        "QL": 1113,
        "AC": 961,
        "PB": "£350k-£650k",
        "PBR": 564
    },
    {
        "UID": 1281,
        "OR": 1281,
        "SN": "Little Lever",
        "PE": 736,
        "QL": 922,
        "AC": 1339,
        "PB": "Up to £350k",
        "PBR": 613
    },
    {
        "UID": 1282,
        "OR": 1282,
        "SN": "Catshill",
        "PE": 1269,
        "QL": 408,
        "AC": 1276,
        "PB": "£350k-£650k",
        "PBR": 565
    },
    {
        "UID": 1283,
        "OR": 1283,
        "SN": "North Weald Bassett",
        "PE": 1306,
        "QL": 831,
        "AC": 1154,
        "PB": "Over £650k",
        "PBR": 105
    },
    {
        "UID": 1284,
        "OR": 1284,
        "SN": "Witchford",
        "PE": 1347,
        "QL": 757,
        "AC": 1148,
        "PB": "£350k-£650k",
        "PBR": 566
    },
    {
        "UID": 1285,
        "OR": 1285,
        "SN": "Blidworth",
        "PE": 1270,
        "QL": 394,
        "AC": 1284,
        "PB": "Up to £350k",
        "PBR": 614
    },
    {
        "UID": 1286,
        "OR": 1286,
        "SN": "Frimley",
        "PE": 367,
        "QL": 1370,
        "AC": 1214,
        "PB": "£350k-£650k",
        "PBR": 567
    },
    {
        "UID": 1287,
        "OR": 1287,
        "SN": "Crofton",
        "PE": 1241,
        "QL": 689,
        "AC": 1223,
        "PB": "Up to £350k",
        "PBR": 615
    },
    {
        "UID": 1288,
        "OR": 1288,
        "SN": "Lower Stondon",
        "PE": 831,
        "QL": 1305,
        "AC": 1205,
        "PB": "£350k-£650k",
        "PBR": 568
    },
    {
        "UID": 1289,
        "OR": 1289,
        "SN": "How Wood",
        "PE": 1021,
        "QL": 1065,
        "AC": 1246,
        "PB": "Over £650k",
        "PBR": 106
    },
    {
        "UID": 1290,
        "OR": 1290,
        "SN": "Bayston Hill",
        "PE": 936,
        "QL": 1125,
        "AC": 1268,
        "PB": "Up to £350k",
        "PBR": 616
    },
    {
        "UID": 1291,
        "OR": 1291,
        "SN": "Scotter",
        "PE": 1221,
        "QL": 1292,
        "AC": 993,
        "PB": "Up to £350k",
        "PBR": 617
    },
    {
        "UID": 1292,
        "OR": 1292,
        "SN": "East Leake",
        "PE": 1321,
        "QL": 1366,
        "AC": 640,
        "PB": "£350k-£650k",
        "PBR": 569
    },
    {
        "UID": 1293,
        "OR": 1292,
        "SN": "New Rossington",
        "PE": 1286,
        "QL": 253,
        "AC": 1321,
        "PB": "Up to £350k",
        "PBR": 618
    },
    {
        "UID": 1294,
        "OR": 1294,
        "SN": "Girton",
        "PE": 1328,
        "QL": 1286,
        "AC": 877,
        "PB": "£350k-£650k",
        "PBR": 570
    },
    {
        "UID": 1295,
        "OR": 1295,
        "SN": "Cleveleys",
        "PE": 677,
        "QL": 746,
        "AC": 1367,
        "PB": "Up to £350k",
        "PBR": 619
    },
    {
        "UID": 1296,
        "OR": 1296,
        "SN": "Broughton (Flintshire)",
        "PE": 1070,
        "QL": 1123,
        "AC": 1212,
        "PB": "Up to £350k",
        "PBR": 620
    },
    {
        "UID": 1297,
        "OR": 1297,
        "SN": "Northwood",
        "PE": 882,
        "QL": 1208,
        "AC": 1265,
        "PB": "Over £650k",
        "PBR": 107
    },
    {
        "UID": 1298,
        "OR": 1297,
        "SN": "Thurcroft",
        "PE": 1212,
        "QL": 275,
        "AC": 1340,
        "PB": "Up to £350k",
        "PBR": 621
    },
    {
        "UID": 1299,
        "OR": 1299,
        "SN": "Newton Aycliffe",
        "PE": 1198,
        "QL": 282,
        "AC": 1343,
        "PB": "Up to £350k",
        "PBR": 622
    },
    {
        "UID": 1300,
        "OR": 1300,
        "SN": "Bingham",
        "PE": 1339,
        "QL": 1209,
        "AC": 979,
        "PB": "£350k-£650k",
        "PBR": 571
    },
    {
        "UID": 1301,
        "OR": 1301,
        "SN": "Waltham",
        "PE": 789,
        "QL": 1284,
        "AC": 1257,
        "PB": "Up to £350k",
        "PBR": 623
    },
    {
        "UID": 1302,
        "OR": 1302,
        "SN": "Broughton Astley",
        "PE": 1343,
        "QL": 973,
        "AC": 1119,
        "PB": "£350k-£650k",
        "PBR": 572
    },
    {
        "UID": 1303,
        "OR": 1303,
        "SN": "Ruskington",
        "PE": 1268,
        "QL": 1105,
        "AC": 1121,
        "PB": "Up to £350k",
        "PBR": 624
    },
    {
        "UID": 1304,
        "OR": 1304,
        "SN": "Camberley",
        "PE": 793,
        "QL": 1365,
        "AC": 1142,
        "PB": "£350k-£650k",
        "PBR": 573
    },
    {
        "UID": 1305,
        "OR": 1305,
        "SN": "Haydock",
        "PE": 1324,
        "QL": 506,
        "AC": 1252,
        "PB": "Up to £350k",
        "PBR": 625
    },
    {
        "UID": 1306,
        "OR": 1306,
        "SN": "Edwinstowe",
        "PE": 1276,
        "QL": 966,
        "AC": 1176,
        "PB": "Up to £350k",
        "PBR": 626
    },
    {
        "UID": 1307,
        "OR": 1307,
        "SN": "Spixworth",
        "PE": 771,
        "QL": 1227,
        "AC": 1313,
        "PB": "£350k-£650k",
        "PBR": 574
    },
    {
        "UID": 1308,
        "OR": 1308,
        "SN": "Urmston",
        "PE": 927,
        "QL": 1250,
        "AC": 1266,
        "PB": "£350k-£650k",
        "PBR": 575
    },
    {
        "UID": 1309,
        "OR": 1309,
        "SN": "West Bromwich (East)",
        "PE": 378,
        "QL": 1308,
        "AC": 1347,
        "PB": "Up to £350k",
        "PBR": 627
    },
    {
        "UID": 1310,
        "OR": 1310,
        "SN": "Keyworth",
        "PE": 1332,
        "QL": 1046,
        "AC": 1133,
        "PB": "£350k-£650k",
        "PBR": 576
    },
    {
        "UID": 1311,
        "OR": 1311,
        "SN": "South Milford",
        "PE": 1282,
        "QL": 846,
        "AC": 1215,
        "PB": "Up to £350k",
        "PBR": 628
    },
    {
        "UID": 1312,
        "OR": 1312,
        "SN": "North Baddesley",
        "PE": 954,
        "QL": 1089,
        "AC": 1311,
        "PB": "£350k-£650k",
        "PBR": 577
    },
    {
        "UID": 1313,
        "OR": 1313,
        "SN": "New Marske",
        "PE": 880,
        "QL": 1229,
        "AC": 1297,
        "PB": "Up to £350k",
        "PBR": 629
    },
    {
        "UID": 1314,
        "OR": 1314,
        "SN": "Bagshot",
        "PE": 1117,
        "QL": 1354,
        "AC": 1035,
        "PB": "£350k-£650k",
        "PBR": 578
    },
    {
        "UID": 1315,
        "OR": 1315,
        "SN": "Cramlington",
        "PE": 1150,
        "QL": 591,
        "AC": 1332,
        "PB": "Up to £350k",
        "PBR": 630
    },
    {
        "UID": 1316,
        "OR": 1316,
        "SN": "Cambourne",
        "PE": 1290,
        "QL": 891,
        "AC": 1208,
        "PB": "£350k-£650k",
        "PBR": 579
    },
    {
        "UID": 1317,
        "OR": 1317,
        "SN": "Seghill",
        "PE": 1195,
        "QL": 189,
        "AC": 1370,
        "PB": "Up to £350k",
        "PBR": 631
    },
    {
        "UID": 1318,
        "OR": 1318,
        "SN": "Knebworth",
        "PE": 1066,
        "QL": 1369,
        "AC": 983,
        "PB": "£350k-£650k",
        "PBR": 580
    },
    {
        "UID": 1319,
        "OR": 1319,
        "SN": "Shepshed",
        "PE": 1326,
        "QL": 1283,
        "AC": 1009,
        "PB": "Up to £350k",
        "PBR": 632
    },
    {
        "UID": 1320,
        "OR": 1320,
        "SN": "Barlestone",
        "PE": 1305,
        "QL": 968,
        "AC": 1199,
        "PB": "Up to £350k",
        "PBR": 633
    },
    {
        "UID": 1321,
        "OR": 1321,
        "SN": "Corby",
        "PE": 1371,
        "QL": 555,
        "AC": 1255,
        "PB": "Up to £350k",
        "PBR": 634
    },
    {
        "UID": 1322,
        "OR": 1322,
        "SN": "Stanford-le-Hope",
        "PE": 1064,
        "QL": 1313,
        "AC": 1178,
        "PB": "£350k-£650k",
        "PBR": 581
    },
    {
        "UID": 1323,
        "OR": 1323,
        "SN": "Coseley",
        "PE": 592,
        "QL": 1201,
        "AC": 1360,
        "PB": "Up to £350k",
        "PBR": 635
    },
    {
        "UID": 1324,
        "OR": 1324,
        "SN": "Anstey",
        "PE": 1350,
        "QL": 1199,
        "AC": 1080,
        "PB": "Up to £350k",
        "PBR": 636
    },
    {
        "UID": 1325,
        "OR": 1325,
        "SN": "North Ferriby",
        "PE": 921,
        "QL": 1364,
        "AC": 1156,
        "PB": "Up to £350k",
        "PBR": 637
    },
    {
        "UID": 1326,
        "OR": 1326,
        "SN": "Llanharry",
        "PE": 1073,
        "QL": 1372,
        "AC": 955,
        "PB": "Up to £350k",
        "PBR": 638
    },
    {
        "UID": 1327,
        "OR": 1327,
        "SN": "Kennington",
        "PE": 625,
        "QL": 1353,
        "AC": 1294,
        "PB": "£350k-£650k",
        "PBR": 582
    },
    {
        "UID": 1328,
        "OR": 1328,
        "SN": "Chadwell St Mary",
        "PE": 995,
        "QL": 1153,
        "AC": 1308,
        "PB": "£350k-£650k",
        "PBR": 583
    },
    {
        "UID": 1329,
        "OR": 1329,
        "SN": "Ravenshead",
        "PE": 1250,
        "QL": 1139,
        "AC": 1197,
        "PB": "£350k-£650k",
        "PBR": 584
    },
    {
        "UID": 1330,
        "OR": 1330,
        "SN": "Sedgley",
        "PE": 1164,
        "QL": 791,
        "AC": 1327,
        "PB": "Up to £350k",
        "PBR": 639
    },
    {
        "UID": 1331,
        "OR": 1331,
        "SN": "Canvey Island",
        "PE": 591,
        "QL": 1234,
        "AC": 1361,
        "PB": "£350k-£650k",
        "PBR": 585
    },
    {
        "UID": 1332,
        "OR": 1332,
        "SN": "Undy",
        "PE": 982,
        "QL": 1367,
        "AC": 1125,
        "PB": "£350k-£650k",
        "PBR": 586
    },
    {
        "UID": 1333,
        "OR": 1333,
        "SN": "Wednesbury",
        "PE": 904,
        "QL": 1233,
        "AC": 1318,
        "PB": "Up to £350k",
        "PBR": 640
    },
    {
        "UID": 1334,
        "OR": 1334,
        "SN": "Radcliffe on Trent",
        "PE": 1009,
        "QL": 1368,
        "AC": 1110,
        "PB": "£350k-£650k",
        "PBR": 587
    },
    {
        "UID": 1335,
        "OR": 1335,
        "SN": "Billingham",
        "PE": 833,
        "QL": 1309,
        "AC": 1288,
        "PB": "Up to £350k",
        "PBR": 641
    },
    {
        "UID": 1336,
        "OR": 1336,
        "SN": "Great Glen",
        "PE": 1367,
        "QL": 1332,
        "AC": 915,
        "PB": "£350k-£650k",
        "PBR": 588
    },
    {
        "UID": 1337,
        "OR": 1336,
        "SN": "Coxhoe",
        "PE": 1111,
        "QL": 662,
        "AC": 1349,
        "PB": "Up to £350k",
        "PBR": 642
    },
    {
        "UID": 1338,
        "OR": 1336,
        "SN": "Featherstone (South Staffordshire)",
        "PE": 928,
        "QL": 844,
        "AC": 1364,
        "PB": "Up to £350k",
        "PBR": 642
    },
    {
        "UID": 1339,
        "OR": 1339,
        "SN": "Calverton",
        "PE": 1291,
        "QL": 883,
        "AC": 1250,
        "PB": "Up to £350k",
        "PBR": 644
    },
    {
        "UID": 1340,
        "OR": 1340,
        "SN": "North Hykeham",
        "PE": 1120,
        "QL": 1350,
        "AC": 1130,
        "PB": "Up to £350k",
        "PBR": 645
    },
    {
        "UID": 1341,
        "OR": 1341,
        "SN": "Goldthorpe",
        "PE": 1190,
        "QL": 644,
        "AC": 1335,
        "PB": "Up to £350k",
        "PBR": 646
    },
    {
        "UID": 1342,
        "OR": 1342,
        "SN": "Stilton",
        "PE": 1368,
        "QL": 1341,
        "AC": 924,
        "PB": "£350k-£650k",
        "PBR": 589
    },
    {
        "UID": 1343,
        "OR": 1343,
        "SN": "Whitnash",
        "PE": 1145,
        "QL": 1120,
        "AC": 1281,
        "PB": "£350k-£650k",
        "PBR": 590
    },
    {
        "UID": 1344,
        "OR": 1344,
        "SN": "Wideopen",
        "PE": 1044,
        "QL": 895,
        "AC": 1351,
        "PB": "Up to £350k",
        "PBR": 647
    },
    {
        "UID": 1345,
        "OR": 1345,
        "SN": "Markfield",
        "PE": 1333,
        "QL": 1229,
        "AC": 1145,
        "PB": "£350k-£650k",
        "PBR": 591
    },
    {
        "UID": 1346,
        "OR": 1346,
        "SN": "Fleckney",
        "PE": 1358,
        "QL": 1215,
        "AC": 1136,
        "PB": "£350k-£650k",
        "PBR": 592
    },
    {
        "UID": 1347,
        "OR": 1347,
        "SN": "Sileby",
        "PE": 1364,
        "QL": 1306,
        "AC": 1018,
        "PB": "Up to £350k",
        "PBR": 648
    },
    {
        "UID": 1348,
        "OR": 1348,
        "SN": "Berinsfield",
        "PE": 757,
        "QL": 1051,
        "AC": 1372,
        "PB": "£350k-£650k",
        "PBR": 593
    },
    {
        "UID": 1349,
        "OR": 1349,
        "SN": "Carlton (Gedling)",
        "PE": 1163,
        "QL": 1221,
        "AC": 1245,
        "PB": "Up to £350k",
        "PBR": 649
    },
    {
        "UID": 1350,
        "OR": 1350,
        "SN": "Beddau",
        "PE": 1177,
        "QL": 921,
        "AC": 1325,
        "PB": "Up to £350k",
        "PBR": 650
    },
    {
        "UID": 1351,
        "OR": 1351,
        "SN": "Longbenton",
        "PE": 1209,
        "QL": 1053,
        "AC": 1286,
        "PB": "Up to £350k",
        "PBR": 651
    },
    {
        "UID": 1352,
        "OR": 1352,
        "SN": "Elton",
        "PE": 1352,
        "QL": 828,
        "AC": 1293,
        "PB": "Up to £350k",
        "PBR": 652
    },
    {
        "UID": 1353,
        "OR": 1353,
        "SN": "Arnold",
        "PE": 1285,
        "QL": 1038,
        "AC": 1277,
        "PB": "Up to £350k",
        "PBR": 653
    },
    {
        "UID": 1354,
        "OR": 1354,
        "SN": "Papworth Everard",
        "PE": 1296,
        "QL": 1190,
        "AC": 1228,
        "PB": "£350k-£650k",
        "PBR": 594
    },
    {
        "UID": 1355,
        "OR": 1355,
        "SN": "Armthorpe",
        "PE": 1297,
        "QL": 765,
        "AC": 1331,
        "PB": "Up to £350k",
        "PBR": 654
    },
    {
        "UID": 1356,
        "OR": 1356,
        "SN": "Moorends",
        "PE": 1337,
        "QL": 344,
        "AC": 1365,
        "PB": "Up to £350k",
        "PBR": 655
    },
    {
        "UID": 1357,
        "OR": 1357,
        "SN": "Great Notley",
        "PE": 1216,
        "QL": 1044,
        "AC": 1326,
        "PB": "£350k-£650k",
        "PBR": 595
    },
    {
        "UID": 1358,
        "OR": 1357,
        "SN": "Church Village",
        "PE": 1185,
        "QL": 1160,
        "AC": 1312,
        "PB": "Up to £350k",
        "PBR": 656
    },
    {
        "UID": 1359,
        "OR": 1359,
        "SN": "Ratby",
        "PE": 1341,
        "QL": 1086,
        "AC": 1272,
        "PB": "£350k-£650k",
        "PBR": 596
    },
    {
        "UID": 1360,
        "OR": 1360,
        "SN": "Thornton (Wyre)",
        "PE": 991,
        "QL": 1205,
        "AC": 1356,
        "PB": "Up to £350k",
        "PBR": 657
    },
    {
        "UID": 1361,
        "OR": 1361,
        "SN": "Binley Woods",
        "PE": 1265,
        "QL": 840,
        "AC": 1341,
        "PB": "£350k-£650k",
        "PBR": 597
    },
    {
        "UID": 1362,
        "OR": 1362,
        "SN": "Holton le Clay",
        "PE": 875,
        "QL": 1345,
        "AC": 1328,
        "PB": "Up to £350k",
        "PBR": 658
    },
    {
        "UID": 1363,
        "OR": 1363,
        "SN": "Cherry Willingham",
        "PE": 1173,
        "QL": 1327,
        "AC": 1248,
        "PB": "Up to £350k",
        "PBR": 659
    },
    {
        "UID": 1364,
        "OR": 1364,
        "SN": "New Waltham",
        "PE": 893,
        "QL": 1352,
        "AC": 1334,
        "PB": "Up to £350k",
        "PBR": 660
    },
    {
        "UID": 1365,
        "OR": 1365,
        "SN": "Bracebridge Heath",
        "PE": 1243,
        "QL": 1340,
        "AC": 1237,
        "PB": "Up to £350k",
        "PBR": 661
    },
    {
        "UID": 1366,
        "OR": 1366,
        "SN": "Copmanthorpe",
        "PE": 1224,
        "QL": 1357,
        "AC": 1240,
        "PB": "£350k-£650k",
        "PBR": 598
    },
    {
        "UID": 1367,
        "OR": 1367,
        "SN": "Cuffley",
        "PE": 1230,
        "QL": 1148,
        "AC": 1357,
        "PB": "Over £650k",
        "PBR": 108
    },
    {
        "UID": 1368,
        "OR": 1368,
        "SN": "Bar Hill",
        "PE": 1320,
        "QL": 850,
        "AC": 1367,
        "PB": "£350k-£650k",
        "PBR": 599
    },
    {
        "UID": 1369,
        "OR": 1369,
        "SN": "Blackheath",
        "PE": 1240,
        "QL": 1248,
        "AC": 1342,
        "PB": "Up to £350k",
        "PBR": 662
    },
    {
        "UID": 1370,
        "OR": 1370,
        "SN": "Groby",
        "PE": 1345,
        "QL": 1317,
        "AC": 1264,
        "PB": "£350k-£650k",
        "PBR": 600
    },
    {
        "UID": 1371,
        "OR": 1371,
        "SN": "Northampton (South Northamptonshire)",
        "PE": 1303,
        "QL": 1351,
        "AC": 1237,
        "PB": "£350k-£650k",
        "PBR": 601
    },
    {
        "UID": 1372,
        "OR": 1372,
        "SN": "East Goscote",
        "PE": 1369,
        "QL": 1221,
        "AC": 1353,
        "PB": "£350k-£650k",
        "PBR": 602
    },
    {
        "UID": 1373,
        "OR": 1373,
        "SN": "Lightwater",
        "PE": 1097,
        "QL": 1373,
        "AC": 1363,
        "PB": "£350k-£650k",
        "PBR": 603
    }
]

export default data;