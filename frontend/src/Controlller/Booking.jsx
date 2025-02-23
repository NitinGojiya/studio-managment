import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = ({ name, email, id, smobile, userl }) => {
  const today = new Date();
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const [user, setUser] = useState(null); // Ensure `user` starts as `null`

  useEffect(() => {
    fetch(`http://localhost:8080/api/studio/fetchuser/${userl}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.error("fetch in error", err);
      });
  }, [userl]); // Added userl as dependency to fetch again if it changes

  // ✅ Define bookingdata outside the `if` block
  const bookingdata = user
    ? {
        studioname: name,
        studiogmail: email,
        studiomobile: smobile,
        customername: user.name,
        address: user.address,
        email: user.email,
        mobile: user.mobile,
        startdate: startDate,
        enddate: endDate,
        status: "pending",
      }
    : null; // If user is not loaded yet, set `bookingdata` to null

  // console.log("users", user);
  // console.log("booking", bookingdata);

  const handelsubmit=async()=>{
    try {
      const respose = await fetch('http://localhost:8080/api/studio/createbooking',
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(bookingdata)

          }
      );
      if (!respose.ok) {
          throw new Error(`HTTP error ! Status: ${respose.status}`);
      }
    
      const sdata=await respose.json();
      document.getElementById('my_modal_5').close()
       console.log(sdata)
  } catch (error) {
      console.log("errro", error)
  }
  }
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex flex-col gap-5 items-center justify-center">
            <div>
              <p className="text-3xl"></p>
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                Studio Name
                <input type="text" className="grow" placeholder="Daisy" value={smobile} readOnly />
              </label>
            </div>
            <div>
              <DatePicker
                className="input input-bordered input-accent w-full max-w-xs text-black"
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd/MM/yyyy"
                onChange={(update) => {
                  setDateRange(update);
                }}
                isClearable={true}
              />
            </div>
         
            <div>
              <button className="btn btn-outline btn-accent" onClick={handelsubmit}>Book</button>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-outline btn-warning" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Booking;
