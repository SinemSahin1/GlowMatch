import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

function BeautyQuiz() {
  const { category } = useParams()

  // SKINCARE
  const [skinType, setSkinType] = useState('')
  const [ageRange, setAgeRange] = useState('')
  const [skincareGoal, setSkincareGoal] = useState('')
  const [currentStep, setCurrentStep] = useState(1)

  const [recommendations, setRecommendations] = useState([])
  const [message, setMessage] = useState('')

  const [makeupProduct, setMakeupProduct] = useState('')
  const [makeupUndertone, setMakeupUndertone] = useState('')
  const [makeupFinish, setMakeupFinish] = useState('')
  const [makeupBudget, setMakeupBudget] = useState('')

const [fragranceGender, setFragranceGender] = useState('')
const [fragranceFamily, setFragranceFamily] = useState('')
const [fragranceOccasion, setFragranceOccasion] = useState('')
const [fragranceIntensity, setFragranceIntensity] = useState('')
const [fragranceBudget, setFragranceBudget] = useState('')

 
const [hairConcern, setHairConcern] = useState('')
const [hairBudget, setHairBudget] = useState('')


  function nextStep() {
    setCurrentStep(currentStep + 1)
  }

  function previousStep() {
    setCurrentStep(currentStep - 1)
  }

  async function handleSkincareRecommendations() {
    try {
      const response = await fetch(
        `http://localhost:8080/api/products/skin-type/${skinType}`
      )

      const data = await response.json()

      setRecommendations(data)

      if (data.length === 0) {
        setMessage('No matching products were found.')
      } else {
        setMessage('')
      }
    } catch (error) {
      console.error(error)
      setMessage('Could not connect to the backend.')
    }
  }

  // -----------------------------
  // SKINCARE QUIZ
  // -----------------------------

  if (category === 'skincare') {
    return (
      <section className="beauty-quiz">

        <h2>Skincare Quiz</h2>

        {/* STEP 1 - SKIN TYPE */}
        {currentStep === 1 && (
          <div>

            <p>What is your skin type?</p>

            <button
              className={skinType === 'Oily' ? 'selected' : ''}
              onClick={() => setSkinType('Oily')}
            >
              Oily
            </button>

            <button
              className={skinType === 'Dry' ? 'selected' : ''}
              onClick={() => setSkinType('Dry')}
            >
              Dry
            </button>

            <button
              className={skinType === 'Combination' ? 'selected' : ''}
              onClick={() => setSkinType('Combination')}
            >
              Combination
            </button>

            <button
              className={skinType === 'Normal' ? 'selected' : ''}
              onClick={() => setSkinType('Normal')}
            >
              Normal
            </button>

            <button
              className={skinType === 'Sensitive' ? 'selected' : ''}
              onClick={() => setSkinType('Sensitive')}
            >
              Sensitive
            </button>

            <p>Your selection: {skinType}</p>

            <button
              onClick={nextStep}
              disabled={!skinType}
            >
              Next
            </button>

          </div>
        )}

        {/* STEP 2 - AGE */}
        {currentStep === 2 && (
          <div>

            <p>What is your age range?</p>

            <button
              className={ageRange === 'Under 18' ? 'selected' : ''}
              onClick={() => setAgeRange('Under 18')}
            >
              Under 18
            </button>

            <button
              className={ageRange === '18-24' ? 'selected' : ''}
              onClick={() => setAgeRange('18-24')}
            >
              18–24
            </button>

            <button
              className={ageRange === '25-34' ? 'selected' : ''}
              onClick={() => setAgeRange('25-34')}
            >
              25–34
            </button>

            <button
              className={ageRange === '35-44' ? 'selected' : ''}
              onClick={() => setAgeRange('35-44')}
            >
              35–44
            </button>

            <button
              className={ageRange === '45+' ? 'selected' : ''}
              onClick={() => setAgeRange('45+')}
            >
              45+
            </button>

            <p>Your selection: {ageRange}</p>

            <button onClick={previousStep}>
              Back
            </button>

            <button
              onClick={nextStep}
              disabled={!ageRange}
            >
              Next
            </button>

          </div>
        )}

        {/* STEP 3 - SKINCARE GOAL */}
        {currentStep === 3 && (
          <div>

            <p>What is your main skincare goal?</p>

            <button
              className={skincareGoal === 'Hydration' ? 'selected' : ''}
              onClick={() => setSkincareGoal('Hydration')}
            >
              Hydration
            </button>

            <button
              className={skincareGoal === 'Acne Control' ? 'selected' : ''}
              onClick={() => setSkincareGoal('Acne Control')}
            >
              Acne Control
            </button>

            <button
              className={skincareGoal === 'Anti-Aging' ? 'selected' : ''}
              onClick={() => setSkincareGoal('Anti-Aging')}
            >
              Anti-Aging
            </button>

            <button
              className={skincareGoal === 'Brightening' ? 'selected' : ''}
              onClick={() => setSkincareGoal('Brightening')}
            >
              Brightening
            </button>

            <button
              className={skincareGoal === 'Sensitivity' ? 'selected' : ''}
              onClick={() => setSkincareGoal('Sensitivity')}
            >
              Sensitivity
            </button>

            <p>Your selection: {skincareGoal}</p>

            <button onClick={previousStep}>
              Back
            </button>

            <button
              onClick={nextStep}
              disabled={!skincareGoal}
            >
              Next
            </button>

          </div>
        )}

        {/* STEP 4 - RESULTS */}
        {currentStep === 4 && (
          <div>

            <h3>Your Skincare Profile</h3>

            <p>Skin type: {skinType}</p>
            <p>Age: {ageRange}</p>
            <p>Goal: {skincareGoal}</p>

            <button onClick={previousStep}>
              Back
            </button>

            <button onClick={handleSkincareRecommendations}>
              See My Recommendations
            </button>

            {message && <p>{message}</p>}

            <div className="product-list">

              {recommendations.map((product) => (
                <ProductCard
                  key={product.id}
                  brand={product.brand}
                  name={product.name}
                  category={product.category}
                  price={`${product.price} TL`}
                  image={product.image}
                />
              ))}

            </div>

          </div>
        )}

      </section>
    )
  }

  // -----------------------------
  // MAKEUP
  // -----------------------------

  if (category === 'makeup') {
    return (
      <section className="beauty-quiz">
        <h2>Makeup Quiz</h2>
  
        <p>What product are you looking for?</p>
  
        <button
          className={makeupProduct === 'Mascara' ? 'selected' : ''}
          onClick={() => setMakeupProduct('Mascara')}
        >
          Mascara
        </button>
  
        <button
          className={makeupProduct === 'Lipstick' ? 'selected' : ''}
          onClick={() => setMakeupProduct('Lipstick')}
        >
          Lipstick
        </button>
  
        <button
          className={makeupProduct === 'Foundation' ? 'selected' : ''}
          onClick={() => setMakeupProduct('Foundation')}
        >
          Foundation
        </button>
  
        <button
          className={makeupProduct === 'Blush' ? 'selected' : ''}
          onClick={() => setMakeupProduct('Blush')}
        >
          Blush
        </button>
  
        <p>Your selection: {makeupProduct}</p>
  
        <p>What is your undertone?</p>
  
        <button
          className={makeupUndertone === 'Warm' ? 'selected' : ''}
          onClick={() => setMakeupUndertone('Warm')}
        >
          Warm
        </button>
  
        <button
          className={makeupUndertone === 'Cool' ? 'selected' : ''}
          onClick={() => setMakeupUndertone('Cool')}
        >
          Cool
        </button>
  
        <button
          className={makeupUndertone === 'Neutral' ? 'selected' : ''}
          onClick={() => setMakeupUndertone('Neutral')}
        >
          Neutral
        </button>
  
        <p>Your undertone: {makeupUndertone}</p>
  
        <p>What finish do you prefer?</p>
  
        <button
          className={makeupFinish === 'Matte' ? 'selected' : ''}
          onClick={() => setMakeupFinish('Matte')}
        >
          Matte
        </button>
  
        <button
          className={makeupFinish === 'Satin' ? 'selected' : ''}
          onClick={() => setMakeupFinish('Satin')}
        >
          Satin
        </button>
  
        <button
          className={makeupFinish === 'Glossy' ? 'selected' : ''}
          onClick={() => setMakeupFinish('Glossy')}
        >
          Glossy
        </button>
  
        <button
          className={makeupFinish === 'Natural' ? 'selected' : ''}
          onClick={() => setMakeupFinish('Natural')}
        >
          Natural
        </button>
  
        <p>Your finish: {makeupFinish}</p>
  
        <p>What is your maximum budget?</p>
  
        <input
          type="number"
          placeholder="Budget in TL"
          value={makeupBudget}
          onChange={(e) => setMakeupBudget(e.target.value)}
        />
  
        <p>Your budget: {makeupBudget} TL</p>
  
         <button onClick={handleMakeupRecommendations}>
         See My Recommendations
        </button>
        <div className="product-list">
  {recommendations.map((product) => (
    <ProductCard
      key={product.id}
      brand={product.brand}
      name={product.name}
      category={product.category}
      price={`${product.price} TL`}
      image={product.image}
    />
  ))}
</div>

      </section>
    )
    async function handleMakeupRecommendations() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/products/makeup?product=${makeupProduct}&undertone=${makeupUndertone}&finish=${makeupFinish}&budget=${makeupBudget}`
        )
    
        const data = await response.json()
    
        setRecommendations(data)
    
      } catch (error) {
        console.error(error)
      }
    }
  }
  // -----------------------------
  // FRAGRANCE
  // -----------------------------
  async function handleFragranceRecommendations() {
    try {
      const response = await fetch(
        `http://localhost:8080/api/products/fragrance?gender=${fragranceGender}&fragranceFamily=${fragranceFamily}&occasion=${fragranceOccasion}&intensity=${fragranceIntensity}&budget=${fragranceBudget}`
      )
  
      const data = await response.json()
      setRecommendations(data)
  
    } catch (error) {
      console.error(error)
    }
  }
  if (category === 'fragrance') {
    return (
      <section className="beauty-quiz">
  
        <h2>Fragrance Quiz</h2>
  
        <p>Who are you shopping for?</p>
  
        <button
          className={fragranceGender === 'Women' ? 'selected' : ''}
          onClick={() => setFragranceGender('Women')}
        >
          Women
        </button>
  
        <button
          className={fragranceGender === 'Men' ? 'selected' : ''}
          onClick={() => setFragranceGender('Men')}
        >
          Men
        </button>
  
        <button
          className={fragranceGender === 'No Preference' ? 'selected' : ''}
          onClick={() => setFragranceGender('No Preference')}
        >
          No Preference
        </button>
  
        <p>Your selection: {fragranceGender}</p>
  
  
  
        <p>What fragrance family do you prefer?</p>

<button
  className={fragranceFamily === 'Fresh' ? 'selected' : ''}
  onClick={() => setFragranceFamily('Fresh')}
>
  Fresh
</button>

<button
  className={fragranceFamily === 'Floral' ? 'selected' : ''}
  onClick={() => setFragranceFamily('Floral')}
>
  Floral
</button>

<button
  className={fragranceFamily === 'Woody' ? 'selected' : ''}
  onClick={() => setFragranceFamily('Woody')}
>
  Woody
</button>

<button
  className={fragranceFamily === 'Sweet' ? 'selected' : ''}
  onClick={() => setFragranceFamily('Sweet')}
>
  Sweet
</button>
  
        <p>Your fragrance family: {fragranceFamily}</p>
  
  
        <p>When will you mostly wear it?</p>
  
        <button
          className={fragranceOccasion === 'Daily' ? 'selected' : ''}
          onClick={() => setFragranceOccasion('Daily')}
        >
          Daily
        </button>
  
        <button
          className={fragranceOccasion === 'Evening' ? 'selected' : ''}
          onClick={() => setFragranceOccasion('Evening')}
        >
          Evening
        </button>
  
  
        <button
          className={fragranceOccasion === 'Office' ? 'selected' : ''}
          onClick={() => setFragranceOccasion('Office')}
        >
          Office
        </button>
  
        <p>Your occasion: {fragranceOccasion}</p>
  
  
        <p>What intensity do you prefer?</p>
  
        <button
          className={fragranceIntensity === 'Light' ? 'selected' : ''}
          onClick={() => setFragranceIntensity('Light')}
        >
          Light
        </button>
  
        <button
          className={fragranceIntensity === 'Moderate' ? 'selected' : ''}
          onClick={() => setFragranceIntensity('Moderate')}
        >
          Moderate
        </button>
  
        <button
          className={fragranceIntensity === 'Strong' ? 'selected' : ''}
          onClick={() => setFragranceIntensity('Strong')}
        >
          Strong
        </button>
  
        <p>Your intensity: {fragranceIntensity}</p>
  
  
        <p>What is your maximum budget?</p>
  
        <input
          type="number"
          placeholder="Budget in TL"
          value={fragranceBudget}
          onChange={(e) => setFragranceBudget(e.target.value)}
        />
  
        <p>Your budget: {fragranceBudget} TL</p>
      

<button onClick={handleFragranceRecommendations}>
  See My Recommendations
</button>

<div className="product-list">
  {recommendations.map((product) => (
    <ProductCard
      key={product.id}
      brand={product.brand}
      name={product.name}
      category={product.category}
      price={`${product.price} TL`}
      image={product.image}
    />
  ))}
</div>
  
      </section>

    )
    
  }
  // -----------------------------
  // HAIRCARE
  // -----------------------------

  if (category === 'haircare') {
    return (
      <section className="beauty-quiz">
        <h2>Haircare Quiz</h2>
  
        <p>What is your main hair concern?</p>
  
        <button
          className={hairConcern === 'Dryness' ? 'selected' : ''}
          onClick={() => setHairConcern('Dryness')}
        >
          Dryness
        </button>
  
        <button
          className={hairConcern === 'Damage' ? 'selected' : ''}
          onClick={() => setHairConcern('Damage')}
        >
          Damage
        </button>
  
        <button
          className={hairConcern === 'Hair Loss' ? 'selected' : ''}
          onClick={() => setHairConcern('Hair Loss')}
        >
          Hair Loss
        </button>
  
        <p>Your concern: {hairConcern}</p>
  
        <p>What is your maximum budget?</p>
  
        <input
          type="number"
          placeholder="Budget in TL"
          value={hairBudget}
          onChange={(e) => setHairBudget(e.target.value)}
        />
  
        <p>Your budget: {hairBudget} TL</p>
  
        <button
          onClick={handleHairRecommendations}
          disabled={!hairConcern || !hairBudget}
        >
          See My Recommendations
        </button>
  
        <div className="product-list">
          {recommendations.map((product) => (
            <ProductCard
              key={product.id}
              brand={product.brand}
              name={product.name}
              category={product.category}
              price={`${product.price} TL`}
              image={product.image}
            />
          ))}
        </div>
      </section>
    )
  }
    async function handleHairRecommendations() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/products/haircare?hairConcern=${hairConcern}&budget=${hairBudget}`
        )
    
        const data = await response.json()
    
        setRecommendations(data)
    
      } catch (error) {
        console.error(error)
      }
    }
  }


export default BeautyQuiz