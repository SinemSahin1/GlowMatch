import { useState } from 'react'
import ProductCard from './ProductCard'

function BeautyQuiz() {
  const [skinType, setSkinType] = useState('')
  const [undertone, setUndertone] = useState('')
  const [budget, setBudget] = useState('')
  const [gender, setGender] = useState('')
  const [categories, setCategories] = useState([])
  const [mascaraPreferences, setMascaraPreferences] = useState([])
  const [lipstickFinish, setLipstickFinish] = useState('')
  const [lipstickColors, setLipstickColors] = useState([])
  const [foundationCoverage, setFoundationCoverage] = useState('')
  const [skincarePreferences, setSkincarePreferences] = useState([])
  const [fragranceType, setFragranceType] = useState('')
  const [recommendations, setRecommendations] = useState([])
  const [currentStep, setCurrentStep] = useState(1)

  function nextStep() {
    if (currentStep === 5 && !categories.includes('Makeup')) {
      setCurrentStep(7)
    } 
    else if (currentStep === 6 && !categories.includes('Skincare')) {
      setCurrentStep(8)
    } 
    else if (currentStep === 7 && !categories.includes('Fragrance')) {
      setCurrentStep(9)
    } 
    else {
      setCurrentStep(currentStep + 1)
    }
  }

  function previousStep() {
    if (currentStep === 9 && !categories.includes('Fragrance')) {
      setCurrentStep(7)
    }
    else if (currentStep === 8 && !categories.includes('Skincare')) {
      setCurrentStep(6)
    }
    else if (currentStep === 7 && !categories.includes('Makeup')) {
      setCurrentStep(5)
    }
    else {
      setCurrentStep(currentStep - 1)
    }
  }

  function toggleCategory(category) {
    if (categories.includes(category)) {
      setCategories(categories.filter((item) => item !== category))
    } else {
      setCategories([...categories, category])
    }
  }

  function toggleMascaraPreference(preference) {
    if (mascaraPreferences.includes(preference)) {
      setMascaraPreferences(
        mascaraPreferences.filter((item) => item !== preference)
      )
    } else {
      setMascaraPreferences([...mascaraPreferences, preference])
    }
  }

  function toggleLipstickColor(color) {
    if (lipstickColors.includes(color)) {
      setLipstickColors(
        lipstickColors.filter((item) => item !== color)
      )
    } else {
      setLipstickColors([...lipstickColors, color])
    }
  }

  function toggleSkincarePreference(preference) {
    if (skincarePreferences.includes(preference)) {
      setSkincarePreferences(
        skincarePreferences.filter((item) => item !== preference)
      )
    } else {
      setSkincarePreferences([...skincarePreferences, preference])
    }
  }

  function handleRecommendations() {
    if (skinType === 'Oily') {
      setRecommendations([
        'CeraVe Foaming Cleanser',
        'La Roche-Posay Effaclar Mat',
        'The Ordinary Niacinamide 10% + Zinc 1%'
      ])
    } else if (skinType === 'Dry') {
      setRecommendations([
        'CeraVe Moisturising Cream',
        'La Roche-Posay Toleriane Sensitive',
        'The Ordinary Hyaluronic Acid 2% + B5'
      ])
    } else if (skinType === 'Sensitive') {
      setRecommendations([
        'CeraVe Hydrating Cleanser',
        'La Roche-Posay Toleriane Dermallergo',
        'Avène Tolerance Control'
      ])
    } else {
      setRecommendations([
        'We will prepare products based on your preferences.'
      ])
    }
  }

  return (
    <section id="quiz" className="beauty-quiz">
      <h2>Find Your Beauty Match</h2>

      {/* STEP 1 - GENDER */}
      {currentStep === 1 && (
        <div>
          <p>Who are you shopping for?</p>

          <button
            className={gender === 'Women' ? 'selected' : ''}
            onClick={() => setGender('Women')}
          >
            Women
          </button>

          <button
            className={gender === 'Men' ? 'selected' : ''}
            onClick={() => setGender('Men')}
          >
            Men
          </button>

          <button
            className={gender === 'No Preference' ? 'selected' : ''}
            onClick={() => setGender('No Preference')}
          >
            No Preference
          </button>

          <p>Your selection: {gender}</p>

          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 2 - SKIN TYPE */}
      {currentStep === 2 && (
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

          <p>Your skin type: {skinType}</p>

          <button onClick={previousStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 3 - UNDERTONE */}
      {currentStep === 3 && (
        <div>
          <p>What is your undertone?</p>

          <button
            className={undertone === 'Warm' ? 'selected' : ''}
            onClick={() => setUndertone('Warm')}
          >
            Warm
          </button>

          <button
            className={undertone === 'Cool' ? 'selected' : ''}
            onClick={() => setUndertone('Cool')}
          >
            Cool
          </button>

          <button
            className={undertone === 'Neutral' ? 'selected' : ''}
            onClick={() => setUndertone('Neutral')}
          >
            Neutral
          </button>

          <p>Your undertone: {undertone}</p>

          <button onClick={previousStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 4 - BUDGET */}
      {currentStep === 4 && (
        <div>
          <p>What is your maximum budget?</p>

          <input
            type="number"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
          />

          <p>Your budget: {budget} TL</p>

          <button onClick={previousStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 5 - CATEGORIES */}
      {currentStep === 5 && (
        <div>
          <p>What are you interested in?</p>

          <button
            className={categories.includes('Skincare') ? 'selected' : ''}
            onClick={() => toggleCategory('Skincare')}
          >
            Skincare
          </button>

          <button
            className={categories.includes('Makeup') ? 'selected' : ''}
            onClick={() => toggleCategory('Makeup')}
          >
            Makeup
          </button>

          <button
            className={categories.includes('Fragrance') ? 'selected' : ''}
            onClick={() => toggleCategory('Fragrance')}
          >
            Fragrance
          </button>

          <p>Your categories: {categories.join(', ')}</p>

          <button onClick={previousStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 6 - MAKEUP */}
      {currentStep === 6 && (
        <div>
          {categories.includes('Makeup') ? (
            <>
              <p>What do you want from your mascara?</p>

              <button
                onClick={() => toggleMascaraPreference('Length')}
              >
                Length
              </button>

              <button
                onClick={() => toggleMascaraPreference('Volume')}
              >
                Volume
              </button>

              <button
                onClick={() => toggleMascaraPreference('Curl')}
              >
                Curl
              </button>

              <button
                onClick={() => toggleMascaraPreference('Waterproof')}
              >
                Waterproof
              </button>

              <p>
                Mascara preferences: {mascaraPreferences.join(', ')}
              </p>

              <p>What lipstick finish do you prefer?</p>

              <button onClick={() => setLipstickFinish('Matte')}>
                Matte
              </button>

              <button onClick={() => setLipstickFinish('Satin')}>
                Satin
              </button>

              <button onClick={() => setLipstickFinish('Glossy')}>
                Glossy
              </button>

              <button onClick={() => setLipstickFinish('Cream')}>
                Cream
              </button>

              <p>Your lipstick finish: {lipstickFinish}</p>

              <p>Which lipstick colors do you like?</p>

              <button onClick={() => toggleLipstickColor('Nude')}>
                Nude
              </button>

              <button onClick={() => toggleLipstickColor('Pink')}>
                Pink
              </button>

              <button onClick={() => toggleLipstickColor('Red')}>
                Red
              </button>

              <button onClick={() => toggleLipstickColor('Berry')}>
                Berry
              </button>

              <button onClick={() => toggleLipstickColor('Brown')}>
                Brown
              </button>

              <button onClick={() => toggleLipstickColor('Peach')}>
                Peach
              </button>

              <p>Lipstick colors: {lipstickColors.join(', ')}</p>

              <p>What foundation coverage do you prefer?</p>

              <button onClick={() => setFoundationCoverage('Light')}>
                Light
              </button>

              <button onClick={() => setFoundationCoverage('Medium')}>
                Medium
              </button>

              <button onClick={() => setFoundationCoverage('Full')}>
                Full
              </button>

              <p>Your coverage: {foundationCoverage}</p>
            </>
          ) : (
            <p>You did not select Makeup.</p>
          )}

          <button onClick={previousStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 7 - SKINCARE */}
      {currentStep === 7 && (
        <div>
          {categories.includes('Skincare') ? (
            <>
              <p>What are your skincare goals?</p>

              <button
                onClick={() => toggleSkincarePreference('Hydration')}
              >
                Hydration
              </button>

              <button
                onClick={() => toggleSkincarePreference('Oil Control')}
              >
                Oil Control
              </button>

              <button
                onClick={() => toggleSkincarePreference('Brightening')}
              >
                Brightening
              </button>

              <button
                onClick={() => toggleSkincarePreference('Dark Spots')}
              >
                Dark Spots
              </button>

              <button
                onClick={() => toggleSkincarePreference('Sensitive Skin')}
              >
                Sensitive Skin
              </button>

              <p>
                Skincare goals: {skincarePreferences.join(', ')}
              </p>
            </>
          ) : (
            <p>You did not select Skincare.</p>
          )}

          <button onClick={previousStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 8 - FRAGRANCE */}
      {currentStep === 8 && (
        <div>
          {categories.includes('Fragrance') ? (
            <>
              <p>What fragrance type do you prefer?</p>

              <button onClick={() => setFragranceType('Fresh')}>
                Fresh
              </button>

              <button onClick={() => setFragranceType('Floral')}>
                Floral
              </button>

              <button onClick={() => setFragranceType('Woody')}>
                Woody
              </button>

              <button onClick={() => setFragranceType('Sweet')}>
                Sweet
              </button>

              <button onClick={() => setFragranceType('Citrus')}>
                Citrus
              </button>

              <p>Your fragrance preference: {fragranceType}</p>
            </>
          ) : (
            <p>You did not select Fragrance.</p>
          )}

          <button onClick={previousStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 9 - RECOMMENDATIONS */}
      {currentStep === 9 && (
        <div>
          <h3>Your Recommendations</h3>

          <button onClick={previousStep}>Back</button>

          <button onClick={handleRecommendations}>
            See My Recommendations
          </button>

          <div className="product-list">
            {recommendations.map((product) => (
              <ProductCard
                key={product}
                name={product}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default BeautyQuiz