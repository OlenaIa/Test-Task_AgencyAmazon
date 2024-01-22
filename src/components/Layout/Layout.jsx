import { Outlet } from "react-router-dom"
import { Suspense } from "react"; 
import { Header } from "components/Header/Header";
import { Loader } from "components/Loader/Loader";
    
export const Layout = () => {
    return <>
        <Header />
        <main>
            <Suspense fallback={
                <div><Loader /></div>
            }>
                <Outlet />
            </Suspense>
        </main>
    </>
};