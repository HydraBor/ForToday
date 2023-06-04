import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps)
{
    return (
        <>
            <Head>
                <meta name="referrer" content="never"/>
                <title>Seven days</title>
            </Head>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}
