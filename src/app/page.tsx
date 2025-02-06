import { Container } from '../components/container/index'
import { GameProps } from '@/utils/types/game'
import Link from 'next/link'
import Image from 'next/image'

import { BsArrowRightSquare } from 'react-icons/bs'
import { Input } from '@/components/input'
import { GameCard } from '@/components/GameCard'

// Api que busca jogos aleatórios
async function getDalyGame() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { next: { revalidate: 320 } })

    return res.json()

  } catch (err) {
    throw new Error("Faile to fetch data")
  }
}

// Api que busca todos os jogos
async function getGamesData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, { next: { revalidate: 320 } })

    return res.json()

  } catch (err) {
    throw new Error("Faile to fetch data")
  }
}

// Função que renderiza a pagina home
export default async function Home() {
  const dalyGames: GameProps = await getDalyGame()
  const data: GameProps[] = await getGamesData();

  // console.log(data)

  return (
    <main className="w-full">
      <Container>
        <h1 className='text-center font-bold text-xl mt-8 mb-5'> Separamos um jogo exclusivo para você</h1>
        <Link href={`/game/${dalyGames.id}`}>
          <section className='w-full bg-black rounded-lg'>
            <div className='w-full max-h-96 h-96 relative rounded-lg'>
              <div className='absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2'>
                <p className='font-bold text-xl text-white'>{dalyGames.title}</p>
                <BsArrowRightSquare size={24} color='#fff' />
              </div>

              <Image
                src={dalyGames.image_url}
                alt={dalyGames.title}
                priority={true}
                quality={100}
                fill={true}
                className='max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-500'
                sizes='(max-width: 798px) 100vw, (max-width: 1200px) 44vw'
              />
            </div>
          </section>
        </Link>

        <Input />

        <h2 className='text-lg font-bold mt-8 mb-5'>
          Jogos para conhecer
        </h2>

        <section className='grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {data.map( (item) => (
            <GameCard key={item.id} data={item}/>
          ))}
        </section>

      </Container>
    </main>

  );
}
