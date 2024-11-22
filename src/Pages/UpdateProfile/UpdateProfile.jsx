// import { useState } from "react";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();


    // Handle input changes
    const handleInputChange = async(event) => {
        event.preventDefault();
        const target = event.target;
        const email = user?.email;
        const name = target.name.value;
        const fatherName = target.fatherName.value;
        const motherName = target.motherName.value;
        const reg = target.reg.value;
        const dept = target.dept.value;
        const batch = target.batch.value;
        const session = target.session.value;
        const phone = target.phone.value;

        const student = {name,email,phone,fatherName,motherName,reg,dept,batch,session}

        console.log(student);

        fetch(`https://fec-clearence-server.vercel.app/student/update/${user?.email}`,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
        .then(resp=>resp.json())
        .then((result)=>{
            if(result.upsertedCount>0 || result.modifiedCount>0){
                alert("User updated")
                navigate("/profile");
            }else{
                alert("Data already updated")
                navigate("/profile");
            }
        })
        .catch(()=>{
            alert("failed to update user");
        })

        
    };

    return (
        <form onSubmit={handleInputChange}>
            <div className="bg-blue-gray-50 shadow-md rounded-lg p-6 mx-auto">
                <div className="text-center mb-4">
                    <img
                        src={"https://via.placeholder.com/100"}
                        alt="Image"
                        className="rounded-full mx-auto w-28 h-28"
                    />
                    <div className="flex items-center">
                        <label className=" text-start w-1/4 text-gray-700 font-medium">Photo:</label>
                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            placeholder="Photo URL"
                            className="block mt-2 w-full text-sm text-gray-600 border border-gray-300 rounded px-2 py-1"
                        />
                    </div>
                </div>
                <div className="profile-details space-y-3">
                    <div className="flex items-center">
                        <label className="block w-1/4 text-gray-700 font-medium">Name:</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={user?.displayName}
                            placeholder="Enter name"
                            className="w-full border border-gray-300 rounded px-2 py-1 text-gray-600"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="block w-1/4 text-gray-700 font-medium">Registration No:</label>
                        <input
                            type="text"
                            name="reg"
                            placeholder="Enter registration number"
                            className="w-full border border-gray-300 rounded px-2 py-1 text-gray-600"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="block w-1/4 text-gray-700 font-medium">Father&apos;s Name:</label>
                        <input
                            type="text"
                            name="fatherName"
                            placeholder="Enter father's name"
                            className="w-full border border-gray-300 rounded px-2 py-1 text-gray-600"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="block w-1/4 text-gray-700 font-medium">Mother&apos;s Name:</label>
                        <input
                            type="text"
                            name="motherName"
                            placeholder="Enter mother's name"
                            className="w-full border border-gray-300 rounded px-2 py-1 text-gray-600"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="block w-1/4 text-gray-700 font-medium">Phone:</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter phone number"
                            className="w-full border border-gray-300 rounded px-2 py-1 text-gray-600"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="block w-1/4 text-gray-700 font-medium">Email:</label>
                        <input
                            type="email"
                            name="email"
                            readOnly
                            value={user?.email}
                            className="w-full border border-gray-300 rounded px-2 py-1 text-gray-600"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="block w-1/4 text-gray-700 font-medium">Department:</label>
                        <select
                            name="dept"
                            className="w-full border border-gray-300 rounded px-2 py-1 text-gray-600"
                        >
                            <option value="" disabled >Select Department</option>
                            <option value="Computer Science And Engineering">Computer Science And Engineering</option>
                            <option value="Electrical And Electronics Engineering">Electrical And Electronics Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="block w-1/4 text-gray-700 font-medium">Batch:</label>
                        <select
                            name="batch"
                            className="w-full border border-gray-300 rounded px-2 py-1 text-gray-600"
                        >
                            <option value="" disabled >Select Batch</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="block w-1/4 text-gray-700 font-medium">Session:</label>
                        <select
                            name="session"
                            className="w-full border border-gray-300 rounded px-2 py-1 text-gray-600"
                        >
                            <option value="" disabled >Select Session</option>
                            <option value="2013-14">2013-14</option>
                            <option value="2014-15">2014-15</option>
                            <option value="2015-16">2015-16</option>
                            <option value="2016-17">2016-17</option>
                            <option value="2017-18">2017-18</option>
                            <option value="2018-19">2018-19</option>
                            <option value="2019-20">2019-20</option>
                            <option value="2020-21">2020-21</option>
                        </select>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <input type="submit" value="Submit" className="btn bg-blue-gray-200 px-8 hover:bg-[#87b1b5]"/>
                </div>
            </div>
        </form>
    );
};

export default UpdateProfile;
