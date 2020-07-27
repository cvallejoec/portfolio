import React from 'react';
import logo from './assets/static/logo.svg';
import './App.css';
import './assets/styles/App.scss';

function App() {
  return (
    <div className="App">




<div>
  <div className="ts-page-wrapper" id="page-top">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
      <div className="container">
        <a className="navbar-brand ts-push-down__50 position-absolute ts-bottom__0 bg-white pb-0 ts-z-index__1 ts-scroll" href="#page-top">
          <img src="assets/img/logo.png" alt />
        </a>
        {/*end navbar-brand*/}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        {/*end navbar-toggler*/}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-block d-lg-flex ml-auto text-right">
            <a className="nav-item nav-link active ts-scroll" href="#page-top">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link ts-scroll" href="#my-services">Services</a>
            <a className="nav-item nav-link ts-scroll" href="#about-me">About Me</a>
            <a className="nav-item nav-link ts-scroll" href="#my-skills">Skills</a>
            <a className="nav-item nav-link ts-scroll" href="#portfolio">Portfolio</a>
            <a className="nav-item nav-link ts-scroll" href="#testimonials">Clients</a>
            <a className="nav-item nav-link ts-scroll mr-2" href="#form-contact">Contact</a>
          </div>
          {/*end navbar-nav*/}
        </div>
        {/*end collapse*/}
      </div>
      {/*end container*/}
    </nav>
    {/*end navbar*/}
    {/***********************************************************************************************************/}
    {/************* HERO ****************************************************************************************/}
    {/***********************************************************************************************************/}
    <div id="ts-hero" className="ts-animate-hero-items">
      {/*HERO CONTENT *****************************************************************************************/}
      <div className="container position-relative h-100 ts-align__vertical">
        <div className="row w-100">
          <div className="col-md-8">
            {/*SOCIAL ICONS*/}
            <figure className="ts-social-icons mb-4">
              <a href="#" className="mr-3">
                <i className="fab fa-facebook" />
              </a>
              <a href="#" className="mr-3">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="mr-3">
                <i className="fab fa-pinterest" />
              </a>
              <a href="#" className="mr-3">
                <i className="fab fa-slack" />
              </a>
              <a href="#" className="mr-3">
                <i className="fab fa-instagram" />
              </a>
            </figure>
            {/*TITLE */}
            <h1>I am Jonathan Doe</h1>
            <h1 className="ts-bubble-border">
              <span className="ts-title-rotate">
                <span className="active">Designer</span>
                <span>Photographer</span>
                <span>Creative Person</span>
              </span>
            </h1>
          </div>
          {/*end col-md-8*/}
        </div>
        {/*end row*/}
        <a href="#my-services" className="ts-btn-effect position-absolute ts-bottom__0 ts-left__0 ts-scroll ml-3 mb-3">
          <span className="ts-visible ts-circle__sm rounded-0 ts-bg-primary">
            <i className="fa fa-arrow-down text-white" />
          </span>
          <span className="ts-hidden ts-circle__sm rounded-0">
            <i className="fa fa-arrow-down text-white" />
          </span>
        </a>
      </div>
      {/*end container*/}
      {/*END HERO CONTENT *************************************************************************************/}
      {/*HERO BACKGROUND **************************************************************************************/}
      <div className="ts-background">
        <div className="ts-background-image" data-bg-image="assets/img/bg-hero.jpg" />
      </div>
      {/*END HERO BACKGROUND **********************************************************************************/}
    </div>
    {/*end #hero*/}
    {/***********************************************************************************************************/}
    {/************* CONTENT *************************************************************************************/}
    {/***********************************************************************************************************/}
    <main id="ts-content">
      {/*MY SERVICES ************************************************************************************/}
      <section id="my-services" className="ts-block ts-xs-text-center pb-0">
        <div className="container">
          <div className="ts-title text-center">
            <h2>My Services</h2>
          </div>
          {/*end ts-title*/}
          <div className="row">
            <div className="col-sm-6 col-md-4 col-xl-4">
              <div className="ts-item" data-animate="ts-fadeInUp">
                <div className="ts-item-content">
                  <div className="ts-item-header">
                    <figure className="icon">
                      <img src="assets/img/icon-brushes.png" alt />
                    </figure>
                    {/*end icon*/}
                  </div>
                  {/*end ts-item-header*/}
                  <div className="ts-item-body">
                    <h4>Web Design</h4>
                    <p className="mb-0">
                      Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
                    </p>
                  </div>
                  {/*end ts-item-body*/}
                  <div className="ts-item-footer">
                    <a href="#" data-toggle="modal" data-target="#modal" className="ts-link-arrow-effect">
                      <span>Read More</span>
                    </a>
                  </div>
                  {/*end ts-item-footer*/}
                </div>
                {/*end ts-item-content*/}
              </div>
              {/*end ts-item*/}
            </div>
            {/*end col-xl-4*/}
            <div className="col-sm-6 col-md-4 col-xl-4">
              <div className="ts-item" data-animate="ts-fadeInUp" data-delay=".1s">
                <div className="ts-item-content">
                  <div className="ts-item-header">
                    <figure className="icon">
                      <img src="assets/img/icon-camera.png" alt />
                    </figure>
                    {/*end icon*/}
                  </div>
                  {/*end ts-item-header*/}
                  <div className="ts-item-body">
                    <h4>Photography</h4>
                    <p className="mb-0">
                      Fusce lorem ex, fringilla eget consequat ut, molestie sit amet nibh. Nullam vitae tincidunt
                    </p>
                  </div>
                  {/*end ts-item-body*/}
                  <div className="ts-item-footer">
                    <a href="#" data-toggle="modal" data-target="#modal" className="ts-link-arrow-effect">
                      <span>Read More</span>
                    </a>
                  </div>
                  {/*end ts-item-footer*/}
                </div>
                {/*end ts-item-content*/}
              </div>
              {/*end ts-item*/}
            </div>
            {/*end col-xl-4*/}
            <div className="col-sm-6 col-md-4 col-xl-4">
              <div className="ts-item" data-animate="ts-fadeInUp" data-delay=".2s">
                <div className="ts-item-content">
                  <div className="ts-item-header">
                    <figure className="icon">
                      <img src="assets/img/icon-video.png" alt />
                    </figure>
                    {/*end icon*/}
                  </div>
                  {/*end ts-item-header*/}
                  <div className="ts-item-body">
                    <h4>Video Editing</h4>
                    <p className="mb-0">
                      Aenean pretium nulla libero, vitae iaculis libero efficitur a. Fusce ut augue finibus quam
                    </p>
                  </div>
                  {/*end ts-item-body*/}
                  <div className="ts-item-footer">
                    <a href="#" data-toggle="modal" data-target="#modal" className="ts-link-arrow-effect">
                      <span>Read More</span>
                    </a>
                  </div>
                  {/*end ts-item-footer*/}
                </div>
                {/*end ts-item-content*/}
              </div>
              {/*end ts-item*/}
            </div>
            {/*end col-xl-4*/}
            <div className="col-sm-6 col-md-4 col-xl-4">
              <div className="ts-item" data-animate="ts-fadeInUp" data-delay=".3s">
                <div className="ts-item-content">
                  <div className="ts-item-header">
                    <figure className="icon">
                      <img src="assets/img/icon-pencil.png" alt />
                    </figure>
                    {/*end icon*/}
                  </div>
                  {/*end ts-item-header*/}
                  <div className="ts-item-body">
                    <h4>Copy Writing</h4>
                    <p className="mb-0">
                      Fusce lorem ex, fringilla eget consequat ut, molestie sit amet nibh. Nullam vitae tincidunt
                    </p>
                  </div>
                  {/*end ts-item-body*/}
                  <div className="ts-item-footer">
                    <a href="#" data-toggle="modal" data-target="#modal" className="ts-link-arrow-effect">
                      <span>Read More</span>
                    </a>
                  </div>
                  {/*end ts-item-footer*/}
                </div>
                {/*end ts-item-content*/}
              </div>
              {/*end ts-item*/}
            </div>
            {/*end col-xl-4*/}
            <div className="col-sm-6 col-md-4 col-xl-4">
              <div className="ts-item" data-animate="ts-fadeInUp" data-delay=".4s">
                <div className="ts-item-content">
                  <div className="ts-item-header">
                    <figure className="icon">
                      <img src="assets/img/icon-lcd.png" alt />
                    </figure>
                    {/*end icon*/}
                  </div>
                  {/*end ts-item-header*/}
                  <div className="ts-item-body">
                    <h4>Coding</h4>
                    <p className="mb-0">
                      Aenean pretium nulla libero, vitae iaculis libero efficitur a. Fusce ut augue finibus quam
                    </p>
                  </div>
                  {/*end ts-item-body*/}
                  <div className="ts-item-footer">
                    <a href="#" data-toggle="modal" data-target="#modal" className="ts-link-arrow-effect">
                      <span>Read More</span>
                    </a>
                  </div>
                  {/*end ts-item-footer*/}
                </div>
                {/*end ts-item-content*/}
              </div>
              {/*end ts-item*/}
            </div>
            {/*end col-xl-4*/}
            <div className="col-sm-6 col-md-4 col-xl-4">
              <div className="ts-item" data-animate="ts-fadeInUp" data-delay=".5s">
                <div className="ts-item-content">
                  <div className="ts-item-header">
                    <figure className="icon">
                      <img src="assets/img/icon-phone.png" alt />
                    </figure>
                    {/*end icon*/}
                  </div>
                  {/*end ts-item-header*/}
                  <div className="ts-item-body">
                    <h4>App Developing</h4>
                    <p className="mb-0">
                      Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
                    </p>
                  </div>
                  {/*end ts-item-body*/}
                  <div className="ts-item-footer">
                    <a href="#" data-toggle="modal" data-target="#modal" className="ts-link-arrow-effect">
                      <span>Read More</span>
                    </a>
                  </div>
                  {/*end ts-item-footer*/}
                </div>
                {/*end ts-item-content*/}
              </div>
              {/*end ts-item*/}
            </div>
            {/*end col-xl-4*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*END MY SERVICES **************************************************************************************/}
      <section id="about-me" className="ts-block pb-4">
        <div className="container">
          <div className="ts-title text-center">
            <h2>About Me</h2>
          </div>
          {/*end ts-title*/}
          <div className="row ts-align__vertical">
            <div className="col-md-6">
              <img src="assets/img/img-man-looking.jpg" alt className="mw-100 mb-5" />
            </div>
            <div className="col-md-6">
              <h4 className="ts-bubble-border">Hi There</h4>
              <p>
                In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum
                ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta
                sem turpis quis leo. Nulla in feugiat elit.
              </p>
              <dl className="ts-column-count-2">
                <dt>Name:</dt>
                <dd>Jonathan Doe</dd>
                <dt>Phone:</dt>
                <dd>+1 908-736-1801</dd>
                <dt>Email:</dt>
                <dd>hello@example.com</dd>
                <dt>Twitter:</dt>
                <dd>freelancer9</dd>
              </dl>
              <hr className="ts-hr-light mb-5" />
              <a href="#contact" className="ts-btn-effect mr-2">
                <span className="ts-visible btn btn-primary ts-btn-arrow">Contact Me</span>
                <span className="ts-hidden btn btn-primary ts-btn-arrow" data-bg-color="#d44729">Contact Me</span>
              </a>
              {/*<a href="#contact" class="btn btn-primary ts-btn-arrow mr-2">Contact Me</a>*/}
              {/*<a href="#contact" class="btn btn-outline-light ts-btn-border-light">*/}
              {/*<i class="fa fa-download small mr-2"></i>*/}
              {/*Download CV*/}
              {/*</a>*/}
              <a href="#contact" className="ts-btn-effect mr-2">
                <span className="ts-visible btn btn-outline-light">
                  <i className="fa fa-download small mr-2" />
                  Download CV
                </span>
                <span className="ts-hidden btn btn-light bg-white">
                  <i className="fa fa-download small mr-2" />
                  Download CV
                </span>
              </a>
            </div>
          </div>
          {/*end row*/}
        </div>
      </section>
      <section className="ts-block">
        <div className="container">
          <div className="text-center px-5 pt-5 position-relative">
            <h3 className="my-3">
              Let’s Work Together On Your Next Project!
            </h3>
            <a href="#contact" className="btn btn-primary mr-2 ts-push-down__50 ts-has-talk-arrow">Hire Me Now!</a>
            <div className="ts-background ts-opacity__20" data-bg-image="assets/img/bg-keyboard.jpg" />
          </div>
        </div>
      </section>
      <section id="my-skills" className="ts-block pb-5">
        <div className="container">
          <div className="ts-title text-center">
            <h2>My Skills</h2>
          </div>
          {/*end ts-title*/}
          <h4>Every Day is a  New Challenge</h4>
          <div className="row">
            <div className="col-md-6">
              <p>
                In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum
                ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta
                sem turpis quis leo. Nulla in feugiat elit.
              </p>
              <p>
                Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin
                turpis in enim elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia Curae
              </p>
              <a href="#contact" className="btn btn-outline-light mb-5">Contact Me</a>
            </div>
            {/*end col-md-6*/}
            <div className="col-md-6">
              <div className="progress" data-progress-width="100%">
                <h5 className="ts-progress-title">Webdesign</h5>
                <figure className="ts-progress-value" />
                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
              </div>
              {/*end progress*/}
              <div className="progress" data-progress-width="80%">
                <h5 className="ts-progress-title">Photography</h5>
                <figure className="ts-progress-value" />
                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
              </div>
              {/*end progress*/}
              <div className="progress" data-progress-width="90%">
                <h5 className="ts-progress-title">Coding</h5>
                <figure className="ts-progress-value" />
                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
              </div>
              {/*end progress*/}
              <div className="progress" data-progress-width="60%">
                <h5 className="ts-progress-title">Copywriting</h5>
                <figure className="ts-progress-value" />
                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
              </div>
              {/*end progress*/}
            </div>
            {/*end col-md-6*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      <section className="ts-block pb-5" id="portfolio">
        <div className="container">
          <div className="ts-title">
            <h2>Portfolio</h2>
          </div>
          {/*end ts-title*/}
          <div className="card-columns ts-gallery ts-column-count-4">
            <a href="assets/img/img-work-01.png" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
              <div className="ts-gallery__item-description">
                <h6 className="ts-opacity__50">Branding</h6>
                <h4>Pehaz</h4>
              </div>
              <img src="assets/img/img-work-01.png" className="card-img" alt />
              {/*end ts-gallery__image*/}
            </a>
            {/*end card ts-gallery__item*/}
            <a href="assets/img/img-work-02.png" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
              <div className="ts-gallery__image">
                <div className="ts-gallery__item-description">
                  <h6 className="ts-opacity__50">Webdesign</h6>
                  <h4>Carilo</h4>
                </div>
                <img src="assets/img/img-work-02.png" className="card-img" alt />
                {/*end ts-gallery__item-description*/}
              </div>
              {/*end ts-gallery__image*/}
            </a>
            {/*end card ts-gallery__item*/}
            <a href="assets/img/img-work-03.png" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
              <div className="ts-gallery__image">
                <img src="assets/img/img-work-03.png" className="card-img" alt />
                <div className="ts-gallery__item-description">
                  <h6 className="ts-opacity__50">Typography</h6>
                  <h4>Kali</h4>
                </div>
                {/*end ts-gallery__item-description*/}
              </div>
              {/*end ts-gallery__image*/}
            </a>
            {/*end card ts-gallery__item*/}
            <a href="assets/img/img-work-04.png" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
              <div className="ts-gallery__image">
                <img src="assets/img/img-work-04.png" className="card-img" alt />
                <div className="ts-gallery__item-description">
                  <h6 className="ts-opacity__50">Identity</h6>
                  <h4>Purity</h4>
                </div>
                {/*end ts-gallery__item-description*/}
              </div>
              {/*end ts-gallery__image*/}
            </a>
            {/*end card ts-gallery__item*/}
            <a href="assets/img/img-work-05.png" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
              <div className="ts-gallery__image">
                <img src="assets/img/img-work-05.png" className="card-img" alt />
                <div className="ts-gallery__item-description">
                  <h6 className="ts-opacity__50">Coding</h6>
                  <h4>SawMill</h4>
                </div>
                {/*end ts-gallery__item-description*/}
              </div>
              {/*end ts-gallery__image*/}
            </a>
            {/*end card ts-gallery__item*/}
            <a href="assets/img/img-work-06.png" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
              <div className="ts-gallery__image">
                <img src="assets/img/img-work-06.png" className="card-img" alt />
                <div className="ts-gallery__item-description">
                  <h6 className="ts-opacity__50">Webdesign</h6>
                  <h4>Browar</h4>
                </div>
                {/*end ts-gallery__item-description*/}
              </div>
              {/*end ts-gallery__image*/}
            </a>
            {/*end card ts-gallery__item*/}
            <a href="assets/img/img-work-07.png" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
              <div className="ts-gallery__image">
                <img src="assets/img/img-work-07.png" className="card-img" alt />
                <div className="ts-gallery__item-description">
                  <h6 className="ts-opacity__50">Experiment</h6>
                  <h4>Wood Tables</h4>
                </div>
                {/*end ts-gallery__item-description*/}
              </div>
              {/*end ts-gallery__image*/}
            </a>
            {/*end card ts-gallery__item*/}
            <a href="assets/img/img-work-08.png" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
              <div className="ts-gallery__image">
                <img src="assets/img/img-work-08.png" className="card-img" alt />
                <div className="ts-gallery__item-description">
                  <h6 className="ts-opacity__50">Product Design</h6>
                  <h4>Air Purifier</h4>
                </div>
                {/*end ts-gallery__item-description*/}
              </div>
              {/*end ts-gallery__image*/}
            </a>
            {/*end card ts-gallery__item*/}
            <a href="assets/img/img-work-10.png" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
              <div className="ts-gallery__image">
                <img src="assets/img/img-work-10.png" className="card-img" alt />
                <div className="ts-gallery__item-description">
                  <h6 className="ts-opacity__50">App Developing</h6>
                  <h4>Boombox</h4>
                </div>
                {/*end ts-gallery__item-description*/}
              </div>
              {/*end ts-gallery__image*/}
            </a>
            {/*end card ts-gallery__item*/}
            <a href="assets/img/img-work-11.png" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
              <div className="ts-gallery__image">
                <img src="assets/img/img-work-11.png" className="card-img" alt />
                <div className="ts-gallery__item-description">
                  <h6 className="ts-opacity__50">3D Art</h6>
                  <h4>The Deer</h4>
                </div>
                {/*end ts-gallery__item-description*/}
              </div>
              {/*end ts-gallery__image*/}
            </a>
            {/*end card ts-gallery__item*/}
            <a href="assets/img/img-work-09.png" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
              <div className="ts-gallery__image">
                <img src="assets/img/img-work-09.png" className="card-img" alt />
                <div className="ts-gallery__item-description">
                  <h6 className="ts-opacity__50">Rebranding</h6>
                  <h4>Dafont</h4>
                </div>
                {/*end ts-gallery__item-description*/}
              </div>
              {/*end ts-gallery__image*/}
            </a>
            {/*end card ts-gallery__item*/}
          </div>
          {/*end ts-gallery*/}
        </div>
        {/*end container*/}
      </section>
      {/*end portfolio*/}
      <section className="ts-block" data-bg-image="assets/img/bg-man-sitting.jpg">
        <div className="container ts-promo-numbers">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="ts-promo-number text-center">
                <figure className="odometer" data-odometer-final={43}>0</figure>
                <h5>Clients</h5>
              </div>
              {/*end ts-promo-number*/}
            </div>
            {/*end col-md-3*/}
            <div className="col-sm-6 col-md-3">
              <div className="ts-promo-number text-center">
                <figure className="odometer" data-odometer-final={68}>0</figure>
                <h5>Projects</h5>
              </div>
              {/*end ts-promo-number*/}
            </div>
            {/*end col-md-3*/}
            <div className="col-sm-6 col-md-3">
              <div className="ts-promo-number text-center">
                <figure className="odometer" data-odometer-final={17}>0</figure>
                <h5>Awards</h5>
              </div>
              {/*end ts-promo-number*/}
            </div>
            {/*end col-md-3*/}
            <div className="col-sm-6 col-md-3">
              <div className="ts-promo-number text-center">
                <figure className="odometer" data-odometer-final={12}>0</figure>
                <h5>Years Experience</h5>
              </div>
              {/*end ts-promo-number*/}
            </div>
            {/*end col-md-3*/}
          </div>
        </div>
      </section>
      {/*end ts-block*/}
      <section id="testimonials" className="ts-block text-center pb-5">
        <div className="container">
          <div className="ts-title">
            <h2>Testimonials</h2>
          </div>
          {/*end ts-title*/}
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="owl-carousel" data-owl-dots={1} data-owl-loop={1} data-animate="ts-fadeInUp">
                <div className="slide mb-5">
                  <figure className="d-inline-block p-3 ts-bg-primary text-white ts-has-talk-arrow">
                    <i className="fa fa-quote-right" />
                  </figure>
                  <p className="ts-h5">
                    In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus
                    fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis
                  </p>
                  <div className="ts-circle__lg mb-3" data-bg-image="assets/img/person.jpg" />
                  <h5>Jane Doe</h5>
                  <h6 className="ts-opacity__40">Bristol Creative</h6>
                </div>
                {/*end slide*/}
                <div className="slide mb-5">
                  <figure className="d-inline-block p-3 ts-bg-primary text-white ts-has-talk-arrow">
                    <i className="fa fa-quote-right" />
                  </figure>
                  <p className="ts-h5">
                    Nam egestas porta posuere. Nunc velit lorem, vestibulum vitae massa nec, lacinia dictum
                    ligula. Quisque scelerisque nec dolor id convallis. Vestibulum porta ipsum pretium
                    turpis rhoncus, non fringilla ipsum mattis.
                  </p>
                  <div className="ts-circle__lg mb-3" data-bg-image="assets/img/person-02.jpg" />
                  <h5>John Brown</h5>
                  <h6 className="ts-opacity__40">ABC Architects</h6>
                </div>
                {/*end slide*/}
              </div>
              {/*end owl-carousel*/}
            </div>
            {/*end col-md-8*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end #testimonials ts-block*/}
      {/*LOGOS ************************************************************************************************/}
      <section id="partners" className="ts-block py-4">
        {/*container*/}
        <div className="container">
          {/*block of logos*/}
          <div className="d-block d-md-flex justify-content-between align-items-center text-center ts-partners py-3">
            <a href="#">
              <img src="assets/img/logo-01-w.png" alt />
            </a>
            <a href="#">
              <img src="assets/img/logo-02-w.png" alt />
            </a>
            <a href="#">
              <img src="assets/img/logo-03-w.png" alt />
            </a>
            <a href="#">
              <img src="assets/img/logo-04-w.png" alt />
            </a>
            <a href="#">
              <img src="assets/img/logo-05-w.png" alt />
            </a>
          </div>
          {/*end logos*/}
        </div>
        {/*end container*/}
      </section>
      {/*END LOGOS ********************************************************************************************/}
    </main>
    {/*end #content*/}
    {/***********************************************************************************************************/}
    {/************* FOOTER **************************************************************************************/}
    {/***********************************************************************************************************/}
    <footer id="ts-footer" className="mt-5">
      <section id="contact" className="ts-block ts-separate-bg-element" data-bg-image="assets/img/bg-man-wall.jpg" data-bg-image-opacity=".1">
        <div className="container">
          <div className="ts-title text-center">
            <h2 className="ts-bubble-border">Get In Touch</h2>
          </div>
          <div className="row ts-xs-text-center ">
            <div className="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp">
              <img src="assets/img/icon-pin.png" className="mb-4" alt />
              <h5>Address</h5>
              <div className="ts-opacity__50">
                <figure className="mb-0">999 Carter Street</figure>
                <figure>Sailor Springs, IL 62434</figure>
              </div>
              {/*end ts-opacity__50*/}
            </div>
            {/*end col-md-3*/}
            <div className="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".1s">
              <img src="assets/img/icon-phone-02.png" className="mb-4" alt />
              <h5>Phone</h5>
              <div className="ts-opacity__50">
                <figure className="mb-0">+1 618-689-9409</figure>
                <figure>+1 781-254-8437</figure>
              </div>
              {/*end ts-opacity__50*/}
            </div>
            {/*end col-md-3*/}
            <div className="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".2s">
              <img src="assets/img/icon-envelope.png" className="mb-4" alt />
              <h5>Email</h5>
              <div className="ts-opacity__50">
                <figure className="mb-0">hello@example.com</figure>
                <figure>support@example.com</figure>
              </div>
              {/*end ts-opacity__50*/}
            </div>
            {/*end col-md-3*/}
            <div className="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".3s">
              <img src="assets/img/icon-talk-bubble.png" className="mb-4" alt />
              <h5>Facebook Chat</h5>
              <div className="ts-opacity__50">
                <figure>me.freelancer3</figure>
              </div>
              {/*end ts-opacity__50*/}
            </div>
            {/*end col-md-3*/}
          </div>
          {/*end row*/}
          <div className="pt-5">
            <div className="row">
              <div className="col-md-4">
                <h3>Let’s Connect</h3>
                <div className="ts-column-count-sm-2">
                  <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                      <i className="fab fa-facebook-f" />
                    </span>
                    <span>Facebook</span>
                  </a>
                  {/*end link*/}
                  <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                      <i className="fab fa-twitter" />
                    </span>
                    <span>Twitter</span>
                  </a>
                  {/*end link*/}
                  <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                      <i className="fab fa-instagram" />
                    </span>
                    <span>Instagram</span>
                  </a>
                  {/*end link*/}
                  <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                      <i className="fab fa-pinterest-p" />
                    </span>
                    <span>Pinterest</span>
                  </a>
                  {/*end link*/}
                  <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                      <i className="fab fa-skype" />
                    </span>
                    <span>Skype</span>
                  </a>
                  {/*end link*/}
                </div>
              </div>
              {/*end col-md-4*/}
              <div className="col-md-8">
                <h3>Send Me a Message</h3>
                <form id="form-contact" method="post" className="clearfix ts-form ts-form-email" data-php-path="assets/php/email.php">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="form-contact-name">Name *</label>
                        <input type="text" className="form-control" id="form-contact-name" name="name" placeholder="Name" required />
                      </div>
                      {/*end form-group */}
                    </div>
                    {/*end col-md-6 col-sm-6 */}
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="form-contact-email">Email *</label>
                        <input type="email" className="form-control" id="form-contact-email" name="email" placeholder="Email" required />
                      </div>
                      {/*end form-group */}
                    </div>
                    {/*end col-md-6 col-sm-6 */}
                  </div>
                  {/*end row */}
                  <div className="form-group">
                    <label htmlFor="form-contact-subject">Subject *</label>
                    <input type="email" className="form-control" id="form-contact-subject" name="subject" placeholder="Subject" required />
                  </div>
                  {/*end form-group */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="form-contact-message">Message *</label>
                        <textarea className="form-control" id="form-contact-message" rows={5} name="message" placeholder="Message" required defaultValue={""} />
                      </div>
                      {/*end form-group */}
                    </div>
                    {/*end col-md-12 */}
                  </div>
                  {/*end row */}
                  <div className="form-group clearfix">
                    <button type="submit" className="btn btn-primary float-right ts-btn-arrow" id="form-contact-submit">Send a Message</button>
                  </div>
                  {/*end form-group */}
                  <div className="form-contact-status" />
                </form>
                {/*end form-contact */}
              </div>
            </div>
            {/*end row*/}
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end #contact*/}
      <div className="text-dark bg-white">
        <div className="container py-3 position-relative">
          <small>© 2018 ThemeStarz, All Rights Reserved</small>
          <a href="#page-top" className="ts-circle__xs rounded-0 bg-dark position-absolute ts-right__0 ts-top__0 ts-push-up__50 ts-scroll">
            <i className="fa fa-arrow-up text-white" />
          </a>
        </div>
      </div>
    </footer>
    {/*end #footer*/}
  </div>
  {/*end page*/}
  {/* Modal */}
  <div className="modal fade text-dark" id="modal" tabIndex={-1} role="dialog" aria-labelledby="modal" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div className="modal-content border-0 rounded-0">
        <div className="modal-header bg-light px-5 pt-0 pb-5">
          <div className="ts-title mb-0">
            <figure className="ts-circle__md bg-dark rounded-0">
              <img src="assets/img/icon-brushes.png" alt />
            </figure>
            <h4 className="mb-0">Web Design</h4>
          </div>
          <button type="button" className="close position-absolute ts-top__0 ts-right__0 m-2" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" className="text-white">×</span>
          </button>
        </div>
        <div className="modal-body p-5">
          <h5 className="mb-4">Latest Works</h5>
          <div className="owl-carousel" data-owl-dots={1}>
            <div className="slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <img src="assets/img/img-work-detail-01.jpg" alt />
                  </div>
                  <div className="col-md-8">
                    <h4 className="mb-3">Creative Lights</h4>
                    <p>
                      In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus
                      fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est
                      ultricies.
                    </p>
                    <a href="#" className="mb-4 text-dark d-block">
                      <i className="fa fa-globe ts-opacity__50 mr-2" />
                      www.example.com
                    </a>
                    <hr />
                    <h6>Services Included</h6>
                    <ul className="list-unstyled ts-opacity__50">
                      <li>Design</li>
                      <li>Coding</li>
                      <li>SEO Optimization</li>
                      <li>Hosting</li>
                    </ul>
                  </div>
                  {/*end col-md-8*/}
                </div>
                {/*end row*/}
              </div>
              {/*end container-fluid*/}
            </div>
            {/*end slide*/}
            <div className="slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <img src="assets/img/img-work-detail-02.jpg" alt />
                  </div>
                  <div className="col-md-8">
                    <h4 className="mb-3">Wood Ceiling</h4>
                    <p>
                      Phasellus volutpat velit nec purus elementum feugiat. Nunc feugiat fringilla turpis.
                      Nam sed facilisis sem. Vestibulum vitae orci nec purus fringilla condimentum.
                      Pellentesque id augue rhoncus, finibus sapien ut, commodo eros. Maecenas in nibh
                      augue. Nunc rutrum blandit massa eu aliquet. Nulla facilisi. Aenean luctus ipsum
                      in orci sagittis auctor vel sit amet ex
                    </p>
                    <a href="#" className="mb-4 text-dark d-block">
                      <i className="fa fa-globe ts-opacity__50 mr-2" />
                      www.example.com
                    </a>
                    <hr />
                    <h6>Services Included</h6>
                    <ul className="list-unstyled ts-opacity__50">
                      <li>Design</li>
                      <li>Coding</li>
                      <li>SEO Optimization</li>
                      <li>Hosting</li>
                    </ul>
                  </div>
                  {/*end col-md-8*/}
                </div>
                {/*end row*/}
              </div>
              {/*end container-fluid*/}
            </div>
            {/*end slide*/}
          </div>
          {/*end owl-carousel*/}
        </div>
        {/*end modal-body*/}
      </div>
      {/*end modal-content*/}
    </div>
    {/*end modal-dialog*/}
  </div>
</div>






    </div>
  );
}

export default App;
