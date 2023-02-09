import React from 'react'
import { Menu } from 'antd';
import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';


const items = [
   
   
    {
      label: 'for enterprises',
      key: 'SubMenu',
    
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
       
      ],
    },
   
  ];









const Navbar = () => {

    
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  return (
    <>
     <div className="container-fluid">
    <div className="nav">
        <div className="logo">
            <a href=''>
                <img src="./assets/icon.png.svg" className='img-logo' alt="" />

            </a>
        </div>
        <div className="menu  d-flex mx-auto ">
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

        </div>
        <div className="className me-5">
          <span>Signin</span>
        </div>
      <div className="button ">
        <span><a href="get started" className='started'>Get started</a></span>
      </div>
    </div>

     </div>
    </>
  )
}

export default Navbar
