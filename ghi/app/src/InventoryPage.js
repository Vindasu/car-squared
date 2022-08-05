import { useEffect } from "react";

function InventoryPage() {

    useEffect(() => {
        console.log("Create a mfg, model, and automobile")
    }, [])

    return (
        <>
            <button
                type="button"
                className="btn btn-outline-light btn-lg btn-block col-12"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/inventory/manufacturers';
                }}
                >Manufacturers
            </button>
            &nbsp;
            <button
                className="btn btn-outline-light btn-lg btn-block col-12"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/inventory/models';
                }}
                >Vehicle Models
            </button>
            &nbsp;
            <button
                className="btn btn-outline-light btn-lg btn-block col-12"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/inventory/autos/';
                }}
                >Automobiles
            </button>
        </>
    )
}

export default InventoryPage;