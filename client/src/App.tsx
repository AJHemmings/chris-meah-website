import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import ParticleCanvas from "@/components/ParticleCanvas";

// Router component for handling routes
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Main App component with continuous background
function App() {
  return (
    // The main app container with continuous background
    <div className="relative bg-gradient-to-br from-black via-primary to-black min-h-screen">
      {/* Continuous particle background that spans the entire site */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-70">
        <ParticleCanvas />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Router />
        <Toaster />
      </div>
    </div>
  );
}

export default App;
