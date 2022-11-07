
import {
    Link,
    Outlet,
} from "react-router-dom";


export default function BaseLayout() {

    return (
        <>
            <header>This is header
                <nav>
                    <section>
                        <h1>Redux Essentials Example</h1>

                        <div className="navContent">
                        <div className="navLinks">
                            <Link to="/">Posts</Link>
                        </div>
                        </div>
                    </section>
                </nav>
            </header>

            <Outlet />
            <footer>This is footer</footer>
        </>
    )
}