import React, {useEffect, useState} from 'react';
import Pokemon from './components/Pokemon';
import './App.css';

const App = () => {

    const pokemon = ''
    const axios = require('axios');

    const [datos,
        setData] = useState([]);

    const [search,
        setSearch] = useState('');

    const [query,
        setQuery] = useState('squirtle');

    useEffect(() => {
        getPokemon();
    }, [query]);

    const getPokemon = () => {
        axios
            .get(`https://api.pokemontcg.io/v1/cards?name=${query}`)
            .then((response) => {
                setData(response.data.cards);
            });
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div className="App">

            <form onSubmit={getSearch} className='form-inline'>
                <input
                    className="search-bar form-control"
                    type="text"
                    value={search}
                    onChange={updateSearch}/>
                <button className="search-button btn btn-primary" type="submit">Search</button>
            </form>
            <hr/>
            <div className="row">
                {datos.map(pk => (<Pokemon key={pk.id} img={pk.imageUrl} name={pk.name} attacks={pk.attacks} series={pk.series}/>))}
            </div>
        </div>
    );
};
export default App;
