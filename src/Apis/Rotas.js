import Home from "../components/Pages/Home"
import Sobre from '../components/Pages/Sobre'
import Servicos from '../components/Pages/Servicos'
import Contato from "../components/Pages/Contato"

export const _rotas = [
    {path:'/', element: <Home /> , link:'home'},
    {path:'sobre', element: <Sobre />, link:'sobre'},
    {path:'servicos', element: <Servicos />, link:'serviços'},
    {path:'contato', element: <Contato />, link:'contato'},    
  ]