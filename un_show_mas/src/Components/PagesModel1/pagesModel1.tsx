
import ModelGrande1 from "../ModelGrande1/modelGrande1";


function pagesModel1() {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style={{ minHeight: "100vh", background: "none" }}>
            <main className="px-3">
                <h1 className="py-4">MORDECAI</h1>
                <div style={{background: "white", textAlign: "left", fontFamily: "sans-serif", padding: "10px 20px 20px"}} >
                    <p>
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
                            <li>"¡No hay nada mejor que un buen día de trabajo!"</li>
                            <li>"¡Vamos a hacer algo épico!"</li>
                            <li>"¡Rigby, no hagas tonterías!"</li>
                            <li>"¡Margarita, eres increíble!"</li>
                            <li>"¡Benson, no te enojes, por favor!"</li>
                        </ul>
                    
                    </p>
                </div>
                <ModelGrande1 />
            </main>
        </div>
    );
}

export default pagesModel1