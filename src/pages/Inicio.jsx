    import React from "react";
    import { useNavigate } from "react-router-dom";
    import "bootstrap/dist/css/bootstrap.min.css";
    import hoteles from "../data/detallesHoteles"; 
    import HotelCard from "../components/HotelCard"; 
    

    function Inicio() {
    const navigate = useNavigate();

    const cerrarSesion = () => {
        navigate("/"); 
    };

    const explorarHoteles = () => {
        navigate("/exploracion");
    };

    
    const getHotelesAleatorios = (num) => {
        const copia = [...hoteles];
        const seleccion = [];
        for (let i = 0; i < num; i++) {
        if (copia.length === 0) break;
        const indice = Math.floor(Math.random() * copia.length);
        seleccion.push(copia.splice(indice, 1)[0]);
        }
        return seleccion;
    };

    const hotelesAleatorios = getHotelesAleatorios(3);

    return (
        <div
        style={{
            backgroundColor: "#e6e6e6",
            backgroundImage:
            "url('https://www.transparenttextures.com/patterns/brushed-alum-dark.png')",
            minHeight: "100vh",
        }}
        >
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <a className="navbar-brand" href="#">
                StayChile
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <button className="btn btn-link nav-link" onClick={() => {}}>
                    Inicio
                    </button>
                </li>
                <li className="nav-item">
                    <button
                    className="btn btn-link nav-link"
                    onClick={() => navigate("/reservas")}
                    >
                    Reservas
                    </button>
                </li>
                <li className="nav-item">
                    <button
                    className="btn btn-link nav-link"
                    onClick={() => navigate("/exploracion")}
                    >
                    Hoteles
                    </button>
                </li>
                <li className="nav-item">
                    <button
                    className="btn btn-link nav-link"
                    onClick={cerrarSesion}
                    >
                    Cerrar Sesión
                    </button>
                </li>
                </ul>
            </div>
            </div>
        </nav>

        <div className="container text-center my-5">
            <h1 className="mb-4">¡Bienvenido a StayChile!</h1>
            <p className="lead">
            Aquí podrás buscar hoteles, hacer reservas y explorar las mejores
            opciones de hospedaje en Chile.
            </p>
            <button className="btn btn-primary btn-lg mt-3" onClick={explorarHoteles}>
            Explorar Hoteles
            </button>
            <button className="btn btn-outline-primary btn-lg mt-3">
            Mis Reservas
            </button>
        </div>

        <div className="container my-5">
            <h2 className="mb-4 text-center">Hoteles Recomendados</h2>
            <div className="row g-3 justify-content-center">
            {hotelesAleatorios.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
            ))}
            </div>
        </div>
        </div>
    );
    }

export default Inicio;