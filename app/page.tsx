export default function Home() {
  return (
    <main style={{ 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      gap: "20px",
      fontFamily: "sans-serif"
    }}>
      <h1>PhotoFrame</h1>
      <p>Crée ton visuel personnalisé en quelques secondes.</p>
      <a 
        href="/create"
        style={{
          padding: "12px 20px",
          backgroundColor: "black",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px"
        }}
      >
        Créer mon visuel
      </a>
    </main>
  );
}