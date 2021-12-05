import React from 'react';
import CodeQuiz from '../../assets/CodeQuiz.png';
import BudgetTracker from '../../assets/BudgetTracker.png';
import TechBlog from '../../assets/TechBlog.png';
import FlightPlan from '../../assets/FlightPlan.png';
import WeatherDashboard from '../../assets/WeatherDashboard.png';
import NoteTaker from '../../assets/NoteTaker.png';


export default function Portfolio() {
    return (
        <div className='container'>
            <section id='work' className='text-center'>
                <h1 className='mb-1'>Work</h1>
                <p>These are projects that I have recently completed.</p>
                <hr/>
                    <div className='row'>

                        <div className='col-lg-4 col-md-6 p-4'>
                            <div className='card'>
                                <div className='bg-image'>
                                    <img src={CodeQuiz} className='img-fluid' alt='Screenshot from CodeQuiz App'/>
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title'>CodeQuiz</h5>
                                    <p className='card-text'>
                                        HTML | CSS | JS | Bootstrap
                                    </p>
                                    <a href='https://jyoung0613.github.io/Quizgame/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                                    <a href='https://github.com/jyoung0613/Quizgame' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub Repo</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 p-4'>
                            <div className='card'>
                                <div className='bg-image'>
                                    <img src={BudgetTracker} className='img-fluid' alt='Screenshot from Budget Tracker App'/>
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title'>Budget Tracker</h5>
                                    <p className='card-text'>Heroku | MongoDB | Express | Node</p>
                                    <a href='https://sleepy-tundra-40450.herokuapp.com/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                                    <a href='https://github.com/jyoung0613/budget_trackr' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub Repo</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 p-4'>
                            <div className='card'>
                                <div className='bg-image'>
                                    <img src={TechBlog} className='img-fluid' alt='Screenshot from Tech Blog App'/>
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title'>Tech Blog</h5>
                                    <p className='card-text'>
                                        MySQL | Express | Sequelize
                                    </p>
                                    <a href='https://sleepy-basin-21214.herokuapp.com/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                                    <a href='https://github.com/jyoung0613/tech-blog' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub Repo</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 p-4'>
                            <div className='card'>
                                <div className='bg-image'>
                                    <img src={FlightPlan} className='img-fluid' alt='Screenshot from 1st Group Project the Flightplan App' />
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title'>Flight plan</h5>
                                    <p className='card-text'>
                                        HTML | Bulma | JS | API
                                    </p>
                                    <a href='https://tonyslonaker.github.io/flightplan/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                                    <a href='https://github.com/tonyslonaker/flightplan' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 p-4'>
                            <div className='card'>
                                <div className='bg-image'>
                                    <img src={WeatherDashboard} className='img-fluid' alt='Screenshot from Weather Dashboard App'/>
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title'>Weather Dashboard</h5>
                                    <p className='card-text'>
                                        HTML | CSS | JS | Bootstrap | API
                                    </p>
                                    <a href='https://jyoung0613.github.io/weather-dashboard/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                                    <a href='https://github.com/jyoung0613/weather-dashboard' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub Repo</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 p-4'>
                            <div className='card'>
                                <div className='bg-image'>
                                    <img src={NoteTaker} className='img-fluid' alt='Screenshot from Note Taker App' />
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title'>Note Taker</h5>
                                    <p className='card-text'>
                                        HTML | CSS | JS
                                    </p>
                                    <a href='https://powerful-stream-03341.herokuapp.com/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                                    <a href='https://github.com/jyoung0613/note-takr' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub Repo</a>
                                </div>
                            </div>
                        </div>

                    </div>
            </section>
        </div>
    );
}