export default function Objective({ src, title, description}){
    return (
        <article className="flex flex-col gap-2 items-center justify-center">
            <div className="w-full flex justify-center items-center">
                <img className="w-4/5" src={src} alt="objetive" />
            </div>
            <h3 className="text-lg font-extrabold text-gray-800">{title}</h3>
            <p className="text-base font-light text-gray-600 text-justify">{description}</p>
        </article>
    )
}