import { Outlet } from "react-router-dom"
import { Suspense } from "react"; 
import { Header } from "components/Header/Header";
import { Loader } from "components/Loader/Loader";
import css from './Layout.modules.css'
    
export const Layout = () => {
    return <>
        <Header />
        <main>
            <Suspense fallback={
                <div className={css.wrapLoader}>
                    <Loader />
                </div>
            }>
                <Outlet />
            </Suspense>
        </main>
    </>
};