import './Home.css'; 
import './carousel.css'; 
import Model1 from "../Modelo1/Model_1";
import Model2 from "../Modelo2/Model_2";
import Model3 from "../Modelo3/Model_3";

function Home() {
    return (
        <main>

            {/* CAROUSEL */}

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


            {/* TARJETAS */}

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
                        <h2 className="fw-normal">Mordecai</h2>
                        <p>Mordecai es el más responsable del dúo central.
                            Suele tener una actitud relajada, aunque muestra nerviosismo en situaciones sociales o románticas.
                            A menudo actúa como la voz de la razón, pero también puede caer en la pereza y tomar decisiones impulsivas.
                            Es más maduro que Rigby, pero no completamente adulto.</p>
                        <a className="btn btn-secondary" href="/PagesModel1">Ver modelo 3D &raquo;</a>
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
                        <h2 className="fw-normal">Rigby</h2>
                        <p>Rigby es inmaduro, impulsivo y muy energético. Es conocido por meterse en problemas y evitar responsabilidades. Aunque puede ser egoísta, tiene un fuerte lazo de amistad con Mordecai y, en el fondo, tiene buenas intenciones. Su comportamiento caótico a menudo inicia los conflictos del episodio.</p>
                        <a className="btn btn-secondary" href="/PagesModel2">Ver modelo 3D &raquo;</a>
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
                        <h2 className="fw-normal">Skips</h2>
                        <p>Skips es sabio, fuerte y calmado. Siempre tiene una solución (o al menos una pista) para los problemas sobrenaturales que enfrentan en el parque. Actúa como mentor y protector del grupo. Su pasado misterioso y naturaleza inmortal le dan profundidad, y su sentido del deber lo hace confiable y respetado.</p>
                        <a className="btn btn-secondary" href="/PagesModel3">Ver modelo 3D &raquo;</a>
                    </div>
                </div>

                {/* VISTA PREVIA MODELOS 3D */}
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
                        <div style={{ width: "700px", height: "500px" }}>
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
                        <div style={{ width: "500px", height: "500px" }}>
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