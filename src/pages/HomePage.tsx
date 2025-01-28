import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { loggedInUser } = useAuth(); // Get login state & logout function

  return (
    <>
      <Header />
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

            {loggedInUser ? (
              <>
              </>
            ) : (
              <>
                <div className="hero__buttons">
                  <Link className="btn btn--secondary btn--secondary-xl" to="/LoginPage">Login</Link>
                  <Link className="btn btn--primary btn--primary-xl" to="/RegisterPage">Start For Free</Link>
                </div>
              </>
            )}

          </div>
        </div>
      </section>

    </>
  )
}

export default HomePage;