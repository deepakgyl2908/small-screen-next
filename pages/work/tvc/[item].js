import React from 'react';
import ReactPlayer from 'react-player';
import Head from 'next/head';
import Router, { withRouter } from 'next/router';

const list = [
    {
        url: "MT-rczjBcjo",
        img: "/img/work/tvc/splender.jpg"
    },
    {
        url: "Y2QjClGHxPc",
        img: "/img/work/tvc/destini.jpg"
    },
    {
        url: "11PwsOX9_-E",
        img: "/img/work/tvc/india_homes.jpg"
    },
    {
        url: "LN5UfQo6y1k",
        img: "/img/work/tvc/uninor2.jpg"
    },
    {
        url: "qsNrax_7Ps8",
        img: "/img/work/tvc/dabur.jpg"
    }
]

class WorkTVCGalleryPage extends React.Component {

    static getInitialProps({ pathname }) {
        return { pathname }
    }

    constructor(props) {
        super(props);

        let currentSlide = 0;
        if (props.router.query.item === "spender") {
            currentSlide = 0;
        } else if (props.router.query.item === "destini") {
            currentSlide = 1;
        } else if (props.router.query.item === "india_homes") {
            currentSlide = 2;
        } else if (props.router.query.item === "uninor") {
            currentSlide = 3;
        } else if (props.router.query.item === "dabur") {
            currentSlide = 4;
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