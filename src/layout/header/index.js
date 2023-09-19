import "./header.scss";
export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow app-header">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Service Centre
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav app-menu mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <img
                  className="mb-1"
                  alt="home"
                  src={require("../../assets/img/home.png")}
                />{" "}
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img
                  className="mb-1"
                  alt="home"
                  src={require("../../assets/img/ticket.png")}
                />{" "}
                Tickets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img
                  className="mb-1"
                  alt="home"
                  src={require("../../assets/img/service.png")}
                />{" "}
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img
                  className="mb-1"
                  alt="home"
                  src={require("../../assets/img/delivery.png")}
                />{" "}
                Delivery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <img
                  className="mb-1"
                  alt="home"
                  src={require("../../assets/img/history.png")}
                />{" "}
                History
              </a>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter Vehicle no."
                  aria-label="Search"
                />
                {/* <button className="btn btn-outline-success" type="submit">
                  Search
                </button> */}
              </li>
              <li className="nav-item mx-3">
              <img
                  className="mt-2"
                  alt="home"
                  src={require("../../assets/img/bell.png")}
                />{" "}
              </li>
              <li className="nav-item mx-3">
              <img
                  className="mb-1"
                  alt="home"
                  src={require("../../assets/img/user_img.png")}
                />{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
