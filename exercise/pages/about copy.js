import Footer from "@/components/footer"
import Header from "@/components/header"
import styles from "@/styles/Home.module.css"
import Counter from "@/components/counter"

export default function About() {
    return(
        <>
        <Header/>
        <main>
            <h1>About Page</h1>
            <Counter/>
        </main>
        <Footer/>
        </>
    )
}