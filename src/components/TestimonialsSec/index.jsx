import Slider from "react-slick"
import { SliderConfig } from './../../data/SliderConfig';
import { Testimonials } from './../../data/TestimonialsData';
import TestimonialCard from './../TestimonialCard';


const TestimonialsSec = () => {
  return (
    <div className="pb-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What our customer says?
          </p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
        </div>
        <div>
          <Slider {...SliderConfig}>
            {
              Testimonials.map(testimonial => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonialImg={testimonial.img}
                  testimonialName={testimonial.name}
                  testimonialText={testimonial.text}
                />
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSec