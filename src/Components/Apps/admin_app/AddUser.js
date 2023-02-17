import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addFile } from '../APIServices/APIservices';

function AddUser() {
    const {register,handleSubmit} = useForm();
    const [selectedFile,setSelectedFile] = useState();
    const [errorMsg,setErrorMsg] = useState(false);
    const [isSuccess,setIsSuccess] = useState(false);
    
    const handleFileChange = (event) => {
        if(event.target.files.length > 0){
          setSelectedFile(event.target.files[0]);
        }
      };
    
      const validateSelectedFile = () => {
        const MIN_FILE_SIZE = 1024 // 1MB
        const MAX_FILE_SIZE = 5120 // 5MB
    
        if (!selectedFile) {
            setErrorMsg("Please choose a file");
            setIsSuccess(false)
            return
        }
        
        const fileSizeKiloBytes = selectedFile.size / 1024

        if(fileSizeKiloBytes < MIN_FILE_SIZE){
            setErrorMsg("File size is less than minimum limit");
            setIsSuccess(false)
            return
          }
          if(fileSizeKiloBytes > MAX_FILE_SIZE){
            setErrorMsg("File size is greater than maximum limit");
            setIsSuccess(false)
            return
          }
      
          setErrorMsg("")
          setIsSuccess(true)
        };



    const navigate=useNavigate();

    async function SaveData(data){
        const resp = await addFile(data)
        if (resp.status==201){
            navigate('/show')
        }
        console.log(data);

    }
  return (
    <>
    <div className='container mt-3'>
        <h1><u><center>USER REGISTRATION FORM</center></u></h1>
        <form onSubmit={handleSubmit(SaveData)} className='mt-5'>
            
                <label htmlFor='first_name'><b>First Name:</b></label>                           
                <input type='text' id='first_name' className='form-control' {...register('first_name')}/>
                <br/><br/>

                <label htmlFor='last_name'><b>Last Name:</b></label>                        
                <input type='text' id='last_name' className='form-control' {...register('last_name')}/>
                <br/><br/>

                <label htmlFor='bod'><b>Birth Date:</b></label>                          
                <input type='date' id='bod' className='form-control' {...register('bod')}/>
                <br/><br/>

                <label htmlFor='gender'><b>Gender:</b></label>                          
                <select id='gender' {...register('gender')}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
                </select>
                <br/><br/>

                <label htmlFor='email'><b>Email:</b></label>                            
                <input type='text' id='email' className='form-control' {...register('email')}/>
                <br/><br/>

                <label htmlFor='address'><b>Address :</b></label>                      
                <input type='text' id='address' className='form-control' {...register('address')}/>
                <br/><br/>


                <label htmlFor='city'><b>City:</b></label>                              
                <input type='text' id='city' className='form-control' {...register('city')}/>
                <br/><br/>


                <label htmlFor='state'><b>State:</b></label>                           
                <input type='text' id='state' className='form-control' {...register('state')}/>
                <br/><br/>


                <label htmlFor='country'><b>Country:</b></label>                        
                <input type='text' id='country' className='form-control' {...register('country')}/>
                <br/><br/>


                <label htmlFor='pincode'><b>Pin code:</b></label>                       
                <input type='text' id='pincode' className='form-control' {...register('pincode')}/>
                <br/><br/>


                <label htmlFor='mobile'><b>Mobile:</b></label>                          
                <input type='text' id='mobile' className='form-control' {...register('mobile')}/>
                <br/><br/>


                <label htmlFor='username'><b>Username:</b></label>
                <input type='text' id='username' className='form-control' {...register('username')}/>
                <br/><br/>

                <label htmlFor='password'><b>Password:</b></label>
                <input type='text' id='password' className='form-control' {...register('password')}/>
                <br/><br/>


                <label htmlFor='photo'><b>Photo:</b></label>
                <input type='file' onChange={handleFileChange} id='photo' className='form-control' {...register('photo')}/>
                <div className="space-between">
                <p className="info-message">Min size: 1MB</p>
                <p className="info-message">Max size: 5MB</p>
                </div>
                {isSuccess ? <p className="success-message">Validation successful</p> : null}
                <p className="error-message">{errorMsg}</p>
                <button className="btn" onClick={validateSelectedFile}>
                    Submit
                </button>

                <br/><br/>


                <label htmlFor='signature'><b>Signature:</b></label>
                <input type='file' accept=".jpg, .jpeg, .png, .txt, .pdf" id='signature' className='form-control' {...register('signature')}/>
                <br/><br/>


                <label htmlFor='role'><b>Role:</b></label>
                <select {...register('role')}>
                    <option value="Customer">Customer</option>
                    <option value="Loan Representative">Loan Representative</option>
                    <option value="Operational Head">Operational Head</option>
                    <option value="Loan Sanction Officer">Loan Sanction Officer</option>
                    

                </select>
                <br/><br/>

                <input type='submit' value='Add User' className='btn btn-outline-success col-6'/>
                <input type='reset' value='RESET' className='btn btn-outline-warning col-6'/>

            </form>

    </div>
    </>
  )
}

export default AddUser;