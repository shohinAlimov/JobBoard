import { Link } from "react-router-dom";
import FeaturedJobs from "../components/FeaturedJobs";

function HomePage() {

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="hero__wrapper">
              <h1 className="visually-hidden">Site for finding jobs</h1>
              <h2 className="hero__title">Find Your Next Great Opportunity</h2>
              <p className="hero__description">
                Whether you’re looking for your dream job or searching for talent,
                our platform connects job seekers and employers quickly and easily.
              </p>
            </div>
            <div className="hero__buttons">
              <Link to="/jobs" className="btn btn--primary">
                Browse Jobs
              </Link>
              <Link to="/post-job" className="btn btn--secondary">
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-jobs">
        <div className="container">
          <h2 className="featured-jobs__title">Recent Openings</h2>
          <FeaturedJobs />
        </div>
      </section>
    </main>
  )
}

export default HomePage;