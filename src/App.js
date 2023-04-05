import { Route, Routes, Navigate, Link } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from './routes';
import { DefaultLayout } from './layouts/DefaultLayout';

function App() {
    return (
        <>
            <nav>
                <ul>
                    {publicRoutes.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path}> {item.title} </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <Routes>
                {publicRoutes.map((item, index) => {
                    const Page = item.component;
                    let Layout = DefaultLayout;

                    if (item.layout) {
                        Layout = item.layout;
                    } else if (item.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={item.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </>
    );
}

export default App;
