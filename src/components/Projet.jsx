import { Image } from "react-bootstrap";

function Projet() {
  return (
    <div style={{ paddingTop: '5vh' }}>
      <h1>Projects</h1>
      <section className="row justify-content-center" style={{ padding: '10vh 20vh 10vh 20vh' }}>
        <div className="col-sm-12 col-md-12 mb-4">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">kriTirank</h5>
              <p className="card-text">kriTirank is a project that allows users to book a football field in their
                desired location. I was responsible for developing the backend of the
                project, which included implementing features like path tracing,
                geolocation, user authentication, booking process, and sport complex
                registration.
              </p>
              <a href="https://github.com/AlaouiMohamedDev/server-fields-reservation" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 mb-4">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">Restaurant Discovery System</h5>
              <p className="card-text">I developed a restaurant discovery system that allows users to find the
                best restaurants near them, showing them their menus and pictures, and
                providing a path to the desired restaurant. I was responsible for
                developing both the front-end and back-end of the project.
              </p>
              <a href="https://github.com/f-amine/SpringBoot-Restaurant-Reservation" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projet;
