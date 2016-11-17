const seatLength = 1000
let seats = []
for (let i = 0; i < seatLength; i++) {
    seats.push({
        id: i,
        color: 'gray',
    })
}

const initialState = {
    seats,
    selectedSeatIds: [],
}

export default function beforeReducer(state = initialState, action) {
    switch(action.type) {
        case 'SELECT_SEAT_BEFORE':
            return Object.assign({}, state, {
                selectedSeatIds: action.selectedSeatIds,
            })
        default:
            return state
    }
}