
const TestimonialCard = ({ testimonialImg, testimonialName, testimonialText }) => {
  return (
    <div className="my-6">
      <div className="relative flex flex-col gap-4 py-8 px-6 mx-4 bg-primary/10 dark:bg-gray-800 shadow-lg rounded-xl">
        <div>
          <img
            src={testimonialImg}
            className="w-20 h-20 rounded-full object-cover"
            alt={testimonialName}
          />
        </div>
        <div>
          <div>
            <p className="text-gray-500 text-sm">
              {testimonialText}
            </p>
            <h1 className="text-xl font-bold text-black/80 dark:text-white mt-4">
              {testimonialName}
            </h1>
          </div>
        </div>
        <p className="absolute top-0 right-0 text-black/20 text-9xl font-serif">
        ,,
      </p>
      </div>
    </div>
  )
}

export default TestimonialCard