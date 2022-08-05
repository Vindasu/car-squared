import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

function InventoryModelList() {
    const [models, setModels] = useState([])

    const url = 'http://localhost:8100/api/models/'

    const fetchModels = async () => {
        const res = await fetch(url)
        const modelsJSON = await res.json()
        setModels(modelsJSON.models);
    }

    useEffect(() => {
        fetchModels()
    }, [])

    useEffect(() => {
        console.log("Instruction: create a model, then click on its picture")
    }, [])

    return (
        <>
            <button
                className="btn btn-outline-light"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/inventory';
                }}
                >Back to Inventory Home
            </button>
            &nbsp;
            <button
                className="btn btn-outline-light"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/inventory/models/new';
                }}
                >Create Model
            </button>
            <div className="offset-0.5">
                <div className="shadow p-4 mt-4">
                    <h1>Models</h1>
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Manufacturer</th>
                                <th>Picture</th>
                            </tr>
                        </thead>
                        <tbody>
                            {models.map(model => (
                                <tr key={model.id}>
                                    <td>{model.name}</td>
                                    <td>{model.manufacturer.name}</td>
                                    <td>
                                        <NavLink className="navbar-brand" to="/sales">
                                        <img src={model.picture_url} className="" alt="car model" width="200" height="150"></img></NavLink>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default InventoryModelList;