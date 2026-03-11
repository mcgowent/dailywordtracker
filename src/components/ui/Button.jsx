export default function Button({
  children,
  type = "button",
  onClick,
  variant = "primary",
  style = {},
  ...props
}) {
  const variantStyles =
    variant === "secondary" ? styles.secondary : styles.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...styles.base, ...variantStyles, ...style }}
      {...props}
    >
      {children}
    </button>
  );
}

const styles = {
  base: {
    border: "none",
    borderRadius: "0.65rem",
    padding: "0.7rem 1rem",
    fontWeight: 600,
    cursor: "pointer",
  },
  primary: {
    background: "#2563eb",
    color: "#fff",
  },
  secondary: {
    background: "#374151",
    color: "#fff",
  },
};
