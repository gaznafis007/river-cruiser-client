import { useEffect, useState } from "react";
import Title from "../../../Components/Title";
import Modal from "../../../Components/Modal";
import CardSkeleton from "../../../Components/CardSkeleton";



export interface IShip {
    shipName:string,
    description: string,
    img: string
}


export default function Ships() {
    const [ships,setShips] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then((data)=>{
            setShips(data)
            setIsLoading(false)
        })
        .catch(error=>console.error(error))
    },[])
    if(isLoading){
        return(
            <div className="my-5 mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center place-items-center">
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
            </div>
        )
    }
  return (
    <section id="our-cruisers">
        <Title>Our Cruisers</Title>
        <div className="my-5 mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center place-items-center">
            {
                ships.map((ship:IShip,idx)=>(
                    <>
                        <label htmlFor={ship.shipName} className="cursor-pointer">
                        <div  key={idx}>
                            <figure>
                            <img src={ship.img} alt="river cruiser" className="aspect-square" />
                            </figure>
                        </div>
                        </label>
                        <Modal modalElement={ship}></Modal>
                    </>
                ))
            }
        </div>

        {/* modal */}
        {/* <input type="checkbox" id="cruiser-modal" className="modal-toggle" />
        <div className="modal" role="dialog">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">This modal works with a hidden checkbox!</p>
            <div className="modal-action">
            <label htmlFor="cruiser-modal" className="btn">Close!</label>
            </div>
        </div>
        </div> */}
    </section>
  )
}
