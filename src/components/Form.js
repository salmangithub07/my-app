import React from 'react'
import { useState } from 'react';

function Form() {
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  
    return (
  <>
      <div className='container my-5'>
        <div className='row'>
            <div className='col-md-8 mx-auto text-center form-group'>
            <form method="post"  className="php-email-form" >
          
              <input type="text" name="fname" className="form-control mt-3" id="name" placeholder="Your Name"
             value={inputs.fname || ""} 
             onChange={handleChange}
              />
            <input type="email" name="email" className="form-control mt-3" id="email" placeholder="Your Email"
             value={inputs.email || ""} 
             onChange={handleChange}
              />
              <input type="text" name="subject" className="form-control mt-3" id="subject" placeholder="Subject"
             value={inputs.subject || ""} 
             onChange={handleChange}
              />
              <textarea placeholder='Your Message' name='message'
              value={inputs.message || ""} 
              onChange={handleChange}
              >

              </textarea>
  
          <div className="text-center mt-3"><button type="submit" className='btn btn-primary'>Send Message</button></div>
        </form>

            </div>

        </div>

    </div>
    </>

  )
}

export default Form