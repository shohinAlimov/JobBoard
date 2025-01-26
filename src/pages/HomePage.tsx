import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <span className="hero__author">
            Made by Shohin Alimov
          </span>
          <h1 className="hero__title">
            The Task Manager
            That Works for You.
          </h1>
          <p className="hero__description">
            Stay on top of your tasks, track progress effortlessly, and achieve your goals with a simple, powerful task management system.
          </p>

          <div className="hero__buttons">
            <Link className="btn btn--secondary btn--secondary-xl" to="/LoginPage">Login</Link>
            <Link className="btn btn--primary btn--primary-xl" to="/RegisterPage">Start For Free</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage;