import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PropertyList from './components/PropertyList/PropertyList';
import {Route, Routes} from "react-router-dom";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";

function App() {

const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path={'/'} element={<PropertyList />}></Route>
        <Route path={`/properties/:id`} element={<PropertyDetails />}></Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
