<template>
  <footer>
    <div class="actions footer-component">
      <div class="action" title="お知らせ">
        <md-badge md-content="3">
          <md-button class="md-fab md-plain md-raised">
            <md-icon style="color:#FFAB00">announcement</md-icon>
          </md-button>
        </md-badge>
      </div>
      <div class="action" title="ユーザーブランド">
        <md-button class="md-fab md-plain md-raised">
          <md-icon style="color:#448aff">shopping_basket</md-icon>
        </md-button>
      </div>
      <div class="action" title="ベン図でポン！">
        <md-button class="md-fab md-plain md-raised">
          <md-icon style="color:#448aff">people</md-icon>
        </md-button>
      </div>
      <div class="action" title="マニュアル">
        <md-button class="md-fab md-plain md-raised">
          <font-awesome-icon style="color: rgba(0,0,0,0.54); font-size: 20px;" icon="book-reader"/>
        </md-button>
      </div>
      <div class="action" title="設定">
        <md-button class="md-fab md-plain md-raised">
          <md-icon style="color:rgba(0,0,0,0.54)">settings</md-icon>
        </md-button>
      </div>
    </div>

    <Divider></Divider>

    <div class="summaries footer-component">
      <div style>データ保持期間： 2017年12月01日〜2019年01月13日</div>
    </div>
  </footer>
</template>

<script>
import Divider from "@/components/Divider.vue";

export default {
  components: { Divider }
};
</script>

<style lang="scss" scoped>
footer {
  bottom: 0;
  font-size: var(--font-size-small);
  position: fixed;
  width: 100%;

  .footer-component {
    padding: var(--spacing-large);
    text-align: center;
  }

  .actions {
    display: flex;
    justify-content: center;
  }

  .action {
    margin-left: var(--spacing-small);

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
