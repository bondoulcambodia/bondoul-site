import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (path: string) => {
    const baseClass = "transition-colors hover:text-primary";
    return location.pathname === path
      ? `text-primary font-bold ${baseClass}`
      : `text-muted-foreground ${baseClass}`;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-foreground">Home</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium ">
            <Link to="/cv-builder" className={getLinkClass("/cv-builder")}>
              CV Builder
            </Link>
            <Link to="/jobseeker" className={getLinkClass("/jobseeker")}>
              Job Seeker
            </Link>
            <Link to="/recruiter" className={getLinkClass("/recruiter")}>
              Recruiter
            </Link>
          </nav>
        </div>
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 py-4">
                <Link to="/" className={getLinkClass("/")}>
                  Home
                </Link>
                <Link to="/cv-builder" className={getLinkClass("/cv-builder")}>
                  CV Builder
                </Link>
                <Link to="/jobseeker" className={getLinkClass("/jobseeker")}>
                  Job Seeker
                </Link>
                <Link to="/recruiter" className={getLinkClass("/recruiter")}>
                  Recruiter
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Navbar;
