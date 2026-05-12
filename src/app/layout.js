import "./globals.css";

export const metadata = {
  title: "Sara | Full Stack Developer",
  description: "Portfolio of Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}