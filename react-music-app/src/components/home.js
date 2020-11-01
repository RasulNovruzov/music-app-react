import React, { Component } from 'react';
import Header from './widgets/header';
import * as apis from '../api/api';
import { Link } from 'react-router-dom';
import Search from './searchBar/searchBar';
import swal from 'sweetalert';
import { gsap } from "gsap";
import './../App.css'

class Home extends Component {
    state = {
        albums: []
    }

    componentDidMount() {
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

        tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
        tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
        tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
        tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
        tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

        apis.getAlbums().then(item => this.setState({
            albums: item
        }));
    }
   
    checkAlbum = (albums, album) => {
        let found = albums.some(function (item) {
            return item.album.id === album.album.id
        });
        return found;
    }

    addToFavorites = (album) => {
        let oldFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (this.checkAlbum(oldFavorites, album)) {
            swal({
                title: 'albom suwestvuet',
                text: 'albom dobavlen v izbrannoe',
                icon: 'warning'
            })
            return false;
        }
        oldFavorites.push(album);
        
        let favorites = oldFavorites;
        localStorage.setItem('favorites', JSON.stringify(favorites));
        swal({
            title: 'Albom dobavlen',
            text: 'dobavlen',
            icon: 'success'
        })
    }

    renderAlbums = (item) => {
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
                                <a onClick={() => this.addToFavorites(item)} className="link"><i className="fas fa-star text-danger"></i></a>
                            </div>
                        </div>


                    </div>
                </div>
            ))
            : <p>LOADING</p>
    }

    searchAlbums = (term) => {
        apis.getAlbums(term).then(item => this.setState({
            albums: item
        }))
    }

    render() {
        return (
            <div>

                <div className="landing">
                    <h1 id="logo">LOGO</h1>
                    <nav>
                        <ul class="snip1143">
                            <li class="current"><a href="/" data-hover="Home">Home</a></li>
                            <li><a href="#" data-hover="About Us">About Us</a></li>
                            <li><a href="/favorites" data-hover="FAVORITES">fAVORITES</a></li>
                            <li><a href="#" data-hover="Services">Services</a></li>
                            <li><a href="#" data-hover="Products">Products</a></li>
                            <li><a href="/contacts" data-hover="Contact">Contact</a></li>
                        </ul>
                    </nav>
                    <p className="welcome-text">WELCOME TO ...</p>
                </div>

                <div className="intro">
                    <div className="intro-text">
                        <h1 className="hide">
                            <span className="text">Music App</span>
                        </h1>
                        <h1 className="hide">
                            <span className="text">Develop by NovDev</span>
                        </h1>
                    </div>
                </div>

                <div className="slider"></div>


                <div className="container-fluid p-5">
                    <div className="row mt-4">
                        <div className="col-md-10 mx-auto">
                            <Header />
                            <Search searchAlbums={this.searchAlbums} />
                            <div className="row">
                                {this.renderAlbums()}
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}


export default Home;