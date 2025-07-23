import Image from "next/image";

export default function ImagPeragraph() {
    const paragraphText = `I believe in a strong
strategy-first approach to
deliver performant and
beautiful experiences`;

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 lg:px-32 font-serif gap-10 mt-32">
                <div className="text-4xl md:text-5xl">
                    <p className="whitespace-pre-line leading-snug">{paragraphText}</p> 


                    <div className="text-sm font-sans pt-10 text-yellow-200">
                        <p>MY APPROACH</p>
                    </div>
                </div>

                <Image src="/whtsp.jpeg" alt="image" width={500} height={500} className="rounded-xl" />
            </div>
        </>
    )
}
