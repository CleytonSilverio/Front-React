import React, { Component } from 'react';
import api from '../../services/api'

export default class Shows extends Component {

    state = {
        shows: {},
    };

    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await api.get(`showrestcontroller/${id}`);

        this.setState({ shows: response.data });
    }

    render(){
        const { shows } = this.state;

        return (
            <div className="informacao">
                <h1>{shows.shows}</h1>
                <p>{shows.valor}</p>
                <p>{shows.local}</p>
                <p>{shows.estilo}</p>
            </div>
        );
    };
}