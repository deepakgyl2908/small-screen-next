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
                        <div className="title">Institutional</div>
                        <div className="seperator">
                            <img src="/img/ss_colour_band.png" />
                            <div className="play"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/mofpi')}>
                                <img src="/img/work/productFilms/mofpi.jpg" />
                                <div className="description">
                                    <h1>MOFPI</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/ncw')}>
                                <img src="/img/work/productFilms/ncw.jpg" />
                                <div className="description">
                                    <h1>NCW</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/farishte')}>
                                <img src="/img/work/productFilms/farishte.jpg" />
                                <div className="description">
                                    <h1>Farishtay</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/harmoni')}>
                                <img src="/img/work/productFilms/harmoni.jpg" />
                                <div className="description">
                                    <h1>Harmony</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/corona')}>
                                <img src="/img/work/productFilms/corona.jpg" />
                                <div className="description">
                                    <h1>Corona</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/dengue')}>
                                <img src="/img/work/productFilms/dengue.jpg" />
                                <div className="description">
                                    <h1>Dengue</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/ev')}>
                                <img src="/img/work/productFilms/ev.jpg" />
                                <div className="description">
                                    <h1>EV</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/parali')}>
                                <img src="/img/work/productFilms/parali.jpg" />
                                <div className="description">
                                    <h1>Parali</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/vigyan')}>
                                <img src="/img/work/productFilms/vigyan.jpg" />
                                <div className="description">
                                    <h1>Vigyan Prasar<br />(Quantum Science & Technology)</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/fauji')}>
                                <img src="/img/work/productFilms/fauji.jpg" />
                                <div className="description">
                                    <h1>Humara Fauji</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/yoga_day')}>
                                <img src="/img/work/productFilms/yoga_day.jpg" />
                                <div className="description">
                                    <h1>Ministry of External Affairs</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/track_man')}>
                                <img src="/img/work/productFilms/track_man.jpg" />
                                <div className="description">
                                    <h1>Railways</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/dri')}>
                                <img src="/img/work/productFilms/dri.jpg" />
                                <div className="description">
                                    <h1>DRI</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/music')}>
                                <img src="/img/work/productFilms/music.jpg" />
                                <div className="description">
                                    <h1>Breakthrough<br />Music</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/ignore')}>
                                <img src="/img/work/productFilms/ignore.jpg" />
                                <div className="description">
                                    <h1>Breakthrough<br />Ignore No More</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/phfi')}>
                                <img src="/img/work/productFilms/phfi.jpg" />
                                <div className="description">
                                    <h1>PHFI</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/chpp')}>
                                <img src="/img/work/productFilms/chpp.jpg" />
                                <div className="description">
                                    <h1>Save the Children</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/organ_donation')}>
                                <img src="/img/work/productFilms/organ_donation.jpg" />
                                <div className="description">
                                    <h1>Organ Donation</h1>
                                    <h3>
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/ukeri')}>
                                <img src="/img/work/productFilms/ukeri.jpg" />
                                <div className="description">
                                    <h1>Ukieri</h1>
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