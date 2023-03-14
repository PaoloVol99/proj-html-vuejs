import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faHeart } from '@fortawesome/free-regular-svg-icons'

/* import specific icons */
import { faDollarSign, faGlobe, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faHeart, faGlobe, faDollarSign)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
