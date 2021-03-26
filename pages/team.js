import Head from 'next/head';
import Router from 'next/router'

function TeamPage() {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="title" content="Team" />
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
            <section className="team big-section page">
                <div className="container-fluid">
                    <div className="section-header">
                        <div className="title">Meet Our Team</div>
                        <div className="seperator">
                            <img src="/img/ss_colour_band.png" />
                            <div className="play"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/prashant.jpg" />
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
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/Roopak.jpg" />
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
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/Vishal.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Vishal</h1>
                                        <h3> Associate Partner</h3>
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
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/Nishant Arora.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Nishant</h1>
                                        <h3> Creative Director </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>Loves all things green - from (green)screens to gardening. Loves to eat green too- a
                                        strict vegetarian. Be it a film or
                                        a plant he nurtures them with equal fervor and dedication. Trust him to keep calm(
                                        just like his name) through the
                                        madness of shoots and edits. What makes this director tick? A hot cup of coffee or
                                        an interesting idea. Preferably
                                    together.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/Mohammad Iqbal.JPG" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Iqbal</h1>
                                        <h3> Post Supervisor </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>Post-master of Small screen. (err..Post-production master!). Graduated from MCRC,
                                        Jamia. Loves drama, on-screen, and
                                        off-screen. A social media junkie. When he is not staring at edit timelines, he can
                                        be found experimenting with a
                                    Snapchat filter or laughing at a meme.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/Shikha.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Shikha</h1>
                                        <h3> Associate Director </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>A wanderer. And a wonderer. Studied TV direction at FTII and ended up at "Small
                                        Screen" a decade later. Dabbled in
                                        journalism in-between. Loves to run and read- not at the same time. Owned by two
                                        cats (You read that right). Enjoys
                                        writing and creating on paper. She particularly doesn’t enjoy writing about herself
                                    in third person.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/Ashish1.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Ashish</h1>
                                        <h3> Producer </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>A one-man army! Absolutely loves being a field producer. Gotcha! He loves to play
                                        cricket in the field instead. Had
                                        dreamt of playing for India one day. That day did not come and now, he’s the
                                        wicketkeeper of the production team at
                                        Small Screen.Graduated from being a field producer to a senior producer. Be it
                                        planning, budgeting, or co-ordination –
                                        he’s the go-to person!Trained in classical music. He can be found humming his
                                        troubles away on a hectic shoot day.
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/Nikhil.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Nikhil</h1>
                                        <h3> Drone Pilot </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>The one with oodles of ‘swag’. Unapologetic. The last one to enter a room. Well,
                                        mostly! Field producer and (accidental)
                                        drone pilot for Small Screen. Street smart. Loves listening to music. And his
                                    favourite singer is not Ashish.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/rajender.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Rajender</h1>
                                        <h3> DOP </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>Paragon of politeness. DOP par excellence. Lets his work do the talking. Loves painting with light. Known to the world as Raju. Nobody calls him Rajendra, not even the one who named him so.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/deshraj.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Deshraj</h1>
                                        <h3> Senior Editor </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>Versatile with his craft. Be it an ad or a documentary, trust him to compile a compelling film.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/mohit.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Mohit</h1>
                                        <h3> Senior Editor </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>Works wonders on the edit table. Pressing deadlines? He has got all covered. Always fast and never furious.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/abhijet.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Abhijeet</h1>
                                        <h3> Senior Editor </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>Started out as an intern and climbed the ranks to become an editor.  Enjoys pumping adrenaline on the edit table.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/rohit.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Rohit</h1>
                                        <h3> Editor </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>A versatile editor who can edit digital films to TV shows.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card">
                                <div className="image-wrapper">
                                    <img src="../../img/team/vikram.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Vikram </h1>
                                        <h3> Motion GFX Artists </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>Creative thinkers. Quiet creators. Quite creative. Speak the language of design fluently.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/Himanshu.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Himanshu</h1>
                                        <h3> Motion GFX Artists </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>Creative thinkers. Quiet creators. Quite creative. Speak the language of design fluently.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/himanshu.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Ankit</h1>
                                        <h3> Dynamic Designers </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>Creative thinkers. Quiet creators. Quite creative. Speak the language of design fluently.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/pradeep.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Pawan</h1>
                                        <h3> The Bookkeepers </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>The duo that keeps all the balance sheets in check. Somehow, they always manage to find their way out of the number-maze.</p>
                                    </div>
                                </div>
                            </div>
                                        </div>*/}
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/Pradeep.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Pradeep</h1>
                                        <h3> Accountants </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>The duo that keeps all the balance sheets in check. Somehow, they always manage to find their way out of the number-maze.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card">
                                <div className="image-wrapper">
                                    <img src="../../img/team/ruchin.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Ruchin</h1>
                                        <h3> Accountants </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">
                                        <p>The duo that keeps all the balance sheets in check. Somehow, they always manage to find their way out of the number-maze.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/manoj.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Manoj</h1>
                                        <h3> Sound Recordist </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>Wingman of Raju. Assistant cameraperson and sound recordist. Makes sure that everything sounds right on shoots. Dislikes – airplanes, dogs who bark incessantly, and noisy crews. Can be spotted shouting ‘Silence’ on shoots.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/shukla.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Shukla Ji</h1>
                                        <h3> Rider </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>Loves all things green - from (green)screens to gardening. Loves to eat green too- a strict vegetarian. Be it a film or a plant he nurtures them with equal fervor and dedication. Trust him to keep calm( just like his name) through the madness of shoots and edits. What makes this director tick? A hot cup of coffee or an interesting idea. Preferably together.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/pancham.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Pancham Ji</h1>
                                        <h3> Support Staff </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>Loves all things green - from (green)screens to gardening. Loves to eat green too- a strict vegetarian. Be it a film or a plant he nurtures them with equal fervor and dedication. Trust him to keep calm( just like his name) through the madness of shoots and edits. What makes this director tick? A hot cup of coffee or an interesting idea. Preferably together.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="info-card animate">
                                <div className="image-wrapper">
                                    <img src="../../img/team/reena.jpg" />
                                </div>
                                <div className="info-card-details animate">
                                    <div className="info-card-header">
                                        <h1> Reena Didi</h1>
                                        <h3> Support Staff </h3>
                                        <div className="card-highlighter"></div>
                                    </div>
                                    <div className="info-card-detail">

                                        <p>Loves all things green - from (green)screens to gardening. Loves to eat green too- a strict vegetarian. Be it a film or a plant he nurtures them with equal fervor and dedication. Trust him to keep calm( just like his name) through the madness of shoots and edits. What makes this director tick? A hot cup of coffee or an interesting idea. Preferably together.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TeamPage