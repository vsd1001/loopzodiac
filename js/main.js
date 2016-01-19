var zodiac= [
   {
    
     sign:  "aquarius",
     fortune:"knowledge, humanitarian,serious,insightful,duplicitous",
     image :"http://codifyacademy.com/zodiac/img/aquarius.jpg"
      
   },
   {
    sign:"aries",
    fortune:"Active, Demanding, Determined, Effective, Ambitious",
    image:"http://codifyacademy.com/zodiac/img/aries.jpg"

   },
   {
   	sign: "cancer",
    fortune:"Emotion,Diplomatic,Intensity,Impulsive,Selective",
    image:"http://codifyacademy.com/zodiac/img/cancer.jpg"
   },
   {
   	sign:"capricorn",
    fortune:"Determination,dominance,Perserving,Pratical,willful",
    image:"http://codifyacademy.com/zodiac/img/capricorn.jpg"
   },
   {
   	sign:"gemini",
    fortune:"Communication,Indecesion,Inquisitive,Intelligent,Changeable",
    image:"http://codifyacademy.com/zodiac/img/gemini.jpg"
}, 
      {
   	sign:"leo",
    fortune:"Ruling,Warmth,Generosity,Faithful, Initiative",
    image:"http://codifyacademy.com/zodiac/img/leo.jpg"
   },
   {
   	sign:"libra",
    fortune:"Balance, justice, Truth, Beauty, Perfection",
    image:"http://codifyacademy.com/zodiac/img/libra.jpg"
   },
   {
   	sign:"pisces",
    fortune:"Philosophical, Motion, Experimentation, Optimism",
    image:"http://codifyacademy.com/zodiac/img/pisces.jpg"
   },
  {
  	sign:"sagittarius",
    fortune:"Philosophical, Motion, Experimentation, Optimism",
    image:"http://codifyacademy.com/zodiac/img/sagittarius.jpg"
   
    },
  {
  	sign:"scorpio",
    fortune:"Transient,Self-willed, Purposeful, Unyeielding",
    image:"http://codifyacademy.com/zodiac/img/scorpio.jpg"
},
{
	sign:"taurus",
    fortune:"Security, Subtle strength, Appreciation, Instruction",
    image:"http://codifyacademy.com/zodiac/img/taurus.jpg"
},
{
	sign:"virgo",
    fortune:"Analyzing, Practical, Reflective, Observation, Thoughtful",
    image:"http://codifyacademy.com/zodiac/img/virgo.jpg"
}
  ]

function horoscope(){
	var sign = document.getElementById("sign").value.toLowerCase()

   for(i=0; i<zodiac.length; i++){
     
      if (sign==zodiac[i].sign){

            document.getElementById("yourSign").innerHTML = zodiac[i].sign
            document.getElementById("icon").src = zodiac[i].image
            document.getElementById("yourHoroscope").innerHTML = ("your best attributes are: " + zodiac[i].fortune)
             return
}else{
	document.getElementById("yourSign").innerHTML = "that's not one of your sign .try again"
            document.getElementById("icon").src =""
            document.getElementById("yourHoroscope").innerHTML = ""
        }


   }
}

