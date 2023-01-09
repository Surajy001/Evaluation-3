import Image from 'next/image';
import React from 'react'

const Projects = ({prodetails}) => {
  const prodetailss=prodetails.items;
  return (
    <div>
    {
      prodetailss.map((details)=>(
        <h1>{details.name}</h1>
        // <h3>{details.full_name}</h3>
      )
      )
    }
    </div>
  )
}

export default Projects;


export async function getStaticProps(){
  const res=await fetch("https://api.github.com/search/repositories?q=user:Surajy001+fork:true&sort=updated&per_page=10&type=Repositories");
  let da=await res.json();
  
  return {
    props:{
      prodetails:da
    }
  }
}