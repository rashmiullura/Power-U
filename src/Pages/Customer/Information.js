import React,{useEffect,useState} from "react";
import "./Information.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useNavigate,useSearchParams,Link} from "react-router-dom";
import data from './data';
import{Link} from 'react-router-dom';
import Texta from "./Texta";

function Information() {
    
const myData = data[0];
   
    return (
        <div>
            
            <div className="panels-page">
            
                <div className="panel">
                <div>
                <div>
                <img src={require('./images/battery.jpeg')} className="profile-pic" />
                </div>
                <div className="button1">
                {/* <Link
                      to='/cart'
                      className='btn-link'
                   > */}
                <button type="button" class="btn btn-primary"onClick={Texta}>Add to cart</button>
                {/* </Link> */}
                </div>
                </div>
                    <div className="profile-details">
                    <div>
                    <Link
                        to='/customer'
                        className='btn-link'
                    >
                        <div className="close"><button className="Button2">X</button></div></Link>
                        </div>
                        <div>
                        <div className="info-box">
                            <p className="info">Title: </p>
                            <p className="info-details"  style={{marginLeft : "34.5%"}}>{myData.title}</p>
                        </div>

                        <div className="info-box">
                            <p className="info">Capacity: </p>
                            <p className="info-details"  style={{marginLeft : "26%"}}>{myData.Capacity}</p>
                        </div>
                        <div className="info-box">
                            <p className="info">Brand: </p>
                            <p className="info-details"   style={{marginLeft : "31%"}}>{myData.Brand}</p>
                        </div>
                        <div className="info-box">
                            <p className="info">Battery Composition: </p> 
                            <p className="info-details"  style={{marginLeft : "7%"}} >{myData.BatteryCellComposition}</p>
                        </div>
                        <div className="info-box">
                            <p className="info">Unit Count: </p>
                            <p className="info-details"  style={{marginLeft : "23%"}} >{myData.UnitCount}</p>
                        </div>
                        <div className="info-box">
                            <p className="info">About: </p>
                            <p className="info-details"  style={{marginLeft : "30%"}} >{myData.Aboutthisitem}</p>
                        </div>
                        </div>
                        
                    </div>

                </div>
                
                
            
        </div>

        </div>
    )
}


export default Information;
