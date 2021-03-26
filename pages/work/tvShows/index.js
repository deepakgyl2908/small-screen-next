import Head from 'next/head';
import Router from 'next/router'

function WorkTVCPage() {
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
                <div className="collapse navbar-collapse" id="myNavbar">
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
                        <div className="title">TV</div>
                        <div className="seperator">
                            <img src="/img/ss_colour_band.png" />
                            <div className="play"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/omg')}>
                                <img src="/img/work/tvShows/omg.jpg" />
                                <div className="description">
                                    <h1>OMG! Yeh Mera India</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/great_britain')}>
                                <img src="/img/work/tvShows/great_britain.jpg" />
                                <div className="description">
                                    <h1>Britain Tourism</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/go_india')}>
                                <img src="/img/work/tvShows/go_india.jpg" />
                                <div className="description">
                                    <h1>Go India North East</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/discovery')}>
                                <img src="/img/work/tvShows/discovery.jpg" />
                                <div className="description">
                                    <h1>The Great Indian Factory</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/thalis')}>
                                <img src="/img/work/tvShows/thalis.jpg" />
                                <div className="description">
                                    <h1>Thalis of India</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/bp')}>
                                <img src="/img/work/tvShows/bp.jpg" />
                                <div className="description">
                                    <h1>Blenders Pride Fashion Tour</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/oppo')}>
                                <img src="/img/work/tvShows/oppo.jpg" />
                                <div className="description">
                                    <h1>Oppo-Superfactories</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/highway_on_my_plate')}>
                                <img src="/img/work/tvShows/highway_on_my_plate.jpg" />
                                <div className="description">
                                    <h1>Highway On My Plate</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/vital_stats')}>
                                <img src="/img/work/tvShows/vital_stats.jpg" />
                                <div className="description">
                                    <h1>Vital Stats of India</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/new_india')}>
                                <img src="/img/work/tvShows/new_india.jpg" />
                                <div className="description">
                                    <h1>New Creative India</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/whats_with')}>
                                <img src="/img/work/tvShows/whats_with.jpg" />
                                <div className="description">
                                    <h1>What's with Indian Men</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/conde_nast')}>
                                <img src="/img/work/tvShows/conde_nast.jpg" />
                                <div className="description">
                                    <h1>Conde Nast Restaurant Awards</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/greenco')}>
                                <img src="/img/work/tvShows/greenco.jpg" />
                                <div className="description">
                                    <h1>Inside Out - Greenko</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/ayurveda')}>
                                <img src="/img/work/tvShows/ayurveda.jpg" />
                                <div className="description">
                                    <h1>Inside Out - The Science of Ayurveda</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/god_of_grains')}>
                                <img src="/img/work/tvShows/god_of_grains.jpg" />
                                <div className="description">
                                    <h1>Inside Out - God of grains</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/lufthansa')}>
                                <img src="/img/work/tvShows/lufthansa.jpg" />
                                <div className="description">
                                    <h1>Lufthansa</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/tvShows/loreal')}>
                                <img src="/img/work/tvShows/loreal.jpg" />
                                <div className="description">
                                    <h1>L'oreal Hairdressing Awards</h1>
                                    <h3>
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorkTVCPage