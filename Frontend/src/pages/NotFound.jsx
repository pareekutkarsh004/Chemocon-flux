import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import CallForPaper from "./CallForPaper";

const NotFound = () => {
  const location = useLocation();
  const isCallForPaper =
    location.pathname === "/call-for-paper" ||
    location.pathname.startsWith("/call-for-paper/");

  useEffect(() => {
    if (isCallForPaper) return;
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [isCallForPaper, location.pathname]);

  if (isCallForPaper) {
    return <CallForPaper />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-6xl font-bold text-conference-gold mb-4">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <Button asChild>
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
