import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { teacherRoutes, studentRoutes } from './routes/Routes';
import { Fragment } from 'react';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import { AuthContextProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Login from './pages/login/Login';

const queryClient = new QueryClient();

function App() {
    const storageKey = JSON.parse(localStorage.getItem('storageKey'))
    return (
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path={'/'}
                            element={
                                <GlobalStyles>
                                        <Login />
                                </GlobalStyles>
                            }
                        />
                        {(storageKey?.role==="TEACHER")&&teacherRoutes.map((route, index) => {
                            const Page = route.element;
                            let Layout = Fragment;

                            if (route.layout) {
                                Layout = route.layout;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <GlobalStyles>
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        </GlobalStyles>
                                    }
                                />
                            );
                        })}
                        {(storageKey?.role==="STUDENT")&&studentRoutes.map((route, index) => {
                            const Page = route.element;
                            let Layout = Fragment;

                            if (route.layout) {
                                Layout = route.layout;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <GlobalStyles>
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        </GlobalStyles>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </QueryClientProvider>
    );
}

export default App;
