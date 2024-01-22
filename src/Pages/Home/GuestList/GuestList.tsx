import { useEffect, useState } from "react";
import Title from "../../../Components/Title";
import Marquee from "react-fast-marquee";
import CardSkeleton from "../../../Components/CardSkeleton";


interface IGuest {
    name:string,
    type: string,
    imgUrl: string
}
export default function GuestList() {
    const [guests,setGuests] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        fetch('guestData.json')
        .then(res=>res.json())
        .then(data=>{
            setGuests(data)
            setIsLoading(false)
        })
        .catch(error=>console.error(error))
    },[])
    if(isLoading){
        return(
            <div className="my-5 mx-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 place-content-center place-items-center">
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
            </div>
        )
    }
  return (
    <section id="guest-list">
        <Title>Guest List</Title>
        <Marquee>
        <div className="mt-5 mx-6 grid grid-cols-12 gap-4">
        {
                guests.map((guest:IGuest,idx)=>(
                    <>
                        <div key={idx} className="rounded-md px-6 py-12 shadow-md md:h-[450px]">
                            <img src={guest.imgUrl} alt="guest" className="h-full mx-auto" />
                            <h2 className="text-xl text-center font-bold">{guest.name}</h2>
                            <p className="text-blue-400 text-center capitalize">{guest.type}</p>
                        </div>
                    </>
                ))
            }
        </div>
        </Marquee>
    </section>
  )
}
