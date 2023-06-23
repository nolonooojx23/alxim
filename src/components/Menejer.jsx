import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../useFetch';
import './Menejer.css';

function Menejer() {

  const { id } = useParams();
  const {data} = useFetch('https://alximik.pythonanywhere.com/company/team/')
    
  return (
    <div className='container'>
        {data?.map((item) => {
            if(item.id == id) {
                return (
                    <div className="menejer_content">
                        <div className="menejer_title">
                            <h1>{item.full_name}</h1>
                            <p>{item.job_uz}</p>
                            <p>{item.about_uz}</p>
                        </div>
                        <div className="menejer_img">
                            <img src={`${item.photo}`} alt="" />
                        </div>
                    </div>
                )
            }
        })}
    </div>
  )
}

export default Menejer