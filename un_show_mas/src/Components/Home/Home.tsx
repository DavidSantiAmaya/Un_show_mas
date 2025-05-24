import './Home.css'; 
import './carousel.css'; 
import Model1 from "../Modelo1/Model_1";
import Model2 from "../Modelo2/Model_2";
import Model3 from "../Modelo3/Model_3";

function Home() {
    return (
        <main>
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="/Img/Carousel_1.jpg"
                            alt="Carousel Slide 1"
                            className="bd-placeholder-img"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Example headline.</h1>
                                <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/Img/Carousel_2.jpg"
                            alt="Carousel Slide 1"
                            className="bd-placeholder-img"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/Img/Carousel_3.jpg"
                            alt="Carousel Slide 1"
                            className="bd-placeholder-img"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Marketing messaging and featurettes */}
            <div className="container marketing">
                {/* Three columns of text below the carousel */}
                <div className="row">
                    <div className="col-lg-4 animated1">
                        <img
                            src="/Img/Avatar_1.png"
                            alt="Avatar 1"
                            className="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            style={{ objectFit: "cover" }}
                        />
                        <h2 className="fw-normal">Heading</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <a className="btn btn-secondary" href="#">View details &raquo;</a>
                    </div>
                
                    <div className="col-lg-4 animated2">
                        <img
                            src="/Img/Avatar_2.png"
                            alt="Avatar 1"
                            className="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            style={{ objectFit: "cover" }}
                        />
                        <h2 className="fw-normal">Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        <a className="btn btn-secondary" href="#">View details &raquo;</a>
                    </div>
                    <div className="col-lg-4 animated3">
                        <img
                            src="/Img/Avatar_3.png"
                            alt="Avatar 1"
                            className="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            style={{ objectFit: "cover" }}
                        />
                        <h2 className="fw-normal">Heading</h2>
                        <p>And lastly this, the third column of representative placeholder content.</p>
                        <a className="btn btn-secondary" href="#">View details &raquo;</a>
                    </div>
                </div>

                {/* Featurettes */}
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                            First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span>
                        </h2>
                        <p className="lead">
                            Some great placeholder content for the first featurette here. Imagine some exciting prose here.
                        </p>
                    </div>
                    <div className="col-md-5 d-flex align-items-center justify-content-center" style={{ minHeight: "500px" }}>
                        <div style={{ width: "500px", height: "500px" }}>
                            <Model1 />
                        </div>
                    </div>
                </div>
                
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
                        <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                    </div>
                    <div className="col-md-5 d-flex align-items-center justify-content-center" style={{ minHeight: "500px" }}>
                        <div style={{ width: "500px", height: "500px" }}>
                            <Model2 />
                        </div>
                    </div>
                </div>
                
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
                        <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                    </div>
                    <div className="col-md-5 d-flex align-items-center justify-content-center" style={{ minHeight: "500px" }}>
                        <div style={{ width: "200px", height: "500px" }}>
                            <Model3 />
                        </div>
                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>
        </main>


    );
}

export default Home;