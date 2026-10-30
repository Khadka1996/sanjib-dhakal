"use client";
// Last-resort page when the root layout itself fails, so it cannot rely on fonts, CSS or providers.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="ne">
      <body style={{ margin: 0, minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "system-ui, sans-serif", background: "#f7f9f6", color: "#16201a", textAlign: "center", padding: 24 }}>
        <div>
          <h1 style={{ color: "#c8102e", margin: "0 0 8px" }}>केही गडबड भयो · Something went wrong</h1>
          <p>कृपया फेरि प्रयास गर्नुहोस्। Please try again.</p>
          <p>
            <button onClick={reset} style={{ background: "#2D6B28", color: "#fff", border: 0, borderRadius: 8, padding: "12px 22px", fontSize: 16, cursor: "pointer", marginRight: 8 }}>फेरि प्रयास · Try again</button>
            <a href="/" style={{ color: "#2D6B28", fontWeight: 600 }}>गृहपृष्ठ · Home</a>
          </p>
        </div>
      </body>
    </html>
  );
}
