export default function Loader() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "6px solid #ddd",
          borderTopColor: "black",
          animation: "spin 1s linear infinite",
        }}
      />

      <p style={{ marginTop: 15, fontSize: 14, color: "#444" }}>
        Loading TPSYRA…
      </p>

      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
