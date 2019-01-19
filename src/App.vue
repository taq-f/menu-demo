<template>
  <div id="app">
    <header>
      <md-toolbar md-elevation="0" class="md-transparent">
        <div style="flex: 1;">
          <md-avatar class="md-avatar-icon md-primary">
            <md-icon>person</md-icon>
          </md-avatar>
        </div>
        <md-button class="md-primary">Logout</md-button>
      </md-toolbar>
    </header>

    <main>
      <div class="menu-switch">
        <div class="item" title="履歴">
          <md-button
            :class="{'md-primary': visibleMenus === 'recent'}"
            class="md-icon-button md-dense"
            @click="showRecentMenus"
          >
            <md-icon>history</md-icon>
          </md-button>
        </div>
        <div class="item" title="すべて">
          <md-button
            :class="{'md-primary': visibleMenus === 'all'}"
            class="md-icon-button md-dense"
            @click="showAllMenus"
          >
            <md-icon>menu</md-icon>
          </md-button>
        </div>
        <div class="item" title="お気に入り">
          <md-button
            :class="{'md-primary': visibleMenus === 'favorite'}"
            class="md-icon-button md-dense"
            @click="showFavoriteMenus"
          >
            <md-icon>star</md-icon>
          </md-button>
        </div>
        <div class="item" title="人気">
          <md-button
            :class="{'md-primary': visibleMenus === 'popular'}"
            class="md-icon-button md-dense"
            @click="showPopularMenus"
          >
            <md-icon>favorite</md-icon>
          </md-button>
        </div>
      </div>
      <div>
        <transition-group name="menu-transition" tag="div" class="menus">
          <div class="menu-container" v-for="menu in menus" :key="menu.id">
            <Menu :menu="menu" @toggleStar="toggleStar"></Menu>
          </div>
        </transition-group>
      </div>
    </main>

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
            <font-awesome-icon
              style="color: rgba(0,0,0,0.54); font-size: 20px;"
              icon="book-reader"
            />
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
        <div>データ保持期間： 2017年12月01日〜2019年01月13日</div>
      </div>
    </footer>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Divider from "@/components/Divider.vue";
import MENUS from "@/menus.js";
import ACCOUNTS from "@/accounts.js";

export default {
  components: {
    Menu,
    Divider
  },
  name: "app",
  data() {
    return {
      menus: MENUS,
      accounts: ACCOUNTS,
      visibleMenus: "all",
      scrollElem: document.getElementsByTagName("html")[0]
    };
  },
  methods: {
    showRecentMenus() {
      const indexes = [5, 3, 1, 7, 9];
      this.menus = MENUS.filter((_, i) => indexes.includes(i));
      this.visibleMenus = "recent";
    },
    showAllMenus() {
      this.menus = MENUS;
      this.visibleMenus = "all";
    },
    showFavoriteMenus() {
      this.menus = MENUS.filter(m => m.star);
      this.visibleMenus = "favorite";
    },
    showPopularMenus() {
      this.menus = MENUS.filter(m => m.popular).sort(
        (m1, m2) => m1.popular - m2.popular
      );
      this.visibleMenus = "popular";
    },
    toggleStar(menu) {
      menu.star = !menu.star;
      if (this.visibleMenus === "favorite") {
        this.showFavoriteMenus();
      }
    }
  },
  created() {
    window.addEventListener("mousewheel", e => {
      this.scrollElem.scrollLeft += e.deltaY;
    });
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP&subset=japanese");

html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  font-family: "Noto Sans JP", sans-serif;
  color: rgba(0, 0, 0, 0.8);
}

body {
  overflow-x: scroll;
}

#app {
  height: calc(100% - 100px);
  display: flex;
  align-items: center;
}
</style>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  .accounts {
    .md-avatar-icon {
      margin-left: 16px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}

main {
  display: flex;
  padding-right: 70px;
  width: max-content;

  .menu-switch {
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .item {
      margin-top: 10px;

      &:first-child {
        margin-top: 0;
      }
    }
  }

  .menus {
    display: flex;

    .menu-container {
      margin-left: 10px;
    }
  }
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;

  .footer-component {
    margin: 20px;
    text-align: center;
  }

  .actions {
    display: flex;
    justify-content: center;
  }

  .action {
    margin-left: 20px;

    &:first-child {
      margin-left: 0;
    }
  }
}

// Menu animation
.menu-container {
  transition: all 0.5s;
}
.menu-transition-enter,
.menu-transition-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.menu-transition-leave-active {
  position: absolute;
}
</style>
