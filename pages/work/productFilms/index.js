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
                                    <h3>
                                        A digital film highlighting Ministry of Food Processing policy that assists small, unorganised food processing businesses to modernise and enhance their competitiveness  thought access to technology, credit and comply with health and safety compliance’s.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/ncw')}>
                                <img src="/img/work/productFilms/ncw.jpg" />
                                <div className="description">
                                    <h3>
                                        An advocacy film for National Commission for Women that encourages women to speak up and seek help in cases of domestic violence.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/farishte')}>
                                <img src="/img/work/productFilms/farishte.jpg" />
                                <div className="description">
                                    <h3>
                                        Short case study films on beneficiaries of a Delhi Government scheme, Farishtey, that helps accident victims by rewarding good Samaritans who help accident victims and pays hospital bills of accident victim.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/harmoni')}>
                                <img src="/img/work/productFilms/harmoni.jpg" />
                                <div className="description">
                                    <h3>
                                        TVC for Delhi Assembly for spreading awareness of the legal consequences of forwarding unsolicited and unverified social media posts.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/corona')}>
                                <img src="/img/work/productFilms/corona.jpg" />
                                <div className="description">
                                    <h3>
                                        A set of TVCs created for Delhi Government for spreading awareness of COVID and steps to take in the event of infection.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/dengue')}>
                                <img src="/img/work/productFilms/dengue.jpg" />
                                <div className="description">
                                    <h3>
                                        A call to action TVC for Delhi Government on how to stop the spread of Dengue.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/ev')}>
                                <img src="/img/work/productFilms/ev.jpg" />
                                <div className="description">
                                    <h3>
                                        PSA for Delhi Government to spread awareness of Delhi Government policy encourage adoption of EVs.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/parali')}>
                                <img src="/img/work/productFilms/parali.jpg" />
                                <div className="description">
                                    <h3>
                                        PSA highlighting steps taken by Delhi Government with regards to ending stubble burning by farmers leading to high levels of pollution in Delhi.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/vigyan')}>
                                <img src="/img/work/productFilms/vigyan.jpg" />
                                <div className="description">
                                    <h3>
                                        A documentary for Vigyan Prasar on the Government of India’s  Quantum Mission and its role in protecting India’s access to future technologies from cryptography to quantum computing.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/fauji')}>
                                <img src="/img/work/productFilms/fauji.jpg" />
                                <div className="description">
                                    <h3>
                                        A TV series for the Dept. of Resettlement, Ministry of Defence to showcase the options and training available for retired armed forces personnel to set up business.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/yoga_day')}>
                                <img src="/img/work/productFilms/yoga_day.jpg" />
                                <div className="description">
                                    <h3>
                                        A film for the Ministry of External Affairs to promote the International Yoga Day.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/track_man')}>
                                <img src="/img/work/productFilms/track_man.jpg" />
                                <div className="description">
                                    <h3>
                                        A short film for the Indian Railways on the critical role of a Railway gangman.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/dri')}>
                                <img src="/img/work/productFilms/dri.jpg" />
                                <div className="description">
                                    <h3>
                                        A film created for the anniversary celebrations of Directorate of Revenue Intelligence. It showcases the objectives, operations and culture of this elite organisation as told by its former Directors.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/music')}>
                                <img src="/img/work/productFilms/music.jpg" />
                                <div className="description">
                                    <h3>
                                        A music video created for Breakthrough encouraging men to participate in house work.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/ignore')}>
                                <img src="/img/work/productFilms/ignore.jpg" />
                                <div className="description">
                                    <h3>
                                        A short TVC for Breakthrough encouraging people to intervene when they see an incident of sexual harassment.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/phfi')}>
                                <img src="/img/work/productFilms/phfi.jpg" />
                                <div className="description">
                                    <h3>
                                        A set of short case study films for Public Health Foundation of India on innovations in the field of public health.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/chpp')}>
                                <img src="/img/work/productFilms/chpp.jpg" />
                                <div className="description">
                                    <h3>
                                        Film for Save the Children program that works for safeguarding the interest of children in rural areas in the event of a setback to a family’s income.
                                    </h3>
                                    <img className="play-icon" src="../img/play-button.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/organ_donation')}>
                                <img src="/img/work/productFilms/organ_donation.jpg" />
                                <div className="description">
                                    <h3>
                                        Two films were created for Organ, with the objective to encourage people to sign up as an organ donor. One film was from the perspective of the relatives of organ donors and another from the perspective of organ receivers.
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