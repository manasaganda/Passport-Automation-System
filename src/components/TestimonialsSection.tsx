
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, NY",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      stars: 5,
      text: "I had to get a passport quickly for an unexpected trip abroad. PassportPanda made the process incredibly easy! I received my passport in just 3 days."
    },
    {
      name: "Michael Chen",
      location: "San Francisco, CA",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      stars: 5,
      text: "The tracking feature gave me peace of mind throughout the entire process. I always knew exactly where my application was in the pipeline."
    },
    {
      name: "Emily Rodriguez",
      location: "Miami, FL",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      stars: 4,
      text: "I was dreading the passport renewal process until I found PassportPanda. Their step-by-step guidance made it simple and straightforward."
    },
    {
      name: "David Wilson",
      location: "Chicago, IL",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      stars: 5,
      text: "Getting passports for my entire family seemed like a daunting task, but PassportPanda's family application feature saved us so much time."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + testimonialsPerPage >= testimonials.length ? 0 : prevIndex + testimonialsPerPage));
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex - testimonialsPerPage < 0 ? testimonials.length - testimonialsPerPage : prevIndex - testimonialsPerPage));
  };

  const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);

  return (
    <section className="py-16 bg-passport-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-passport-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-passport-700 max-w-2xl mx-auto">
            Don't just take our word for it. See what thousands of satisfied customers have to say about our passport services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <div className="font-semibold text-passport-900">{testimonial.name}</div>
                      <div className="text-sm text-passport-600">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                  <p className="text-passport-700 italic">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonials}
              className="rounded-full bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {[...Array(totalPages)].map((_, i) => (
              <Button 
                key={i} 
                variant="outline" 
                size="icon" 
                onClick={() => setCurrentIndex(i * testimonialsPerPage)}
                className={`rounded-full ${currentIndex / testimonialsPerPage === i ? "bg-passport-500 text-white" : "bg-white"}`}
              >
                {i + 1}
              </Button>
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonials}
              className="rounded-full bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
