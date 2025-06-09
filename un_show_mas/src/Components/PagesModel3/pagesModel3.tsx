
import ModelGrande3 from "../ModelGrande3/modelGrande3";


function pagesModel3() {
    return (

        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style={{ minHeight: "100vh", background: "none" }}>
            <main className="px-3">
                {/* INFORMACIÓN PERSONAJE */}
                <div style={{background: "white", textAlign: "left", fontFamily: "sans-serif", padding: "10px 20px 20px", borderRadius: "16px"}} >
                    <p>
                        <h1 className="py-4" style={{textAlign: "center"}}>SKIPS</h1>
                        Un yeti inmortal que siempre sabe cómo resolver los problemas del grupo. Es sabio, fuerte y confiable, y suele ser el que arregla las consecuencias de las locuras de Mordecai y Rigby.
                        <br />
                        <b>Animal:</b> Yeti. <br />
                        <b>Edad:</b> Inmortal. <br />
                        <b>Altura:</b> 1,8 m <br />
                        <b>Habilidades:</b> fuerza sobrehumana, salto, inteligencia, inmortalidad, eterna juventud, bajista, videojuegos. <br />
                        <b>Cualidades:</b> alta autoestima, desactualizado en máquinas de la actualidad. <br />
                        <b>Relaciones:</b> Mordecai, Rigby, Benson, Papaleta, Musculoso, Fantasmín, Los Guardianes de la Eterna Juventud, Muerte. <br />
                        <b>Frases:</b>
                        <ul>
                            <li>"¡Témpanos!"</li>
                            <li>"Ya he visto esto antes"</li>
                            <li>"Espero que la espera inmediata halla valido la pena"</li>
                        </ul>
                    </p>
                </div>
                {/* MODELO 3D */}
                <div style={{ minHeight: "80vh", background: "none" }}>
                    <ModelGrande3 />
                </div>
            </main>
        </div>

    );
}

export default pagesModel3