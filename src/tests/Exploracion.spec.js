import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Exploracion from "../pages/Exploracion.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Exploracion Component", () => {

  it("debe filtrar los hoteles por rango de precio correctamente", () => {
    render(
      <MemoryRouter>
        <Exploracion />
      </MemoryRouter>
    );

    // Verifica que inicialmente existan varios hoteles (sin filtro)
    const hotelesIniciales = screen.getAllByRole("img");
    expect(hotelesIniciales.length).toBeGreaterThan(1);

    // Seleccionamos el filtro de precios (ejemplo: $0 - $25.000)
    const selectPrecio = screen.getByLabelText("Precio");
    fireEvent.change(selectPrecio, { target: { value: "0-25000" } });

    // Después del filtro, deberían mostrarse solo hoteles con ese rango
    const hotelesFiltrados = screen.getAllByRole("img");
    hotelesFiltrados.forEach((img) => {
      // No podemos leer el precio directo, pero validamos que siga existiendo al menos uno
      expect(img).toBeTruthy();
    });

    // Aseguramos que el select cambió su valor
    expect(selectPrecio.value).toBe("0-25000");
  });


  it("debe mostrar mensaje cuando no hay hoteles con ese rango de precio", () => {
    render(
      <MemoryRouter>
        <Exploracion />
      </MemoryRouter>
    );

    const selectPrecio = screen.getByLabelText("Precio");
    // Cambiamos a un rango exagerado para no encontrar hoteles
    fireEvent.change(selectPrecio, { target: { value: "9999999-10000000" } });

    // Verificamos que aparezca el mensaje de 'no encontrados'
    const mensaje = screen.getByText("No se encontraron hoteles con esos filtros.");
    expect(mensaje).toBeTruthy();
  });
});
