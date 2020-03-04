import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

export default class Paises extends Component {

    state = {
        paises: [],
        loading: true
    }

    componentDidMount() {
        if (!this.props.match.params.region) {
            this.getPaises();
        } else {
            this.getPaises(this.props.match.params.region);
        }
        
    }

    componentDidUpdate() {
        this.getPaises(this.props.match.params.region);
    }

    getPaises = async (region) => {
        if (!region) {
            let res = await axios("https://restcountries.eu/rest/v2/all");

            this.setState({paises: res.data, loading: false});
        } else {
            let res = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);

            this.setState({paises: res.data, loading: false});
        }
       

       
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
                <div className="card-columns">
                {
                    this.state.paises.map(pais => {
                        return(
                            <NavLink to={"/pais/" + pais.alpha3Code}>
                                <div className="card">
                                    <img src={pais.flag} alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <h1>{pais.name}</h1>
                                        
                                    </div>
                                </div>
                            </NavLink>
                           
                           
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
