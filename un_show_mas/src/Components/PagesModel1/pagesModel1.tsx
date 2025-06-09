
import ModelGrande1 from "../ModelGrande1/modelGrande1";


function pagesModel1() {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style={{ minHeight: "100vh", background: "none" }}>
            <main className="px-3">
                <div style={{background: "white", textAlign: "left", fontFamily: "sans-serif", padding: "10px 20px 20px", borderRadius: "16px"}} >
                    <p>
                        <h1 className="py-4" style={{textAlign: "center"}}>MORDECAI</h1>
                        Responsable y algo más maduro que Rigby, pero también se deja llevar por la diversión. Le gusta el arte, la música y siempre trata de mantener el orden... aunque no siempre lo logra.
                        <br />
                        <b>Animal:</b> Arrendajo. <br />
                        <b>Edad:</b> 23 años. <br />
                        <b>Altura:</b> 1,8 m <br />
                        <b>Habilidades:</b> resistencia, liderazgo, experto en videojuegos, bailarín, rapero, cantante, guitarrista. <br />
                        <b>Cualidades:</b> inteligente, responsable, celoso, fiestero, veraz. <br />
                        <b>Relaciones:</b> Rigby, Margarita, CJ, Benson, Papaleta, Skips, Eileen, Musculoso, Fantasmín, Vendedor de películas. <br />
                        <b>Frases:</b>
                        <ul>
                            <li>"¡Reglas adios, reglas adios, ya no viviremos mas con las tontas reglas!"</li>
                            <li>"Yo sé lo que vas a elegir antes de que lo elijas bebé"</li>
                            <li>"¡No acomodaremos sillas otra vez, no acomodaremos silllas otra vez!"</li>
                        </ul>
                    </p>
                </div>
                <div style={{ minHeight: "80vh", background: "none" }}>
                    <ModelGrande1 />
                </div>
            </main>
        </div>
    );
}

export default pagesModel1