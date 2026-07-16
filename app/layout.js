export const metadata = {
  // title: "Technical Agency",
  title: {
    template: "%s | Technical Agency",
    default: "Technical Agency",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
