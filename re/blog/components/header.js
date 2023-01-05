import Container from '../components/container.js'
import Logo from '../components/logo'
import Nav from '../components/nav'
import styles from '../styles/header.module.css'

export default function header() {
    return (
            <header>
                <Container large>
                    <div className={styles.flexContainer}>
                        <Logo boxOn />
                        <Nav />    
                    </div>                     
                </Container>
            </header>
    )
}