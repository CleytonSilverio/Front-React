import React, { Component } from 'react';
import api from "../../services/api.js";
export default class Casa extends Component {

    state = {
        casa: [],
    }

    componentDidMount(){
        this.loadCasas();
    }

    loadCasas = async () => {
        const response = await api.get('casacontroller');

        this.setState({casa: response.data});
    };

    render() {

        const {casa} = this.state;

        return (
        <div className="product-list row">{casa.map(casa =>
            <article key={casa.id} class="col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h5 >{casa.nome}</h5>
                        <p className="card-text">Endereço: {casa.endereco}</p>
                    </div>
                </div>
            </article>)}
            </div>
        )
    }
}