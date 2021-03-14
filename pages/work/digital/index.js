import Head from 'next/head';
import Router from 'next/router'

function WorkDigitalPage() {
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
                        <div className="title">Digital</div>
                        <div className="seperator">
                            <img src="/img/ss_colour_band.png" />
                            <div className="play"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/hitachi_suraj')}>
                                <img src="/img/work/digital/hitachi_suraj.jpg" />
                                <div className="description">
                                    <h1>Hitachi</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/hitachi_fresh')}>
                                <img src="/img/work/digital/hitachi_fresh.jpg" />
                                <div className="description">
                                    <h1>Hitachi</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/hitachi_clean')}>
                                <img src="/img/work/digital/hitachi_clean.jpg" />
                                <div className="description">
                                    <h1>Hitachi</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/coke')}>
                                <img src="/img/work/digital/coke.jpg" />
                                <div className="description">
                                    <h1>Coke</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/coke2')}>
                                <img src="/img/work/digital/coke2.jpg" />
                                <div className="description">
                                    <h1>Coke</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/lenscrafters')}>
                                <img src="/img/work/digital/lenscrafters.jpg" />
                                <div className="description">
                                    <h1>Lenscrafters</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/park_hotel')}>
                                <img src="/img/work/digital/park_hotel.jpg" />
                                <div className="description">
                                    <h1>Park Hotel</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/zomato')}>
                                <img src="/img/work/digital/zomato.jpg" />
                                <div className="description">
                                    <h1>Zomato</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/groom_barabar')}>
                                <img src="/img/work/digital/groom.jpg" />
                                <div className="description">
                                    <h1>Groom Barabar Groom</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/chivas')}>
                                <img src="/img/work/digital/chivas.jpg" />
                                <div className="description">
                                    <h1>Chivas</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/ted')}>
                                <img src="/img/work/digital/ted.jpg" />
                                <div className="description">
                                    <h1>Ted Baker</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/bpft')}>
                                <img src="/img/work/digital/bpft.jpg" />
                                <div className="description">
                                    <h1>BPFT Vignette</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/asian_paints')}>
                                <img src="/img/work/digital/asian_paints.jpg" />
                                <div className="description">
                                    <h1>Asian Paints</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/glenlivet')}>
                                <img src="/img/work/digital/glenlivet.jpg" />
                                <div className="description">
                                    <h1>Glenlivet</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/kfc')}>
                                <img src="/img/work/digital/kfc.jpg" />
                                <div className="description">
                                    <h1>KFC</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/mother_dairy')}>
                                <img src="/img/work/digital/mother_dairy.jpg" />
                                <div className="description">
                                    <h1>Mother Dairy</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/nestle')}>
                                <img src="/img/work/digital/maggi.jpg" />
                                <div className="description">
                                    <h1>Nestle Bhuna Masala</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/nestle_milkmail')}>
                                <img src="/img/work/digital/milkmaid.jpg" />
                                <div className="description">
                                    <h1>Nestle Milkmaid</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/mothers_recipe')}>
                                <img src="/img/work/digital/mothers_recipe.jpg" />
                                <div className="description">
                                    <h1>Mother's Recipe</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/digital/google_adwords')}>
                                <img src="/img/work/digital/google.jpg" />
                                <div className="description">
                                    <h1>Google Adwords</h1>
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

export default WorkDigitalPage