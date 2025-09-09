import "@fortawesome/fontawesome-free/css/all.min.css"
import '@/styles/globals.css'

export const metadata = {
    title: 'Iftekher Mahmud — Software Engineer',
    description: 'Iftekher Mahmud is a Skilled Software Engineer, specialized in PHP/Laravel, React-native, WordPress, Customized App delivering innovative solutions.',
    verification: {
        google: "vH8uqfESeja1JBoA_O5uVlC0MunYPlnMRFpR3ZFhZEg",
    }
}

export default function RootLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}
