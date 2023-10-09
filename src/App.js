import { Provider } from 'react-redux';
import './App.css';
import PostPage from './components/PostPage';
import appstore from './redux/appstore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
function App() {
  const appRouter=createBrowserRouter([
    
    {
      path:"/",
      element:<Dashboard/>
    },
    {
      path:"/posts",
      element:<PostPage/>
    }
])
  return (
    <>
   
    <div className="App">
      <Provider store={appstore}>
      <RouterProvider router={appRouter}>
      </RouterProvider>

      </Provider>
    </div>
    </>
  );
}

export default App;
