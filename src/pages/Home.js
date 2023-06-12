import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
}, [])
  useEffect(() => {
    AOS.init({duration: 2000});
}, [])


  return(
    <div className="homePage">



      <section className="topHome">
        <div>
          <div className="topHomeRight">
            <div data-aos="fade-right">
              <h1 className="firstHeader">
                Calling all dream makers!
              </h1>
              <p className="firstLine">
                We are on the search for the absolute best in the business and we want to make it a little easier for you to show the world what dreams can be made real with a little help from the right people.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img className="topHomePhoto" src="https://images.unsplash.com/photo-1612599542558-f3022089fb38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Wedding Bells"/>
        </div>
      </section>




      <section className="container">

        <div>
          <div className='box1'>
            <div>
              <img className="img1" src="https://images.unsplash.com/photo-1531058240690-006c446962d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="florist"/>
            </div>
            <div className="text1" data-aos="fade-left">
              <p className='secondLine'>
                We Are Looking for everyone with a talent and yearning to make all of out clients special day that much more of a dream come true.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section className="homeBottom">
        <div className='lastHeadDiv'>
          <h2 className='lastHead'>WHO ARE WE LOOKING FOR RIGHT NOW?</h2>
        </div>

        <div className="container2" >
              <div className='jobCard'>
                <img className='front' src='https://www.brides.com/thmb/Mt9-rJp9deyjwS3w8quNCANdWx4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-18293907711-162737a0b4264ea6b180ee2b31bb518a.jpg' alt='Wedding Planner'/>
                <h3 className="job">Wedding Planners</h3>
              </div>
              <div className='jobCard'>
                <img className='front' src='https://www.brides.com/thmb/lcjJw2DROgQJO7xRBDsp1Q8anoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/re-2bef82ff5a724ccdbceb327e577ebb8b.jpg' alt='Wedding Planner'/>
                <h3 className="job">Day-of-Coordinators</h3>
              </div>
              <div className='jobCard'>
                <img className='front' src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='Wedding Planner'/>
                <h3 className="job">Food Catering</h3>
              </div>
              <div className='jobCard'>
                <img className='front' src='https://images.unsplash.com/photo-1526979118433-63c7344f06f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='Wedding Planner'/>
                <h3 className="job">DJ/Entertainment</h3>
              </div>
              <div className='jobCard'>
                <img className='front' src='https://images.unsplash.com/photo-1612311370228-b3baf6399032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80' alt='Wedding Planner'/>
                <h3 className="job">Photographers</h3>
              </div>
              <div className='jobCard'>
                <img className='front' src='https://images.unsplash.com/photo-1612633783539-e9926f45cc41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='Wedding Planner'/>
                <h3 className="job">Floral Designers</h3>
              </div>
              <div className='jobCard'>
                <img className='front' src='https://images.unsplash.com/photo-1521038081954-b4c41414f5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80' alt='Wedding Planner'/>
                <h3 className="job">Officiants</h3>
              </div>
              
        </div>

      </section>


      <Footer/>
    </div>
  )
}

export default Home;