<template>
  <div class="container is-size-7">
    <div class="w4b-main">
      <div class="w4b-chat-area">
        <p class="w4b-chat-message">
          00:01 [楽]: 人狼なんているわけないじゃん。みんな大げさだなあ
        </p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [長]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
        <p class="w4b-chat-message">00:01 [宿]: おはようございます</p>
      </div>
    </div>
    <div class="w4b-lefttime">
      <p class="is-size-7">
        残り
        <span class="has-text-weight-bold">{{ leftTime }}</span> 秒
      </p>
      <progress
        :class="
          leftTime < 30
            ? 'is-danger'
            : leftTime < 60
            ? 'is-warning'
            : 'is-success'
        "
        :value="leftTime"
        :max="120"
        class="progress is-small"
      ></progress>
    </div>
    {{ villageId }}
    <div class="w4b-footer-info-area buttons are-small">
      <div>生存 7/13</div>
      <button class="button w4b-footer-button">CO</button>
      <button class="button w4b-footer-button">定型文</button>
      <button class="button w4b-footer-button">発言する</button>
    </div>
    <div class="w4b-footer-member-skill-area">
      <div class="w4b-footer-skill-area">
        <p class="is-size-2">占</p>
      </div>
      <div class="w4b-footer-member-area">
        <div class="w4b-icon-area">
          <div class="w4b-icon">楽</div>
          <p class="w4b-icon-status has-text-danger">2d▲</p>
        </div>
        <div class="w4b-icon-area">
          <div class="w4b-icon">長</div>
        </div>
        <div class="w4b-icon-area">
          <div class="w4b-icon">羊</div>
        </div>
        <div class="w4b-icon-area">
          <div class="w4b-icon">修</div>
        </div>
        <div class="w4b-icon-area">
          <div class="w4b-icon">書</div>
        </div>
        <div class="w4b-icon-area">
          <div class="w4b-icon">樵</div>
        </div>
        <div class="w4b-icon-area">
          <div class="w4b-icon">青</div>
        </div>
        <div class="w4b-icon-area">
          <div class="w4b-icon">旅</div>
        </div>
        <div class="w4b-icon-area">
          <div class="w4b-icon">商</div>
        </div>
        <div class="w4b-icon-area">
          <div class="w4b-icon">農</div>
        </div>
      </div>
    </div>
    <div class="w4b-footer-menu buttons are-small">
      <button class="button w4b-footer-button">メニュー</button>
      <button class="button w4b-footer-button">ルール</button>
      <button class="button w4b-footer-button">フィルタ</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from '@nuxtjs/axios'

@Component({
  // @ts-ignore
  components: {},
  async asyncData({ query }) {
    return { villageId: query.id }
  }
})
export default class extends Vue {
  /** head */
  private head() {
    return { title: '| 村' }
  }

  /** data */
  private villageId: number = 0
  private villageName: string = ''
  private leftTime: number = 60

  private loadingVillage: boolean = true
  private village: any = null

  /** computed */
  // private get hasVillageNameError(): boolean {
  //   return this.villageNameError != null && this.villageNameError !== ''
  // }

  /** created */
  private async created(): Promise<any> {
    // 村情報読み込み
    this.$axios
      .$get(`/village/${this.villageId}`)
      .then(res => {})
      .catch(err => {
        console.log('村読み込み失敗')
        // location.href = '/'
      })
  }

  /** methods */
}
</script>
<style lang="scss" scoped>
.w4b-main {
  padding-bottom: 124px;
  overflow-y: scroll;

  .w4b-chat-area {
    background-color: $twitter-invert;
    padding: 5px;
    .w4b-chat-message {
      line-height: 1.5;
      text-align: left;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-all;
    }
  }
}

.w4b-lefttime {
  position: fixed;
  top: 5px;
  width: 90%;
  left: 5%;
  padding: 5px;
  margin-bottom: 0px;
  z-index: 100;
  border-radius: 25px;
}

.w4b-footer-menu {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 37px;
  z-index: 100;
  background-color: $primary;
  display: flex;
  padding: 5px;
  margin-bottom: 0px !important;

  .w4b-footer-button {
    flex: 1;
  }
}

.w4b-footer-member-skill-area {
  position: fixed;
  bottom: 37px;
  left: 0px;
  width: 100%;
  height: 55px;
  z-index: 100;
  background-color: $twitter;
  display: flex;
  padding: 5px;

  .w4b-footer-member-area {
    flex: 1;
    display: flex;

    .w4b-icon-area {
      height: 50px;
      width: 40px;
      text-align: center;

      .w4b-icon {
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background-color: $primary;
        color: $white;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .w4b-footer-skill-area {
    width: 50px;
    border: 1px solid $primary;
    color: $primary;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
}

.w4b-footer-info-area {
  position: fixed;
  bottom: 87px;
  left: 0px;
  width: 100%;
  height: 37px;
  z-index: 100;
  background-color: $primary;
  display: flex;
  padding: 5px;
  margin-bottom: 0px !important;
}
</style>