import { Item } from "../../App";

export default function List({items} : {items: Item[]}) {
  return (
    <ul className="w-[50%] flex flex-col gap-[16px] overflow-auto max-h-[40dvh]">
      {items.map((item, index) => (
        <li key={index} className="p-[16px] bg-orange-50 rounded-2xl w-full border-b-[1px] border-b-[#E2E5E6]">
          <h1 className="text-[16px] font-semibold">{item.model}</h1>
          <div className="flex flex-row w-full justify-between">
            <p>Made by: </p>
            <p>{item.madeCompany}</p>
          </div>
          <div className="flex flex-row w-full justify-between">
            <p>Rating: </p>
            <p>{item.rating}</p>
          </div>
          <div className="flex flex-row w-full justify-between">
            <p>Reviews: </p>
            <p>{item.numberOfReview}</p>
          </div>
          <div className="flex flex-row w-full justify-between">
            <p>Price: </p>
            <p>${item.price}</p>
          </div>
          
          <div className="flex flex-row gap-[12px] w-full mt-[16px]">
            <button className="btn btn-outline btn-lg w-1/2 border-[#3586E5] text-[#3586E5] text-[12px] p-[12px] rounded-[4px]">More details</button>
            <button className="btn btn-lg bg-[#3586E5] text-white w-1/2 text-[12px] p-[12px] rounded-[4px]">Buy</button>
          </div>
          
        </li>
      ))}
    </ul>
  )
}
