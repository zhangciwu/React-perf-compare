import connect from 'utils/connect'
import beforeSelector from 'app/selectors/before'

@connect(beforeSelector)
export default class Seats extends React.Component {
    selectSeat = id => {
        console.time('update')
        this.props.actions.selectSeatBefore(id)
    }

    componentDidMount() {
        console.timeEnd('initial')
    }

    render() {
        console.time('initial')
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
