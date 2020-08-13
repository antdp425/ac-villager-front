import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addIsland} from '../../actions/islandActions';


function IslandInput({history, addIsland}) {

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [villager_ids, setVillagerIds] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    addIsland({
      name: name,
      owner: owner,
      villager_ids: villager_ids
    })
      history.push(`/islands`)
  }

    return (
      <>
        <h3>Create Island</h3>
        <form onSubmit={handleSubmit}>
          <label>Island Name: </label>
          <input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} /> 
            <br />
          <label>Owner's Name: </label>
          <input type='text' value={owner} name="owner" onChange={(e) => setOwner(e.target.value)} />
            <br />
            <label>Villager: </label>
            <input type="number" name="villager_ids" value={villager_ids} onChange={(e) => setVillagerIds(e.target.value)} /> 
            <br />
          <input type="submit" />
        </form>
      </>
    )
  }

  const mapStateToProps = state => {
    return {
      islands: state.islandReducer.islands
    }
  }


export default connect(mapStateToProps, {addIsland})(IslandInput);