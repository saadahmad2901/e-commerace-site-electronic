// import React from 'react'
import { Menu } from "antd";

import {
  HomeOutlined,
  FormOutlined,
  PhoneOutlined,
  FrownOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// import NewProducts from "./NewProducts";
import Content from "./Content";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        scroll:" smooth",
        position:'"fixed'
     
      }}
    >
      <Menu
        onClick={({ key }) => {
          if (key === "signout") {
            //todo any work whic we attacjg
          } else {
            navigate(key);
          }
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          {
            label: "Home",
            key: "/",
            icon: <HomeOutlined />,
          },
          //mobiles
          {
            label: "Mobiles",
            key: "/mobiles",
            icon: <MobileOutlined />,
           
           
            children: [
              { label: "Nokia", key: "/mobiles/nokia", icon: <MobileOutlined /> },

              { label: "Oppo", key: "/mobiles/oppo", icon: <MobileOutlined /> },
              
              { label: "Samsung", key: "/mobiles/samsung", icon: <MobileOutlined /> },

              { label: "Sony", key: "/mobiles/sony", icon: <MobileOutlined /> },

              { label: "Q mobile", key: "/mobiles/qmobile", icon: <MobileOutlined /> },
            ],
          },
//mobiles
{
  label: "Laptop",
  key: "/laptop",
  icon: <MobileOutlined />,
 
 
  children: [
    { label: "Dell", key: "/laptop/dell", icon: <MobileOutlined /> },

    { label: "HP", key: "/laptop/hp", icon: <MobileOutlined /> },
    
    { label: "Samsung ' lap", key: "/laptop/samsung", icon: <MobileOutlined /> },

    { label: "Sony", key: "/laptop/sony", icon: <MobileOutlined /> },

    { label: "Fujisto", key: "/laptop/fujisto", icon: <MobileOutlined /> },
  ],
},

          {
            label: "About",
            key: "/about",
            icon: <FormOutlined />,
          },
          {
            label: "Contact us",
            key: "/contact",
            icon: <PhoneOutlined />,
          },
          {
            label: "Signout",
            key: "signout",
            icon: <FrownOutlined />,
            danger: true,
          },
        ]}
      ></Menu>
     <Content/>
    

      
    </div>
  );




    
  
}

export default Sidebar