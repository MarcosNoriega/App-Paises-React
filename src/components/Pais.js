import React, { Component } from 'react'
import axios from 'axios';

export default class Pais extends Component {

    state = {
        pais: {},
        loading: true
    }

    componentDidMount() {
        this.getPais(this.props.match.params.codigo);
    }

    getPais = async (codigo) => {
        let res = await axios.get(`https://restcountries.eu/rest/v2/name/${codigo}`);

        this.setState({pais: res.data[0], loading: false});
    }

    render() {
        if (this.state.loading) {
            return(
                <div className="container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-2">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
        return (
            <div className="container mt-4">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={this.state.pais.flag} class="card-img" alt="..." />
                        </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.pais.name}</h5>
                                    <p className="card-text">La capital de {this.state.pais.name} es {this.state.pais.capital} y su población es de {this.state.pais.population} de habitantes.</p>
                                    <p>{this.state.pais.name} posee un superficie de {this.state.pais.area} km2.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
