const charAsc = {
    1:  {
        mora: 20000,
        primary: {
            rarity: 2,
            quantity: 1
        },
        secondary: {
            quantity: 0
        }
    },
    2:  {
        mora: 40000,
        primary: {
            rarity: 3,
            quantity: 3
        },
        secondary: {
            quantity: 2
        }
    },
    3:  {
        mora: 60000,
        primary: {
            rarity: 3,
            quantity: 6
        },
        secondary: {
            quantity: 4
        }
    },
    4:  {
        mora: 80000,
        primary: {
            rarity: 4,
            quantity: 3
        },
        secondary: {
            quantity: 8
        }
    },
    5: {
        mora: 100000,
        primary: {
            rarity: 4,
            quantity: 6
        },
        secondary: {
            quantity: 12
        }
    },
    6: {
        mora: 120000,
        primary: {
            rarity: 5,
            quantity: 6
        },
        secondary: {
            quantity: 20
        }
    }
}

const charExp = {
    20:  120000,
    40:  578000,
    50:  579000,
    60:  854000,
    70: 1195000,
    80: 1611000,
    90: 3423000
}

const weaponAsc = {
    1:  {
        mora: 5000,
        primary: {
            rarity: 2,
            quantity: 3
        }
    },
    2:  {
        mora: 15000,
        primary: {
            rarity: 3,
            quantity: 3
        }
    },
    3:  {
        mora: 20000,
        primary: {
            rarity: 3,
            quantity: 6
        }
    },
    4:  {
        mora: 30000,
        primary: {
            rarity: 4,
            quantity: 3
        }
    },
    5: {
        mora: 35000,
        primary: {
            rarity: 4,
            quantity: 6
        }
    },
    6: {
        mora: 45000,
        primary: {
            rarity: 5,
            quantity: 4
        }
    }
}

const weaponExp = {
    20:  121500,
    40:  622800,
    50:  628100,
    60:  927650,
    70: 1299050,
    80: 1750350,
    90: 3714750
}

const talentAsc = {
    2: {
        mora: 12500,
        primary: {
            rarity: 2,
            quantity: 3
        },
        secondary: {
            quantity: 0
        }
    },
    3: {
        mora: 17500,
        primary: {
            rarity: 3,
            quantity: 2
        },
        secondary: {
            quantity: 0
        }
    },
    4: {
        mora: 25000,
        primary: {
            rarity: 3,
            quantity: 4
        },
        secondary: {
            quantity: 0
        }
    },
    5: {
        mora: 30000,
        primary: {
            rarity: 3,
            quantity: 6
        },
        secondary: {
            quantity: 0
        }
    },
    6: {
        mora: 37500,
        primary: {
            rarity: 3,
            quantity: 9
        },
        secondary: {
            quantity: 0
        }
    },
    7: {
        mora: 120000,
        primary: {
            rarity: 4,
            quantity: 4
        },
        secondary: {
            quantity: 1
        }
    },
    8: {
        mora: 260000,
        primary: {
            rarity: 4,
            quantity: 6
        },
        secondary: {
            quantity: 1
        }
    },
    9: {
        mora: 450000,
        primary: {
            rarity: 4,
            quantity: 12
        },
        secondary: {
            quantity: 2
        }
    },
    10: {
        mora: 700000,
        primary: {
            rarity: 4,
            quantity: 16
        },
        secondary: {
            quantity: 2
        }
    }
}

const costData = {
    charAsc: charAsc,
    charExp: charExp,
    weaponAsc: weaponAsc,
    weaponExp: weaponExp,
    talentAsc: talentAsc
}

export default costData;