import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Chia Sẻ Cảm Xúc - Nơi Lắng Nghe Và Chữa Lành",
  description:
    "Chia sẻ cảm xúc ẩn danh - Nơi bạn được lắng nghe, được đồng cảm và được chữa lành. Dự án được thực hiện bởi sinh viên trường Khoa học liên ngành và nghệ thuật - Đại học quốc gia Hà Nội",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${quicksand.className} antialiased`}>{children}</body>
    </html>
  );
}
