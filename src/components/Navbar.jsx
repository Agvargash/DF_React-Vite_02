export default function Navbar() {
    const total = 25000;
    const token = false;

  return (

<div className="Navbar_container">
      <div className="Navbar_title">
        <button type="button" className="btn btn-dark">¡Pizzería Mamma Mía!</button>
      </div>

      <div className="Navbar_sections">
        <button type="button" className="btn btn-outline-light btn-sm">🍕 Home</button>
        <button type="button" className="btn btn-outline-light btn-sm">🔐 Login</button>
        <button type="button" className="btn btn-outline-light btn-sm">🔐 Register</button>
      </div>

      <div className="Navbar_chart">
        <button type="button" className="btn btn-outline-success btn-sm">🛒 Total: ${total.toLocaleString()}</button>
      </div>
    </div>
  );
}

