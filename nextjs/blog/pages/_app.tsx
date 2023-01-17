import Layout from '../components/Layout'

type Prop = {
    Component: any,
}

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp