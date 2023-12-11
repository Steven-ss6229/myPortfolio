import './style.css';
import  abs  from './images/abs.avif';
import me from './images/me.jpg';
import download from './images/download.png';
import * as bootstrap from 'bootstrap';

const tooltips = document.querySelectorAll('.tt')
        tooltips.forEach((tooltip) => {
            new bootstrap.Tooltip(tooltip)
        })

export function Home(){
    return(
        <section style={{padding:"10px 0px",backgroundColor: "rgba(26, 194, 250, 0.764)"}} id="Home">
            <div className="container-lg">
                <div className="row justify-content-center bg-aqua">
                    <div className="col-lg-10" id="back">
                        <img src={abs} className="img-fluid" alt=""></img>
                        <div className="text-center text-dark" id="back-text">
                            <h1>Hi! There, I am Steven Sodadasi</h1>
                            <p>This is my portfolio website , where you can find all my works and projects</p>
                            <p>Go ahead and Explore <i className="bi bi-search"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function About(){
    return(
        <section id="intro" className='mt-2'>
            <div class="container-lg">
                <div class="row justify-content-center align-item-center">
                    <div class="col-md-5 text-center text-md-start border border-secondary" style={{backgroundColor: "rgb(214, 213, 213)"}}>
                        <h1>
                            <div class="display-4">Steven Sodadasi</div>
                            <div class="lead text-muted"><i class="bi bi-file-earmark-person"></i> A Learner | ML Enthusiast</div>
                        </h1>
                        <hr />
                        <div class="contact">
                            <p class="lead pt-0">Im a MERN stack web developer and also a Machine leaning enthusiast.</p>
                            <span class="lead"><i class="bi bi-envelope-at-fill"></i> How to reach me : 
                                <a href="mailto:steven.ss6229@gmail.com" class="btn btn-sm btn-primary fw-bold">Email</a>
                            </span>
                            <br /><br />
                            <span class="lead"><i class="bi bi-geo-fill"></i> Narsapur , west godavari , AP</span>
                            <br /><br />
                            <span class="lead fw-900"><i class="bi bi-at"></i> Connect with me : </span>
                            <p class="btn-group">
                                <a href="https://www.linkedin.com/in/steven-sodadasi-669687251" target="_blank" class="btn btn-sm btn-success fw-bold"><i class="bi bi-linkedin"></i> Linked In</a>
                                <a href="https://github.com/Steven-ss6229" target="_blank" class="btn btn-warning btn-sm fw-bold"><i class="bi bi-github"></i> GitHub</a>
                                <a href="https://leetcode.com/steven_ss3/" target="_blank" class="btn btn-sm btn-danger fw-bold">LeetCode</a>
                            </p>

                            <div class="d-block mt-3 btn btn-secondary">
                                HELLO<i class="bi bi-chevron-double-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 text-center d-none d-md-block">
                        <span class="tt" data-bs-placement="bottom" title="STEVEN SODADASI">
                            <img src={me} alt="Image" class="img-fluid border border-secondary align-items-center" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Info(){
    return(
        <section id="info" class="bg-light mt-5" style={{padding: "60px 0px"}}>
            <div class="container-lg">
                <div class="text-center">
                    <h2><i class="bi bi-info-circle-fill d-none d-md-inline"></i> Info Check</h2>
                    <p class="lead text-muted">To know more about me and my works</p>
                </div>
                <div class="row my-5 aligh-items-center justify-content-center">
                    <div class="col-8 col-lg-4 col-xl-3">
                        <div class="card border-info border-2">
                            <h4 class="card-header border-info text-center">Web Development</h4>
                            <div class="card-body text-center py-4">
                                <h5 class="card-title">All of my works in this domain</h5>
                                <p class="card-text mx-3 my-1 text-muted d-none d-lg-block">MERN stack is a collection of technologies that enables faster application development.The main purpose of using MERN stack is to develop apps using JavaScript only.</p>
                                <a href="https://github.com/Steven-ss6229" class="btn btn-outline-danger btn-md mt-3" target="_blank">View</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-8 col-lg-4 col-xl-3">
                        <div class="card border-primary border-2">
                            <h4 class="card-header border-primary text-center">AWS</h4>
                            <div class="card-body text-center py-4">
                                <h5 class="card-title">Amazon web services cloud computing</h5>
                                <p class="card-text mx-3 my-1 text-muted d-none d-lg-block">The amazon web services emerging talent community provides great oppurtunities to learn about the cloud computing. The service different levels of certification on different courses.</p>
                                <a href="https://aws-emergingtalent.influitive.com/profiles/95b301cf-5a16-436e-9c62-dd756fa30ae1" class="btn btn-outline-danger btn-md mt-3" target="_blank">View</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-8 col-lg-4 col-xl-3">
                        <div class="card border-info border-2">
                            <h4 class="card-header border-info text-center">Machine Learning</h4>
                            <div class="card-body text-center py-4">
                                <h5 class="card-title">All of my works in this domain</h5>
                                <p class="card-text mx-3 my-1 text-muted d-none d-lg-block">Machine learning is an important component of the growing field of data science. Machine learning algorithms are typically created using frameworks that accelerate solution development.</p>
                                <a href="https://github.com/Steven-ss6229" class="btn btn-outline-danger btn-md mt-3" target="_blank">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Upload(){
    return(
        <section id="upload" className='mt-5' style={{backgroundColor: "rgb(240, 238, 238)", height:"650px"}}>
            <div class="container-lg">
                <div class="text-center">
                    <h2><i class="bi bi-stars"></i>MY POSTS AND UPLOADS</h2>
                    <p class="lead text-muted">Posts and details which i have uploaded in linkedIn and other social media(may not be upto date)</p>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="list-group">
                            <div class="list-group-item py-3">
                                <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">MERN internship
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </h5>
                                    <small>Dec 11, 2023</small>
                                </div>
                                <p class="mb-1">I have completed my internship in ethnus as MERN stack developer.</p>
                                <div class="d-flex justify-content-between">
                                    <small></small>
                                    <a href="https://www.linkedin.com/posts/steven-sodadasi-669687251_mernstack-webdevelopment-ethnusexperience-activity-7140000282968485890-1pU7?utm_source=share&utm_medium=member_desktop" target="_blank" class="btn btn-outline-success active">View</a>
                                </div>
                            </div>

                            <div class="list-group-item py-3">
                                <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">School management system - MERN
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </h5>
                                    <small>Dec 3, 2023</small>
                                </div>
                                <p class="mb-1">A website which i have developed using MERN for school managment and efficient working.</p>
                                <div class="d-flex justify-content-between">
                                    <small></small>
                                    <a href="https://www.linkedin.com/posts/steven-sodadasi-669687251_mernstack-fullstackdevelopment-webdevelopment-activity-7136065353503162368-3J8g?utm_source=share&utm_medium=member_desktop" target="_blank" class="btn btn-outline-success active">View</a>
                                </div>
                            </div>

                            <div class="list-group-item py-3">
                                <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">NPTEL course
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </h5>
                                    <small>Nov 23, 2023</small>
                                </div>
                                <p class="mb-1">Completion of an NPTEL course on educational leadership which builds leadership skills and different educational ideas.</p>
                                <div class="d-flex justify-content-between">
                                    <small></small>
                                    <a href="https://www.linkedin.com/posts/steven-sodadasi-669687251_educationalleadership-nptel-continuouslearning-activity-7135297954751418369-Mg2N?utm_source=share&utm_medium=member_desktop" target="_blank" class="btn btn-outline-success active">View</a>
                                </div>
                            </div>

                            <div class="list-group-item py-3">
                                <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">RFID tollgate project
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </h5>
                                    <small>Sept 23, 2022</small>
                                </div>
                                <p class="mb-1">Developed an RFID module based tollgate system which makes hassle free tolls and efficient traffic flow.</p>
                                <div class="d-flex justify-content-between">
                                    <small></small>
                                    <a href="https://www.linkedin.com/posts/steven-sodadasi-669687251_technology-project-sensors-activity-7078771390488719360-3xPq?utm_source=share&utm_medium=member_desktop" target="_blank" class="btn btn-outline-success active">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Contact(){
    return(
        <section id="contact" style={{backgroundColor: "rgb(240, 238, 238)"}}>
            <div class="container-lg">
                <div class="text-center">
                    <h2><i class="bi bi-hand-index-thumb-fill"></i> Get in Touch</h2>
                    <p class="lead text-muted">Questions to ask? Fill out the form to contact me directly...</p>
                </div>

                <div class="row justify-content-center my-5">
                    <div class="col-lg-6">
                        <form action="">
                            <label for="email" class="form-label">Email address:</label>
                            <div class="mb-4 input-group">
                                <span class="input-group-text">
                                    <i class="bi bi-envelope-fill"></i>
                                </span>
                                <input type="email" class="form-control" id="email" placeholder="e.g. xyz@gmail.com" required />

                                <span class="input-group-text">
                                    <span class="tt" data-bs-placement="bottom" title="Enter an email address we can reply to">
                                        <i class="bi bi-question-circle text-muted"></i>
                                    </span>
                                </span>
                            </div>

                            <label for="name" class="form-label">Name:</label>
                            <div class="mb-4 input-group">
                                <span class="input-group-text">
                                    <i class="bi bi-person-fill"></i>
                                </span>
                                <input type="text" class="form-control" id="name" placeholder="Name" required/>

                                <span class="input-group-text">
                                    <span class="tt" data-bs-placement="bottom" title="Pretty self explanatory really...">
                                        <i class="bi bi-question-circle text-muted"></i>
                                    </span>
                                </span>
                            </div>

                            <label for="subject" class="form-label">What is your question about?</label>
                            <div class="input-group mb-4">
                                <span class="input-group-text">
                                    <i class="bi bi-question-circle-fill"></i>
                                </span>
                                <select class="form-select" aria-label="Default select example" id="subject">
                                    <option selected>Open this select menu</option>
                                    <option value="web development">Web Development</option>
                                    <option value="machine learning">Machine Learning</option>
                                    <option value="leetcode">LeetCode</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            <div class="form-floating mb-4">
                                <textarea class="form-control" id="query" rows="5"></textarea>
                                <label for="query" class="form-label">Your query...</label>
                            </div>

                            <div class="mb-4 text-center">
                                <button type="submit" class="btn btn-warning">Submit <i class="bi bi-send-fill"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export function Project(){
    return(
        <section id="projects">
            <div class="container-md">
                <div class="text-center">
                    <h2><i class="bi bi-person-workspace"></i> Main Project Works</h2>
                    <p class="lead text-muted">A quick glance at my projects(may not be upto date)</p>
                </div>

                <div class="row my-5 g-5 justify-content-around align-items-center">
                    <div class="col-6 col-lg-4">
                        <img src={download} class="img-fluid" alt="" style={{width:"75%"}}/>
                    </div>

                    <div class="col-lg-6">
                        <div class="accordion" id="projects_list">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading-1">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#project-1" aria-expanded="true" aria-controls="project-1">
                                        LOST AND FOUND
                                    </button>
                                </h2>
                                <div id="project-1" class="accordion-collapse collpase show" aria-labelledby="heading-1" data-bs-parent="#projects_list">
                                    <div class="accordion-body">
                                        <p>
                                            The lost and found website which is an onlline platofrm for sharing of details and to recover any lost or found items in a community or a society.
                                        </p>
                                        <a href="https://github.com/Steven-ss6229" class="btn btn-outline-danger me-2" >App</a>
                                        <a href="https://github.com/Steven-ss6229" target="_blank" class="btn btn-outline-danger" >Code</a>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading-2">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#project-2" aria-expanded="false" aria-controls="project-2">
                                        MERN tasks
                                    </button>
                                </h2>
                                <div id="project-2" class="accordion-collapse collpase" aria-labelledby="heading-2" data-bs-parent="#projects_list">
                                    <div class="accordion-body">
                                        <p>
                                            the MERN tasks which consists of HTML , CSS , bootstrap , reactjs and javascript gives ability to work more the web development.
                                        </p>
                                        <a href="https://github.com/Steven-ss6229" target="_blank" class="btn btn-outline-danger" >Code</a>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading-1">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#project-1" aria-expanded="true" aria-controls="project-1">
                                        SCHOOL MANAGEMENT SYSTEM
                                    </button>
                                </h2>
                                <div id="project-1" class="accordion-collapse collpase show" aria-labelledby="heading-1" data-bs-parent="#projects_list">
                                    <div class="accordion-body">
                                        <p>
                                            The School managment system is a website which delivers easy access to communications and monitor efficiently making a great way to educate. 
                                        </p>
                                        <a href="https://collegemansys.vercel.app/" class="btn btn-outline-danger me-2" >App</a>
                                        <a href="https://github.com/Steven-ss6229/frontend-mern.git" target="_blank" class="btn btn-outline-danger" >Code</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}