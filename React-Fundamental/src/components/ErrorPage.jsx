import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div>Ups, Halaman Error</div>
    </>
  );
}

export default ErrorPage;
