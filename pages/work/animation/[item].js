import React from 'react';
import ReactPlayer from 'react-player';
import Head from 'next/head';
import Router, { withRouter } from 'next/router';

const list = [
    {
        url: "xDHCcm4guPU",
        img: "/img/work/animation/hero.jpg"
    },
    {
        url: "BD5NLqDX9J0",
        img: "/img/work/animation/hitachi_ac.jpg"
    },
    {
        url: "Me8P-Wr1uVA",
        img: "/img/work/animation/hitachi_iclean.jpg"
    },
    {
        url: "hksjP7L-F6U",
        img: "/img/work/animation/hitachi_odour.jpg"
    },
    {
        url: "TUeto0xMomI",
        img: "/img/work/animation/coke.jpg"
    },
    {
        url: "P55oBxUxQPQ",
        img: "/img/work/animation/hp.jpg"
    },
    {
        url: "tOERdEd4kPc",
        img: "/img/work/animation/facebook.jpg"
    },
    {
        url: "2e5yoLBb8x4",
        img: "/img/work/animation/coke_training.jpg"
    },
    {
        url: "AwMu42GlarI",
        img: "/img/work/animation/optum.jpg"
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
        } else if (this.props.router.query.item === "hitachi_ac") {
            currentSlide = 1;
        } else if (this.props.router.query.item === "hitachi_iclean") {
            currentSlide = 2;
        } else if (this.props.router.query.item === "hitachi_odour") {
            currentSlide = 3;
        } else if (this.props.router.query.item === "coke") {
            currentSlide = 4;
        } else if (this.props.router.query.item === "hp") {
            currentSlide = 5;
        } else if (this.props.router.query.item === "facebook") {
            currentSlide = 6;
        } else if (this.props.router.query.item === "coke_training") {
            currentSlide = 6;
        } else if (this.props.router.query.item === "optum") {
            currentSlide = 6;
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
                                    <div className="close-icon" onClick={() => Router.push('/work/animation')}></div>
                                    <div className="player-wrapper">
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