import React, { Component } from 'react';
import Header from '../widgets/header';
import * as apis from '../../api/api';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import '../../App.css';
import swal from 'sweetalert';


class Favorites extends Component {
    state = {
        albums: []
    }

    componentDidMount() {
        let favorites = apis.getFavorites();
        this.setState({
            albums: JSON.parse(favorites)
        })
    }

    removeFromFavorite = () => {
        alert('remove track')
    }

    renderAlbums = () => {
        const { albums } = this.state;
        return albums && albums.length ?
            albums.map((item, index) => (
                <div key={index} className="col-md-3 mb-2 cardfor">
                    <div className="card border-danger allplayer p-1" style={{ backgroundImage: 'url(' + item.album.cover_big + ')' }} >
                        <div className="card-body player-info">

                            <div class="d-flex bd-highlight title-info">
                                <div class="bd-highlight">{item.title}</div>
                                <div class="ml-auto bd-highlight"> {parseInt((item.duration) / 60)}:{item.duration - (parseInt(Math.ceil(item.duration) / 60) * 60)}</div>
                            </div>

                            <p className="aritst-name">{item.artist.name}</p>

                            <div className="links">
                                <Link to={`/details/${item.album.id}`} className="link"><i class="fas fa-compact-disc text-white"></i> </Link>
                                <a onClick={() => this.removeFromFavorite()} className="link"><i className="fas fa-star text-danger"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            : <p>LOADING</p>
    }

    render() {
        return (
            <div className="container-fluid yoyo">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        FAVORITES
                        <div className="row">
                            {this.renderAlbums()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Favorites;