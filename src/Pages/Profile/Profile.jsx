const Profile = () => {
    return (
        <div>
            <input className="text-center" type="file" name="" id="" />
            <div className=" border border-black ">
                <img className="w-[14%] mx-auto rounded-full mb-8" src="/src/assets/Images/Logo.jpg" alt="Photo" />
            </div>
            <div className="flex justify-between mb-5 text-lg">
                <div className=" border-black w-full">
                    <label className="font-medium" htmlFor="Reg No.">Reg No. </label>
                    <input className="px-4 py-2 rounded-lg bg-[#e7ebed]" type="text" name="number" id="" />
                </div>
                <div className=" border-black w-full">
                    <label className="font-medium" htmlFor="name">Name </label>
                    <input className="px-4 py-2 rounded-lg w-3/4 bg-[#e7ebed]" type="text" name="name" id="" />
                </div>
            </div>
            <div className="flex justify-between mb-5 text-lg">
                <div className=" border-black w-full">
                    <label className="font-medium" htmlFor="father-name">Father Name </label>
                    <input className="px-4 py-2 rounded-lg w-2/3 bg-[#e7ebed]" type="text" name="father-name" id="" />
                </div>
                <div className=" border-black w-full">
                    <label className="font-medium" htmlFor="mother-name">Mother Name </label>
                    <input className="px-4 py-2 rounded-lg w-2/3 bg-[#e7ebed]" type="text" name="mother-name" id="" />
                </div>
            </div>
            <div className="flex justify-between mb-5 text-lg">
                <div className=" border-black w-full">
                    <label className="font-medium" htmlFor="DOB">DOB </label>
                    <input className="px-4 py-2 rounded-lg w-3/4 bg-[#e7ebed]" type="date" name="dob" id="" />
                </div>
                <div className=" border-black w-full text-center">
                    <label className="font-medium" htmlFor="gender">Gender </label>
                    <select className="px-4 py-2 rounded-lg w-2/3 bg-[#e7ebed] ">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className=" border-black w-full">
                    <label className="font-medium" htmlFor="nationality">Nationality </label>
                    <input className="px-4 py-2 rounded-lg bg-[#e7ebed]" type="text" name="number" id="" />
                </div>
            </div>
            <div className="flex justify-between mb-5 text-lg">
                <div className=" border-black w-full">
                    <label className="font-medium" htmlFor="program">Program </label>
                    <select className="px-4 py-2 rounded-lg bg-[#e7ebed] ">
                        <option value="cse">Computer Science and Engineering</option>
                        <option value="eee">Electrical and Electronics Engineering</option>
                        <option value="civil">Civil Engineering</option>
                    </select>
                </div>
                <div className=" border-black w-[50%] text-center">
                    <label className="font-medium" htmlFor="session">Session </label>
                    <select className="px-4 py-2 rounded-lg bg-[#e7ebed] ">
                        <option value="session">2015-16</option>
                        <option value="session">2016-17</option>
                        <option value="session">2017-18</option>
                        <option value="session">2018-19</option>
                        <option value="session">2019-20</option>
                    </select>
                </div>
                <div className=" border-black w-[35%] text-center">
                    <label className="font-medium" htmlFor="batch">Batch </label>
                    <select className="px-4 py-2 rounded-lg bg-[#e7ebed] ">
                        <option value="session">03</option>
                        <option value="session">04</option>
                        <option value="session">05</option>
                        <option value="session">06</option>
                        <option value="session">07</option>
                    </select>
                </div>

            </div>
            <div className="flex justify-between mb-5 text-lg">
                <div className=" border-black w-full">
                    <label className="font-medium" htmlFor="religion">Religion </label>
                    <input className="px-4 py-2 rounded-lg bg-[#e7ebed]" type="text" name="religion" id="" />
                </div>
                <div className=" border-black w-full">
                    <label className="font-medium" htmlFor="phone">Phone </label>
                    <input className="px-4 py-2 rounded-lg w-3/4 bg-[#e7ebed]" type="text" name="phone" id="" />
                </div>
            </div>
            <div className="mb-2 text-lg">
                <div className=" border-black w-full">
                    <label className="font-medium" htmlFor="email">Email </label>
                    <input className="px-4 py-2 rounded-lg w-3/4 bg-[#e7ebed]" type="text" name="email" id="" />
                </div>
            </div>

        </div>
    );
};

export default Profile;