import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Images from './Images/logo3.png';
const Website = () => {
    const [studio, setStudio] = useState();
    const [loding, setLoding] = useState(true);
    setTimeout(() => {
        setLoding(false)
    }, 1000)
    const location = useLocation();
    const { message } = location.state || {}; // 'message' is the studio name passed
    useEffect(() => {
        fetch(`http://localhost:8080/api/studio/fetchstudio1/${message}`)
            .then((res) => res.json())
            .then((data) => {
                setStudio(data)
                setLoding(false)
                // console.log(data)

            })
            .catch((err) => {
                console.error("fetch in error", err);
            })

    }, [message]);
    //  console.log(studio)
    return (
        <>

            <div className='flex justify-center bg-slate-900 p-10'>
                <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">

                    {
                        loding ?
                            (
                                <div>
                                    {/* <span className="loading loading-ring loading-xs"></span>
                                        <span className="loading loading-ring loading-sm"></span> */}
                                    <span className="loading loading-spinner text-accent"></span>
                                    {/* <span className="loading loading-ring loading-md"></span>
                                        <span className="loading loading-ring loading-lg"></span> */}
                                </div>
                            )
                            :
                            (


                                
                                    <div className="hero bg-base-200 min-h-screen">
                                        <div className="hero-content flex-col lg:flex-row-reverse">
                                            <img
                                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                                className="max-w-sm rounded-lg shadow-2xl" />
                                            <div>
                                                <h1 className="md:text-5xl font-bold">{studio.name}</h1>
                                                <p className="py-6">
                                                  { studio.address}
                                                </p>
                                                <button className="btn btn-primary">Get Started</button>
                                            </div>
                                        </div>
                                    </div>
                               



                            )
                    }

                </div>
            </div>





        </>
    )
}

export default Website
