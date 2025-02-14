  // Import metadata
import Footer from "./components/Footer/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} /> */}
      </head>
      <body>
        <>
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
