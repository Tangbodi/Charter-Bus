import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div>
      <div className='main-menu-wrapper'>
        <nav className='navbar navbar-expand-xl'>
          <div className='top-items-wrapper'>
            <div className='logo-toggle-wrapper'>
              {/* need to change */}
              <a href="https://dattco.com/" className="custom-logo-link" rel="home" aria-current="page">
                <img width="240" height="44" src="https://dattco.com/wp-content/uploads/2024/02/DATTCO-Logo.svg" className="custom-logo" alt="DATTCO Logo" decoding="async" />
              </a>
            </div>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className="navbar-nav text-white">
              <li >
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Charter</a>
                <ul className="dropdown-menu depth_0">
                  <li id="menu-item-59" className="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-59">
                    <a href="https://dattco.com/charter-services/" className="dropdown-item">Charter Services</a>
                  </li>
                  <li id="menu-item-662" className="menu-item menu-item-type-custom menu-item-object-custom nav-item nav-item-662">
                    <a href="/charter-services/#groups" className="dropdown-item">Groups</a>
                  </li>
                  <li id="menu-item-666" className="menu-item menu-item-type-custom menu-item-object-custom nav-item nav-item-666">
                    <a href="/charter-services#field-trips" className="dropdown-item">Field Trips</a>
                  </li>
                  <li id="menu-item-665" className="menu-item menu-item-type-custom menu-item-object-custom nav-item nav-item-665">
                    <a href="/charter-services#sports" className="dropdown-item">Sports</a>
                  </li>
                  <li id="menu-item-67" className="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-67">
                    <a href="https://dattco.com/book-a-vehicle/" className="dropdown-item">Request a Quote</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;

