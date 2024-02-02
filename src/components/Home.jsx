import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsFillPinAngleFill, BsThreeDots}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const date = () =>{
      const today = new Date();
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      const date = today.getDate()+ " "+ months[today.getMonth()] + " " + today.getFullYear();
      // today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      // console.log(date)
      return date;
    };
    // const formattedDate = date.toLocaleString();

    const emp_data = [
        {
          name: 'Jan\'24',
          total: 216,
          men: 120,
          women: 96,
        },
        {
          name: 'Dec\'23',
          total: 207,
          men: 119,
          women: 88,
        },
        {
          name: 'Nov\'23',
          total: 210,
          men: 119,
          women: 91,
        },
        {
          name: 'Oct\'23',
          total: 205,
          men: 114,
          women: 91,
        },
      ];

      const req_data = [
        {
          name: 'Jan\'24',
          total: 16,
          men: 6,
          women: 10,
        },
        {
          name: 'Dec\'23',
          total: 15,
          men: 6,
          women: 9,
        },
        {
          name: 'Nov\'23',
          total: 21,
          men: 8,
          women: 13,
        },
        {
          name: 'Oct\'23',
          total: 10,
          men: 5,
          women: 5,
        },
      ]
     

  return (
    <main className='main-container w-full'>
        <div className='main-title'>
            <h1 className='text-2xl font-semibold	'>Dashboard</h1>
        </div>
        <div className='row'>


          <div className='column1 m-3 p-0'>

            <div className='main-cards w-full'>
              <div className='card bg-[#FFEFE7]'>
                  <div className='card-inner '>
                      <h3>Available Position</h3>
                      <h1 className='text-5xl pt-3 pb-3'>24</h1>
                      <p className='text-[#FF5151]'>4 Urgently needed</p>
                  </div>
              </div>
              <div className='card bg-[#E8F0FB]'>
                  <div className='card-inner'>
                      <h3>Job Open</h3>
                      <h1 className='text-5xl pt-3 pb-3'>10</h1>
                      <p className='text-[#3786F1]'>4 Active hiring</p>
                  </div>
              </div>
              <div className='card bg-[#FDEBF9]'>
                  <div className='card-inner'>
                      <h3>New employees</h3>
                      <h1 className='text-5xl pt-3 pb-3'>24</h1>
                      <p className='text-[#EE61CF]'>4 Departments</p>
                  </div>
              </div>
            </div> {/* main-cards div closed*/}

            

            <div className='charts flex w-full justify-between'>
              <div className='chart-box box1 rounded-lg border-2 p-5'>
                <h3 className='text-l font-bold'>Total Employees by Gender</h3>
                <h1 className='text-5xl p-3 font-semibold'>216</h1>
                <p className='time text-xs '>120 Men</p>
                <p className='time text-xs '>96 Women</p>
              </div>
              
              <div className='chart-box box2 rounded-lg border-2 mr-5 p-5'>
                <h3 className='text-xl font-bold'>Department</h3>
                <h1 className='text-5xl p-3 font-semibold'>16</h1>
                <p className='time text-xs '>6 Men</p>
                <p className='time text-xs '>96 Women</p>
              </div>



            </div>

            <div className='announcement border-2 mt-8 mr-10  rounded-lg'>
              <div className='sc-heading flex justify-between'>
                <h3 className='text-xl p-3 font-bold'>Announcement</h3>
                <button className='border-2 text-black rounded-md h-8 font-medium px-3 text-xs m-3'>{date()}</button>
              </div>
              {/* <p className='text-black text-xs ml-3'>Priority</p> */}
              <div className='border-2 rounded-md p-3 m-3 text-black'>
                  <p>Outing schedule for every departement</p>
                  <BsFillPinAngleFill className='icon float-right '/>
                    <p className='time text-xs '>5 mins Ago</p>
                </div>
                    
                    
                {/* <p className=' text-xs ml-3'>Other</p> */}
                <div className='border-2 rounded-md p-3 m-3 text-black'>
                  <p>Meeting HR Department</p>
                  <BsFillPinAngleFill className='icon float-right '/>
                    <p className='time text-xs '>Yesterday, 12:30 AM</p>
                </div>
                <div className='border-2 rounded-md p-3 m-3 text-black'>
                  <p>IT Department need two more talents for UX/UI Designer position</p>
                  <BsFillPinAngleFill className='icon float-right '/>
                    <p className='time text-xs '>Yesterday, 09:15 AM</p>
                </div>
                <button className=' border-t-2 w-full rounded-b-lg text-[#FF5151]' >See All Announcements</button>
            </div>

          </div>

          <div className='column2 block'> 
        
            <div className='activity w-96 text-white mr-10'>
              <h3 className='bg-[#1B204A] p-3  rounded-t-md	'>Recent Activity</h3>
              <div className='activity-content bg-[#121843]  rounded-b-md'>
                <p className=' text-xs p-3 pb-0 text-white/[0.7]' > {date()}</p>
                <h3 className=' text-lg font-medium p-3'>You Posted a New Job</h3>
                <p className='text-white/[0.8] text-sm pl-3'>Kindly check the requirements and terms of work and make sure everything is right.</p>
                <div className='activity-inner flex py-8 px-3 justify-between'>
                  <p className='text-sm '>Today you made 12 Activity</p>
                  <button className='bg-[#FF5151] rounded-md h-8 font-medium px-3'>See All Activity</button>
                </div>
              </div>
            </div>

            <div className='schedule-block border-2 mt-8 mr-10  rounded-lg'>
              <div className='sc-heading flex justify-between'>
                <h3 className='text-xl p-3 font-bold'>Upcoming Schedule</h3>
                <button className='border-2 text-black rounded-md h-8 font-medium px-3 text-xs m-3'>{date()}</button>
              </div>
              <p className='text-black text-xs ml-3'>Priority</p>
              <div className='border-2 rounded-md p-3 m-3 text-black'>
                  <p>Review candidate applications</p>
                  <BsThreeDots className='icon float-right'></BsThreeDots>
                    <p className='time text-xs'>Today 11:30 AM</p>
                </div>
                    
                    
                <p className=' text-xs ml-3'>Other</p>
                <div className='border-2 rounded-md p-3 m-3 text-black'>
                  <p>Interview with candidates</p>
                  <BsThreeDots className='icon float-right'></BsThreeDots>
                    <p className='time text-xs'>Today 10:30 AM</p>
                </div>
                <div className='border-2 rounded-md p-3 m-3 text-black'>
                  <p>Short meeting with product designer from IT Departement</p>
                  <BsThreeDots className='icon float-right'></BsThreeDots>
                    <p className='time text-xs'>Today 09:15 AM</p>
                </div>
                <button className=' border-t-2 w-full rounded-b-lg text-[#FF5151]' >Create a New Schedule</button>
            </div>

          </div>
        
        </div>
    </main>
  )
}

export default Home