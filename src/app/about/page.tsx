export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>About Bake Bliss</h1>
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center', marginTop: '40px' }}>
        <div style={{ flex: 1, height: '400px', backgroundColor: '#EAE6DF', borderRadius: '12px' }}>
          {/* Image placeholder */}
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: '20px' }}>Our Story</h2>
          <p style={{ marginBottom: '15px' }}>
            Born from a passion for perfection, Bake Bliss - Airoli brings you the most luxurious, 
            handcrafted cakes made with premium ingredients from around the world.
          </p>
          <p>
            Every cake is a work of art, designed to elevate your celebrations.
          </p>
        </div>
      </div>
    </div>
  );
}
