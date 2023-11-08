import Link from "next/link"

export default function Home() {
  return (
    <main
      style={{
        padding: "4rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        HomePage
      </h1>
      <Link href="/dashboard">
        Go to Dashboard
      </Link>
    </main>
  )
}
