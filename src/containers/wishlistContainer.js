import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchWishlists, addWishlist, deleteWishlist} from '../actions/wishlistActions';
import {fetchVillagers} from '../actions/villagerActions'
import Navbar from '../components/Navbar'
import Wishlist from '../components/wishlists/Wishlist'
import Wishlists from '../components/wishlists/Wishlists'
import wishlistInput from '../components/wishlists/wishlistInput';
// import Villager from '../components/villagers/Villager'

class WishlistContainer extends React.Component {

  componentDidMount() {
    this.props.fetchWishlists()
    this.props.fetchVillagers()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path='/wishlists/new' 
            component={wishlistInput} addWishlist={addWishlist} />

          <Route exact path='/wishlists/:id'
            render={(routerProps) => 
              <Wishlist {...routerProps} 
                wishlists={this.props.wishlists} />}/>

          {/* <Route exact path='/wishlists/:id/villagers/:id' 
            render={(routerProps) => 
            <Villager {...routerProps} 
              villagers={this.props.wishlists.villagers} />}/> */}

          <Route path='/wishlists' 
            render={(routerProps) => 
              <Wishlists {...routerProps} 
                wishlists={this.props.wishlists} />} />
        </Switch>
      </div>
    )
  }


}

const mapStateToProps = state => {
  return {
    wishlists: state.wishlistReducer.islands
  }
}

export default connect(mapStateToProps, {fetchWishlists, addWishlist, deleteWishlist, fetchVillagers})(WishlistContainer);