import Button from '@/components/Button/Button'
import React from 'react'

export default function create() {
    return (
        <div className=" min-h-screen rounded-xl  py-5 flex flex-row items-center justify-center mx-52">
            <div className="bg-gradient-to-r from-fuchsia-600 to-violet-600 h-96 rounded-xl justify-between py-8 pr-1 flex flex-row w-3/5 ">
                <div className="px-8 flex flex-col text-black font-bold">
                    <p className="text-lg font-bold">Create a new template </p>
                    <p>Name</p>
                    <input type="text" placeholder="Project Name"></input>

                    <label for="template">Template:</label>
                    <select id="template" name="template">
                        <option value="A4">A4</option>
                        <option value="A3">A3</option>
                        <option value="Instagram">Instagram</option>
                    </select>

                    <p>Image Size</p>
                    <br></br>
                    <p>
                        Width: <input type="number" id="width" />{' '}
                    </p>
                    <br></br>
                    <p>
                        Height: <input type="number" id="height" />{' '}
                    </p>
                </div>
                <div className="flex flex-col mr-9 w-full justify-center items-center">
                    <div className="bg-white w-full h-44"></div>
                    <button className="bg-black border w-full">Upload</button>
                    <br></br>
                    <div className=" w-full flex justify-end">
                        <button className="bg-black border rounded-xl w-16  ">
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
