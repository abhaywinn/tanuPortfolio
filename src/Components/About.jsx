import ResumeSection from './Resume_section';

const About = () => {
  return (
    <>
    <div className='md:max-w-4xl max-w-2xl p-7 my-5 text-left m-auto'>
      <div className='bg-white text-black space-y-4'>
      <h1 className='text-3xl md:text-5xl font-semibold'>I have always loved tech</h1>
      <h3 className="font-bold">My quick story</h3>
    
       <div className="text-[15px] space-y-4">
      <p>
      <span className="font-bold"> Hi, I’m Tanishka Gupta,  </span>
I’m a self-taught full-stack developer with a story that’s a little different. Let me take you back to 2020—the year of the pandemic. 
I was 18, fresh out of high school, and honestly, a bit lost . I had just passed my intermediate exams, but I had no job, no skills,
 and no idea what to do next. That’s when I stumbled upon something called “website development.” I’d never heard of it before,
  but it sounded exciting. There was just one problem: I didn’t have a laptop or PC. It was frustrating, but I held onto that curiosity.   </p> <br />
<span className="font-bold">Fast forward to 2023. With my brand-new PC, I finally started my coding journey.</span> <br />
I spent hours watching videos,reading roadmaps, and figuring out where to begin. I started with HTML, and honestly, it felt like learning 
 a new language—literally. It was strange and a bit overwhelming at first, but day by day, it started to make sense. 
 Then came CSS, which was fun (though sometimes frustrating) as I played around with colors, layouts, and designs.

 <p>But when I met JavaScript, everything changed. It was my first real programming language, and suddenly, 
 I could see my applications come to life. They weren’t just static pages anymore—they were interactive, dynamic, and *mine*.  
</p>

<p>From there, I dove into React for the frontend and Express.js for the backend, and I haven’t looked back since. 
It’s been two years of learning, failing, and growing, and I’m proud of how far I’ve come. </p>

<h1 className="font-bold text-lg">As a Developer</h1> 
 <p>I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and build scalable web applications. 
But more than that, I love the process of creating something from scratch and seeing it work. Whether it’s
 solving a tricky bug or building a feature that users love, coding gives me a sense of purpose and accomplishment.</p> <br />

<h1 className="font-bold text-lg">As a Person</h1> 
<p>If I had to describe myself in one word, it would be *curious*. I’m a perpetual learner, always eager to explore new technologies,
 tools, and ideas. My journey hasn’t been perfect—I’ve made plenty of mistakes along the way. I spent a whole year stuck in 
 “tutorial hell,” watching endless videos but never building anything on my own. I didn’t focus on fundamentals, skipped theory,
  and rarely revised what I learned. Worst of all, I doubted myself. I used to think coding was too hard, that I wasn’t cut out for it. </p>

<p>But here’s the thing: I didn’t give up. I kept going, and slowly but surely, I started to believe in myself. 
Today, I’m confident in my abilities and proud of how far I’ve come. I’m proof that with curiosity, persistence,
 and a willingness to learn, you can achieve anything—even without a tech background.</p>  

<h1 className="font-bold text-lg">When I’m Not Coding</h1>  
<p>You’ll probably find me in the kitchen, cooking up something delicious. Cooking is my happy place—it’s my way of 
unwinding and creating something tangible (and tasty) after a day of debugging. Plus, it doesn’t require any human 
involvement, which is a bonus for an introvert like me! </p>

<h1 className="font-bold text-lg">Why I Love Coding</h1>  
<p>Coding is definitely for me. I love the thrill of solving problems, the satisfaction of seeing my applications 
work, and the joy of learning something new every day. It’s not just a career for me—it’s a passion
. And while I’m still learning and growing, I’m excited about the possibilities ahead. </p>

<h1 className="font-bold text-lg">Let’s Connect!</h1>  
<p>If you’re looking for someone who’s passionate, self-driven, and always ready to learn, I’d love to chat. 
Whether it’s about a project, a job opportunity, or just swapping stories about coding (or cooking), 
feel free to reach out at [email] or connect with me on [LinkedIn/GitHub]. Let’s build something amazing together! </p>
</div>

 <div>
 <p className="text-sm font-semibold mb-10">Looking for my <span className='text-[#e74c3c] font-semibold'>CV</span>?</p>
 <ResumeSection/>
 </div>

      </div>
    </div>
    </>
  )
}

export default About