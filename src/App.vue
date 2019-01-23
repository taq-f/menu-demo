<template>
  <div id="app">
    <Header></Header>

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
            <md-icon>trending_up</md-icon>
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

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import MENUS from "@/menus.js";
import ACCOUNTS from "@/accounts.js";

export default {
  components: {
    Header,
    Footer,
    Menu
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
#app {
  height: calc(100% - 100px);
  display: flex;
  align-items: center;
}
</style>

<style lang="scss" scoped>
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
      margin-left: var(--spacing-small);
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
