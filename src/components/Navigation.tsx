
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be replaced with actual auth state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const simulateLogin = () => {
    setIsLoggedIn(true);
  };

  const simulateLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-10">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="bg-passport-500 text-white p-2 rounded-md">PP</span>
          <span className="text-lg font-semibold text-passport-900">PassportPanda</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-passport-900 hover:text-passport-500 transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-passport-900 hover:text-passport-500 transition-colors">
            Services
          </Link>
          <Link to="/requirements" className="text-passport-900 hover:text-passport-500 transition-colors">
            Requirements
          </Link>
          <Link to="/track" className="text-passport-900 hover:text-passport-500 transition-colors">
            Track Application
          </Link>
          <Link to="/contact" className="text-passport-900 hover:text-passport-500 transition-colors">
            Contact Us
          </Link>

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserCircle className="h-6 w-6 text-passport-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={simulateLogout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex space-x-2">
              <Button onClick={simulateLogin} variant="outline" size="sm">
                Login
              </Button>
              <Button asChild size="sm">
                <Link to="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container px-4 mx-auto py-4 flex flex-col space-y-4">
            <Link to="/" className="text-passport-900 hover:text-passport-500 transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-passport-900 hover:text-passport-500 transition-colors">
              Services
            </Link>
            <Link to="/requirements" className="text-passport-900 hover:text-passport-500 transition-colors">
              Requirements
            </Link>
            <Link to="/track" className="text-passport-900 hover:text-passport-500 transition-colors">
              Track Application
            </Link>
            <Link to="/contact" className="text-passport-900 hover:text-passport-500 transition-colors">
              Contact Us
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="text-passport-900 hover:text-passport-500 transition-colors">
                  Dashboard
                </Link>
                <Link to="/profile" className="text-passport-900 hover:text-passport-500 transition-colors">
                  My Profile
                </Link>
                <Button onClick={simulateLogout} variant="ghost" className="justify-start px-0">
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex space-x-2">
                <Button onClick={simulateLogin} variant="outline" size="sm">
                  Login
                </Button>
                <Button asChild size="sm">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
