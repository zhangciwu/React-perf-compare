import { createSelector } from 'reselect'

const getSeats = state => state.before.seats
const getSelectedSeatIds = state => state.before.selectedSeatIds

export default createSelector(
    getSeats,
    getSelectedSeatIds,
    (seats, selectedSeatIds) => {
        seats = seats.map(seat => {
            const _seat = {...seat}
            if (selectedSeatIds.indexOf(_seat.id) !== -1){
                _seat.color = 'red'
            }
            return _seat
        })
        return {
            seats,
        }
    }
)
