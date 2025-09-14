import "@fortawesome/fontawesome-free/css/all.min.css"
import '@/styles/globals.css'

export const metadata = {
    title: 'Iftekher Mahmud — Software Engineer',
    description: 'Iftekher Mahmud is a Skilled Software Engineer, specialized in PHP/Laravel, React-native, WordPress, Customized App delivering innovative solutions.',
    verification: {
        google: "wE7hVntg2J7RHGyHuqe7Jq8P2ZlySSE38xmMQegyGHM"
    }
}

export default function RootLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}
