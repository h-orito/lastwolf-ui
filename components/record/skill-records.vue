<template>
  <b-table :data="skillRecords" :mobile-cards="false" class="is-size-7">
    <template slot-scope="props">
      <b-table-column field="camp_name" label="役職">
        {{ props.row.skill.name }}
      </b-table-column>
      <b-table-column field="participate_count" label="参加">
        {{ `${props.row.participate_count}回` }}
      </b-table-column>
      <b-table-column field="win_count" label="勝利">
        {{ `${props.row.win_count}回(${percent(props.row.win_rate)}%)` }}
      </b-table-column>
      <b-table-column field="lose_count" label="敗北">
        {{ `${props.row.lose_count}回(${percent(props.row.lose_rate)}%)` }}
      </b-table-column>
      <b-table-column field="draw_count" label="引分">
        {{ `${props.row.draw_count}回(${percent(props.row.draw_rate)}%)` }}
      </b-table-column>
    </template>

    <template slot="empty">
      <section class="section">
        <div class="content has-text-grey has-text-centered">
          <p>参加した村がありません</p>
        </div>
      </section>
    </template>
  </b-table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import SkillRecord from '~/@types/skill-record'

@Component({
  components: {}
})
export default class SkillRecords extends Vue {
  @Prop({ type: Array })
  private skillRecords!: SkillRecord[]

  private percent(rate: number): number {
    return percent(rate)
  }
}

const percent = (rate: number): number => {
  return Math.round(rate * 1000) / 10
}
</script>
