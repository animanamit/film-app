interface SmallMovieCardProps {
  posterPath: string
  title: string
}

const SmallMovieCard = ({ posterPath, title }: SmallMovieCardProps) => {
  return (
    <div className='group overflow-hidden relative w-[192px] flex-none'>
      <img
        src={`https://image.tmdb.org/t/p/w300${posterPath}`}
        alt='movie poster'
        className='h-72 duration-200 group-hover:scale-110'
      />
      <div
        className='absolute top-0 h-72 bottom-0 right-0 left-0 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-gray-900  group-hover:opacity-70;
'
      >
        <div className='relative h-full w-full text-center'>
          <h5 className='bottom-4 left-0 px-2 right-0 absolute h-fit invisible group-hover:visible duration-200 text-white uppercase tracking-tighter'>
            {title}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default SmallMovieCard
