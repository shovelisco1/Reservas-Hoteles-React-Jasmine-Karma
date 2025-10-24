import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import hoteles from "../data/detallesHoteles";

function Pago() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const nombreHotel = params.get("nombre");
  const precioHotel = params.get("precio");

  const hotel = hoteles.find((h) => h.nombre === nombreHotel);

  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [fechaLlegada, setFechaLlegada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [personas, setPersonas] = useState(1);
  const [reservaPara, setReservaPara] = useState("mi");
  const [tarjeta, setTarjeta] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");

  // Formateo tarjeta y expiración
  const handleTarjetaChange = (e) => {
    let valor = e.target.value.replace(/\D/g, "");
    valor = valor.replace(/(.{4})/g, "$1 ").trim();
    setTarjeta(valor);
  };

  const handleExpChange = (e) => {
    let valor = e.target.value.replace(/\D/g, "");
    if (valor.length > 2) {
      valor = valor.substring(0, 2) + "/" + valor.substring(2, 4);
    }
    setExp(valor);
  };

  // Enviar reserva
  const handleSubmit = (e) => {
    e.preventDefault();

    const reserva = {
      nombreHotel: nombreHotel || "Hotel no especificado",
      direccion: hotel?.direccion || "",
      precio: precioHotel
        ? `$${parseInt(precioHotel).toLocaleString("es-CL")}`
        : "-",
      fechaLlegada,
      fechaSalida,
      personas,
      reservaPara,
      nombre,
      apellido,
    };

    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));

    alert("✅ Pago realizado con éxito. ¡Gracias por tu reserva!");
  };

  return (
    <div
      style={{
        backgroundImage: "url(/img/fondo.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/inicio">
            StayChile
          </a>
        </div>
        <div className="collapse navbar-collapse" style={{ paddingLeft: "150px" }}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/inicio">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/reservas">
                Reservas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/exploracion">
                Hoteles
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => alert("Cerrar sesión")}
              >
                Cerrar Sesión
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container my-5">
        <div className="row justify-content-center">
          {/* Formulario */}
          <div className="col-md-6">
            <div className="card shadow p-4 mb-4 mb-md-0">
              <h3 className="mb-3">Finalizar Reserva</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Fecha de llegada</label>
                    <input
                      type="date"
                      className="form-control"
                      value={fechaLlegada}
                      onChange={(e) => setFechaLlegada(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Fecha de salida</label>
                    <input
                      type="date"
                      className="form-control"
                      value={fechaSalida}
                      onChange={(e) => setFechaSalida(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Cantidad de personas</label>
                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    max="8"
                    value={personas}
                    onChange={(e) => setPersonas(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Reserva para:</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="reservaPara"
                      value="mi"
                      checked={reservaPara === "mi"}
                      onChange={() => setReservaPara("mi")}
                    />
                    <label className="form-check-label">Para mí</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="reservaPara"
                      value="otra"
                      checked={reservaPara === "otra"}
                      onChange={() => setReservaPara("otra")}
                    />
                    <label className="form-check-label">Para otra persona</label>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Número de tarjeta</label>
                  <input
                    type="text"
                    className="form-control"
                    maxLength="19"
                    placeholder="XXXX XXXX XXXX XXXX"
                    value={tarjeta}
                    onChange={handleTarjetaChange}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Fecha de caducidad (MM/AA)</label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength="5"
                      placeholder="MM/AA"
                      value={exp}
                      onChange={handleExpChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength="4"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Pagar ahora
                </button>
              </form>
            </div>
          </div>

          {/* Info hotel */}
          <div className="col-md-4">
            <div className="card shadow p-3">
              <img
                src={hotel?.imagen?.[0]}
                alt="Hotel"
                className="card-img-top mb-3"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{nombreHotel}</h5>
                <p className="card-text">{hotel?.descripcion}</p>
                <p>
                  <strong>Dirección:</strong> {hotel?.direccion}
                </p>
                <p>
                  <strong>Precio:</strong>{" "}
                  {precioHotel
                    ? `$${parseInt(precioHotel).toLocaleString("es-CL")}`
                    : "-"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pago;
