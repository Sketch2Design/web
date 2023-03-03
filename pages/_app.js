import Context from '@/store/context/Context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-zinc-900 text-white">
            <Context>
                <Component {...pageProps} />
            </Context>
        </div>
    )
}

export default MyApp
