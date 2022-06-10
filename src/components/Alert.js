import "./Alert";

export function Alert({ message }) {
    return (
      <div
        className="Alerta"
        role="alert"
      >
        <span className="sm:inline block">{message}</span>

      </div>
    );
  }