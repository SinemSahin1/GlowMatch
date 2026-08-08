function Hero() {
    return (
      <section className="hero">
        <p>PERSONALIZED BEAUTY</p>
  
        <h2>
          Beauty, matched to you.
        </h2>
  
        <p>
          Discover skincare and makeup products selected
          according to your skin type and preferences.
        </p>
  
        <button

  onClick={() => {
    document
      .getElementById('quiz')
      .scrollIntoView({ behavior: 'smooth' })
  }}
>
  Take the Beauty Quiz
</button>
      </section>
    )
  }
  <section id="home" className="hero"></section>
  
  export default Hero