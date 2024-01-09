import { Fragment, Component } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context'

class UserFinder extends Component {
    //can only be called once
    static contextType = UsersContext

    constructor() {
        super()
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        //only runs once
        //send http requests....
        this.setState({ filteredUsers: this.context.users })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {

            this.setState({
                filteredUsers: this.context.users.filter((user) =>
                    user.name.includes(this.state.searchTerm))
            })
        }
    }

    searchChangeHandler(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <Fragment>
                {/* <UsersContext.Consumer> */}
                <div className={classes.finder}>
                    <input type='search'
                        onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
                {/* </UsersContext.Consumer> */}
            </Fragment>
        );
    }
}


export default UserFinder;