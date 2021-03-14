import React from 'react';
import ReactPlayer from 'react-player';
import Head from 'next/head';
import Router, { withRouter } from 'next/router';

const list = [
    {
        url: "blvNooVEVRQ",
        img: "/img/work/brandFilms/hero.jpg"
    },
    {
        url: "KVWlpvQYAa8",
        img: "/img/work/brandFilms/hitachi.jpg"
    },
    {
        url: "Py-t0YHiTJQ",
        img: "/img/work/brandFilms/indigo.jpg"
    },
    {
        url: "0vPHDLbjDKk",
        img: "/img/work/brandFilms/hitachi_csr.jpg"
    },
    {
        url: "fzFtMyAjIi4",
        img: "/img/work/brandFilms/hero_insurance.jpg"
    },
    {
        url: "dJB9rgSinC8",
        img: "/img/work/brandFilms/hitachi_corporate.jpg"
    },
    {
        url: "0QfQmtfMbEU",
        img: "/img/work/brandFilms/afcons.jpg"
    },
    {
        url: "96MXTpzVQVM",
        img: "/img/work/brandFilms/dpworld.jpg"
    }
]

class WorkTVCGalleryPage extends React.Component {

    static getInitialProps({ pathname }) {
        return { pathname }
    }

    constructor(props) {
        super(props);

        let currentSlide = 0;

        if (this.props.router.query.item === "hero") {
            currentSlide = 0;
        } else if (this.props.router.query.item === "hitachi") {
            currentSlide = 1;
        } else if (this.props.router.query.item === "indigo") {
            currentSlide = 2;
        } else if (this.props.router.query.item === "hitachi_csr") {
            currentSlide = 3;
        } else if (this.props.router.query.item === "hero_insurance") {
            currentSlide = 4;
        } else if (this.props.router.query.item === "hitachi_corporate") {
            currentSlide = 5;
        } else if (this.props.router.query.item === "afcons") {
            currentSlide = 6;
        } else if (this.props.router.query.item === "dpworld") {
            currentSlide = 7;
        }

        this.state = {
            currentSlide: currentSlide
        }
    }

    updateVideo = (index) => {
        this.setState({
            currentSlide: index
        });
    }

    playNextVideo = () => {
        let nextSlideIndex = this.state.currentSlide + 1;
        if (nextSlideIndex < list.length) {
            this.updateVideo(nextSlideIndex);
        } else {
            this.updateVideo(0);
        }
    }

    playPreviousVideo = () => {
        let previousSlideIndex = this.state.currentSlide - 1;
        if (previousSlideIndex >= 0) {
            this.updateVideo(previousSlideIndex);
        } else {
            this.updateVideo(list.length - 1);
        }
    }


    render() {
        return (
            <div className="portfolio">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="title" content="Work - TVC Gallery" />
                    <meta name="description" content="small screen official website" />
                    <meta name="keywords" content="small screen" />
                    <meta name="author" content="small screen webmasters" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                    <script src="/js/simplePlayer.js"></script>
                </Head>
                <div className="color_band"></div>
                <section className="tvc-wrapper portfolio-wrapper">
                    <div className="right-icon-wrapper" onClick={() => this.playNextVideo()}>
                        <div className="arrow-right"></div>
                    </div>
                    <div className="left-icon-wrapper" onClick={() => this.playPreviousVideo()}>
                        <div className="arrow-left"></div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="video-container">
                                    <div className="close-icon" onClick={() => Router.push('/work/brandFilms')}></div>
                                    <ReactPlayer
                                        id="video"
                                        url={`https://www.youtube.com/watch?v=${list[this.state.currentSlide].url}`}
                                        light={`${list[this.state.currentSlide].img}`}
                                        playing={true}
                                        controls={true}
                                        loop={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container thumbnails">
                    {
                        list.map((item, index) => {
                            return (<div className="thumb" onClick={() => this.updateVideo(index)} key={index}>
                                <img className="poster" src={item.img} />
                                <img className="play-icon" src="../../img/play-button.png" />
                            </div>)
                        })
                    }
                </div>
            </div >
        )
    }
}

export default withRouter(WorkTVCGalleryPage);