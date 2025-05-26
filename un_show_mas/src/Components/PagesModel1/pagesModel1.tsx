
import ModelGrande1 from "../ModelGrande1/modelGrande1";


function pagesModel1() {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style={{ minHeight: "100vh", background: "none" }}>
            <main className="px-3">
                <h1 className="pt-4" >MORDECAI</h1>
                <ModelGrande1 />
            </main>
        </div>
    );
}

export default pagesModel1