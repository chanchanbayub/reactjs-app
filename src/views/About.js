import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../views/about.css';
import { suka } from '../actions';
import photo from '../photo.png';
import Footer from './footer';
//page about
export default function About () {

    // state management with redux
    const counter = useSelector( state => state.counter);
    const dispatch = useDispatch();
        return(
            <div>
            <div className="about">
                <div className="card">
                    <h2> About </h2>
                    <hr />
                        <img src={photo} alt="poto" width="100px" height="120px" className="photo" />
                        <p>Name : Chan Chan Bayu Bahari</p>
                        <p>Alamat : Ciamis, Jawa Barat</p>
                        <p>Pekerjaan : Freelance</p>
                    <button className="btn" onClick={() => dispatch(suka())} > Suka!! </button>  
                    <p>{counter} orang menyukai ini</p>
                </div>
                    
            </div>
            <Footer />
            
            </div>
        )
    }
