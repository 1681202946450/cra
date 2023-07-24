import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Step } from './step'
import { Steps } from './steps'
import './steps.less'
export type { StepsProps } from './steps'
export type { StepProps } from './step'

export default attachPropertiesToComponent(Steps, {
  Step,
})
