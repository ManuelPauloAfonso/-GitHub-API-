import React, {Component, useState} from 'react';
import api from '../../services/api';
import './style.css';




    




export default class DisplayModal extends Component{

    state = {
        repo: []
    };
    componentDidMount(){
        this.loadproducts();
    }
    loadproducts = async () =>{
        const response = await api.get();
        this.setState({repo: response.data});
        console.log(response.data[0])
    }
    render(){
        return (
            <div className="repo-list">
               {
                this.state.repo.map((repo, index) => {
                    return (
                        <article key={index}>
                            <strong>{repo.name}</strong>
                            <p>{repo.description}</p>
                            <p><a href={repo.html_url}>Ver no GitHub</a></p>
                            <button type="submit" className="btn">Mais Detlhes</button>                           
                        </article>
                    )

                    })
              }
            </div>
        )
    }
}