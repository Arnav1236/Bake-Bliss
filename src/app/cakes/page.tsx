import Image from "next/image";

const CAKES = [
  { id: 1, title: "Classic Pastry", src: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&auto=format&fit=crop" },
  { id: 2, title: "Red Velvet Dream", src: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=600&auto=format&fit=crop" },
  { id: 3, title: "Black Forest Delight", src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop" },
  { id: 4, title: "Fresh Fruit Tart", src: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=600&auto=format&fit=crop" },
  { id: 5, title: "Berry Chocolate", src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=600&auto=format&fit=crop" },
  { id: 6, title: "Vanilla Bean", src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=600&auto=format&fit=crop" }
];

export default function CakesPage() {
  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Our Cakes</h1>
      <p>Explore our premium collection of handcrafted cakes.</p>
      {/* Category filters and grid would go here */}
      <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {CAKES.map(cake => (
          <div key={cake.id} style={{ border: '1px solid #EAE6DF', padding: '20px', borderRadius: '8px' }}>
            <div style={{ height: '200px', marginBottom: '15px', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
              <Image 
                src={cake.src}
                alt={cake.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3>{cake.title}</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '15px' }}>₹1200</p>
            <button className="btn-secondary" style={{ width: '100%' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
