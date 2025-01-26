type Title = {
    text1:string
    text2:string
}

const Title = ({text1,text2}:Title) => {
  return (
    <div className='inline-flex items-center gap-2 mb-3'> 
      <p className='text-gray-700 font-medium'>{text1} <span className='text-gray-500'>{text2}</span></p>
      {/* <p className='w-8 md:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p> */}
    </div>
  )
}

export default Title
