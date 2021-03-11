import React from 'react';
import ReactPlayer from 'react-player';
import Head from 'next/head';
import Router, { withRouter } from 'next/router';

const list = [
    {
        url: "hqLLLir4Qos",
        img: "/img/work/productFilms/mofpi.jpg"
    },
    {
        url: "N6A966FagWo",
        img: "/img/work/productFilms/ncw.jpg"
    },
    {
        url: "nWgyPonuw7o",
        img: "/img/work/productFilms/farishte.jpg"
    },
    {
        url: "A8IvonWP18E",
        img: "/img/work/productFilms/harmoni.jpg"
    },
    {
        url: "zt3sSan7RLg",
        img: "/img/work/productFilms/corona.jpg"
    },
    {
        url: "UkIvV_lVtI8",
        img: "/img/work/productFilms/dengue.jpg"
    },
    {
        url: "InhUXgk2FdY",
        img: "/img/work/productFilms/ev.jpg"
    },
    {
        url: "aVGpcSKwAA8",
        img: "/img/work/productFilms/parali.jpg"
    },
    {
        url: "-kpK0tFwz7s",
        img: "/img/work/productFilms/fauji.jpg"
    },
    {
        url: "L99CJP5WvVI",
        img: "/img/work/productFilms/yoga_day.jpg"
    },
    {
        url: "6UwThEvs3a4",
        img: "/img/work/productFilms/track_man.jpg"
    },
    {
        url: "fcyOptoDcPw",
        img: "/img/work/productFilms/dri.jpg"
    },
    {
        url: "haf4ADqWKsM",
        img: "/img/work/productFilms/music.jpg"
    },
    {
        url: "jsFDp4VKORQ",
        img: "/img/work/productFilms/ignore.jpg"
    },
    {
        url: "IsmCp-r8hE0",
        img: "/img/work/productFilms/phfi.jpg"
    },
    {
        url: "eHYTZxY7X50",
        img: "/img/work/productFilms/maggi.jpg"
    },
    {
        url: "g1uJRi-BUcg",
        img: "/img/work/productFilms/chpp.jpg"
    },
    {
        url: "VNGcrT8PuNE",
        img: "/img/work/productFilms/organ_donation.jpg"
    }
]

class WorkTVCGalleryPage extends React.Component {

    static getInitialProps({ pathname }) {
        return { pathname }
    }

    constructor(props) {
        super(props);

        let currentSlide = 0;

        if (this.props.router.query.item === "mofpi") {
            currentSlide = 0;
        } else if (this.props.router.query.item === "ncw") {
            currentSlide = 1;
        } else if (this.props.router.query.item === "farishte") {
            currentSlide = 2;
        } else if (this.props.router.query.item === "harmoni") {
            currentSlide = 3;
        } else if (this.props.router.query.item === "corona") {
            currentSlide = 4;
        } else if (this.props.router.query.item === "dengue") {
            currentSlide = 5;
        } else if (this.props.router.query.item === "ev") {
            currentSlide = 6;
        } else if (this.props.router.query.item === "parali") {
            currentSlide = 7;
        } else if (this.props.router.query.item === "fauji") {
            currentSlide = 8;
        } else if (this.props.router.query.item === "yoga_day") {
            currentSlide = 9;
        } else if (this.props.router.query.item === "track_man") {
            currentSlide = 10;
        } else if (this.props.router.query.item === "dri") {
            currentSlide = 11;
        } else if (this.props.router.query.item === "music") {
            currentSlide = 12;
        } else if (this.props.router.query.item === "ignore") {
            currentSlide = 13;
        } else if (this.props.router.query.item === "phfi") {
            currentSlide = 14;
        } else if (this.props.router.query.item === "chpp") {
            currentSlide = 15;
        } else if (this.props.router.query.item === "organ_donation") {
            currentSlide = 16;
        } else if (this.props.router.query.item === "ukeri") {
            currentSlide = 17;
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
                                    <div className="close-icon" onClick={() => Router.push('/work/productFilms')}></div>
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