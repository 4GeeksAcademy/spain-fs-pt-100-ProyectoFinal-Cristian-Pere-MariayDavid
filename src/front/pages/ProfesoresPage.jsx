import React, {useEffect,useState} from "react";
import "../../styles/ProfesoresPage.css";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

const ProfesoresPage = () => {
    const [profesor, setProfesor] = useState ({
        nombre: "Pepe Strong",
        especialidad: "Fuerza / Hipertrofia",
        email: "pepe.strong@gympro.com",
        telefono: "+34 678 456 123",
        experiencia: "5 años",
        direccion: "Calle del Hierro, 21, Valencia",
        sexo: "Masculino",
        imagen: "https://randomuser.me/api/portraits/men/75.jpg",
        horario: [
            "Lunes a Viernes: 9:00 - 13:00",
            "Martes y Jueves: 17:00 - 20:00"
        ],
        miembrosAsignados: ["David Vivar", "Sara González", "Leo Martínez"]
    });

        const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        if (store.user) {
            setProfesor(store.user)
        }
    }, [])
   console.log (profesor)
   console.log (store)

    return (
        <div className="perfil-container">
            <h1 className="perfil-titulo">Perfil del Profesor</h1>

            <div className="perfil-card">
                <div className="columna columna-izquierda">
                    <p><strong>Nombre:</strong> {profesor.nombre||"Falta"}</p>
                    <p><strong>Email:</strong> {profesor.email||"Falta"}</p>
                    <p><strong>Teléfono:</strong> {profesor.telefono||"Falta"}</p>
                    <p><strong>Dirección:</strong> {profesor.direccion||"Falta"}</p>
                    <p><strong>Sexo:</strong> {profesor.sexo||"Falta"}</p>
                    <p><strong>Experiencia:</strong> {profesor.experiencia||"Falta"}</p>
                </div>

                <div className="columna columna-centro">
                    <img src={profesor.imagen} alt="Foto del profesor" />
                    <button className="btn-editar">Editar perfil</button>
                </div>

                <div className="columna columna-derecha">
                    <p><strong>Especialidad:</strong> {profesor.especialidad}</p>
                    <p><strong>Horario:</strong></p>
                    <ul>
                        {profesor.horario?.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                </div>
            </div>

            <div className="secciones-inferiores">
                <div className="seccion">
                    <h2>Miembros asignados</h2>
                    <ul>
                        {profesor.miembrosAsignados?.map((m, i) => <li key={i}>{m}</li>)}
                    </ul>
                </div>

                <div className="seccion">
                    <h2>Calendario de sesiones</h2>
                    <p>Proximamente se integrará el calendario con reservas.</p>
                </div>

                <div className="seccion">
                    <h2>Notas del profesor</h2>
                    <p>“David está progresando genial en el plan de hipertrofia 💪”</p>
                </div>
            </div>
        </div>
    );
};

export default ProfesoresPage;
