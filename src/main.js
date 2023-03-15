import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faDollarSign, faDroplet, faGlobe, faGraduationCap, faStethoscope, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faPagelines, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faHeart, faGlobe, faDollarSign, faDroplet, faStethoscope, faPagelines, faGraduationCap, faFacebook, faInstagram, faTwitter, faYoutube)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
