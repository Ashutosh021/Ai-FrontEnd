import React from 'react'

const Contact = () => {
  return (
    <div className='contact-main'>
      <div className='left'>
          <h3>Contact Us</h3>
          <p>Need to get in touch with us? Either fill out the form or find the contact email you'd like to contact below. </p>
      </div>
      <div className='right'>
        <form>
        <div>

          <label id='fname'>First Name</label>
          <input type='text' name='fname'/>
        </div>
        <div>
          <label id='lname'>Last Name</label>
          <input type='text' name='lname'/>
        </div>
        <div>
          <label id='email'>Email</label>
          <input type='email' name='email'/>
        </div>
        <div>
          <label id='msg'>Your Message</label>
          <textarea type='text' name='msg' cols={5} />
        </div>
        <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact