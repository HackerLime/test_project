import { BrowserRouter } from 'react-router-dom';
import { Container } from '../shared/ui/appContainer';
import { NavBar } from '../widgets/NavBar/ui/NavBar';
import { MainProviders } from './providers';
import { AppRouter } from './routing';
import './styles/global.css';


function App() {



  return (
    <MainProviders>
      <BrowserRouter>
        <Container>
          <NavBar />
          <AppRouter />
        </Container>
      </BrowserRouter>
    </MainProviders>
  )
}

export default App




