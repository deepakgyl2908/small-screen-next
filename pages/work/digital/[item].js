import React from 'react';
import ReactPlayer from 'react-player';
import Head from 'next/head';
import Router, { withRouter } from 'next/router';

const list = [
    {
        url: "8N4Wsio07ps",
        img: "/img/work/digital/hitachi_suraj.jpg"
    },
    {
        url: "vHavQ9DETgA",
        img: "/img/work/digital/hitachi_fresh.jpg"
    },
    {
        url: "UVZMxQYT3Z4",
        img: "/img/work/digital/hitachi_clean.jpg"
    },
    {
        url: "MTi4xgzOCzw",
        img: "/img/work/digital/coke.jpg"
    },
    {
        url: "SAM6ElQtuiI",
        img: "/img/work/digital/coke2.jpg"
    },
    {
        url: "JMJSwJGsYDg",
        img: "/img/work/digital/lenscrafters.jpg"
    },
    {
        url: "ZL93OBAE010",
        img: "/img/work/digital/park_hotel.jpg"
    },
    {
        url: "qOj_5UskS40",
        img: "/img/work/digital/zomato.jpg"
    },
    {
        url: "5WDwND4bMK8",
        img: "/img/work/digital/groom.jpg"
    },
    {
        url: "LqmJWVzQH-w",
        img: "/img/work/digital/chivas.jpg"
    },
    {
        url: "SoXab55SrBU",
        img: "/img/work/digital/ted.jpg"
    },
    {
        url: "BSn9BZNblI0",
        img: "/img/work/digital/bpft.jpg"
    },
    {
        url: "nOHQOT7m-_Q",
        img: "/img/work/digital/asian_paints.jpg"
    },
    {
        url: "DNsKrXtknmM",
        img: "/img/work/digital/glenlivet.jpg"
    },
    {
        url: "frB8Y0YMKEU",
        img: "/img/work/digital/kfc.jpg"
    },
    {
        url: "SzVGi9gvZvw",
        img: "/img/work/digital/mother_dairy.jpg"
    },
    {
        url: "7B0yr1pk1Ko",
        img: "/img/work/digital/maggi.jpg"
    },
    {
        url: "wavtZjBF8W0",
        img: "/img/work/digital/milkmaid.jpg"
    },
    {
        url: "uNLBSHU4ld4",
        img: "/img/work/digital/mothers_recipe.jpg"
    },
    {
        url: "vpuMMgB_gDM",
        img: "/img/work/digital/google.jpg"
    }
]

class WorkTVCGalleryPage extends React.Component {

    static getInitialProps({ pathname }) {
        return { pathname }
    }

    constructor(props) {
        super(props);

        let currentSlide = 0;

        if (this.props.router.query.item === "hitachi_suraj") {
            currentSlide = 0;
        } else if (this.props.router.query.item === "hitachi_fresh") {
            currentSlide = 1;
        } else if (this.props.router.query.item === "hitachi_clean") {
            currentSlide = 2;
        } else if (this.props.router.query.item === "coke") {
            currentSlide = 3;
        } else if (this.props.router.query.item === "coke2") {
            currentSlide = 4;
        } else if (this.props.router.query.item === "lenscrafters") {
            currentSlide = 5;
        } else if (this.props.router.query.item === "park_hotel") {
            currentSlide = 6;
        } else if (this.props.router.query.item === "zomato") {
            currentSlide = 7;
        } else if (this.props.router.query.item === "groom_barabar") {
            currentSlide = 8;
        } else if (this.props.router.query.item === "chivas") {
            currentSlide = 9;
        } else if (this.props.router.query.item === "ted") {
            currentSlide = 10;
        } else if (this.props.router.query.item === "bpft") {
            currentSlide = 11;
        } else if (this.props.router.query.item === "asian_paints") {
            currentSlide = 12;
        } else if (this.props.router.query.item === "glenlivet") {
            currentSlide = 13;
        } else if (this.props.router.query.item === "kfc") {
            currentSlide = 14;
        } else if (this.props.router.query.item === "mother_dairy") {
            currentSlide = 15;
        } else if (this.props.router.query.item === "nestle") {
            currentSlide = 16;
        } else if (this.props.router.query.item === "nestle_milkmail") {
            currentSlide = 17;
        } else if (this.props.router.query.item === "mothers_recipe") {
            currentSlide = 18;
        } else if (this.props.router.query.item === "google_adwords") {
            currentSlide = 19;
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

                                    <div className="player-wrapper">
                                        <ReactPlayer
                                            id="video"
                                            url={`https://www.youtube.com/watch?v=${list[this.state.currentSlide].url}`}
                                            light={`${list[this.state.currentSlide].img}`}
                                            playing={true}
                                            controls={true}
                                            loop={true}
                                        />
                                        <div className="close-icon" onClick={() => Router.push('/work/digital')}></div>
                                    </div>
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