import { imageUrl } from "@/constants"
import Item from "./Item"

const data = [
  {
    id: 1,
    title: 'Commitment to Excellence',
    description: 'We are dedicated to delivering excellence in every aspect of our service.',
    icon: '4'
  },
  {
    id: 2,
    title: 'Integrity and Transparency',
    description:
      'Upholding integrity and transparency in all our interactions.',
    icon: '5'
  },
  {
    id: 3,
    title: 'Innovation',
    description:
      'Continuously innovating to improve the recruitment experience for all stakeholders.',
    icon: '6'
  },
  {
    id: 4,
    title: 'Diversity and Inclusion',
    description:
      'Embracing diversity and fostering an inclusive environment for everyone.',
    icon: '7'
  }
]

const About = () => {
  return (
    <section id='about' className='overflow-hidden lg:pb-25 xl:pb-30'>
      <div className="relative isolate overflow-hidden py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mt-10 text-lg">
            <p>Our mission is to bridge the gap between top-notch talent and exceptional opportunities. We strive to revolutionize the recruitment process and make hiring efficient, effective, and enjoyable for both employers and candidates.</p>
          </div>
          <div className='relative mx-auto max-w-c-1400 px-4 md:px-8 xl:px-0 mt-12'>
            <div className='grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-10'>
              {data?.map((item) => <Item key={item.id} data={item} />)}
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About