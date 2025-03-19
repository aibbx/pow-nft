
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-wealth-cream/30">
      <div className="text-center p-6 max-w-md">
        <div className="inline-block p-6 mb-6 rounded-full bg-wealth-gold/10">
          <span className="text-8xl font-display font-bold bg-clip-text text-transparent bg-gold-gradient">
            404
          </span>
        </div>
        <h1 className="text-3xl font-display font-bold mb-4">Page Not Found</h1>
        <p className="text-wealth-muted mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          className="bg-gold-gradient text-black font-medium hover:opacity-90 transition-opacity"
          onClick={() => window.location.href = "/"}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
