import { Link } from "react-router-dom";// Importacion de la libreria link

function Header (){
    return (

        <>
        <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/Carro29.ico" alt="Logo" width="30" height="30" className="d-inline-block align-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item"> 
                                <Link className="nav-link active" aria-current="page" to="/PagesModel1">Mordecai</Link>  
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/PagesModel2">Rigby</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/PagesModel3">Skips</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Juego">Juego</Link> 
                            </li>
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/React">React</Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
        </>

    );
        

}
 
export default Header