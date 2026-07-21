type StatusProps = {
  label:string;
  status?:string;
};


export default function LuxuryStatus({
 label,
 status="ONLINE"
}:StatusProps){


 return (

  <div className="
    flex
    items-center
    gap-3
    rounded-full
    border
    border-neutral-800
    px-5
    py-2
    text-sm
  ">

    <span className="
      h-2
      w-2
      rounded-full
      bg-green-400
    "></span>


    <span>
      {label}
    </span>


    <span className="text-neutral-500">
      {status}
    </span>


  </div>

 );

}
