import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <header>{/* Header component later */}</header>

      <main>
        <Outlet />
      </main>

      <footer>{/*Footer component later */}</footer>
    </>
  );
}

export default MainLayout;
