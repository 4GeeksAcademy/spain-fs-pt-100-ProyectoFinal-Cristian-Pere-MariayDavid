import React from "react";
import { Navbar } from "../components/Navbar";
import CardPlan from "../components/CardPlan";

// index.css
import "../../styles/sport.css";

const SportPage = () => {

    const planes = [
  {tittle: "Plan de Pérdida de Peso", img: "/perdidaPeso.webp", parrafo: "Menús bajos en calorías con todos los nutrientes esenciales."},
  {tittle: "Plan Ganancia Muscular", img: "/masa_muscular.jpg", parrafo: "Alta ingesta proteica y planificación para el crecimiento muscular."},
  {tittle: "Plan Salud General", img: "/ejercicios_balanceados.jpg", parrafo: "Nutrición balanceada para sentirte bien cada día."}
] 

    return (
        <div className="sport-page container mt-5 ">
            <section className="sport-header text-center py-5">
                <h1 className="display-4 tittle">Deporte Personalizado</h1>
                <p className="lead">
                    Mejora tu salud con planes de deporte adaptados a tus objetivos.
                </p>
            </section>

            <section className="planes my-5">
        <h2 className="text-center subtittle mb-4">Nuestros Planes</h2>
        <div className="row pb">
          {planes.map ((p)=>{
            return (
              <div className="col-md-4">
                <CardPlan tittle={p.tittle} img={p.img} parrafo={p.parrafo}></CardPlan>
              </div>
            )
          })}
        </div>
      </section>

            {/* Beneficios */}
            <section className="beneficios my-5">
                <h2 className="text-center subtittle mb-4">¿Por qué elegirnos?</h2>
                <ul className="list-group list-group-flush caja-bot">
                    <li className="list-group-item">🍏 Asesoramiento profesional</li>
                    <li className="list-group-item">🧬 Ejercicios adaptadas a tu metabolismo</li>
                    <li className="list-group-item">📊 Seguimiento de resultados</li>
                </ul>
            </section>
        </div>
    );
};
export default SportPage;