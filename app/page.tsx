export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      fontFamily: "sans-serif",
      color: "white",
    }}>
      <div style={{
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
        padding: "50px 60px",
        textAlign: "center",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Lab 8 — Vercel Deployment
        </h1>
        <hr style={{ border: "1px solid rgba(255,255,255,0.4)", margin: "20px 0" }} />
        <p style={{ fontSize: "1.3rem", margin: "10px 0" }}>
          👩‍💻 <strong>Name:</strong> Zainab
        </p>
        <p style={{ fontSize: "1.3rem", margin: "10px 0" }}>
          🎓 <strong>Roll:</strong> 01-131232-095
        </p>
        <p style={{ fontSize: "1rem", marginTop: "30px", opacity: 0.8 }}>
          Cloud Computing — Bahria University Islamabad
        </p>
      </div>
    </main>
  );
}