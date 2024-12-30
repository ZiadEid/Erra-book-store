import { createRoot } from 'react-dom/client';
import { ProjectProvider } from './Context/Project';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'aos/dist/aos.css';
import { CartProvider } from './Context/Cart';

createRoot(document.getElementById('root')).render(
    <ProjectProvider>
        <CartProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CartProvider>
    </ProjectProvider>
)
