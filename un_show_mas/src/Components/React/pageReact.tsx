import './pageReact.css';

function pagesReact() {
     return (
          <>
               <main>
                    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
                          <div className="col-md-6 p-lg-5 mx-auto my-5">
                                <h1 className="display-3 fw-bold">Bienvenido a la demo de React</h1>
                                <h3 className="fw-normal text-muted mb-3">
                                      Este sitio web está construido con React, una biblioteca de JavaScript para crear interfaces de usuario modernas y eficientes.
                                </h3>
                                <div className="d-flex gap-3 justify-content-center lead fw-normal">
                                      <a className="icon-link" href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                                             Aprende más sobre React
                                             <svg className="bi" aria-hidden="true"><use xlinkHref="#chevron-right"></use></svg>
                                      </a>
                                      <a className="icon-link" href="https://es.react.dev/learn/start-a-new-react-project" target="_blank" rel="noopener noreferrer">
                                             Cómo empezar
                                             <svg className="bi" aria-hidden="true"><use xlinkHref="#chevron-right"></use></svg>
                                      </a>
                                </div>
                          </div>
                          <div className="product-device shadow-sm d-none d-md-block"></div>
                          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                    </div>

                    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 py-3">
                                      <h2 className="display-5">Librerías utilizadas</h2>
                                      <p className="lead">
                                             Además de React, este sitio utiliza otras librerías populares como React Router para la navegación, y Bootstrap para el diseño responsivo y estilos modernos.
                                      </p>
                                </div>
                                <div className="bg-body-tertiary shadow-sm mx-auto d-flex align-items-center justify-content-center" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}>
                                      <img
                                             src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
                                             alt="Logo de React"
                                             style={{ maxWidth: "180px", maxHeight: "150px" }}
                                      />
                                </div>
                          </div>
                          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                      <h2 className="display-5">Explora el código</h2>
                                      <p className="lead">
                                             Puedes explorar los componentes y aprender cómo se integran estas tecnologías para crear aplicaciones web interactivas y escalables.
                                      </p>
                                </div>
                              <div className="bg-dark shadow-sm mx-auto d-flex align-items-center justify-content-center" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}>
                                   <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                        alt="React Logo"
                                        style={{ maxWidth: "150px", maxHeight: "150px" }}
                                   />
                              </div>
                         </div>
                    </div>
               </main>
          </>
     );
}

export default pagesReact