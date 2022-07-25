import { Link, NavLink, useNavigate } from "react-router-dom";


export const Navbar = () => {

  const navigate = useNavigate();

  const onLogout = ()=>{
    navigate('/login', {
      replace: true
    });
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="container-fluid d-flex">
        <a className="navbar-brand" href="#"> <i className="bi bi-box"></i> My inventory</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/dashboard">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/products">Productos</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/brands">Marcas</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/profile" >Grover Rendich</NavLink>
            </li>
            <li className="nav-item">
            <button className="btn btn-outline-danger text-light border-light" onClick={ onLogout } >Salir</button>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  )
}
