
import antd from "antd";
import { AiOutlineLineChart } from "react-icons/ai";
import { BarChartOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
 import LinerChart from "./LinerChart";
const { Menu, Dropdown, Button } = antd;
import { FaUsers } from "react-icons/fa";

import { PlusOutlined, UpOutlined } from "@ant-design/icons";
import Title from "antd/lib/skeleton/Title";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import  "../Styles/graph.less";


 import {Dunt,Bars} from './BarChart';
 
const data = [
  {text: 'Bgh Mal', value: 500}, 
  {text: 'Amr St', value: 300} ,
   {text: 'Station', value: 500}, 
  {text: 'Bgh Airport', value: 300} 
];
 
const margin = {top: 20, right: 20, bottom: 30, left: 40};

const { Table, Card,Row, Col,Tag  } = antd;
const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);

const ChartContent = () => {

  return (
    <div className="content">
      

      <div className="content_innefr">
 <Row style={{display:"flex",flexDirection:"column"}}>

     <Col  style={{maxWidth:"100%",
     display:"flex",flexDirection:"column",
     marginRight:" 20px",
     marginLeft:"10px",
     padding:"5px",
     border:"1px solid #e8ebed",
     borderRadius:"5px"}}>
 <div style={{display:"flex",justifyContent:"space-between"}}>
 <div style={{display:"flex"}}>
      <Card className="chart_card card"  
      style={{
        width:"250px"
       ,
        height:"150px",
         border:"none",
        
      }}>
        <div className="card_icon">
          <FaUsers />
        </div>
        <span>2,660,000 IQD</span>
        <div className="card_footer">
          <p>Income in December</p>
        </div>
      </Card>
   
    
    
    
      <Card className="chart_card card" style={{
        width:"250px"
        ,height:"150px",
        border:"none"
      }}>
        <div className="card_icon">
          <FaUsers />
        </div>
        <span>500</span>
        <div className="card_footer">
          <p>New costumer in December</p>
        </div>
      </Card>
      </div>
       <div >
     <Dropdown overlay={menu}>
            <Button >
              Discount <DownOutlined  />
            </Button>
          </Dropdown></div>
          </div>
<div >
<LinerChart/></div>
    </Col>
    <Col style={{
       height:"5%",
     display:"flex",
      marginRight:" 20px",
      marginLeft:"10px",
      maxWidth:"100%",
      gap:"10px"
     }}>

 <Col style={{
       
         flex:"1 0 100px",
        padding:"10px",
        
         marginTop:"10px",
         display:"flex",
         flexDirection:"column",
          maxWidth:"100%",
       maxHeight:"100%",
        border:"1px solid #e8ebed",
        borderRadius:"5px"
        }}>
<p>Top sold in December</p>

<div style={{display:"flex",gap:"10px",height:"100%"}}>
<div style={{backgroundColor:"#e8ebed",width:"50%",height:"100%"}}>
Baghdadai
</div>
<div style={{backgroundColor:"#e8ebed",width:"50%",height:"100%"}}>
    Tuktuk
</div>
</div>
    </Col>
 <Col style={{
     
         flex:"1 0 100px",
          padding:"10px",
         maxWidth:"100%",
        maxHeight:"100%",
         marginTop:"10px",
         display:"flex",
         flexDirection:"column",
        border:"1px solid #e8ebed",
        borderRadius:"5px"
        }}><p>Low stock</p>

    <div className="stock_chart"> Tuktuk in Xl</div>
     <div className="stock_chart1"> 25 OCT in XL</div>
      <div className="stock_chart2"> Safaa in Xl</div>
</Col>
            <Col style={{
         flex:"1 0 150px",
         padding:"10px",
         whiteSpace: "nowrap",
         marginTop:"10px",
        border:"1px solid #e8ebed",
        borderRadius:"5px",
        maxWidth:"100%",
       maxHeight:"100%",
       position:"relative"
      
        }}>

     <div style={{display:"inline-block",width:"50%" }} className="chart_css"><Bars/></div>
      <div style={{display:"inline-block",width:"50%" }}className="chart_css"><Dunt/></div> 

        </Col>

    


    </Col>
  
  </Row>,
  
        
      </div>
    </div>
  );
};

export default ChartContent;
