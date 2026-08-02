export default function BlogPage() {
  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <h1 style={{ marginBottom: '20px' }}>The Baking Blog</h1>
      <p>Tips, tricks, and behind-the-scenes at Bake Bliss.</p>
      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <article style={{ borderBottom: '1px solid #EAE6DF', paddingBottom: '30px' }}>
          <h2>Best Cakes in Airoli: Why Quality Matters</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '10px' }}>Published on Oct 24</p>
          <p>Discover the secrets behind our premium ingredients...</p>
        </article>
      </div>
    </div>
  );
}
