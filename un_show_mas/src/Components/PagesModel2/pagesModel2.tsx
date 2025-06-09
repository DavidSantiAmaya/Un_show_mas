
import ModelGrande2 from "../ModelGrande2/modelGrande2";


function pagesModel2() {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style={{ minHeight: "100vh", background: "none" }}>
            <main className="px-3">  
                {/* INFORMACIÓN PERSONAJE */}   
                <div style={{background: "white", textAlign: "left", fontFamily: "sans-serif", padding: "10px 20px 20px", borderRadius: "16px"}} >
                    <p>
                        <h1 className="py-4" style={{textAlign: "center"}}>RIGBY</h1>
                        Impulsivo, perezoso y muy energético. A menudo es la causa de los problemas, pero su lealtad a Mordecai es inquebrantable. Su actitud despreocupada lo mete en muchos líos.
                        <br />
                        <b>Animal:</b> Mapache. <br />
                        <b>Edad:</b> 28 años. <br />
                        <b>Altura:</b> 95.3 cm <br />
                        <b>Habilidades:</b> velocidad, fuerza, observador, buena memoria, resistencia. <br />
                        <b>Cualidades:</b> mitómano, sentido del humor, ceativo, claustrofóbico, adicto a los videojuegos, asustadizo, flojo, inmaduro, tramposo, celoso. <br />
                        <b>Relaciones:</b> Mordecai, Eileen, Papaleta, Skips, Benson, Musculoso, Fantasmín, Margarita, Thomas, CJ. <br />
                        <b>Frases:</b>
                        <ul>
                            <li>"¡Seguro! y suena como un anciano caminando"</li>
                            <li>"Todos mis juguetes, mándalo a la luna, todos mis juguetes, mándalo a la luna!"</li>
                            <li>"¿Horas extra? Eso no esta en mi diccionario"</li>
                        </ul>
                    </p>
                </div>
                {/* MODELO 3D */}
                <div style={{ minHeight: "80vh", background: "none" }}>
                    <ModelGrande2 />
                </div>
            </main>
        </div>
    );
}

export default pagesModel2