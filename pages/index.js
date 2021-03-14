import React from 'react';
import Head from 'next/head';
import Slider from "react-slick";
import Router from 'next/router';

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            queryType: "customer",
            name: "",
            email: "",
            telephone: "",
            message: ""
        }
    }

    updatePreviousSlideIndex = () => {
        this.slider.slickPrev();
    }

    updateNextSlideIndex = () => {
        this.slider.slickNext();
    }

    sendEmail = (e) => {
        e.preventDefault();
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.email.trim() === "" || !regEmail.test(this.state.email)) {
            alert("Please enter valid email");
        } else if (this.state.telephone.trim() === "") {
            alert("Please enter message")
        } else if (this.state.telephone.trim() === "") {
            alert("Please enter message")
        } else {
            let toEmail, subject;
            if (this.state.queryType === "customer") {
                toEmail = "contact@small-screen.com";
                subject = "Customer Enquiry from website";
            } else if (this.state.queryType === "job") {
                toEmail = "jobs@small-screen.com";
                subject = "Job Enquiry from website";
            } else {
                toEmail = "intern@small-screen.com";
                subject = "Internship Enquiry from website";
            }

            Email.send({
                SecureToken: "488dc7b5-8215-4eea-9723-f35e5612c371",
                To: toEmail,
                From: "webmaster.smallscreen@gmail.com",
                Subject: subject,
                Body: `<html>
                    <head></head>
                    <body>
                        <table border="1">
                            <tr>
                                <td>Name</td>
                                <td>${this.state.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>${this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Telephone</td>
                                <td>${this.state.telephone}</td>
                            </tr>
                            <tr>
                                <td>Message</td>
                                <td>${this.state.message}</td>
                            </tr>
                        </table>
                    </body>
                </html>`,
            }).then(
                message => alert("Mail sent successfully")
            );
        }

        /**/
    }

    render() {
        return (
            <div>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="title" content="Small Screen" />
                    <meta name="description" content="small screen official website" />
                    <meta name="keywords" content="small screen" />
                    <meta name="author" content="small screen webmasters" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        charSet="UTF-8"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                    <script src="https://smtpjs.com/v3/smtp.js"></script>
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
                                <a href="#clients">Clients</a>
                            </li>
                            <li>
                                <a href="#work">Work</a>
                            </li>
                            <li>
                                <a href="#team">Team</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="introVideoWrapper">
                    <video id="introVideo" autoPlay={true} muted={true} loop={true}>
                        <source src="./video/promo_latest.mp4" type="video/mp4" />
                    </video>
                </section>
                <section className="clients big-section" id="clients">
                    <div className="arrow-left slider-left" onClick={this.updatePreviousSlideIndex}></div>
                    <div className="container-fluid">
                        <div className="logo-wrappers">
                            <div className="section-header">
                                <div className="title">Our Clients</div>
                                <div className="seperator">
                                    <img src="/img/ss_colour_band.png" />
                                    <div className="play"></div>
                                </div>
                            </div>
                            <Slider {...settings} ref={c => (this.slider = c)}>
                                <div className="row client-logo-wrapper">
                                    <div className="col-md-12">
                                        <div className="col-md-2 col-sm-2 col-xs-4">
                                            <div className="logo-container">
                                                <img src="./img/customers/17.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/1.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/12.jpg" />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-4">
                                            <div className="logo-container">
                                                <img src="./img/customers/4.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/5.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/7.jpg" />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-4">
                                            <div className="logo-container">
                                                <img src="./img/customers/20.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/13.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/2.jpg" />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-4">
                                            <div className="logo-container">
                                                <img src="./img/customers/6.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/10.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/3.jpg" />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-4">
                                            <div className="logo-container">
                                                <img src="./img/customers/19.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/8.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/9.jpg" />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-4">
                                            <div className="logo-container">
                                                <img src="./img/customers/16.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/15.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/18.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row client-logo-wrapper">
                                    <div className="col-md-12">
                                        <div className="col-md-2 col-sm-2 col-xs-4">
                                            <div className="logo-container">
                                                <img src="./img/customers/31.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/22.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/23.jpg" />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-4">
                                            <div className="logo-container">
                                                <img src="./img/customers/24.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/25.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/26.jpg" />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-4">
                                            <div className="logo-container">
                                                <img src="./img/customers/27.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/28.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/29.jpg" />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-4">
                                            <div className="logo-container">
                                                <img src="./img/customers/30.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/21.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/32.jpg" />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-4">
                                            <div className="logo-container">
                                                <img src="./img/customers/33.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/34.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/35.jpg" />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-4">
                                            <div className="logo-container">
                                                <img src="./img/customers/38.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/37.jpg" />
                                            </div>
                                            <div className="logo-container">
                                                <img src="./img/customers/36.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="arrow-right slider-right" onClick={this.updateNextSlideIndex}></div>
                </section>
                <section className="offerings big-section" id="work">
                    <div className="container-fluid">
                        <div className="section-header">
                            <div className="title">Our Work</div>
                            <div className="seperator">
                                <img src="/img/ss_colour_band.png" />
                                <div className="play"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6" onClick={() => Router.push('/work/tvShows')}>
                                        <div className="tile">
                                            <div className="hs-wrapper">
                                                <img src="/img/offerings/tv/1.jpg" alt="" />
                                                <div className="hs-overlay">
                                                    <div className="hs-overlay-text-wrapper">
                                                        <span><strong>TV</strong></span>
                                                        <div className="play"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6" onClick={() => Router.push('/work/tvc')}>
                                        <div className="tile">
                                            <div className="hs-wrapper">
                                                <img src="/img/offerings/tvc/5.png" alt="" />
                                                <div className="hs-overlay">
                                                    <div className="hs-overlay-text-wrapper">
                                                        <span><strong>TVC</strong></span>
                                                        <div className="play"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6" onClick={() => Router.push('/work/digital')}>
                                        <div className="tile">
                                            <div className="hs-wrapper">
                                                <img src="/img/offerings/digital/1.jpg" alt="" />
                                                <div className="hs-overlay">
                                                    <div className="hs-overlay-text-wrapper">
                                                        <span><strong>Digital</strong></span>
                                                        <div className="play"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6" onClick={() => Router.push('/work/brandFilms')}>
                                        <div className="tile">
                                            <div className="hs-wrapper">
                                                <img src="/img/offerings/brand/1.jpg" alt="" />
                                                <div className="hs-overlay">
                                                    <div className="hs-overlay-text-wrapper">
                                                        <span><strong>Brand</strong></span>
                                                        <div className="play"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6" onClick={() => Router.push('/work/animation')}>
                                        <div className="tile">
                                            <div className="hs-wrapper">
                                                <img src="/img/offerings/animation/1.jpg" alt="" />
                                                <div className="hs-overlay">
                                                    <div className="hs-overlay-text-wrapper">
                                                        <span><strong>Animation</strong></span>
                                                        <div className="play"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6" onClick={() => Router.push('/work/productFilms')}>
                                        <div className="tile">
                                            <div className="hs-wrapper">
                                                <img src="/img/offerings/institutional/1.jpg" alt="" />
                                                <div className="hs-overlay">
                                                    <div className="hs-overlay-text-wrapper">
                                                        <span><strong>Institutional</strong></span>
                                                        <div className="play"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team big-section" id="team">
                    <div className="container-fluid">
                        <div className="section-header">
                            <div className="title">Team</div>
                            <div className="seperator">
                                <img src="/img/ss_colour_band.png" />
                                <div className="play"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="info-card">
                                    <div className="image-wrapper">
                                        <img src="./img/team/prashant.jpg" />
                                    </div>
                                    <div className="info-card-details animate">
                                        <div className="info-card-header">
                                            <h1> Prashant</h1>
                                            <h3> Partner </h3>
                                            <div className="card-highlighter"></div>
                                        </div>
                                        <div className="info-card-detail">
                                            <p>Tech freak. Trek freak. Not a tik-tok freak, but otherwise loves (creating) all
                                            content equally. Be it for any screen
                                            size (there's not much difference in his surname Sareen and screen)! Truly loves the
                                            process of film making, from the
                                            storming of brains to the delivery of the master(piece). Graduated from Hindu,
                                            mastered film from Syracuse, earned his
                                            chops as a journalist and TV professional at Newstrack and Sony respectively. Mild
                                            mannered and gentle, but will bite
                                    your head off if you come in the way of his work.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="info-card">
                                    <div className="image-wrapper">
                                        <img src="./img/team/Roopak.jpg" />
                                    </div>
                                    <div className="info-card-details animate">
                                        <div className="info-card-header">
                                            <h1> Roopak</h1>
                                            <h3> Partner </h3>
                                            <div className="card-highlighter"></div>
                                        </div>
                                        <div className="info-card-detail">
                                            <p>Globe trotter. Story plotter. No idea is too big, nor daunting. Loves the challenge
                                            of turning ideas into reality.
                                            Eclectic life experience. Born and bred in Germany. Educated at The Doon School
                                            (enjoys being part of one of the
                                            strongest alumni fraternities in the world). Business admin studied at The
                                            University of Bath. Business acumen honed in
                                            Turkey, South Africa and Russia. Dream business started in India with like minded
                                            creative minds. Driven equally by
                                            creativity as by creating value. Straightforward any way you look at him. Spell
                                            Roopak Kapoor backwards and see for
                                    yourself!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-sm-offset-3 col-md-offset-0">
                                <div className="info-card">
                                    <div className="image-wrapper">
                                        <img src="./img/team/Vishal.jpg" />
                                    </div>
                                    <div className="info-card-details animate">
                                        <div className="info-card-header">
                                            <h1> Vishal</h1>
                                            <h3> Associate Partner </h3>
                                            <div className="card-highlighter"></div>
                                        </div>
                                        <div className="info-card-detail">
                                            <p>Structure from Kubrick, narration from Scorsese. Style from Tarantino, storytelling
                                            from Iñárritu. A cinema buff with
                                            the purpose of learning from the greats. Has a penchant for the visual spectacle
                                            (replace the 'h' in his name with a
                                            'u'... what a coincidence!). His pilot's licence from back in the day may have
                                            expired, but he captains his crew with
                                            precision and passion. No detail is too small, nor is it ordinary. Seeks perfection
                                            and creativity in every aspect of
                                            life, be it making a meal or making a film. Skill and commitment have earned him a
                                            place at Small Screen's table. Ab big
                                    screen dur nahin!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12  col-sm-12">
                                <div className="button primary" onClick={() => Router.push('/team')}>Meet Entire Team</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-us big-section" id="about">
                    <div className="container-fluid">
                        <div className="content">
                            <div className="section-header">
                                <div className="title">About Us</div>
                            </div>
                There's something <span>about Small Screen</span>, but since we don't like to show off, let us tell you
                what we're
                not...
                <br /><br />


                We're not a pure play production house. Why? Because <span>we like to think beyond just
                    production</span>. Need an
                end-to-end
                solution <span>from creatives to distribution</span>? Call us! The ideas, strategy, and content
                specialists.
                <br /><br />


                We're <span>not limited to any genre</span>. Long format <span>award winning shows for</span> leading
                <span>TV</span> channels - check. <span>Digital
                    content</span> with
                200 million views - check. <span>Factual, fictional, branded content</span> - check, check, check!
                <br /><br />


                We're not newbies. We've <span>been around for more than 20 years</span>. But we're not limited to the
                grey matter or
                grey hair of
                the partners. We have <span>a young</span> and <span>dynamic team of in-house directors, producers,
                            writers, editors and
                    animators.</span>
                            <br /><br />


                We're not a pop & pop shop. We're an organisation of <span>seasoned professionals at the top of their
                    game and bagged few awards</span> along the way to prove it. We're not local. <span>We have a pan
                    India network</span> of the best
                professionals in the
                country. Did we say organisation already?
                <br /><br />


                We’re not vendors. <span>We like to partner with our clients</span> and take ownership of projects. We
                won't shy from
                arguing with
                you if it benefits the product. In the end you'll appreciate it. Just like they did.
                <br /><br />


                So if you think we've showed off enough by telling you what we're not, rest assured we can make your
                content show off
                for you too!
                <br /><br />
                        </div>
                    </div>
                </section>
                <section className="contact-us big-section" id="contact">
                    <div className="container-fluid">
                        <div className="section-header">
                            <div className="title">Contact Us</div>
                            <div className="seperator">
                                <img src="/img/ss_colour_band.png" />
                                <div className="play"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6  col-sm-6">
                                <div className="mapouter">
                                    <div className="gmap_canvas"><iframe width="100%" height="430" id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=39,%20sadhana%20enclave,%20new%20delhi%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6  col-sm-6">
                                <form className="my-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form-name">Nature of Query</label><br />
                                                <select value={this.state.queryType} onChange={(e) => {
                                                    this.setState({
                                                        queryType: e.target.value
                                                    })
                                                }}>
                                                    <option value="customer">Customer Query</option>
                                                    <option value="job">Job Query</option>
                                                    <option value="intern">Internship Query</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form-name">Name</label>
                                                <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={(e) => {
                                                    this.setState({
                                                        name: e.target.value
                                                    })
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form-email">Email Address</label>
                                                <input type="email" className="form-control"
                                                    placeholder="Email Address" value={this.state.email} onChange={(e) => {
                                                        this.setState({
                                                            email: e.target.value
                                                        })
                                                    }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form-subject">Telephone</label>
                                                <input type="tel" className="form-control" placeholder="Telephone" value={this.state.telephone} onChange={(e) => {
                                                    this.setState({
                                                        telephone: e.target.value
                                                    })
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="form-message">Email your Message</label>
                                                <textarea className="form-control" placeholder="Message" value={this.state.message} onChange={(e) => {
                                                    this.setState({
                                                        message: e.target.value
                                                    })
                                                }}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="button primary" onClick={(e) => this.sendEmail(e)}>Contact Us</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage