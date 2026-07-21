type LuxuryCardProps = {
  title:string;
  value:string;
  subtitle?:string;
};


export default function LuxuryCard({
  title,
  value,
  subtitle
}:LuxuryCardProps){

  return (

    <div className="
      rounded-3xl
      bg-neutral-900
      border
      border-neutral-800
      p-8
      hover:border-neutral-600
      transition
    ">

      <p className="text-sm text-neutral-500">
        {title}
      </p>


      <h3 className="
        text-4xl
        font-bold
        mt-4
        tracking-wide
      ">
        {value}
      </h3>


      {
        subtitle &&
        <p className="
          text-xs
          text-neutral-500
          mt-3
        ">
          {subtitle}
        </p>
      }


    </div>

  );

}
