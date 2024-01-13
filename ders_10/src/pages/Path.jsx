import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Path = () => {
  const navigate = useNavigate();
  return (
    <div className='container mt-4'>
      <h1>Online IT Courses to Become  a Qualified IT Professional with Clarusway</h1>
      <p className="fs-5">
        Join outstanding companies with rewarding salaries. We offer the
        highest-demand IT skills YOU need for success! CHOOSE THE BEST COURSE
        FOR YOU Upgrade your career with the best online training led by top IT
        experts!
      </p>

      <div>
        <Link to="fullstack" className='w-50 btn btn-warning text-white'>Fullstack</Link>
        <button onClick={()=>navigate("aws")} className='w-50 btn btn-primary text-white'>AWS-Devops</button>
        {/* JSX ICERISINDE OLDUGU ICIN DOGRUDAN 'USE.NAVIGATE KULLANILAMAZ.' */}
      </div>
       <Outlet/>{/* AYNI SAYFA ICERISINDE CHILD ROUTE GOSTERMEK ICIN 'OUTLET' COMPONENTINI EKLIYORUZ. */}
    </div>
  )
}

export default Path