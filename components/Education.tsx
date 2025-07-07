import React from 'react'
import { Tabs } from './ui/Tabs'
import { tabs } from '@/data'

const Education = () => {
  return (
    // <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
    //   <Tabs tabs={tabs} />
    // </div>
    <div className="h-[20rem] sm:h-[74rem] md:h-[42rem] [perspective:1000px] relative b flex flex-col mx-auto w-full items-start justify-start mb-20" id="education">
      <h1 className="heading">
        My {' '}
        <span className="text-purple">Education</span>
      </h1>
      <Tabs tabs={tabs}/>
    </div>
  )
}

export default Education
