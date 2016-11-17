import connect from 'utils/connect'
import {connect as con} from 'react-redux'
import {makeSeatIds, makeMapStateToProps} from 'app/selectors/after'

// with average 427ms initial and 11ms in update

@connect(makeSeatIds)
export default class Seats extends React.Component {
    selectSeat = id => {
        console.time('update')
        this.props.actions.selectSeatAfter(id)
    }

    componentDidMount() {
        console.timeEnd('initial')
    }

    render() {
        console.time('initial')
        const {seatIds} = this.props

        return (
            <ul className="Seats">
                {
                    seatIds.map(id => <Seat
                        key={id}
                        id={id}
                        selectSeat={this.selectSeat}
                        />
                    )
                }
            </ul>
        )
    }
}

@con(makeMapStateToProps)
class Seat extends React.Component {
    componentDidUpdate() {
        console.timeEnd('update')
    }
    render() {
        const {seat, selectSeat} = this.props

        return (
            <li className="Seat"
                onClick={e => selectSeat(seat.id)}
                style={{background: seat.color}}></li>
        )
    }
}
