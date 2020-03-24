import React,{ Component} from 'react';
//import api from '../../services/api';
import apiPeople from '../../services/apiPeople'
import {Link} from 'react-router-dom';
import './styles.css';

export default class People extends Component {
    state = {
        people:[],
        
    };
    
    componentDidMount (){

        
        this.loadProducts();

    }
    
    loadProducts = async () => {
        
        const response = await apiPeople.get();

        

        const {people} = response.data;

        
        this.setState({people});
    };


    render(){
        
        const { people } = this.state;
        
        
        return(
            <div className="product-info">
                <h1>{people.nome}</h1>
                <p>{people.razao}</p>
                <p>
                    URL <a href={people.descricaoAtividade}>{people.descricaoAtividade}</a>
                </p>
            </div>

        )
    }
}
    