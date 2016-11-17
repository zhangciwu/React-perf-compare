import { Link } from 'react-router'

export default class App extends React.Component {
    render() {
        return (
            <ul>
                <li className="LinkItem"><Link to="/before">before</Link></li>
                <li className="LinkItem"><Link to="/after">after</Link></li>
            </ul>
        )
    }
}