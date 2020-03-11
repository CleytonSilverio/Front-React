import React, { Component } from 'react';
import api from "../../services/api.js";
import { Link } from 'react-router-dom';

export default class Main extends Component {

    state = {
        shows: [],
    }

    componentDidMount(){
        this.loadShows();
    }

    loadShows = async () => {
        const response = await api.get('showrestcontroller');
        this.setState({shows: response.data});
    };

    render() {

        const {shows} = this.state;

        return (
        <div className="product-list row">{
            shows.map(shows =>
            <article key={shows.id} className="col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{shows.shows}</h5>
                        <p className="card-text">Ingressos restantes: {shows.ingRestante}</p>
                        <p className="card-text">Valor: {shows.valor}</p>
                        <Link to={`/shows/${shows.id}`} className="btn btn-success btn-lg">Comprar</Link>
                    </div>
                </div>
            </article>)}
            </div>
        )
    }
}