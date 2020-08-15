import React, { useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import {addVillager} from '../../actions/villagerActions';
import { Link } from 'react-router-dom';

function VillagerSearch({villagers, island, addVillager}) {
  const [query, setQuery] = useState('')

  const searchResults = () => {
    return villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase()))
  }
  const handleAdd = (villagerId, islandId) => {
    addVillager(villagerId, islandId);
    window.location.reload(true);
  }

   const displayResults = () => {
    let results = searchResults();
      if (query === '') {
        return <div></div>
      } else {
        return  <ul>
            {results.map(villager => <li key={villager.id}> <Link to={`/villagers/${villager.id}`}      villagers={villagers} 
              className="link"> {villager.name} </Link> 
                <Button size="sm" variant="light"
                onClick={() => handleAdd(villager.id, island.id)}> Add Villager </Button> </li>)}
          </ul>

      }
    }
    
    return (
      <Col className="column">
        <input type="text" 
          className="searchbar"
          placeholder="Search villager by name..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} />

        {displayResults()}
      </Col>
    )
  }
  

export default connect(null, {addVillager})(VillagerSearch);