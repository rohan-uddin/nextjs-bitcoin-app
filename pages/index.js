import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'

const Index = (props) => (
    <Layout>
        <div>
            <h1>Bitcoin Prices</h1>
            <p>Check current Bitcoin Rates</p>
            <Prices bpi={props.bpi} />
        </div>  
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json') // Makes a fetch call to the Coindesk API
    const data = await res.json()

    return {
        bpi: data.bpi
    }
}

export default Index;