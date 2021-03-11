import Head from 'next/head';
import Router from 'next/router'

function WorkBrandsPage() {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="title" content="Work - TVC" />
                <meta name="description" content="small screen official website" />
                <meta name="keywords" content="small screen" />
                <meta name="author" content="small screen webmasters" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            </Head>
            <div className="color_band"></div>
            <nav className="navbar" role="navigation">
                <a className="navbar-brand pull-right" href="#">
                    <img src="/img/logo.png" className="logo" />
                </a>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/#clients">Clients</a>
                        </li>
                        <li>
                            <a href="/#work">Work</a>
                        </li>
                        <li>
                            <a href="/team">Team</a>
                        </li>
                        <li>
                            <a href="/#about">About</a>
                        </li>
                        <li>
                            <a href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="tvc-wrapper portfolio-wrapper">
                <div id="video-gallery" className="video-gallery-container container-fluid">
                    <div className="section-header">
                        <div className="title">Brand Films</div>
                        <div className="seperator">
                            <img src="/img/ss_colour_band.png" />
                            <div className="play"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/brandFilms/hero')}>
                                <img src="/img/work/brandFilms/hero.jpg" />
                                <div className="description">
                                    <h1>Hero DUET</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/brandFilms/hitachi')}>
                                <img src="/img/work/brandFilms/hitachi.jpg" />
                                <div className="description">
                                    <h1>Hitachi</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/brandFilms/indigo')}>
                                <img src="/img/work/brandFilms/indigo.jpg" />
                                <div className="description">
                                    <h1>Indigo</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/brandFilms/hitachi_csr')}>
                                <img src="/img/work/brandFilms/hitachi_csr.jpg" />
                                <div className="description">
                                    <h1>Hitachi CSR</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/brandFilms/hero_insurance')}>
                                <img src="/img/work/brandFilms/hero_insurance.jpg" />
                                <div className="description">
                                    <h1>Hero Insurance</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/brandFilms/afcons')}>
                                <img src="/img/work/brandFilms/afcons.jpg" />
                                <div className="description">
                                    <h1>Afcons</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/brandFilms/dpworld')}>
                                <img src="/img/work/brandFilms/dpworld.jpg" />
                                <div className="description">
                                    <h1>DP World</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorkBrandsPage