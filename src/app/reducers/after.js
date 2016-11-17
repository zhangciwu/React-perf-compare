import {SEAT_LENGTH} from 'utils/constants'
let seats = []
let seatIds = []
for (let i = 0; i < SEAT_LENGTH; i++) {
    seatIds.push(i)
    seats.push({
        id: i,
        color: 'gray',
    })
}

const initialState = {
    seats,
    seatIds,
    selectedSeatIds: [],
}

export default function beforeReducer(state = initialState, action) {
    switch(action.type) {
        case 'SELECT_SEAT_AFTER':
            return Object.assign({}, state, {
                seats: action.seats,
                selectedSeatIds: action.selectedSeatIds,
            })
        default:
            return state
    }
}