import Header from 'components/header';
import Footer from 'components/footer';

export default function Layout({ children }) {
    <>
        <Header />

        <main>
            {children}
        </main>

        <Footer />
    </>
}