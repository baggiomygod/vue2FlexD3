import tpl from './vue2.html';
import vSlot from '../components/slot/slot';
import vTransitionFade from '../components/transitions/fade';
import vSlideFade from '../components/transitions/slideFade';
import vBounce from '../components/transitions/bounce';
import vMove from '../components/transitions/move';
import vFor from '../components/v-for/v-for';
import vSet from '../components/vue-set/vue-set';
import './vue2.scss';
export default {
  template: tpl,
  name: 'vue2',
  components: {
    vSlot,
    vTransitionFade,
    vSlideFade,
    vBounce,
    vMove,
    vFor,
    vSet
  }
};
