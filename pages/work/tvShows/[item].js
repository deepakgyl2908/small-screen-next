import React from 'react';
import ReactPlayer from 'react-player';
import Head from 'next/head';
import Router, { withRouter } from 'next/router';

const list = [
    {
        url: "oi3p3kSHwAc",
        img: "/img/work/tvShows/omg.jpg"
    },
    {
        url: "FJPZHuhSsDU",
        img: "/img/work/tvShows/great_britain.jpg"
    },
    {
        url: "j8ixjp_4oF4",
        img: "/img/work/tvShows/go_india.jpg"
    },
    {
        url: "LyBWW1vGCMk",
        img: "/img/work/tvShows/discovery.jpg"
    },
    {
        url: "vCgiTk4WgMI",
        img: "/img/work/tvShows/thalis.jpg"
    },
    {
        url: "NdRRqOlFmlQ",
        img: "/img/work/tvShows/bp.jpg"
    },
    {
        url: "4OrDTt7YZ2I",
        img: "/img/work/tvShows/oppo.jpg"
    },
    {
        url: "a5zsfKH_0yk",
        img: "/img/work/tvShows/highway_on_my_plate.jpg"
    },
    {
        url: "EFAIyAbmaNA",
        img: "/img/work/tvShows/vital_stats.jpg"
    },
    {
        url: "9s6tCxh26Pc",
        img: "/img/work/tvShows/new_india.jpg"
    },
    {
        url: "dnXBJOPKxC0",
        img: "/img/work/tvShows/whats_with.jpg"
    },
    {
        url: "jkQFBA1PMz4",
        img: "/img/work/tvShows/conde_nast.jpg"
    },
    {
        url: "qCsEkdtU6hY",
        img: "/img/work/tvShows/greenco.jpg"
    },
    {
        url: "PxvvifwjA6A",
        img: "/img/work/tvShows/ayurveda.jpg"
    },
    {
        url: "owy0ih3syDY",
        img: "/img/work/tvShows/god_of_grains.jpg"
    },
    {
        url: "PHKFWKkL7v0",
        img: "/img/work/tvShows/lufthansa.jpg"
    },
    {
        url: "dCPojHGYH0g",
        img: "/img/work/tvShows/loreal.jpg"
    }
]

class WorkTVCGalleryPage extends React.Component {

    static getInitialProps({ pathname }) {
        return { pathname }
    }

    constructor(props) {
        super(props);

        let currentSlide = 0;
        if (props.router.query.item === "omg") {
            currentSlide = 0;
        } else if (props.router.query.item === "great_britain") {
            currentSlide = 1;
        } else if (props.router.query.item === "go_india") {
            currentSlide = 2;
        } else if (props.router.query.item === "discovery") {
            currentSlide = 3;
        } else if (props.router.query.item === "thalis") {
            currentSlide = 4;
        } else if (props.router.query.item === "bp") {
            currentSlide = 5;
        } else if (props.router.query.item === "oppo") {
            currentSlide = 6;
        } else if (props.router.query.item === "highway_on_my_plate") {
            currentSlide = 7;
        } else if (props.router.query.item === "vital_stats") {
            currentSlide = 8;
        } else if (props.router.query.item === "new_india") {
            currentSlide = 9;
        } else if (props.router.query.item === "whats_with") {
            currentSlide = 10;
        } else if (props.router.query.item === "conde_nast") {
            currentSlide = 11;
        } else if (props.router.query.item === "greenco") {
            currentSlide = 12;
        } else if (props.router.query.item === "ayurveda") {
            currentSlide = 13;
        } else if (props.router.query.item === "god_of_grains") {
            currentSlide = 14;
        } else if (props.router.query.item === "lufthansa") {
            currentSlide = 15;
        } else if (props.router.query.item === "loreal") {
            currentSlide = 16;
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
            <div>
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
                <section className="tvc-wrapper portfolio-wrapper portfolio">
                    <div className="right-icon-wrapper" onClick={() => this.playNextVideo()}>
                        <div className="arrow-right"></div>
                    </div>
                    <div className="left-icon-wrapper" onClick={() => this.playPreviousVideo()}>
                        <div className="arrow-left"></div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 video-container">
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
                </section>
            </div >
        )
    }
}

export default withRouter(WorkTVCGalleryPage);