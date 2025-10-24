import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const usuario = event.target.usuario.value.trim();
        const password = event.target.password.value.trim();

        if (usuario && password) {
        navigate("/inicio");
        } else {
        alert("Por favor completa ambos campos");
        }
    };

    return (
        <div className="bg-light d-flex justify-content-center align-items-center vh-100" style={{        backgroundImage: "url(/img/fondo.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",}}>

        <div className="card shadow-lg p-4" style={{ width: "320px",}}>
            <h1 className="text-center mb-4">StayChile</h1>
            <h5 className="text-center mb-3">Iniciar Sesión</h5>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="text" name="usuario" className="form-control" placeholder="Usuario" />
            </div>
            <div className="mb-3">
                <input type="password" name="password" className="form-control" placeholder="Contraseña" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Entrar</button>
            </form>
        </div>
        </div>
    );
}

export default Login;
