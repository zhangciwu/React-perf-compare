import { createSelector } from 'reselect'

const getSeats = state => state.after.seats
const getSeatIds = state => state.after.seatIds
const getSelectedSeatIds = state => state.after.selectedSeatIds

const getSeat = (state, id) => {
    return state.after.seats[id]
}

const makeGetSeat = () => {
    return createSelector(
        getSeat,
        (seat) => {
            return {
                seat,
            }
        }
    )
}

export const makeMapStateToProps = (state, props) => {
    const {id} = props
    const getSeat = makeGetSeat()
    const mapStateToProps = (state) => getSeat(state, id)
    return mapStateToProps
}

export const makeSeatIds = createSelector(
    getSeatIds,
    (seatIds) => {
        return {
            seatIds,
        }
    }
)
