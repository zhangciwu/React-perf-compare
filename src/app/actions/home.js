export function selectSeatBefore(id) {
    return (dispatch, getState) => {
        const {selectedSeatIds} = getState().home
        const index = selectedSeatIds.indexOf(id)

        if (index === -1) {
            const nextSelectedSeatIds = [
                ...selectedSeatIds,
                id,
            ]

            dispatch({
                type: 'SELECT_SEAT_BEFORE',
                selectedSeatIds: nextSelectedSeatIds,
            })
        }
        else {
            const nextSelectedSeatIds = [
                ...selectedSeatIds
            ].splice(id, 1)

            dispatch({
                type: 'SELECT_SEAT_BEFORE',
                selectedSeatIds: nextSelectedSeatIds,
            })
        }
    }
}

export function selectSeat2(id) {
    return (dispatch, getState) => {
        const {seats, selectedSeatIds} = getState().home
        const index = selectedSeatIds.indexOf(id)
        if (index === -1) {
            const nextSelectedSeatIds = [
                ...selectedSeatIds,
                id
            ]
            const nextSeat = Object.assign({}, seats[id], {
                color: 'red',
            })
            const nextSeats = [
                ...seats.slice(0, id),
                nextSeat,
                ...seats.slice(id + 1),
            ]
            dispatch({
                type: 'SELECT_SEAT',
                seats: nextSeats,
                selectedSeatIds: nextSelectedSeatIds,
            })
        }
        else {
            const nextSelectedSeatIds = [
                ...selectedSeatIds.slice(0, id),
                ...selectedSeatIds.slice(id + 1),
            ]
            const nextSeat = Object.assign({}, seats[id], {
                color: 'gray'
            })
            const nextSeats = [
                ...seats.slice(0, id),
                nextSeat,
                ...seats.slice(id + 1),
            ]

            dispatch({
                type: 'SELECT_SEAT',
                seats: nextSeats,
                selectedSeatIds: nextSelectedSeatIds,
            })
        }
    }
}