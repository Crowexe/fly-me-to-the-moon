import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import Boletos from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { About } from "./pages/About-us";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} /> 

                  <Route path="/" element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                  />
                  
                  <Route path="/boletos" element={
                      <ProtectedRoute>
                        <Boletos />
                      </ProtectedRoute>
                    }
                  />

                  <Route path="/cart" element={
                      <ProtectedRoute>
                        <Cart />
                      </ProtectedRoute>
                    }
                  />

                  <Route path="/about" element={
                      <ProtectedRoute>
                        <About />
                      </ProtectedRoute>
                    }
                  />

          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;