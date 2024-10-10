export function initStarSelection() {
  const stars = document.querySelectorAll('.form__stars-one-star')

  stars.forEach(item => {
    item.addEventListener('click', () => {
      const attribute = Number(item.getAttribute('data-num'))
		addActive(stars, attribute)
		
      const customEvent = new CustomEvent('selectStars', {
        detail: {
          stars: item.getAttribute('data-num'),
        },
	  })
		
      document.dispatchEvent(customEvent)
    })
  })
}

function addActive(stars, attribute) {
    stars.forEach((item, index) => {
        item.classList.toggle('form__stars-one-star_active', index < attribute);
    });
}

