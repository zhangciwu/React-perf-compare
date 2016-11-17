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
    seatIds: seats.map(s => s.id),
    selectedSeatIds: [],
}

export default function home (state = initialState, action) {
    switch (action.type) {
        case 'SELECT_SEAT_BEFORE':
            return Object.assign({}, state, {
                selectedSeatIds: action.selectedSeatIds,
            })
        case 'SELECT_SEAT':
            return Object.assign({}, state, {
                seats: action.seats,
                selectedSeatIds: action.selectedSeatIds,
            })
        default:
            return state
    }
}