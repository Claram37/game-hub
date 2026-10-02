import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import errorImage from "../assets/error.png";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div>
          <img
            src={errorImage}
            alt="Error"
            className="img-fluid mb-3 rounded"
            style={{ maxWidth: "250px" }}
          />
          <div className="text-center">
            <h1>Oops!</h1>
            <p className="mb-0 fs-5">
              {isRouteErrorResponse(error)
                ? "This page does not exist."
                : "An unexpected error occurred."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
