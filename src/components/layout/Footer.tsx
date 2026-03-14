import { Link } from "react-router-dom";
import { person } from "../../data/person";

function Footer() {
    return (
 <footer className="from-red-800 to-red-900 bg-linear-to-r text-neutral-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    
                    {/* Identity Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">{person.name}</h3>
                        <p className="text-sm opacity-80 max-w-xs mx-auto md:mx-0">
                            Explorez la carrière de Mia Goth.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-lg font-semibold text-white mb-2">Navigation</h4>
                        <Link to="/" className=" font-bold hover:text-white transition-colors duration-200">Accueil</Link>
                        <Link to="/features" className="font-bold hover:text-white transition-colors duration-200">Caractéristiques</Link>
                        <Link to="/timeline" className="font-bold hover:text-white transition-colors duration-200">Frise</Link>
                        <Link to="/testimonial" className="font-bold hover:text-white transition-colors duration-200">Citations</Link>
                    </div>

                    {/* Social / Legal */}
                    <div className="flex flex-col space-y-2">
                         <h4 className="text-lg font-semibold text-white mb-2">Légal & Social</h4>
                        <p className="text-sm">© {new Date().getFullYear()} {person.name}. Tous droits réservés.</p>
                        <div className="flex justify-center md:justify-start space-x-4 mt-2">
                            <a href="https://x.com/miagothupdate" className="font-semibold hover:text-white transition-colors">X</a>
                            <a href="https://www.instagram.com/miaxgoth/?hl=fr" className="font-semibold hover:text-white transition-colors">Instagram</a>
                            <a href="https://www.imdb.com/name/nm5301405/" className="font-semibold hover:text-white transition-colors">IMDb</a>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-neutral-800 mt-10 pt-6 text-center text-xs opacity-50">
                    <p>Design par Ada Tech School Student</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;