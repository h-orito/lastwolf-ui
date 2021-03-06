import Skill from '~/@types/skill'

interface SkillRecord {
  skill: Skill
  participate_count: number
  win_count: number
  win_rate: number
  lose_count: number
  lose_rate: number
  draw_count: number
  draw_rate: number
}

export default SkillRecord
