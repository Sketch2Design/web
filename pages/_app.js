import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-zinc-900 text-white">
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
