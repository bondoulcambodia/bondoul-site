import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? "text-foreground"
      : "text-foreground/60 transition-colors hover:text-foreground/80";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Home</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/cv-builder" className={getLinkClass("/cv-builder")}>
              CV Builder
            </Link>
            <Link to="/subscription" className={getLinkClass("/subscription")}>
              Job Seeker
            </Link>
          </nav>
        </div>
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 py-4">
                <Link to="/cv-builder" className={getLinkClass("/cv-builder")}>
                  CV Builder
                </Link>
                <Link
                  to="/subscription"
                  className={getLinkClass("/subscription")}
                >
                  Subscription
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
