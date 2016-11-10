import connect from 'utils/connect'
import homeSelector from 'app/selectors/home'

@connect(homeSelector)
export default class Home extends React.Component {
    selectSeat = id => {
        console.time('update')
        this.props.actions.selectSeatBefore(id)
    }

    render() {
        const {seats} = this.props

        return (
            <ul className="Seats">
                {
                    seats.map(seat => <Seat
                        key={seat.id}
                        seat={seat}
                        selectSeat={this.selectSeat}
                        />
                    )
                }
            </ul>
        )
    }
}

class Seat extends React.Component {
    componentDidUpdate() {
        console.timeEnd('update')
    }
    
    shouldComponentUpdate(nextProps) {
        const {seat} = this.props

        return nextProps.seat.id !== seat.id ||
            nextProps.seat.color !== seat.color
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
