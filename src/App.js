import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes, privateRoutes } from './routes';
import { DefaultLayout } from './layouts/home/DefaultLayout';
import { DefaultLayoutAdmin } from './layouts/admin/DefaultLayout';

function App() {
    return (
        <>
            <Routes>
                {publicRoutes.map((obj, index) => {
                    const Page = obj.component;
                    let Layout = DefaultLayout;

                    if (obj.layout) {
                        Layout = obj.layout;
                    } else if (obj.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={obj.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}

                {privateRoutes.map((objs, indexs) => {
                    return (
                        <Route key={indexs} path={objs.path} element={<objs.component />}>
                            {objs.listRoute.map((obj, index) => {
                                const Page = obj.component;
                                let Layout = DefaultLayoutAdmin;

                                if (obj.layout) {
                                    Layout = obj.layout;
                                } else if (obj.layout === null) {
                                    Layout = Fragment;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={obj.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Route>
                    );
                })}
            </Routes>
        </>
    );
}

export default App;
