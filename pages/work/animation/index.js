import Head from 'next/head';
import Router from 'next/router'

function WorkAnimationPage() {
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
                        data-target="#myNavbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav" id="myNavbar">
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
                        <div className="title">Animation</div>
                        <div className="seperator">
                            <img src="/img/ss_colour_band.png" />
                            <div className="play"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/animation/hero')}>
                                <img src="/img/work/animation/hero.jpg" />
                                <div className="description">
                                    <h3>
                                        A life like 3D animation for Hero Motocorp showcasing their motorcycle in a
                                        photo realistic environment.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/animation/hitachi_ac')}>
                                <img src="/img/work/animation/hitachi_ac.jpg" />
                                <div className="description">
                                    <h3>
                                        A set of 3D animation films that focus on the unique technology proposition of Hitachi air-conditioners.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/animation/hitachi_iclean')}>
                                <img src="/img/work/animation/hitachi_iclean.jpg" />
                                <div className="description">
                                    <h3>
                                        A set of 3D animation films that focus on the unique technology proposition of Hitachi air-conditioners.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/animation/hitachi_odour')}>
                                <img src="/img/work/animation/hitachi_odour.jpg" />
                                <div className="description">
                                    <h3>
                                        A set of 3D animation films that focus on the unique technology proposition of Hitachi air-conditioners.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/animation/coke')}>
                                <img src="/img/work/animation/coke.jpg" />
                                <div className="description">
                                    <h3>
                                        A 2D animated film highlighting the key aspects from Coca Cola’s annual sustainability report.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/animation/hp')}>
                                <img src="/img/work/animation/hp.jpg" />
                                <div className="description">
                                    <h3>
                                        A whiteboard animation film created for HP for a presentation to the Government of India.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/animation/facebook')}>
                                <img src="/img/work/animation/facebook.jpg" />
                                <div className="description">
                                    <h3>
                                        A set of seven safety films created for Facebook. The artwork was provided by Facebook. Small Screen animated and voiced the films in 54 Indian and foreign languages.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/animation/coke_training')}>
                                <img src="/img/work/animation/coke_training.jpg" />
                                <div className="description">
                                    <h3>
                                        A character animation training film for Coca Cola regarding protocols that must be followed by frontline sales personnel to protect themselves and their sales partners.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/animation/optum')}>
                                <img src="/img/work/animation/optum.jpg" />
                                <div className="description">
                                    <h3>
                                        A character animation film highlighting the benefits of a product created by Optum for better utilisation of existing health infrastructure of a city.
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

export default WorkAnimationPage