import Link from "next/link"
import Image from "next/image"
import { BiRightTopArrowCircle } from "react-icons/bi"
import { GameProps } from "@/utils/types/game"

interface GameCardProps {
    data: GameProps
}

export function GameCard({ data }: GameCardProps) {
    return (
        <Link href={`/game/${data.id}`}>
            <section className="w-full bg-slate-200 rounded-lg p-4 mb-5">
                <div className="w-full relative h-56 hover:scale-105  transition-all duration-300">
                    <Image
                        className="rounded-lg object-cover"
                        src={data.image_url}
                        alt={data.title}
                        priority={true}
                        quality={100}
                        fill={true}
                        sizes='(max-width: 798px) 100vw, (max-width: 1200px) 44vw'
                    />
                </div>
                <div className="flex itens-center mt-2 justify-between">
                    <p className="text-sm font-bold px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden ">{data.title}</p>
                    <BiRightTopArrowCircle size={24} color="#000"/>
                </div>
            </section>
        </Link>

    )
}