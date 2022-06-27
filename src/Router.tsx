
import {  Route, Routes } from 'react-router-dom';
import Event from './pages/Event';
import Subcribe from './pages/Subcribe';

const Router = () => {
    return (
       <Routes>
        <Route path='/' element={<Subcribe />}/>
        <Route path='/event/lesson/:slug' element={<Event />}/>
       </Routes>
    );
};

export default Router;