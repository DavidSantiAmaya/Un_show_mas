
import ModelGrande2 from "../ModelGrande2/modelGrande2";


function pagesModel2() {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style={{ minHeight: "100vh", background: "none" }}>
            <main className="px-3">
                <h1>Cover your page.</h1>
                <ModelGrande2 />
            </main>
        </div>
    );
}

export default pagesModel2