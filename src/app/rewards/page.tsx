export default function RewardsPage() {
  return (
    <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>Bake Bliss Loyalty Points</h1>
      <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px' }}>
        Earn sweet rewards with every purchase. Join our gamified loyalty program and unlock exclusive discounts, free delivery, and birthday surprises!
      </p>
      <div style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white', padding: '40px', borderRadius: '12px', display: 'inline-block' }}>
        <h2>Join Now and Get 500 Points!</h2>
        <button className="btn-primary" style={{ marginTop: '20px' }}>Sign Up for Rewards</button>
      </div>
    </div>
  );
}
