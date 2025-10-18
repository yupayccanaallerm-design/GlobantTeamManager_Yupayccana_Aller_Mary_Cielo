import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <p>Bienvenido {user.nombre || "Usuario"} 👋</p>

      <nav style={{ marginTop: 20 }}>
        <Link to="/projects" style={{ marginRight: 10 }}>Ver Proyectos</Link>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
        >
          Cerrar sesión
        </button>
      </nav>
    </div>
  );
}
