import { Oswald } from 'next/font/google'
import Link from 'next/link'
import Heading from '../Heading'
const oswald = Oswald({ subsets: ['latin'] })

const Contact = () => {
    return (
        <div className='w-full'>
            <Heading heading='Connect with me' emoji="👋" desc='Don&apos;t be a stranger.' />
            <div className='flex gap-6 flex-wrap text-lg text-gray-300'>
                <SocialLink icon={<span>✉️</span>} text="MAIL" link="mailto:shani721287@gmail.com" />
                <SocialLink icon={<span>👾</span>} text="GITHUB" link="https://github.com/zeeshanhaider5121472/" />
                <SocialLink icon={<span>💼</span>} text="LINKEDIN" link="https://www.linkedin.com/in/zeeshan-haider-80b50a179/" />
                <SocialLink icon={<span>🐦</span>} text="TWITTER" link="https://twitter.com/" />
                <SocialLink icon={<span>📸</span>} text="INSTAGRAM" link="https://instagram.com/" />
            </div>
        </div>
    )
}

type LinkProp = {
    link: string,
    text: string,
    icon: React.JSX.Element
}

const SocialLink = ({ link, text, icon }: LinkProp) => {
    return (
        <Link className={oswald.className} target='_blank' href={link}>
            <div className='flex gap-3 items-center w-fit'>
                <div className='text-xl'>
                    {icon}
                </div>
                <div className='border-b font-bold font-["Segoe UI"] font tracking-wider transition-all ease-in-out delay-[30ms] hover:text-gray-400 border-pink-500 w-[40%] hover:w-full'>
                    {text}
                </div>
            </div>
        </Link>
    )
}

export default Contact