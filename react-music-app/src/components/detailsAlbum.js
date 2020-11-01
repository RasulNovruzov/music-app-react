import React, { Component } from 'react';
import * as apis from '../api/api';
import Header from './widgets/header';


class DetailsAlbum extends Component {

    state = {
        album: '',
        tracks: []
    }

    componentDidMount() {
        apis.getAlbum(this.props.match.params.id).then(album => {
            this.setState({
                album,
                tracks: album.tracks.data
            })
        })
    }

    renderTracks = () => {
        const { tracks } = this.state;
        return tracks && tracks.length ?
            tracks.map((track, index) => (
                <figure className="figure" key={index}>
                    <figcaption className="figure-caption text-xs-right">{track.title} </figcaption>
                    <audio controls src={track.preview}>
                        sdclskdmclkdm
                        <code>code</code> html element
                    </audio>
                </figure>
            ))
            :
            null;
    }

    renderAlbum = () => {
        const { album } = this.state;
        return (
            <div className="col-md-12 mb-2">
                <div className="card border-danger">
                    <img className="card-img-top" src={album.cover_big} />
                    <div className="card-body">
                        <span className="text-primary">{album.release_date}</span>
                        <div className="card-title">
                            {album.title}
                        </div>
                         <h2>
                             Label : {album.label}
                         </h2>
                    </div>
                    <div className="card-footer">
                        {this.renderTracks()}
                    </div>
                </div>

            </div>
        )
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <Header />
                        <div className="row">
                            {this.renderAlbum()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsAlbum;