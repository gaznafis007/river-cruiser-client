import Ships from "./Ships/Ships";
import Header from "./Header/Header";
import EventDetails from "./EventDetails/EventDetails";
import GuestList from "./GuestList/GuestList";

export default function Home() {
  return (
    <>
        <Header/>
        <Ships/>
        <EventDetails/>
        <GuestList/>
    </>
  )
}
