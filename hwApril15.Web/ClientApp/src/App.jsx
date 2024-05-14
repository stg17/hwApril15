import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import DisplayPage from './components/DisplayPage';
import AddPerson from './components/AddPerson';
import AddCar from './components/AddCar';
import DeleteCars from './components/DeleteCars';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<DisplayPage/>} />
                <Route path='/addperson' element={<AddPerson/>}/>
                <Route path='/addcar/:id' element={<AddCar/>}/>
                <Route path='/deletecars/:id' element={<DeleteCars/>}/>
            </Routes>
        </Layout>
    );
}

export default App;