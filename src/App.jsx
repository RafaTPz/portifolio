import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { useTheme } from './hooks/useTheme'
import ContatoPage from './pages/ContatoPage'
import CurriculumPage from './pages/CurriculumPage'
import HomePage from './pages/HomePage'
import MotivacaoPage from './pages/MotivacaoPage'
import SobreMimPage from './pages/SobreMimPage'
import TrabalhosPage from './pages/TrabalhosPage'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div className="bg-grid" aria-hidden="true"></div>
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="page-area">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/sobre-mim" element={<SobreMimPage />} />
          <Route path="/motivacao" element={<MotivacaoPage />} />
          <Route path="/trabalhos" element={<TrabalhosPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
