import React, { useState } from 'react'


export default function SignUp() {
    const [register, setregister] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        addressline:"",
        pin:"",
        city:"",
        state:"",
        password: "",
        cpassword:"",
        
    })
    
    function getData(e) {
        const name = e.target.name
        const value = e.target.value
        setregister((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        const item = {
            name: register.name,
            username: register.username,
            email: register.email,
            phone: register.phone,
            addressline:register.addressline,
            pin:register.pin,
            city:register.city,
            state:register.state,
            password: register.password
        }
        
        if (register.password === register.cpassword) {
            
            try {
                const rawdata = await fetch("/user", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(item)
                })
                const result = await rawdata.json()
                if(result.result==="done")
                //navigate("/login")
                alert('done')
                else
                alert('username or email is already registered please try different one ')
            }
            catch(error){
                console.log(error)
                alert("Inernal Server Error")
            }
        }
        else
            alert("Password and Confirm Password Does not Match")
    }


  return (
    <>
        
                   <form onSubmit={postData} method="post">
        <table align="center">
            <tr>
                <td>
                    Customer Name
                </td>
                <td>
                    <input type="text" onChange={getData} name="name" required/>
                </td>
            </tr>
            <tr>
                <td>
                    Email Address
                </td>
                <td>
                    <input type="email" onChange={getData} name="email"/>
                </td>
            </tr>
            <tr>
                <td>
                    Mobile No
                </td>
                <td>
                    <input type="tel" onChange={getData} name="phone" required/>
                </td>
            </tr>
            <tr>
                <td>
                    Address
                </td>
                <td>
                    <input type="text" onChange={getData} name="addressline"/>
                </td>
            </tr>
            <tr>
                <td>
                    Pin
                </td>
                <td>
                    <input type="text" onChange={getData} name="pin"/>
                </td>
            </tr>
            <tr>
                <td>
                    City
                </td>
                <td>
                    <input type="text" onChange={getData} name="city" required/>
                </td>
            </tr>
            <tr>
                <td>
                    State
                </td>
                <td>
                    <input type="text" onChange={getData} name="state"/>
                </td>
            </tr>
            <tr>
                <td>
                    User Name
                </td>
                <td>
                    <input type="text" onChange={getData} name="username" required/>
                </td>
            </tr>
            <tr>
                <td>
                    Password
                </td>
                <td>
                    <input type="password" onChange={getData} name="password" required/>
                </td>
            </tr>
            <tr>
                <td>
                    Confirm Password
                </td>
                <td>
                    <input type="password" onChange={getData} name="cpassword" required/>
                </td>
            </tr>
            <tr>
                <td>
                    <button type="submit">Register</button>
                </td>
            </tr>
        </table>
        </form>
        
 
    </>
  )
}