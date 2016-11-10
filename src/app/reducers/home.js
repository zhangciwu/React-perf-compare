const seats = Array.from({length: 1000}, (s, i) => ({id: i, color: 'gray'}))

const initialState = {
    seats,
    seatIds: seats.map(s => s.id),
    selectedSeatIds: [],
}

export default function home (state = initialState, action) {
    switch (action.type) {
        case 'SELECT_SEAT':
            const index = state.selectedSeatIds.indexOf(action.id)
            if (index === -1) {
                return Object.assign({}, state, {
                    selectedSeatIds: [...state.selectedSeatIds, action.id]
                })
            }
            else {
                return Object.assign({}, state, {
                    selectedSeatIds: [...state.selectedSeatIds.slice(0, index), ...state.selectedSeatIds.slice(index + 1)]
                })
            }
        default:
            return state
    }
}