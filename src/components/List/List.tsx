import { Item } from "../../App";

export default function List({items} : {items: Item[]}) {
  return (
    <ul className="w-[50%] flex flex-col gap-[16px] overflow-auto max-h-[40dvh]">
      {items.map((item, index) => (
        <li key={index} className="p-[16px] pb-[32px] w-full border-b-[1px] border-b-[#E2E5E6]">
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
          

        </li>
      ))}
    </ul>
  )
}
