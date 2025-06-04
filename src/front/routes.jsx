import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import  NutricionPage  from "./pages/NutricionPage";
import  SportPage  from "./pages/SportPage";
import  Entrenadores  from "./pages/Entrenadores";
import  AboutUs  from "./pages/AboutUs";
import Eventos from "./pages/Eventos";
import Tarifas from "./pages/Tarifas";
import User from "./pages/User";
import ProfesoresPage from "./pages/ProfesoresPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>

      <Route path="/" element={<Home />} />
      <Route path="/single/:theId" element={<Single />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/nutricion" element={<NutricionPage />} />
      <Route path="/sport" element={<SportPage />} /> 
      <Route path="/entrenadores" element={<Entrenadores />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Eventos" element={<Eventos />} />
      <Route path="/Tarifas" element={<Tarifas />} />
      <Route path="/User" element={<User />} />
      <Route path="/Profesores" element={<ProfesoresPage />} />
      
    </Route>
  )
);
