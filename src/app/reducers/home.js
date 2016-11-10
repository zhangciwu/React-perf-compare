const seats = Array.from({length: 1000}, (s, i) => ({id: i, color: 'gray'}))

const initialState = {
    seats,
}

export default function home (state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}