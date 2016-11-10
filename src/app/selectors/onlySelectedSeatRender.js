import { createSelector } from 'reselect'

const getSeats = state => state.home.seats
const getSeatIds = state => state.home.seatIds
const getSelectedSeatIds = state => state.home.selectedSeatIds

const getSeat = (state, id) => {
    return state.home.seats[id]
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
