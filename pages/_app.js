import '../styles/globals.css';
import {QueryClient, QueryClientProvider,} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {useState} from "react";

const queryClient = new QueryClient()

function MyApp({Component, pageProps}) {
    const [theme, setTheme] = useState("white");
    return (
        <QueryClientProvider client={queryClient}>
            <div className={theme}>
                <div className={"theme-selection"}>
                    <div>
                        white mode: <input type={"radio"} value={"white"} checked={theme === "white"}
                                           onChange={() => setTheme("white")}/>
                    </div>
                    <div>
                        dark mode: <input type={"radio"} value={"dark"} checked={theme === "dark"}
                                          onChange={() => setTheme("dark")}/>
                    </div>
                </div>
                <Component {...pageProps}/>
            </div>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}

export default MyApp
