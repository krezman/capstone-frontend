import Footer from "../components/Footer";

const About = () => {
  return(
    <div className="aboutPage">


      <div className="body">
        <div>
          <h1 className="aboutHead">Why Your Day?</h1>
          <p className="rant">
            We are fully dedicated to gathering a full collection of the top vendors and artists for <i>"Your Day"</i>. We really want to start a full fledged app that will eventually allow users who aren't vendors to also make accounts so that you can shop around for great vendors in your area or maybe not in your area depending on how much you like their content. So please check back soon and we should start adding more functionality for connecting with your favorite artists!
          </p>
        </div>
        <div>
          <img className="aboutImg" src="https://images.unsplash.com/photo-1509927083803-4bd519298ac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Shoes"/>
        </div>
      </div>


      <Footer/>


    </div>
  )
}

export default About;