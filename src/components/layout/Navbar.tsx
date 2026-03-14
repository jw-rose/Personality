import { Link, useMatch, useResolvedPath } from "react-router-dom"
import image from "../../assets/img/mia/logo.png"

export default function Navbar() {
  return (
    <nav className="from-red-800 to-red-900 bg-linear-to-r text-zinc-100 shadow-md">
      <div className="w-full px-4 h-16 flex items-center justify-between">
        {/* Brand / Home Link */}
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img className="h-28 w-40 mt-3" src={image} alt="logo" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-6 font-bold">
          <CustomLink to="/Features">Caractéristiques</CustomLink>
          <CustomLink to="/Timeline">Frise</CustomLink>
          <CustomLink to="/Testimonial">Citations</CustomLink>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ to, children }: { to: string; children: React.ReactNode }) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
    <li className={isActive ? "active" : ""}>
      <Link 
        to={to} 
        className={`text-lg transition-colors hover:text-white ${
          isActive ? "font-semibold text-white border-b-2 border-white pb-1" : "text-zinc-200"}`}>{children}
          </Link>
    </li>
  );
}




