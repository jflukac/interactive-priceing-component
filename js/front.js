window.addEventListener('load', () => {
    let qs = function(element) {
        return document.querySelector(element)
    }
    let qsa = function(element) {
        return document.querySelectorAll(element)
    }
    let geId = function(element) {
        return document.getElementById(element)
    }
    let pageViews = qs('.pageViews')
    let monthlyPrice = qs('.monthlyPrice')
    let priceRange = geId('priceRange')


    priceRange.addEventListener('change', () => {
        console.log(priceRange.value);
        pageViews.innerHTML = `${priceRange.value}K PAGEVIEWS`
        monthlyPrice.innerHTML = `<span class="bold"> $${priceRange.value}</span>/month`
    })
    
    
})