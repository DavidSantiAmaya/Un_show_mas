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
                            src="/Img/Carousel_3.jpg"
                            alt="Carousel Slide 1"
                            className="bd-placeholder-img"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <div style={{ background: "rgba(0,0,0,0.7)", padding: "24px", borderRadius: "12px", display: "inline-block" }}>
                                    <h1 style={{ color: "#fff" }}>Bienvenido a Un Show Más 3D</h1>
                                    <p className="opacity-95" style={{ color: "#ddd" }}>
                                        Explora modelos 3D de tus personajes favoritos, descubre curiosidades y revive los mejores momentos de la serie. <br /> ¡Disfruta la experiencia interactiva en nuestra página web!
                                    </p>
                                </div>
                                
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
                                <div style={{ background: "rgba(0,0,0,0.7)", padding: "24px", borderRadius: "12px", display: "inline-block" }}>
                                <h1 style={{ color: "#fff" }}>Descubre el mundo de Un Show Más</h1>
                                <p className="opacity-95" style={{ color: "#ddd" }}>
                                    Sumérgete en la diversión, explora los modelos 3D y conoce datos curiosos de tus personajes favoritos. <br />¡Vive la experiencia única que solo Un Show Más puede ofrecer!
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/Img/Carousel_1.jpg"
                            alt="Carousel Slide 1"
                            className="bd-placeholder-img"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <div style={{ background: "rgba(0,0,0,0.7)", padding: "24px", borderRadius: "12px", display: "inline-block" }}>
                                    <h1 style={{ color: "#fff" }}>¡Explora y comparte!</h1>
                                    <p style={{ color: "#ddd" }}>
                                        Comparte tus momentos favoritos y descubre más secretos de Un Show Más. <br />¡Hay una muestra de voz en cada uno de los personajes!
                                    </p>
                                </div>
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

            {/* DESCRIPCIÓN DE LA SERIE */}
            <div style={{background: "white", textAlign: "center", fontFamily: "sans-serif", padding: "40px", borderRadius: "16px", marginBottom:"30px"}} >
                <p>
                    <b>Un Show Más</b> (Regular Show) es una serie animada creada por J.G. Quintel para Cartoon Network. 
                    La historia sigue las aventuras de dos amigos inseparables, Mordecai (un arrendajo azul) y Rigby (un mapache), 
                    quienes trabajan como jardineros en un parque. Aunque sus tareas suelen ser simples, siempre terminan envueltos en situaciones fuera de lo común, 
                    llenas de caos, humor absurdo y elementos sobrenaturales. 
                    <br />
                </p>
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
                            "¡Mapache, <span className="text-body-secondary">¡eres un idiota!"</span>
                        </h2>
                        <p className="lead">
                            ¡Siempre arruinas todo, Rigby!<br />
                            - Mordecai
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
                        <h2 className="featurette-heading fw-normal lh-1">
                            "¡Aló, <span className="text-body-secondary">¿quién quiere pizzaaa?!?"</span>
                        </h2>
                        <p className="lead">
                            Esto va a estar demasiado épico, bro<br />
                            - Rigby
                        </p>
                    </div>
                    <div className="col-md-5 d-flex align-items-center justify-content-center" style={{ minHeight: "500px" }}>
                        <div style={{ width: "700px", height: "500px" }}>
                            <Model2 />
                        </div>
                    </div>
                </div>
                
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                            "No es el momento de hablar, <span className="text-body-secondary">es el momento de actuar"</span>
                        </h2>
                        <p className="lead">
                            Lo he visto muchas veces. Y nunca termina bien...<br />
                            - Skips
                        </p>
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