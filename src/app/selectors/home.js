import { createSelector } from 'reselect'

const getSeats = state => state.home.seats
const getSeatIds = state => state.home.seatIds
const getSelectedSeatIds = state => state.home.selectedSeatIds

const getSeat = (state, id) => {
    const seat = state.home.seats[id]
    const isAvailable = state.home.selectedSeatIds.indexOf(id) === -1
    return isAvailable ? seat : Object.assign({}, seat, {
        color: 'red',
    })
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
    const mapStateToProps = (state) => {
        return getSeat(state, id)
    }
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
