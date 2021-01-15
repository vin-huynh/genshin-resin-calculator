const elite = {
    1: {
        primary: [2.15,0.00,0.00,0.00],
        secondary: 1.69, 
        mora: 3450
    },
    2: {
        primary: [1.11,1.24,0.00,0.00],
        secondary: 1.60,
        mora: 3650
    },
    3: {
        primary: [1.18,1.34,0.00,0.00],
        secondary: 1.96,
        mora: 3850
    },
    4: {
        primary: [1.47,1.43,0.08,0.00],
        secondary: 2.02,
        mora: 4125
    },
    5: {
        primary: [1.74,1.44,0.11,0.00],
        secondary: 2.23,
        mora: 4450
    },
    6: {
        primary: [1.93,1.56,0.12,0.01],
        secondary: 2.37,
        mora: 4725
    },
    7: {
        primary: [2.15,1.61,0.13,0.02],
        secondary: 2.55,
        mora: 5200
    },
    8: {
        primary: [2.15,1.50,0.18,0.04],
        secondary: 2.54,
        mora: 6000
    }
}

const weekly = {
    1: {
        primary: [2.71,0.00,0.00,0.00],
        secondary: 0.00, 
        mora: 6075
    },
    2: {
        primary: [1.78,1.91,0.00,0.00],
        secondary: 0.00, 
        mora: 6375
    },
    3: {
        primary: [2.37,1.80,0.00,0.00],
        secondary: 0.00, 
        mora: 6675
    },
    4: {
        primary: [2.77,1.67,0.18,0.00],
        secondary: 0.00, 
        mora: 7100
    },
    5: {
        primary: [3.08,1.77,0.23,0.00],
        secondary: 1.01, 
        mora: 7600
    },
    6: {
        primary: [3.46,1.91,0.22,0.02],
        secondary: 1.53, 
        mora: 8000
    },
    7: {
        primary: [3.82,2.01,0.26,0.04],
        secondary: 2.11, 
        mora: 8100
    },
    8: {
        primary: [4.07,1.71,0.21,0.07],
        secondary: 2.29, 
        mora: 9000
    }
}

const leyLines = {
    1: {
        exp: 38500,
        mora: 20000
    },
    2: {
        exp: 52500,
        mora: 28000
    },
    3: {
        exp: 67500,
        mora: 36000
    },
    4: {
        exp: 82500,
        mora: 44000
    },
    5: {
        exp: 102500,
        mora: 52000
    },
    6: {
        exp: 122500,
        mora: 60000
    },
    7: {
        exp: 122500,
        mora: 60000
    },
    8: {
        exp: 122500,
        mora: 60000
    }
}

const mastery = {
    1: {
        primary: [0.00,0.00,0.00],
        mora: 1575
    },
    2: {
        primary: [2.58,1.00,0.00],
        mora: 1800
    },
    3: {
        primary: [1.80,1.99,0.00],
        mora: 2050
    },
    4: {
        primary: [2.19,1.99,0.22],
        mora: 2375
    }
}

const forgery = {
    1: {
        primary: [4.78,0.00,0.00,0.00],
        mora: 1125
    },
    2: {
        primary: [2.55,2.00,0.00,0.00],
        mora: 1550
    },
    3: {
        primary: [2.26,2.73,0.24,0.00],
        mora: 1850
    },
    4: {
        primary: [2.19,2.41,0.62,0.07],
        mora: 2200
    }
}

const dropTables = {
    elite: elite,
    weekly: weekly,
    leyLines: leyLines,
    mastery: mastery,
    forgery: forgery
}

export default dropTables;