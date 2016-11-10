import connect from 'utils/connect'
import {connect as con} from 'react-redux'
import {makeSeatIds, makeMapStateToProps} from 'app/selectors/onlySelectedSeatRender'

@connect(makeSeatIds)
export default class Home extends React.Component {
    selectSeat = id => {
        console.time('update')
        this.props.actions.selectSeatAfter(id)
    }

    render() {
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
