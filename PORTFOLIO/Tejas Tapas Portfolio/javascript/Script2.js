// local reviews data
const experience = [
    {
      id: 1,
      name: "Lets Upgrade",
      job: "Open Source Contributor",
      img:
        "images/img1.png",
      text:
        "I am currently working as a open source contributor at lets upgrade on a project name Blog Application.it is An app which allows you to perform many essential tasks auch as creating, editing and publishing blog posts,moderating comments.",
    },
    {
      id: 2,
      name: "Coding Club India",
      job: "Digital Marketer",
      img:
        "images/img2.png",
      text:
        "It was 51 days internship program where we helped students all over india by provinding them weekly Coding Contest,organising webinar,giving important coding updates and internship opportunity.I was ranked 8 among 700 students and now succesfully runs a group of more than 300 student. ",
    },
    {
      id: 3,
      name: "GirlScript Ranchi",
      job: "Open Source Contributor",
      img:
        "images/img3.png",
      text:
        "I worked as a open source contributor where we helped student to make their own portfolio from stratch by providing all the necessary knowledge.It was a 6 day Bootcamp.",
    },
    {
      id: 4,
      name: "Progate",
      job: "Community Intern",
      img:
        "images/img4.png",
      text:
        "I was a community Intern at Progate where we organised a 3 day weekend learning program across collegs of India.I worked in the feild of Marketing Domain.",
    },
    {
      id: 5,
      name: "Trsyst IIT Delhi",
      job: "Campus Ambassador",
      img:
        "images/img5.png",
      text:
        "Tryst is the annual event of IIT Delhi where i served as Campus Ambassador giving updates and increasing its reach in my campus ",
    },
  ];
  // Get all feild of our Experience section
  const img=document.getElementById('image');
  const name=document.getElementById('name');
  const job=document.getElementById('job');
  const text=document.getElementById('text');
  
  // Get prev and next button
  const prevBtn=document.querySelector(".prev-btn");
  const nextBtn=document.querySelector(".next-btn");
  
  // Set starting value
  let currentItem=0;
  
  // Load item
  window.addEventListener('DOMContentLoaded',function(){
    showExperience();
  })
  
  // show experience based on value of currentItem
  function showExperience(){
    const item=experience[currentItem];
    img.src=item.img;
    name.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
  }
  
  // show next experience 
  nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>experience.length){
      currentItem=0;
    }
    showExperience();
  })
  // show prev experience
  prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
      currentItem=experience.length-1;
    }
    showExperience();
  })