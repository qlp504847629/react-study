import React from 'react';
import routers from './router';    // 路由文件
import { Routes, Link, Route } from 'react-router-dom';    // 路由插件
import './App.css';
function App() {
  return (
    <div className="App App-header">
      {
        routers.map((item, index) => (
          <Link to={item.path} key={index}> {item.name} </Link>
        ))
      }
      <br />
      <Routes>
        {
          routers.map((item, index) => (
            <Route path={item.path} key={index} element={<item.components />}></Route>
          ))
        }
      </Routes>

    </div >
  );
}

export default App;
