<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-5">FAQ</h1>
      <ul class="content has-text-left is-size-7">
        <li class="question">お金はかかりますか？</li>
        <li class="answer">無料です</li>
        <li class="question">観戦したいのですがログインは必須ですか？</li>
        <li class="answer">観戦はログインしていなくても可能です</li>
        <li class="question">入村できないのですが</li>
        <li class="answer">
          以下のいずれかに当てはまると入村できません
          <ul>
            <li>ログインしていない</li>
            <li>すでに参加人数が上限に達している</li>
            <li>決着のついていない村に参加中である</li>
            <li>突然死したことがあり、入村制限が解除されていない</li>
            <li>その他入村を制限されている</li>
          </ul>
        </li>
        <li class="question">
          人狼や共有者は昼には会話できないのですか？
        </li>
        <li class="answer">
          夜時間のみ他の人に聞こえない会話が可能です。
        </li>
        <li class="question">
          人狼の夜会話は他の人に遠吠えとして聞こえますか？
        </li>
        <li class="answer">
          聞こえません。
        </li>
        <li class="question">
          死亡したのですが、昼時間に死者同士で会話できません。
        </li>
        <li class="answer">
          夜時間のみ死者同士での会話が可能です。
        </li>
        <li class="question">
          無残な死体が複数いる場合、表示順序に決まりはありますか
        </li>
        <li class="answer">
          ランダムに並び替えて表示するため、順序により死因は特定できません
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// component
// type

@Component({
  components: {}
})
export default class Faq extends Vue {
  /** head */
  private head() {
    return { title: ' | FAQ' }
  }
}
</script>

<style lang="scss" scoped>
ul li.question,
ul li.answer {
  position: relative;
  padding-left: 2em;
  line-height: 20px;
}
ul li.question::before {
  content: 'Q';
  display: block;
  position: absolute;
  left: 0;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  background-color: $info;
  width: 20px;
  height: 20px;
  color: $white;
  font-size: 14px;
  font-weight: bold;
}
ul li.answer {
  margin-bottom: 20px;
}
ul li.answer::before {
  content: 'A';
  display: block;
  position: absolute;
  left: 0;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  background-color: $danger;
  width: 20px;
  height: 20px;
  color: $white;
  font-size: 14px;
  font-weight: bold;
}
</style>
