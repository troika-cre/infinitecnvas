import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Imprint from './pages/Imprint';
import TOS from './pages/TOS';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/imprint" element={<Imprint />} />
                    <Route path="/tos" element={<TOS />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
