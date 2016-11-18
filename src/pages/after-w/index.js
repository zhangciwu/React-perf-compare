import connect from 'utils/connect'
import {connect as con} from 'react-redux'
import {makeSeatIds, makeMapStateToProps} from 'app/selectors/after'

@connect(makeSeatIds)
export default class Seats extends React.Component {
    selectSeat = id => {

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
                    seatIds.map(id => <SeatView
                        key={id}
                        id={id}
                        />
                    )
                }
            </ul>
        )
    }
}

class Seat{
    id:String;
    selected:Boolean;
    seatView:SeatView;
    constructor(id,seatView){
        this.id=id;
        this.selected=false;
        this.seatView=seatView;
    }

    click(){
        console.time('update')
        this.selected=!this.selected;
        this.seatView.setState({
            selected:this.selected
        })
    }

    color(){
        return this.selected?'red':'grey';
    }
}

class SeatView extends React.Component {
    seat:Seat;

    componentWillMount(){
        this.seat=new Seat(this.props.id,this);
    }

    componentDidUpdate() {
        console.timeEnd('update')
    }


    render() {
        const {seat, selectSeat} = this.props

        return (
            <li className="Seat"
                onClick={e => this.seat.click()}
                style={{background: this.seat.color()}}></li>
        )
    }
}
