import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomsContainer ({context}){
    const {loading,sortedRooms,rooms} = context;
    if(loading){
        return <Loading/>
    }
    return (
<>
    <RoomFilter rooms={rooms}/>
    <RoomList rooms={sortedRooms}/>
</>)

}
export default withRoomConsumer(RoomsContainer);

/*export default function RoomsContainer() {
  return (
    <RoomConsumer>
        {
        (value)=>{
        const {loading,sortedRooms,rooms} = value
        
                )
            }
        }
    </RoomConsumer>
    
  )
}*/
