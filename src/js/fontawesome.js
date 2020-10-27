import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {
  faCalendarAlt, faChevronCircleUp, faEnvelope, faFolder, faLanguage, faMoon, faSearch, faSun, faTag,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook, faGithub, faGitlab, faLinkedin, faStackOverflow, faTwitter, faWeibo, faZhihu
} from '@fortawesome/free-brands-svg-icons'

library.add(faCalendarAlt, faChevronCircleUp, faEnvelope, faFolder, faLanguage, faMoon, faSearch, faSun, faTag)
library.add(faFacebook, faGithub, faGitlab, faLinkedin, faStackOverflow, faTwitter, faWeibo, faZhihu)

document.addEventListener('DOMContentLoaded', function() {
  dom.watch()
})
