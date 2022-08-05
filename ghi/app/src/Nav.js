import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/rolled">CarCar</NavLink>
        <div className="form-check form-switch">
          <input type="checkbox" className="form-check-input" id="darkSwitch" />
          <label className="custom-control-label" htmlFor="darkSwitch">Dark Mode</label>
          <input className="form-check-input" type="checkbox" id="lightSwitch" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/inventory">Inventory</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/employee/new">New Sales Person</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/customer/new">New Customer</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/sales">Sales List</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/sales/new">New Sales</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/saleshistory">Sales History</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
