import React,{useState} from 'react';


export default function Login(){
    const [login, setLogin] = useState({
        username:"",
        password:""
    })

    function getData(e){
        const name = e.target.name
        const value = e.target.value
        setLogin((old)=>{
            return{
                ...old,[name]:value
            }
        })
    }

    async function postData(e){
        e.preventDefault()
        const item = {
            username:login.username,
            password:login.password
        }
     try{
        const rawdata = await fetch('/login',{
            method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(item)
                })
                const result = await rawdata.json()
                if(result.result==="done"){
                    alert('logged in')
                }
                //navigate("/home")
                else {
                    alert('error while login please check input field')
                }
            } catch(error){
                console.log(error)
                alert('internal server error');
            }
        }

    return(
        <>

          
<form onSubmit={postData} method="post">
        <table align="center">
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

    )}