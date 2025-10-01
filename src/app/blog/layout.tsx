import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      {children}
      
      <Footer />
    </div>
  );
}