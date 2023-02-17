import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DisbursementSave() {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    function saveData(data){
        console.log('/////////////////');
        console.log(data);
        axios.post(`http://localhost:8000/pro/disbursement/`, data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        console.log('*************************');
    }

  return (
    <div>
        <form onSubmit={handleSubmit(saveData)} encType='multipart/form-data'>
            <center><h2>DISBURSTMENT MODEL</h2></center>
            <center><label htmlFor='id' ><b>ID</b></label></center>
            <input id='id' {...register('id')} className='form-control' /><br />
            <center><label htmlFor='loan' ><b>LOAN ID</b></label></center>
            <input id='loan' {...register('loan')} className='form-control' /><br />
            <center><label htmlFor='doc' ><b>INSURANCE DOCUMENT</b></label></center>
            <input id='doc' type='file' {...register('insurance_doc')} className='form-control' /><br />
            <center><label htmlFor='pay' ><b>PAYMENT MODE</b></label></center>
            <select id='pay' {...register('payment_mode')} className='form-control'>
                <option>ONLINE</option>
                <option>CASH</option>
                <option>CHEQUE</option>
            </select><br />
            <center><label htmlFor='net' ><b>NET DISBURSED AMOUNT</b></label></center>
            <input id='net' {...register('net_disbursed_amount')} className='form-control' /><br />
            <center><label htmlFor='acc' ><b>AMOUNT DISBURSED TO A/C</b></label></center>
            <input id='acc' {...register('disbursed_to_account_no')} className='form-control' /><br />
            <center><label htmlFor='receipt' ><b>RECEIPT</b></label></center>
            <input id='receipt' type='file' {...register('receipt_doc')} className='form-control' /><br />
            <center><label htmlFor='status' ><b>STATUS</b></label></center>
            <select id='status' {...register('status')} className='form-control'>
                <option>PENDING</option>
                <option>DISBURSED</option>
            </select><br /><br />
            <center><input type='submit'  value='SAVE' className='btn btn-success col-2' />
            <input type='reset' value='RESET' className='btn btn-warning col-2' /></center>
            <br /><br />
        </form>
    </div>
  )
}

export default DisbursementSave;