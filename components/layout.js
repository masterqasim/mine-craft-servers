import styles from './layout.module.css';
import Header from '../components/header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
    return <div className={{}}>
        <Header/>
        {children}
        <Footer/>
        </div>;
}