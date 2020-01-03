import React from 'react';
import axios from 'axios';
import { Loading } from './Loading';
class LaReact extends React.Component {
    constructor(props) {
        super(props)
        //state
        this.state = {
            users: [],
            loading: false
        }
        //bind
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    getUsrs() {
        this.setState({
            loading: true
        })
        axios('https://api.randomuser.me/?net=US&results=5')
            .then(response => this.setState({
                users: [...this.state.users, ...response.data.results],
                loading: false
            }))

    }
    handleSubmit(e) {
        e.preventDefault();
        this.getUsrs();
        console.log("more users loaded");
    }
    componentWillMount() {
        this.getUsrs();
    }

    render() {
        const { loading, users } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="load users" />
                </form>
                <hr />
                {!loading ?
                    users.map(user =>
                        (<div key={user.id.value}>
                            <h3 style={{ color: 'red' }}>{user.name.first}</h3>
                            {user.email}
                            <hr />

                        </div>))
                    : (<Loading msg='Loading.......' />)}
            </div>
        )
    }
}
export default LaReact;