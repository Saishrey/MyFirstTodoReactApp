import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Test() {

    // const [apt, setApt] = useSearchParams()

    // console.log(apt.get('name'))
    // console.log(apt.get('user'))

    // setApt()

    function submitForm() {
        var response = document.getElementById("response").value;
        var baseUrl = `http://localhost:3000/rsvp?apt_id=apt_167317ec-aaa6-4d7b-8ea0-5f8d425d4794&&user_id=user_43a8e271-fa53-403a-8a24-d35fcf19ca8e&&`;
        var url = baseUrl + "rsvp=" + response;
        window.open(url, '_blank');
    }

    return (
        <div>
            <h2>Event RSVP</h2>
            <form id="rsvpForm" className='grid grid-rows-1 gap-2'>
                <div className='grid grid-cols-2 gap-2 p-4'>

                <label>Select your response:</label>
                <select id="response" name="response" className='bg-blue-400 p-3 rounded-xl '>
                    <option value="accept">Accept</option>
                    <option value="decline">Decline</option>
                    <option value="maybe">Maybe</option>
                </select>
                </div>
                <br />
                <button type="button" onClick={submitForm} className='bg-green-400 p-2 rounded-xl'>Submit</button>
            </form>
        </div>
    )
}
