import { Item } from "../../App";

export default function List({items} : {items: Item[]}) {
  return (
    <ul className="w-[70%] flex flex-col gap-[16px] overflow-auto">
      {items.map((item, index) => (
        <li key={index} className="p-[16px] rounded-2xl bg-gray-100 w-full">
          <h1 className="text-[16px] font-semibold">{item.model}</h1>
          <p>Made by: {item.madeCompany}</p>
          <p>Rating: {item.rating}</p>
          <p>Reviews: {item.numberOfReview}</p>
          <p>Price: ${item.price}</p>
        </li>
      ))}
    </ul>
  )
}
