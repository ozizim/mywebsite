import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="bg-gradient-to-br from-[#141414] to-black min-h-screen">
      <Component {...pageProps} />
    </main>
  );
}
