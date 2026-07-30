import "./globals.css";

export const metadata = {
  title: "Sara | Full Stack, Mobile & AI/ML Developer",
  description: "Senior Full Stack Developer specializing in web apps, mobile-ready platforms, and AI/ML automation. Download resume and book a strategy call.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
