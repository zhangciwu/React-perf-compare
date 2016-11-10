export function selectSeat(id) {
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