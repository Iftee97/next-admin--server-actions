import Link from "next/link"

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h3 style={{ marginBottom: '1rem', fontSize: '2.25rem' }}>
        the page you're looking for doesn't exist
      </h3>
      <Link 
        href="/dashboard" 
        style={{ 
          border: '1px solid white', 
          borderRadius: '9px', 
          padding: '12px 16px', 
        }}
      >
        go back to dashboard
      </Link>
    </div>
  )
}
