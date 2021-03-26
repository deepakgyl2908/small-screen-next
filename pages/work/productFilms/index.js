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
                                    <h1>Ministry of Food Processing</h1>
                                    <h3>
                                        Digital film highlighting the Ministry’s policy and initiatives to enhance the competitiveness of food processing businesses in the unorganised sector.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/ncw')}>
                                <img src="/img/work/productFilms/ncw.jpg" />
                                <div className="description">
                                    <h1>National Commission of Women</h1>
                                    <h3>
                                        An advocacy film encouraging women to speak up and seek help in cases of domestic violence.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/farishte')}>
                                <img src="/img/work/productFilms/farishte.jpg" />
                                <div className="description">
                                    <h1>Delhi Government</h1>
                                    <h3>
                                        Short case studies of beneficiaries of a scheme that helps accident victims by paying their hospital bills and also rewards good samaritans who help accident victims.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/harmoni')}>
                                <img src="/img/work/productFilms/harmoni.jpg" />
                                <div className="description">
                                    <h1>Delhi Legislative Assembly</h1>
                                    <h3>
                                        TVC for spreading awareness of the legal consequences of forwarding unsolicited and unverified social media posts.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/corona')}>
                                <img src="/img/work/productFilms/corona.jpg" />
                                <div className="description">
                                    <h1>Delhi Government</h1>
                                    <h3>
                                        TVC created for spreading awareness of COVID and steps to take in the event of infection.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/dengue')}>
                                <img src="/img/work/productFilms/dengue.jpg" />
                                <div className="description">
                                    <h1>Delhi Government</h1>
                                    <h3>
                                        A call to action TVC on how people of Delhi can help in stopping the spread of Dengue.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/ev')}>
                                <img src="/img/work/productFilms/ev.jpg" />
                                <div className="description">
                                    <h1>Delhi Government</h1>
                                    <h3>
                                        TVC to spread awareness of Delhi Government policy to encourage adoption of EVs.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/parali')}>
                                <img src="/img/work/productFilms/parali.jpg" />
                                <div className="description">
                                    <h1>Delhi Government</h1>
                                    <h3>
                                        TVC to highlight the steps taken by the Delhi Government to end stubble burning by farmers that leads to high levels of pollution in Delhi.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/vigyan')}>
                                <img src="/img/work/productFilms/vigyan.jpg" />
                                <div className="description">
                                    <h1>Vigyan Prasar</h1>
                                    <h3>
                                        A documentary on the Government of India’s  Quantum Mission and its role in protecting India’s access to future technologies from cryptography to quantum computing.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/fauji')}>
                                <img src="/img/work/productFilms/fauji.jpg" />
                                <div className="description">
                                    <h1>Ministry of Defence</h1>
                                    <h3>
                                        A TV series for the Dept of Resettlement showcasing the post-retirement options and help available to armed forces personnel to set up a business.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/yoga_day')}>
                                <img src="/img/work/productFilms/yoga_day.jpg" />
                                <div className="description">
                                    <h1>Ministry of External Affairs</h1>
                                    <h3>
                                        A film for the Ministry of External Affairs to promote International Yoga Day.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/track_man')}>
                                <img src="/img/work/productFilms/track_man.jpg" />
                                <div className="description">
                                    <h1>Indian Railways</h1>
                                    <h3>
                                        A short film on railway gangmen and the critical nature of their work for the safety of passengers.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/dri')}>
                                <img src="/img/work/productFilms/dri.jpg" />
                                <div className="description">
                                    <h1>Department of Revenue Intelligence</h1>
                                    <h3>
                                        A film created for DRI’s anniversary celebrations speaking about the objectives, and culture of this elite organisation as told by its former directors of operations.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/music')}>
                                <img src="/img/work/productFilms/music.jpg" />
                                <div className="description">
                                    <h1>Breakthrough.Org</h1>
                                    <h3>
                                        A music video created to encourage men to participate in housework.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/ignore')}>
                                <img src="/img/work/productFilms/ignore.jpg" />
                                <div className="description">
                                    <h1>Breakthrough.Org</h1>
                                    <h3>
                                        A TVC encouraging people to step forward and intervene when they see an incident of sexual harassment.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/phfi')}>
                                <img src="/img/work/productFilms/phfi.jpg" />
                                <div className="description">
                                    <h1>Public Health Foundation of India</h1>
                                    <h3>
                                        A set of short case study films on innovations in the field of public health.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/chpp')}>
                                <img src="/img/work/productFilms/chpp.jpg" />
                                <div className="description">
                                    <h1>Save the Children</h1>
                                    <h3>
                                        Two films were created with the objective of encouraging people to sign up as organ donors.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="lightvideo" onClick={() => Router.push('/work/productFilms/organ_donation')}>
                                <img src="/img/work/productFilms/organ_donation.jpg" />
                                <div className="description">
                                    <h1>Organ Donation</h1>
                                    <h3>
                                        Two films were created for Organ, with the objective to encourage people to sign up as an organ donor. One film was from the perspective of the relatives of organ donors and another from the perspective of organ receivers.
                                    </h3></div><img className="play-icon" src="../../img/play-button.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorkDigitalPage