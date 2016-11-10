const seats = Array.from({length: 1000}, (s, i) => ({id: i, color: 'gray'}))

const initialState = {
    seats,
    seatIds: seats.map(s => s.id),
    selectedSeatIds: [],
}

export default function home (state = initialState, action) {
    switch (action.type) {
        case 'SELECT_SEAT':
            return Object.assign({}, state, {
                seats: action.seats,
                selectedSeatIds: action.selectedSeatIds,
            })
        default:
            return state
    }
}