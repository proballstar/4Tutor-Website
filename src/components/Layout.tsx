import Navbar from "./Navbar";

export default function DocumentLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}